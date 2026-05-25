# MENA Commerce, POS, and Accounting Integration Checklist

Use this file only when implementation, review, or launch readiness is requested.

## Source Review

- Read the named vendor file first.
- Open the official source URL if the implementation depends on current endpoint shape.
- Mark anything not found as `Unknown from public docs` or `Needs vendor access`.
- Prefer official docs, developer portals, OpenAPI/Postman assets, SDK repos, and government sources over directories or blog posts.

## Answer Shape

1. Files read.
2. Recommendation or implementation path.
3. Source-backed facts.
4. Unknowns and vendor-access gaps.
5. Security, privacy, and compliance checks.
6. Sandbox/test plan.
7. Production launch gate and rollback notes.

## Build Review

- Keep credentials in environment variables or secret stores.
- Add retries only where idempotency is understood.
- Log stable IDs, not raw PII, card, identity, payroll, tax, or bank data.
- Add sandbox tests before production rollout.
- Use least-privilege scopes and keep webhook/callback verification tied to official docs.

## Launch Gate

- Source URLs checked.
- Webhooks/callbacks tested.
- Error states tested.
- Rollback path documented.
- Human approval captured for high-risk live action.
