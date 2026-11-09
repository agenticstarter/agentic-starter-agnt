#!/usr/bin/env node
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
const dist = fileURLToPath(new URL("../dist/agentic.js", import.meta.url));
const mod = existsSync(dist) ? await import(dist) : await import("../src/main.js");
await mod.main(process.argv.slice(2));
