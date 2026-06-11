# Asset Inventory

Generated from: `ls -lh src/assets public` and direct source inspection
Generated at: 2026-06-11
Generation method: manual command capture during documentation repair
Verification status: Verified

## Bundled Assets
| Asset | Purpose | Notes |
| --- | --- | --- |
| `src/assets/hero-background.webp` | Hero section background imported by `src/components/HeroSection.vue` | Optimized from the previous PNG at the same 1672x941 dimensions |
| `src/assets/jcloete.jpg` | Profile image asset | Tracked source image |
| `src/assets/logo.jpg` | Legacy/static image asset | Not imported by the current Vue entrypoint |

## Public Assets
| Asset | Purpose | Notes |
| --- | --- | --- |
| `public/jcloete.jpg` | Public profile image | Served directly from the public root |
| `public/VueCert01.jpg` | Course certificate image | Referenced by `courses/Vue1.md` |
| `public/VueCert02.jpg` | Course certificate image | Referenced by `courses/Nuxt1.md` |
| `public/favicon.ico` | Browser favicon | Copied to production build |

## Asset Rules
- Optimize large image assets before importing them into Vue components.
- Prefer WebP for photographic or scenic hero imagery when browser support is acceptable.
- Keep generated `dist/` assets out of source-of-truth documentation; document source assets instead.
