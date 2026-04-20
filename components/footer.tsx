import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 bg-charcoal text-cream overflow-hidden">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-rose-400/60 to-transparent" />
      <div className="container-page py-20 lg:py-24 grid gap-14 lg:grid-cols-4 lg:gap-10">
        <div className="lg:col-span-2 max-w-md">
          <Link href="/" aria-label={site.name} className="inline-flex items-center mb-6">
            <span className="relative h-28 w-28 md:h-32 md:w-32">
              <Image
                src="/images/logo.png"
                alt={site.name}
                fill
                sizes="128px"
                className="object-contain invert-[0.02]"
              />
            </span>
          </Link>
          <p className="text-cream/75 leading-relaxed">
            Ihr Rückzugsort für zertifizierte kosmetische Fußpflege mitten in der
            Grafschaft Bentheim. Mit Liebe zum Detail, hochwertigen Produkten und
            viel Zeit für Sie.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-5 text-cream">Navigation</h4>
          <ul className="space-y-3 text-sm text-cream/75">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-rose-300 transition">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/leistungen" className="hover:text-rose-300 transition">
                Preise & Leistungen
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-5 text-cream">Kontakt</h4>
          <ul className="space-y-4 text-sm text-cream/75">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-rose-300" />
              <span>
                {site.address.street}
                <br />
                {site.address.zip} {site.address.city}
              </span>
            </li>
            <li>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex gap-3 hover:text-rose-300 transition"
              >
                <Phone className="h-5 w-5 shrink-0 text-rose-300" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex gap-3 hover:text-rose-300 transition break-all"
              >
                <Mail className="h-5 w-5 shrink-0 text-rose-300" />
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-5 w-5 shrink-0 text-rose-300" />
              <span>{site.hoursNote}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/55">
          <p>© {year} Janinas Fußpflege · {site.owner}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/impressum" className="hover:text-rose-300 transition">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-rose-300 transition">
              Datenschutz
            </Link>
            <span aria-hidden className="hidden md:inline text-cream/25">·</span>
            <span>
              Erstellt von{" "}
              <a
                href="https://www.web-n-search.de"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-300 transition underline underline-offset-2 decoration-cream/30"
              >
                Web &amp; Search
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
