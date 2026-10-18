# SQLite Runtime Resolution (မြန်မာ)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute သည် စတင်ချိန်တွင် အဆင့် ၅ ဆင့်ပါ fallback chain မှတစ်ဆင့် ၎င်း၏ SQLite driver ကို ရွေးချယ်သတ်မှတ်သည်-

1. **အတူထည့်သွင်းထားသော `better-sqlite3`** (`package.json` ရှိ `dependencies` မှတစ်ဆင့်)
   — အမြန်ဆုံးဖြစ်ပြီး native binary ကို အသုံးပြုသည်၊ build tools များရှိပါက `npm install` က ထည့်သွင်းပေးသည်။

2. **Runtime တွင် ထည့်သွင်းထားသော `better-sqlite3`** (`~/.omniroute/runtime/` အတွင်း)
   — ပထမဆုံး run ချိန်တွင် လိုအပ်မှသာ ထည့်သွင်းသည် **သို့မဟုတ်** `scripts/build/postinstall.mjs → scripts/postinstall.mjs` က ထည့်သွင်းပေးသည်။
   ပျက်စီးနေသော သို့မဟုတ် မှားယွင်းသည့် platform အတွက် binary များကို မတင်မိစေရန်
   load မလုပ်မီ native `.node` magic bytes (ELF / Mach-O / PE) ကို စစ်ဆေးအတည်ပြုသည်။

3. **`node:sqlite`** (Node ≥22.5 stdlib) — native build မလိုအပ်ပါ၊
   better-sqlite3 path နှစ်ခုစလုံး မအောင်မြင်သည့်အခါ အသုံးပြုသည်။ လုပ်ဆောင်ချက်များ အကန့်အသတ်ရှိသည်။

4. **`sql.js`** (WASM) — နောက်ဆုံး fallback ဖြစ်သည်။ နေရာတိုင်းတွင် အလုပ်လုပ်သော်လည်း ပိုနှေးပြီး
   data ကို synchronous ပုံစံဖြင့် ချက်ချင်းရေးမည့်အစား သတ်မှတ်ထားသော အချိန်ခြားအလိုက် ရေးသည်။

## အဘယ်ကြောင့် ဤမျှ ရှုပ်ထွေးရသနည်း?

- **Windows EBUSY**: ယခင် version ၏ `better_sqlite3.node` ကို လုပ်ဆောင်နေဆဲ process တစ်ခုက lock လုပ်ထားပါက
  `npm install -g omniroute@latest` မအောင်မြင်နိုင်ပါ။ `~/.omniroute/runtime/` အတွင်း runtime
  install ပြုလုပ်ခြင်းသည် global npm cache ကို ရှောင်လွှဲပေးသည်။
- **Build tools မရှိခြင်း**: အချို့ environment များ (VS Build Tools မပါသော ကုမ္ပဏီသုံး Windows၊
  အနည်းဆုံးအစိတ်အပိုင်းများသာပါသော Docker image များ) သည် `better-sqlite3` ကို compile မလုပ်နိုင်ပါ။ Runtime
  installer က npm registry မှ ကြိုတင် build လုပ်ထားသော binary ကို ရယူပေးသည်၊ ၎င်းပင် မအောင်မြင်ပါကလည်း fallback
  driver များကြောင့် OmniRoute က ဆက်လက်စတင်နိုင်သည်။
- **ကွန်ရက်ပြင်ပ သီးခြားစနစ်များ**: npm registry ကို ဆက်သွယ်၍မရပါက `node:sqlite`
  သို့မဟုတ် `sql.js` က အခြေခံလုပ်ဆောင်နိုင်စွမ်းကို အာမခံပေးသည်။

## Magic-byte စစ်ဆေးအတည်ပြုခြင်း

Runtime တွင် ထည့်သွင်းထားသော `.node` file ကို load မလုပ်မီ OmniRoute သည် ပထမဆုံး 8
bytes ကို ဖတ်ပြီး သိရှိထားသော platform magic များနှင့် တိုက်ဆိုင်စစ်ဆေးသည်-

| Platform              | Bytes (hex)   | Label       |
| --------------------- | ------------- | ----------- |
| Linux                 | `7F 45 4C 46` | `elf`       |
| macOS 64-bit BE       | `FE ED FA CF` | `macho`     |
| macOS 64-bit LE       | `CF FA ED FE` | `macho-le`  |
| macOS fat (universal) | `CA FE BA BE` | `macho-fat` |
| Windows               | `4D 5A` (MZ)  | `pe`        |

Magic မကိုက်ညီပါက → file ကို လျစ်လျူရှုပြီး fallback က နောက်အဆင့်သို့ ဆက်သွားသည်။

## လက်ရှိအသုံးပြုနေသော driver ကို စစ်ဆေးခြင်း

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## ကိုယ်တိုင် ထိန်းချုပ်ခြင်း

```bash
# မြန်ဆန်သော CI install များအတွက် postinstall warm-up ကို ကျော်ရန်
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# Runtime better-sqlite3 ကို အတင်းအကျပ် ပြန်လည်ထည့်သွင်းရန်
rm -rf ~/.omniroute/runtime
omniroute  # နောက်တစ်ကြိမ် စတင်ချိန်တွင် ပြန်လည်ထည့်သွင်းမည်

# မည်သည့် driver အသုံးပြုနေသည်ကို စစ်ဆေးရန်
omniroute config db-info  # (CLI command ရှိပါက)
```

## Synchronous ရပ်တန့်မှုများကို စစ်ဆေးဖော်ထုတ်ခြင်း

`better-sqlite3` ဖြင့် synchronous adapter timing ကို ရွေးချယ်ဖွင့်ရန် startup မတိုင်မီ
`OMNIROUTE_SQLITE_SLOW_MS=200` ကို သတ်မှတ်ပါ။ မူလအခြေအနေတွင် ပိတ်ထားသည်။ အပြီးသတ်လုပ်ဆောင်မှုတစ်ခုက
အနည်းဆုံး ထိုမျှသော milliseconds ကြာပါက adapter တစ်ခုလျှင် ဆယ်စက္ကန့်အတွင်း အများဆုံးတစ်ကြိမ်
`[SQLITE-SLOW]` သတိပေးချက် ထုတ်ပေးသည်။ သတိပေးချက်တွင် driver၊ operation class
(`prepare`, `get`, `all`, `run`, `exec`, `pragma`, transaction သို့မဟုတ် maintenance) နှင့်
ကြာမြင့်သော milliseconds တို့သာ ပါဝင်သည်။ SQL၊ bindings၊ rows၊ paths သို့မဟုတ် exception စာသား မပါဝင်ပါ။

ဤအရာသည် စစ်ဆေးဖော်ထုတ်ရေး အထောက်အကူတစ်ခုသာဖြစ်ပြီး timeout သို့မဟုတ် query optimization မဟုတ်ပါ။ ပြန်မလာတော့သော
operation တစ်ခုကို report မလုပ်နိုင်ပါ၊ CPU လုပ်ဆောင်မှုနှင့် disk စောင့်ဆိုင်းမှုကို ခွဲခြားမပေးနိုင်ပါ၊
အတိအကျဖြစ်သော SQL ကို ဖော်ထုတ်မပေးနိုင်ပါ၊ သို့မဟုတ် raw driver handle မှတစ်ဆင့် လုပ်ဆောင်သည့် operation များကို
စောင့်ကြည့်မပေးနိုင်ပါ။ Async backup ကြာချိန်ကို ရည်ရွယ်ချက်ရှိရှိ ဖယ်ထုတ်ထားသည်။ အခြား SQLite driver များတွင်
ဤရွေးချယ်ဖွင့်နိုင်သော instrumentation မပါဝင်ပါ။ Variable ကို ပိတ်ခြင်းဖြင့် timing wrapper များမပါသော မူလ adapter
ကို ပြန်လည်ရရှိသည်။ Database schema သို့မဟုတ် သိမ်းဆည်းထားသော configuration တစ်စုံတစ်ရာ ပြောင်းလဲမည်မဟုတ်ပါ။

`/healthz` lag သတိပေးချက်က သက်တမ်းတစ်လျှောက် ပျမ်းမျှတန်ဖိုးကို မဟုတ်ဘဲ ယခင် sample နောက်ပိုင်း
event-loop ၏ အမြင့်ဆုံးတန်ဖိုးကို report လုပ်သည်။ ရပ်တန့်မှုတစ်ခုကို SQLite သို့မဟုတ် disk ချို့ယွင်းမှုကြောင့်ဟု
မသတ်မှတ်မီ ၎င်း၏ timestamp များကို slow-operation သတိပေးချက်များ၊ host/storage metrics များနှင့် ဆက်စပ်စစ်ဆေးပါ။

## ကိုးကားချက်

အကောင်အထည်ဖော်ထားသည့်နေရာများ-

- `bin/cli/runtime/magicBytes.mjs` — binary magic-byte စစ်ဆေးအတည်ပြုရေး helper များ
- `bin/cli/runtime/sqliteRuntime.mjs` — အဆင့် ၅ ဆင့်ပါ runtime resolver + lazy installer
- `bin/cli/runtime/index.mjs` — startup orchestrator (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — npm post-install hook (မအောင်မြင်သော်လည်း အဓိကလုပ်ငန်းစဉ်ကို မရပ်စေသော warm-up)
- `src/lib/db/core.ts` — `ensureDbInitialized()` / `getDriverInfo()` exports

## Single-writer topology (HA ကို မပံ့ပိုးပါ)

အထက်ပါ driver fallback chain သည် **process တစ်ခု** အတွင်း၌သာ လုပ်ဆောင်နေဆဲဖြစ်သည်။ မူလ SQLite
OmniRoute သည် **single writer** ဖြစ်သည်-

- OmniRoute replica နှစ်ခုကို တူညီသော `storage.sqlite` file နှင့် မချိတ်ဆက်ပါနှင့်။
- Container restart၊ Recreate deploy၊ OOM kill သို့မဟုတ် HEALTHCHECK restart တစ်ခုသည်
  လုပ်ဆောင်နေဆဲ SSE session အားလုံးကို ပြတ်တောက်စေသည်။ မူလ path တွင် session drain မရှိပါ။
- နှေးကွေးသော `/healthz` ကို dead ဟု သတ်မှတ်သည့် orchestrator liveness က တစ်ခုတည်းသော
  replica ကို ရပ်ပစ်မည်။ TCP liveness + HTTP `/healthz` readiness ကို ဦးစားပေးပါ။
  [Docker လမ်းညွှန် — ရရှိနိုင်မှု](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  နှင့် [Kubernetes probe အကြံပြုချက်များ](./MONITORING_GUIDE.md#kubernetes-probe-recommendations) ကို ကြည့်ပါ။
