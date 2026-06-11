# Security

Status: Verified
Last reviewed: 2026-06-11
Owner: Repository maintainer

## Security Model
This is a static public CV site. There is no authentication, server-side request handling, database, or user-generated content in the current source.

## Sensitive Data Rules
- Contact details in `src/assets/data.json` are public by design but must be copied exactly from the user.
- Do not infer or normalize phone numbers, emails, names, or profile URLs without explicit instruction.
- Do not commit secrets. Firebase deployment credentials are expected to live in GitHub Secrets.

## Link Handling
- External links opened in a new tab should include `rel="noopener noreferrer"`.
- `tel:` and `mailto:` links should be generated from source data rather than duplicated.

## Dependency Hygiene
- Use `bun install` from the tracked lockfile when refreshing dependencies.
- Run `bun run build` after dependency or build-tool changes.
