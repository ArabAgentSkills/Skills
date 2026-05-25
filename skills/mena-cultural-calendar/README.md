# MENA Cultural Calendar

This skill helps agents reason about Arab/MENA cultural, religious, public-holiday, school, salary, shopping-season, and campaign calendars without turning estimates into facts.

## Main Uses

- Ramadan, Eid al-Fitr, Eid al-Adha, and Hajj planning.
- National day and public commemoration review.
- Support, banking, logistics, school, and campaign calendar caveats.
- Refresh rules for lunar, annual, sector, and retailer-led dates.

## Maintenance

- Keep `SKILL.md` short and procedural.
- Put country and event detail in `references/*.md` and `sources.yml`.
- Keep all Hijri/lunar dates visibly labeled as estimated until confirmed by official country sources.
- Run `pnpm skills:validate`, `pnpm validate`, and script checks after edits.

## Boundaries

This skill prepares plans and reviews risk. It does not launch campaigns, send messages, make religious rulings, or guarantee public/private sector closure windows.
