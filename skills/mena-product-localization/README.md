# MENA Product Localization

This skill helps agents review Arabic and MENA product localization as a product, data-model, UX, accessibility, and safety workflow.

## Main Uses

- Arabic RTL and mixed Arabic-English UI review.
- Arabic copy, pluralization, numerals, dates, calendars, and currency display.
- Phone, address, name, checkout, VAT label, and policy-copy review.
- Launch checklists that separate source-backed facts from assumptions and unknowns.

## Maintenance

- Keep `SKILL.md` short and procedural.
- Put detailed rules in `references/*.md`.
- Update `sources.yml` only with official standards, official docs, government sources, or clearly labeled lower-confidence references.
- Run `pnpm skills:validate`, `pnpm validate`, and relevant script checks after edits.

## Boundaries

This skill reviews localization. It does not replace payment, tax, logistics, identity, legal, or privacy implementation skills.
