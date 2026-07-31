---
version: alpha
name: Lekker Design Studio and Work Archive
description: "A proof-first studio website and work archive for visually distinct web projects."
colors:
  primary: "#12120f"
  secondary: "#62625d"
  tertiary: "#f4511e"
  neutral: "#f3f3ef"
  surface: "#fbfbf8"
  line: "#c9c9c2"
  lineStrong: "#94948c"
  tertiaryDark: "#9f2a08"
typography:
  display-xl:
    fontFamily: Bricolage Grotesque
    fontSize: 6rem
    fontWeight: 600
    lineHeight: 0.91
    letterSpacing: "-0.04em"
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 5.875rem
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  heading-md:
    fontFamily: Bricolage Grotesque
    fontSize: 2.125rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  body-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 1.3125rem
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "-0.015em"
  body-md:
    fontFamily: Bricolage Grotesque
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: Bricolage Grotesque
    fontSize: 0.875rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
rounded:
  none: 0px
  control: 999px
spacing:
  xs: 8px
  sm: 12px
  md: 20px
  lg: 40px
  sectionMin: 88px
  sectionMax: 164px
components:
  page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  muted-copy:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-md}"
  divider:
    backgroundColor: "{colors.line}"
    textColor: "{colors.primary}"
    height: 1px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: 22px
    height: 50px
  button-primary-hover:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
  filter-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    height: 42px
  filter-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    height: 42px
  status-live:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.tertiaryDark}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
  media-placeholder:
    backgroundColor: "{colors.line}"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
  control-outline:
    backgroundColor: "{colors.lineStrong}"
    textColor: "{colors.primary}"
    rounded: "{rounded.control}"
  accent-panel:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
---

## Overview

The site is a proof-first studio introduction and viewing room. The homepage thesis is "Different brief. Different website." The portfolio thesis is "The work is the pitch." Both interfaces use restraint so the projects can demonstrate range: commerce, publications, products, portfolios, and explicitly labeled concept studies. The site does not claim fictional clients, rankings, performance metrics, or an unavailable CMS.

The visual language combines an editorially sparse paper surface with a high-energy vermilion accent. Sharp project media establishes structure; full-pill controls indicate actions and filter state. The page stays in one light theme except for a single vermilion closing panel.

## Colors

- **Primary `#12120f`:** Near-black ink for headings, body text, selected filters, and primary actions.
- **Secondary `#62625d`:** Muted explanatory copy and project metadata.
- **Tertiary `#f4511e`:** The sole expressive accent for the wordmark, hero punctuation, collage field, focus ring, and closing panel.
- **Neutral `#f3f3ef`:** Cool paper page background.
- **Surface `#fbfbf8`:** Light interactive and elevated surface.
- **Line `#c9c9c2`:** Default hairline divider and placeholder tone.
- **Line Strong `#94948c`:** Stronger control outlines and archive boundaries.
- **Tertiary Dark `#9f2a08`:** Accessible live-status text and border on the neutral surface.

No gradients are part of the shipped system. Project screenshots may contain their own colors and gradients because they are evidence, not decoration.

## Typography

Bricolage Grotesque is self-hosted in regular and semibold TrueType files under `Lekker.Design/assets/fonts/`. The fallback stack is `"Helvetica Neue", Arial, "PingFang HK", "Microsoft JhengHei", sans-serif`.

- The portfolio hero display scales with `clamp(60px, 6.4vw, 96px)`, with `0.91` leading and `-0.04em` tracking.
- The homepage hero display scales with `clamp(64px, 8.1vw, 118px)` on larger screens and `clamp(39px, 11.8vw, 46px)` below 560px. Its two intended lines remain unbroken on mobile.
- Section displays scale with `clamp(48px, 7vw, 94px)`, with `0.98` leading and `-0.04em` tracking.
- Selected project titles scale with `clamp(22px, 2.2vw, 34px)`.
- Introductory copy scales from `17px` to `22px` with relaxed `1.35` to `1.45` leading.
- Controls and metadata stay between `12px` and `15px` at semibold weight.
- Traditional Chinese uses the same family with the Hong Kong system fallback for missing glyphs.

## Layout

The global shell is `min(100% - 40px, 1480px)`, tightening to 32px, 28px, and 24px total viewport gutters at the 1080px, 820px, and 560px breakpoints.

The desktop hero is a two-column grid with `0.9fr / 1.1fr` proportions and a viewport-height proof deck. Four verified project screenshots overlap inside the deck, backed by a single vermilion field. At 820px the hero becomes one column. At 560px the collage changes to a tall mobile composition.

The homepage uses a full-viewport Proof Collision hero. A two-line proposition and two actions sit above opposed Asset Screener and Maison Masque project frames, joined by the orange `//` mark. The actions and project proof remain inside the initial viewport at the 1440×1000, 768×1024, and 390×844 verification sizes.

Below the homepage hero, three live builds form an asymmetric 12-column field; the discipline section uses a sticky statement and four-row semantic ledger; the process uses a bordered three-part sequence; and the archive preview moves from four unequal columns to two columns and then one column at the existing breakpoints.

Selected work uses a 12-column asymmetric field. Six projects occupy staggered spans and three distinct media ratios. At 820px each card spans half the grid. At 560px the grid becomes a single column and every selected image uses a 4:3 ratio.

The approach section uses a sticky editorial statement beside a definition list above 820px. It becomes one column on smaller screens. The full archive is a two-column ledger above 1080px and a single column below. Archive records reduce to 112px thumbnails on screens below 560px.

## Elevation & Depth

Depth is restricted to the hero collage, where screenshots use `0 24px 70px rgba(18, 18, 15, 0.13)`. The rest of the page uses hairline borders, overlap, scale, and whitespace instead of stacked shadows. The sticky header uses background blur when transparency preferences allow it.

## Shapes

Project media, archive images, section fields, and the closing panel have square corners. Full pills are reserved for controls, status labels, and actions. There is no medium-radius card language.

## Components

- **Wordmark:** A semibold `//lekker.design` lockup with vermilion slashes and near-black text.
- **Primary navigation:** Sticky three-zone grid with centered desktop links, right-aligned language control, and a mobile menu below 820px.
- **Hero proof deck:** Four real screenshots in a fixed asymmetric overlap. It is evidence of range, not an auto-playing carousel.
- **Homepage proof collision:** Two opposed live-project frames connected by the orange studio mark. Both captions remain outside the media.
- **Homepage live-work field:** One large artist portfolio paired with two stacked publication and product builds.
- **Homepage discipline ledger:** Four rows link directly to URL-filtered portfolio archive states.
- **Homepage process:** Three semantic articles named Frame, Make, and Refine, separated by rules rather than cards.
- **Homepage archive preview:** Four captures that include both live work and one explicitly labeled concept study.
- **Primary and secondary actions:** 50px pill controls. The primary action starts near-black and turns vermilion on hover. The secondary action remains outlined.
- **Work discipline navigation:** Four equal links with real archive filter targets.
- **Selected work field:** Six data-driven project entries with varied grid spans, captions outside images, and external live-site links.
- **Approach list:** Four `dt` and `dd` pairs covering commerce, publications, products, and portfolios.
- **Archive filters:** Pressed-state buttons drive client-side filtering. Counts update through a polite live region.
- **Archive ledger:** Sixteen data-driven entries. Eight are labeled Live and eight are labeled Concept study.
- **Language control:** Persists English or Traditional Chinese in local storage and mirrors `?lang=zh` in the URL.
- **Closing panel:** One vermilion call-to-action field with the same "Start a project" label used elsewhere.

## Motion

Motion is brief and evidence-led. The portfolio hero deck enters through staggered clip reveals between 100ms and 580ms. The homepage project pair uses a two-part clip reveal, followed by the orange `//` mark. Scroll content reveals once through opacity, vertical translation, and light blur. Project images scale by roughly 1.8% to 3.5% on hover. Buttons move by 1px to 2px for hover and press feedback. No content auto-rotates.

When `prefers-reduced-motion: reduce` is active, smooth scrolling, keyframes, transforms, filters, and transitions collapse to immediate states. When `prefers-reduced-transparency: reduce` is active, the sticky header loses its blur.

## Accessibility

Both pages include a skip link, semantic header, navigation, main, sections, headings, and footer. External project links include descriptive accessible labels and open with `noopener noreferrer`. The homepage localizes visible copy, image alt text, and accessible labels. Decorative portfolio archive thumbnails are removed from the tab order and accessibility tree, while selected-work images use localized descriptive alt text.

Keyboard focus uses a 3px vermilion outline with 4px offset. Menu and filter state use `aria-expanded` and `aria-pressed`. Archive count changes are announced with `aria-live="polite"`. The mobile menu locks page scrolling and closes on link selection or when the viewport expands. Controls are at least 40px to 50px high. The implemented palette and status labels do not rely on color alone.

## Do's and Don'ts

**Do:**

- Add every new project to the data model in `portfolio.js` with a status, category, filters, localized type and description, real URL, image, and localized alt text.
- Keep homepage proof edits aligned with the canonical project status, URL, title, and image in `portfolio.js`.
- Preserve URL filter states in the form `?filter=<discipline>#archive` when linking from the homepage.
- Keep live work and concept studies explicitly separated.
- Use real screenshots as proof and preserve their top-of-page composition with `object-position: top center`.
- Keep captions outside project media and reuse the existing one-theme paper world.
- Preserve keyboard focus, language persistence, reduced-motion behavior, and zero horizontal overflow.

**Don't:**

- Add fictional client claims, performance statistics, rankings, or testimonial copy without evidence.
- Introduce gradients, rounded media cards, floating decorative badges, or a second accent color.
- Turn the selected-work field into an auto-playing carousel.
- Add a new component style when the work-navigation, selected-work, archive-ledger, or pill-control family already covers the need.
- Hide project status or mix concept studies into live work without labels.
