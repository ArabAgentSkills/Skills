# Contributing

Contributions should improve source quality, skill reliability, or eval coverage.

## Vendor Contributions

1. Prefer official docs, developer portals, OpenAPI specs, Postman collections, SDK repos, `llms.txt`, and government references.
2. Use blogs or directories only as leads.
3. Do not add claims about endpoints, payment methods, countries, pricing, compliance, SDKs, webhooks, or sandbox behavior unless they are source-backed.
4. Mark uncertain fields as `Unknown from public docs` or `Needs vendor access`.
5. Run:

```bash
pnpm registry:validate
pnpm skills:generate
pnpm skills:validate
pnpm evals:run
pnpm site:build
```

## Skill Contributions

Keep `SKILL.md` short. Put facts in `vendors/`, reusable implementation patterns in `references/`, deterministic work in `scripts/`, and launch checks in `evals/`.

Update eval prompts whenever skill routing, safety rules, or workflows change.
