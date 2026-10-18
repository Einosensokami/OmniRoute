# SQLite Runtime Resolution (മലയാളം)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute ആരംഭിക്കുമ്പോൾ 5-ഘട്ട fallback ശൃംഖലയിലൂടെ അതിന്റെ SQLite ഡ്രൈവർ കണ്ടെത്തുന്നു:

1. **ബണ്ടിൽ ചെയ്ത `better-sqlite3`** (`package.json`-ലെ `dependencies` വഴി)
   — ഏറ്റവും വേഗതയേറിയത്, നേറ്റീവ് ബൈനറി, ബിൽഡ് ടൂളുകൾ ലഭ്യമാകുമ്പോൾ `npm install` വഴി ഇൻസ്റ്റാൾ ചെയ്യപ്പെടുന്നു.

2. **റൺടൈമിൽ ഇൻസ്റ്റാൾ ചെയ്ത `better-sqlite3`** (`~/.omniroute/runtime/`-ൽ)
   — ആദ്യ റണ്ണിൽ ആവശ്യാനുസരണം **അല്ലെങ്കിൽ** `scripts/build/postinstall.mjs → scripts/postinstall.mjs` വഴി ഇൻസ്റ്റാൾ ചെയ്യപ്പെടുന്നു.
   കേടായതോ തെറ്റായ പ്ലാറ്റ്ഫോമിനുള്ളതോ ആയ ബൈനറികളിൽ നിന്ന് സംരക്ഷിക്കുന്നതിനായി ലോഡ് ചെയ്യുന്നതിന് മുമ്പ്
   നേറ്റീവ് `.node` മാജിക് ബൈറ്റുകൾ (ELF / Mach-O / PE) സാധൂകരിക്കുന്നു.

3. **`node:sqlite`** (Node ≥22.5 stdlib) — നേറ്റീവ് ബിൽഡ് ആവശ്യമില്ല; രണ്ട്
   better-sqlite3 പാതകളും പരാജയപ്പെടുമ്പോൾ ഉപയോഗിക്കുന്നു. പരിമിതമായ ഫീച്ചർ സെറ്റ്.

4. **`sql.js`** (WASM) — അവസാന fallback. എല്ലായിടത്തും പ്രവർത്തിക്കുമെങ്കിലും വേഗത കുറവാണ്,
   കൂടാതെ ഡാറ്റ സമകാലികമായി എഴുതുന്നതിനുപകരം നിശ്ചിത ഇടവേളകളിൽ എഴുതുന്നു.

## ഈ സങ്കീർണ്ണത എന്തുകൊണ്ട്?

- **Windows EBUSY**: പ്രവർത്തിച്ചുകൊണ്ടിരിക്കുന്ന ഒരു പ്രോസസ്സ് മുൻ പതിപ്പിന്റെ
  `better_sqlite3.node` ലോക്ക് ചെയ്തിട്ടുണ്ടെങ്കിൽ `npm install -g omniroute@latest` പരാജയപ്പെടാം. `~/.omniroute/runtime/`-ലെ റൺടൈം
  ഇൻസ്റ്റാളേഷൻ ആഗോള npm കാഷിനെ മറികടക്കുന്നു.
- **ബിൽഡ് ടൂളുകളില്ല**: ചില പരിതസ്ഥിതികൾക്ക് (VS Build
  Tools ഇല്ലാത്ത കോർപ്പറേറ്റ് Windows, മിനിമൽ Docker ഇമേജുകൾ) `better-sqlite3` കംപൈൽ ചെയ്യാനാകില്ല. റൺടൈം
  ഇൻസ്റ്റാളർ npm രജിസ്ട്രിയിൽ നിന്ന് മുൻകൂട്ടി ബിൽഡ് ചെയ്ത ഒരു ബൈനറി കണ്ടെത്തുന്നു; അത് പരാജയപ്പെട്ടാലും
  OmniRoute ബൂട്ട് ചെയ്യുന്നുവെന്ന് fallback ഡ്രൈവറുകൾ ഉറപ്പാക്കുന്നു.
- **എയർ-ഗ്യാപ്ഡ് സിസ്റ്റങ്ങൾ**: npm രജിസ്ട്രി ലഭ്യമല്ലെങ്കിൽ, `node:sqlite`
  അല്ലെങ്കിൽ `sql.js` അടിസ്ഥാന പ്രവർത്തനക്ഷമത ഉറപ്പുനൽകുന്നു.

## മാജിക്-ബൈറ്റ് സാധൂകരണം

റൺടൈമിൽ ഇൻസ്റ്റാൾ ചെയ്ത ഒരു `.node` ഫയൽ ലോഡ് ചെയ്യുന്നതിന് മുമ്പ്, OmniRoute അതിന്റെ ആദ്യത്തെ 8
ബൈറ്റുകൾ വായിക്കുകയും അറിയപ്പെടുന്ന പ്ലാറ്റ്ഫോം മാജിക്കുകളുമായി പൊരുത്തപ്പെടുത്തുകയും ചെയ്യുന്നു:

| പ്ലാറ്റ്ഫോം           | ബൈറ്റുകൾ (hex) | ലേബൽ        |
| --------------------- | -------------- | ----------- |
| Linux                 | `7F 45 4C 46`  | `elf`       |
| macOS 64-bit BE       | `FE ED FA CF`  | `macho`     |
| macOS 64-bit LE       | `CF FA ED FE`  | `macho-le`  |
| macOS fat (universal) | `CA FE BA BE`  | `macho-fat` |
| Windows               | `4D 5A` (MZ)   | `pe`        |

പൊരുത്തപ്പെടാത്ത മാജിക് → ഫയൽ അവഗണിക്കുകയും fallback അടുത്ത ഘട്ടത്തിലേക്ക് തുടരുകയും ചെയ്യുന്നു.

## സജീവമായ ഡ്രൈവർ പരിശോധിക്കൽ

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## മാനുവൽ നിയന്ത്രണം

```bash
# വേഗത്തിലുള്ള CI ഇൻസ്റ്റാളുകൾക്കായി postinstall warm-up ഒഴിവാക്കുക
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# റൺടൈം better-sqlite3 നിർബന്ധമായി വീണ്ടും ഇൻസ്റ്റാൾ ചെയ്യുക
rm -rf ~/.omniroute/runtime
omniroute  # അടുത്ത തവണ ആരംഭിക്കുമ്പോൾ വീണ്ടും ഇൻസ്റ്റാൾ ചെയ്യും

# ഏത് ഡ്രൈവറാണ് സജീവമെന്ന് പരിശോധിക്കുക
omniroute config db-info  # (CLI കമാൻഡ് നിലവിലുണ്ടെങ്കിൽ)
```

## സമകാലിക തടസ്സങ്ങൾ നിർണ്ണയിക്കൽ

`better-sqlite3` ഉപയോഗിക്കുമ്പോൾ, സമകാലിക അഡാപ്റ്റർ ടൈമിംഗ് പ്രവർത്തനക്ഷമമാക്കുന്നതിനായി ആരംഭിക്കുന്നതിന് മുമ്പ്
`OMNIROUTE_SQLITE_SLOW_MS=200` സജ്ജമാക്കുക. സ്ഥിരസ്ഥിതിയിൽ ഇത് ഓഫാണ്. കുറഞ്ഞത് അത്രയും
മില്ലിസെക്കൻഡ് എടുക്കുന്ന പൂർത്തിയായ ഒരു പ്രവർത്തനം `[SQLITE-SLOW]` മുന്നറിയിപ്പ് സൃഷ്ടിക്കും; ഓരോ
അഡാപ്റ്ററിനും പത്ത് സെക്കൻഡിൽ പരമാവധി ഒന്ന് മാത്രം. മുന്നറിയിപ്പിൽ ഡ്രൈവർ, പ്രവർത്തന ക്ലാസ്
(`prepare`, `get`, `all`, `run`, `exec`, `pragma`, ട്രാൻസാക്ഷൻ അല്ലെങ്കിൽ പരിപാലനം), കഴിഞ്ഞ
മില്ലിസെക്കൻഡുകൾ എന്നിവ മാത്രം ഉൾപ്പെടുന്നു: SQL, ബൈൻഡിംഗുകൾ, വരികൾ, പാതകൾ, അല്ലെങ്കിൽ exception ടെക്സ്റ്റ് എന്നിവ ഉൾപ്പെടില്ല.

ഇത് ഒരു ഡയഗ്നോസ്റ്റിക് സഹായിയാണ്, timeout അല്ലെങ്കിൽ query optimization അല്ല. ഒരിക്കലും മടങ്ങിവരാത്ത
ഒരു പ്രവർത്തനം റിപ്പോർട്ട് ചെയ്യാനോ, CPU പ്രവർത്തനത്തെ ഡിസ്ക് കാത്തിരിപ്പിൽ നിന്ന് വേർതിരിച്ചറിയാനോ, കൃത്യമായ
SQL തിരിച്ചറിയാനോ, റോ ഡ്രൈവർ ഹാൻഡിൽ വഴി നടത്തുന്ന പ്രവർത്തനങ്ങൾ നിരീക്ഷിക്കാനോ ഇതിന് കഴിയില്ല.
Async ബാക്കപ്പിന്റെ ദൈർഘ്യം മനഃപൂർവം ഒഴിവാക്കിയിരിക്കുന്നു; മറ്റ് SQLite ഡ്രൈവറുകളിൽ ഈ opt-in
ഇൻസ്ട്രുമെന്റേഷൻ ലഭ്യമല്ല. വേരിയബിൾ പ്രവർത്തനരഹിതമാക്കുന്നത് ടൈമിംഗ് റാപ്പറുകളില്ലാത്ത യഥാർത്ഥ അഡാപ്റ്റർ
പുനഃസ്ഥാപിക്കുന്നു. ഡാറ്റാബേസ് സ്കീമയിലോ സംഭരിച്ച കോൺഫിഗറേഷനിലോ മാറ്റങ്ങളൊന്നുമില്ല.

`/healthz` ലാഗ് മുന്നറിയിപ്പ് മുൻ സാമ്പിൾ മുതലുള്ള event-loop പീക്ക് റിപ്പോർട്ട് ചെയ്യുന്നു,
ആജീവനാന്ത ശരാശരിയല്ല. ഒരു തടസ്സത്തിന് SQLite അല്ലെങ്കിൽ ഡിസ്ക് പരാജയമാണ് കാരണമെന്ന് നിഗമനം ചെയ്യുന്നതിന് മുമ്പ്,
അതിന്റെ ടൈംസ്റ്റാമ്പുകൾ മന്ദഗതിയിലുള്ള പ്രവർത്തന മുന്നറിയിപ്പുകളുമായും ഹോസ്റ്റ്/സ്റ്റോറേജ് മെട്രിക്കുകളുമായും ബന്ധപ്പെടുത്തി പരിശോധിക്കുക.

## റഫറൻസ്

നടപ്പാക്കൽ:

- `bin/cli/runtime/magicBytes.mjs` — ബൈനറി മാജിക്-ബൈറ്റ് സാധൂകരണ സഹായികൾ
- `bin/cli/runtime/sqliteRuntime.mjs` — 5-ഘട്ട റൺടൈം റിസോൾവർ + ആവശ്യാനുസൃത ഇൻസ്റ്റാളർ
- `bin/cli/runtime/index.mjs` — സ്റ്റാർട്ടപ്പ് ഓർക്കസ്ട്രേറ്റർ (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — npm post-install ഹുക്ക് (മാരകമല്ലാത്ത warm-up)
- `src/lib/db/core.ts` — `ensureDbInitialized()` / `getDriverInfo()` എക്സ്പോർട്ടുകൾ

## ഒറ്റ-റൈറ്റർ ടോപ്പോളജി (HA പിന്തുണയ്ക്കുന്നില്ല)

മുകളിലുള്ള ഡ്രൈവർ fallback ശൃംഖല ഇപ്പോഴും **ഒരു പ്രോസസ്സിൽ** പ്രവർത്തിക്കുന്നു. സ്ഥിരസ്ഥിതി SQLite
OmniRoute ഒരു **ഒറ്റ റൈറ്റർ** ആണ്:

- ഒരേ `storage.sqlite` ഫയലിലേക്ക് രണ്ട് OmniRoute റെപ്ലിക്കകൾ ബന്ധിപ്പിക്കരുത്.
- ഒരു കണ്ടെയ്നർ റീസ്റ്റാർട്ട്, Recreate deploy, OOM kill, അല്ലെങ്കിൽ HEALTHCHECK restart എന്നിവ
  നിലവിൽ പുരോഗമിക്കുന്ന എല്ലാ SSE സെഷനുകളും വിച്ഛേദിക്കും. സാധാരണ പാതയിൽ session drain ഇല്ല.
- മന്ദഗതിയിലുള്ള `/healthz`-നെ പ്രവർത്തനരഹിതമായി കണക്കാക്കുന്ന ഓർക്കസ്ട്രേറ്റർ liveness ഏക
  റെപ്ലിക്കയെ അവസാനിപ്പിക്കും. TCP liveness + HTTP `/healthz` readiness തിരഞ്ഞെടുക്കുക. കാണുക:
  [Docker ഗൈഡ് — ലഭ്യത](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  കൂടാതെ [Kubernetes probe ശുപാർശകൾ](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
