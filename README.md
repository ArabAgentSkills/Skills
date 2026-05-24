# Arab Agent Skills

[![Validate public skills](https://github.com/ArabAgentSkills/Skills/actions/workflows/validate-public-skills.yml/badge.svg)](https://github.com/ArabAgentSkills/Skills/actions/workflows/validate-public-skills.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-white.svg)](LICENSE)
![Skills](https://img.shields.io/badge/skills-11-white.svg)
![Vendors](https://img.shields.io/badge/vendors-95-white.svg)

```text
      ###    ####      ###    ####
     #   #   #   #    #   #   #   #
     #####   ####     #####   ####
     #   #   #  #     #   #   #   #
     #   #   #   #    #   #   ####

       ###    ####  #####  #   #  #####
      #   #  #      #      ##  #    #
      #####  #  ##  ####   # # #    #
      #   #  #   #  #      #  ##    #
      #   #   ####  #####  #   #    #

       ####  #   #  #####  #       #        ####
      #      #  #     #    #       #       #
       ###   ###      #    #       #        ###
          #  #  #     #    #       #           #
      ####   #   #  #####  #####   #####  ####
```

> Agent-ready skills for Arab and MENA work. The first public atlas covers regional APIs; the broader ecosystem will include marketing, sales, support, localization, content, operations, and Arab-market context.

Website: [ArabSkills.info](https://arabskills.info)

This is the public install repo for Arab Agent Skills. It gives agents the regional context they usually miss: local gateways, government rails, webhook gotchas, sandbox notes, compliance flows, Arabic-language nuance, buying norms, and source-backed operating workflows.

Facts are intentionally conservative. If public docs do not prove a claim, vendor files say `Unknown from public docs` or `Needs vendor access`.

## Origin

Arab Agent Skills started with [Arab Payments Skill Atlas](https://github.com/ArabAgentSkills/arab-payments-skill-atlas), a payments-focused skill built by Mohamed Waleed for one of his projects to help his agents work with regional payment APIs.

Mohamed showed it to Fady Azzouny, and that sparked the bigger question: why not build a maintained skills ecosystem for Arab agents across APIs, marketing, sales, support, localization, content, operations, Arabic NLP, open data, and Arab-market context?

Fady Azzouny and Mohamed Waleed then built Arab Agent Skills from that starting point.

## Quick install

```bash
npx skills add ArabAgentSkills/Skills
```

Install a smaller target set when your agent supports filtering:

```bash
npx skills add ArabAgentSkills/Skills -a codex -a claude-code -a cursor
```

## What is inside

| Path | Purpose |
| --- | --- |
| [`skills/`](skills/) | Agent skills with short `SKILL.md` routing files, vendor facts, examples, scripts, references, and evals. |
| [`data/vendors.public.json`](data/vendors.public.json) | Public vendor registry subset with docs access, confidence, quality score, and source URLs. |
| [`data/skills.public.json`](data/skills.public.json) | Public skill metadata used by indexes and installers. |
| [`standards/`](standards/) | Skill style, source quality, release, eval, and security checklists. |
| [`docs/`](docs/) | How to use, extend, and review these skills. |

## Skills

| Skill | Category | Priority | Maturity | Vendors | Eval score |
| --- | --- | --- | --- | ---: | ---: |
| [Arab E-Invoicing and Tax](skills/arab-einvoicing-tax/) | tax | P0 | alpha | 10 | 100 |
| [MENA BNPL](skills/mena-bnpl/) | bnpl | P0 | alpha | 7 | 100 |
| [MENA Communications](skills/mena-comms/) | communications | P0 | alpha | 8 | 100 |
| [MENA Logistics](skills/mena-logistics/) | logistics | P0 | alpha | 14 | 100 |
| [MENA Payments](skills/mena-payments/) | payments | P0 | alpha | 15 | 100 |
| [Arab Identity and Government APIs](skills/arab-identity-gov/) | identity-government | P1 | alpha | 7 | 100 |
| [MENA Commerce, POS, and Accounting](skills/mena-commerce-pos-accounting/) | commerce-pos-accounting | P1 | alpha | 8 | 100 |
| [MENA Open Banking](skills/mena-open-banking/) | open-banking | P1 | alpha | 7 | 100 |
| [Arab Open Data](skills/arab-open-data/) | open-data | P2 | draft | 8 | 100 |
| [Arabic NLP](skills/arabic-nlp/) | arabic-nlp | P2 | alpha | 6 | 100 |
| [MENA HR and Payroll](skills/mena-hr-payroll/) | hr-payroll | P2 | draft | 5 | 100 |

See [`SKILL_INDEX.md`](SKILL_INDEX.md) for the full category map and [`VENDOR_INDEX.md`](VENDOR_INDEX.md) for the vendor list.

## Source confidence model

| Grade | Meaning |
| --- | --- |
| `A` | Official docs, API reference, OpenAPI/Postman, or SDK evidence is public and useful. |
| `B` | Official source exists but is partial, fragmented, gated in places, or needs manual review. |
| `C` | Weak public source evidence; useful as a lead but not enough for confident implementation. |
| `unknown` | Public evidence is not enough yet. |

Source quality score is a review aid, not a certification. It rewards official docs, API references, OpenAPI/Postman assets, official SDKs, and recent evidence.

## Safety

- Do not commit API keys, payment credentials, customer data, private docs, or gated vendor material.
- Keep sandbox and production instructions separate.
- Require explicit user approval before live payment, refund, payout, identity, tax, or open-banking actions.
- Do not invent endpoints, credentials, SDK support, pricing, compliance claims, or webhook behavior.
- Prefer official vendor docs and mark uncertainty honestly.

## Supported agent surfaces

These skills are written for generic agent-skill runtimes and tested against Codex-style, Claude-style, OpenClaw-style, and generic routing patterns. Each `SKILL.md` uses short frontmatter plus progressive disclosure so agents load vendor details only when needed.

## Contributing

Good contributions add evidence, not guesses. New skills and vendor additions are reviewed before publication; nothing submitted by users or organizations is posted automatically.

1. Add or update official source URLs in the relevant vendor file.
2. Mark docs access and confidence honestly.
3. Keep `SKILL.md` short; put facts in `vendors/*.md`.
4. Add eval prompts when behavior changes.
5. Use [`standards/source-quality-rubric.md`](standards/source-quality-rubric.md) before opening a PR.
6. For new skill ideas, open the skill submission issue template and wait for maintainer approval.

## Update flow

This repo is regenerated from a reviewed source-of-truth registry. Manual PRs are welcome when they include official sources and keep unknowns explicit.