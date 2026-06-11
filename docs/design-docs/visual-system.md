# Visual System

Status: Verified
Last reviewed: 2026-06-11
Owner: Repository maintainer

## Source of Truth
- Current implementation: `src/assets/base.css`
- Historical visual specification: `design/DESIGN.md`
- Hero asset: `src/assets/hero-background.webp`

## Design Direction
The CV uses a polished portfolio layout with a strong image-led hero, compact achievement cards, a timeline-style experience section, and a print-optimized resume surface.

## Responsive Behavior
- Desktop uses the hero as the dominant first-screen visual.
- Smaller screens reflow into a focused single-column experience.
- Print styles hide the interactive web shell and expose `PrintResume.vue`.

## Asset Guidance
- Keep the hero image optimized because it is part of the first viewport.
- Prefer preserving dimensions when replacing the hero image to avoid composition drift.
- Update `docs/generated/asset-inventory.md` when changing imported image assets.
