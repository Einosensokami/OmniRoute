import type { RegistryEntry } from "../../shared.ts";
import { opencode_zenProvider } from "./zen/index.ts";

// Fork-only restoration, authorized by the operator on 2026-10-19. These ids were
// verified with `opencode models opencode`; new free ids can pass through discovery.
const FREE_MODELS = [
  ["mimo-v2.6-flash-free", "MiMo V2.6 Flash Free"],
  ["big-pickle", "Big Pickle"],
  ["beam-free", "Beam Free"],
  ["deepseek-v4.1-flash-free", "DeepSeek V4.1 Flash Free"],
  ["glm-5.3-flash-free", "GLM 5.3 Flash Free"],
  ["longcat-2.5-preview-free", "LongCat 2.5 Preview Free"],
  ["nemotron-3-ultra-free", "Nemotron 3 Ultra Free"],
  ["nemotron-3.5-lightning-free", "Nemotron 3.5 Lightning Free"],
  ["nemotron-3.5-super-vl-free", "Nemotron 3.5 Super VL Free"],
  ["space-bunny-free", "Space Bunny Free"],
];

export const opencodeProvider: RegistryEntry = {
  id: "opencode",
  alias: "oc",
  format: "openai",
  executor: "opencode",
  // Keep the Zen surface marker so the executor applies its free-tier contract,
  // including the inference URL, descending session id, tools and forced SSE.
  baseUrl: "https://opencode.ai/zen/v1",
  modelsUrl: "https://opencode.ai/zen/v1/models",
  authType: "none",
  authHeader: "",
  defaultContextLength: 200000,
  passthroughModels: true,
  toolNameMaxLength: 64,
  models: FREE_MODELS.map(([id, name]) => ({
    ...opencode_zenProvider.models.find((model) => model.id === id),
    id,
    name,
  })),
};
