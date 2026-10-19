// Uses the local dashboard login and discovery route; never prints credentials.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { parse } from "dotenv";

const dataDir = process.env.DATA_DIR || path.join(os.homedir(), ".omniroute");
const env = parse(fs.readFileSync(path.join(dataDir, ".env")));
const base = "http://127.0.0.1:20128";
const connectionId = process.argv[2];
if (!connectionId) throw new Error("Pass the local Codex connection id");
const login = await fetch(`${base}/api/auth/login`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ password: env.INITIAL_PASSWORD }),
});
if (!login.ok) throw new Error(`Local dashboard login failed: HTTP ${login.status}`);
const cookie = login.headers
  .getSetCookie()
  .map((value) => value.split(";")[0])
  .join("; ");
if (!cookie) throw new Error("Local dashboard did not return a session cookie");
if (process.argv.includes("--fix-sol-alias")) {
  const aliasesResponse = await fetch(`${base}/api/models/alias`, { headers: { cookie } });
  if (!aliasesResponse.ok) throw new Error(`Alias lookup failed: HTTP ${aliasesResponse.status}`);
  const aliasesBody = await aliasesResponse.json();
  const alias = "gpt-6.1-sol";
  const current = aliasesBody.aliases?.[alias];
  const target = "codex/gpt-6.1-sol";
  if (current !== target) {
    if (current !== "oc/gpt-6.1-sol")
      throw new Error("Sol alias changed; refusing to overwrite it");
    const backup = path.join(dataDir, "backups/codex-profile-20261019/sol-alias.json");
    fs.writeFileSync(backup, JSON.stringify({ alias, model: current }, null, 2), {
      flag: "wx",
      mode: 0o600,
    });
    const update = await fetch(`${base}/api/models/alias`, {
      method: "PUT",
      headers: { cookie, "Content-Type": "application/json" },
      body: JSON.stringify({ alias, model: target }),
    });
    if (!update.ok) throw new Error(`Alias update failed: HTTP ${update.status}`);
    console.log(JSON.stringify({ alias, before: current, after: target, backup }));
  }
}
const url = new URL(`${base}/api/providers/${encodeURIComponent(connectionId)}/models`);
url.searchParams.set("includeCandidates", "true");
if (process.argv.includes("--refresh")) url.searchParams.set("refresh", "true");
const response = await fetch(url, { headers: { cookie }, signal: AbortSignal.timeout(60000) });
if (!response.ok) throw new Error(`Catalog request failed: HTTP ${response.status}`);
const body = await response.json();
const models = body.models || body.data || [];
const ids = models.map((model) => model.id);
console.log(
  JSON.stringify(
    {
      status: response.status,
      source: body.source,
      count: ids.length,
      solModels: ids.filter((id) => id.startsWith("gpt-6.1-sol")),
      solCandidates: (body.candidateModels || []).filter((model) =>
        model.id.startsWith("gpt-6.1-sol")
      ),
      warning: body.warning,
    },
    null,
    2
  )
);
if (!ids.includes("gpt-6.1-sol")) process.exitCode = 1;
