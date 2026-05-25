# MENA Customer Support Integration Checklist

Use this file only when implementation, review, or launch readiness is requested.

## Source Review

- Read `sources.yml` and the relevant scenario reference file.
- Open current platform docs if implementation depends on WhatsApp, Instagram, or provider-specific behavior.
- Mark missing facts as `Unknown from public docs`, `Needs vendor access`, or `Needs merchant policy`.
- Prefer official docs, platform policies, payment security sources, carrier records, and merchant policy over blogs or assumptions.

## Answer Shape

1. Files read.
2. Scenario, channel, language, and risk level.
3. Draft macro or implementation path.
4. Required policy inputs and unknowns.
5. Safe data fields and prohibited data fields.
6. Escalation owner.
7. Sandbox/test plan.
8. Production launch gate and rollback notes.

## Build Review

- Keep message templates in versioned configuration, not ad hoc code.
- Keep customer PII, card data, identity data, and tax documents out of logs.
- Use idempotent ticket updates and message-send retries.
- Add rate limits and human handoff for repeated failures.
- Store only stable references such as case IDs, order IDs, payment references, and tracking IDs.
- Keep sandbox/test queue separate from production sending.

## Production Launch Gate

- Source URLs and current platform policy checked.
- Merchant policy inputs approved.
- Native review completed for dialect or public customer-facing Arabic.
- Legal/tax/payment/security review completed where needed.
- Test cases cover failed payment, pending payment, delayed refund, delivery delay, lost shipment, complaint, OTP, and cancellation.
- Human approval captured before live outbound messaging or customer-record changes.
