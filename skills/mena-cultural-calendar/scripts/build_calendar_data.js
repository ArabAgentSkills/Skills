#!/usr/bin/env node
import { readFile } from "node:fs/promises";

const allowedBasis = new Set([
  "fixed",
  "official_announced",
  "official_confirmed",
  "estimated",
  "library_estimated",
  "sector_only",
  "retailer_led",
  "unknown"
]);

const inputPath = process.argv[2];
const raw = inputPath ? (await readFile(inputPath, "utf8")).replace(/^\uFEFF/, "") : "[]";
const records = JSON.parse(raw);
if (!Array.isArray(records)) {
  throw new Error("Input must be a JSON array of calendar records.");
}

const normalized = records.map((record, index) => {
  const dateBasis = record.date_basis ?? "unknown";
  if (!allowedBasis.has(dateBasis)) {
    throw new Error(`Record ${index + 1} has invalid date_basis: ${dateBasis}`);
  }
  return {
    id: record.id ?? `calendar-record-${index + 1}`,
    country: record.country ?? "Unknown from public docs",
    event_name: record.event_name ?? "Unknown from public docs",
    gregorian_start_date: record.gregorian_start_date ?? null,
    gregorian_end_date: record.gregorian_end_date ?? null,
    hijri_date: record.hijri_date ?? null,
    date_basis: dateBasis,
    source_scope: record.source_scope ?? "Unknown from public docs",
    source_urls: record.source_urls ?? [],
    confidence: record.confidence ?? "unknown",
    last_checked_at: record.last_checked_at ?? new Date().toISOString().slice(0, 10),
    refresh_by: record.refresh_by ?? null,
    review_required: record.review_required ?? []
  };
});

normalized.sort((a, b) => String(a.gregorian_start_date ?? "").localeCompare(String(b.gregorian_start_date ?? "")));
console.log(JSON.stringify({ records: normalized }, null, 2));
