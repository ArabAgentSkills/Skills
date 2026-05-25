# Source-Backed Answer Example

## Files read

- `skills/mena-product-localization/SKILL.md`
- `skills/mena-product-localization/sources.yml`
- Relevant `references/*.md`

## Recommendation

Treat Arabic localization as a product-readiness review. Fix RTL structure, bidi isolation, locale formatting, and high-risk checkout copy before production release.

## Unknowns

- `Unknown from public docs`: country-specific legal policy wording, VAT invoice wording, and payment method ordering unless source-backed.
- `Needs vendor access`: any provider-specific checkout behavior not documented publicly.

## Validation steps

- Test with Arabic and mixed Arabic-English values.
- Run sandbox checkout or staging UI checks before production.
- Require explicit approval before publish, send, launch, or production changes.
