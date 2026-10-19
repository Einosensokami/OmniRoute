import fs from "node:fs";
import path from "node:path";
import { parseEnv } from "node:util";

const snapshot = path.resolve(process.argv[2] || "");
const marker = JSON.parse(fs.readFileSync(path.join(snapshot, ".upgrade-snapshot.json"), "utf8"));
if (snapshot === path.resolve(marker.sourceDataDir))
  throw new Error("Refusing the live data directory");
const envFile = path.join(snapshot, ".env");
const env = fs.existsSync(envFile) ? parseEnv(fs.readFileSync(envFile, "utf8")) : {};
Object.assign(process.env, env, {
  DATA_DIR: snapshot,
  OMNIROUTE_DISABLE_BACKGROUND_SERVICES: "1",
  DISABLE_SQLITE_AUTO_BACKUP: "true",
});
const { getProviderConnections, updateProviderConnection } =
  await import("../../src/lib/db/providers.ts");
const { resetDbInstance } = await import("../../src/lib/db/core.ts");
try {
  // A validation server may use copied access tokens, but must never rotate the
  // live account's refresh token. Expired access tokens fail validation safely.
  for (const connection of await getProviderConnections()) {
    if (connection.refreshToken)
      await updateProviderConnection(connection.id, { refreshToken: null });
  }
  console.log("Snapshot prepared; OAuth refresh tokens disabled in the copy only");
} finally {
  resetDbInstance();
}
