# Currency And VAT

## Formatting

- Use `Intl.NumberFormat` with `style: "currency"` and exact ISO 4217 currency codes.
- Do not hard-code symbol placement, decimal separators, grouping, or minor units.
- Display localized amounts without changing calculation precision.

## VAT Labels

- Show whether displayed prices are VAT-inclusive, VAT-exclusive, mixed, or unknown.
- Separate subtotal, discount, shipping, VAT/tax, fees, and total.
- Keep final payable amount obvious in checkout.

## Routing

- Use `arab-einvoicing-tax` for tax, invoice, receipt, QR, e-invoicing, and compliance claims.
- Do not claim a receipt or invoice is compliant without jurisdiction-specific official-source review.

## Unknowns

- Market-specific invoice wording, tax ID display, QR requirements, and consumer-price display rules are `Unknown from public docs` until source-backed.
