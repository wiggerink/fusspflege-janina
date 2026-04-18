import type { Metadata } from "next";
import Image from "next/image";
import { Car, Clock, MapPin, Navigation, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/sections/cta-section";
import { BreadcrumbSchema } from "@/components/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio & Anfahrt – Emlichheim, Anne-Frank-Straße 5",
  description:
    "Besuchen Sie das Fußpflege-Studio von Janina Wiggerink in der Anne-Frank-Straße 5 in Emlichheim. Bequeme Anfahrt, kostenlose Parkplätze direkt vor der Tür.",
  alternates: { canonical: `${site.url}/studio` },
};

const galleryImages = [
  "/images/studio.jpg",
  "/images/studio-alt.jpg",
  "/images/spa-detail-1.jpg",
  "/images/spa-detail-2.jpg",
  "/images/spa-treatment-2.jpg",
  "/images/massage-2.jpg",
];

export default function StudioPage() {
  const mapQuery = encodeURIComponent(
    `${site.address.street}, ${site.address.zip} ${site.address.city}`,
  );

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Start", url: "/" },
          { name: "Studio", url: "/studio" },
        ]}
      />
      <PageHero
        eyebrow="Mein Studio"
        title={
          <>
            Ihr{" "}
            <span className="script text-rose-500">Rückzugsort</span> in
            Emlichheim.
          </>
        }
        subtitle="Hell, ruhig und mit Liebe eingerichtet: Mein Studio lädt Sie ein, für einen Moment auszusteigen und einfach zu genießen."
        image="/images/studio.jpg"
        crumbs={[{ label: "Studio" }]}
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-5">So finden Sie mich</p>
            <h2 className="text-charcoal mb-8">
              Bequeme Anfahrt mitten in Emlichheim.
            </h2>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-1">Adresse</h3>
                  <p className="text-charcoal-soft">
                    {site.address.street}
                    <br />
                    {site.address.zip} {site.address.city}
                    <br />
                    {site.address.countryName}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-1">Öffnungszeiten</h3>
                  <ul className="text-charcoal-soft space-y-0.5 text-sm">
                    {site.hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex justify-between gap-8 max-w-[14rem]"
                      >
                        <span>{h.day}</span>
                        <span className="text-charcoal">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted mt-2">
                    Behandlungen nur nach Terminvereinbarung.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  <Car className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-1">Parken</h3>
                  <p className="text-charcoal-soft text-sm">
                    Direkt vor dem Studio stehen kostenlose Parkplätze zur
                    Verfügung. Ihr Auto ist nur wenige Schritte von der
                    Eingangstür entfernt.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                variant="primary"
                size="md"
              >
                <Phone />
                Anrufen
              </Button>
              <Button
                href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
                variant="outline"
                size="md"
                external
              >
                <Navigation />
                Route planen
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.15}>
            <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-[32px] overflow-hidden shadow-card border border-border/60">
              <iframe
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                title={`Karte zu ${site.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ivory">
        <div className="container-page">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-5">Einblicke</p>
            <h2 className="text-charcoal">
              Bilder aus{" "}
              <span className="script text-rose-500">meinem</span> Studio.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((src, i) => (
              <Reveal
                key={src}
                delay={i * 0.05}
                className={
                  i === 0 || i === 3
                    ? "col-span-2 md:col-span-2 row-span-2 md:row-span-2"
                    : ""
                }
              >
                <div
                  className={`relative w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-soft group ${
                    i === 0 || i === 3
                      ? "aspect-[4/3] md:aspect-square"
                      : "aspect-square"
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
