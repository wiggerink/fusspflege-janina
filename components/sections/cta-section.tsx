import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] lg:rounded-[44px] bg-charcoal text-cream shadow-elevated">
            <Image
              src="/images/spa-detail-2.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/30" />
            <div className="relative p-10 md:p-16 lg:p-20 grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="eyebrow text-rose-300 mb-5">
                  Zeit für Ihre Füße
                </p>
                <h2 className="text-cream mb-6 max-w-xl">
                  Gönnen Sie sich eine{" "}
                  <span className="script text-rose-300">Auszeit</span> – ich
                  freue mich auf Sie.
                </h2>
                <p className="text-cream/80 text-lg leading-relaxed max-w-lg">
                  Vereinbaren Sie Ihren persönlichen Wohlfühltermin. Ein Anruf
                  oder eine kurze Nachricht genügt – ich melde mich zeitnah
                  zurück.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-4">
                <Button
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  size="lg"
                  variant="rose"
                  className="w-full justify-between"
                >
                  <span className="inline-flex items-center gap-3">
                    <Phone />
                    Jetzt anrufen
                  </span>
                  <span className="font-serif text-base">
                    {site.phoneDisplay}
                  </span>
                </Button>
                <Button
                  href={`https://wa.me/${site.whatsapp}`}
                  size="lg"
                  variant="secondary"
                  className="w-full justify-between bg-cream text-charcoal hover:bg-cream-dark"
                  external
                >
                  <span className="inline-flex items-center gap-3">
                    <MessageCircle />
                    WhatsApp schreiben
                  </span>
                  <span className="text-muted">→</span>
                </Button>
                <p className="text-xs text-cream/60 text-center mt-2">
                  Oder schicken Sie mir eine Nachricht über das{" "}
                  <a
                    href="/kontakt"
                    className="underline underline-offset-4 decoration-rose-300 hover:text-rose-300"
                  >
                    Kontaktformular
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
