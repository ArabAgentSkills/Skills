# MENA Marketing Localization

Use this skill for Arab/MENA campaign localization, landing pages, paid social, SEO, creators, offers, trust signals, Ramadan/Eid/national-day planning, and campaign sensitivity review.

## Files

| Path | Purpose |
| --- | --- |
| `SKILL.md` | Short router and response contract. |
| `sources.yml` | Source groups and scoped market notes. |
| `references/*.md` | Campaign, platform, calendar, creator, offer, trust, and sensitivity guidance. |
| `examples/campaign-localization-brief.md` | Source-backed campaign brief shape. |
| `evals/*.yml` | Heuristic prompts and expected behavior. |

## Usage

Start with `SKILL.md`, then load only the reference file that matches the requested workflow. Treat the skill as an evidence and review router, not a replacement for native, legal, platform, or category expertise.

## Maintenance

- Add market notes only when they are scoped by country, segment, channel, confidence, evidence, and source URL.
- Mark unsupported or stale notes as `Unknown from public sources` or `needs expert review`.
- Run `pnpm skills:validate`, `pnpm test`, and `pnpm site:build` after edits when the repo validator is expected to cover the changed files.
