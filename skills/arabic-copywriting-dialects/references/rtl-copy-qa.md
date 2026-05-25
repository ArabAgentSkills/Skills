# RTL Copy QA

## Required For

Run RTL copy QA for any Arabic, mixed Arabic-English, numbers, dates, currency, phone numbers, URLs, handles, hashtags, IDs, placeholders, app UI, email, landing page, WhatsApp, SMS, push, or ad preview.

## Technical Checks

- Use semantic direction: `dir="rtl"` for Arabic containers and `dir="auto"` or `bdi` for mixed user-generated fields.
- Use language tags such as `ar`, `ar-EG`, `ar-SA`, `ar-AE`, `ar-KW`, `ar-QA`, `ar-JO`, `ar-LB`, `ar-MA`, `ar-DZ`, and `ar-TN`.
- Do not manually reverse strings.
- Do not use Arabic presentation-form hacks.
- Use CLDR/Intl/FormatJS/i18next patterns for dates, numbers, currency, plural, and gender where possible.

## Copy Checks

- Punctuation: colons, slashes, parentheses, quotes, question marks, and commas.
- Inline LTR tokens: product names, plan names, URLs, emails, handles, hashtags, coupon codes, phone numbers, SKU/order IDs, and tracking numbers.
- Variables: names, amounts, dates, time windows, links, and support ticket IDs.
- Truncation: buttons, cards, nav, tabs, notifications, SMS previews, ad headlines, and app-store listings.

## Screenshot Checks

- Desktop and mobile.
- Real or realistic longest strings.
- Mixed Arabic-English copy.
- Dark/light themes if the product supports both.
- WhatsApp/SMS/push/ad/email previews where applicable.

## Fail Conditions

- Text order changes meaning.
- A number, amount, URL, ID, or phone number is visually ambiguous.
- Copy overlaps, truncates critical terms, or reverses variables.
- RTL/LTR punctuation makes the CTA unclear.
- Plural, gender, or date/currency formatting is hardcoded incorrectly.
