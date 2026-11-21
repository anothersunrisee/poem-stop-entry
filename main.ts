// Poem-stop entry: copies the poem in entry.txt into the grader's
// output directory. Node 22, stdlib only, no network, no randomness —
// both runs write the same bytes, so the entry is deterministic.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
const src = join(here, "entry.txt");
const dest = join(outDir, "entry.txt");
copyFileSync(src, dest);
// Self-check: the graded run must carry the poem byte for byte.
if (!readFileSync(src).equals(readFileSync(dest))) {
  throw new Error("entry.txt copy mismatch");
}
