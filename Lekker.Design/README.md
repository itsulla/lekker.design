# Lekker Design — Portfolio Website

Static portfolio site for Lekker Design, a web design studio based in Cape Town.

## Stack

- **HTML** — Two self-contained pages, all CSS/JS inline
- **Fonts** — Space Grotesk + Space Mono via Google Fonts CDN
- **Animations** — AOS (Animate On Scroll) via unpkg CDN
- **Hosting** — Vercel (static)

## Pages

| File | Route | Description |
|------|-------|-------------|
| `index.html` | `/` | Main pitch — hero, about, services, process, contact |
| `portfolio.html` | `/portfolio` | Selected work — project grid, before/after, CTA |

## Local Development

Open `index.html` in a browser. No build step required.

For Vercel-style clean URLs locally, use any static server:

```bash
npx serve .
```

## Deploy

```bash
npx vercel --prod
```

Or connect the repo to Vercel and it auto-deploys on push.

## Design

- **Style:** Brutalist / editorial
- **Palette:** Near-black (#0a0a0a), off-white (#f0f0f0), vermillion accent (#ff3c00)
- **Typography:** Space Grotesk (display), Space Mono (body/mono)
