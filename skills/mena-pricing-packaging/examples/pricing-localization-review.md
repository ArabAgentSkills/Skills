# Pricing Localization Review Example

## Files read

- `skills/mena-pricing-packaging/SKILL.md`
- `skills/mena-pricing-packaging/sources.yml`
- `skills/mena-pricing-packaging/references/pricing-page-localization.md`
- `skills/mena-pricing-packaging/references/vat-and-currency.md`
- `skills/mena-pricing-packaging/references/discounting.md`

## Request

Review a Saudi SME SaaS pricing page with monthly and annual plans.

## Source-backed facts

- Official tax sources make VAT wording high-risk and jurisdiction-specific.
- Public regional SaaS pages commonly show monthly/annual toggles, plan limits, local currency, trials, and enterprise quote paths.
- Public page patterns do not prove exact buyer preferences or willingness to pay.

## Confidence-labeled recommendations

- High: show billing currency, billing period, tax treatment, and final payable amount clearly.
- Medium: use annual billing and enterprise quote paths if the product can operationally support them.
- Low: exact plan thresholds and price anchors require customer evidence.

## Unknowns

- Exact VAT display mode: `Unknown from public docs` until tax context and expert review are complete.
- Competitor prices: unknown unless rechecked from current public sources with checked dates.
- Arabic discount copy: needs native and legal review.

## Validation steps

- Verify each public price point against current source or internal approval.
- Confirm VAT/tax wording with `arab-einvoicing-tax` and expert review.
- Test checkout totals in sandbox before production.

## Production launch gate

Do not publish pricing, activate discounts, send quotes, or launch paid offer campaigns without explicit approval.
