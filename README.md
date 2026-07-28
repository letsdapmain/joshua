# Joshua Nwankwo — Portfolio

Personal portfolio site for Joshua Nwankwo (product engineering, developer
relations, and founder work). A single-page site built with the Next.js App
Router and React.

## Prerequisites

- Node.js `>=20.9.0`

## Quick start

```bash
npm install
npm run dev     # start the dev server (http://localhost:3000)
```

## Project layout

Almost everything lives in two files:

- `app/page.tsx` — all page content and structure: hero, metric strip, the two
  discipline lanes, selected work, developer-relations & community, featured
  press, about ("through-line"), writing, and contact.
- `app/globals.css` — all styling: design tokens, layout, the fluid `clamp()`
  typography, responsive breakpoints, and the ambient hero/scroll animations.

Supporting files:

- `app/layout.tsx` — root layout and page metadata.
- `app/not-found.tsx` — 404 page.
- `app/robots.ts`, `app/sitemap.ts` — SEO endpoints.
- `public/` — images (`joshua-hero.jpg`, press photos, `og.png`, favicon).
- `tests/rendered-html.test.mjs` — smoke test asserting the source has the
  expected portfolio content and no starter leftovers.

## Commands

- `npm run dev` — start local development.
- `npm run build` — produce the production build (`.next`).
- `npm start` — serve the production build locally.
- `npm test` — run the content smoke test.
- `npm run lint` — run ESLint.

## Deployment

Deploys to [Vercel](https://vercel.com) with zero configuration — Vercel
auto-detects Next.js and runs `next build`. Set `NEXT_PUBLIC_SITE_URL` to the
production URL so canonical/OpenGraph metadata resolves correctly.

## Notes

- Styling is hand-written CSS in `app/globals.css`; Tailwind is available but the
  site relies on custom styles and design tokens.
- Animations respect `prefers-reduced-motion`.

## Tech stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS (PostCSS)
