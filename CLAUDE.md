# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

Run from the `web/` directory with `pnpm` (pnpm-lock.yaml is the source of truth):

```bash
pnpm dev      # Next.js dev server (Turbopack)
pnpm build    # Production build – also runs TypeScript type-check
pnpm start    # Start the production build locally
pnpm lint     # ESLint (next/core-web-vitals preset)
```

There is no test suite in this project. `pnpm build` is the primary verification step before pushing — it fails on type errors.

Port 3000 is the default but often occupied by other local servers; the `fusspflege-dev` launch config in `.claude/launch.json` has `autoPort: true` so previews auto-pick a free port.

## Architecture

### Single source of truth: `lib/site.ts`

Every business-relevant value — phone/WhatsApp/email, address, nav labels, the full `services` array (title, price, duration, image, includes list), `testimonials`, `faqs`, opening-hours note — lives in [`lib/site.ts`](lib/site.ts). Pages, the Footer, the Contact panel, the LocalBusiness and FAQ JSON-LD schemas, and the sitemap all read from it. Content edits should almost always happen there, not in page files.

### App Router layout

- `app/layout.tsx` sets up fonts (Inter, Cormorant Garamond, Dancing Script) as CSS variables, full site metadata (OpenGraph/Twitter/robots), and renders the fixed `Nav` + floating `WhatsappFloat`. `<main>` has **no top padding** — every page adds its own top offset because the nav is a translucent overlay that sits on top of the hero.
- Pages: `/` (Hero + section composition), `/ueber-mich`, `/leistungen`, `/studio`, `/kontakt`, `/impressum`, `/datenschutz`.
- `app/api/contact/route.ts` handles form submissions with `zod` validation, honeypot, and SMTP send via **nodemailer** (see "Contact form" below).
- `app/opengraph-image.tsx` renders a dynamic OG cover in the edge runtime.
- `app/sitemap.ts` and `app/robots.ts` generate SEO files from `site.url` + nav entries.

### Design system (Tailwind v4)

[`app/globals.css`](app/globals.css) uses Tailwind v4's `@theme` block to define the spa palette: **cream / ivory** backgrounds, **rose** as the warm primary, **sage** as the cool accent, **charcoal** for text. Shadows (`shadow-soft`, `shadow-card`, `shadow-elevated`) and radii are tokenised. Never hardcode hex values — use the tokens.

Typography uses three fonts:
- `font-serif` (Cormorant Garamond) for H1/H2/H3
- `font-sans` (Inter) for body
- `font-script` / `.script` class (Dancing Script) for playful accent words in headlines

### Component layering

- `components/nav.tsx` and `components/footer.tsx` — global layout chrome. Nav has a scroll-triggered glass state (`scrolled` boolean via `window.scrollY`) and an animated active pill (`layoutId="nav-active-pill"`) via Framer Motion.
- `components/sections/*` — page sections (hero, services teaser, testimonials, FAQ, CTA, brands, etc.). Each is self-contained and composed into pages.
- `components/ui/*` — reusable primitives: `Button` (CVA polymorphic, renders `button | Link | external a` based on props), `PageHero` (shared header for subpages), `Reveal` (scroll-triggered fade-in wrapper around Framer Motion).
- `components/json-ld.tsx` — exports `LocalBusinessSchema`, `FaqSchema`, `BreadcrumbSchema`. Use these instead of inlining JSON-LD in pages.

### Next.js 16 warning

There is a `CLAUDE.md` → `AGENTS.md` chain that flags this: **this project is on Next.js 16.2 (Turbopack) + React 19**, not Next 14/15 like most training data. Before touching framework APIs (metadata, image, server actions, routing, caching), verify the current API in `node_modules/next/dist/docs/` or via the relevant deprecation notices. `opengraph-image.tsx` uses the edge runtime; the contact route pins `runtime = "nodejs"` for nodemailer.

### Contact form + email

`app/api/contact/route.ts` reads SMTP config from env (`SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASSWORD`, plus optional `CONTACT_FROM` / `CONTACT_TO`). Production uses All-Inkl SMTP — see [`README.md`](README.md) for the Vercel env-var walkthrough. If SMTP vars are missing the route still returns `{ ok: true, delivered: false }` and logs the submission to the console, so dev and preview don't break.

Form validation is Zod on both client (`components/contact-form.tsx` with react-hook-form + `@hookform/resolvers`) and server. The honeypot field (`honeypot`) must remain empty on submit.

### Images

Photos live in `public/images/`. Brand logos (Bähr, Allpresan, Ruck, Peclavus) are in `public/images/brands/`. Always use `next/image` with explicit `sizes` — the site is image-heavy and Vercel bandwidth cost tracks directly with Image Optimization usage.

### WordPress content dump

`_wp_dump/` at the repo root (not inside `web/`) holds the old WordPress upload folder pulled via FTP. Use it as a source for photos and text — don't check individual assets into `public/images/` blindly, pick and optimize the ones we actually display.

## Deployment

Pushing to `main` on GitHub (`wiggerink/fusspflege-janina`) triggers an auto-deploy on Vercel. The production domain is `fusspflege-janina.de` (All-Inkl DNS → Vercel: apex A `76.76.21.21`, `www` CNAME to the project-specific `*.vercel-dns-*.com` target shown in the Vercel dashboard).
