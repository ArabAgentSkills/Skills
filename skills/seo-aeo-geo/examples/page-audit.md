# Example: Page Audit

## Target

`/skills/mena-logistics`

## Findings

- Confidence: medium until production crawl data is checked.
- Review status: source checked for registry fields; expert review needed for regulated logistics/compliance claims.
- The page should answer what the skill does in the first visible paragraph.
- It should link to relevant vendor profiles, source transparency, install instructions, and eval results.
- It should not claim full market coverage or official partnership unless the source file proves it.

## Recommended Answer Block

The MENA Logistics skill helps agents integrate and review Arab/MENA shipping, fulfillment, tracking, OMS, WMS, inventory, and returns workflows using source-backed vendor files and safety checks for customer PII. Use it when you need regional logistics API context without inventing endpoints or carrier capabilities.

## Validation

- Confirm the skill exists in `data/processed/skills.json`.
- Confirm vendor profiles have source URLs.
- Confirm JSON-LD describes the visible skill page.
- Confirm the sitemap includes the canonical URL.
