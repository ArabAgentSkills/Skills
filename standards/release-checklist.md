# Release Checklist

- `pnpm registry:validate`
- `pnpm skills:validate`
- `pnpm skills:security-check`
- `pnpm evals:run`
- `pnpm test`
- `pnpm site:build`
- P0 skills have at least 5 eval prompts.
- P0 vendor files have source URLs.
- P0 skills have docs confidence noted.
- P0 skills have security coverage.
- Generated changes are reviewed by a maintainer.
