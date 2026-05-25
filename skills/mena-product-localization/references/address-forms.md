# Address Forms

## Rules

- Use country-specific address metadata such as libaddressinput or official national-address sources.
- Do not force US-style state and ZIP/postcode assumptions.
- Distinguish billing country, shipping country, tax country, phone country, payment method country, and user locale.

## Field Guidance

- Make fields dynamic by country: region, city, district, street, building, unit, postal code, landmark, coordinates, and delivery notes.
- Keep an unstructured address line or delivery note where local landmarks matter.
- Do not put identity-sensitive data in free-text examples.

## Routing

- Carrier labels, COD, national address, Makani, SPL, delivery coverage, and tracking should route to `mena-logistics`.
- National address tied to identity verification should route to `arab-identity-gov`.

## Unknowns

- Country/city lists, delivery validation, and required address components are `Unknown from public docs` unless a current source backs them.
