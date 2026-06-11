# Architecture

Status: Verified
Last reviewed: 2026-06-11
Owner: Repository maintainer

## System Overview
This repository is a single-page Vue 3 CV and portfolio application. Vite builds the app into static assets for Firebase Hosting. There is no server-side runtime, database, authentication layer, or API boundary in this codebase.

## Domain Boundaries
| Area | Source | Responsibility |
| --- | --- | --- |
| CV content | `src/assets/data.json` | Personal details, experience, achievements, skills, stats, and summary copy |
| Screen resume | `src/App.vue`, `src/components/*.vue` | Interactive web CV, hero, navigation, sections, and page indicator |
| Print resume | `src/components/PrintResume.vue`, `src/assets/base.css` | Print/PDF-specific resume presentation |
| Visual system | `src/assets/base.css`, `src/assets/main.css`, `design/DESIGN.md` | Design tokens, responsive layout, print styles, and historical visual direction |
| Deployment | `.github/workflows/firebase-hosting-*.yml`, `firebase.json`, `.firebaserc` | Firebase Hosting previews and live deploys |

## Package and Layering Rules
- `src/main.ts` mounts the Vue application.
- `src/App.vue` composes top-level sections and passes typed JSON data into components.
- Components should remain presentational and receive CV data through props.
- `src/assets/data.json` is the content source of truth. Avoid hard-coding CV content inside components.
- `src/types/cv.ts` defines the data contract expected by components.
- Large visual assets should be optimized before being imported into the bundle.

## Runtime Entry Points
- Development: `bun run dev`
- Production build with type-check: `bun run build`
- Production build only: `bun run build-only`
- Preview built output: `bun run preview`
- Documentation guard: `bun run docs:check`

## Data Model and Persistence Boundaries
The app uses static JSON content only. There is no persistent runtime state beyond browser navigation state and no backend write path.

The most sensitive content field is contact data under `src/assets/data.json`. Exact user-provided contact values should be preserved unless the user explicitly asks for a change.

## Cross-Cutting Concerns
- Accessibility: contact links have labels, the page has semantic sections, and print output has a dedicated resume article.
- Performance: the hero background is bundled as WebP; future large assets should be checked for size before commit.
- Security: external links should keep `rel="noopener noreferrer"` when opened in a new tab.
- Reliability: Firebase Hosting deploys are static builds triggered by GitHub workflows.

## Known Constraints and Risks
- The GitHub workflows run `bun run build-only`, so local `bun run build` remains the stronger pre-push verification because it also runs `vue-tsc`.
- The design reference under `design/DESIGN.md` is a historical implementation spec. Current canonical standards live under `docs/`, with the historical spec linked for visual context.
- Some local artifacts may be untracked during active work. Confirm `git status --short` before staging.
