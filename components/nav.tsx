"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-cream/85 backdrop-blur-lg border-b border-border/60 py-3"
            : "bg-transparent py-5",
        )}
      >
        <div className="container-page flex items-center justify-between gap-6">
          <Link href="/" aria-label={site.name} className="flex items-center shrink-0">
            <span className="relative h-12 w-12 md:h-14 md:w-14">
              <Image
                src="/images/logo.png"
                alt={site.name}
                fill
                sizes="56px"
                className="object-contain"
                priority
              />
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10" aria-label="Hauptnavigation">
            {site.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium tracking-wide transition-colors",
                    active
                      ? "text-charcoal"
                      : "text-muted hover:text-charcoal",
                  )}
                >
                  {item.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-rose-400"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              variant="primary"
              size="sm"
              className="hidden md:inline-flex"
            >
              <Phone />
              Termin
            </Button>
            <button
              type="button"
              aria-label="Menü öffnen"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-cream text-charcoal hover:bg-cream-dark transition"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-cream shadow-[0_0_60px_-5px_rgba(0,0,0,0.25)] flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="font-serif text-xl">Menü</span>
                <button
                  type="button"
                  aria-label="Menü schließen"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-cream-dark transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-1" aria-label="Mobile Navigation">
                {site.nav.map((item, i) => {
                  const active = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between py-4 px-4 rounded-2xl text-lg font-serif transition",
                          active
                            ? "bg-rose-100 text-charcoal"
                            : "text-charcoal/80 hover:bg-cream-dark",
                        )}
                      >
                        {item.label}
                        <span className="text-rose-400 text-2xl leading-none">→</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <div className="mt-auto p-6 border-t border-border space-y-3">
                <Button
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  <Phone />
                  {site.phoneDisplay}
                </Button>
                <Button
                  href={`https://wa.me/${site.whatsapp}`}
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  external
                >
                  WhatsApp schreiben
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
