# Log export (اردو)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

OmniRoute کال لاگز کو مسلسل اور تدریجی طور پر ایک بیرونی اینالیٹکس اسٹور میں برآمد کرنا۔

Logs ڈیش بورڈ ٹیب درخواستوں کی تاریخ SQLite (`call_logs`) میں رکھتا ہے، جو
روٹیشن اور برقرار رکھنے کی پالیسی کے باعث محدود ہوتی ہے۔ لاگ ایکسپورٹ اسی ریکارڈ سیٹ کو ایک شیڈول کے مطابق باہر بھیجتا ہے تاکہ یہ
مقامی ڈیٹابیس سے زیادہ عرصے تک محفوظ رہ سکے اور اسے دوسرے ڈیٹا کے ساتھ جوڑا جا سکے۔ BigQuery پہلی منزل ہے؛
پائپ لائن ایک رجسٹری ہے، اس لیے مزید منزلیں اضافی طور پر شامل کی جا سکتی ہیں۔

---

## 1. یہ کیسے کام کرتا ہے

```
server (کنفیگریشن کو decrypt + validate کرنا، cursor میں مطابقت پیدا کرنا)
  → IPC شروع کریں → الگ تھلگ exportChild OS process
    → صرف پڑھنے کے لیے storage.sqlite → مشترکہ call-log query/mapping
      → غیر ہم وقت artifact hydration → destination prepare()/send()
        → batch IPC → server cursor محفوظ کرتا ہے → ack IPC
          → اگلا batch؛ done IPC → server کامیابی ریکارڈ کرتا ہے
```

- **شیڈول** — ایک `JobRegistry` cron job، `log_export`، جو بطور ڈیفالٹ `0 * * * *` (ہر گھنٹے،
  UTC) پر چلتا ہے۔ یہ `src/lib/initCloudSync.ts` میں رجسٹر ہے؛ اسے `OMNIROUTE_LOG_EXPORT_CRON`
  کے ذریعے اوور رائیڈ کیا جا سکتا ہے۔ ہر tick تمام **فعال** destinations کو باری باری مکمل طور پر پروسیس کرتا ہے۔
- **کرسر** — SQLite کا ضمنی `call_logs.rowid`، جو ہر destination کے لیے
  `log_export_destinations.cursor_row_id` میں محفوظ ہوتا ہے۔ دانستہ طور پر `timestamp` کو cursor
  نہیں بنایا گیا: callers اپنی قدر فراہم کر سکتے ہیں، اس لیے کوئی سست request بعد میں شروع ہونے
  والی تیز request کے بعد لکھی جا سکتی ہے، اور timestamp cursor اسے چھوڑ دے گا۔
- **بیچنگ** — ہر request میں `batch_size` rows (ڈیفالٹ 500)، اور ہر run میں
  `max_rows_per_run` rows (ڈیفالٹ 10000)، تاکہ بڑا backlog ایک ہی run کو بلاک کرنے کے بجائے
  متعدد ticks میں مکمل ہو۔
- **ترسیل** — cursor صرف `send()` کے resolve ہونے کے بعد آگے بڑھتا ہے۔ ناکام batch کی صورت میں
  cursor اپنی جگہ پر رہتا ہے، لہٰذا اگلے run میں انہی rows کی دوبارہ کوشش کی جاتی ہے۔ ضمانت
  حقیقی exactly-once کے بجائے at-least-once اور destination-side de-duplication کی ہے: BigQuery ہر
  row کی key، call-log id سے بناتا ہے، جس کا وہ اپنی dedup window کے اندر best-effort بنیاد پر احترام کرتا ہے۔
- **اوورلیپ سے تحفظ** — cron tick اور `POST .../run` ایک ساتھ متحرک ہو سکتے ہیں۔ جو destination
  پہلے ہی پروسیس ہو رہا ہو، اسے دوسری مرتبہ پروسیس کرنے کے بجائے چھوڑ دیا جاتا ہے (run result میں
  `skipped: true`)، تاکہ concurrent run کسی batch کو دوبارہ نہ بھیج سکے یا cursor کو پیچھے نہ لکھ سکے۔
- **Purge سے بازیابی** — اگر `cursor_row_id`، `MAX(rowid)` سے زیادہ ہو جائے (پوری table
  purge ہو چکی ہو اور rowids دوبارہ شروع ہوئے ہوں)، تو runner مستقل طور پر بے خبر رہنے کے بجائے واپس 0 پر آ جاتا ہے۔

### الگ تھلگ runner اور حدود

Node پر ہر destination run ایک الگ، مختصر مدت کا OS child process (`child_process`
بمع IPC، نہ کہ `worker_threads`) شروع کرتا ہے۔ Body reads، payload JSON parsing/serialization،
destination `prepare()` اور destination network I/O، سب server کے event loop کے بجائے وہاں چلتے ہیں۔
cron job اور Run now route وہی public result اور overlap guard برقرار رکھتے ہیں۔

child، server کی resolve کردہ `DATA_DIR/storage.sqlite` کو `node:sqlite` کے ذریعے صرف پڑھنے کے لیے
کھولتا ہے، جس میں `busy_timeout=5000` اور `query_only=ON` ہوتے ہیں۔ یہ کوئی DB singleton import
نہیں کرتا اور نہ migrations، backups یا SQLite updates انجام دیتا ہے۔ گم شدہ/خراب artifact کی
bookkeeping (بشمول corrupt-artifact UPDATE) صرف dashboard detail path میں رہتی ہے۔ دونوں paths
ایک خالص detail resolver کا اشتراک کرتے ہیں؛ export غیر ہم وقت filesystem reads اور وہی
artifact → legacy inline → legacy disk → none resolution ترتیب استعمال کرتا ہے۔ جب child اپنا
reader کھولتا ہے تو run زیادہ سے زیادہ insertion rowid کا snapshot لیتا ہے؛ بعد کی insertions
اگلے run کا انتظار کرتی ہیں۔ یہ insertion boundary ہے، طویل مدت کا SQLite transaction نہیں:
network waits کے دوران WAL writers اور checkpoints آزاد رہتے ہیں۔ موجودہ rows کی updates/deletions
اس boundary سے منجمد نہیں ہوتیں۔

ہر قبول شدہ batch کے بعد child acknowledgement کا انتظار کرتا ہے۔ server پہلے
`advanceLogExportCursor` کے ذریعے cursor محفوظ کرتا ہے، پھر `ack` بھیجتا ہے؛ اس سے پہلے کوئی
اگلا batch شروع نہیں ہوتا۔ send failure، crash یا timeout اس batch کو آگے بڑھائے بغیر failure
ریکارڈ کرتا ہے۔ پہلے acknowledge کیے گئے batches committed رہتے ہیں؛ زیادہ سے زیادہ صرف ایک
غیر acknowledge شدہ batch دوبارہ بھیجا جا سکتا ہے۔ کامیابی صرف `done` اور child کے صاف exit
کے بعد ریکارڈ ہوتی ہے۔ failures پر child کو SIGTERM سے terminate کیا جاتا ہے، 500 ms کے بعد
SIGKILL تک بڑھایا جاتا ہے، اور runner process کے بند ہونے کا انتظار کرتا ہے۔

| Environment variable                          | ڈیفالٹ | مقصد                                |
| --------------------------------------------- | ------ | ----------------------------------- |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000 | ہر destination کے لیے wall-clock حد |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024   | MB میں child V8 old-space حد        |

غیر درست/غیر مثبت/غیر صحیح عددی اقدار کے لیے ڈیفالٹس استعمال ہوتے ہیں۔ heap setting مجموعی
RSS حد نہیں ہے؛ بہت بڑے batches پھر بھی child memory ختم کر سکتے ہیں اور run محفوظ طریقے سے
ناکام ہو سکتا ہے۔ 1024 MB کا ڈیفالٹ، bodies فعال ہونے کے ساتھ 512 KiB artifacts کے ڈیفالٹ
500-row batch کے لیے اضافی گنجائش چھوڑتا ہے، جس میں BigQuery کی byte-chunked JSON serialization
بھی شامل ہے۔ یہ 10000-row bodies batch کو محفوظ نہیں بناتا۔ V8 heap exhaustion قابلِ عمل failure
ریکارڈ کرتا ہے: batch size کم کریں یا `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` بڑھائیں؛
cursor آخری acknowledge شدہ batch پر برقرار رہتا ہے۔ تاریخی inline/disk bodies جدید artifact
cap کے تحت نہیں آتیں۔ آپریٹرز کو خصوصاً memory-limited containers میں RSS کے لیے الگ بجٹ رکھنا چاہیے۔

child صرف resolve شدہ `DATA_DIR`، `NODE_ENV`، صریح `TZ` (legacy filename کی
local-time resolution)، موجود ہونے پر `ELECTRON_RUN_AS_NODE`، اور درج ذیل outbound inputs وراثت
میں لیتا ہے: `HTTP_PROXY`، `HTTPS_PROXY`، `ALL_PROXY`، `NO_PROXY` (اور ان کی lowercase صورتیں)،
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`، `NODE_EXTRA_CA_CERTS`، `SSL_CERT_FILE`، `SSL_CERT_DIR`۔
ایک global Undici dispatcher، server کی خالص environment-proxy resolution اور local-host bypass
rules، بشمول `NO_PROXY`، کا اشتراک کرتا ہے؛ یہ `proxyFetch.ts` یا اس کے DB/feature flags کو import
نہیں کرتا۔ Proxy credentials کو forwarded output اور ریکارڈ شدہ errors سے redact کر دیا جاتا ہے۔
Destination credentials صرف ایک start IPC message میں منتقل ہوتے ہیں، کبھی argv یا environment
میں نہیں؛ output/error forwarding کو prefix کیا جاتا ہے اور صاف کیا جاتا ہے۔ child exec arguments
میں صرف `ExperimentalWarning` کو disable کیا جاتا ہے تاکہ ہر cron run پر Node کی SQLite warning
دہرائی نہ جائے؛ دیگر warning types نظر آتی رہتی ہیں۔

منزل کے ماڈیولز کو Next.js/server-only انحصارات کے بغیر import کیے جانے کے قابل ہونا چاہیے۔ موجودہ
BigQuery نفاذ پہلے ہی اس معاہدے کو پورا کرتا ہے۔ Access-token caches صرف child
run تک برقرار رہتے ہیں، مختلف runs کے درمیان نہیں۔ Node معاونت یافتہ runtime ہے (`package.json` engines)، لیکن README کا Bun
تنصیب کا سیکشن اور `Dockerfile.bun` بھی `bun:sqlite` (`src/lib/db/core.ts` / adapters) استعمال کرتے ہوئے
production compatibility کا ایک راستہ پیش کرتے ہیں۔ لہٰذا Bun کے تحت exports سابقہ
in-process راستہ برقرار رکھتے ہیں اور ایک مرتبہ انتباہ جاری کرتے ہیں: child heap/timeout isolation دستیاب نہیں ہے۔ event-loop
اور OOM isolation کے لیے Node استعمال کریں؛ یہاں Bun کو صرف dev کے لیے مخصوص نہیں سمجھا جاتا۔

جب `includeBodies` فعال ہو، تو فی گھنٹہ payload backlog جمع کرنے کے بجائے منٹ کی سطح کی cadence کو ترجیح دیں، مثلاً
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"`۔
Batch اور row limits اب بھی ہر run کو محدود رکھتے ہیں۔ Process startup کی لاگت ہر منزل کے لیے، ہر run میں ادا ہوتی ہے؛
یہ معمولی startup لاگت کے بدلے server event-loop isolation فراہم کرتا ہے، نہ کہ مجموعی CPU استعمال میں کمی۔

### Payloads (prompts اور completions)

بطور ڈیفالٹ export میں صرف وہ summary fields شامل ہوتے ہیں جو Logs کی **list** دکھاتی ہے۔ **Export prompts and responses**
(`includeBodies`) کو فعال کرنے سے ہر call کے لیے وہ معلومات بھی بھیجی جاتی ہیں جو Logs کا **detail**
pane دکھاتا ہے:

| Field                            | اس میں کیا ہوتا ہے                                               |
| -------------------------------- | ---------------------------------------------------------------- |
| `request_body` / `response_body` | Call payloads، بالکل اسی طرح جیسے dashboard انہیں render کرتا ہے |
| `pipeline_route_decision`        | Router نے کون سا target اور model منتخب کیا                      |
| `pipeline_client_request`        | خام request، بالکل اسی طرح جیسے client نے اسے بھیجا              |
| `pipeline_openai_request`        | اندرونی OpenAI شکل میں ترجمے کے بعد                              |
| `pipeline_provider_request`      | جیسا حقیقتاً upstream بھیجا گیا، provider dialect میں            |
| `pipeline_provider_response`     | خام upstream response                                            |
| `pipeline_client_response`       | جو caller کو واپس دیا گیا                                        |
| `pipeline_error`                 | ناکام call کے لیے pipeline-level error کی تفصیل                  |
| `bodies_truncated`               | True جب اوپر دی گئی کوئی field `maxBodyBytes` کی حد تک پہنچ جائے |

یہ prompt content ہے، اس لیے یہ **بطور ڈیفالٹ بند** ہوتا ہے اور دانستہ طور پر ہر منزل کے لیے علیحدہ انتخاب ہے۔
جو کچھ بھیجا جاتا ہے وہی dashboard دکھاتا ہے، کیونکہ export اور `getCallLogById` ایک ہی detail
resolution استعمال کرتے ہیں: payloads کو لکھتے وقت ہی
PII سے پاک اور secrets سے redacted کر دیا جاتا ہے، اور `noLog` API key کے ساتھ کی گئی call کوئی payload محفوظ ہی نہیں کرتی،
لہٰذا export کرنے کے لیے کچھ موجود نہیں ہوتا۔

Payloads کو ہر row کے لیے filesystem artifact سے پڑھا جاتا ہے، اس لیے hydration صرف ان منزلوں کے لیے چلتی ہے
جنہوں نے اس کی درخواست کی ہو۔ کوئی غائب یا خراب artifact، batch کو ناکام کرنے اور cursor کو پھنسانے کے بجائے،
اپنی summary کو null payloads کے ساتھ export کرتا ہے۔

`maxBodyBytes` (ڈیفالٹ 262144) ہر field کو محدود کرتا ہے۔ طویل payloads کو **حذف کرنے کے بجائے truncate کیا جاتا ہے**
— ایک کٹا ہوا prompt پھر بھی اس سوال کا جواب دیتا ہے کہ "کیا پوچھا گیا تھا" — اور row کو
`bodies_truncated` کے ساتھ نشان زد کیا جاتا ہے۔ Chunk-by-chunk stream کیے گئے deltas export نہیں ہوتے؛ assembled response پہلے ہی
`pipeline_provider_response` اور `pipeline_client_response` میں موجود ہوتا ہے۔

---

## 2. فائلیں

| جزو                  | مقام                                         |
| -------------------- | -------------------------------------------- |
| منزل کا کنٹریکٹ      | `src/lib/logExport/types.ts`                 |
| رجسٹری               | `src/lib/logExport/registry.ts`              |
| رازوں کی ہینڈلنگ     | `src/lib/logExport/secrets.ts`               |
| رنر (پیرنٹ IPC)      | `src/lib/logExport/runner.ts`                |
| پراسیس لائف سائیکل   | `src/lib/logExport/childRunner.ts`           |
| چائلڈ انٹری          | `src/lib/logExport/exportChild.ts`           |
| صرف پڑھنے والا اوپنر | `src/lib/db/logExportReadOnly.ts`            |
| مشترکہ کوئری/میپنگ   | `src/lib/usage/callLogExportQueries.ts`      |
| تفصیل ریزالور        | `src/lib/usage/callLogDetailResolver.ts`     |
| API پروجیکشن         | `src/lib/logExport/presenter.ts`             |
| BigQuery منزل        | `src/lib/logExport/destinations/bigquery.ts` |
| Google SA تصدیق      | `src/lib/logExport/googleServiceAccount.ts`  |
| کال لاگ ماخذ         | `src/lib/usage/callLogExportSource.ts`       |
| مستقل ذخیرہ          | `src/lib/db/logExportDestinations.ts`        |
| Cron جاب             | `src/lib/jobs/logExportJob.ts`               |
| REST تہہ             | `src/app/api/log-export/`                    |
| ڈیش بورڈ صفحہ        | `src/app/(dashboard)/dashboard/log-export/`  |

اسکیما: `src/lib/db/migrations/170_log_export_destinations.sql`۔

---

## 3. REST API

تمام روٹس انتظامی توثیق (`requireManagementAuth`) کے تحت ہیں۔ راز کبھی واپس نہیں کیے جاتے:
ذخیرہ شدہ راز لفظ بہ لفظ `__stored__` کی صورت میں واپس آتا ہے، اور اپ ڈیٹ کرتے وقت یہی قدر واپس بھیجنے سے
ذخیرہ شدہ اسناد برقرار رہتی ہیں۔

ایسی منزل بنانا یا اپ ڈیٹ کرنا جس کی قسم کسی راز کی وضاحت کرتی ہو، **`STORAGE_ENCRYPTION_KEY`
کا تقاضا کرتا ہے**۔ اس کے بغیر `encrypt()` خاموشی سے قدر کو جوں کا توں گزار دیتا ہے، اس لیے اسناد کو
سادہ متن میں SQLite میں رکھنے کے بجائے تحریری کارروائی 400 کے ساتھ مسترد کر دی جاتی ہے (یہی حفاظتی شرط
Telegram webhook بھی لاگو کرتا ہے)۔

| طریقہ    | راستہ                                    | مقصد                                               |
| -------- | ---------------------------------------- | -------------------------------------------------- |
| `GET`    | `/api/log-export/types`                  | منزل کی اقسام + ان کے کنفیگ فیلڈز کی فہرست         |
| `GET`    | `/api/log-export/destinations`           | منزلوں کی فہرست (راز مخفی کیے گئے)                 |
| `POST`   | `/api/log-export/destinations`           | ایک منزل بنائیں                                    |
| `GET`    | `/api/log-export/destinations/{id}`      | ایک منزل پڑھیں                                     |
| `PUT`    | `/api/log-export/destinations/{id}`      | نام / فعال حالت / کنفیگ / بیچنگ اپ ڈیٹ کریں        |
| `DELETE` | `/api/log-export/destinations/{id}`      | حذف کریں                                           |
| `POST`   | `/api/log-export/destinations/{id}/test` | اسناد کی جانچ کریں، کچھ تحریر نہ کریں              |
| `POST`   | `/api/log-export/destinations/{id}/run`  | ابھی مکمل اخراج کریں، وہی راستہ جو طے شدہ رن کا ہے |
| `GET`    | `/api/log-export/status`                 | Cron حالت، حالیہ رنز، ہر ہدف کا بیک لاگ            |

`GET /api/log-export/types` ہی UI کو عمومی بناتا ہے: ڈیش بورڈ فارم واپس کیے گئے
فیلڈ ڈسکرپٹرز سے رینڈر کیا جاتا ہے، اس لیے نئی منزل کے لیے UI میں کسی تبدیلی کی ضرورت نہیں۔

---

## 4. BigQuery منزل

کنفیگ کیز (`type: "bigquery"`):

| کلید                 | نوٹس                                                                    |
| -------------------- | ----------------------------------------------------------------------- |
| `projectId`          | وہ GCP پروجیکٹ جس میں ڈیٹاسیٹ موجود ہے                                  |
| `datasetId`          | `[A-Za-z0-9_]+`                                                         |
| `tableId`            | `[A-Za-z0-9_]+`                                                         |
| `location`           | صرف اس وقت استعمال ہوتا ہے جب ڈیٹاسیٹ بنانا ہو (ڈیفالٹ `EU`)            |
| `serviceAccountJson` | سروس اکاؤنٹ کلید۔ راز: ذخیرہ شدہ حالت میں مرموز، کبھی واپس نہیں کی جاتی |
| `autoCreate`         | پہلے ایکسپورٹ پر ڈیٹاسیٹ اور ٹیبل بنائیں (ڈیفالٹ `true`)                |

سروس اکاؤنٹ کو ہدف ٹیبل پر `bigquery.tables.updateData` کی ضرورت ہے، نیز
`autoCreate` فعال ہونے پر `bigquery.datasets.create` / `bigquery.tables.create` بھی درکار ہیں۔

کنفیگر کردہ بیچ ایک **کرسر** اکائی ہے، HTTP اکائی نہیں: `send()` اسے زیادہ سے زیادہ 500 قطاروں والی
insertAll کالز میں تقسیم کرتا ہے، اس لیے بڑا `batch_size` BigQuery کی 10 MB درخواست کی حد سے تجاوز
نہیں کر سکتا۔ عارضی اسٹیٹسز (408/429/500/502/503/504) کے لیے ایک ہی insertIds دوبارہ استعمال کرتے ہوئے،
ایکسپونینشل بیک آف کے ساتھ تین مرتبہ تک دوبارہ کوشش کی جاتی ہے؛ توثیق اور اسکیما کی ناکامیاں رن کو
ضائع کرنے کے بجائے پہلی ہی کوشش پر خطا دیتی ہیں۔

چند لمحے پہلے بنایا گیا ٹیبل ابھی اسٹریمنگ اینڈ پوائنٹ کو نظر نہیں آتا، جو چند سیکنڈ تک
404 کا جواب دیتا ہے۔ اس 404 پر دوبارہ کوشش کی جاتی ہے، لیکن **صرف اس وقت جب اسی رن نے ٹیبل بنایا ہو** —
حقیقتاً غیر موجود ٹیبل پھر بھی فوراً ناکام ہو جاتا ہے۔ یاد رکھیں کہ حال ہی میں حذف کیے گئے نام کے تحت
ٹیبل دوبارہ بنانے پر BigQuery کئی منٹ تک اسٹریمنگ inserts مسترد کرتا ہے؛ یہ حذف کرکے دوبارہ بنانے
کی خصوصیت ہے، اس لیے ٹیبل کو حذف کرکے دوبارہ شامل کرنے کے بجائے نیا ٹیبل نام استعمال کریں۔

**جزوی ناکامی HTTP 200 کے ساتھ غیر خالی `insertErrors[]` کی صورت میں آتی ہے۔** اسے ناکامی سمجھ کر
خطا دی جاتی ہے، اور یہی چیز کرسر کو ان قطاروں سے آگے بڑھنے سے روکتی ہے جنہیں BigQuery نے کبھی
قبول نہیں کیا؛ `tests/unit/log-export-bigquery.test.ts` اس رویے کو متعین کرتا ہے۔

ٹرانسپورٹ سادہ REST ہے — خود دستخط شدہ RS256 assertion کو
`https://oauth2.googleapis.com/token` پر access token کے بدلے تبدیل کیا جاتا ہے، پھر قطاریں
`tabledata.insertAll` کو بھیجی جاتی ہیں۔ کوئی Google SDK شامل نہیں کیا گیا۔ Access tokens کو
ہر (service account, scope) کے لیے دورانِ عمل کیش کیا جاتا ہے۔

بنائے گئے ٹیبل میں Logs ٹیب کے ہر فیلڈ کے لیے ایک کالم کے علاوہ `exported_at` بھی ہوتا ہے، اور اسے
اس طریقے کے مطابق ترتیب دیا جاتا ہے جس سے کال لاگز عملاً استفسار کیے جاتے ہیں:

- **`timestamp` پر روزانہ کی بنیاد پر تقسیم شدہ**، تاکہ تاریخ کی حد والی استفسار صرف انہی دنوں کو اسکین کرے۔
- **`api_key_name`، `provider`، `model`، `status` کے لحاظ سے کلسٹر شدہ** (اسی ترتیب میں)، تاکہ
  یہ فلٹر کرنا کہ اسے کس نے چلایا، یہ کہاں گیا، یا آیا یہ ناکام ہوا، ہر پارٹیشن کے اندر بلاکس کو محدود کرے۔ BigQuery
  زیادہ سے زیادہ چار کلسٹرنگ کالمز کی اجازت دیتا ہے اور ترتیب اہم ہے: صرف `api_key_name` پر فلٹر
  محدود کرتا ہے، جبکہ صرف `status` پر فلٹر ایسا نہیں کرتا۔
- **`partitionExpirationDays` کے ذریعے اختیاری پارٹیشن برقرار رکھنے کی مدت** (0 ہر چیز محفوظ رکھتا ہے)، جو
  ٹیبل بناتے وقت لاگو کی جاتی ہے۔

دونوں ترتیبات تخلیق کے وقت لاگو ہوتی ہیں۔ موجودہ ٹیبل اپنی موجودہ ترتیب برقرار رکھتا ہے، اس لیے
اگر آپ انہیں اپنانا چاہتے ہیں تو منزل کو کسی نئے ٹیبل id کی طرف اشارہ کریں۔

`tests/unit/log-export-bigquery.test.ts` یقینی بناتی ہے کہ میپر اور ٹیبل اسکیما مکمل ہم آہنگی میں
رہیں، تاکہ کسی نئے کال لاگ کالم کو برآمد کرتے وقت خاموشی سے حذف نہ کیا جا سکے۔

بیچز کو **دونوں**، قطاروں کی تعداد اور سیریلائز شدہ بائٹس، کی بنیاد پر حصوں میں تقسیم کیا جاتا ہے۔ پے لوڈز
برآمد ہونے کی صورت میں صرف قطاروں کی تعداد کافی نہیں ہوتی: پرامپٹس پر مشتمل 500 قطاریں دسیوں میگابائٹس
کی ہو سکتی ہیں، اور insertAll ایسی درخواست مسترد کر دیتا ہے جس کا حجم 10 MB سے زیادہ ہو۔ حصے 500
قطاروں یا 9 MB پر، ان میں سے جو حد پہلے آئے، مکمل کر دیے جاتے ہیں۔

---

## 5. منزل شامل کرنا

1. `src/lib/logExport/destinations/<name>.ts` بنائیں جو ایک `LogExportDestinationType` export کرے:
   ایک Zod `configSchema`، UI کے لیے ایک `fields` descriptor array، `secretFields`، اور ایک
   `createClient(config)` جو `test()` / `prepare()` / `send(records)` واپس کرے۔
2. اسے `src/lib/logExport/registry.ts` میں موجود `DESTINATIONS` array میں شامل کریں۔
3. `tests/unit/` کے تحت tests لکھیں۔

بس یہی مکمل تبدیلی ہے: persistence، cron job، REST layer، secret encryption، اور
dashboard form، سبھی registry کو پڑھتے ہیں۔

نئی منزل کے لیے دو اصول:

- جزوی ناکامی پر `send()` کو **لازماً throw کرنا چاہیے**۔ Resolve ہونے کا مطلب ہے کہ "منزل کے پاس یہ rows موجود ہیں"،
  اور cursor مستقل طور پر ان سے آگے بڑھ جاتا ہے۔
- صارف کا فراہم کردہ URL استعمال کرنے والی منزل کو fetch کرنے سے پہلے
  `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`) کے ذریعے اس کی توثیق کرنی چاہیے،
  بالکل اسی طرح جیسے webhooks کرتے ہیں۔ BigQuery کو اس کی ضرورت نہیں ہے: اس کے hosts مستقل ہیں۔

---

## 6. اسے چلانا

- **Dashboard**: Integrations → Log export۔ ایک منزل شامل کریں، rows لکھے بغیر credentials
  کی جانچ کے لیے **Test** چلائیں، پھر اسے فعال کریں۔
- **Backlog**: ہر منزل کا card زیرِ التوا rows اور cursor دکھاتا ہے؛ `GET
/api/log-export/status` یہی اعداد و شمار، نیز آخری 20 job runs واپس کرتا ہے۔
- **ایک ناکام منزل دوسری منزلوں کو ناکام نہیں کرتی** — run summary ہر منزل کی
  status کو `last_status` / `last_error` میں درج کرتا ہے، اور job run history مجموعی نتیجہ محفوظ رکھتی ہے۔
- **منزل حذف کرنے سے اس کا cursor بھی حذف ہو جاتا ہے۔** اسے دوبارہ شامل کرنے پر عمل قدیم ترین محفوظ شدہ
  call log سے شروع ہوتا ہے، جس سے وہ rows دوبارہ بھیجی جاتی ہیں جو ممکن ہے منزل کے پاس پہلے سے موجود ہوں۔ BigQuery میں ہر row کا
  `insertId` صرف BigQuery کی اپنی de-duplication window کے اندر ہی اسے سنبھالتا ہے، اس لیے
  منزل کو حذف کرنے کے بجائے اسے غیر فعال کرنے کو ترجیح دیں۔
