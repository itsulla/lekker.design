# Lekker Design Portfolio

Static multi-page website for Lekker Design. The homepage and portfolio lead with real project evidence, while the archive separates live work from explicitly labeled concept studies.

## Stack

- **Pages:** semantic HTML, standalone CSS, and vanilla JavaScript
- **Font:** self-hosted Bricolage Grotesque with system fallbacks
- **Shared system:** `portfolio.css` provides tokens, navigation, controls, language visibility, motion fallbacks, CTA, and footer styles
- **Homepage extension:** `home.css` and `home.js` provide the Proof Collision layout and page-specific behavior
- **Hosting:** static Vercel deployment with clean URLs

## Pages

| File | Route | Description |
|------|-------|-------------|
| `index.html` | `/` | Proof-first studio homepage, live-work field, disciplines, process, archive preview, and contact CTA |
| `portfolio.html` | `/portfolio` | Selected work, approach, filterable archive, and contact CTA |

The portfolio catalog is maintained in `portfolio.js`. Its current split is 16 projects: 8 live builds and 8 concept studies, with 6 selected projects.

## Local Development

No build step is required. From this directory, run a static server:

```bash
python3 -m http.server 8128
```

## Deploy

```bash
npx vercel --prod
```

Or connect the repo to Vercel and it auto-deploys on push.

## Product and design documentation

- `../PRODUCT.md` records the portfolio's product purpose and content rules.
- `../DESIGN.md` records the shipped visual tokens, component families, responsive behavior, motion, and accessibility expectations.
- `../.impeccable/design.json` is the machine-readable design sidecar.

Treat `index.html`, `home.css`, `home.js`, `portfolio.html`, `portfolio.css`, and `portfolio.js` as implementation truth. The portfolio catalog remains canonical in `portfolio.js`; homepage proof is an intentionally smaller static edit. Do not add client relationships, outcomes, awards, testimonials, dates, or performance claims without evidence.
