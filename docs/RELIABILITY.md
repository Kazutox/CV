# Reliability

Status: Verified
Last reviewed: 2026-06-11
Owner: Repository maintainer

## Runtime Model
The production site is static Firebase Hosting output. Reliability depends on successful builds, valid static assets, and correct hosting configuration rather than server uptime inside this repository.

## Deployment Flow
- Pull requests create Firebase preview deployments.
- Pushes to `master` deploy to the live channel.
- Tag pushes also deploy to the live channel for versioned releases.

## Verification Gates
- `bun run docs:check` verifies canonical docs and markdown links.
- `bun run build` runs `vue-tsc` and `vite build`.
- GitHub workflows run docs checks before Firebase build-only deployment.

## Operational Risks
- Contact details are user-facing and should be checked carefully after edits.
- Large hero assets affect first-load performance.
- Firebase service account secrets are required in GitHub Actions but are not stored in this repository.
