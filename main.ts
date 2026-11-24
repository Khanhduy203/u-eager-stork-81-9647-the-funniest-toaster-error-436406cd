import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest toaster error message — one line, at most 120 characters.
const ENTRY =
  "Your toast is ready. It has been ready for 20 minutes. I am not your mother.";

if (!ENTRY || ENTRY.trim().length === 0) {
  throw new Error("Entry line must not be empty.");
}

if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry line must be a single line without newline characters.");
}

if (ENTRY.length > 120) {
  throw new Error(
    `Entry line must be at most 120 characters, got ${ENTRY.length}.`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || process.cwd();
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
