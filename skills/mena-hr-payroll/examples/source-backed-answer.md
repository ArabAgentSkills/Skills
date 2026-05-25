# Source-Backed Answer Example

Request: Compare two vendors for a country-specific integration.

Use this structure:

## Files read

- `skills/mena-hr-payroll/sources.yml`
- `skills/mena-hr-payroll/vendors/<vendor>.md`
- `skills/mena-hr-payroll/references/integration-checklist.md` when implementation or launch readiness is requested

## Recommendation

Give the safest source-backed option for the requested country and workflow. If the evidence is weak, say that a vendor-access step is required before implementation.

## Source-backed comparison

Compare only facts present in vendor files and source URLs. Mention docs access, docs confidence, source quality, and country fit.

## Unknowns

List every missing endpoint shape, auth detail, webhook signature, SDK claim, compliance claim, pricing claim, or production behavior as `Unknown from public docs` or `Needs vendor access`.

## Validation steps

Include sandbox or test-account checks, webhook/callback tests, retry/idempotency checks, logging/privacy checks, and a production approval gate.

Avoid:

- Inventing endpoint paths.
- Claiming support for flows not in source-backed notes.
- Treating a blog or directory as ground truth.
- Giving live-action instructions for high-risk flows without explicit approval.

Category: hr-payroll
