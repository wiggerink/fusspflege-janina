import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt & Terminvereinbarung",
  description:
    "Termin für eine kosmetische Fußpflege in Emlichheim anfragen. Telefonisch, per WhatsApp oder bequem über das Kontaktformular.",
  alternates: { canonical: `${site.url}/kontakt` },
};

export default function KontaktPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Start", url: "/" },
          { name: "Kontakt", url: "/kontakt" },
        ]}
      />
      <PageHero
        eyebrow="Kontakt"
        title={
          <>
            Lassen Sie uns{" "}
            <span className="script text-rose-500">reden</span>.
          </>
        }
        subtitle="Ob Terminwunsch oder eine Frage zu meinen Leistungen – ich freue mich über Ihre Nachricht und melde mich zeitnah zurück."
        crumbs={[{ label: "Kontakt" }]}
      />

      <section className="pb-24 md:pb-32">
        <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-8">
              <div className="rounded-3xl bg-cream-dark/60 p-8 border border-border/60">
                <h2 className="font-serif text-2xl text-charcoal mb-6">
                  So erreichen Sie mich
                </h2>
                <ul className="space-y-5">
                  <li className="flex gap-4">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-400 text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-muted mb-1">
                        Anrufen
                      </div>
                      <a
                        href={`tel:${site.phone.replace(/\s/g, "")}`}
                        className="font-serif text-lg text-charcoal hover:text-rose-600 transition"
                      >
                        {site.phoneDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-500 text-white">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-muted mb-1">
                        WhatsApp
                      </div>
                      <a
                        href={`https://wa.me/${site.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif text-lg text-charcoal hover:text-sage-700 transition"
                      >
                        Sofort Nachricht schreiben
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-charcoal text-cream">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-muted mb-1">
                        E-Mail
                      </div>
                      <a
                        href={`mailto:${site.email}`}
                        className="font-serif text-base text-charcoal hover:text-rose-600 transition break-all"
                      >
                        {site.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-muted mb-1">
                        Studio
                      </div>
                      <p className="text-charcoal">
                        {site.address.street}
                        <br />
                        {site.address.zip} {site.address.city}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-muted mb-1">
                        Öffnungszeiten
                      </div>
                      <p className="text-charcoal text-sm">
                        {site.hoursNote}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-rose-100 via-rose-50 to-ivory p-8">
                <h3 className="font-serif text-xl text-charcoal mb-3">
                  Am schnellsten geht&apos;s per Telefon.
                </h3>
                <p className="text-charcoal-soft text-sm leading-relaxed mb-5">
                  Für eine Terminvereinbarung greifen Sie am besten direkt zum
                  Hörer oder schreiben mir bei WhatsApp – so haben wir die
                  passende Zeit schnell gefunden.
                </p>
                <Button
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  variant="primary"
                  size="md"
                >
                  <Phone />
                  Jetzt anrufen
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="rounded-[32px] bg-cream border border-border/60 p-8 md:p-10 shadow-soft relative">
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-2">
                Schreiben Sie mir
              </h2>
              <p className="text-charcoal-soft text-sm mb-8">
                Ich melde mich in der Regel innerhalb eines Werktages zurück.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
