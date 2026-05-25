#!/usr/bin/env node
const examples = [
  {
    country: "Saudi Arabia",
    region_code: "SA",
    input_hint: "local mobile or international format",
    storage: "E.164 after libphonenumber parsing",
    display_rule: "Format with libphonenumber for ar-SA or user locale",
    validation_note: "Do not validate with regex-only rules."
  },
  {
    country: "United Arab Emirates",
    region_code: "AE",
    input_hint: "local mobile, landline, or international format",
    storage: "E.164 after libphonenumber parsing",
    display_rule: "Preserve country context and display localized spacing",
    validation_note: "Do not strip leading zeros before parsing."
  },
  {
    country: "Egypt",
    region_code: "EG",
    input_hint: "local mobile, landline, or international format",
    storage: "E.164 after libphonenumber parsing",
    display_rule: "Accept Latin and Arabic-Indic digits if product policy supports them",
    validation_note: "OTP sending restrictions route to mena-comms."
  }
];

console.log(JSON.stringify({
  note: "Examples are implementation prompts. Use libphonenumber metadata for real parsing and validation.",
  examples
}, null, 2));
