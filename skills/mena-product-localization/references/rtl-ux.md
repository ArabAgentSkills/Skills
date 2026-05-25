# RTL UX

## Baseline

- Set structural direction with `dir`, not only `text-align: right`.
- Use CSS logical properties for spacing, borders, positioning, and layout.
- Mirror directional navigation and progress only when meaning is spatial.
- Do not mirror brand logos, media controls, charts, maps, or icons whose meaning is not directional.

## Review Checks

- Page, dialog, drawer, menu, toast, table, and form direction is intentional.
- Keyboard order and visual order match user expectations.
- Focus outlines remain visible after mirroring.
- Tables preserve numeric columns, IDs, and actions in a readable order.
- Empty, loading, error, and validation states are checked in Arabic.

## Risk Notes

- RTL is not a translation pass. It changes layout, scan paths, focus order, truncation, icon meaning, and mixed text behavior.
- Native review is required for public Arabic UX copy, especially checkout, refunds, account deletion, consent, and identity flows.
