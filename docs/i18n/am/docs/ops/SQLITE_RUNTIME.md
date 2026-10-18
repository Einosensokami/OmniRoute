# SQLite Runtime Resolution (አማርኛ)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute ሲጀምር የSQLite አንቀሳቃሹን በ5-ደረጃ ተተኪ ሰንሰለት ይወስናል፦

1. **አብሮ የታሸገ `better-sqlite3`** (በ`package.json` ውስጥ ባለው `dependencies` በኩል)
   — ፈጣኑ፣ ቤተኛ binary፣ የግንባታ መሣሪያዎች ሲኖሩ `npm install` የሚጭነው።

2. **በአሂድ ጊዜ የተጫነ `better-sqlite3`** (በ`~/.omniroute/runtime/` ውስጥ)
   — ለመጀመሪያ ጊዜ ሲሄድ እንደ አስፈላጊነቱ **ወይም** በ`scripts/build/postinstall.mjs → scripts/postinstall.mjs` ይጫናል።
   ከመጫኑ በፊት ቤተኛ `.node` magic bytes (ELF / Mach-O / PE) በማረጋገጥ
   የተበላሹ ወይም ለተሳሳተ መድረክ የተዘጋጁ binaries እንዳይጫኑ ይከላከላል።

3. **`node:sqlite`** (Node ≥22.5 stdlib) — ቤተኛ ግንባታ አያስፈልግም፤ ሁለቱም የbetter-sqlite3 መንገዶች
   ሳይሳኩ ሲቀሩ ጥቅም ላይ ይውላል። የተገደበ የባህሪያት ስብስብ አለው።

4. **`sql.js`** (WASM) — የመጨረሻው ተተኪ። በሁሉም ቦታ ይሠራል፣ ነገር ግን የቀዘቀዘ ነው
   እና ውሂብን በተመሳሰለ መንገድ ሳይሆን በተወሰነ የጊዜ ክፍተት ይጽፋል።

## ይህ ውስብስብነት ለምን ያስፈልጋል?

- **Windows EBUSY**፦ የቀድሞው ስሪት `better_sqlite3.node` በሚሄድ ሂደት ከተቆለፈ
  `npm install -g omniroute@latest` ሊሳካ አይችልም። በ`~/.omniroute/runtime/` ውስጥ የሚደረገው የአሂድ ጊዜ
  ጭነት ዓለም አቀፉን npm cache ያልፋል።
- **የግንባታ መሣሪያዎች አለመኖር**፦ አንዳንድ አካባቢዎች (VS Build
  Tools የሌለባቸው የድርጅት Windows ሥርዓቶች፣ አነስተኛ Docker images) `better-sqlite3`ን ማጠናቀር አይችሉም። የአሂድ ጊዜ
  ጫኚው ቀድሞ የተገነባ binary ከnpm registry ያገኛል፤ ይህም ቢሳካ እንኳን ተተኪ
  አንቀሳቃሾቹ OmniRoute እንዲነሳ ያረጋግጣሉ።
- **ከአውታረ መረብ የተነጠሉ ሥርዓቶች**፦ npm registry የማይደረስ ከሆነ `node:sqlite`
  ወይም `sql.js` መሠረታዊ ተግባራዊነትን ያረጋግጣሉ።

## የMagic-byte ማረጋገጫ

OmniRoute በአሂድ ጊዜ የተጫነ `.node` file ከመጫኑ በፊት የመጀመሪያዎቹን 8
bytes ያነባል እና ከሚታወቁት የመድረክ magics ጋር ያዛምዳል፦

| መድረክ                  | Bytes (hex)   | መለያ         |
| --------------------- | ------------- | ----------- |
| Linux                 | `7F 45 4C 46` | `elf`       |
| macOS 64-bit BE       | `FE ED FA CF` | `macho`     |
| macOS 64-bit LE       | `CF FA ED FE` | `macho-le`  |
| macOS fat (universal) | `CA FE BA BE` | `macho-fat` |
| Windows               | `4D 5A` (MZ)  | `pe`        |

የማይዛመድ magic → file ችላ ይባላል፣ የተተኪው ሂደት ወደ ቀጣዩ ደረጃ ይቀጥላል።

## ንቁውን አንቀሳቃሽ መፈተሽ

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## በእጅ መቆጣጠር

```bash
# ለፈጣን CI ጭነቶች የpostinstall ቅድመ-ማሞቂያን ዝለል
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# የአሂድ ጊዜ better-sqlite3ን በግድ እንደገና ጫን
rm -rf ~/.omniroute/runtime
omniroute  # በሚቀጥለው ጅምር እንደገና ይጫናል

# የትኛው አንቀሳቃሽ ንቁ እንደሆነ ፈትሽ
omniroute config db-info  # (የCLI ትዕዛዙ ካለ)
```

## የተመሳሰሉ መቆሞችን መመርመር

`better-sqlite3`ን ሲጠቀሙ፣ የተመሳሰለ adapter ጊዜ መለኪያን ለማንቃት ከጅምር በፊት `OMNIROUTE_SQLITE_SLOW_MS=200` ያዘጋጁ።
በነባሪነት የተሰናከለ ነው። የተጠናቀቀ ክወና ቢያንስ ይህን ያህል milliseconds ከወሰደ
የ`[SQLITE-SLOW]` ማስጠንቀቂያ ይወጣል፣ ለእያንዳንዱ adapter በየአሥር
ሰከንዱ ቢበዛ አንድ ጊዜ። ማስጠንቀቂያው አንቀሳቃሹን፣ የክወናውን ምድብ
(`prepare`፣ `get`፣ `all`፣ `run`፣ `exec`፣ `pragma`፣ transaction ወይም maintenance) እና
ያለፉትን milliseconds ብቻ ይይዛል፦ SQL፣ bindings፣ rows፣ paths ወይም exception text አይካተቱም።

ይህ የምርመራ እገዛ እንጂ timeout ወይም የquery ማመቻቸት አይደለም። ፈጽሞ የማይመለስን
ክወና ሪፖርት ማድረግ፣ የCPU ሥራን ከdisk ጥበቃ መለየት፣
ትክክለኛውን SQL መለየት ወይም በraw driver handle በኩል የተከናወኑ ክወናዎችን መከታተል አይችልም።
የAsync backup ቆይታ ሆን ተብሎ አልተካተተም፤ ሌሎች የSQLite አንቀሳቃሾች በዚህ
በፈቃድ በሚነቃው ባህሪ አይለኩም። ተለዋዋጩን ማሰናከል የጊዜ መለኪያ wrappers የሌሉበትን ዋናውን adapter
ይመልሳል። በdatabase schema ወይም በተከማቸው ውቅር ላይ ምንም ለውጥ አይደረግም።

የ`/healthz` lag ማስጠንቀቂያ ከቀዳሚው sample ጀምሮ ያለውን የevent-loop ከፍተኛ ደረጃ እንጂ
የሙሉ ዕድሜ አማካዩን አይዘግብም። አንድ መቆም በSQLite ወይም በdisk ብልሽት እንደተፈጠረ ከመወሰንዎ በፊት
timestampsን ከዘገዩ ክወናዎች ማስጠንቀቂያዎች
እና ከhost/storage metrics ጋር ያዛምዱ።

## ማጣቀሻ

ትግበራ፦

- `bin/cli/runtime/magicBytes.mjs` — የbinary magic-byte ማረጋገጫ አጋዥ መሣሪያዎች
- `bin/cli/runtime/sqliteRuntime.mjs` — ባለ5-ደረጃ የአሂድ ጊዜ መፍቻ + እንደ አስፈላጊነቱ ጫኚ
- `bin/cli/runtime/index.mjs` — የጅምር አስተባባሪ (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — ከnpm ጭነት በኋላ የሚሠራ hook (ሳይሳካ ቢቀርም ከባድ ያልሆነ ቅድመ-ማሞቂያ)
- `src/lib/db/core.ts` — `ensureDbInitialized()` / `getDriverInfo()` exports

## ባለአንድ-ጸሐፊ ቶፖሎጂ (HA አይደገፍም)

ከላይ ያለው የአንቀሳቃሽ ተተኪ ሰንሰለት አሁንም በ**አንድ ሂደት** ውስጥ ይሠራል። ነባሪው SQLite
OmniRoute **አንድ ጸሐፊ** ነው፦

- ሁለት የOmniRoute replicasን ከተመሳሳዩ `storage.sqlite` file ጋር አያያይዙ።
- የcontainer restart፣ Recreate deploy፣ OOM kill ወይም HEALTHCHECK restart በሂደት ላይ ያሉ
  ሁሉንም SSE sessions ያቋርጣል። በመደበኛው መንገድ session drain የለም።
- ዘገምተኛ `/healthz`ን እንደ ሞተ የሚቆጥር የorchestrator liveness ብቸኛውን
  replica ያቋርጣል። TCP liveness + HTTP `/healthz` readinessን ይምረጡ።
  [Docker መመሪያ — ተገኝነት](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  እና [የKubernetes probe ምክሮች](./MONITORING_GUIDE.md#kubernetes-probe-recommendations)ን ይመልከቱ።
