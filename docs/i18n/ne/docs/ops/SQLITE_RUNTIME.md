# SQLite Runtime Resolution (नेपाली)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute ले स्टार्टअपमा ५-चरणको फलब्याक शृङ्खलामार्फत आफ्नो SQLite ड्राइभर निर्धारण गर्छ:

1. **बन्डल गरिएको `better-sqlite3`** (`package.json` मा `dependencies` मार्फत)
   — सबैभन्दा छिटो, नेटिभ बाइनरी, बिल्ड उपकरणहरू उपलब्ध हुँदा `npm install` द्वारा स्थापना गरिन्छ।

2. **रनटाइममा स्थापना गरिएको `better-sqlite3`** (`~/.omniroute/runtime/` मा)
   — पहिलोपटक चलाउँदा आवश्यकतानुसार **वा** `scripts/build/postinstall.mjs → scripts/postinstall.mjs` द्वारा स्थापना गरिन्छ।
   बिग्रिएका वा गलत प्लेटफर्मका बाइनरीहरूबाट जोगिन लोड गर्नुअघि नेटिभ `.node` म्याजिक बाइटहरू (ELF / Mach-O / PE) प्रमाणीकरण गर्छ।

3. **`node:sqlite`** (Node ≥22.5 stdlib) — नेटिभ बिल्ड आवश्यक पर्दैन; दुवै better-sqlite3 मार्ग असफल हुँदा प्रयोग गरिन्छ। सीमित सुविधा सेट।

4. **`sql.js`** (WASM) — अन्तिम फलब्याक। सबैतिर काम गर्छ तर ढिलो हुन्छ
   र डेटा समकालीन रूपमा नभई निश्चित अन्तरालमा लेख्छ।

## यो जटिलता किन?

- **Windows EBUSY**: अघिल्लो संस्करणको `better_sqlite3.node` चलिरहेको प्रक्रियाद्वारा लक गरिएको छ भने `npm install -g omniroute@latest` असफल हुन सक्छ। `~/.omniroute/runtime/` मा गरिने रनटाइम स्थापनाले ग्लोबल npm क्यासलाई पन्छाउँछ।
- **बिल्ड उपकरणहरू छैनन्**: केही वातावरणहरूले (VS Build Tools नभएको कर्पोरेट Windows, न्यूनतम Docker इमेजहरू) `better-sqlite3` कम्पाइल गर्न सक्दैनन्। रनटाइम इन्स्टलरले npm रजिस्ट्रीबाट पूर्व-निर्मित बाइनरी प्राप्त गर्छ; त्यो असफल भए पनि फलब्याक ड्राइभरहरूले OmniRoute बुट हुन सक्ने सुनिश्चित गर्छन्।
- **एयर-ग्याप्ड प्रणालीहरू**: npm रजिस्ट्री पहुँचयोग्य नभएमा, `node:sqlite`
  वा `sql.js` ले आधारभूत कार्यक्षमताको प्रत्याभूति दिन्छन्।

## म्याजिक-बाइट प्रमाणीकरण

रनटाइममा स्थापना गरिएको `.node` फाइल लोड गर्नुअघि, OmniRoute ले सुरुका ८
बाइटहरू पढ्छ र तिनलाई ज्ञात प्लेटफर्म म्याजिकहरूसँग मिलाउँछ:

| प्लेटफर्म             | बाइटहरू (hex) | लेबल        |
| --------------------- | ------------- | ----------- |
| Linux                 | `7F 45 4C 46` | `elf`       |
| macOS 64-bit BE       | `FE ED FA CF` | `macho`     |
| macOS 64-bit LE       | `CF FA ED FE` | `macho-le`  |
| macOS fat (universal) | `CA FE BA BE` | `macho-fat` |
| Windows               | `4D 5A` (MZ)  | `pe`        |

म्याजिक नमिलेमा → फाइल बेवास्ता गरिन्छ, र फलब्याक अर्को चरणमा जारी रहन्छ।

## सक्रिय ड्राइभर जाँच गर्दै

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## म्यानुअल नियन्त्रण

```bash
# छिटो CI स्थापनाका लागि postinstall वार्म-अप छोड्नुहोस्
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# रनटाइम better-sqlite3 बलपूर्वक पुनः स्थापना गर्नुहोस्
rm -rf ~/.omniroute/runtime
omniroute  # अर्को स्टार्टमा पुनः स्थापना हुनेछ

# कुन ड्राइभर सक्रिय छ भनेर जाँच गर्नुहोस्
omniroute config db-info  # (यदि CLI कमाण्ड उपलब्ध छ भने)
```

## समकालीन अवरोधहरूको निदान

`better-sqlite3` सँग समकालीन एडाप्टर टाइमिङ सक्रिय गर्न स्टार्टअपअघि `OMNIROUTE_SQLITE_SLOW_MS=200` सेट गर्नुहोस्। पूर्वनिर्धारित रूपमा यो बन्द हुन्छ। कम्तीमा त्यति मिलिसेकेन्ड लिने सम्पन्न अपरेसनले प्रत्येक एडाप्टरका लागि प्रत्येक दस सेकेन्डमा बढीमा एकपटक `[SQLITE-SLOW]` चेतावनी उत्सर्जन गर्छ। चेतावनीमा ड्राइभर, अपरेसन वर्ग (`prepare`, `get`, `all`, `run`, `exec`, `pragma`, ट्रान्ज्याक्सन वा मर्मतसम्भार), र बितेका मिलिसेकेन्ड मात्र समावेश हुन्छन्: कुनै SQL, बाइन्डिङ, पङ्क्ति, पथ वा अपवाद पाठ समावेश हुँदैन।

यो निदान सहयोगी हो, टाइमआउट वा क्वेरी अनुकूलन होइन। यसले कहिल्यै नफर्किने अपरेसन रिपोर्ट गर्न, CPU कार्यलाई डिस्क प्रतीक्षाबाट छुट्याउन, ठ्याक्कै कुन SQL हो भनेर पहिचान गर्न, वा कच्चा ड्राइभर ह्यान्डलमार्फत गरिएका अपरेसनहरू अवलोकन गर्न सक्दैन। एसिन्क्रोनस ब्याकअप अवधि जानाजानी समावेश गरिएको छैन; अन्य SQLite ड्राइभरहरूमा यो वैकल्पिक इन्स्ट्रुमेन्टेसन लागू हुँदैन। भेरिएबल असक्षम गर्दा टाइमिङ र्यापरहरूबिनाको मूल एडाप्टर पुनर्स्थापित हुन्छ। डेटाबेस स्किमा वा भण्डारित कन्फिगरेसनमा कुनै परिवर्तन हुँदैन।

`/healthz` ल्याग चेतावनीले सम्पूर्ण अवधिको औसत नभई अघिल्लो नमुनापछिको इभेन्ट-लुप शिखर रिपोर्ट गर्छ। कुनै अवरोधलाई SQLite वा डिस्क विफलतासँग जोड्नुअघि यसको टाइमस्ट्याम्पहरूलाई ढिलो-अपरेसन चेतावनीहरू र होस्ट/भण्डारण मेट्रिक्ससँग सहसम्बन्धित गर्नुहोस्।

## सन्दर्भ

कार्यान्वयन:

- `bin/cli/runtime/magicBytes.mjs` — बाइनरी म्याजिक-बाइट प्रमाणीकरण सहायकहरू
- `bin/cli/runtime/sqliteRuntime.mjs` — ५-चरणको रनटाइम रिजोल्भर + आवश्यकतानुसार इन्स्टलर
- `bin/cli/runtime/index.mjs` — स्टार्टअप अर्केस्ट्रेटर (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — npm स्थापना-पश्चात् हुक (गैर-घातक वार्म-अप)
- `src/lib/db/core.ts` — `ensureDbInitialized()` / `getDriverInfo()` एक्सपोर्टहरू

## एकल-राइटर टोपोलोजी (HA असमर्थित)

माथिको ड्राइभर फलब्याक शृङ्खला अझै पनि **एउटा प्रक्रियामा** चल्छ। पूर्वनिर्धारित SQLite
OmniRoute **एकल राइटर** हो:

- एउटै `storage.sqlite` फाइलमा दुईवटा OmniRoute रेप्लिका नजोड्नुहोस्।
- कन्टेनर पुनःसुरु, Recreate डिप्लोय, OOM kill, वा HEALTHCHECK पुनःसुरुले
  प्रक्रियामा रहेका प्रत्येक SSE सत्रलाई विच्छेद गर्छ। मानक मार्गमा सत्र ड्रेन छैन।
- ढिलो `/healthz` लाई निष्क्रिय ठान्ने अर्केस्ट्रेटर लाइभनेसले एकमात्र
  रेप्लिकालाई समाप्त गर्नेछ। TCP लाइभनेस + HTTP `/healthz` रेडिनेसलाई प्राथमिकता दिनुहोस्। हेर्नुहोस्
  [Docker मार्गदर्शिका — उपलब्धता](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  र [Kubernetes प्रोब सिफारिसहरू](./MONITORING_GUIDE.md#kubernetes-probe-recommendations)।
