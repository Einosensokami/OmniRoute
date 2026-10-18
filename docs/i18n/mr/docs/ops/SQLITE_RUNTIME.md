# SQLite Runtime Resolution (मराठी)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute स्टार्टअपवेळी 5-टप्प्यांच्या फॉलबॅक साखळीद्वारे त्याचा SQLite ड्रायव्हर निश्चित करते:

1. **बंडल केलेला `better-sqlite3`** (`package.json` मधील `dependencies` द्वारे)
   — सर्वात जलद, नेटिव्ह बायनरी; बिल्ड साधने उपलब्ध असताना `npm install` द्वारे स्थापित केला जातो.

2. **रनटाइमवेळी स्थापित केलेला `better-sqlite3`** (`~/.omniroute/runtime/` मध्ये)
   — प्रथमच चालवताना **किंवा** `scripts/build/postinstall.mjs → scripts/postinstall.mjs` द्वारे आवश्यकतेनुसार स्थापित केला जातो.
   लोड करण्यापूर्वी नेटिव्ह `.node` मॅजिक बाइट्सची (ELF / Mach-O / PE) पडताळणी करतो,
   जेणेकरून दूषित किंवा चुकीच्या प्लॅटफॉर्मसाठी असलेल्या बायनरींपासून संरक्षण मिळेल.

3. **`node:sqlite`** (Node ≥22.5 stdlib) — नेटिव्ह बिल्डची आवश्यकता नाही; दोन्ही
   better-sqlite3 मार्ग अयशस्वी झाल्यास वापरला जातो. वैशिष्ट्यांचा संच मर्यादित आहे.

4. **`sql.js`** (WASM) — अंतिम फॉलबॅक. सर्वत्र कार्य करतो, परंतु तुलनेने धीमा आहे
   आणि डेटा समकालिकपणे लिहिण्याऐवजी ठरावीक अंतराने लिहितो.

## ही गुंतागुंत का आवश्यक आहे?

- **Windows EBUSY**: मागील आवृत्तीचा `better_sqlite3.node` एखाद्या चालू प्रक्रियेद्वारे
  लॉक केलेला असल्यास `npm install -g omniroute@latest` अयशस्वी होऊ शकतो.
  `~/.omniroute/runtime/` मधील रनटाइम स्थापना ग्लोबल npm कॅश टाळते.
- **बिल्ड साधने उपलब्ध नसणे**: काही वातावरणांमध्ये (VS Build Tools नसलेले कॉर्पोरेट Windows,
  किमान Docker इमेजेस) `better-sqlite3` कम्पाइल करता येत नाही. रनटाइम इंस्टॉलर
  npm रजिस्ट्रीमधून पूर्व-बिल्ड केलेली बायनरी मिळवतो; तेही अयशस्वी झाल्यास
  फॉलबॅक ड्रायव्हर्स OmniRoute सुरू होईल याची खात्री करतात.
- **एअर-गॅप्ड प्रणाली**: npm रजिस्ट्रीशी संपर्क होऊ शकत नसल्यास, `node:sqlite`
  किंवा `sql.js` मूलभूत कार्यक्षमता सुनिश्चित करतात.

## मॅजिक-बाइट पडताळणी

रनटाइमवेळी स्थापित केलेली `.node` फाइल लोड करण्यापूर्वी, OmniRoute तिचे पहिले 8
बाइट्स वाचते आणि ज्ञात प्लॅटफॉर्म मॅजिकशी त्यांची तुलना करते:

| प्लॅटफॉर्म            | बाइट्स (hex)  | लेबल        |
| --------------------- | ------------- | ----------- |
| Linux                 | `7F 45 4C 46` | `elf`       |
| macOS 64-बिट BE       | `FE ED FA CF` | `macho`     |
| macOS 64-बिट LE       | `CF FA ED FE` | `macho-le`  |
| macOS fat (universal) | `CA FE BA BE` | `macho-fat` |
| Windows               | `4D 5A` (MZ)  | `pe`        |

मॅजिक जुळले नाही → फाइल दुर्लक्षित केली जाते आणि फॉलबॅक पुढील टप्प्यावर सुरू राहतो.

## सक्रिय ड्रायव्हर तपासणे

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## मॅन्युअल नियंत्रण

```bash
# जलद CI स्थापनांसाठी postinstall वॉर्म-अप वगळा
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# रनटाइम better-sqlite3 सक्तीने पुन्हा स्थापित करा
rm -rf ~/.omniroute/runtime
omniroute  # पुढील स्टार्टवेळी पुन्हा स्थापित होईल

# कोणता ड्रायव्हर सक्रिय आहे ते तपासा
omniroute config db-info  # (CLI कमांड अस्तित्वात असल्यास)
```

## समकालिक अडथळ्यांचे निदान

`better-sqlite3` सह, समकालिक अॅडॅप्टर टाइमिंग स्वेच्छेने सक्षम करण्यासाठी स्टार्टअपपूर्वी
`OMNIROUTE_SQLITE_SLOW_MS=200` सेट करा. डीफॉल्टनुसार ते बंद असते. किमान तेवढे
मिलिसेकंद घेणाऱ्या पूर्ण झालेल्या ऑपरेशनसाठी `[SQLITE-SLOW]` चेतावणी उत्सर्जित केली जाते,
प्रत्येक अॅडॅप्टरसाठी दर दहा सेकंदांत जास्तीत जास्त एकदा. चेतावणीमध्ये केवळ ड्रायव्हर,
ऑपरेशन वर्ग (`prepare`, `get`, `all`, `run`, `exec`, `pragma`, ट्रान्झॅक्शन किंवा देखभाल)
आणि लागलेले मिलिसेकंद असतात: SQL, बाइंडिंग्ज, रो, पाथ किंवा अपवाद मजकूर नसतो.

ही निदानासाठीची मदत आहे; टाइमआउट किंवा क्वेरी ऑप्टिमायझेशन नाही. जे ऑपरेशन कधीही
परत येत नाही त्याचा अहवाल ती देऊ शकत नाही, CPU कार्य आणि डिस्क प्रतीक्षा यांमध्ये फरक
करू शकत नाही, नेमके SQL ओळखू शकत नाही किंवा रॉ ड्रायव्हर हँडलद्वारे केलेली ऑपरेशन्स
पाहू शकत नाही. असिंक्रोनस बॅकअपचा कालावधी जाणीवपूर्वक वगळला आहे; इतर SQLite ड्रायव्हर्सवर
या स्वेच्छिक सुविधेद्वारे इन्स्ट्रुमेंटेशन केले जात नाही. व्हेरिएबल अक्षम केल्यावर टाइमिंग
रॅपर्सविना मूळ अॅडॅप्टर पुनर्स्थापित होतो. डेटाबेस स्कीमा किंवा संग्रहित कॉन्फिगरेशनमध्ये
कोणताही बदल होत नाही.

`/healthz` लॅग चेतावणी मागील नमुन्यापासूनची इव्हेंट-लूपची कमाल विलंबता दर्शवते,
संपूर्ण कालावधीची सरासरी नव्हे. अडथळ्याचे कारण SQLite किंवा डिस्क बिघाड असल्याचे
ठरवण्यापूर्वी तिच्या टाइमस्टॅम्प्सचा स्लो-ऑपरेशन चेतावण्या आणि होस्ट/स्टोरेज मेट्रिक्सशी
संबंध तपासा.

## संदर्भ

अंमलबजावणी:

- `bin/cli/runtime/magicBytes.mjs` — बायनरी मॅजिक-बाइट पडताळणीसाठी सहाय्यक
- `bin/cli/runtime/sqliteRuntime.mjs` — 5-टप्प्यांचा रनटाइम रिझॉल्व्हर + लेझी इंस्टॉलर
- `bin/cli/runtime/index.mjs` — स्टार्टअप ऑर्केस्ट्रेटर (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — npm पोस्ट-इन्स्टॉल हुक (अघातक वॉर्म-अप)
- `src/lib/db/core.ts` — `ensureDbInitialized()` / `getDriverInfo()` एक्सपोर्ट्स

## एकल-रायटर टोपोलॉजी (HA असमर्थित)

वरील ड्रायव्हर फॉलबॅक साखळी तरीही **एका प्रक्रियेत** चालते. डीफॉल्ट SQLite
OmniRoute हा **एकल रायटर** आहे:

- दोन OmniRoute प्रतिकृती एकाच `storage.sqlite` फाइलला जोडू नका.
- कंटेनर रीस्टार्ट, Recreate डिप्लॉय, OOM kill किंवा HEALTHCHECK रीस्टार्ट झाल्यास
  सुरू असलेली प्रत्येक SSE सेशन तुटते. स्टॉक मार्गावर सेशन ड्रेन उपलब्ध नाही.
- धीम्या `/healthz` ला बंद पडलेले मानणारी ऑर्केस्ट्रेटर लाइव्हनेस एकमेव
  प्रतिकृती बंद करेल. TCP लाइव्हनेस + HTTP `/healthz` रेडीनेसला प्राधान्य द्या. पहा
  [Docker मार्गदर्शक — उपलब्धता](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  आणि [Kubernetes प्रोब शिफारसी](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
