# Cultural Calendar Integration Checklist

## Answer Shape

- Files read.
- Calendar records.
- Source-backed dates.
- Estimated or unknown dates.
- Review gates.
- Validation steps.
- Production launch gate.

## Calendar Record Checks

- Country, year, timezone, sector scope, and intended use are explicit.
- Each record has `date_basis`, `source_scope`, `confidence`, `last_checked_at`, and `refresh_by`.
- Religious lunar dates are estimated unless locally confirmed.
- Sector dates are not generalized.

## Production launch gate

- Use sandbox/test workflows before automating production schedules.
- Protect secrets, credentials, private campaign data, customer lists, and audience data.
- Require explicit approval before publish, send, launch, upload audiences, or production schedule changes.
