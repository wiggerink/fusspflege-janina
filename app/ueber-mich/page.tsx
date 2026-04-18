import type { Metadata } from "next";
import Image from "next/image";
import { Award, Heart, Leaf, ShieldCheck, Sparkles, Users } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { CtaSection } from "@/components/sections/cta-section";
import { BreadcrumbSchema } from "@/components/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über mich – Janina Wiggerink",
  description:
    "Lernen Sie Janina Wiggerink kennen – zertifizierte Fachfußpflegerin aus Emlichheim. Mit Herz, Handwerk und Liebe zum Detail.",
  alternates: { canonical: `${site.url}/ueber-mich` },
};

const values = [
  {
    icon: Heart,
    title: "Zeit für jeden Gast",
    text: "Keine Akkord-Termine. Ich nehme mir bewusst eine ganze Stunde pro Behandlung – für ehrliche Gespräche und ein entspanntes Gefühl.",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene auf höchstem Niveau",
    text: "Alle Instrumente werden zwischen den Behandlungen sorgfältig gereinigt und desinfiziert. Ihre Gesundheit steht an erster Stelle.",
  },
  {
    icon: Sparkles,
    title: "Premium-Produkte",
    text: "Ich arbeite ausschließlich mit zertifizierten Marken wie Bähr, Allpresan, Ruck und Peclavus – für spürbar bessere Ergebnisse.",
  },
  {
    icon: Award,
    title: "Fundierte Ausbildung",
    text: "Als zertifizierte Fachfußpflegerin bilde ich mich regelmäßig weiter. Neue Techniken und Produkte fließen direkt in meine Arbeit ein.",
  },
  {
    icon: Leaf,
    title: "Nachhaltig & Achtsam",
    text: "Bewusster Umgang mit Ressourcen, nachhaltige Produktauswahl und ein Studio zum Wohlfühlen – weil das Ganze zählt.",
  },
  {
    icon: Users,
    title: "Für alle Generationen",
    text: "Von der jungen Kundin bis zum Senior: In meinem Studio fühlen sich alle willkommen. Frauen, Männer, Kinder – jeder Fuß ist gleich viel wert.",
  },
];

export default function UeberMichPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Start", url: "/" },
          { name: "Über mich", url: "/ueber-mich" },
        ]}
      />
      <PageHero
        eyebrow="Über mich"
        title={
          <>
            Herzlich willkommen – ich bin{" "}
            <span className="script text-rose-500">Janina</span>.
          </>
        }
        subtitle="Fußpflegerin aus Leidenschaft, Genießerin schöner Momente und überzeugt davon, dass gepflegte Füße ein Stück Lebensqualität sind."
        image="/images/spa-detail-2.jpg"
        crumbs={[{ label: "Über mich" }]}
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-elevated">
              <Image
                src="/images/janina-portrait.jpg"
                alt="Janina Wiggerink, Inhaberin von Janinas Fußpflege"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-5">Meine Geschichte</p>
              <h2 className="text-charcoal mb-8">
                Warum ich{" "}
                <span className="script text-rose-500">Fußpflegerin</span>{" "}
                geworden bin.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="prose-spa space-y-6 max-w-xl">
                <p>
                  Schon früh habe ich gemerkt, wie erfüllend es ist, anderen mit
                  meinen Händen etwas Gutes zu tun. Nach meiner{" "}
                  <strong>zertifizierten Ausbildung zur Fachfußpflegerin</strong>{" "}
                  war für mich klar: Ich möchte einen Ort schaffen, an dem sich
                  Menschen nicht behandelt, sondern{" "}
                  <em>verwöhnt</em> fühlen.
                </p>
                <p>
                  2023 habe ich mir genau diesen Traum erfüllt und mein Studio in
                  der Anne-Frank-Straße in Emlichheim eröffnet. Ein ruhiger,
                  heller Raum, ganz auf Entspannung ausgelegt – ohne Hektik, ohne
                  Zeitdruck. Nur Sie, Ihre Füße und ich.
                </p>
                <p>
                  Besonders wichtig ist mir, dass Sie sich{" "}
                  <strong>bei mir rundum wohlfühlen</strong>. Ich höre genau hin,
                  wenn Sie von Ihren Beschwerden erzählen, schaue mir Ihre Füße
                  individuell an und passe die Behandlung exakt an Ihre
                  Bedürfnisse an. Denn gute Fußpflege ist nie von der Stange.
                </p>
                <p>
                  Neben der klassischen kosmetischen Fußpflege liebe ich es
                  besonders, Fußmassagen zu geben. Sie verbinden Pflege mit
                  echter Entspannung – ein kleiner Kurzurlaub mitten im Alltag.
                </p>
                <p className="font-serif text-2xl text-rose-600 italic pt-4">
                  Ich freue mich darauf, Sie kennenzulernen.
                </p>
                <p className="script text-4xl text-rose-500">Ihre Janina</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-sage-50/80">
        <div className="container-page">
          <Reveal className="max-w-2xl mb-14">
            <p className="eyebrow mb-5">Meine Werte</p>
            <h2 className="text-charcoal">
              Was mein Studio{" "}
              <span className="script text-rose-500">besonders</span> macht.
            </h2>
          </Reveal>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full p-8 rounded-3xl bg-cream border border-border/60 hover:shadow-soft hover:-translate-y-0.5 transition">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 mb-5">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl mb-3 text-charcoal">
                    {v.title}
                  </h3>
                  <p className="text-charcoal-soft leading-relaxed text-sm">
                    {v.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
