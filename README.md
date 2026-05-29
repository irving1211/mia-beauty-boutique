# Mía Beauty Boutique

Dominican hair salon · Lawrence, MA · 40+ years.

Bilingual (Spanish-first) Astro site for [Mía Beauty Boutique](https://www.instagram.com/miabeautyboutyque/) — 264 S Broadway, Lawrence, MA 01843 · (978) 208-7877.

## Preview

GitHub Pages: https://irving1211.github.io/mia-beauty-boutique/

When `miabeautyboutique.com` is ready, drop `base` in `astro.config.mjs` and switch `site` back to the custom domain.

## Stack

- [Astro](https://astro.build/) 6
- Static site, no JS framework — vanilla `is:inline` scripts
- Cormorant Garamond (serif) + Inter (sans), via Google Fonts
- LocalBusiness / HairSalon JSON-LD schema in `<head>`

## Local dev

```sh
npm install
npm run dev      # localhost:4323
npm run build    # build to ./dist
npm run preview  # preview the production build
```

## Structure

```
src/
├── components/Logo.astro      # SVG wordmark
├── layouts/Base.astro         # <head>, JSON-LD schema, lang auto-redirect, global styles
└── pages/
    ├── index.astro            # Spanish home (default locale)
    └── en/index.astro         # English mirror
public/
├── images/work/mia-*.jpg      # gallery + hero photos
├── favicon.svg
├── favicon.ico
├── robots.txt
└── sitemap.xml
```

## Sections (both locales)

1. Hero (CTA: call · directions · gallery)
2. Why Mía — 4 differentiators
3. Services — 8 cards with starting prices
4. About — story + stylist cards
5. Gallery — category-filtered, lightbox on tap
6. Reviews — Google / Yelp / Facebook attribution
7. Social — Instagram strip
8. FAQ — 8 walk-in / parking / payment / bridal questions
9. Visit — hours, parking, payment, best days
10. Sticky mobile bar — Call + Directions

## Deploy

Push to `main` → `.github/workflows/deploy.yml` builds and deploys to GitHub Pages.
