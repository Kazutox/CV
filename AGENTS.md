# AGENTS

## Purpose
- Use this file as the quick navigation map for agents working in this repository.
- Keep detailed architecture, product, design, and quality guidance in `docs/`.
- Verify code-facing claims against the current source before changing docs.

## Quick Navigation
- Architecture: `ARCHITECTURE.md`
- Product specs: `docs/product-specs/index.md`
- Design docs: `docs/design-docs/index.md`
- Frontend standards: `docs/FRONTEND.md`
- Quality, reliability, and security:
  - `docs/QUALITY_SCORE.md`
  - `docs/RELIABILITY.md`
  - `docs/SECURITY.md`
- Planning and debt:
  - `docs/PLANS.md`
  - `docs/exec-plans/tech-debt-tracker.md`
- Generated evidence: `docs/generated/`
- Historical visual spec: `design/DESIGN.md`

## Commands
```bash
bun run dev          # Start development server with hot reload
bun run preview      # Preview production build
bun run docs:check   # Validate required docs and local markdown links
```

```bash
bun run build        # Type-check and build for production
bun run build-only   # Build without type-checking
bun run type-check   # Run TypeScript type checking only
bun run lint         # Run ESLint with zero warnings allowed
```

## Working Rules
- Treat `src/assets/data.json` as the source of truth for CV content and contact details.
- Preserve exact user-provided contact fields. Do not normalize phone numbers, emails, or names unless explicitly asked.
- Keep `AGENTS.md` concise. Add detailed guidance to `docs/` and link to it here.
- Do not stage unrelated local changes; this repository often has concurrent draft artifacts.
