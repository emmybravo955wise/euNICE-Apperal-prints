# AGENTS.md

This document describes the project for developers and AI agents working on this codebase.

## Project Overview

Marketing website for **euNICE Apparel & Branding**, a custom printing and branding business
(t-shirts, caps, mugs, flasks, pens, hand fans, frames, and other promotional items). It is a
single-page site with anchor-linked sections (Home, About Us, Services, Gallery, Contact) built
with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility classes + CSS custom properties for the gold/black/white theme) |
| Icons | lucide-react |
| Forms | Netlify Forms (contact form) |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── __forms.html      # Static skeleton so Netlify's build bot registers the "contact" form
│   ├── favicon.ico
│   └── placeholder.png
├── src
│   ├── data
│   │   └── site.ts       # Phone/WhatsApp links, services list, gallery items
│   ├── routes
│   │   ├── __root.tsx    # Root layout: <html>, head metadata, global styles import
│   │   └── index.tsx     # The entire one-page site (nav, hero, about, services, gallery, contact, footer)
│   ├── router.tsx         # TanStack Router setup
│   └── styles.css         # Tailwind import, Google Fonts, CSS variables for the gold/ink/paper palette
├── netlify.toml
├── tsconfig.json          # `@/*` path alias for `src/*`
└── vite.config.ts
```

## Key Concepts

### Single-page layout

All sections live in `src/routes/index.tsx` as separate components (`Hero`, `About`, `Services`,
`Gallery`, `Contact`, `Footer`, `FloatingActions`) rendered in one route. Navigation uses plain
anchor links (`#services`, `#contact`, etc.) rather than separate routes, since the brief called
for a single easy-to-navigate page.

### Contact & WhatsApp

`src/data/site.ts` exports `PHONE_TEL` and `WHATSAPP_LINK` (a `wa.me` deep link with a
pre-filled message). Every call-to-action button in the page — the nav, hero, services CTA, the
contact section, and the floating action buttons in the bottom-right corner — reads from these
constants, so updating a phone number only requires editing this one file.

### Contact form (Netlify Forms)

The visible form in `Contact` posts via `fetch` to `/__forms.html` (not `/`), because TanStack
Start's SSR would otherwise intercept a POST to `/`. `public/__forms.html` is a hidden static
form that exists purely so Netlify's build-time bot detects and registers the `contact` form —
it is never shown to users. Both forms must keep matching field names. Submissions appear in the
Netlify dashboard under Forms.

## Theme

Colors are defined as CSS variables in `src/styles.css`: `--gold`, `--gold-light`, `--gold-dark`
(accents, buttons, highlights), `--ink`/`--ink-soft` (near-black text and the dark contact
section), and `--paper`/`--paper-dim` (backgrounds). Display headings use "Cormorant Garamond";
body text uses "Manrope".

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
```

## Conventions

- Components: PascalCase, colocated in `src/routes/index.tsx` since the site is a single page.
- Import paths use the `@/` alias for `src/`.
- Strict TypeScript; no `any`.
