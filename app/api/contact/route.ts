import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().min(2, "Bitte Namen angeben").max(80),
  email: z.string().email("Bitte gültige E-Mail"),
  phone: z.string().max(40).optional(),
  service: z.string().max(80).optional(),
  message: z.string().min(10, "Nachricht bitte etwas ausführlicher").max(2000),
  consent: z.literal(true, {
    message: "Bitte der Datenschutzerklärung zustimmen",
  }),
  honeypot: z.string().max(0).optional(),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validierung fehlgeschlagen", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const { name, email, phone, service, message } = parsed.data;

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    console.warn("[contact] SMTP config missing – logging submission", {
      name, email, phone, service, message,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const port = Number(process.env.SMTP_PORT ?? 465);
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === "true"
    : port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const from = process.env.CONTACT_FROM ?? `Kontaktformular <${user}>`;
  const to = process.env.CONTACT_TO ?? site.email;

  const textBody = `Name: ${name}
E-Mail: ${email}
Telefon: ${phone ?? "-"}
Gewünschte Leistung: ${service ?? "-"}

Nachricht:
${message}
`;

  const htmlBody = `
    <div style="font-family: ui-sans-serif, system-ui, sans-serif; line-height: 1.6; color: #1e1714;">
      <h2 style="margin:0 0 16px;">Neue Terminanfrage</h2>
      <table style="border-collapse: collapse;">
        <tr><td style="padding:4px 16px 4px 0; color:#7a6f67;">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:4px 16px 4px 0; color:#7a6f67;">E-Mail</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:4px 16px 4px 0; color:#7a6f67;">Telefon</td><td>${escapeHtml(phone ?? "-")}</td></tr>
        <tr><td style="padding:4px 16px 4px 0; color:#7a6f67;">Leistung</td><td>${escapeHtml(service ?? "-")}</td></tr>
      </table>
      <h3 style="margin:24px 0 8px;">Nachricht</h3>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Neue Terminanfrage von ${name}`,
      text: textBody,
      html: htmlBody,
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json(
      { error: "E-Mail-Versand fehlgeschlagen" },
      { status: 502 },
    );
  }
}
