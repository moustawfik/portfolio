# Portfolio — Mous Tawfik

Personal portfolio and CS operations framework hub. The portfolio showcases skills, projects, and contact info. The Retention Architecture section is an interactive, long-form framework targeting C-suite and CS practitioners.

**Live site:** moustawfik.com

## Tech Stack

- **React 19** + **Vite 7** (ESM, `type: "module"`)
- **react-router-dom 7** for client-side routing
- **@supabase/supabase-js 2** for email collection (env vars required)
- **Montserrat** font via Google Fonts (weights: 300–700)
- **ESLint 9** flat config with React hooks/refresh plugins
- No state management library — pure React hooks + Context
- No CSS preprocessor — CSS variables + component-scoped `<style>` tags
- Dark/light theme via `ThemeContext` + `data-theme` attribute

## Commands

- `npm run dev` — Start dev server (localhost:5173)
- `npm run build` — Production build to `/dist`
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

## Routing

```
/                               → PortfolioLayout (Nav + Hero + About + Projects + Skills + Contact + Footer)
/retention-architecture         → RetentionApp → RetentionLanding (9-pillar card grid)
/retention-architecture/:slug   → RetentionApp → PillarPage (long-form content + optional diagram)
```

SPA fallback handled by `vercel.json` rewrite rule for Vercel deployment.

## Project Structure

```
src/
├── main.jsx                    # Entry: BrowserRouter + ThemeProvider + App
├── App.jsx                     # Routes: / → PortfolioLayout, /retention-architecture/* → RetentionApp
├── ThemeContext.jsx             # Dark/light theme context (localStorage + prefers-color-scheme)
├── data.js                     # Portfolio content (profile, projects, skills)
├── styles/
│   └── global.css              # CSS reset, variables, animations, .glass card class, light theme overrides
├── components/
│   ├── Nav.jsx                 # Fixed header, scroll detection, responsive hamburger, "Frameworks" link
│   ├── Hero.jsx                # Full-height intro with name, tagline, CTAs
│   ├── About.jsx               # Bio section
│   ├── Projects.jsx            # 2-col grid of project cards with accent lines
│   ├── ProjectModal.jsx        # Expanded project detail modal
│   ├── Skills.jsx              # 2-col grid of skill categories with colored pills
│   ├── Contact.jsx             # Centered card with email/LinkedIn/GitHub links
│   └── Footer.jsx              # Minimal year display
└── retention/
    ├── RetentionApp.jsx        # Layout shell: RetentionNav + RetentionSidebar + nested routes
    ├── RetentionLanding.jsx    # 3x3 pillar card grid with accent colors
    ├── RetentionNav.jsx        # Top bar: back link + title + theme toggle
    ├── RetentionSidebar.jsx    # Desktop sidebar (collapses to pill bar on mobile)
    ├── PillarPage.jsx          # Resolves :pillarSlug → pillar content + optional diagram
    ├── EmailGate.jsx           # Email capture overlay for gated content
    ├── EmailContext.jsx         # Gated access state (localStorage-backed)
    ├── supabaseClient.js       # Supabase init (reads VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
    ├── components/
    │   ├── PillarCard.jsx      # Card on landing grid (glass class, accent color, gated badge)
    │   ├── PillarContent.jsx   # Long-form content renderer (sections, tables, callouts, bullets)
    │   ├── ContentSection.jsx  # Reusable section block (handles gate boundary)
    │   └── DiagramWrapper.jsx  # Shared diagram container with consistent styling
    ├── data/
    │   ├── pillars.js          # 9 pillar metadata (slug, title, accent, hasDiagram) + retentionMeta
    │   └── pillar-content/
    │       ├── revenue-retention.js      # Pillar 1: Revenue Retention Architecture
    │       ├── proactive-reactive.js     # Pillar 2: Proactive vs. Reactive Motion Design
    │       ├── role-clarity.js           # Pillar 3: Support vs. Revenue Role Clarity
    │       ├── systems-architecture.js   # Pillar 4: Systems Architecture Overview
    │       ├── health-scoring.js         # Pillar 5: Health Scoring Methodology
    │       ├── renewal-forecasting.js    # Pillar 6: Renewal Forecasting Models
    │       ├── qbr-engagement.js         # Pillar 7: QBR & Executive Engagement Design
    │       ├── cs-tech-stack.js          # Pillar 8: CS Tech Stack Architecture
    │       └── compensation-design.js    # Pillar 9: Compensation & Incentive Design
    └── diagrams/
        ├── SystemsArchitectureDiagram.jsx  # Pillar 4: Four-layer vertical flow (Data → Intelligence → Action → Reporting)
        ├── HealthScoreDiagram.jsx          # Pillar 5: Weighted bar with interactive slider controls
        └── RenewalForecastDiagram.jsx      # Pillar 6: Waterfall chart (renewal pipeline tiers)
```

## Architecture & Patterns

### Routing
- `main.jsx` wraps with `BrowserRouter` and `ThemeProvider`
- `App.jsx` uses `<Routes>` with two top-level routes
- `RetentionApp.jsx` has nested `<Routes>` for pillar pages
- Portfolio anchor links (`#about`, `#projects`, etc.) use standard `<a>` tags
- `Nav.jsx` "Frameworks" link uses react-router-dom `<Link>`

### Theme System
- `ThemeContext.jsx` provides `theme` state and `toggleTheme` function
- Dark mode is default; light mode activated via `data-theme="light"` on `<html>`
- All CSS variables are overridden in `global.css` under `[data-theme="light"]`
- Theme persists in `localStorage` and respects `prefers-color-scheme`

### Data Layer
- Portfolio content lives in `src/data.js` as exported objects (`profile`, `projects`, `skills`)
- Retention pillar metadata lives in `src/retention/data/pillars.js`
- Pillar long-form content lives in individual files under `src/retention/data/pillar-content/`
- Each content file exports `{ lede, sections[] }` with optional `callout`, `table`, `bullets` per section

### Styling Approach
- **Global styles** in `src/styles/global.css` — CSS variables (design tokens), reset, keyframes, `.glass` card class, `.section-label` / `.section-title` utilities
- **Component styles** via `<style>{...}</style>` JSX blocks inside each component — scoped by BEM-like class names
- **Inline styles** for dynamic values (staggered animation delays, per-category accent colors via `--layer-color`)
- No CSS modules, no Tailwind, no styled-components

### Class Naming (BEM-inspired)
- `.component__element--modifier`
- Portfolio examples: `.nav__logo`, `.hero__btn--primary`, `.project-card__tag`, `.skill-group__pill`
- Retention examples: `.ra__main--pillar`, `.sys-arch__layer--active`, `.hs-diagram__bar--usage`

### Design System (CSS Variables)
| Token | Dark Value | Purpose |
|-------|-----------|---------|
| `--bg-primary` | `#141517` | Page background |
| `--bg-card` | `rgba(255,255,255,0.035)` | Card background |
| `--text-primary` | `#f2f0ed` | Headings, main text |
| `--text-secondary` | `#908d86` | Body text, descriptions |
| `--text-tertiary` | `rgba(255,255,255,0.35)` | Sublabels, hints |
| `--accent` | `#ff6b6b` | Primary coral accent |
| `--gradient-primary` | coral → orange | Buttons, highlights |
| `--gradient-text` | coral → peach → gold | Section labels, tagline |
| `--border` | `rgba(255,255,255,0.06)` | Card borders (default) |
| `--border-hover` | `rgba(255,107,107,0.25)` | Card borders (hover) |
| `--radius-md` | `16px` | Standard card radius |
| `--transition` | `0.25s cubic-bezier` | Interaction timing |

### Color Palette: Electric Coral
- **Coral** `#ff6b6b` — primary accent, buttons, Pillar 1/7
- **Peach** `#ffad76` — secondary accent, Pillar 2/8
- **Gold** `#fbd786` — tertiary, Pillar 3/9
- **Warm cream** `#fccb90` — quaternary, Pillar 5
- **Rose** `#f7797d` — Pillar 4
- **Tan** `#e8a87c` — Pillar 6

### Visual Effects
- **Film grain texture** — SVG noise filter on `body::before` at 3% opacity
- **Gradient border hover** — `.glass::before` pseudo-element with CSS mask reveals coral-peach-gold gradient on hover
- **Accent lines** — 2px gradient stripe at top of each project card
- **Gradient text** — `background-clip: text` on name, tagline, section labels, skill titles
- **No blur/glow effects** — intentionally removed for a crisp, editorial feel

### Interactive Diagrams
Three SVG + React state diagrams, all using CSS variables for automatic dark/light theming:

1. **SystemsArchitectureDiagram** (Pillar 4) — Four-layer vertical flow: Data → Intelligence → Action → Reporting. Click a layer to expand tool details inline. Click a tool badge to see its description.
2. **HealthScoreDiagram** (Pillar 5) — Horizontal weighted bar with 5 health dimensions (Usage, Engagement, Support, Relationship, Commercial). Slider controls let the user adjust weights and see the score recalculate live.
3. **RenewalForecastDiagram** (Pillar 6) — Waterfall chart showing renewal pipeline tiers: Total → Committed → Likely → At-Risk → Churned → Forecast. Hover for tooltips, click for tier criteria.

### Responsive
- Portfolio: single breakpoint at `640px`
- Retention: sidebar collapses at `900px`, grid goes single-column at `640px`
- Diagrams use `viewBox` for responsive SVG scaling
- Nav links hidden → hamburger menu
- Font sizes scale down

## Key Files to Edit

| What | File |
|------|------|
| Name, bio, email, links | `src/data.js` → `profile` |
| Projects | `src/data.js` → `projects` |
| Skills & categories | `src/data.js` → `skills` |
| Colors & tokens | `src/styles/global.css` → `:root` |
| Page title & fonts | `index.html` → `<head>` |
| Pillar metadata (titles, slugs, accents) | `src/retention/data/pillars.js` |
| Pillar long-form content | `src/retention/data/pillar-content/*.js` |
| Diagram interactivity | `src/retention/diagrams/*.jsx` |

## Deployment

- **Platform:** Vercel (Git integration, auto-deploys from `main`)
- **SPA routing:** `vercel.json` with `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`
- **Environment variables:** `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (for email collection, optional)
- **Build output:** `/dist` (gitignored)

## Notes

- Font loaded from Google Fonts CDN in `index.html` (not bundled)
- Favicon is an inline SVG "M" character
- Supabase client gracefully handles missing env vars (returns `null`)
- Email gating is wired but env vars must be set for it to function
