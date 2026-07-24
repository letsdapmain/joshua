# Joshua Nwankwo — Portfolio

Personal portfolio site for Joshua Nwankwo (product engineering, developer
relations, and founder work). A single-page site built with the Next.js App
Router and React, served through [vinext](https://github.com/cloudflare/vinext)
(Vite) on Cloudflare Workers.

## Prerequisites

- Node.js `>=22.13.0`

## Quick start

```bash
npm install
npm run dev     # start the dev server (http://localhost:3000, or next free port)
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
- `tests/rendered-html.test.mjs` — smoke test asserting the built HTML renders
  the expected portfolio content.

## Commands

- `npm run dev` — start local development.
- `npm run build` — produce the vinext production build.
- `npm start` — serve the production build locally.
- `npm test` — build, then run the rendered-HTML smoke test.
- `npm run lint` — run ESLint.

## Notes

- Styling is hand-written CSS in `app/globals.css`; Tailwind is available but the
  site relies on custom styles and design tokens.
- Animations respect `prefers-reduced-motion`.
- Drizzle/D1 tooling is present from the starter but unused — the site is static
  content with no database.

## Tech stack

Next.js 16 · React 19 · vinext · Vite · TypeScript · Cloudflare Workers
(Wrangler)
