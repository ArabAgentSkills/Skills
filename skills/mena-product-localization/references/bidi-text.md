# Bidirectional Text

## Required Handling

- Use Unicode bidi behavior and W3C inline bidi guidance for mixed Arabic/LTR content.
- Isolate mixed inline values with `bdi`, `dir`, or framework equivalents.
- Treat user-generated content as direction-unknown unless profile locale proves otherwise.

## High-Risk Values

- Order IDs, invoice numbers, ticket numbers, SKUs, URLs, emails, promo codes, payment references, phone numbers, card last-four displays, and Latin brand names.
- City, district, and street names entered in Latin script inside Arabic sentences.

## Storage Rule

- Store identifiers in stable machine format.
- Localize display only.
- Do not convert reconciliation IDs, webhook IDs, tax references, or support lookup IDs.

## Test Cases

- Arabic sentence with `SKU-1234`.
- Arabic sentence with an email address.
- Arabic checkout error with a payment reference.
- Arabic support message containing a URL and phone number.
