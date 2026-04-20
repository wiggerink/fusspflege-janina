"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="Entspannende Fußpflege im Studio Emlichheim"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-cream/55 to-cream" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/45 to-transparent" />
        <div className="noise-overlay" />
      </div>

      <div className="absolute top-1/4 -right-20 -z-10 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="absolute bottom-10 left-0 -z-10 h-72 w-72 rounded-full bg-sage-200/40 blur-3xl" />

      <div className="container-page relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 rounded-full border border-rose-300/50 bg-cream/80 backdrop-blur px-5 py-2.5 mb-8 shadow-soft"
          >
            <Sparkles className="h-4 w-4 text-rose-500" />
            <span className="text-xs uppercase tracking-[0.22em] text-charcoal/80">
              Zertifizierte Fachfußpflege · Emlichheim
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-charcoal"
          >
            Wohltuende Fußpflege.{" "}
            <span className="block">
              <span className="script text-rose-500 text-[1.1em]">Mit Liebe</span>{" "}
              zum Detail.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-lg md:text-xl text-charcoal-soft max-w-xl leading-relaxed"
          >
            Ein ruhiger Rückzugsort mitten in Emlichheim – für gepflegte Füße,
            zarte Haut und einen Moment nur für Sie. Zertifizierte Behandlungen
            mit den besten Markenprodukten.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href={`tel:${site.phone.replace(/\s/g, "")}`} size="lg" variant="primary">
              <Phone />
              Termin vereinbaren
            </Button>
            <Button href="/leistungen" size="lg" variant="outline">
              Leistungen entdecken
              <ArrowRight />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex gap-0.5 text-rose-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-charcoal/75">
                Beste Bewertungen in der Grafschaft
              </span>
            </div>
            <div className="h-5 w-px bg-charcoal/20" />
            <Link
              href="/ueber-mich"
              className="text-sm text-charcoal/75 hover:text-rose-600 underline underline-offset-4 decoration-rose-300 transition"
            >
              Lernen Sie Janina kennen
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute right-0 top-40 xl:top-48 w-[360px] xl:w-[440px] aspect-[3/4] rounded-[36px] overflow-hidden shadow-elevated"
        >
          <Image
            src="/images/studio.jpg"
            alt="Einblick in das Fußpflege-Studio in Emlichheim"
            fill
            sizes="440px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-6 left-6 right-6 rounded-2xl bg-cream/95 backdrop-blur-sm p-5 shadow-card"
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-sage-400 text-cream inline-flex items-center justify-center">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="font-serif text-base leading-tight">
                  Kosmetische Fußpflege
                </div>
                <div className="text-xs text-muted mt-0.5">
                  ab 35 € · 45 Min. · komplette Wohltat
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
