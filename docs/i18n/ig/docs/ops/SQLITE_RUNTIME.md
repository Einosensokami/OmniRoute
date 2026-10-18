# SQLite Runtime Resolution (Igbo)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute na-achọpụta draịva SQLite ya mgbe ọ na-amalite site n’usoro ndabere nwere nzọụkwụ 5:

1. **`better-sqlite3` etinyere n’ime ngwugwu** (site na `dependencies` dị na `package.json`)
   — nke kachasị ọsọ, binary nke sistemụ, nke `npm install` na-etinye mgbe ngwaọrụ build dị.

2. **`better-sqlite3` etinyere n’oge mmemme na-agba** (n’ime `~/.omniroute/runtime/`)
   — a na-etinye ya naanị mgbe ọ dị mkpa n’oge mbụ a na-agba ya **MA Ọ BỤ** site na `scripts/build/postinstall.mjs → scripts/postinstall.mjs`.
   Ọ na-enyocha magic bytes nke `.node` nke sistemụ (ELF / Mach-O / PE) tupu ebuo ya
   iji chebe megide binary mebiri emebi ma ọ bụ nke e wuru maka nyiwe na-ezighi ezi.

3. **`node:sqlite`** (ọbá akwụkwọ ọkọlọtọ Node ≥22.5) — ọ dịghị mkpa iwulite ihe nke sistemụ; a na-eji ya mgbe
   ụzọ better-sqlite3 abụọ ahụ dara. Ọ nwere atụmatụ ole na ole.

4. **`sql.js`** (WASM) — ndabere ikpeazụ. Ọ na-arụ ọrụ ebe niile mana ọ na-eji nwayọ karịa
   ma na-ede data n’oge a kara aka kama ide ya ozugbo n’otu oge.

## Gịnị mere mgbagwoju anya a ji dị?

- **Windows EBUSY**: `npm install -g omniroute@latest` nwere ike ịda ma ọ bụrụ na
  usoro na-agba ọrụ kpọchiri `better_sqlite3.node` nke ụdị gara aga. Ntinye n’oge mmemme
  na-agba n’ime `~/.omniroute/runtime/` na-agafe cache npm zuru ụwa ọnụ.
- **Enweghị ngwaọrụ build**: Ụfọdụ gburugburu (Windows ụlọ ọrụ na-enweghị VS Build
  Tools, onyonyo Docker pere mpe) enweghị ike ịchịkọta `better-sqlite3`. Ihe ntinye
  nke oge mmemme na-agba na-enweta binary e wuru tupu oge eruo site na ndekọ npm; draịva
  ndabere na-eme ka OmniRoute ka nwee ike ịmalite ọbụlagodi ma nke ahụ daa.
- **Sistemụ ndị e kewapụrụ n’ịntanetị**: Ọ bụrụ na enweghị ike iru ndekọ npm, `node:sqlite`
  ma ọ bụ `sql.js` na-ekwe nkwa na ọrụ ndị bụ isi ga-adị.

## Nnyocha magic-byte

Tupu OmniRoute ebuo faịlụ `.node` etinyere n’oge mmemme na-agba, ọ na-agụ bytes 8
mbụ wee tụnyere ha na magic ndị amaara nke nyiwe:

| Nyiwe                 | Bytes (hex)   | Akara       |
| --------------------- | ------------- | ----------- |
| Linux                 | `7F 45 4C 46` | `elf`       |
| macOS 64-bit BE       | `FE ED FA CF` | `macho`     |
| macOS 64-bit LE       | `CF FA ED FE` | `macho-le`  |
| macOS fat (universal) | `CA FE BA BE` | `macho-fat` |
| Windows               | `4D 5A` (MZ)  | `pe`        |

Magic na-adabaghị → a na-eleghara faịlụ ahụ anya, usoro ndabere ahụ aga n’ihu na nzọụkwụ na-esote.

## Ịlele draịva na-arụ ọrụ

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { isi-mmalite: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   ụdị: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## Njikwa aka

```bash
# Mafere nkwadebe postinstall (maka ntinye CI ngwa ngwa)
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# Manye ntinye ọzọ nke better-sqlite3 nke oge mmemme na-agba
rm -rf ~/.omniroute/runtime
omniroute  # ọ ga-etinye ya ọzọ n’oge mmalite na-esote

# Lelee draịva na-arụ ọrụ
omniroute config db-info  # (ọ bụrụ na iwu CLI ahụ dị)
```

## Ịchọpụta nkwụsị nke ọrụ synchronous

Mgbe ị na-eji `better-sqlite3`, tọọ `OMNIROUTE_SQLITE_SLOW_MS=200` tupu mmalite iji họrọ
ịtụ oge nke ihe nkwụnye synchronous. Na ndabara, agbanyụghị ya. Ọrụ mechara nke were
opekata mpe ọnụọgụ milliseconds ahụ na-ewepụta ịdọ aka ná ntị `[SQLITE-SLOW]`, nke kachasị
otu ugboro n’ime sekọnd iri ọ bụla maka ihe nkwụnye ọ bụla. Ịdọ aka ná ntị ahụ nwere naanị draịva, klaasị ọrụ
(`prepare`, `get`, `all`, `run`, `exec`, `pragma`, azụmahịa ma ọ bụ mmezi), na
milliseconds gafere: enweghị SQL, njikọ ụkpụrụ, ahịrị, ụzọ faịlụ ma ọ bụ ederede exception.

Nke a bụ ihe enyemaka nyocha, ọ bụghị timeout ma ọ bụ nkwalite query. Ọ pụghị ịkọ
ọrụ na-adịghị alaghachi ma ọlị, ịmata ọdịiche dị n’etiti ọrụ CPU na ichere diski, ịchọpụta
SQL kpọmkwem, ma ọ bụ ịhụ ọrụ ndị e mere site na raw driver handle.
A kpachapụrụ anya wepụ oge backup asynchronous; etinyeghị ngwaọrụ nlele a a na-ahọrọ iji mee ihe
na draịva SQLite ndị ọzọ. Ịgbanyụ variable ahụ na-eweghachi ihe nkwụnye mbụ
na-enweghị ihe mkpuchi ịtụ oge. Ọ dịghị schema database ma ọ bụ nhazi echekwara na-agbanwe.

Ịdọ aka ná ntị lag nke `/healthz` na-akọ ọnụ ọgụgụ kachasị elu nke event-loop kemgbe sample gara aga,
ọ bụghị nkezi nke ndụ ya niile. Tụnyere timestamps ya na ịdọ aka ná ntị nke ọrụ nwayọ
yana metrics nke host/storage tupu i kwuo na nkwụsị ahụ sitere na SQLite ma ọ bụ ọdịda diski.

## Ntụaka

Mmejuputa:

- `bin/cli/runtime/magicBytes.mjs` — ngwa enyemaka maka nnyocha magic-byte nke binary
- `bin/cli/runtime/sqliteRuntime.mjs` — ihe nchọpụta oge mmemme na-agba nwere nzọụkwụ 5 + ihe ntinye mgbe ọ dị mkpa
- `bin/cli/runtime/index.mjs` — onye nhazi mmalite (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — hook npm mgbe ntinye gasịrị (nkwadebe na-adịghị ebute ọdịda)
- `src/lib/db/core.ts` — mbupụ `ensureDbInitialized()` / `getDriverInfo()`

## Nhazi otu onye na-ede ihe (anaghị akwado HA)

Usoro ndabere draịva dị n’elu ka na-agba n’ime **otu process**. SQLite ndabara
nke OmniRoute bụ **otu onye na-ede ihe**:

- Ejikọla replicas OmniRoute abụọ n’otu faịlụ `storage.sqlite`.
- Mmalite container ọzọ, Recreate deploy, OOM kill, ma ọ bụ HEALTHCHECK restart na-akwụsị
  session SSE niile na-aga n’ihu. Enweghị session drain n’ụzọ ndabara.
- Liveness nke orchestrator nke na-ewere `/healthz` dị nwayọ dịka nke nwụrụ anwụ ga-egbu naanị
  replica ahụ. Họrọ TCP liveness + HTTP `/healthz` readiness. Lee
  [Ntuziaka Docker — nnweta](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  na [ndụmọdụ probe Kubernetes](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
