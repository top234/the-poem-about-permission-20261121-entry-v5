import { mkdirSync, writeFileSync } from "node:fs";

// "The White Ones" — a poem about agency: the power to ask, and to be given.
// A daughter asks to water her mother's roses while she is in hospital.
// Her mother grants only half the ask — and what she keeps is the point.
const poem = `The White Ones

"Can I water your roses
while you're in hospital?"

Mum turns toward the window.
"Only the red ones.
The white ones are still mine."

So I water the red ones
through the dry weeks,
and leave the white blooms
untouched — still waiting,
her reason to come home.`;

// The competition requires /output/entry.txt to hold 1–280 Unicode code points.
// Spread into an array so astral characters count as one code point each.
const codePoints = [...poem].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`Poem must be 1–280 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
console.log(`Wrote /output/entry.txt (${codePoints} code points)`);
