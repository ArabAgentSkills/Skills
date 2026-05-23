# Arab Open Data Integration Checklist

Use this file only when implementation, review, or launch readiness is requested.

## Source Review

- Read the named vendor file first.
- Open the official source URL if the implementation depends on current endpoint shape.
- Mark anything not found as `Unknown from public docs` or `Needs vendor access`.

## Build Review

- Keep credentials in environment variables or secret stores.
- Add retries only where idempotency is understood.
- Log stable IDs, not raw PII, card, identity, payroll, tax, or bank data.
- Add sandbox tests before production rollout.

## Launch Gate

- Source URLs checked.
- Webhooks/callbacks tested.
- Error states tested.
- Rollback path documented.
- Human approval captured for high-risk live action.
