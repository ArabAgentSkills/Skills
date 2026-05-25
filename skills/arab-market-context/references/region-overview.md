# Regional Overview

Last checked: 2026-05-25

## Purpose

Use this reference to turn country context into scoped operating assumptions, not broad claims about Arab markets or Arab people.

## Cross-Country Rules

- Arabic is the safest default for public, support, government, compliance-adjacent, and broad consumer flows.
- English is commonly relevant for GCC, international-facing, technical, enterprise, and cross-border B2B workflows.
- French remains commercially relevant in Morocco, Tunisia, Algeria, and Lebanon.
- Kurdish may be required for Iraq/Kurdistan Region contexts.
- MSA is the default for formal Arabic. Dialect, slang, humor, Arabizi, and public support macros require native review.
- Public digital adoption statistics justify product planning and test design; they do not prove channel preference, personality, trust, or purchase behavior.
- Lower account ownership or digital merchant-payment indicators should trigger checkout fallback discovery, not automatic claims about cash or COD.
- Holidays and commercial seasons need annual refresh because Islamic holidays move and official announcements vary.

## Default Skill Handoffs

| Topic | Route to |
| --- | --- |
| Payment gateways, refunds, captures, payment links, webhook behavior | `skills/mena-payments` |
| Shipping, last-mile, labels, tracking, address validation, COD logistics | `skills/mena-logistics` |
| SMS, WhatsApp, OTP, telephony, outbound messaging, opt-in | `skills/mena-comms` |
| Tax, e-invoicing, e-receipts, VAT, fiscal reporting | `skills/arab-einvoicing-tax` |
| Digital identity, national address, government login, official APIs | `skills/arab-identity-gov` |
| Official datasets and government open-data portals | `skills/arab-open-data` |
| Arabic NLP, MSA, dialect routing, text processing | `skills/arabic-nlp` |

## High-Risk Gates

Require explicit approval and source/expert review before live work involving payments, refunds, payouts, identity/government checks, tax submissions, customer data, outbound messages, audience uploads, paid campaigns, public publishing, or production credentials.

## Country Groups

- GCC: Saudi Arabia, UAE, Kuwait, Qatar, Bahrain, Oman. Higher digital-government and payment maturity signals, but country rails, laws, address systems, and language expectations still differ.
- Egypt: large consumer and SMB scale; internet reach is high while account ownership and digital merchant-payment indicators are lower than digital reach.
- Levant: Jordan, Lebanon, Palestine. Digital reach is meaningful, but payment, logistics, trust, macro, conflict, or regulatory conditions vary sharply.
- North Africa: Morocco, Tunisia, Algeria. Arabic/French localization, payment fallback discovery, and logistics flexibility are core assumptions.
- Iraq and Palestine: add conflict, sanctions/compliance, logistics, regional fragmentation, and source-freshness caveats before operational advice.
