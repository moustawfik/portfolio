# Portfolio — Mous Tawfik

Personal portfolio site built to showcase skills, projects, and contact info. Designed for sharing on LinkedIn.

## Tech Stack

- **React 19** + **Vite 7** (ESM, `type: "module"`)
- **Montserrat** font via Google Fonts (weights: 300–700)
- **ESLint 9** flat config with React hooks/refresh plugins
- No state management library — pure React hooks
- No CSS preprocessor — CSS variables + component-scoped `<style>` tags

## Commands

- `npm run dev` — Start dev server (localhost:5173)
- `npm run build` — Production build to `/dist`
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

## Project Structure

```
src/
├── main.jsx              # Entry point, mounts <App /> with StrictMode
├── App.jsx               # Layout shell: Nav → Hero → Projects → Skills → Contact → Footer
├── data.js               # All portfolio content (profile, projects, skills)
├── styles/
│   └── global.css        # CSS reset, variables, animations, .glass card class
└── components/
    ├── Nav.jsx           # Fixed header, scroll detection, responsive hamburger
    ├── Hero.jsx          # Full-height intro with name, tagline, CTAs
    ├── Projects.jsx      # 2-col grid of project cards with accent lines
    ├── Skills.jsx        # 2-col grid of skill categories with colored pills
    ├── Contact.jsx       # Centered card with email/LinkedIn/GitHub links
    └── Footer.jsx        # Minimal year display
```

## Architecture & Patterns

### Data Layer
All content lives in `src/data.js` as exported objects (`profile`, `projects`, `skills`). Components import directly. To update portfolio content, only edit `data.js`.

### Styling Approach
- **Global styles** in `src/styles/global.css` — CSS variables (design tokens), reset, keyframes, `.glass` card class, `.section-label` / `.section-title` utilities
- **Component styles** via `<style>{...}</style>` JSX blocks inside each component — scoped by BEM-like class names
- **Inline styles** for dynamic values (staggered animation delays, per-category colors)
- No CSS modules, no Tailwind, no styled-components

### Class Naming (BEM-inspired)
- `.component__element--modifier`
- Examples: `.nav__logo`, `.hero__btn--primary`, `.project-card__tag`, `.skill-group__pill`

### Design System (CSS Variables)
| Token | Value | Purpose |
|-------|-------|---------|
| `--bg-primary` | `#141517` | Page background |
| `--bg-card` | `rgba(255,255,255,0.035)` | Card background |
| `--text-primary` | `#f2f0ed` | Headings, main text |
| `--text-secondary` | `#908d86` | Body text, descriptions |
| `--accent` | `#ff6b6b` | Primary coral accent |
| `--gradient-primary` | coral → orange | Buttons, highlights |
| `--gradient-text` | coral → peach → gold | Section labels, tagline |
| `--border` | `rgba(255,255,255,0.06)` | Card borders (default) |
| `--border-hover` | `rgba(255,107,107,0.25)` | Card borders (hover) |
| `--radius-md` | `16px` | Standard card radius |
| `--transition` | `0.25s cubic-bezier` | Interaction timing |

### Color Palette: Electric Coral
- **Coral** `#ff6b6b` — primary accent, buttons, Development skills
- **Peach** `#ffad76` — secondary accent, Design skills
- **Gold** `#fbd786` — tertiary, Tools & Ops skills
- **Warm cream** `#fccb90` — quaternary, Soft Skills

### Visual Effects
- **Film grain texture** — SVG noise filter on `body::before` at 3% opacity
- **Gradient border hover** — `.glass::before` pseudo-element with CSS mask reveals coral-peach-gold gradient on hover
- **Accent lines** — 2px gradient stripe at top of each project card
- **Gradient text** — `background-clip: text` on name, tagline, section labels, skill titles
- **No blur/glow effects** — intentionally removed for a crisp, editorial feel

### Responsive
- Single breakpoint: `640px`
- Grid collapses from 2 columns → 1
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

## Notes

- Font loaded from Google Fonts CDN in `index.html` (not bundled)
- Favicon is an inline SVG "M" character
- Build output goes to `/dist` (gitignored)
- No router — single-page with anchor scroll (`#about`, `#projects`, `#skills`, `#contact`)
