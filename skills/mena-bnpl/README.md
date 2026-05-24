# MENA BNPL

Use this skill when integrating or evaluating Arab/MENA buy-now-pay-later providers such as Tabby, Tamara, valU, Souhoola, Shahry, Postpay, Cashew, and related checkout, order, refund, and settlement workflows.

## Vendors

| Vendor | Countries | Docs Confidence | Docs Access | Source Score |
| --- | --- | --- | --- | ---: |
| Cashew | UAE, Saudi Arabia | C | unknown | 10 |
| Postpay | UAE, Saudi Arabia | B | public | 75 |
| Shahry | Egypt | C | unknown | 10 |
| Souhoola | Egypt | B | public | 75 |
| Tabby | UAE, Saudi Arabia, Kuwait, Bahrain, Qatar, Saudi, MENA | A | public | 80 |
| Tamara | Saudi Arabia, UAE, Kuwait, Bahrain, GCC | A | public | 80 |
| valU | Egypt | B | public | 75 |

## Usage

Copy this folder into an agent skills directory, or keep the repository mounted and direct the agent to use `skills/mena-bnpl/SKILL.md`.

## Maintenance

- Update `vendors/*.md` only with source-backed facts.
- Run `pnpm skills:validate` after edits.
- Run `pnpm evals:run` before release.
