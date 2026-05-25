# Confidence Model

Last checked: 2026-05-25

## Labels

| Label | Meaning | Required handling |
| --- | --- | --- |
| `A` | Official, primary, current, or directly relevant source with clear scope. | Source URL required; keep scope narrow; do not convert into legal advice. |
| `B` | Credible secondary, compiled, professional, academic, or platform source. | Source URL required; use as planning signal or supported caveat. |
| `C` | Directional or partial evidence, older source, industry report, or inference. | Use as hypothesis only; include test or review step. |
| `unknown` | Evidence missing, stale, contradictory, or not public. | Do not state as fact. |
| `needs_review` | Human judgment is required despite some evidence. | Name the needed review role and scope. |

## Source Type Defaults

- Official government, regulator, central-bank, statistics, telecom, tax, postal/address, and standards sources: usually `A` for source existence and reported facts.
- World Bank and ITU datasets: usually `A` for indicator values, subject to indicator year and methodology.
- DataReportal country reports: usually `B`; strong for digital baseline, not for individual behavior.
- GSMA regional reports: usually `B`; useful for regional mobile framing, not a country substitute.
- Arab Barometer: usually `B` for covered countries and waves; not a GCC-wide commercial-channel source.
- Public chamber, agency, blog, or market reports: usually `C` unless methodology and source chain are strong.
- Local tone, humor, dialect, support etiquette, sales cadence, COD rate, return behavior, and exact channel priority: `needs_review` unless source and reviewer evidence are scoped.

## Freshness Rules

- Store `last_checked_at` on every country file and claim.
- Recheck platform policies, privacy rules, payment rails, laws, holidays, and conflict/security-sensitive claims before live use.
- Islamic holiday dates and official holiday announcements must be refreshed annually.
