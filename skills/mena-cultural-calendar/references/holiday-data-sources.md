# Holiday Data Sources

## Source Quality

- A: Government public-holiday page, cabinet/diwan circular, official gazette, official regulator, official news agency carrying an announcement.
- B: Central bank, stock exchange, ministry sector calendar, school regulator calendar. Use for that sector only.
- C: Nager.Date, date-holidays, moment-hijri, retailer/platform calendar. Use as planning leads, not confirmation.
- Unknown: No current public source found.

## Data Fields

- country.
- event_name.
- gregorian_start_date and gregorian_end_date.
- hijri_start and hijri_end when relevant.
- date_basis.
- source_scope.
- source_urls.
- source_types.
- confidence.
- last_checked_at.
- refresh_by.
- review_required.

## Guardrail

If a sector source is used, preserve the sector scope. Do not generalize bank, school, exchange, federal-government, or retailer dates to all consumers.
