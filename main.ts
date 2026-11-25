// Worst Monday One-Liners — make.fun entry
// Writes the single one-liner from entry.txt to /output/entry.txt.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "entry.txt"), "utf8");
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text);
console.log(`wrote entry.txt (${Buffer.byteLength(text, "utf8")} bytes) to ${outDir}`);
