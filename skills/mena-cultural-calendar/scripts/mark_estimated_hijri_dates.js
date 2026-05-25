#!/usr/bin/env node
import { readFile } from "node:fs/promises";

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("Usage: node mark_estimated_hijri_dates.js <calendar-records.json>");
  process.exit(2);
}

const records = JSON.parse((await readFile(inputPath, "utf8")).replace(/^\uFEFF/, ""));
if (!Array.isArray(records)) {
  throw new Error("Input must be a JSON array.");
}

const religiousTerms = /ramadan|eid|hajj|hijri|ashura|mawlid|islamic/i;
const updated = records.map((record) => {
  const hasOfficialConfirmation = Boolean(record.official_confirmation_url || record.confirmed_by);
  const looksLunar = record.event_type === "religious" || religiousTerms.test(record.event_name ?? "");
  if (looksLunar && !hasOfficialConfirmation) {
    return {
      ...record,
      date_basis: record.date_basis === "library_estimated" ? "library_estimated" : "estimated",
      confidence: record.confidence === "A" ? "needs_review" : (record.confidence ?? "unknown"),
      calendar_note: "Estimated until official country-specific confirmation."
    };
  }
  return record;
});

console.log(JSON.stringify(updated, null, 2));
