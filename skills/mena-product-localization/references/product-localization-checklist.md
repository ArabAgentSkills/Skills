# Product Localization Checklist

## Inputs

- Country and locale.
- Audience and channel.
- Surface type.
- Data stored vs data displayed.
- High-risk domains: payment, tax, identity, logistics, legal, privacy, payroll, health, credit, or minors.

## Technical Checks

- `lang` and `dir` are set correctly.
- Logical CSS properties are used where possible.
- Mixed-direction values are isolated.
- Arabic plural categories are implemented and tested.
- Numbers, dates, currency, and calendars use CLDR/Intl-backed APIs.
- Phone numbers use libphonenumber or equivalent.
- Address forms use country-backed metadata.

## Product Checks

- Arabic copy is native-reviewed for public/high-impact flows.
- Legal, tax, identity, payment, and policy copy has expert review.
- Trust badges and logos are authorized.
- Unknowns are explicit.
- Launch, publish, send, or production checkout changes require explicit approval.

## Output Shape

- Files and sources used.
- Source-backed facts.
- Assumptions and hypotheses.
- Unknowns and review gates.
- Validation steps.
- Production launch gate.
