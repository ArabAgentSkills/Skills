# Source-Backed Country Brief Example

## Files read

- `skills/arab-market-context/SKILL.md`
- `skills/arab-market-context/sources.yml`
- `skills/arab-market-context/references/region-overview.md`
- `skills/arab-market-context/references/countries/egypt.md`

## Source-backed facts

| Claim | Confidence | Source |
| --- | --- | --- |
| For Egypt digital planning, DataReportal reports 98.2m internet users and 121m mobile connections in its 2026 country report. This is an aggregate planning signal, not proof of support-channel preference. | B | https://datareportal.com/reports/digital-2026-egypt |
| World Bank indicators in the packet report Egypt account ownership at 43.1% and digital merchant payment at 5.2% for 2024. Do not infer card-first checkout from internet reach alone. | A for values, C for checkout implication | https://data.worldbank.org/indicator/account.t.d ; https://data.worldbank.org/indicator/merchant.pay |

## Planning hypotheses

- Offer Arabic-first support with English for enterprise, technical, and cross-border B2B workflows.
- For ecommerce, discover COD, wallet, bank transfer, payment link, and assisted checkout needs before choosing a payment method.
- Collect phone, city/governorate, district, landmark, and delivery notes where the logistics provider supports them.

## Unknowns

- Exact COD rate by vertical is `Unknown from public docs`.
- Exact WhatsApp vs phone vs social-DM priority by customer segment needs local/operator review.
- Egyptian colloquial copy needs native review before public use.

## Review required

- Payments and refunds: route to `skills/mena-payments` and use sandbox before production.
- Delivery and returns: route to `skills/mena-logistics`.
- Tax/e-invoice claims: route to `skills/arab-einvoicing-tax`.

## Validation steps

- Recheck source URLs and `last_checked_at`.
- Confirm vendor docs before implementation.
- Test checkout, address, support, and refund flows in sandbox/draft.
- Get explicit approval before live payment, refund, outbound message, campaign, or customer-data changes.
