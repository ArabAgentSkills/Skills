# VAT And Currency

## VAT Display

- Do not guess VAT-inclusive or VAT-exclusive display.
- Produce one of: `inclusive`, `exclusive`, `mixed`, `not_applicable`, or `unknown_requires_tax_review`.
- Consumer/local-market display in Saudi Arabia, UAE, Oman, and Bahrain can lean VAT-inclusive, but exact context still needs official-source and expert review.
- Qatar official tax guide says VAT has not been applied, but other taxes or sector charges may still matter.

## Currency

- Use local currency when selling locally to SMEs or consumers and when tax/payment records require it.
- USD may be acceptable for cross-border enterprise buyers or USD-denominated services.
- Always state billing currency, tax currency if different, exchange-rate validity, and bank/card fee caveats.

## Routing

- Use `arab-einvoicing-tax` for tax rates, tax invoice wording, e-invoicing, and final compliance claims.
- Use `mena-payments` when checkout payment behavior or settlement affects price display.

## Avoid

- "VAT free", "we pay VAT", "tax included", or "no VAT" unless source-backed and reviewed.
- Local-currency conversion without exchange-rate date and billing-currency disclosure.
