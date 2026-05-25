# Names And Forms

## Name Fields

- Prefer one full-name field for low-risk accounts.
- Add structured name fields only when required by a legal form, delivery label, invoice, payroll process, bank workflow, or identity check.
- Preserve display name separately from normalized search fields.

## Sensitive Fields

- Do not require title, gender, nationality, date of birth, national ID, passport, or family relationship unless the workflow requires it.
- Do not infer gender, nationality, title, religion, or family relationship from a name.
- Mask national IDs and identity artifacts in logs and examples.

## Review Gates

- Native review: field labels, name order, and user-facing form copy.
- Expert review: legal identity, payroll, bank, tax, government, or shipping-label requirements.

## Avoid

- Western first/middle/last assumptions as the only form model.
- Free-text examples containing real personal data.
- Invented national ID validation rules.
