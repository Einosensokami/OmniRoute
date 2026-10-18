# SQLite Runtime Resolution (বাংলা)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute স্টার্টআপের সময় ৫-ধাপের একটি ফলব্যাক চেইনের মাধ্যমে তার SQLite ড্রাইভার নির্ধারণ করে:

1. **বান্ডল করা `better-sqlite3`** (`package.json`-এর `dependencies`-এর মাধ্যমে)
   — সবচেয়ে দ্রুত, নেটিভ বাইনারি; বিল্ড টুল উপস্থিত থাকলে `npm install` দ্বারা ইনস্টল করা হয়।

2. **রানটাইমে ইনস্টল করা `better-sqlite3`** (`~/.omniroute/runtime/`-এ)
   — প্রথমবার চালানোর সময় অলসভাবে **অথবা** `scripts/build/postinstall.mjs → scripts/postinstall.mjs` দ্বারা ইনস্টল করা হয়।
   লোড করার আগে নেটিভ `.node` ম্যাজিক বাইট (ELF / Mach-O / PE) যাচাই করে,
   যাতে ক্ষতিগ্রস্ত বা ভুল প্ল্যাটফর্মের বাইনারি থেকে সুরক্ষা পাওয়া যায়।

3. **`node:sqlite`** (Node ≥22.5 স্ট্যান্ডার্ড লাইব্রেরি) — কোনো নেটিভ বিল্ডের প্রয়োজন নেই; উভয়
   better-sqlite3 পাথ ব্যর্থ হলে ব্যবহৃত হয়। ফিচার সেট সীমিত।

4. **`sql.js`** (WASM) — চূড়ান্ত ফলব্যাক। সর্বত্র কাজ করে, তবে ধীরতর
   এবং সিঙ্ক্রোনাসভাবে লেখার পরিবর্তে নির্দিষ্ট বিরতিতে ডেটা লেখে।

## এত জটিলতা কেন?

- **Windows EBUSY**: পূর্ববর্তী সংস্করণের `better_sqlite3.node` কোনো চলমান
  প্রসেস দ্বারা লক করা থাকলে `npm install -g omniroute@latest` ব্যর্থ হতে পারে। `~/.omniroute/runtime/`-এ রানটাইম
  ইনস্টলেশনটি গ্লোবাল npm ক্যাশ এড়িয়ে যায়।
- **বিল্ড টুল নেই**: কিছু এনভায়রনমেন্টে (VS Build Tools ছাড়া কর্পোরেট Windows,
  ন্যূনতম Docker ইমেজ) `better-sqlite3` কম্পাইল করা যায় না। রানটাইম
  ইনস্টলার npm রেজিস্ট্রি থেকে একটি প্রি-বিল্ট বাইনারি নির্ধারণ করে; সেটিও ব্যর্থ হলে
  ফলব্যাক ড্রাইভারগুলো নিশ্চিত করে যে OmniRoute তবু চালু হয়।
- **এয়ার-গ্যাপড সিস্টেম**: npm রেজিস্ট্রিতে পৌঁছানো না গেলে `node:sqlite`
  অথবা `sql.js` মৌলিক কার্যকারিতা নিশ্চিত করে।

## ম্যাজিক-বাইট যাচাইকরণ

রানটাইমে ইনস্টল করা কোনো `.node` ফাইল লোড করার আগে OmniRoute প্রথম ৮টি
বাইট পড়ে এবং পরিচিত প্ল্যাটফর্ম ম্যাজিকের সঙ্গে মিলিয়ে দেখে:

| প্ল্যাটফর্ম           | বাইট (hex)    | লেবেল       |
| --------------------- | ------------- | ----------- |
| Linux                 | `7F 45 4C 46` | `elf`       |
| macOS 64-bit BE       | `FE ED FA CF` | `macho`     |
| macOS 64-bit LE       | `CF FA ED FE` | `macho-le`  |
| macOS fat (universal) | `CA FE BA BE` | `macho-fat` |
| Windows               | `4D 5A` (MZ)  | `pe`        |

ম্যাজিক না মিললে → ফাইলটি উপেক্ষা করা হয় এবং ফলব্যাক পরবর্তী ধাপে এগিয়ে যায়।

## সক্রিয় ড্রাইভার পরীক্ষা করা

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## ম্যানুয়াল নিয়ন্ত্রণ

```bash
# দ্রুত CI ইনস্টলের জন্য postinstall ওয়ার্ম-আপ এড়িয়ে যান
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# রানটাইম better-sqlite3 জোরপূর্বক পুনরায় ইনস্টল করুন
rm -rf ~/.omniroute/runtime
omniroute  # পরবর্তীবার চালুর সময় পুনরায় ইনস্টল হবে

# কোন ড্রাইভার সক্রিয় আছে তা পরীক্ষা করুন
omniroute config db-info  # (CLI কমান্ডটি থাকলে)
```

## সিঙ্ক্রোনাস স্থবিরতা নির্ণয়

সিঙ্ক্রোনাস অ্যাডাপ্টার টাইমিং সক্রিয় করতে `better-sqlite3`-এর ক্ষেত্রে স্টার্টআপের আগে
`OMNIROUTE_SQLITE_SLOW_MS=200` সেট করুন। এটি ডিফল্টভাবে বন্ধ থাকে। সম্পন্ন হওয়া কোনো অপারেশনে
অন্তত এত মিলিসেকেন্ড সময় লাগলে একটি `[SQLITE-SLOW]` সতর্কতা নির্গত হয়—প্রতি
অ্যাডাপ্টারে প্রতি দশ সেকেন্ডে সর্বোচ্চ একবার। সতর্কতাটিতে কেবল ড্রাইভার, অপারেশন শ্রেণি
(`prepare`, `get`, `all`, `run`, `exec`, `pragma`, ট্রানজ্যাকশন অথবা রক্ষণাবেক্ষণ) এবং
অতিবাহিত মিলিসেকেন্ড থাকে: কোনো SQL, বাইন্ডিং, রো, পাথ বা এক্সেপশন টেক্সট থাকে না।

এটি একটি ডায়াগনস্টিক সহায়তা, টাইমআউট বা কোয়েরি অপ্টিমাইজেশন নয়। এটি কখনো ফিরে না আসা
কোনো অপারেশন রিপোর্ট করতে, CPU-এর কাজকে ডিস্ক অপেক্ষা থেকে পৃথক করতে, নির্দিষ্ট
SQL শনাক্ত করতে অথবা র ড্রাইভার হ্যান্ডেলের মাধ্যমে সম্পাদিত অপারেশন পর্যবেক্ষণ করতে পারে না।
অ্যাসিঙ্ক ব্যাকআপের সময়কাল ইচ্ছাকৃতভাবে বাদ দেওয়া হয়েছে; অন্য SQLite ড্রাইভারগুলো
এই অপ্ট-ইনের মাধ্যমে ইনস্ট্রুমেন্ট করা হয় না। ভ্যারিয়েবলটি নিষ্ক্রিয় করলে টাইমিং
র্যাপার ছাড়াই মূল অ্যাডাপ্টার পুনরুদ্ধার হয়। ডেটাবেস স্কিমা বা সংরক্ষিত কনফিগারেশনে কোনো পরিবর্তন হয় না।

`/healthz` ল্যাগ সতর্কতা পূর্ববর্তী স্যাম্পলের পর থেকে ইভেন্ট-লুপের সর্বোচ্চ মান রিপোর্ট করে,
সমগ্র সময়কালের গড় নয়। কোনো স্থবিরতার জন্য SQLite বা ডিস্ক ব্যর্থতাকে দায়ী করার আগে
এর টাইমস্ট্যাম্পগুলো ধীর অপারেশনের সতর্কতা এবং হোস্ট/স্টোরেজ মেট্রিক্সের সঙ্গে মিলিয়ে দেখুন।

## রেফারেন্স

ইমপ্লিমেন্টেশন:

- `bin/cli/runtime/magicBytes.mjs` — বাইনারি ম্যাজিক-বাইট যাচাইকরণের সহায়ক
- `bin/cli/runtime/sqliteRuntime.mjs` — ৫-ধাপের রানটাইম রিজলভার + অলস ইনস্টলার
- `bin/cli/runtime/index.mjs` — স্টার্টআপ অর্কেস্ট্রেটর (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — npm পোস্ট-ইনস্টল হুক (ব্যর্থ হলেও মারাত্মক নয় এমন ওয়ার্ম-আপ)
- `src/lib/db/core.ts` — `ensureDbInitialized()` / `getDriverInfo()` এক্সপোর্ট

## একক-রাইটার টপোলজি (HA সমর্থিত নয়)

উপরের ড্রাইভার ফলব্যাক চেইনটি এখনো **একটি প্রসেসে** চলে। ডিফল্ট SQLite-সহ
OmniRoute হলো একটি **একক রাইটার**:

- একই `storage.sqlite` ফাইলে দুটি OmniRoute রেপ্লিকা সংযুক্ত করবেন না।
- কোনো কনটেইনার রিস্টার্ট, Recreate ডিপ্লয়, OOM kill অথবা HEALTHCHECK রিস্টার্ট
  চলমান প্রতিটি SSE সেশন বিচ্ছিন্ন করে। ডিফল্ট পাথে কোনো সেশন ড্রেন নেই।
- ধীর `/healthz`-কে ডেড হিসেবে বিবেচনা করা অর্কেস্ট্রেটর লাইভনেস একমাত্র
  রেপ্লিকাটিকে বন্ধ করে দেবে। TCP লাইভনেস + HTTP `/healthz` রেডিনেস ব্যবহার করুন। দেখুন
  [Docker নির্দেশিকা — প্রাপ্যতা](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  এবং [Kubernetes প্রোবের সুপারিশ](./MONITORING_GUIDE.md#kubernetes-probe-recommendations)।
