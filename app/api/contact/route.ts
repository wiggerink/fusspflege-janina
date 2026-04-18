import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { site } from "@/lib/site";

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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY missing – logging submission", {
      name, email, phone, service, message,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: process.env.CONTACT_FROM ?? `Kontaktformular <onboarding@resend.dev>`,
      to: process.env.CONTACT_TO ?? site.email,
      replyTo: email,
      subject: `Neue Terminanfrage von ${name}`,
      text: `Name: ${name}
E-Mail: ${email}
Telefon: ${phone ?? "-"}
Gewünschte Leistung: ${service ?? "-"}

Nachricht:
${message}
`,
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
