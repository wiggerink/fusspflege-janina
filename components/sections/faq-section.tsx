"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { faqs } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-5">Häufige Fragen</p>
            <h2 className="text-charcoal mb-6">
              Antworten auf Ihre{" "}
              <span className="script text-rose-500">Fragen</span>.
            </h2>
            <p className="prose-spa">
              Hier finden Sie die Fragen, die mir am häufigsten gestellt werden.
              Ist Ihre Frage nicht dabei? Rufen Sie mich gerne an – ich berate
              Sie persönlich.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="divide-y divide-border/70 border-y border-border/70">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div key={faq.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left group"
                    >
                      <span className="font-serif text-lg md:text-xl text-charcoal group-hover:text-rose-700 transition">
                        {faq.q}
                      </span>
                      <span
                        className={cn(
                          "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition",
                          isOpen
                            ? "bg-rose-400 text-white border-rose-400 rotate-45"
                            : "bg-cream text-charcoal group-hover:border-rose-400",
                        )}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pr-14 text-charcoal-soft leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
