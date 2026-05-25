# Arab Market Context

Use this skill to produce source-backed Arab country context before an agent chooses localization, support, checkout, logistics, outreach, tax, identity, or open-data behavior.

## Countries

Egypt, Saudi Arabia, United Arab Emirates, Kuwait, Qatar, Bahrain, Oman, Jordan, Lebanon, Morocco, Tunisia, Algeria, Iraq, and Palestine.

## Usage

Read `SKILL.md`, then load only the needed country pack under `references/countries/`. Use `sources.yml` and the evidence/confidence references to keep facts scoped, cited, and review-aware.

## Maintenance

- Update country packs only with source-backed facts or explicit review-needed labels.
- Keep behavioral assumptions cautious and testable.
- Run `pnpm validate`, `pnpm test`, and `pnpm site:build` before release.
