# Source-Backed Answer Example

Request: Review a localized paid campaign before launch.

## Files read

- `skills/mena-marketing-localization/SKILL.md`
- `skills/mena-marketing-localization/sources.yml`
- The matching `references/*.md` file for the channel or risk.
- `skills/mena-marketing-localization/references/integration-checklist.md` for launch readiness.

## Recommendation

Give the safest source-backed path for the requested country, segment, channel, and language. If the evidence is weak, mark it as a hypothesis or `needs expert review`.

## Source-backed notes

Compare only facts present in `sources.yml` and the reference files. Each note must include country, segment, channel, confidence, evidence, source URL, and review status.

## Unknowns

List missing calendar dates, policy checks, audience assumptions, language review, platform review, legal/privacy review, offer evidence, tracking state, and operational gaps as `Unknown from public docs`, `Unknown from public sources`, `Needs vendor access`, or `needs expert review`.

## Validation steps

Include sandbox/test checks, landing-page QA, policy review, native review, consent/privacy checks, tracking checks, rollback notes, and a production approval gate.

Avoid:

- Inventing market behavior or performance claims.
- Treating public statistics as individual-level traits.
- Launching, sending, publishing, or uploading audiences without explicit approval.
