import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-fork-migration-"));
process.env.DATA_DIR = dataDir;
const { getDbInstance, resetDbInstance } = await import("../../src/lib/db/core.ts");
test.after(() => {
  resetDbInstance();
  fs.rmSync(dataDir, { recursive: true, force: true });
});

test("upgrading this fork keeps Free accounts and configuration while moving real keys to Zen", () => {
  const db = getDbInstance();
  const insert = db.prepare(
    "INSERT INTO provider_connections (id,provider,auth_type,name,api_key,provider_specific_data," +
      "is_active,created_at,updated_at) VALUES (?, 'opencode', 'apikey', ?, ?, ?, 1, datetime('now'), datetime('now'))"
  );
  insert.run("free-account", "Free", null, JSON.stringify({ fingerprints: ["local-account"] }));
  insert.run("keyed-account", "Zen", "test-zen-key", null);
  db.prepare(
    "INSERT INTO key_value (namespace,key,value) VALUES ('customModels','opencode',?)"
  ).run('[{"id":"deepseek-v4.1-flash-free"}]');
  const before = db.prepare("SELECT * FROM provider_connections WHERE id='free-account'").get();
  const migration = fs.readFileSync(
    "src/lib/db/migrations/207_remove_opencode_free_provider.sql",
    "utf8"
  );
  db.exec(migration);
  db.exec(migration);
  assert.deepEqual(
    db.prepare("SELECT * FROM provider_connections WHERE id='free-account'").get(),
    before
  );
  assert.equal(
    (
      db.prepare("SELECT provider FROM provider_connections WHERE id='keyed-account'").get() as {
        provider: string;
      }
    ).provider,
    "opencode-zen"
  );
  assert.ok(
    db
      .prepare("SELECT value FROM key_value WHERE namespace='customModels' AND key='opencode'")
      .get()
  );
});
