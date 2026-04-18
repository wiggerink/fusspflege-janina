import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Rechtliche Angaben und Anbieterkennzeichnung von Janinas Fußpflege in Emlichheim.",
  alternates: { canonical: `${site.url}/impressum` },
  robots: { index: true, follow: false },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Impressum"
        crumbs={[{ label: "Impressum" }]}
      />
      <section className="pb-24">
        <div className="container-page max-w-3xl prose-spa space-y-8">
          <div>
            <h2 className="font-serif text-2xl mb-3 text-charcoal">
              Angaben gemäß § 5 DDG
            </h2>
            <p>
              {site.owner}
              <br />
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
              <br />
              {site.address.countryName}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3 text-charcoal">Kontakt</h2>
            <p>
              Telefon: <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phoneDisplay}</a>
              <br />
              E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3 text-charcoal">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p>
              Berufsbezeichnung: Zertifizierte Fachfußpflegerin
              <br />
              Zuständige Kammer: Handwerkskammer Osnabrück-Emsland-Grafschaft Bentheim
              <br />
              Verliehen in: Deutschland
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3 text-charcoal">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              {site.owner}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3 text-charcoal">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3 text-charcoal">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen
              zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3 text-charcoal">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

          <p className="text-sm text-muted">
            Stand: {new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long" })}
          </p>
        </div>
      </section>
    </>
  );
}
