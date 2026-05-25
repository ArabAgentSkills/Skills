# Calendar And Weekends

## Rules

- Store operational dates as ISO/Gregorian unless an official integration requires another calendar.
- Use `Intl.DateTimeFormat`, CLDR data, and product settings for locale, timezone, numbering system, calendar, first day of week, and weekend.
- Do not infer country from language alone. `ar` is not enough.

## Hijri Handling

- Treat Hijri display as a presentation layer unless the workflow legally requires Hijri entry or conversion.
- If Hijri is needed, specify the variant, such as Umm al-Qura or civil/tabular Islamic.
- Avoid ad hoc Hijri/Gregorian conversion formulas.

## Business Days

- Do not hard-code Friday/Saturday or Saturday/Sunday globally.
- For SLAs, delivery promises, payroll, support, refunds, and subscriptions, define the country, sector, and calendar source.

## Routing

- Cultural, religious, public-holiday, and campaign calendar work should route to `mena-cultural-calendar`.
