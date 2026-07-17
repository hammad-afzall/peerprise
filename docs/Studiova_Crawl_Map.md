# Studiova crawl map

Crawled: 17 Jul 2026  
Sources:
- Live: `https://studiova.vercel.app/` (browser crawl)
- Local homepage package: `/Users/macboojkpro/Downloads/saveweb2zip-com-studiova-vercel-app`

Vendor: WrapPixel (`info@wrappixel.com`, Zwolle Netherlands)  
Stack: Next.js + Turbopack chunks, Tailwind v4, light/dark theme toggle

---

## Design system

| Token | Value |
| --- | --- |
| Primary lime | `#c1ff72` |
| Primary text on lime | `#171717` |
| Dark background | `#0a0a0a` / black |
| Card | `#171717` |
| Secondary | `#1f2a2e` |
| Display type | `.large-heading` up to ~290px |

Patterns: huge brand/display type, lime accent words + pill CTAs with arrow, numbered/sectioned homepage, image project cards, FAQ accordion, dark/light toggle.

---

## Site map (live)

| Route | Title (live) | Status |
| --- | --- | --- |
| `/` | Studiova | OK — homepage + local zip |
| `/about` | Aboutus \| Studiova | OK — browser crawled |
| `/projects` | Projects \| Studiova | OK — browser crawled |
| `/projects/amberbottle` | Amber Bottle \| Your Site Name | OK — browser crawled |
| `/projects/biotrack-lims` | (linked) | Linked from home/projects |
| `/projects/digitalmagazine` | (linked) | Linked |
| `/projects/pixelforge` | (linked) | Linked |
| `/projects/snapclear` | (linked) | Linked |
| `/projects/transfermax` | (linked) | Linked |
| `/blog/a-campaign-that-connects` | (linked) | Linked |
| `/blog/an-breaking-boundaries-our-latest-brand-redesign` | (linked) | Linked |
| `/blog/recognized-for-design` | (linked) | Linked |
| `/privacy-policy` | (footer) | Linked |
| `/terms-and-conditions` | (footer) | Linked |
| `/not-found` | (footer Error 404) | Linked |
| `/#services` | in-page anchor | Linked |

Footer also labels **Services** and **Work** (Work → projects).

---

## Homepage sections (exact order)

1. **Hero** — video atmosphere, lime-highlighted supporting line, huge **Studiova** H1, lime CTA
2. **Stats intro** — “High quality web design solutions you can trust.” + counters (`0K+`, `0+`, `0M+` in demo)
3. **Featured projects** — Amber Bottle, BioTrack LIMS, Digital Magazine, Pixelforge, Snapclear, Transfermax
4. **What we do** — Brand identity, Web development, Content creation, Motion & 3D modeling
5. **Why choose us** — quote + 98.6% / 500+ / 238+
6. **Testimonials** — 3 cards (MasterCard / Mitsubishi / Pizza Hut demo names)
7. **Team** — Martha Finley, Floyd Miles, Glenna Snyder, Albert Flores
8. **Pricing** — Launch `$699`, Scale `$1699` (from `$2199`), Elevate `$3499` + Subscribe now
9. **FAQ** — 5 accordion items
10. **Recent news** — 3 blog cards
11. **Contact** — Name, Email, project message, Submit
12. **Footer** — “Build something together?”, nav, social, © 2026

---

## About page (crawled)

- Hero: lime highlight on “innovative digital”, huge **About us**, lime arrow pill
- Body: **Studiova.** intro copy
- Stats strip: Presence in global markets / In strategic investments / Trusted brand collaborations (demo zeros)
- Capability marquee: Branding, Web development, Agency, Content creation, SaaS, Motion & 3D, Photography
- Meet our team (same 4 people)
- Shared footer

## Projects index (crawled)

- Hero: “A showcase of creativity…” + huge **Projects**
- Same 6 project cards as homepage

## Project detail example — Amber Bottle (crawled)

- Back control
- H1 Amber Bottle
- Meta: Photography, Studio / Photography / `$1.1M` / www.studiova.com
- Description + 3 blog-style subsections
- Shared footer

---

## Local package inventory (homepage only)

```
index.html (~136 KB)
css/          2 files
fonts/        6 woff2
images/       ~50 assets
js/           14 chunks + turbopack
media/banner-video.mp4
```

Key assets: WhiteLogo, project covers 1–6, team 1–4, testimonials 1–3, partners, UI icons, hero video.

---

## Crawl gaps (not fully dumped yet)

- Remaining 5 project detail pages (structure assumed similar to Amber Bottle)
- 3 blog article pages
- Privacy / Terms / 404 body content
- Direct HTTP download of live HTML blocked in this environment (403 tunnel); browser crawl works
- Full licensed **source theme** (Next.js repo) not provided — only a saved homepage zip + live demo

---

## Motion patterns (Studiova → Peerprise)

Observed on Studiova (and mirrored on Peerprise homepage):

| Pattern | Studiova | Peerprise implementation |
| --- | --- | --- |
| Scroll reveal | `useInView` / IntersectionObserver fade-up | `Reveal` component + `.reveal` / `.reveal-visible` |
| Hero entrance | staged fade/rise on load | `.hero-enter-copy` / `.hero-enter-brand` / `.hero-enter-actions` / `.hero-media-fade` |
| CTA hover | arrow `translate-x`, fill sweeps | `.btn-primary-motion` + `.btn-arrow` |
| Card hover | lift / border brighten | `.card-motion` |
| FAQ | accordion expand + icon `rotate-45` | `.faq-panel` grid-rows + `.faq-icon-open` |
| Reduced motion | respect `prefers-reduced-motion` | globals.css disables animations / shows reveals immediately |

Peerprise keeps approved copy and CTAs — motion and visual language only.

---

## Next step options

1. Continue browser-crawling every remaining route and append notes here  
2. If you have the **licensed WrapPixel/Studiova source zip**, drop it in Downloads and we port from source (cleaner than cloning the demo)  
3. Extend the same motion system to interior pages (Services, Plans, Work, Insights)

## Peerprise page mapping (design port)

| Peerprise | Studiova reference | Status |
| --- | --- | --- |
| `/` | Homepage | Done |
| `/about` | `/about` | Done |
| `/work` | `/projects` | Done |
| `/services` + service lines | `/#services` pattern | Done |
| `/plans` | Homepage pricing | Done |
| `/contact` | Homepage contact | Done |
| `/blog` | Recent news | Done |
| `/blog/[slug]` | Blog article | Done |
| `/how-it-works` | Process sections | Done |
| `/digital-review` + service details | Section system | Done |
| `not-found` | Error 404 | Done |

Privacy / Terms intentionally not ported (Peerprise does not use them).

