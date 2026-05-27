# Arab Agent Skills

[![Validate public skills](https://github.com/ArabAgentSkills/Skills/actions/workflows/validate-public-skills.yml/badge.svg)](https://github.com/ArabAgentSkills/Skills/actions/workflows/validate-public-skills.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-white.svg)](LICENSE)
![Skills](https://img.shields.io/badge/skills-21-white.svg)
![Regional](https://img.shields.io/badge/regional-10-white.svg)
![Vendors](https://img.shields.io/badge/vendors-96-white.svg)

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

Arab Agent Skills started with [Arab Payments Skill Atlas](https://github.com/ArabAgentSkills/arab-payments-skill-atlas), a payments-focused skill built by [Mohamed Waleed](https://www.linkedin.com/in/mo-waleed92/) for one of his projects to help his agents work with regional payment APIs.

Mohamed showed it to [Fady Azzouny](https://www.linkedin.com/in/fadyazzouny/), and that sparked the bigger question: why not build a maintained skills ecosystem for Arab agents across APIs, marketing, sales, support, localization, content, operations, Arabic NLP, open data, and Arab-market context?

[Fady Azzouny](https://www.linkedin.com/in/fadyazzouny/) and [Mohamed Waleed](https://www.linkedin.com/in/mo-waleed92/) then built Arab Agent Skills from that starting point.

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

## Skill Families

- Infrastructure / API skills: payments, logistics, BNPL, communications, e-invoicing/tax, open banking, identity/government, commerce/POS/accounting, HR/payroll, Arabic NLP, and open data.
- Regional Intelligence Skills: country context, Arabic copy and dialect choice, marketing localization, sales playbooks, support tone, product localization, cultural calendars, growth channels, pricing, and partnerships.

Regional Intelligence files are AI drafted and source checked where possible. Native review, expert review, and market validation are explicitly marked and not implied.

Country packs included in v0: Egypt, Saudi Arabia, United Arab Emirates, Kuwait, Qatar, Bahrain, Oman, Jordan, Lebanon, Morocco, Tunisia, Algeria, Iraq, Palestine.

## Skills

| Skill | Family | Category | Priority | Maturity | Coverage | Eval score |
| --- | --- | --- | --- | --- | --- | ---: |
| [Arab E-Invoicing and Tax](skills/arab-einvoicing-tax/) | Infrastructure | tax | P0 | alpha | 10 vendors | 100 |
| [Arab Market Context](skills/arab-market-context/) | Regional Intelligence | market-context | P0 | draft | 14 countries | 100 |
| [Arabic Copywriting and Dialects](skills/arabic-copywriting-dialects/) | Regional Intelligence | copywriting-dialects | P0 | draft | 14 countries | 100 |
| [MENA BNPL](skills/mena-bnpl/) | Infrastructure | bnpl | P0 | alpha | 7 vendors | 100 |
| [MENA Communications](skills/mena-comms/) | Infrastructure | communications | P0 | alpha | 8 vendors | 100 |
| [MENA Logistics](skills/mena-logistics/) | Infrastructure | logistics | P0 | alpha | 15 vendors | 100 |
| [MENA Marketing Localization](skills/mena-marketing-localization/) | Regional Intelligence | marketing-localization | P0 | draft | 14 countries | 100 |
| [MENA Payments](skills/mena-payments/) | Infrastructure | payments | P0 | alpha | 15 vendors | 100 |
| [MENA Product Localization](skills/mena-product-localization/) | Regional Intelligence | product-localization | P0 | draft | 14 countries | 100 |
| [MENA Sales Playbooks](skills/mena-sales-playbooks/) | Regional Intelligence | sales-playbooks | P0 | draft | 14 countries | 100 |
| [Arab Identity and Government APIs](skills/arab-identity-gov/) | Infrastructure | identity-government | P1 | alpha | 7 vendors | 100 |
| [MENA Commerce, POS, and Accounting](skills/mena-commerce-pos-accounting/) | Infrastructure | commerce-pos-accounting | P1 | alpha | 8 vendors | 100 |
| [MENA Cultural Calendar](skills/mena-cultural-calendar/) | Regional Intelligence | cultural-calendar | P1 | draft | 14 countries | 100 |
| [MENA Customer Support](skills/mena-customer-support/) | Regional Intelligence | customer-support | P1 | draft | 14 countries | 100 |
| [MENA Growth Channels](skills/mena-growth-channels/) | Regional Intelligence | growth-channels | P1 | draft | 14 countries | 100 |
| [MENA Open Banking](skills/mena-open-banking/) | Infrastructure | open-banking | P1 | alpha | 7 vendors | 100 |
| [Arab Open Data](skills/arab-open-data/) | Infrastructure | open-data | P2 | draft | 8 vendors | 100 |
| [Arabic NLP](skills/arabic-nlp/) | Infrastructure | arabic-nlp | P2 | alpha | 6 vendors | 100 |
| [MENA HR and Payroll](skills/mena-hr-payroll/) | Infrastructure | hr-payroll | P2 | draft | 5 vendors | 100 |
| [MENA Partnerships and Distribution](skills/mena-partnerships-distribution/) | Regional Intelligence | partnerships-distribution | P2 | draft | 14 countries | 100 |
| [MENA Pricing and Packaging](skills/mena-pricing-packaging/) | Regional Intelligence | pricing-packaging | P2 | draft | 14 countries | 100 |

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
- Do not invent market facts, cultural rules, dialect quality, review status, or local sales/marketing norms.
- Public dialect copy, high-stakes support macros, and strategic regional recommendations require native or expert review unless already approved.
- Prefer official vendor docs and mark uncertainty honestly.

## Supported agent surfaces

These skills are written for generic agent-skill runtimes and tested against Codex-style, Claude-style, OpenClaw-style, and generic routing patterns. Each `SKILL.md` uses short frontmatter plus progressive disclosure so agents load vendor details only when needed.

## Contributing

Good contributions add evidence, not guesses. New skills and vendor additions are reviewed before publication; nothing submitted by users or organizations is posted automatically.

1. Add or update official source URLs in the relevant vendor file.
2. Mark docs access and confidence honestly.
3. Keep `SKILL.md` short; put facts in `vendors/*.md`.
4. For regional claims, add country, segment, channel, confidence, evidence type, source URLs, and review status.
5. Use [`standards/source-quality-rubric.md`](standards/source-quality-rubric.md) before opening a PR.
6. Add eval prompts when behavior changes.
7. For new skill ideas, open the skill submission issue template and wait for maintainer approval.

## Update flow

This repo is regenerated from a reviewed source-of-truth registry. Manual PRs are welcome when they include official sources and keep unknowns explicit.