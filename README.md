# ByteSpace

A course & education platform built with Next.js — pixel-faithful to its Figma design, from the hero and course cards down to the 3D ornament renders and logo lockups.

**[View live →](https://bytespace-psi-orpin.vercel.app)**

**Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS 4**

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero with search bar, partner logo strip, category filters, course grid, learning paths, growth showcase, creator block, testimonials, creator CTA |
| `/search` | Course search — categories, filter bar, results grid, pagination |
| `/courses` | Courses placeholder page |
| `/courses/[slug]` | Course details — hero, enrollment card, tabbed content |
| `/courses/[slug]/lessons` | Course lessons view |
| `/courses/[slug]/reviews` | Course reviews with rating breakdown |
| `/creators` | Creators placeholder page |
| `/creators/[slug]` | Creator profile — hero, stats, course list |
| `/login`, `/register` | Auth pages with a decorative course-card collage |
| 404 | Custom Not Found page |

## Tech stack

- **Next.js 16** (App Router, Turbopack) and **React 19**
- **TypeScript 5**, strict typing across route handlers and components
- **Tailwind CSS v4** — design tokens declared once in `src/app/globals.css` via `@theme` (brand blue `#003BE2`, lime accent `#D4FB20`, neutral grays, radii)
- **ESLint 9** with `eslint-config-next`
- Fonts: **Satoshi** and **Clash Display** (Fontshare), **Poppins** (`next/font/google`)

## Design fidelity

The UI is rebuilt from a 1440px-wide Figma frame rather than approximated:

- `src/lib/frame.ts` — maps Figma coordinates to CSS (`frameLeft`, `frameBoxStyle`) so absolutely-positioned sections match the design frame exactly
- `src/lib/glow.ts` — Figma's radial gradient glows
- `src/lib/floating-shadow.ts` — Figma's stacked drop-shadow recipes
- `src/components/masked-ornament` — renders the 3D ornament renders (cones, squiggles, zigzags) as flat-colored silhouettes using the renders' alpha as a CSS mask, matching the design's lime `#D4FB20` / off-white fills
- Vector assets live in `public/figma/` — partner logos and category icons are SVGs exported from the design file, not compressed rasters

## Getting started

```bash
npm install
npm run dev       # start the dev server on http://localhost:3000
```

Other scripts:

```bash
npm run lint      # ESLint
npm run build     # production build (Turbopack)
npm start         # serve the production build
```

## Project structure

```
src/
├── app/            # App Router routes and global styles
├── components/     # shared UI (course-card, masked-ornament, placeholder page)
├── config/         # central route map and creator config
├── lib/            # frame math, glows, shadows, class utility
└── modules/        # feature modules
    ├── hero/               # header, hero grid, floating cards
    ├── home/               # home page sections and data
    ├── auth/               # login/register pages and collage
    ├── search/             # search page, filters, pagination
    ├── course-details/     # course detail hero, enroll card, tabs
    ├── course-lessons/     # lessons view
    ├── course-reviews/     # reviews view and data
    ├── creator-profile/    # creator profile page
    └── not-found/          # 404 page
public/
└── figma/          # design assets grouped by page
```

Each module keeps its data in a `*.data.ts` file (copy, layout boxes, asset paths), so content changes never touch component logic.

## Deployment

The project deploys to **Vercel** (project `bytespace`) and is live at **https://bytespace-psi-orpin.vercel.app**:

- **Production branch: `staging`** — every push to `staging` deploys live automatically
- Pushes to any other branch and every pull request get free preview URLs

## Git workflow

| Branch | Purpose |
| --- | --- |
| `main` | Repository default |
| `dev` | Integration branch — feature branches merge here via PR |
| `staging` | Production deploys to Vercel |
| `feat/*`, `fix/*`, `docs/*` | Short-lived work branches |
