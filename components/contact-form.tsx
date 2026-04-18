"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { services } from "@/lib/site";

type FormState = "idle" | "submitting" | "success" | "error";

type Errors = Record<string, string>;

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [generalError, setGeneralError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});
    setGeneralError(null);
    setState("submitting");

    const fd = new FormData(event.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      service: String(fd.get("service") ?? ""),
      message: String(fd.get("message") ?? "").trim(),
      consent: fd.get("consent") === "on",
      honeypot: String(fd.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data.issues?.fieldErrors) {
          const fe: Errors = {};
          for (const [k, v] of Object.entries(data.issues.fieldErrors)) {
            if (Array.isArray(v) && v[0]) fe[k] = String(v[0]);
          }
          setErrors(fe);
        } else {
          setGeneralError(
            data.error ??
              "Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder rufen Sie mich an.",
          );
        }
        setState("error");
        return;
      }
      setState("success");
      (event.target as HTMLFormElement).reset();
    } catch {
      setGeneralError("Verbindungsfehler. Bitte erneut versuchen.");
      setState("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Ihr Name" error={errors.name} required>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Maria Musterfrau"
          />
        </Field>
        <Field label="E-Mail" error={errors.email} required>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="maria@beispiel.de"
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Telefon (optional)" error={errors.phone}>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className={inputClass}
            placeholder="0174 1234567"
          />
        </Field>
        <Field label="Gewünschte Leistung" error={errors.service}>
          <select name="service" className={cn(inputClass, "bg-cream")} defaultValue="">
            <option value="">Bitte wählen …</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Beratung / Sonstiges">Beratung / Sonstiges</option>
          </select>
        </Field>
      </div>

      <Field label="Ihre Nachricht" error={errors.message} required>
        <textarea
          name="message"
          rows={5}
          required
          className={cn(inputClass, "resize-none")}
          placeholder="Erzählen Sie mir gerne, was Sie sich wünschen und wann Sie gerne einen Termin hätten."
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-charcoal-soft">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-5 w-5 rounded border-border accent-rose-500"
        />
        <span>
          Ich habe die{" "}
          <a href="/datenschutz" className="underline underline-offset-2 hover:text-rose-600">
            Datenschutzerklärung
          </a>{" "}
          gelesen und bin mit der Verarbeitung meiner Daten zum Zweck der
          Kontaktaufnahme einverstanden.
        </span>
      </label>
      {errors.consent ? (
        <p className="text-xs text-rose-600 -mt-2">{errors.consent}</p>
      ) : null}

      <AnimatePresence>
        {generalError ? (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl bg-rose-50 border border-rose-200 px-5 py-3 text-sm text-rose-700"
          >
            {generalError}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="pt-2">
        <Button type="submit" size="lg" variant="primary" disabled={state === "submitting"}>
          {state === "submitting" ? (
            <>
              <Loader2 className="animate-spin" />
              Wird gesendet …
            </>
          ) : (
            <>
              <Send />
              Nachricht senden
            </>
          )}
        </Button>
      </div>

      <AnimatePresence>
        {state === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-3xl bg-sage-50 border border-sage-200 p-6 flex gap-4 items-start"
          >
            <CheckCircle2 className="h-7 w-7 text-sage-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif text-lg text-charcoal mb-1">
                Vielen herzlichen Dank!
              </h3>
              <p className="text-sm text-charcoal-soft leading-relaxed">
                Ihre Nachricht ist bei mir angekommen. Ich melde mich so schnell
                wie möglich bei Ihnen – meistens innerhalb eines Werktages.
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </form>
  );
}

const inputClass =
  "w-full h-12 px-4 rounded-2xl border border-border bg-cream placeholder:text-muted-soft text-charcoal focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-200 transition";

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-charcoal mb-2">
        {label}
        {required ? <span className="text-rose-500 ml-0.5">*</span> : null}
      </span>
      {children}
      {error ? (
        <span className="block mt-1.5 text-xs text-rose-600">{error}</span>
      ) : null}
    </label>
  );
}
