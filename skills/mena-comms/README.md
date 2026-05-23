# MENA Communications

Use this skill when integrating Arab/MENA SMS, WhatsApp, voice, OTP, contact-center, and telephony APIs such as Unifonic, CEQUENS, Taqnyat, Msegat, Maqsam, ZIWO, YallaSMS, VictoryLink, and similar providers.

## Vendors

| Vendor | Countries | Docs Confidence | Docs Access | Source Score |
| --- | --- | --- | --- | ---: |
| CEQUENS | Egypt, UAE, Saudi Arabia, MENA | A | public | 40 |
| Maqsam | Jordan, Saudi Arabia, UAE, MENA | A | public | 60 |
| Msegat | Saudi Arabia | B | public | 60 |
| Taqnyat | Saudi Arabia | A | public | 40 |
| Unifonic | Saudi Arabia, UAE, Jordan, Egypt, MENA | A | public | 40 |
| VictoryLink | Egypt | C | unknown | 30 |
| YallaSMS | Egypt | C | unknown | 30 |
| ZIWO | UAE, Saudi Arabia, Qatar, Bahrain, MENA | A | public | 60 |

## Usage

Copy this folder into an agent skills directory, or keep the repository mounted and direct the agent to use `skills/mena-comms/SKILL.md`.

## Maintenance

- Update `vendors/*.md` only with source-backed facts.
- Run `pnpm skills:validate` after edits.
- Run `pnpm evals:run` before release.
