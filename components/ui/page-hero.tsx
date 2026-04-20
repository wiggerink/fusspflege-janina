import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  crumbs = [],
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  image?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden">
      {image ? (
        <div className="absolute inset-0 -z-10">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-cream/75 to-cream" />
        </div>
      ) : (
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ivory to-cream" />
      )}

      <div className="absolute -top-20 -right-20 -z-10 h-96 w-96 rounded-full bg-rose-100/50 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 -z-10 h-80 w-80 rounded-full bg-sage-100/60 blur-3xl" />

      <div className="container-page pt-32 md:pt-40 lg:pt-44 pb-14 md:pb-20 relative">
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-muted mb-8"
          >
            <Link href="/" className="hover:text-rose-600 transition">
              Start
            </Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" />
                {c.href ? (
                  <Link href={c.href} className="hover:text-rose-600 transition">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-charcoal">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        </Reveal>
        <div className="max-w-3xl">
          {eyebrow ? (
            <Reveal>
              <p className="eyebrow mb-5">{eyebrow}</p>
            </Reveal>
          ) : null}
          <Reveal delay={0.05}>
            <h1 className="text-charcoal">{title}</h1>
          </Reveal>
          {subtitle ? (
            <Reveal delay={0.15}>
              <p className="mt-7 text-lg md:text-xl text-charcoal-soft leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
