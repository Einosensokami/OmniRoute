#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";

const file =
  process.env.OMNIROUTE_MANAGED_CONFIG ||
  path.join(os.homedir(), ".config/omniroute-managed/config.json");
const config = JSON.parse(fs.readFileSync(file, "utf8"));
if (process.argv[2] === "update") {
  console.error("This is a managed install. Use: omniroute-upgrade upgrade");
  process.exit(2);
}
const cli = path.join(
  config.stateDir,
  "current/prefix/lib/node_modules/omniroute/bin/omniroute.mjs"
);
const child = spawn(process.execPath, [cli, ...process.argv.slice(2)], {
  env: {
    ...process.env,
    DATA_DIR: config.dataDir,
    PORT: String(config.port),
    OMNIROUTE_MANAGED_UPDATES: "1",
  },
  stdio: "inherit",
});
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => child.kill(signal));
child.once("error", () => {
  console.error("Managed runtime could not start");
  process.exitCode = 1;
});
child.once("exit", (code) => {
  process.exitCode = code ?? 1;
});
