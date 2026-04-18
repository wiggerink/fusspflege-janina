# Janinas Fußpflege

Moderne Website für die kosmetische Fußpflege von Janina Wiggerink in Emlichheim. Ersetzt die bisherige WordPress-Seite unter `fusspflege-janina.de`.

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** mit Spa-Design-System (Creme, Rosé, Salbei)
- **Framer Motion 12** für feine Scroll- & Hover-Animationen
- **Resend** für das Kontaktformular
- **Vercel** für Deployment & Edge-optimierte Bilder

## Entwicklung

```bash
pnpm install
pnpm dev
```

Die App läuft unter [http://localhost:3000](http://localhost:3000).

### Umgebungsvariablen

Kopiere `.env.example` nach `.env.local` und setze die Werte:

| Variable         | Zweck                                                             |
| ---------------- | ----------------------------------------------------------------- |
| `RESEND_API_KEY` | API-Key für den E-Mail-Versand über Resend.                       |
| `CONTACT_FROM`   | Optional: verifizierter Absender (z. B. `kontakt@…`).             |
| `CONTACT_TO`     | Optional: Ziel-Mailadresse für Kontaktformular-Nachrichten.       |

Ohne `RESEND_API_KEY` bleibt das Kontaktformular funktionsfähig – Eingänge werden dann in der Server-Konsole geloggt.

## Projektstruktur

```
app/                    App-Router Pages & Route-Handler
  (layout, page, ueber-mich, leistungen, studio, kontakt, impressum, datenschutz)
  api/contact/          POST-Route für Kontaktformular
  sitemap.ts, robots.ts Automatisch generierte SEO-Dateien
  opengraph-image.tsx   Dynamisches OG-Cover (Edge Runtime)
components/             UI-, Section- und Layout-Komponenten
lib/site.ts             Zentrale Quelle für Geschäftsdaten, Leistungen, FAQ
public/images/          Foto-Assets (aus der bisherigen WP-Seite)
```

Alle business-relevanten Texte, Preise und Kontaktdaten liegen in [`lib/site.ts`](lib/site.ts). Änderungen dort wirken automatisch auf der Seite, im LocalBusiness-Schema, im Footer und im Kontakt-Panel.

## Deployment

Für Vercel optimiert:

1. Repository auf GitHub anlegen.
2. In Vercel importieren – Framework wird automatisch erkannt.
3. Environment-Variablen setzen (`RESEND_API_KEY`, `CONTACT_TO`).
4. Produktions-Domain (`fusspflege-janina.de`) hinzufügen.

Build lokal testen:

```bash
pnpm build
```
