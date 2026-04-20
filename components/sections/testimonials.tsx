"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-5">Stimmen meiner Gäste</p>
          <h2 className="text-charcoal mb-5">
            Was{" "}
            <span className="script text-rose-500">wunderbare</span> Menschen
            über mich sagen.
          </h2>
          <p className="prose-spa">
            Es sind die Rückmeldungen meiner Gäste, die mir jeden Tag zeigen,
            dass ich das Richtige tue.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl bg-cream-dark/60 border border-border/60 p-8 lg:p-10 hover:bg-cream-dark transition"
            >
              <div
                aria-hidden
                className="absolute top-6 right-8 text-rose-300/60 font-serif text-[5rem] leading-none select-none"
              >
                &rdquo;
              </div>
              <div className="flex gap-0.5 text-rose-500 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-charcoal-soft text-lg leading-relaxed relative">
                &bdquo;{t.text}&ldquo;
              </p>
              <footer className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-rose-200 inline-flex items-center justify-center font-serif text-lg text-rose-700">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic font-medium text-charcoal block">
                    {t.name}
                  </cite>
                  {t.location ? (
                    <span className="text-xs text-muted uppercase tracking-wider">
                      aus {t.location}
                    </span>
                  ) : null}
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
