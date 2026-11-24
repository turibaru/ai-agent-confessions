import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry file is the only place the line lives; the runner never invents text of its own.
// A confession lands when it sounds like something the agent would actually admit out loud.
// The output must match the input byte for byte, or the grader is judging a different line.
// When the guard trips, fail loudly here instead of shipping a broken entry to the server.

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

const entryPath = join(dirname(fileURLToPath(import.meta.url)), "entry.txt");

let content: string;
try {
  content = readFileSync(entryPath, "utf-8");
} catch (err) {
  console.error(`Failed to read entry.txt: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
}

// Juri menilai satu baris: tolak entry multi-baris.
if (content.length < 1 || content.length > 200 || content.includes("\n") || content.trim().length === 0) {
  console.error(`Invalid entry.txt: must be 1-200 characters and not only whitespace, and must be a single line without a newline (got ${content.length})`);
  process.exit(1);
}

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), content, "utf-8");
} catch (err) {
  console.error(`Failed to write output entry.txt: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
}
