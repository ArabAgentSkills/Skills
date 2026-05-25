# MENA Marketing Localization Launch Checklist

Use this file only for implementation, review, or launch readiness. It exists as a repo-validator compatibility checklist for regional marketing work.

## Source Review

- Read `sources.yml` and the relevant reference file first.
- Open official or platform source URLs if the output depends on current policy, pricing, holiday dates, or direct-marketing rules.
- Mark unsupported facts as `Unknown from public docs`, `Unknown from public sources`, `Needs vendor access`, or `needs expert review`.
- Prefer official docs, platform policies, regulator pages, government calendars, and source-backed country reports.

## Answer Shape

1. Files read.
2. Scope: country, segment, channel, language, timeframe, and intended use.
3. Source-backed notes with confidence and source URLs.
4. Unknowns and review gates.
5. Security, privacy, consent, platform, native, legal, and creator checks.
6. Sandbox/test plan.
7. Production launch gate and rollback notes.

## Build Review

- Keep credentials, ad account access, pixels, analytics exports, and customer lists private.
- Use sandbox/test accounts where available before production launch.
- Add idempotent send guards, rate-limit checks, and stop/unsubscribe handling for outbound flows.
- Log campaign IDs and aggregate metrics, not raw PII or customer message bodies.
- Check landing-page language, currency, claims, privacy, and support paths before paid traffic.

## Production Launch Gate

- Source URLs checked and current enough for the launch window.
- Native, platform, legal/privacy, creator, and operations reviews completed where required.
- Tracking, UTMs, consent, forms, pixels, and rollback path tested.
- Explicit human approval captured for launch, send, publish, audience upload, or spend.
