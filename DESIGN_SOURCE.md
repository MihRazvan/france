# DESIGN_SOURCE.md — visual rules copied from TourCraft

This project's visual language is **copied, not invented**. The source is the
open-source **TourCraft – React Travel Agency & Tourism Website Template**
(MIT, © 2025 Themixly):

```
git clone https://github.com/themixlyweb/react-tourism-website-template.git
```

The original `LICENSE` is preserved at the repo root. Attribution is in
`README.md` and the site footer. The rules below are the design tokens and
component patterns extracted from the template; **new components must reuse
these patterns rather than introduce a new look.**

## Stack (unchanged from template)

React 18 · TypeScript · Vite · Tailwind CSS · `react-router-dom` ·
`lucide-react` + `react-icons` · shadcn/Radix `ui` primitives.

## Color tokens

The template is built around a "safari" green/gold/beige palette. We keep those
exact hex values and expose them under readable `brand.*` aliases in
`tailwind.config.ts` (the original `safari.*` names are kept too).

| Role | Hex | Tailwind |
| --- | --- | --- |
| Primary brand / headings / nav text | `#2A624C` | `brand-green`, `safari-green` |
| Primary light | `#3D8D73` | `brand-greenLight` |
| Primary dark | `#1A3E31` | `brand-greenDark` |
| Accent / active / highlights | `#DAA520` | `brand-gold`, `safari-gold` |
| Link hover | `#8B4513` | `brand-brown`, `safari-brown` |
| Soft section background | `#F5F5DC` | `brand-beige` |
| Pill / label background | `#c9cebd` | `brand-sand` |
| Secondary button | `#4A5C23` → hover `#85BC03` | `brand-olive` / `brand-oliveLight` |

Body text is `text-gray-800`; muted copy is `text-gray-600` / `text-gray-200`
(on dark). Cards are white on a white/`brand-beige` page.

## Typography

- Font family: **Poppins** (Google Fonts, weights 400/500/600/700), loaded in
  `index.html`. Tailwind: `font-sans` / `font-poppins`.
- Section heading: `text-4xl font-bold` (often `text-HeadingColor`/green).
- Hero heading: `text-5xl md:text-7xl font-bold` white over a dark photo.
- Body: base size, `leading-relaxed`, gray.

## Signature patterns (reuse these)

1. **Section label pill** — `inline-flex items-center gap-2 bg-brand-sand
   rounded-full px-4 py-2` with a small `w-2 h-2 bg-brand-olive rounded-full`
   dot, followed by a centered bold `h2`. Implemented as `<SectionTitle/>`.
2. **Hero** — full-bleed background photo, `bg-black/40` overlay, centered white
   text, `animate-fadeIn`, CTA buttons. Implemented as `<Hero/>`.
3. **Card** — `bg-white shadow-md rounded` (often `rounded-lg`), image on top
   `rounded-t object-cover`, padded body, green title that hovers to brown.
4. **Navigation** — `fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50
   shadow-sm`, `h-[80px]`, green links hovering to brown; mobile drawer from the
   left. We add a **bottom mobile nav** for the hub's primary destinations.
5. **Footer** — `bg-brand-green/90 text-white` with faint decorative blob SVGs,
   4-column grid, social icons hovering to gold.
6. **Buttons** — shadcn `<Button>` (`rounded-md`). Primary on photos:
   `bg-white text-brand-green hover:bg-brand-gold hover:text-white`. Solid:
   `bg-brand-olive hover:bg-brand-oliveLight text-white`.
7. **Container** — `container mx-auto px-4` or `max-w-7xl mx-auto`; generous
   vertical rhythm (`py-16` to `py-[120px]`); rounded corners; `shadow-md`.

## What we changed vs. the template

- Single landing page → multi-route hub (`react-router-dom`, see `App.tsx`).
- Safari marketing copy → operational trip content in **Romanian**.
- Added a sticky **bottom mobile nav** (Home · Itinerariu · Cazări · Camere ·
  Link-uri) on top of the template's top nav.
- Content moved into typed data files under `src/data/` (see
  `README_TRIP_EDITING.md`).
- Template animal photos are reused only as temporary placeholders; every
  missing image is marked `TODO_IMAGE` in data.
