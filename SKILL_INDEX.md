# Skill Index

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

## Category map

| Category | Skill | Vendors | Countries covered in registry |
| --- | --- | ---: | --- |
| arabic-nlp | [arabic-nlp](skills/arabic-nlp/SKILL.md) | 6 | Arab region, UAE, NYU Abu Dhabi, Qatar, QCRI, Open source, Arabic |
| bnpl | [mena-bnpl](skills/mena-bnpl/SKILL.md) | 7 | UAE, Saudi Arabia, Egypt, Kuwait, Bahrain, Qatar, Saudi, MENA |
| commerce-pos-accounting | [mena-commerce-pos-accounting](skills/mena-commerce-pos-accounting/SKILL.md) | 8 | Saudi Arabia, UAE, Egypt, Kuwait, MENA, Jordan, Morocco, Saudi |
| communications | [mena-comms](skills/mena-comms/SKILL.md) | 8 | Egypt, UAE, Saudi Arabia, MENA, Jordan, Qatar, Bahrain |
| hr-payroll | [mena-hr-payroll](skills/mena-hr-payroll/SKILL.md) | 5 | UAE, Saudi Arabia, Saudi, Jordan, Egypt, MENA |
| identity-government | [arab-identity-gov](skills/arab-identity-gov/SKILL.md) | 7 | UAE, Saudi Arabia |
| logistics | [mena-logistics](skills/mena-logistics/SKILL.md) | 14 | UAE, Saudi Arabia, Egypt, Jordan, Kuwait, Bahrain, Qatar, Oman |
| open-banking | [mena-open-banking](skills/mena-open-banking/SKILL.md) | 7 | Bahrain, UAE, Saudi Arabia, Saudi, MENA |
| open-data | [arab-open-data](skills/arab-open-data/SKILL.md) | 8 | Bahrain, Morocco, Oman, Qatar, Saudi Arabia, Tunisia, UAE |
| payments | [mena-payments](skills/mena-payments/SKILL.md) | 15 | UAE, Saudi Arabia, Egypt, Jordan, Kuwait, Qatar, Oman, Lebanon |
| tax | [arab-einvoicing-tax](skills/arab-einvoicing-tax/SKILL.md) | 10 | Bahrain, Egypt, Jordan, Saudi Arabia, UAE, Saudi |

## Skill inventory

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

## How agents should use this repo

- Route with `skills/<skill-id>/SKILL.md` first.
- Read `skills/<skill-id>/vendors/<vendor-id>.md` before giving vendor-specific guidance.
- Use `references/` for reusable implementation patterns.
- Use `evals/` when changing skill behavior.
- Ask for only the missing credentials, country, environment, or workflow choices required for the task.

Generated at: 2026-05-23T23:45:59.494Z