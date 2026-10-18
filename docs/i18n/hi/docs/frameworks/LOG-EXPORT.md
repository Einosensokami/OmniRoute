# Log export (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

OmniRoute कॉल लॉग्स का किसी बाहरी एनालिटिक्स स्टोर में निरंतर, वृद्धिशील निर्यात।

Logs डैशबोर्ड टैब अनुरोध इतिहास को SQLite (`call_logs`) में रखता है, जो रोटेशन और
रिटेंशन द्वारा सीमित होता है। लॉग निर्यात उसी रिकॉर्ड सेट को निर्धारित समय-सारणी पर बाहर भेजता है, ताकि वह
स्थानीय डेटाबेस से अधिक समय तक बना रह सके और अन्य डेटा के साथ जोड़ा जा सके। BigQuery पहला गंतव्य है;
पाइपलाइन एक रजिस्ट्री है, इसलिए और गंतव्य आसानी से जोड़े जा सकते हैं।

---

## 1. यह कैसे काम करता है

```
server (config को decrypt + validate करना, cursor का मिलान करना)
  → IPC शुरू करना → पृथक exportChild OS process
    → केवल-पढ़ने योग्य storage.sqlite → साझा call-log query/mapping
      → async artifact hydration → destination prepare()/send()
        → batch IPC → server cursor को persist करता है → ack IPC
          → अगला batch; done IPC → server सफलता दर्ज करता है
```

- **शेड्यूल** — एक `JobRegistry` cron job, `log_export`, जिसका डिफ़ॉल्ट `0 * * * *` (हर घंटे,
  UTC) है। यह `src/lib/initCloudSync.ts` में पंजीकृत है; इसे `OMNIROUTE_LOG_EXPORT_CRON` से
  बदला जा सकता है। प्रत्येक tick हर **सक्षम** destination को क्रमिक रूप से खाली करता है।
- **कर्सर** — SQLite का अंतर्निहित `call_logs.rowid`, जो प्रत्येक destination के लिए
  `log_export_destinations.cursor_row_id` में persist होता है। `timestamp` को जानबूझकर cursor
  नहीं बनाया गया है: callers अपना स्वयं का मान दे सकते हैं, इसलिए एक धीमा request बाद में
  शुरू हुए किसी तेज़ request के बाद लिखा जा सकता है, और timestamp cursor उसे छोड़ देगा।
- **बैचिंग** — प्रत्येक request में `batch_size` rows (डिफ़ॉल्ट 500), प्रत्येक run में
  `max_rows_per_run` rows (डिफ़ॉल्ट 10000), ताकि बड़ा backlog एक run को अवरुद्ध करने के बजाय
  कई ticks में खाली हो।
- **डिलीवरी** — cursor केवल `send()` के resolve होने के बाद आगे बढ़ता है। विफल batch cursor
  को उसी स्थान पर छोड़ देता है, इसलिए अगली run में उन्हीं rows का पुनः प्रयास होता है। गारंटी
  कम-से-कम-एक-बार डिलीवरी और destination-side de-duplication की है, वास्तविक exactly-once की
  नहीं: BigQuery प्रत्येक row को call-log id से key करता है, जिसका वह अपनी dedup window के
  भीतर best-effort आधार पर पालन करता है।
- **ओवरलैप सुरक्षा** — cron tick और `POST .../run` एक साथ सक्रिय हो सकते हैं। जो destination
  पहले से खाली किया जा रहा है, उसे दो बार खाली करने के बजाय छोड़ दिया जाता है (run result में
  `skipped: true`), इसलिए concurrent run किसी batch को दोबारा नहीं भेज सकता या cursor को पीछे
  नहीं लिख सकता।
- **पर्ज रिकवरी** — यदि `cursor_row_id`, `MAX(rowid)` से ऊपर पहुँच जाता है (पूरी table purge
  हो गई और rowids फिर से शुरू हुए), तो runner स्थायी रूप से निष्क्रिय होने के बजाय 0 पर वापस
  चला जाता है।

### पृथक runner और सीमाएँ

Node पर प्रत्येक destination run एक अलग, अल्पकालिक OS child process (`child_process`
के साथ IPC, `worker_threads` नहीं) शुरू करता है। Body reads, payload JSON parsing/serialization,
destination `prepare()` और destination network I/O—ये सभी server के event loop पर नहीं, वहीं
चलते हैं। IPC से केवल configuration और छोटे progress messages गुजरते हैं; export किए गए records
कभी server पर वापस नहीं आते। cron job और Run now route समान public result और overlap guard
बनाए रखते हैं।

Child, `node:sqlite` का उपयोग करके server के resolved `DATA_DIR/storage.sqlite` को केवल-पढ़ने
योग्य mode में खोलता है, जिसमें `busy_timeout=5000` और `query_only=ON` होते हैं। यह किसी DB
singleton को import नहीं करता और कोई migrations, backups या SQLite updates नहीं करता।
अनुपलब्ध/भ्रष्ट artifact bookkeeping (जिसमें corrupt-artifact UPDATE शामिल है) केवल dashboard
detail path में रहती है। दोनों paths एक शुद्ध detail resolver साझा करते हैं; export asynchronous
filesystem reads और वही artifact → legacy inline → legacy disk → none resolution order उपयोग
करता है। जब child अपना reader खोलता है, तब run अधिकतम insertion rowid का snapshot लेता है;
बाद के inserts अगली run की प्रतीक्षा करते हैं। यह insertion boundary है, कोई दीर्घकालिक SQLite
transaction नहीं: network waits के दौरान WAL writers और checkpoints निर्बाध रहते हैं। मौजूदा
rows के updates/deletions इस boundary द्वारा freeze नहीं किए जाते।

प्रत्येक स्वीकृत batch के बाद child acknowledgement की प्रतीक्षा करता है। Server पहले
`advanceLogExportCursor` के साथ cursor को persist करता है, फिर `ack` भेजता है; उससे पहले कोई
अगला batch शुरू नहीं होता। send failure, crash या timeout उस batch को आगे बढ़ाए बिना failure
दर्ज करता है। पहले acknowledge किए गए batches committed रहते हैं; अधिकतम केवल एक
unacknowledged batch दोबारा भेजा जा सकता है। सफलता केवल `done` और clean child exit के बाद
दर्ज होती है। Failures child को SIGTERM से terminate करते हैं, 500 ms के बाद SIGKILL तक
escalate करते हैं, और runner process closure की प्रतीक्षा करता है।

| Environment variable                          | डिफ़ॉल्ट | उद्देश्य                          |
| --------------------------------------------- | -------- | --------------------------------- |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000   | प्रति-destination wall-clock सीमा |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024     | MB में child V8 old-space सीमा    |

अमान्य/non-positive/non-integer मानों के लिए defaults उपयोग किए जाते हैं। Heap setting कुल
RSS सीमा नहीं है; बहुत बड़े batches अभी भी child memory समाप्त कर सकते हैं और run सुरक्षित
रूप से विफल हो सकती है। 1024 MB का default, bodies सक्षम होने पर 512 KiB artifacts वाले
default 500-row batch के लिए पर्याप्त अतिरिक्त स्थान छोड़ता है, जिसमें BigQuery का
byte-chunked JSON serialization भी शामिल है। यह 10000-row bodies batch को सुरक्षित नहीं
बनाता। V8 heap exhaustion एक कार्रवाई योग्य failure दर्ज करता है: batch size कम करें या
`OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` बढ़ाएँ; cursor अंतिम acknowledged batch पर बना
रहता है। ऐतिहासिक inline/disk bodies आधुनिक artifact cap के अंतर्गत नहीं आते। Operators को
RSS का budget अलग से निर्धारित करना होगा, विशेषकर memory-limited containers के भीतर।

Child केवल resolved `DATA_DIR`, `NODE_ENV`, स्पष्ट `TZ` (legacy filename local-time
resolution), मौजूद होने पर `ELECTRON_RUN_AS_NODE`, और निम्न outbound inputs inherit करता है:
`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (और उनके lowercase रूप),
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`।
एक global Undici dispatcher server के शुद्ध environment-proxy resolution और local-host
bypass rules साझा करता है, जिसमें `NO_PROXY` भी शामिल है; यह `proxyFetch.ts` या उसके DB/feature
flags को import नहीं करता। Proxy credentials को forwarded output और दर्ज errors से redact
किया जाता है। Destination credentials केवल एक start IPC message में जाते हैं, argv या
environment में कभी नहीं; output/error forwarding prefixed और sanitized होती है। प्रत्येक
cron run में Node की SQLite warning को दोहराने से बचने के लिए child exec arguments में केवल
`ExperimentalWarning` अक्षम की जाती है; अन्य warning types दिखाई देते रहते हैं।

गंतव्य मॉड्यूल Next.js/server-only निर्भरताओं के बिना आयात करने योग्य होने चाहिए। मौजूदा
BigQuery कार्यान्वयन पहले से ही इस अनुबंध को पूरा करता है। एक्सेस-टोकन कैश केवल चाइल्ड
रन की अवधि तक रहते हैं, अलग-अलग रन के बीच नहीं। Node समर्थित रनटाइम है (`package.json` engines), लेकिन README का Bun
इंस्टॉलेशन अनुभाग और `Dockerfile.bun`, `bun:sqlite` (`src/lib/db/core.ts` / adapters) का उपयोग करने वाला
प्रोडक्शन संगतता पथ भी उपलब्ध बताते हैं। इसलिए Bun के अंतर्गत, एक्सपोर्ट पिछले
इन-प्रोसेस पथ को बनाए रखते हैं और एक बार चेतावनी जारी करते हैं: चाइल्ड हीप/टाइमआउट आइसोलेशन उपलब्ध नहीं है।
इवेंट-लूप और OOM आइसोलेशन के लिए Node का उपयोग करें; यहाँ Bun को केवल डेवलपमेंट के लिए नहीं माना गया है।

जब `includeBodies` सक्षम हो, तो प्रति घंटे पेलोड बैकलॉग जमा करने के बजाय
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"` जैसी मिनट-स्तरीय आवृत्ति को प्राथमिकता दें।
बैच और पंक्ति सीमाएँ अब भी प्रत्येक रन को सीमित रखती हैं। प्रत्येक रन में प्रति गंतव्य प्रोसेस शुरू करने की लागत आती है;
यह कुल CPU उपयोग घटाने के लिए नहीं, बल्कि सर्वर इवेंट-लूप आइसोलेशन के लिए एक छोटी स्टार्टअप लागत का समझौता है।

### पेलोड (प्रॉम्प्ट और कम्प्लीशन)

डिफ़ॉल्ट रूप से एक्सपोर्ट में केवल वे सारांश फ़ील्ड होते हैं जिन्हें Logs की **सूची** दिखाती है।  
**प्रॉम्प्ट और प्रतिक्रियाएँ एक्सपोर्ट करें** (`includeBodies`) चालू करने पर प्रत्येक कॉल के लिए वह सामग्री भी भेजी जाती है
जिसे Logs का **विवरण** पेन दिखाता है:

| फ़ील्ड                           | इसमें क्या होता है                                            |
| -------------------------------- | ------------------------------------------------------------- |
| `request_body` / `response_body` | कॉल पेलोड, ठीक वैसे ही जैसे डैशबोर्ड उन्हें प्रस्तुत करता है  |
| `pipeline_route_decision`        | राउटर ने कौन-सा लक्ष्य और मॉडल चुना                           |
| `pipeline_client_request`        | ठीक वही रॉ अनुरोध जो क्लाइंट ने भेजा                          |
| `pipeline_openai_request`        | आंतरिक OpenAI स्वरूप में अनुवाद के बाद                        |
| `pipeline_provider_request`      | जैसा वास्तव में अपस्ट्रीम भेजा गया, प्रदाता की बोली में       |
| `pipeline_provider_response`     | रॉ अपस्ट्रीम प्रतिक्रिया                                      |
| `pipeline_client_response`       | कॉलर को जो वापस दिया गया                                      |
| `pipeline_error`                 | विफल कॉल के लिए पाइपलाइन-स्तरीय त्रुटि विवरण                  |
| `bodies_truncated`               | जब ऊपर का कोई फ़ील्ड `maxBodyBytes` सीमा तक पहुँच जाए तो True |

यह प्रॉम्प्ट सामग्री है, इसलिए यह **डिफ़ॉल्ट रूप से बंद** है और जानबूझकर प्रति-गंतव्य विकल्प है।
जो भेजा जाता है वही डैशबोर्ड दिखाता है, क्योंकि एक्सपोर्ट और `getCallLogById` एक ही विवरण
रिज़ॉल्यूशन साझा करते हैं: पेलोड लिखे जाते समय ही
PII-सैनिटाइज़ और सीक्रेट-रिडैक्ट किए जा चुके होते हैं, और `noLog` API कुंजी से की गई कॉल कोई पेलोड
संग्रहीत ही नहीं करती, इसलिए एक्सपोर्ट करने के लिए कुछ नहीं होता।

पेलोड फ़ाइल-सिस्टम आर्टिफ़ैक्ट से प्रति पंक्ति पढ़े जाते हैं, इसलिए हाइड्रेशन केवल उन्हीं गंतव्यों के लिए चलता है
जिन्होंने इसका अनुरोध किया है। कोई आर्टिफ़ैक्ट अनुपलब्ध या दूषित होने पर, बैच को विफल करने और कर्सर को
अटका देने के बजाय उसका सारांश null पेलोड के साथ एक्सपोर्ट किया जाता है।

`maxBodyBytes` (डिफ़ॉल्ट 262144) प्रत्येक फ़ील्ड की सीमा तय करता है। लंबे पेलोड **हटाए जाने के बजाय
छोटे किए जाते हैं** — काटा गया प्रॉम्प्ट फिर भी "क्या पूछा गया था" का उत्तर देता है — और पंक्ति को
`bodies_truncated` से चिह्नित किया जाता है। स्ट्रीम किए गए खंड-दर-खंड डेल्टा एक्सपोर्ट नहीं किए जाते; संयोजित प्रतिक्रिया
पहले से ही `pipeline_provider_response` और `pipeline_client_response` में होती है।

---

## 2. फ़ाइलें

| भाग                  | स्थान                                        |
| -------------------- | -------------------------------------------- |
| गंतव्य कॉन्ट्रैक्ट   | `src/lib/logExport/types.ts`                 |
| रजिस्ट्री            | `src/lib/logExport/registry.ts`              |
| सीक्रेट प्रबंधन      | `src/lib/logExport/secrets.ts`               |
| रनर (पैरेंट IPC)     | `src/lib/logExport/runner.ts`                |
| प्रोसेस जीवनचक्र     | `src/lib/logExport/childRunner.ts`           |
| चाइल्ड एंट्री        | `src/lib/logExport/exportChild.ts`           |
| केवल-पठन ओपनर        | `src/lib/db/logExportReadOnly.ts`            |
| साझा क्वेरी/मैपिंग   | `src/lib/usage/callLogExportQueries.ts`      |
| विवरण रिज़ॉल्वर      | `src/lib/usage/callLogDetailResolver.ts`     |
| API प्रोजेक्शन       | `src/lib/logExport/presenter.ts`             |
| BigQuery गंतव्य      | `src/lib/logExport/destinations/bigquery.ts` |
| Google SA प्रमाणीकरण | `src/lib/logExport/googleServiceAccount.ts`  |
| कॉल-लॉग स्रोत        | `src/lib/usage/callLogExportSource.ts`       |
| स्थायित्व            | `src/lib/db/logExportDestinations.ts`        |
| Cron जॉब             | `src/lib/jobs/logExportJob.ts`               |
| REST परत             | `src/app/api/log-export/`                    |
| डैशबोर्ड पृष्ठ       | `src/app/(dashboard)/dashboard/log-export/`  |

स्कीमा: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

सभी रूट प्रबंधन-प्रमाणीकृत (`requireManagementAuth`) हैं। सीक्रेट कभी लौटाए नहीं जाते:
संग्रहीत सीक्रेट शाब्दिक मान `__stored__` के रूप में वापस आता है, और अपडेट में वही मान वापस
भेजने पर संग्रहीत क्रेडेंशियल यथावत रहता है।

ऐसा गंतव्य बनाना या अपडेट करना, जिसका प्रकार किसी सीक्रेट को घोषित करता है, **`STORAGE_ENCRYPTION_KEY`
की आवश्यकता रखता है**। इसके बिना `encrypt()` बिना किसी सूचना के पासथ्रू करता है, इसलिए क्रेडेंशियल
को SQLite में प्लेनटेक्स्ट के रूप में डालने के बजाय लेखन को 400 के साथ अस्वीकार किया जाता है
(वही सुरक्षा-जाँच जिसे Telegram वेबहुक लागू करता है)।

| विधि     | पथ                                       | उद्देश्य                                          |
| -------- | ---------------------------------------- | ------------------------------------------------- |
| `GET`    | `/api/log-export/types`                  | गंतव्य प्रकार + उनकी कॉन्फ़िग फ़ील्ड सूची         |
| `GET`    | `/api/log-export/destinations`           | गंतव्यों की सूची (सीक्रेट संशोधित)                |
| `POST`   | `/api/log-export/destinations`           | गंतव्य बनाएँ                                      |
| `GET`    | `/api/log-export/destinations/{id}`      | एक गंतव्य पढ़ें                                   |
| `PUT`    | `/api/log-export/destinations/{id}`      | नाम / सक्षम स्थिति / कॉन्फ़िग / बैचिंग अपडेट करें |
| `DELETE` | `/api/log-export/destinations/{id}`      | हटाएँ                                             |
| `POST`   | `/api/log-export/destinations/{id}/test` | क्रेडेंशियल जाँचें, कुछ भी न लिखें                |
| `POST`   | `/api/log-export/destinations/{id}/run`  | अभी ड्रेन करें, शेड्यूल किए गए रन वाला ही पथ      |
| `GET`    | `/api/log-export/status`                 | Cron स्थिति, हाल के रन, प्रत्येक लक्ष्य का बैकलॉग |

`GET /api/log-export/types` ही UI को जेनेरिक बनाता है: डैशबोर्ड फ़ॉर्म लौटाए गए फ़ील्ड
डिस्क्रिप्टर से रेंडर होता है, इसलिए नए गंतव्य के लिए UI में कोई बदलाव आवश्यक नहीं है।

---

## 4. BigQuery गंतव्य

कॉन्फ़िग कुंजियाँ (`type: "bigquery"`):

| कुंजी                | टिप्पणियाँ                                                                  |
| -------------------- | --------------------------------------------------------------------------- |
| `projectId`          | डेटासेट रखने वाला GCP प्रोजेक्ट                                             |
| `datasetId`          | `[A-Za-z0-9_]+`                                                             |
| `tableId`            | `[A-Za-z0-9_]+`                                                             |
| `location`           | केवल तब उपयोग होता है जब डेटासेट बनाना हो (डिफ़ॉल्ट `EU`)                   |
| `serviceAccountJson` | सर्विस-अकाउंट कुंजी। सीक्रेट: संग्रहण में एन्क्रिप्टेड, कभी लौटाई नहीं जाती |
| `autoCreate`         | पहले एक्सपोर्ट पर डेटासेट और टेबल बनाएँ (डिफ़ॉल्ट `true`)                   |

सर्विस अकाउंट को लक्ष्य टेबल पर `bigquery.tables.updateData` की आवश्यकता होती है, और
`autoCreate` चालू होने पर `bigquery.datasets.create` / `bigquery.tables.create` की भी।

कॉन्फ़िगर किया गया बैच एक **कर्सर** इकाई है, HTTP इकाई नहीं: `send()` इसे अधिकतम 500 पंक्तियों
वाली insertAll कॉल में विभाजित करता है, इसलिए बड़ा `batch_size` BigQuery की 10 MB अनुरोध सीमा
को पार नहीं कर सकता। अस्थायी स्थितियों (408/429/500/502/503/504) पर समान insertIds का
पुनः उपयोग करते हुए, एक्सपोनेंशियल बैकऑफ़ के साथ अधिकतम तीन बार पुनः प्रयास किया जाता है;
प्रमाणीकरण और स्कीमा विफलताएँ रन को व्यर्थ करने के बजाय पहले ही प्रयास में थ्रो करती हैं।

कुछ ही क्षण पहले बनाई गई टेबल अभी स्ट्रीमिंग एंडपॉइंट को दिखाई नहीं देती, जो कुछ सेकंड तक
404 लौटाता है। उस 404 पर पुनः प्रयास किया जाता है, लेकिन **केवल तभी जब इस रन ने टेबल बनाई हो** —
वास्तव में अनुपस्थित टेबल फिर भी तुरंत विफल होती है। ध्यान दें कि हाल ही में हटाई गई टेबल के
नाम से ही टेबल को दोबारा बनाने पर BigQuery कई मिनट तक स्ट्रीमिंग इंसर्ट अस्वीकार करता है;
यह हटाने-फिर-दोबारा-बनाने की विशेषता है, इसलिए किसी टेबल को हटाकर दोबारा जोड़ने के बजाय नया
टेबल नाम उपयोग करें।

**आंशिक विफलता HTTP 200 के रूप में, गैर-रिक्त `insertErrors[]` के साथ आती है।** इसे विफलता
माना जाता है और यह थ्रो करती है, जिससे कर्सर उन पंक्तियों से आगे नहीं बढ़ता जिन्हें BigQuery
ने कभी स्वीकार नहीं किया; `tests/unit/log-export-bigquery.test.ts` इस व्यवहार को सुनिश्चित
करता है।

ट्रांसपोर्ट सामान्य REST है — स्वयं-हस्ताक्षरित RS256 अभिकथन को
`https://oauth2.googleapis.com/token` पर एक्सेस टोकन के लिए एक्सचेंज किया जाता है, फिर पंक्तियाँ
`tabledata.insertAll` पर जाती हैं। कोई Google SDK शामिल नहीं किया गया है। एक्सेस टोकन प्रत्येक
(सर्विस अकाउंट, स्कोप) के लिए प्रोसेस के भीतर कैश किए जाते हैं।

बनाई गई टेबल में Logs-टैब के प्रत्येक फ़ील्ड के लिए एक कॉलम और `exported_at` होता है, और इसका
लेआउट इस आधार पर तैयार किया गया है कि कॉल लॉग वास्तव में कैसे क्वेरी किए जाते हैं:

- **`timestamp` पर दिन के अनुसार पार्टिशन किया गया**, इसलिए तारीख से सीमित क्वेरी केवल उन्हीं
  दिनों को स्कैन करती है।
- **`api_key_name`, `provider`, `model`, `status` के अनुसार क्लस्टर किया गया** (इसी क्रम में),
  इसलिए इसे किसने चलाया, यह कहाँ गया, या यह विफल हुआ या नहीं—इनके आधार पर फ़िल्टर करने पर
  प्रत्येक पार्टिशन के भीतर ब्लॉक छँट जाते हैं। BigQuery अधिकतम चार क्लस्टरिंग कॉलम की अनुमति
  देता है और क्रम मायने रखता है: केवल `api_key_name` पर फ़िल्टर छँटाई करता है, केवल `status`
  पर फ़िल्टर ऐसा नहीं करता।
- **`partitionExpirationDays` के माध्यम से वैकल्पिक पार्टिशन अवधारण** (`0` सब कुछ रखता है),
  जिसे टेबल बनाए जाने पर लागू किया जाता है।

दोनों सेटिंग्स निर्माण के समय लागू होती हैं। कोई मौजूदा टेबल अपना वर्तमान लेआउट बनाए रखती है, इसलिए
यदि आप इन्हें अपनाना चाहते हैं, तो गंतव्य को किसी नए टेबल id पर इंगित करें।

`tests/unit/log-export-bigquery.test.ts` यह सुनिश्चित करता है कि मैपर और टेबल स्कीमा एक-दूसरे के साथ
तालमेल में रहें, ताकि किसी नए कॉल-लॉग कॉलम को निर्यात के दौरान चुपचाप हटाया न जा सके।

बैच को पंक्तियों की संख्या और क्रमबद्ध बाइट्स, **दोनों** के आधार पर खंडों में बाँटा जाता है। पेलोड निर्यात
होने पर केवल पंक्तियों की संख्या पर्याप्त नहीं होती: प्रॉम्प्ट वाली 500 पंक्तियाँ कई दसियों मेगाबाइट की हो सकती हैं, और insertAll
10 MB से अधिक के अनुरोध को अस्वीकार कर देता है। कोई खंड 500 पंक्तियों या 9 MB पर बंद हो जाता है, इनमें से जो भी पहले हो।

---

## 5. डेस्टिनेशन जोड़ना

1. `LogExportDestinationType` निर्यात करने वाली `src/lib/logExport/destinations/<name>.ts` फ़ाइल बनाएँ:
   UI के लिए एक Zod `configSchema`, एक `fields` डिस्क्रिप्टर ऐरे, `secretFields`, और
   `test()` / `prepare()` / `send(records)` लौटाने वाला `createClient(config)`।
2. इसे `src/lib/logExport/registry.ts` में `DESTINATIONS` ऐरे में जोड़ें।
3. `tests/unit/` के अंतर्गत टेस्ट लिखें।

बस इतना ही बदलाव करना है: परसिस्टेंस, cron जॉब, REST लेयर, सीक्रेट एन्क्रिप्शन और
डैशबोर्ड फ़ॉर्म—सभी रजिस्ट्री को पढ़ते हैं।

नए डेस्टिनेशन के लिए दो नियम:

- आंशिक विफलता पर `send()` को **अनिवार्य रूप से थ्रो करना चाहिए**। रिज़ॉल्व होने का अर्थ है, "डेस्टिनेशन में ये पंक्तियाँ मौजूद हैं",
  और कर्सर स्थायी रूप से उनसे आगे बढ़ जाता है।
- उपयोगकर्ता द्वारा दिया गया URL लेने वाले डेस्टिनेशन को फ़ेच करने से पहले
  `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`) के माध्यम से उसे वैलिडेट करना होगा,
  ठीक उसी तरह जैसे वेबहुक करते हैं। BigQuery को इसकी आवश्यकता नहीं है: इसके होस्ट स्थिर हैं।

---

## 6. इसे संचालित करना

- **डैशबोर्ड**: Integrations → Log export। कोई डेस्टिनेशन जोड़ें, पंक्तियाँ लिखे बिना क्रेडेंशियल जाँचने के लिए **Test** चलाएँ,
  फिर उसे सक्षम करें।
- **बैकलॉग**: प्रत्येक डेस्टिनेशन कार्ड लंबित पंक्तियाँ और कर्सर दिखाता है; `GET
/api/log-export/status` वही आँकड़े और अंतिम 20 जॉब रन लौटाता है।
- **किसी एक डेस्टिनेशन की विफलता से अन्य विफल नहीं होते** — रन सारांश `last_status` / `last_error` में प्रत्येक डेस्टिनेशन की
  स्थिति दर्ज करता है, और जॉब रन इतिहास समग्र परिणाम बनाए रखता है।
- **डेस्टिनेशन हटाने से उसका कर्सर भी हट जाता है।** उसे दोबारा जोड़ने पर प्रक्रिया सबसे पुराने उपलब्ध
  कॉल लॉग से शुरू होती है, जिससे वे पंक्तियाँ फिर से भेजी जाती हैं जो डेस्टिनेशन में पहले से मौजूद हो सकती हैं। BigQuery में प्रति-पंक्ति
  `insertId` इसे केवल BigQuery की अपनी डी-डुप्लिकेशन अवधि के भीतर ही संभालता है, इसलिए किसी डेस्टिनेशन को हटाने के बजाय
  उसे अक्षम करना बेहतर है।
