import type { Metadata } from "next";
import Image from "next/image";
import { Check, Clock, Euro, Info } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema } from "@/components/json-ld";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leistungen & Preise – Kosmetische Fußpflege in Emlichheim",
  description:
    "Alle Fußpflege-Behandlungen im Überblick: kosmetische Fußpflege ab 35 €, Hornhautentfernung, Hühneraugen-Behandlung, Fußmassage und mehr. Transparente Preise, zertifizierte Qualität.",
  alternates: { canonical: `${site.url}/leistungen` },
};

export default function LeistungenPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Start", url: "/" },
          { name: "Leistungen", url: "/leistungen" },
        ]}
      />
      <PageHero
        eyebrow="Leistungen & Preise"
        title={
          <>
            Behandlungen für{" "}
            <span className="script text-rose-500">gesunde</span> & schöne Füße.
          </>
        }
        subtitle="Jede meiner Behandlungen wird liebevoll auf Sie abgestimmt. Transparente Preise, ehrliche Beratung, spürbare Ergebnisse – ohne versteckte Kosten."
        image="/images/spa-detail-4.jpg"
        crumbs={[{ label: "Leistungen" }]}
      />

      <section className="py-12 md:py-16">
        <div className="container-page space-y-20 md:space-y-28">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center scroll-mt-32"
            >
              <Reveal
                className={`lg:col-span-5 ${
                  i % 2 === 0 ? "" : "lg:order-2"
                }`}
              >
                <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-card">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <div className={`lg:col-span-7 ${i % 2 === 0 ? "" : "lg:order-1"}`}>
                <Reveal>
                  <p className="eyebrow mb-4">{s.tagline}</p>
                  <h2 className="text-charcoal mb-5">{s.title}</h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="prose-spa max-w-xl mb-7">{s.description}</p>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8 max-w-lg">
                    <div className="flex items-center gap-3 rounded-2xl bg-cream-dark/70 px-5 py-4 border border-border/60">
                      <Euro className="h-5 w-5 text-rose-500 shrink-0" />
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
                          Preis
                        </div>
                        <div className="font-serif text-lg text-charcoal leading-tight">
                          {s.price}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl bg-cream-dark/70 px-5 py-4 border border-border/60">
                      <Clock className="h-5 w-5 text-sage-600 shrink-0" />
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.18em] text-muted">
                          Dauer
                        </div>
                        <div className="font-serif text-lg text-charcoal leading-tight">
                          {s.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="mb-8">
                    <p className="font-serif text-lg text-charcoal mb-4">
                      Inklusive:
                    </p>
                    <ul className="space-y-2.5">
                      {s.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-charcoal-soft">
                          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sage-100 text-sage-700 mt-0.5 shrink-0">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={0.25}>
                  <Button
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    variant={s.featured ? "primary" : "outline"}
                    size="md"
                  >
                    Termin für {s.title} anfragen
                  </Button>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-page">
          <Reveal className="max-w-3xl mx-auto text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 mb-6">
              <Info className="h-6 w-6" />
            </div>
            <h2 className="text-charcoal mb-5">
              Wichtig zu wissen
            </h2>
            <div className="prose-spa space-y-4">
              <p>
                Alle Behandlungen finden <strong>ausschließlich nach Terminvereinbarung</strong>{" "}
                statt. Bitte denken Sie daran, nicht rechtzeitig absagbare Termine
                können mit 50 % in Rechnung gestellt werden – so habe ich die
                Möglichkeit, den Platz anderweitig anzubieten.
              </p>
              <p>
                Sie haben ein besonderes Anliegen oder eine Frage vorab? Rufen
                Sie mich gerne an – ich berate Sie unverbindlich und ehrlich.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
