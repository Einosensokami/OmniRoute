# SQLite Runtime Resolution (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute स्टार्टअप पर 5-चरणीय फ़ॉलबैक शृंखला के माध्यम से अपने SQLite ड्राइवर को निर्धारित करता है:

1. **बंडल किया गया `better-sqlite3`** (`package.json` में `dependencies` के माध्यम से)
   — सबसे तेज़, नेटिव बाइनरी, बिल्ड टूल उपलब्ध होने पर `npm install` द्वारा इंस्टॉल किया जाता है।

2. **रनटाइम पर इंस्टॉल किया गया `better-sqlite3`** (`~/.omniroute/runtime/` में)
   — पहली बार चलाने पर आलस्यपूर्वक **या** `scripts/build/postinstall.mjs → scripts/postinstall.mjs` द्वारा इंस्टॉल किया जाता है।
   लोड करने से पहले नेटिव `.node` मैजिक बाइट्स (ELF / Mach-O / PE) को सत्यापित करता है,
   ताकि दूषित या गलत प्लेटफ़ॉर्म वाली बाइनरी से बचाव किया जा सके।

3. **`node:sqlite`** (Node ≥22.5 stdlib) — किसी नेटिव बिल्ड की आवश्यकता नहीं; दोनों
   better-sqlite3 पथ विफल होने पर उपयोग किया जाता है। सीमित फ़ीचर सेट।

4. **`sql.js`** (WASM) — अंतिम फ़ॉलबैक। हर जगह काम करता है, लेकिन धीमा है
   और डेटा को सिंक्रोनस रूप से लिखने के बजाय एक अंतराल पर लिखता है।

## यह जटिलता क्यों?

- **Windows EBUSY**: यदि पिछले संस्करण की `better_sqlite3.node` फ़ाइल किसी चल रही
  प्रक्रिया द्वारा लॉक है, तो `npm install -g omniroute@latest` विफल हो सकता है।
  `~/.omniroute/runtime/` में रनटाइम इंस्टॉल वैश्विक npm कैश को दरकिनार करता है।
- **बिल्ड टूल का अभाव**: कुछ परिवेश (`VS Build Tools` के बिना कॉर्पोरेट Windows,
  न्यूनतम Docker इमेज) `better-sqlite3` को कंपाइल नहीं कर सकते। रनटाइम
  इंस्टॉलर npm रजिस्ट्री से पहले से बिल्ड की गई बाइनरी निर्धारित करता है; फ़ॉलबैक
  ड्राइवर सुनिश्चित करते हैं कि इसके विफल होने पर भी OmniRoute शुरू हो सके।
- **एयर-गैप्ड सिस्टम**: यदि npm रजिस्ट्री तक पहुँचा नहीं जा सकता, तो `node:sqlite`
  या `sql.js` आधारभूत कार्यक्षमता सुनिश्चित करते हैं।

## मैजिक-बाइट सत्यापन

रनटाइम पर इंस्टॉल की गई `.node` फ़ाइल को लोड करने से पहले, OmniRoute उसके पहले 8
बाइट पढ़ता है और ज्ञात प्लेटफ़ॉर्म मैजिक से उनका मिलान करता है:

| प्लेटफ़ॉर्म            | बाइट्स (हेक्स) | लेबल        |
| ---------------------- | -------------- | ----------- |
| Linux                  | `7F 45 4C 46`  | `elf`       |
| macOS 64-बिट BE        | `FE ED FA CF`  | `macho`     |
| macOS 64-बिट LE        | `CF FA ED FE`  | `macho-le`  |
| macOS फ़ैट (यूनिवर्सल) | `CA FE BA BE`  | `macho-fat` |
| Windows                | `4D 5A` (MZ)   | `pe`        |

मैजिक मेल न खाने पर → फ़ाइल को अनदेखा कर दिया जाता है और फ़ॉलबैक अगले चरण पर जारी रहता है।

## सक्रिय ड्राइवर की जाँच करना

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## मैन्युअल नियंत्रण

```bash
# तेज़ CI इंस्टॉल के लिए postinstall वार्म-अप छोड़ें
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# रनटाइम better-sqlite3 को बलपूर्वक पुनः इंस्टॉल करें
rm -rf ~/.omniroute/runtime
omniroute  # अगली बार शुरू होने पर पुनः इंस्टॉल होगा

# जाँचें कि कौन-सा ड्राइवर सक्रिय है
omniroute config db-info  # (यदि CLI कमांड मौजूद हो)
```

## सिंक्रोनस अवरोधों का निदान

सिंक्रोनस अडैप्टर टाइमिंग को सक्षम करने के लिए, `better-sqlite3` के साथ स्टार्टअप से
पहले `OMNIROUTE_SQLITE_SLOW_MS=200` सेट करें। यह डिफ़ॉल्ट रूप से बंद रहता है। कम-से-कम
इतने मिलीसेकंड लेने वाला पूर्ण ऑपरेशन `[SQLITE-SLOW]` चेतावनी जारी करता है, प्रति
अडैप्टर हर दस सेकंड में अधिकतम एक बार। चेतावनी में केवल ड्राइवर, ऑपरेशन वर्ग
(`prepare`, `get`, `all`, `run`, `exec`, `pragma`, ट्रांज़ैक्शन या रखरखाव) और बीते हुए
मिलीसेकंड होते हैं: कोई SQL, बाइंडिंग, पंक्तियाँ, पथ या अपवाद टेक्स्ट नहीं।

यह निदान में सहायता करने वाला साधन है, टाइमआउट या क्वेरी ऑप्टिमाइज़ेशन नहीं। यह ऐसे
ऑपरेशन की रिपोर्ट नहीं कर सकता जो कभी वापस न आए, CPU कार्य और डिस्क प्रतीक्षा के
बीच अंतर नहीं कर सकता, सटीक SQL की पहचान नहीं कर सकता, या रॉ ड्राइवर हैंडल के
माध्यम से किए गए ऑपरेशन का अवलोकन नहीं कर सकता। एसिंक्रोनस बैकअप अवधि को जानबूझकर
इससे बाहर रखा गया है; अन्य SQLite ड्राइवरों पर यह वैकल्पिक इंस्ट्रूमेंटेशन लागू नहीं
होता। वेरिएबल को अक्षम करने पर टाइमिंग रैपर के बिना मूल अडैप्टर पुनर्स्थापित हो जाता
है। डेटाबेस स्कीमा या संग्रहित कॉन्फ़िगरेशन में कोई बदलाव नहीं होता।

`/healthz` लैग चेतावनी पिछले सैंपल के बाद से इवेंट-लूप के शिखर की रिपोर्ट करती है,
न कि पूरे जीवनकाल के औसत की। किसी अवरोध को SQLite या डिस्क विफलता से जोड़ने से पहले,
इसके टाइमस्टैम्प का धीमे ऑपरेशन की चेतावनियों और होस्ट/स्टोरेज मेट्रिक्स के साथ
सहसंबंध देखें।

## संदर्भ

कार्यान्वयन:

- `bin/cli/runtime/magicBytes.mjs` — बाइनरी मैजिक-बाइट सत्यापन सहायक
- `bin/cli/runtime/sqliteRuntime.mjs` — 5-चरणीय रनटाइम रिज़ॉल्वर + लेज़ी इंस्टॉलर
- `bin/cli/runtime/index.mjs` — स्टार्टअप ऑर्केस्ट्रेटर (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — npm पोस्ट-इंस्टॉल हुक (गैर-घातक वार्म-अप)
- `src/lib/db/core.ts` — `ensureDbInitialized()` / `getDriverInfo()` एक्सपोर्ट

## एकल-राइटर टोपोलॉजी (HA असमर्थित)

ऊपर दी गई ड्राइवर फ़ॉलबैक शृंखला अब भी **एक प्रक्रिया** में चलती है। डिफ़ॉल्ट SQLite
OmniRoute एक **एकल राइटर** है:

- दो OmniRoute रेप्लिका को एक ही `storage.sqlite` फ़ाइल से न जोड़ें।
- कंटेनर रीस्टार्ट, Recreate डिप्लॉय, OOM किल या HEALTHCHECK रीस्टार्ट प्रत्येक
  प्रगतिरत SSE सेशन को समाप्त कर देता है। स्टॉक पथ पर कोई सेशन ड्रेन नहीं होता।
- यदि ऑर्केस्ट्रेटर लाइवनेस धीमे `/healthz` को निष्क्रिय मानता है, तो वह एकमात्र
  रेप्लिका को समाप्त कर देगा। TCP लाइवनेस + HTTP `/healthz` रेडीनेस को प्राथमिकता दें। देखें
  [Docker गाइड — उपलब्धता](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  और [Kubernetes प्रोब अनुशंसाएँ](./MONITORING_GUIDE.md#kubernetes-probe-recommendations)।
