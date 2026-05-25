#!/usr/bin/env node
import { readFile } from "node:fs/promises";

const args = process.argv.slice(2);
const input = args[0]
  ? await readFile(args[0], "utf8")
  : await new Promise((resolve) => {
      let data = "";
      process.stdin.setEncoding("utf8");
      process.stdin.on("data", (chunk) => {
        data += chunk;
      });
      process.stdin.on("end", () => resolve(data));
    });

const lines = String(input).split(/\r?\n/);
const arabic = /\p{Script=Arabic}/u;
const latinToken = /\b[A-Z]{2,}[-_A-Z0-9]*\b|https?:\/\/\S+|\b\S+@\S+\b|\b[A-Z]{2,}-?\d{2,}\b/;
const findings = [];

lines.forEach((line, index) => {
  if (arabic.test(line) && latinToken.test(line) && !/<bdi\b|dir=["'](?:ltr|auto|rtl)["']/.test(line)) {
    findings.push({
      line: index + 1,
      issue: "mixed-direction-value-without-visible-isolation",
      text: line.trim()
    });
  }
  if (/text-align:\s*right/i.test(line) && !/dir=|direction:|inline-start|inline-end/.test(line)) {
    findings.push({
      line: index + 1,
      issue: "right-align-without-direction-or-logical-layout",
      text: line.trim()
    });
  }
});

console.log(JSON.stringify({ finding_count: findings.length, findings }, null, 2));
process.exit(args.includes("--strict") && findings.length > 0 ? 1 : 0);
