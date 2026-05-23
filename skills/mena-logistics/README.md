# MENA Logistics

Use this skill when building Arab/MENA shipping, courier, last-mile, label, rate, tracking, pickup, webhook, and fulfillment integrations for Aramex, Bosta, ShipBlu, OTO, Naqel, SMSA, SPL, Quiqup, Shipa, Aymakan, and similar providers.

## Vendors

| Vendor | Countries | Docs Confidence | Docs Access | Source Score |
| --- | --- | --- | --- | ---: |
| Aramex | UAE, Saudi Arabia, Egypt, Jordan, Kuwait, Bahrain, Qatar, Oman, Morocco, MENA | A | public | 60 |
| Aymakan | Saudi Arabia | B | public | 40 |
| Bosta | Egypt, Saudi Arabia, KSA | A | public | 40 |
| Dubai Makani | UAE | B | public | 0 |
| Fetchr | UAE, Saudi Arabia | C | unknown | 30 |
| Jeebly | UAE, Saudi Arabia, Kuwait, Qatar, Bahrain | C | unknown | 30 |
| Naqel | Saudi Arabia, UAE, Bahrain, Kuwait | C | unknown | 30 |
| OTO | Saudi Arabia, UAE, Kuwait, Bahrain, Qatar, Oman, MENA | A | public | 60 |
| Quiqup | UAE | B | public | 40 |
| Saudi National Address API / SPL | Saudi Arabia | B | public | 60 |
| Saudi Post SPL | Saudi Arabia | C | unknown | 30 |
| Shipa | UAE, Saudi Arabia, Kuwait | C | unknown | 30 |
| ShipBlu | Egypt | A | public | 60 |
| SMSA Express | Saudi Arabia, UAE, Bahrain, Kuwait | C | unknown | 30 |

## Usage

Copy this folder into an agent skills directory, or keep the repository mounted and direct the agent to use `skills/mena-logistics/SKILL.md`.

## Maintenance

- Update `vendors/*.md` only with source-backed facts.
- Run `pnpm skills:validate` after edits.
- Run `pnpm evals:run` before release.
