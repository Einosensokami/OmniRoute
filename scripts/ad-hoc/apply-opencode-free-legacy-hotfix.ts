// Local 3.8.51 deployment bridge. New builds use the restored source registry and
// the existing current request contract instead. Back up every changed chunk first.
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { opencodeProvider } from "../../open-sse/config/providers/registry/opencode/index.ts";

export function patchLegacyChunk(source: string): string {
  let result = source;
  if (source.includes(".update(`opencode\\u0000")) {
    // The legacy canonicalId rendered random hash bits as its session timestamp.
    // Reserve the descending counter window, as the current opencodeHeaders does.
    const canonical = /return`\$\{e\}\$\{([a-z])\.subarray\(0,6\)\.toString\("hex"\)\}/g;
    let changed = 0;
    result = result.replace(canonical, (_match, bytes: string) => {
      changed++;
      return `return\`\${e}\${e==="ses_"?((~((BigInt("0x"+${bytes}.subarray(0,5).toString("hex"))>>4n)<<12n|1n))&0xffffffffffffn).toString(16).padStart(12,"0"):${bytes}.subarray(0,6).toString("hex")}`;
    });
    if (changed !== 1) throw new Error("Unrecognized legacy session builder");
    result = result.replaceAll(
      "/^ses_[0-9a-f]{12}[0-9A-Za-z]{14}$/",
      "/^ses_[0-9a-f]{9}f[c-f][0-9a-f][0-9A-Za-z]{14}$/"
    );
  }
  if (source.includes("Do not call this tool. It exists only for API compatibility")) {
    const schema = '={type:"object",properties:{}};';
    if (!result.includes(schema)) throw new Error("Unrecognized legacy placeholder schema");
    result = result.replace(
      schema,
      '={type:"object",properties:{filePath:{type:"string"}},required:["filePath"]};'
    );
    if (!/let [a-z]="_noop";/.test(result)) {
      throw new Error("Unrecognized legacy placeholder name");
    }
    result = result.replace(/let ([a-z])="_noop";/, 'let $1="read";');
  }
  const registry = result.indexOf('opencode:{id:"opencode",alias:"oc",format:"openai"');
  if (registry >= 0) {
    const start = result.indexOf("models:[", registry) + "models:".length;
    if (start < registry) throw new Error("Missing legacy free model list");
    let depth = 0;
    let quote = "";
    let end = start;
    for (; end < result.length; end++) {
      const ch = result[end];
      if (quote) {
        if (ch === "\\") end++;
        else if (ch === quote) quote = "";
      } else if (ch === '"' || ch === "'" || ch === "`") quote = ch;
      else if (ch === "[") depth++;
      else if (ch === "]" && --depth === 0) break;
    }
    if (depth !== 0) throw new Error("Unterminated legacy free model list");
    result =
      result.slice(0, start) + JSON.stringify(opencodeProvider.models) + result.slice(end + 1);
  }
  return result;
}

function main() {
  const installDir = path.resolve(process.argv[2] || "");
  const backupDir = path.resolve(process.argv[3] || "");
  if (process.argv.length !== 4) throw new Error("Usage: <install-dir> <new-backup-dir>");
  const pkg = JSON.parse(fs.readFileSync(path.join(installDir, "package.json"), "utf8"));
  if (pkg.version !== "3.8.51") throw new Error("This patch supports only OmniRoute 3.8.51");
  const chunkDir = path.join(installDir, "dist/.build/next/server/chunks");
  const changes = fs
    .readdirSync(chunkDir)
    .filter((name) => name.endsWith(".js"))
    .flatMap((name) => {
      const original = fs.readFileSync(path.join(chunkDir, name), "utf8");
      const patched = patchLegacyChunk(original);
      return patched === original ? [] : [{ name, original, patched }];
    });
  if (!changes.some((c) => c.original.includes("Do not call this tool"))) {
    throw new Error("No legacy request contract found; no files changed");
  }
  fs.mkdirSync(backupDir, { recursive: false, mode: 0o700 });
  // Validate all outputs and write all backups before modifying the installation.
  for (const change of changes) {
    fs.writeFileSync(path.join(backupDir, change.name), change.original);
    const candidate = path.join(backupDir, `${change.name}.candidate.cjs`);
    fs.writeFileSync(candidate, change.patched);
    execFileSync(process.execPath, ["--check", candidate], { stdio: "pipe" });
    fs.unlinkSync(candidate);
  }
  fs.writeFileSync(
    path.join(backupDir, "manifest.json"),
    JSON.stringify(
      {
        installDir,
        files: changes.map(({ name, original, patched }) => ({
          name,
          before: createHash("sha256").update(original).digest("hex"),
          after: createHash("sha256").update(patched).digest("hex"),
        })),
      },
      null,
      2
    )
  );
  for (const { name, patched } of changes) {
    const target = path.join(chunkDir, name);
    fs.writeFileSync(`${target}.opencode-free.tmp`, patched);
    fs.renameSync(`${target}.opencode-free.tmp`, target);
  }
  console.log(`Patched ${changes.length} chunks; originals and manifest: ${backupDir}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
