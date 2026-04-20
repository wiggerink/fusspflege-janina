import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.75c0-.93.26-1.56 1.6-1.56h1.7V3.33c-.3-.04-1.31-.13-2.49-.13-2.47 0-4.16 1.5-4.16 4.27V9.8H7.5V13h2.65v8h3.35Z" />
    </svg>
  );
}
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
          <div className="flex gap-3 mt-8">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 hover:bg-rose-400 hover:text-white transition"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 hover:bg-rose-400 hover:text-white transition"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
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
              <span>
                Di – Fr: 09 – 18 Uhr
                <br />
                Sa: Nach Vereinbarung
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/55">
          <p>© {year} Janinas Fußpflege · {site.owner}</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-rose-300 transition">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-rose-300 transition">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
