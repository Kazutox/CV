# CV Site Product Spec

Status: Verified
Last reviewed: 2026-06-11
Owner: Repository maintainer

## Purpose
The site presents Jc Cloete's professional CV as a responsive, web-hosted portfolio with a print/PDF-friendly resume surface.

## Primary Users
- Recruiters and hiring managers reviewing the web CV.
- The maintainer updating career history, contact details, or portfolio positioning.
- Agents assisting with grounded CV, proposal, or recruiter-facing copy.

## User-Facing Behavior
- The first screen shows a cinematic hero with name, title, summary, contact links, LinkedIn, availability, and primary section navigation.
- The page includes compact stats, key achievements, professional summary, experience, and skills.
- Contact data renders from `src/assets/data.json`.
- The phone link is generated from the displayed phone value by removing spaces.
- Print styles expose a dedicated printable resume through `PrintResume.vue`.
- Firebase Hosting serves the built static site.

## Content Rules
- `src/assets/data.json` is the source of truth for CV content.
- Contact details are exact-copy fields. Do not infer, normalize, or reformat them unless the user asks for that exact change.
- Proposal and recruiter copy should use `src/assets/data.json` first, with `upwork-profile-dump.md` only as corroborating context when present locally.

## Non-Goals
- No runtime editing UI.
- No backend API.
- No authentication.
- No analytics implementation is documented in the current source.

## Acceptance Criteria
- `bun run build` succeeds before publishing source changes.
- `bun run docs:check` succeeds when documentation changes.
- Large imported assets are optimized and documented in `docs/generated/asset-inventory.md`.
