# Source-Backed Answer Example

## Files read

- `SKILL.md`
- `sources.yml`
- `references/region-overview.md`
- `references/countries/saudi-arabia.md`

## Recommendation

Use Saudi Arabia context as a planning layer, then route payment, address, tax, and support implementation to the relevant domain skills.

## Unknowns

- Exact sector-specific support-channel priority is `Unknown from public docs`.
- Saudi dialect or Ramadan campaign wording needs native review.
- Gateway endpoint, refund, and settlement behavior needs vendor docs.

## Validation steps

- Check country claims against the claim ledger.
- Load `skills/mena-payments`, `skills/mena-logistics`, or `skills/arab-einvoicing-tax` before implementation.
- Keep sandbox and production separate.
- Require explicit approval before live money, identity, tax, customer-data, outbound messaging, paid campaign, or public-publishing actions.
