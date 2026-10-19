import fs from "node:fs";
import path from "node:path";

export function assertManagedSource(config, git) {
  if (git(["branch", "--show-current"]) !== config.branch) {
    throw new Error(`Use the dedicated source branch ${config.branch}`);
  }
  if (git(["status", "--porcelain"])) throw new Error("Commit source changes before upgrading");
}

export async function checkManagedModels(baseUrl, { fetchImpl = fetch, apiKey } = {}) {
  const results = [];
  for (const model of ["oc/deepseek-v4.1-flash-free", "codex/gpt-6.1-sol"]) {
    for (const stream of [false, true]) {
      const response = await fetchImpl(new URL("/v1/chat/completions", baseUrl), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
        },
        body: JSON.stringify({
          model,
          messages: [{ role: "user", content: "Reply OK only." }],
          max_tokens: 512,
          stream,
        }),
        signal: AbortSignal.timeout(90000),
      });
      const body = await response.text();
      let content = "";
      let actualModel = null;
      if (response.ok && stream) {
        if (!body.includes("data: [DONE]")) throw new Error(`${model}: incomplete SSE`);
        for (const line of body.split(/\r?\n/)) {
          if (!line.startsWith("data: {") || line.includes('"chatcmpl-keepalive"')) continue;
          const chunk = JSON.parse(line.slice(6));
          if (chunk.error) throw new Error(`${model}: error inside SSE`);
          const delta = chunk.choices?.[0]?.delta?.content;
          if (typeof delta === "string" && delta) {
            content += delta;
            actualModel = chunk.model;
          }
        }
      } else if (response.ok) {
        const json = JSON.parse(body);
        content = json.choices?.[0]?.message?.content || "";
        actualModel = json.model;
      }
      if (!response.ok || content.trim() !== "OK" || actualModel !== model.split("/").at(-1)) {
        throw new Error(
          `${model} ${stream ? "SSE" : "JSON"}: model/output check failed (HTTP ${response.status})`
        );
      }
      results.push({ model, stream, status: response.status, ok: true });
    }
  }
  return results;
}

// Keep the live data directory intact on rollback. In particular, restoring an old
// SQLite snapshot could discard refresh tokens rotated by the promoted version.
export async function activateManagedCandidate({
  validate,
  backup,
  stop,
  promote,
  start,
  probe,
  rollback,
}) {
  await validate();
  const backupPath = await backup();
  await stop();
  let promoted = false;
  try {
    await promote();
    promoted = true;
    await start();
    const checks = await probe();
    return { ok: true, backupPath, checks };
  } catch (error) {
    await stop();
    if (promoted) await rollback();
    await start();
    await probe();
    throw new Error(`Upgrade failed; previous version restored: ${error.message}`);
  }
}

export function requireValidatedArtifact(slotDir) {
  const manifest = JSON.parse(fs.readFileSync(path.join(slotDir, "candidate.json")));
  const receipt = JSON.parse(fs.readFileSync(path.join(slotDir, "validation.json")));
  if (!receipt.ok || receipt.tarballSha256 !== manifest.tarballSha256) {
    throw new Error("Candidate has no matching validation receipt");
  }
  return manifest;
}
