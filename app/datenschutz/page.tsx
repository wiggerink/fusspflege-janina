import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung von Janinas Fußpflege – transparente Informationen zum Umgang mit Ihren Daten.",
  alternates: { canonical: `${site.url}/datenschutz` },
  robots: { index: true, follow: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutzerklärung"
        subtitle="Ihre Daten sind bei mir in guten Händen – genau wie Ihre Füße. Hier erfahren Sie transparent, welche Daten ich warum verarbeite."
        crumbs={[{ label: "Datenschutz" }]}
      />
      <section className="pb-24">
        <div className="container-page max-w-3xl prose-spa space-y-8">
          <div>
            <h2 className="font-serif text-2xl mb-3 text-charcoal">
              1. Verantwortliche Stelle
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              {site.owner}
              <br />
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city}
              <br />
              Telefon: {site.phoneDisplay}
              <br />
              E-Mail: {site.email}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3 text-charcoal">
              2. Allgemeine Hinweise
            </h2>
            <p>
              Die Nutzung dieser Website ist grundsätzlich ohne Angabe
              personenbezogener Daten möglich. Soweit auf meinen Seiten
              personenbezogene Daten (beispielsweise Name, Anschrift oder
              E-Mail-Adressen) erhoben werden, erfolgt dies stets auf freiwilliger
              Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht
              an Dritte weitergegeben.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3 text-charcoal">
              3. Hosting
            </h2>
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf werden
              technische Zugriffsdaten (IP-Adresse, Zeitpunkt, User-Agent)
              verarbeitet, um die Auslieferung der Website und deren Sicherheit
              zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an einem stabilen Webauftritt).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3 text-charcoal">
              4. Kontaktaufnahme
            </h2>
            <p>
              Wenn Sie mir per Kontaktformular, E-Mail, Telefon oder WhatsApp
              eine Anfrage zukommen lassen, werden Ihre Angaben inklusive der
              von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
              und für den Fall von Anschlussfragen bei mir gespeichert.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)
              bzw. lit. f DSGVO (berechtigtes Interesse).
            </p>
            <p>
              Die von Ihnen übermittelten Daten werden ausschließlich zur
              Bearbeitung Ihres Anliegens verwendet. Eine Weitergabe an Dritte
              erfolgt nicht. Zur Zustellung der Formular-Nachrichten nutze ich
              den Dienstleister Resend (Resend Inc., 2261 Market Street, San
              Francisco, CA).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3 text-charcoal">
              5. Google Maps
            </h2>
            <p>
              Auf der Studio-Seite ist eine Karte des Dienstes Google Maps
              (Google Ireland Limited) eingebunden. Beim Aufruf der Seite
              werden Daten an Google übermittelt. Weitere Informationen finden
              Sie in der{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Datenschutzerklärung von Google
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3 text-charcoal">
              6. Cookies
            </h2>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige
              Cookies, die für den Betrieb der Website erforderlich sind. Es
              erfolgt kein Tracking und keine Analyse des Nutzerverhaltens.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl mb-3 text-charcoal">
              7. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten
              personenbezogenen Daten, deren Herkunft und Empfänger sowie den
              Zweck der Datenverarbeitung. Weiterhin steht Ihnen ein Recht auf
              Berichtigung, Sperrung oder Löschung dieser Daten zu. Hierzu sowie
              zu weiteren Fragen zum Thema personenbezogene Daten können Sie
              sich jederzeit unter den im Impressum angegebenen Kontaktdaten an
              mich wenden.
            </p>
            <p>
              Außerdem haben Sie das Recht, sich bei einer
              Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig für mich ist
              die Landesbeauftragte für den Datenschutz Niedersachsen.
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
