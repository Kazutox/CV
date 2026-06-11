# CV Project
### Live link: [cv.jcloete.dev](https://cv.jcloete.dev/)

## About
This is my personal CV/Resume built as a modern web application using Vue 3, Vite, and TypeScript. The project features a responsive design with print-optimized styles, making it easy to share digitally or print to any format.

## Tech Stack
- **Vue 3** - Component-based UI framework
- **Vite** - Lightning-fast build tool
- **TypeScript** - Type-safe development
- **CSS design tokens** - Custom responsive styling with semantic variables
- **Bun** - Fast JavaScript runtime and package manager
- **Firebase Hosting** - Deployment and hosting

## Features
- Premium portfolio design with a responsive WebP image-led hero
- Fully responsive layout for all devices
- Print-optimized resume surface for PDF generation
- Fast static build with Vite
- Clickable contact and social links
- Automated Firebase Hosting deployment through GitHub Actions

## Development

### Prerequisites
- [Bun](https://bun.sh) runtime

### Install dependencies
```bash
bun install
```

### Start development server
```bash
bun run dev
```

### Build for production
```bash
bun run build
```

### Preview production build
```bash
bun run preview
```

### Validate documentation
```bash
bun run docs:check
```

## Project Structure
```
docs/                # Canonical codebase knowledge store
design/              # Historical visual reference spec and reference images
src/
├── assets/          # Styles, images, and data
│   ├── base.css    # Design tokens, layout styles, responsive and print styles
│   ├── data.json   # CV content data
│   ├── hero-background.webp
│   └── jcloete.jpg # Profile image
├── components/      # Vue components
│   ├── HeroSection.vue
│   ├── SiteHeader.vue
│   ├── CompactStatsRow.vue
│   ├── KeyAchievements.vue
│   ├── ProfessionalSummary.vue
│   ├── Experience.vue
│   ├── PrintResume.vue
│   └── Skills.vue
└── App.vue         # Main application component
```

## Documentation
Start with `AGENTS.md`, then use:
- `ARCHITECTURE.md` for system structure.
- `docs/product-specs/index.md` for behavior.
- `docs/design-docs/index.md` for visual design rationale.
- `docs/QUALITY_SCORE.md`, `docs/RELIABILITY.md`, and `docs/SECURITY.md` for standards and risks.

## Deployment
The project automatically deploys to Firebase Hosting via GitHub Actions on:
- Push to `master` branch
- Pull requests (preview deployment)
- Tag pushes (e.g., `v1.0.0`)

## Why a Web-Based CV?
- **No file format issues** - Accessible from any device with a browser
- **Always up-to-date** - Changes are instantly available to everyone
- **Print to any format** - Use Ctrl+P to save as PDF or print
- **Interactive elements** - Clickable links and smooth animations
- **Environmentally friendly** - No paper waste
