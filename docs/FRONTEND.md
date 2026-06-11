# Frontend Standards

Status: Verified
Last reviewed: 2026-06-11
Owner: Repository maintainer

## Stack
- Vue 3 with `<script setup>`
- TypeScript
- Vite
- CSS design tokens in `src/assets/base.css`
- Bun for package scripts

## Component Boundaries
- `src/App.vue` composes the page and passes `CvData` into sections.
- Section components should stay presentational and typed through `src/types/cv.ts`.
- CV content should come from `src/assets/data.json`.
- Contact links should be derived from the data object, not duplicated in component literals.

## Asset Boundaries
- Imported hero/media assets live under `src/assets/`.
- Static public files live under `public/`.
- Optimize large images before import. Prefer WebP for scenic or photographic assets.

## Verification
- Run `bun run type-check` for type-only changes.
- Run `bun run build` before publishing application changes.
- Run `bun run docs:check` when documentation changes.
