# Adding A Regional Claim

Add regional claims to `data/regional/regional-claims.public.json` through the regional generator or a reviewed data update.

Required fields:

- `id`
- `skill_id`
- `country`
- `segment`
- `channel`
- `task`
- `claim`
- `confidence`
- `evidence_type`
- `source_urls`
- `review_status`
- `safe_to_use_for`
- `native_review_required`
- `expert_review_required`

## Good Claim Shape

Scope claims by country, segment, channel, and task.

Use:

> For Saudi Arabia B2B SaaS landing-page planning, use public digital and business sources as context signals and confirm buyer language/tone with local review.

Avoid:

> Saudi customers prefer this tone.

## Validation

```bash
pnpm regional:validate
pnpm regional:lint
pnpm evals:regional
```
