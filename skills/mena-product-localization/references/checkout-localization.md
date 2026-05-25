# Checkout Localization

## Scope

Localized checkout covers language, direction, currency, payment methods, tax, shipping, returns, support, error copy, and trust signals together.

## Review Checks

- Payment amount, currency, tax, shipping, fees, discount, and total are visible before confirmation.
- Payment references, SKUs, order IDs, phone numbers, and URLs are bidi-isolated.
- Payment method ordering is evidence-backed or framed as a hypothesis.
- Refund, cancellation, capture, void, BNPL, COD, and installment copy is provider-specific.

## Routing

- Payment provider details: `mena-payments`.
- BNPL and installment details: `mena-bnpl`.
- Tax and invoice details: `arab-einvoicing-tax`.
- Delivery and COD operations: `mena-logistics`.

## Safety

- Do not expose gateway internals or raw API errors to users.
- Do not add trust marks, PCI claims, government logos, bank logos, or regulator logos unless authorized.
- Require explicit approval before changing production checkout copy or payment behavior.
