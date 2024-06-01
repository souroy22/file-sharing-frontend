import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hookSrc = path.join(__dirname, "pre-commit");
const hookDest = path.join(__dirname, "..", ".git", "hooks", "pre-commit");

if (!fs.existsSync(path.dirname(hookDest))) {
  console.error("Not a git repository.");
  process.exit(1);
}

fs.copyFileSync(hookSrc, hookDest);
fs.chmodSync(hookDest, "755");

console.log("Git hook installed.");
