# GEO AI Crawler Policy

Use this when working on robots.txt, WAF rules, AI-search visibility, llms.txt, or AI context files.

## Policy Split

Separate these crawler classes:

- Search and index bots that may surface/cite public pages.
- User-request fetchers that access a page when a user asks an AI system.
- Training crawlers that collect content for model training.
- Abusive or unidentified bots.

## Practical Rules

- Keep public canonical pages crawlable unless there is a strong policy reason not to.
- Allow intended search/user-request bots in robots.txt and check that CDN/WAF rules do not return 403.
- Block training crawlers when the site owner's content policy requires it.
- Re-check official crawler docs and IP ranges before hardcoding WAF allowlists.
- Log status codes for AI crawler user agents and investigate 403, 404, 429, and redirect loops.

## ArabSkills Current Direction

ArabSkills should be visible in search and AI-search surfaces while keeping private crawler/eval/system work out of the public repo. Public pages and exported public data can be crawlable; private workflows, tokens, and unreleased review material must remain private.
