# Confidence Model

## Infrastructure Confidence

- `A`: official public docs, developer portal, API reference, OpenAPI/Postman, SDK, or strong government source.
- `B`: official source exists, but coverage is partial or maturity needs review.
- `C`: a source lead exists, but public API evidence is missing, gated, or ambiguous.
- `unknown`: not enough public evidence.

## Regional Confidence

- `high`: public source or completed review supports the scoped claim.
- `medium`: source-backed signal exists, but it is partial or needs operator interpretation.
- `low`: useful hypothesis, planning lead, or unvalidated operator note.

## Evidence Rules

- High-confidence regional claims need `source_urls` or review evidence.
- Country-level statistics are context signals, not individual behavior proof.
- Industry reports are medium-confidence unless they are narrow, recent, and directly relevant.
- Pricing, legal, tax, religious, identity, public-sector, or regulated claims need expert review when no official source is attached.
