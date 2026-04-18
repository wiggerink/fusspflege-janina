import { CalendarCheck, Sparkles, Leaf, HeartHandshake } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

const steps = [
  {
    icon: CalendarCheck,
    title: "Termin vereinbaren",
    text: "Ein Anruf, eine WhatsApp-Nachricht oder das Formular genügen – wir finden gemeinsam den passenden Termin für Sie.",
  },
  {
    icon: HeartHandshake,
    title: "Ankommen & Entspannen",
    text: "In meinem Studio empfange ich Sie mit einer Tasse Tee und viel Zeit. Hier dürfen Sie einfach Sie selbst sein.",
  },
  {
    icon: Sparkles,
    title: "Individuelle Behandlung",
    text: "Ich höre zu, schaue mir Ihre Füße an und erstelle ein Behandlungsprogramm, das genau zu Ihnen passt.",
  },
  {
    icon: Leaf,
    title: "Leicht & Erfüllt nach Hause",
    text: "Mit gepflegten Füßen, einem Lächeln und sanften Pflegetipps für zuhause verabschiede ich Sie – bis zum nächsten Mal.",
  },
];

export function Process() {
  return (
    <section className="py-24 md:py-32 bg-sage-50/80 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-rose-100 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-sage-200 blur-3xl" />
      </div>
      <div className="container-page relative">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow mb-5">So läuft es ab</p>
          <h2 className="text-charcoal">
            Vier Schritte zu{" "}
            <span className="script text-rose-500">wunderbar</span> gepflegten
            Füßen.
          </h2>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="relative h-full p-8 rounded-3xl bg-cream border border-border/60 hover:shadow-soft transition">
                <div className="absolute -top-5 left-8 inline-flex items-center justify-center h-11 w-11 rounded-full bg-rose-400 text-cream font-serif text-lg shadow-soft">
                  {i + 1}
                </div>
                <step.icon className="h-8 w-8 text-sage-600 mb-5" />
                <h3 className="font-serif text-xl mb-3 text-charcoal">
                  {step.title}
                </h3>
                <p className="text-charcoal-soft leading-relaxed text-sm">
                  {step.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
