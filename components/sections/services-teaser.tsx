import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { services } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function ServicesTeaser() {
  const featured = services.slice(0, 3);
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow mb-5">Leistungen</p>
            <h2 className="text-charcoal max-w-xl">
              Behandlungen, die{" "}
              <span className="script text-rose-500">sich anfühlen</span> wie ein
              Kurzurlaub.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.15}>
            <p className="prose-spa max-w-md">
              Jede Behandlung wird individuell auf Sie abgestimmt – mit viel
              Ruhe, ausgesuchten Produkten und dem sicheren Gefühl, in guten
              Händen zu sein.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                href={`/leistungen#${s.slug}`}
                className="group block relative h-full overflow-hidden rounded-3xl bg-cream-dark/50 hover:bg-cream-dark transition shadow-soft hover:shadow-card"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
                  <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-cream/95 backdrop-blur-sm px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-charcoal">
                    {s.price}
                  </span>
                  <span className="absolute top-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/95 backdrop-blur-sm text-charcoal group-hover:bg-rose-400 group-hover:text-white transition">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                  <div className="absolute bottom-6 left-6 right-6 text-cream">
                    <p className="text-xs uppercase tracking-[0.22em] text-rose-200 mb-1.5">
                      {s.tagline}
                    </p>
                    <h3 className="font-serif text-2xl lg:text-3xl leading-tight">
                      {s.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12 flex justify-center" delay={0.2}>
          <Button href="/leistungen" variant="outline" size="lg">
            Alle Behandlungen & Preise
            <ArrowUpRight />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
