# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience (inferred from the user brief and current repository): prospective clients and collaborators evaluating Lekker's range, taste, and ability to ship. Secondary user: the studio owner maintaining a growing archive of completed builds.

## Product Purpose

Lekker.design is the studio website and work archive. It should let visitors see the work immediately, understand the range of sites and products built so far, open public builds, and contact the studio. Success means the work is credible and inspectable without requiring the visitor to read agency claims first.

## Positioning

Lekker demonstrates breadth through working artifacts: commerce, editorial affiliate publications, analytical products, artist portfolios, and concept studies. The portfolio distinguishes live products/publications from concept work rather than presenting every project as a commissioned client engagement.

## Operating Context

The current product is a static two-page site with clean URLs. The homepage is a proof-first studio introduction built from a smaller, static selection of real project captures. The portfolio catalog is data-driven, supports English and Traditional Chinese, accepts category filters through the URL, and links to public builds. The repository is hosted at `github.com/itsulla/lekker.design` and can be previewed without a build step.

## Capabilities and Constraints

- Preserve the `/portfolio` route and external project links.
- Preserve English and Traditional Chinese access unless the user later narrows the audience.
- Keep project data maintainable in one catalog rather than duplicated HTML.
- Keep the full catalog canonical in `portfolio.js`; homepage proof is a deliberate editorial subset and must not be described as the complete archive.
- Use real project screenshots or public builds. Do not invent clients, testimonials, conversion metrics, awards, or case-study outcomes.
- Respect reduced-motion, keyboard navigation, mobile layouts, semantic markup, and visible focus states.
- The current public domain returns a Cloudflare 526 origin-certificate error as of 2026-07-31. Deployment and certificate repair are separate from this reversible portfolio build.

## Brand Commitments

- Name: `lekker.design`.
- Existing recognizable mark: the orange `//` punctuation.
- Voice: direct, concise, design-literate, and specific. Avoid generic agency hype.
- The user explicitly requested inspiration from Refero Styles and Impeccable. References are principles to synthesize, not layouts to clone.

## Evidence on Hand

- Shipped portfolio and project catalog: `Lekker.Design/portfolio.html` and `Lekker.Design/portfolio.js`.
- Shipped homepage and contact path: `Lekker.Design/index.html`, `Lekker.Design/home.css`, and `Lekker.Design/home.js`.
- Public, verified builds available for screenshots include Maison Masque, Baby Gear Brief, Blank Tee Guide, Best Tinted Sunscreen, Asset Screener, Jacques Fuller, Glow Ingredients, and GPU Hosting.
- Existing concept builds include clinic, dental, chiropractic, veterinary, property, education, wellness, and finance sites. These must remain labeled as concepts unless the user confirms a real client relationship.
- No verified testimonials, awards, client logos, or performance outcomes are on hand.

## Product Principles

1. The artifact leads; studio claims follow.
2. Label work truthfully by relationship and status.
3. Make breadth easy to scan without flattening every project into the same card.
4. Keep every live build one clear action away.
5. Make adding the next project a catalog edit, not a page redesign.

## Accessibility & Inclusion

Maintain keyboard access, WCAG AA contrast, reduced-motion support, descriptive image alt text, and responsive layouts. Preserve bilingual access while it remains part of the product.
