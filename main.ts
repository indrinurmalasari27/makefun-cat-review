// Entry for make.fun bounty "Make the AI Judge Laugh: Cat Reviews Its Human".
// Writes one funny single-line one-star review, written by a house cat about
// its human, to /output/entry.txt (1-200 characters).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const RATING = "1 star. ";
const COMPLAINT =
  "My food bowl sat half empty for six minutes — I could see the bottom of it. ";
const VERDICT =
  "I have logged this as abandonment and will be sleeping on his folded laundry until treats are issued.";

const LINE = RATING + COMPLAINT + VERDICT;
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, LINE, "utf8");
console.log(LINE);
