# CLAUDE

Use `AGENTS.md` as the primary agent navigation map. The source-of-truth documentation lives in `docs/`, with `ARCHITECTURE.md` as the high-level system map.

## Commands

```bash
bun run dev
bun run preview
bun run docs:check
```

```bash
bun run build
bun run build-only
bun run type-check
bun run lint
```

Key references:
- `ARCHITECTURE.md` for runtime structure and boundaries.
- `docs/product-specs/cv-site.md` for user-facing behavior.
- `docs/FRONTEND.md` for component and asset conventions.
- `docs/SECURITY.md` for contact-detail and external-link handling.
