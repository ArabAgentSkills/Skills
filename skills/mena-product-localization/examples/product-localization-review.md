# Product Localization Review Example

## Files read

- `skills/mena-product-localization/SKILL.md`
- `skills/mena-product-localization/sources.yml`
- `skills/mena-product-localization/references/rtl-ux.md`
- `skills/mena-product-localization/references/bidi-text.md`
- `skills/mena-product-localization/references/checkout-localization.md`
- `skills/mena-product-localization/references/currency-and-vat.md`

## Summary

The checkout needs RTL and bidi fixes before an Arabic launch. The highest-risk issues are mixed Arabic/LTR payment references, VAT wording without jurisdiction review, and payment-method copy that implies provider support without source evidence.

## Source-backed facts

- Unicode and W3C guidance support deliberate direction and bidi isolation for mixed-direction text.
- CLDR/Intl-backed formatting should handle currency, numerals, dates, and plural categories.
- libphonenumber is the recommended source-backed path for phone parsing and formatting.

## Assumptions

- Target market is Saudi Arabia.
- User-facing language is Modern Standard Arabic.
- Payment provider implementation is handled by `mena-payments`.

## Unknowns

- Exact VAT wording: `Unknown from public docs` until reviewed through `arab-einvoicing-tax` and local tax/legal review.
- Payment method ordering: unknown without provider docs and merchant analytics.
- Native Arabic copy quality: needs native review.

## Validation steps

- Run the mixed-direction UI through RTL browser tests.
- Test Arabic plural counts at CLDR category boundaries.
- Test phone input with country context and E.164 storage.
- Confirm checkout totals, fees, VAT labels, and payment references in sandbox.

## Production launch gate

Do not publish checkout copy, change payment ordering, or launch paid/outbound campaign copy until native review, tax/payment review, and explicit approval are complete.
