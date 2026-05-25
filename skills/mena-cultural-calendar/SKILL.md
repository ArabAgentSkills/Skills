---
name: mena-cultural-calendar
description: Use this skill when building, reviewing, or refreshing Arab/MENA cultural, religious, public-holiday, national-day, school, salary-cycle, shopping-season, Ramadan, Eid, Hajj, and campaign calendar plans with date certainty, source scope, confidence labels, and review gates.
---

# MENA Cultural Calendar

## When To Use

Use this skill for country-specific calendar planning, holiday source checks, campaign timing, support staffing assumptions, and cultural-sensitivity review across Arab/MENA markets.

## When Not To Use

- Do not send messages, launch paid campaigns, publish public content, or change production schedules without explicit approval.
- Do not present estimated Hijri or library-derived dates as confirmed.
- Do not invent religious rulings, government closures, school dates, salary behavior, shopping seasons, endpoint URLs, credentials, or compliance claims.

## Required Context

- Country or market.
- Event, season, or date range.
- Year and timezone.
- Sector scope: government, private sector, bank, exchange, school, retail, logistics, support, or campaign.
- Intended use: planning, staffing, public copy, paid media, outbound, or product calendar.

## Common Workflows

- Classify each date as fixed, official announced, official confirmed, estimated, library estimated, sector only, retailer led, or unknown.
- Build calendar plans for Ramadan, Eid al-Fitr, Eid al-Adha, Hajj, national days, back-to-school, shopping seasons, and support operations.
- Review cultural, religious, national-symbol, minors, salary, and direct-marketing risks.
- Produce refresh rules and source-check tasks before launch.

## Default Workflow

1. Read `sources.yml` and the relevant event reference.
2. Capture country, year, sector scope, intended use, and channel before making a calendar claim.
3. Mark future lunar/Hijri dates as `estimated` until country-specific official confirmation.
4. Record source URL, source scope, confidence, last checked date, and refresh date.
5. Mark unsupported facts as `Unknown from public docs`.
6. Prepare plans only; require explicit approval before publish, send, launch, or production schedule changes.

## Decision Tree

- Ramadan: read `references/ramadan.md` and `references/calendar-refresh-rules.md`.
- Eid al-Fitr or Eid al-Adha: read the matching Eid reference and official country source.
- Hajj: read `references/hajj.md` and use Saudi official sources for timing.
- National days: read `references/national-days.md`.
- Source selection or refresh cadence: read `references/holiday-data-sources.md` and `references/calendar-refresh-rules.md`.

## Response Contract

- Start by naming `skills/mena-cultural-calendar/SKILL.md` and the reference files used.
- Separate source-backed dates from estimated dates, sector-only dates, hypotheses, and unknowns.
- Include date basis, source scope, confidence, last checked date, and refresh-by date.
- Include native/expert review gates for religious, national-symbol, political, minors, salary, paid, outbound, or regulated uses.
- Never provide live-action instructions that publish, send, launch, upload audiences, move money, alter production schedules, or use customer data without explicit human approval.

## Source And Confidence Rules

- High-confidence claims require public sources or completed review evidence.
- Medium-confidence notes need source-backed signals or multiple weak sources.
- Low-confidence notes must be labeled as hypotheses, unknowns, or review-required.
- Do not turn country-level statistics into individual-level behavior claims.

## Anti-Stereotype Rules

- Never assign traits to nationality, religion, ethnicity, dialect group, gender, age, or income group.
- Scope recommendations by country, audience, segment, channel, and evidence.
- Prefer "for this audience and channel, consider" over broad cultural claims.

## Output Rules

- Give practical drafts, plans, templates, checklists, or QA steps.
- Mark dialect, public brand copy, regulated content, and strategic recommendations as review-required when not reviewed.
- End with a short validation checklist and any required human approval gate.

## Files To Read

- Routing and process: `SKILL.md`.
- Source map: `sources.yml`.
- Topic references: `references/*.md`.
- Example plan: `examples/calendar-plan.md`.
- Compatibility example: `examples/source-backed-answer.md`.
- Deterministic helpers: `scripts/build_calendar_data.js`, `scripts/mark_estimated_hijri_dates.js`.

## Safety Rules

- Label calendar certainty: estimated vs official confirmed is mandatory.
- Use sandbox/test workflows before production schedule automation.
- Protect customer data, survey data, secrets, credentials, and private campaign plans.
- Require explicit approval before outbound, paid, public, or production calendar actions.
- Use retries and idempotency for any automation that writes calendar records, campaign tasks, or support schedules.

## Validation Checklist

- Country, year, sector scope, channel, and intended use are explicit.
- Each date has a `date_basis`, source scope, confidence, and refresh rule.
- Lunar dates are not marked confirmed without official local confirmation.
- Sector calendars are not generalized to all workers or consumers.
- Cultural, religious, national-symbol, minors, salary, and conflict risks are reviewed.
- Evals in `evals/prompts.yml` still cover date certainty and safety boundaries.

## Done Criteria

- The answer names files read and sources used.
- Calendar records distinguish estimated, official confirmed, official announced, sector-only, and unknown dates.
- No unsupported religious, cultural, legal, platform, salary, shopping, endpoint, pricing, or campaign-performance claims are included.
