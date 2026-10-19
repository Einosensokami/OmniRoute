import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-free-fork-"));
process.env.DATA_DIR = dataDir;

const { REGISTRY } = await import("../../open-sse/config/providerRegistry.ts");
const { parseModel } = await import("../../open-sse/services/model.ts");
const { getProviderCredentials } = await import("../../src/sse/services/auth.ts");
const { getExecutor } = await import("../../open-sse/executors/index.ts");
const { resetDbInstance } = await import("../../src/lib/db/core.ts");
const { isValidOpencodeSessionValue } = await import("../../open-sse/utils/opencodeHeaders.ts");
const { _setOpencodeFreeModelsForTests } =
  await import("../../open-sse/executors/opencodeFreeTierContract.ts");

test.after(() => {
  resetDbInstance();
  fs.rmSync(dataDir, { recursive: true, force: true });
});

test("fork Free routes both prefixes without a key and serves plain JSON clients", async () => {
  const model = "mimo-v2.6-flash-free";
  assert.ok(REGISTRY.opencode, "the fork must register OpenCode Free");
  for (const prefix of ["oc", "opencode"]) {
    assert.equal(parseModel(`${prefix}/${model}`).provider, "opencode");
  }
  const credentials = await getProviderCredentials("opencode", null, null, model);
  assert.equal(credentials?.connectionId, "noauth");
  assert.equal(credentials?.apiKey, null);

  const originalFetch = globalThis.fetch;
  _setOpencodeFreeModelsForTests([model]);
  let calls = 0;
  globalThis.fetch = async (url, init) => {
    calls++;
    assert.equal(String(url), "https://opencode.ai/inference/v1/chat/completions");
    const headers = new Headers(init?.headers);
    assert.equal(headers.has("authorization"), false);
    assert.equal(headers.has("x-api-key"), false);
    const session = headers.get("x-opencode-session");
    assert.ok(session);
    assert.equal(isValidOpencodeSessionValue(session), session);
    const body = JSON.parse(String(init?.body));
    assert.equal(body.stream, true);
    assert.equal(body.model, model);
    assert.ok(
      body.tools.some(
        (tool: { function: { parameters: { properties: object } } }) =>
          Object.keys(tool.function.parameters.properties).length > 0
      )
    );
    return new Response(
      'data: {"id":"free-test","object":"chat.completion.chunk","choices":[{"index":0,"delta":{"content":"OK"},"finish_reason":"stop"}]}\n\ndata: [DONE]\n\n',
      { headers: { "content-type": "text/event-stream" } }
    );
  };
  try {
    const executor = await getExecutor("opencode");
    const result = await executor.execute({
      model,
      body: { model, messages: [{ role: "user", content: "Reply OK" }], stream: false },
      stream: false,
      credentials,
    });
    assert.equal(result.response.status, 200);
    const body = await result.response.json();
    assert.equal(body.choices[0].message.content, "OK");
    assert.equal(calls, 1);
  } finally {
    globalThis.fetch = originalFetch;
    _setOpencodeFreeModelsForTests(null);
  }
});
