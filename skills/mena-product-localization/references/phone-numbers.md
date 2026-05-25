# Phone Numbers

## Rules

- Use libphonenumber or equivalent metadata for parsing, validation, and formatting.
- Store E.164 where possible.
- Preserve raw entry only if privacy policy and debugging need allow it.
- Always parse with country context; do not strip leading zeros before parsing.

## UI Guidance

- Provide a country selector and country calling code.
- Accept pasted numbers with spaces, punctuation, Latin digits, and Arabic-Indic digits.
- Keep OTP and transactional messaging restrictions routed to `mena-comms`.

## Avoid

- Regex-only phone validation.
- Assuming all Arabic users use one digit system.
- Showing full phone numbers in logs, analytics, screenshots, or public examples.

## Validation

- Test local and international entry for each target country.
- Test display, storage, masking, OTP resend, and error states separately.
