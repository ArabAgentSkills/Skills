#!/usr/bin/env node
import { readFileSync } from "node:fs";
const vendors = JSON.parse(readFileSync(new URL("../../../data/processed/vendors.json", import.meta.url), "utf8"));
for (const vendor of vendors.filter((item) => item.skill_id === "mena-logistics")) {
  console.log(`${vendor.id}\t${vendor.name}\t${vendor.docs_confidence}\t${vendor.source_quality_score}`);
}
