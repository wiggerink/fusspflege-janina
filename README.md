# Janinas Fußpflege

Moderne Website für die kosmetische Fußpflege von Janina Wiggerink in Emlichheim. Ersetzt die bisherige WordPress-Seite unter `fusspflege-janina.de`.

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** mit Spa-Design-System (Creme, Rosé, Salbei)
- **Framer Motion 12** für feine Scroll- & Hover-Animationen
- **Nodemailer / SMTP** (All-Inkl) für das Kontaktformular
- **Vercel** für Deployment & Edge-optimierte Bilder

## Entwicklung

```bash
pnpm install
pnpm dev
```

Die App läuft unter [http://localhost:3000](http://localhost:3000).

### Umgebungsvariablen

Kopiere `.env.example` nach `.env.local` und setze die Werte:

| Variable        | Zweck                                                                |
| --------------- | -------------------------------------------------------------------- |
| `SMTP_HOST`     | z. B. `w013dae9.kasserver.com` (All-Inkl KAS → Post → Mail-Adresse)  |
| `SMTP_PORT`     | `465` (SSL, empfohlen) oder `587` (STARTTLS)                         |
| `SMTP_SECURE`   | `true` bei Port 465, `false` bei 587                                 |
| `SMTP_USER`     | Vollständige Mail-Adresse, z. B. `kontakt@fusspflege-janina.de`      |
| `SMTP_PASSWORD` | Mailbox-Passwort (nicht das KAS-Login)                               |
| `CONTACT_FROM`  | Optional: Absender, z. B. `"Janinas Fußpflege <kontakt@…>"`          |
| `CONTACT_TO`    | Optional: Ziel-Mailadresse (Fallback: `site.email`)                  |

Fehlen SMTP-Zugangsdaten, bleibt das Kontaktformular funktionsfähig – Eingänge werden dann nur in der Server-Konsole geloggt.

### Setup bei All-Inkl

1. Im [KAS](https://kas.all-inkl.com) unter _E-Mail → Neue E-Mail-Adresse_ eine Mailbox anlegen (z. B. `kontakt@fusspflege-janina.de`) und Passwort setzen.
2. SMTP-Host ist der technische Server-Name des Pakets (z. B. `w0XXXXXX.kasserver.com`), zu finden unter _Konfiguration → Paket-Info_.
3. Port **465** mit SSL (`SMTP_SECURE=true`) bevorzugen.

### Vercel

Die Variablen im Projekt unter _Settings → Environment Variables_ für **Production + Preview** hinterlegen und anschließend ein Redeploy auslösen. Per CLI:

```bash
vercel env add SMTP_HOST production
vercel env add SMTP_PORT production
vercel env add SMTP_SECURE production
vercel env add SMTP_USER production
vercel env add SMTP_PASSWORD production
vercel env add CONTACT_FROM production
vercel env add CONTACT_TO production
vercel --prod
```

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
