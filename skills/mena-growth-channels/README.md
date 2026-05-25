# MENA Growth Channels

Use this skill for Arab/MENA channel selection and experiment planning across paid social, search/SEO, WhatsApp commerce, creators, marketplaces, partnerships, and related growth loops.

## Files

| Path | Purpose |
| --- | --- |
| `SKILL.md` | Short router and response contract. |
| `sources.yml` | Source groups and scoped channel notes. |
| `references/*.md` | Channel selection, channel-specific safety, and experiment guidance. |
| `examples/channel-test-plan.md` | Source-backed channel test plan example. |
| `evals/*.yml` | Heuristic prompts and expected behavior. |

## Usage

Start with `SKILL.md`, then read `sources.yml` and only the channel reference needed. Treat recommendations as testable hypotheses unless the source directly supports the exact country, segment, channel, and timeframe.

## Maintenance

- Add channel notes only with country, segment, channel, confidence, evidence, and source URL.
- Mark unsupported or stale channel ideas as `Unknown from public sources` or `needs expert review`.
- Run `pnpm skills:validate`, `pnpm test`, and `pnpm site:build` after edits when the repo validator is expected to cover the changed files.
