import { ArrowRight, Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function AboutTeaser() {
  return (
    <section className="relative py-24 md:py-32 bg-ivory overflow-hidden">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-rose-100/60 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-sage-100/80 blur-3xl" />
      <div className="container-page relative max-w-3xl mx-auto text-center">
        <Reveal>
          <div className="inline-flex items-center gap-3 rounded-2xl bg-cream px-5 py-4 shadow-card max-w-md mx-auto mb-10">
            <Quote className="h-7 w-7 text-rose-400 shrink-0" />
            <p className="text-sm italic text-charcoal/80 leading-snug text-left">
              &bdquo;Ihre Füße tragen Sie durchs Leben – sie verdienen das
              Beste.&ldquo;
            </p>
          </div>
        </Reveal>

        <div className="text-left max-w-2xl mx-auto">
          <Reveal>
            <p className="eyebrow mb-5">Über mich</p>
            <h2 className="text-charcoal mb-7">
              Ein{" "}
              <span className="script text-rose-500">herzliches</span>{" "}
              Willkommen von Janina.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="prose-spa space-y-5">
              <p>
                Mein Name ist <strong>Janina Wiggerink</strong> und die Fußpflege
                ist für mich nicht nur Beruf – sie ist meine Leidenschaft. In
                meinem Studio in Emlichheim nehme ich mir bewusst Zeit für jeden
                Gast: für Ihre Geschichten, Ihre Wünsche und natürlich Ihre Füße.
              </p>
              <p>
                Als <strong>zertifizierte Fachfußpflegerin</strong> arbeite ich
                ausschließlich mit hochwertigen Markenprodukten von Bähr,
                Allpresan, Ruck und Peclavus – für Ergebnisse, die Sie nicht nur
                sehen, sondern vor allem fühlen.
              </p>
              <p>
                Ob klassische kosmetische Fußpflege, sanfte Hornhautentfernung
                oder liebevolle Nagelpflege: Bei mir dürfen Sie einfach
                ankommen und sich fallen lassen.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <Button href="/ueber-mich" variant="sage" size="lg">
                Meine Geschichte lesen
                <ArrowRight />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
