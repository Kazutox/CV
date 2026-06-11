# Quality Score

Status: Verified
Last reviewed: 2026-06-11
Owner: Repository maintainer

## Scoring Scale
- 5: Excellent
- 4: Good
- 3: Adequate
- 2: At risk
- 1: Critical

## Domain and Layer Scores
| Area | Score | Evidence | Gap | Next Action |
| --- | --- | --- | --- | --- |
| Static app architecture | 4 | `src/main.ts`, `src/App.vue`, `src/components/` | Simple structure is appropriate; no automated UI tests | Add smoke tests if interaction complexity grows |
| Type safety | 4 | `src/types/cv.ts`, `bun run type-check` | JSON is cast to `CvData` at runtime | Consider schema validation if external editing is introduced |
| Documentation | 4 | `AGENTS.md`, `ARCHITECTURE.md`, `docs/` | New docs check covers structure and links only | Add drift checks if more modules are introduced |
| Asset performance | 4 | `src/assets/hero-background.webp`, `docs/generated/asset-inventory.md` | No automated asset budget yet | Add a bundle or asset-size budget if image churn increases |
| Deployment | 4 | `.github/workflows/firebase-hosting-*.yml`, `firebase.json` | CI uses `build-only` for deployment | Keep local `bun run build` as pre-push gate |
