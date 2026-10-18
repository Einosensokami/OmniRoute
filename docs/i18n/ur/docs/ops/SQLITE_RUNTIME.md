# SQLite Runtime Resolution (اردو)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute آغاز کے وقت 5 مراحل پر مشتمل متبادل سلسلے کے ذریعے اپنے SQLite ڈرائیور کا تعین کرتا ہے:

1. **بنڈل شدہ `better-sqlite3`** (`package.json` میں `dependencies` کے ذریعے)
   — سب سے تیز، مقامی بائنری، اور build tools موجود ہونے پر `npm install` کے ذریعے انسٹال ہوتا ہے۔

2. **رن ٹائم پر انسٹال شدہ `better-sqlite3`** (`~/.omniroute/runtime/` میں)
   — پہلی بار چلانے پر ضرورت کے مطابق **یا** `scripts/build/postinstall.mjs → scripts/postinstall.mjs` کے ذریعے انسٹال ہوتا ہے۔
   لوڈ کرنے سے پہلے مقامی `.node` کے magic bytes (ELF / Mach-O / PE) کی توثیق کرتا ہے
   تاکہ خراب یا غلط پلیٹ فارم کی بائنریز سے تحفظ حاصل ہو۔

3. **`node:sqlite`** (Node ≥22.5 stdlib) — مقامی build کی ضرورت نہیں؛ جب
   `better-sqlite3` کے دونوں راستے ناکام ہو جائیں تو استعمال ہوتا ہے۔ فیچرز کا مجموعہ محدود ہے۔

4. **`sql.js`** (WASM) — آخری متبادل۔ ہر جگہ کام کرتا ہے لیکن نسبتاً سست ہے
   اور ڈیٹا کو ہم وقتی طور پر لکھنے کے بجائے وقفے وقفے سے لکھتا ہے۔

## یہ پیچیدگی کیوں؟

- **Windows EBUSY**: اگر پچھلے ورژن کی `better_sqlite3.node` کسی چلتے ہوئے عمل کے ذریعے
  مقفل ہو تو `npm install -g omniroute@latest` ناکام ہو سکتا ہے۔ `~/.omniroute/runtime/`
  میں رن ٹائم انسٹال عالمی npm کیش کو نظرانداز کر دیتا ہے۔
- **build tools کی عدم موجودگی**: بعض ماحول (VS Build Tools کے بغیر کارپوریٹ Windows،
  کم سے کم Docker images) `better-sqlite3` کو compile نہیں کر سکتے۔ رن ٹائم
  انسٹالر npm registry سے پہلے سے build شدہ بائنری حاصل کرتا ہے؛ متبادل
  ڈرائیور یقینی بناتے ہیں کہ اس کی ناکامی کی صورت میں بھی OmniRoute شروع ہو جائے۔
- **نیٹ ورک سے منقطع سسٹمز**: اگر npm registry تک رسائی نہ ہو تو `node:sqlite`
  یا `sql.js` بنیادی فعالیت کی ضمانت دیتے ہیں۔

## Magic-byte کی توثیق

رن ٹائم پر انسٹال شدہ `.node` فائل لوڈ کرنے سے پہلے، OmniRoute ابتدائی 8
bytes پڑھتا ہے اور انہیں معروف پلیٹ فارم magics سے ملاتا ہے:

| پلیٹ فارم             | Bytes (hex)   | لیبل        |
| --------------------- | ------------- | ----------- |
| Linux                 | `7F 45 4C 46` | `elf`       |
| macOS 64-bit BE       | `FE ED FA CF` | `macho`     |
| macOS 64-bit LE       | `CF FA ED FE` | `macho-le`  |
| macOS fat (universal) | `CA FE BA BE` | `macho-fat` |
| Windows               | `4D 5A` (MZ)  | `pe`        |

غیر مماثل magic → فائل نظرانداز کر دی جاتی ہے، اور متبادل سلسلہ اگلے مرحلے پر جاری رہتا ہے۔

## فعال ڈرائیور کی جانچ

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## دستی کنٹرول

```bash
# تیز رفتار CI انسٹالز کے لیے postinstall warm-up چھوڑ دیں
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# رن ٹائم better-sqlite3 کو زبردستی دوبارہ انسٹال کریں
rm -rf ~/.omniroute/runtime
omniroute  # اگلی بار شروع ہونے پر دوبارہ انسٹال ہو جائے گا

# جانچیں کہ کون سا ڈرائیور فعال ہے
omniroute config db-info  # اگر CLI کمانڈ موجود ہو
```

## ہم وقتی تعطل کی تشخیص

`better-sqlite3` کے ساتھ، ہم وقتی adapter timing کو فعال کرنے کے لیے آغاز سے پہلے
`OMNIROUTE_SQLITE_SLOW_MS=200` مقرر کریں۔ بطور ڈیفالٹ یہ بند ہوتا ہے۔ کوئی مکمل شدہ
عمل جو کم از کم اتنے milliseconds لے، `[SQLITE-SLOW]` انتباہ جاری کرتا ہے، اور ہر
adapter کے لیے دس سیکنڈ میں زیادہ سے زیادہ ایک بار۔ انتباہ میں صرف ڈرائیور، عمل کی
درجہ بندی (`prepare`، `get`، `all`، `run`، `exec`، `pragma`، transaction یا maintenance)،
اور گزرے ہوئے milliseconds شامل ہوتے ہیں: کوئی SQL، bindings، rows، paths یا exception text نہیں۔

یہ تشخیصی معاون ہے، timeout یا query optimization نہیں۔ یہ ایسے عمل کی اطلاع نہیں دے سکتا
جو کبھی واپس نہ آئے، CPU کے کام کو disk waits سے الگ نہیں کر سکتا، عین SQL کی نشاندہی
نہیں کر سکتا، یا raw driver handle کے ذریعے کیے گئے اعمال کا مشاہدہ نہیں کر سکتا۔
Async backup کا دورانیہ دانستہ طور پر خارج کیا گیا ہے؛ دیگر SQLite ڈرائیور اس اختیاری
instrumentation کے تحت نہیں آتے۔ متغیر کو غیر فعال کرنے سے timing wrappers کے بغیر
اصل adapter بحال ہو جاتا ہے۔ database schema یا محفوظ شدہ configuration میں کوئی تبدیلی نہیں ہوتی۔

`/healthz` کا lag انتباہ گزشتہ sample کے بعد سے event loop کی بلند ترین قدر رپورٹ کرتا ہے،
نہ کہ پوری مدت کی اوسط۔ کسی تعطل کو SQLite یا disk failure سے منسوب کرنے سے پہلے اس کے
timestamps کو سست کارروائیوں کے انتباہات اور host/storage metrics کے ساتھ ملا کر دیکھیں۔

## حوالہ

نفاذ:

- `bin/cli/runtime/magicBytes.mjs` — binary magic-byte validation کے معاونین
- `bin/cli/runtime/sqliteRuntime.mjs` — 5 مراحل کا runtime resolver + lazy installer
- `bin/cli/runtime/index.mjs` — startup orchestrator (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — npm post-install hook (غیر مہلک warm-up)
- `src/lib/db/core.ts` — `ensureDbInitialized()` / `getDriverInfo()` exports

## واحد writer کی topology (HA غیر معاون)

مندرجہ بالا ڈرائیور کا متبادل سلسلہ پھر بھی **ایک process** میں چلتا ہے۔ ڈیفالٹ SQLite
OmniRoute ایک **واحد writer** ہے:

- دو OmniRoute replicas کو ایک ہی `storage.sqlite` فائل سے منسلک نہ کریں۔
- container restart، Recreate deploy، OOM kill، یا HEALTHCHECK restart ہر
  زیرِ عمل SSE session کو ختم کر دیتا ہے۔ معیاری راستے پر session drain موجود نہیں۔
- وہ orchestrator liveness جو سست `/healthz` کو مردہ سمجھتی ہے، واحد replica کو ختم کر دے گی۔
  TCP liveness + HTTP `/healthz` readiness کو ترجیح دیں۔ دیکھیے
  [Docker رہنما — دستیابی](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  اور [Kubernetes probe کی سفارشات](./MONITORING_GUIDE.md#kubernetes-probe-recommendations)۔
