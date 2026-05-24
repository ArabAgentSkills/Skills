# MENA Communications

Use this skill when integrating Arab/MENA SMS, WhatsApp, voice, OTP, contact-center, and telephony APIs such as Unifonic, CEQUENS, Taqnyat, Msegat, Maqsam, ZIWO, YallaSMS, VictoryLink, and similar providers.

## Vendors

| Vendor | Countries | Docs Confidence | Docs Access | Source Score |
| --- | --- | --- | --- | ---: |
| CEQUENS | Egypt, UAE, Saudi Arabia, MENA | A | public | 100 |
| Maqsam | Jordan, Saudi Arabia, UAE, MENA | A | public | 100 |
| Msegat | Saudi Arabia | B | public | 95 |
| Taqnyat | Saudi Arabia | A | public | 80 |
| Unifonic | Saudi Arabia, UAE, Jordan, Egypt, MENA | A | public | 80 |
| VictoryLink | Egypt | C | unknown | 10 |
| YallaSMS | Egypt | C | unknown | 10 |
| ZIWO | UAE, Saudi Arabia, Qatar, Bahrain, MENA | A | public | 100 |

## Usage

Copy this folder into an agent skills directory, or keep the repository mounted and direct the agent to use `skills/mena-comms/SKILL.md`.

## Maintenance

- Update `vendors/*.md` only with source-backed facts.
- Run `pnpm skills:validate` after edits.
- Run `pnpm evals:run` before release.
