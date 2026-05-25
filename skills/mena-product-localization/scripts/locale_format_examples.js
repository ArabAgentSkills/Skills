#!/usr/bin/env node
const locales = process.argv.slice(2);
const targets = locales.length ? locales : ["ar-SA", "ar-AE", "ar-EG", "en-US"];

function safeDate(locale, options) {
  try {
    return new Intl.DateTimeFormat(locale, options).format(new Date("2026-05-25T12:00:00Z"));
  } catch (error) {
    return `Unsupported: ${error.message}`;
  }
}

const examples = targets.map((locale) => ({
  locale,
  direction_hint: new Intl.Locale(locale).textInfo?.direction ?? "unknown",
  number: new Intl.NumberFormat(locale).format(123456.78),
  percent: new Intl.NumberFormat(locale, { style: "percent", maximumFractionDigits: 1 }).format(0.153),
  currency_SAR: new Intl.NumberFormat(locale, { style: "currency", currency: "SAR" }).format(1234.5),
  currency_AED: new Intl.NumberFormat(locale, { style: "currency", currency: "AED" }).format(1234.5),
  gregory_date: safeDate(locale, { dateStyle: "full", timeZone: "Asia/Riyadh" }),
  hijri_display_estimate: safeDate(`${locale}-u-ca-islamic-umalqura`, { dateStyle: "full", timeZone: "Asia/Riyadh" }),
  plural_categories: new Intl.PluralRules(locale).resolvedOptions().pluralCategories
}));

console.log(JSON.stringify({ generated_at: new Date().toISOString(), examples }, null, 2));
