# Log export (አማርኛ)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

የOmniRoute ጥሪ ምዝግቦችን ወደ ውጫዊ የትንታኔ ማከማቻ በተከታታይ እና በየደረጃው መላክ።

የLogs ዳሽቦርድ ትር የጥያቄ ታሪክን በSQLite (`call_logs`) ውስጥ ያስቀምጣል፤ ይህም
በማዞር እና በማቆያ ፖሊሲ የተገደበ ነው። የምዝግብ መላክ ተመሳሳዩን የመዝገብ ስብስብ በጊዜ ሰሌዳ መሠረት
ወደ ውጭ ይልካል፤ በዚህም ከአካባቢያዊው የውሂብ ጎታ በላይ ለረጅም ጊዜ እንዲቆይ እና ከሌሎች ውሂቦች ጋር እንዲጣመር ያደርጋል። BigQuery የመጀመሪያው መድረሻ ነው፤
የማስኬጃ መስመሩ መዝገብ ቤት ስለሆነ፣ ተጨማሪ መድረሻዎችን መጨመር ይቻላል።

---

## 1. እንዴት እንደሚሠራ

```
server (ውቅርን መፍታት + ማረጋገጥ፣ cursorን ማስታረቅ)
  → IPCን ማስጀመር → የተነጠለ exportChild OS process
    → ለንባብ-ብቻ storage.sqlite → የጋራ call-log መጠይቅ/ማዛመድ
      → ያልተመሳሰለ artifact ማሟላት → የመዳረሻ prepare()/send()
        → የቡድን IPC → server cursorን ያስቀምጣል → የማረጋገጫ IPC
          → ቀጣዩ ቡድን፤ የማጠናቀቂያ IPC → server ስኬትን ይመዘግባል
```

- **መርሐግብር** — አንድ `JobRegistry` cron ሥራ፣ `log_export`፣ ነባሪው `0 * * * *` (በየሰዓቱ፣
  UTC) ነው። በ`src/lib/initCloudSync.ts` ውስጥ ተመዝግቧል፤ በ`OMNIROUTE_LOG_EXPORT_CRON`
  ሊቀየር ይችላል። እያንዳንዱ tick ሁሉንም **የነቁ** መዳረሻዎች በቅደም ተከተል ያጠናቅቃል።
- **Cursor** — የSQLite ስውር `call_logs.rowid`፣ ለእያንዳንዱ መዳረሻ በ
  `log_export_destinations.cursor_row_id` ውስጥ ይቀመጣል። `timestamp` ሆን ተብሎ cursor አልተደረገም፦ ጥሪ አድራጊዎች
  የራሳቸውን እሴት ሊያቀርቡ ስለሚችሉ፣ ዘገምተኛ ጥያቄ በኋላ ከተጀመረ ፈጣን ጥያቄ በኋላ
  ሊጻፍ ይችላል፤ የtimestamp cursor ደግሞ ይህን ይዘለዋል።
- **በቡድን ማከናወን** — በአንድ ጥያቄ `batch_size` ረድፎች (ነባሪ 500)፣ በአንድ ሂደት
  `max_rows_per_run` ረድፎች (ነባሪ 10000)፤ በዚህም ትልቅ የተጠራቀመ ሥራ አንድን ሂደት ከማገድ ይልቅ በበርካታ ticks ይጠናቀቃል።
- **ማድረስ** — cursor የሚራመደው `send()` ከተፈጸመ በኋላ ብቻ ነው። ያልተሳካ ቡድን
  cursorን በነበረበት ይተወዋል፤ ስለዚህ ተመሳሳይ ረድፎች በሚቀጥለው ሂደት እንደገና ይሞከራሉ። ዋስትናው
  ቢያንስ-አንድ-ጊዜ ማድረስ እና በመዳረሻው በኩል የተባዙ መዝገቦችን ማስወገድ እንጂ እውነተኛ በትክክል-አንድ-ጊዜ አይደለም፦ BigQuery እያንዳንዱን
  ረድፍ በcall-log id ይለያል፣ ይህንንም በራሱ የተባዙ መዝገቦች ማስወገጃ ጊዜ መስኮት ውስጥ በሚቻለው መጠን ያከብራል።
- **የመደራረብ መከላከያ** — cron tick እና `POST .../run` በአንድ ጊዜ ሊነሱ ይችላሉ። አስቀድሞ
  እየተከናወነ ያለ መዳረሻ ሁለት ጊዜ ከማከናወን ይልቅ ይዘለላል (በሂደቱ ውጤት ውስጥ `skipped: true`)፤
  ስለዚህ በተመሳሳይ ጊዜ የሚካሄድ ሂደት አንድን ቡድን እንደገና ሊልክ ወይም cursorን ወደኋላ ሊጽፍ አይችልም።
- **ከማጥፋት ማገገም** — `cursor_row_id` ከ`MAX(rowid)` በላይ ከሆነ (ሙሉው table
  ተጠርጓል እና rowids እንደገና ጀምረዋል)፣ runner ለዘለቄታው ከማየት እንዳይታወር ወደ 0 ይመልሳል።

### የተነጠለ runner እና ገደቦች

በNode ላይ የእያንዳንዱ መዳረሻ ሂደት የተለየ፣ አጭር ዕድሜ ያለው OS child process (`child_process`
ከIPC ጋር፣ `worker_threads` ሳይሆን) ያስጀምራል። የbody ንባቦች፣ የpayload JSON መተንተን/ማዋቀር፣ የመዳረሻ
`prepare()` እና የመዳረሻ network I/O ሁሉም እዚያ ይሠራሉ፣ በserver event loop ላይ አይደለም።
በIPC የሚተላለፉት ውቅር እና አነስተኛ የሂደት መልዕክቶች ብቻ ናቸው፤ ወደ ውጭ የተላኩ መዝገቦች ወደ
server ፈጽሞ አይመለሱም። cron ሥራው እና Run now route ተመሳሳዩን ይፋዊ ውጤት እና የመደራረብ መከላከያ ይጠብቃሉ።

child የserverን የተፈታ `DATA_DIR/storage.sqlite` በ`node:sqlite` በመጠቀም ለንባብ-ብቻ ይከፍታል፣
`busy_timeout=5000` እና `query_only=ON` ተዋቅረው። ምንም DB singleton አያስገባም፣ እንዲሁም
ማንኛውንም migrations፣ backups ወይም SQLite updates አያከናውንም። የጠፋ/የተበላሸ artifact ክትትል (የ
ተበላሸ-artifact UPDATEን ጨምሮ) በdashboard detail path ውስጥ ብቻ ይቆያል። ሁለቱም paths ጎንዮሽ ውጤት የሌለውን
detail resolver ይጋራሉ፤ export ያልተመሳሰሉ filesystem readsን እና ተመሳሳዩን artifact → legacy
inline → legacy disk → none የመፍታት ቅደም ተከተል ይጠቀማል። child readerን ሲከፍት አንድ ሂደት ከፍተኛውን የማስገቢያ rowid
ቅጽበታዊ ቅጂ ይይዛል፤ በኋላ የሚገቡ መዝገቦች እስከሚቀጥለው ሂደት ይጠብቃሉ። ይህ የማስገቢያ
ወሰን እንጂ ለረጅም ጊዜ የሚቆይ SQLite transaction አይደለም፦ WAL writers እና checkpoints በ
network ጥበቃዎች ጊዜ ነፃ ሆነው ይቆያሉ። ያሉ ረድፎች ማዘመን/ማጥፋት በዚህ ወሰን አይታገድም።

ከእያንዳንዱ ተቀባይነት ያገኘ ቡድን በኋላ child ማረጋገጫ ይጠብቃል። server መጀመሪያ
cursorን በ`advanceLogExportCursor` ያስቀምጣል፣ ከዚያም `ack` ይልካል፤ ከዚያ በፊት ቀጣይ ቡድን አይጀምርም።
የመላክ ውድቀት፣ crash ወይም timeout የዚያን ቡድን cursor ሳያራምድ ውድቀትን ይመዘግባል። ቀደም ሲል
የተረጋገጡ ቡድኖች እንደተመዘገቡ ይቆያሉ፤ ቢበዛ ማረጋገጫ ያላገኘው አንድ ቡድን እንደገና ሊላክ ይችላል።
ስኬት የሚመዘገበው ከ`done` እና ንጹሕ የchild exit በኋላ ብቻ ነው። ውድቀቶች childን
በSIGTERM ያቋርጣሉ፣ ከ500 ms በኋላ ወደ SIGKILL ያሳድጋሉ፣ እና runner የprocess መዘጋትን ይጠብቃል።

| የአካባቢ ተለዋዋጭ                                   | ነባሪ    | ዓላማ                         |
| --------------------------------------------- | ------ | --------------------------- |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000 | የእያንዳንዱ መዳረሻ የግድግዳ-ሰዓት ገደብ  |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024   | የchild V8 old-space ገደብ በMB |

ልክ ያልሆኑ/አዎንታዊ ያልሆኑ/ኢንቲጀር ያልሆኑ እሴቶች ነባሪዎቹን ይጠቀማሉ። የheap ቅንብሩ አጠቃላይ
የRSS ገደብ አይደለም፤ በጣም ትልልቅ ቡድኖች አሁንም የchild memoryን ሊያሟጥጡ እና ሂደቱን በደህና ሊያሳኩት ይችላሉ።
የ1024 MB ነባሪ በርተው ያሉ bodiesን ጨምሮ፣ ከBigQuery byte-chunked JSON serialization ጋር፣
ለነባሪው የ500 ረድፎች ቡድን እና 512 KiB artifacts ተጨማሪ ቦታ ይተዋል። ይህ የ
10000 ረድፎች bodies ቡድንን ደህንነቱ የተጠበቀ አያደርገውም። የV8 heap መሟጠጥ ሊተገበር የሚችል መፍትሔ ያለውን ውድቀት ይመዘግባል፦ የቡድን
መጠንን ይቀንሱ ወይም `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB`ን ያሳድጉ፤ cursor በመጨረሻ
ማረጋገጫ ባገኘው ቡድን ላይ ይቆያል። ታሪካዊ inline/disk bodies በዘመናዊው artifact ገደብ አይሸፈኑም።
ኦፕሬተሮች RSSን በተናጠል በጀት ሊመድቡለት ይገባል፣ በተለይም memory የተገደበባቸው containers ውስጥ።

child የሚወርሰው የተፈታውን `DATA_DIR`፣ `NODE_ENV`፣ በግልጽ የተጠቀሰ `TZ` (የlegacy filename
local-time resolution)፣ ካለ `ELECTRON_RUN_AS_NODE`፣ እና የሚከተሉትን ወደ ውጭ የመውጫ ግብዓቶች ብቻ ነው፦
`HTTP_PROXY`፣ `HTTPS_PROXY`፣ `ALL_PROXY`፣ `NO_PROXY` (እና የእነሱ lowercase ቅጾች)፣
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`፣ `NODE_EXTRA_CA_CERTS`፣ `SSL_CERT_FILE`፣ `SSL_CERT_DIR`።
ዓለም አቀፍ Undici dispatcher የserverን ጎንዮሽ ውጤት የሌለው environment-proxy resolution እና local-host
bypass ደንቦችን፣ `NO_PROXY`ን ጨምሮ፣ ይጋራል፤ `proxyFetch.ts`ን ወይም የእሱን DB/feature flags አያስገባም።
የproxy ማረጋገጫ መረጃዎች ከሚተላለፉ ውጤቶች እና ከተመዘገቡ ስህተቶች ውስጥ ይደበቃሉ። የመዳረሻ ማረጋገጫ መረጃዎች
በአንድ የstart IPC መልዕክት ብቻ ይጓዛሉ፣ በargv ወይም environment በፍጹም አይተላለፉም፤ የoutput/error ማስተላለፍ
ቅድመ ቅጥያ ይኖረዋል እና ይጸዳል። በእያንዳንዱ cron ሂደት የNodeን SQLite ማስጠንቀቂያ እንዳይደገም በchild exec arguments ውስጥ የሚሰናከለው `ExperimentalWarning` ብቻ ነው፤
ሌሎች የማስጠንቀቂያ ዓይነቶች እንደሚታዩ ይቆያሉ።

የመድረሻ ሞጁሎች ያለ Next.js/በአገልጋይ-ብቻ የሚገኙ ጥገኝነቶች import ሊደረጉ የሚችሉ መሆን አለባቸው። አሁን ያለው
የBigQuery ትግበራ ይህን ውል ቀድሞውኑ ያሟላል። የመዳረሻ-token caches የሚቆዩት ለልጅ
ሂደቱ ብቻ እንጂ በተለያዩ ሂደቶች መካከል አይደለም። Node የሚደገፈው runtime (`package.json` engines) ነው፣ ነገር ግን በREADME ውስጥ ያለው የBun
መጫኛ ክፍል እና `Dockerfile.bun` እንዲሁም `bun:sqlite` (`src/lib/db/core.ts` / adapters)ን በመጠቀም
የproduction ተኳኋኝነት መንገድን ያስተዋውቃሉ። ስለዚህ በBun ስር፣ exports የቀድሞውን
የin-process መንገድ ይዘው ይቆያሉ እና የአንድ ጊዜ ማስጠንቀቂያ ያወጣሉ፦ የልጅ heap/timeout isolation አይገኝም። ለevent-loop እና OOM isolation
Nodeን ይጠቀሙ፤ Bun እዚህ ለdev-ብቻ ተብሎ አይታይም።

`includeBodies` ሲነቃ፣ የሰዓት የpayload ክምችት ከማከማቸት ይልቅ
እንደ `OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"` ያለ በደቂቃ ደረጃ የሚሠራ የጊዜ ሰሌዳ ይምረጡ።
የbatch እና የrow ገደቦች አሁንም እያንዳንዱን ሂደት ይገድባሉ። የprocess startup ወጪ በእያንዳንዱ ሂደት ለእያንዳንዱ መድረሻ ይከፈላል፤
ይህ አነስተኛ የstartup ወጪን ለserver event-loop isolation ይለውጣል እንጂ አጠቃላይ የCPU አጠቃቀምን አይቀንስም።

### Payloads (prompts እና completions)

በነባሪነት export የሚይዘው የLogs **ዝርዝር** የሚያሳያቸውን የማጠቃለያ መስኮች ብቻ ነው።
**Prompts እና responsesን export ማድረግ** (`includeBodies`)ን ማብራት በተጨማሪ የLogs **ዝርዝር መረጃ**
ፓነል ለእያንዳንዱ call የሚያሳየውን ይልካል፦

| መስክ                              | የሚይዘው                                       |
| -------------------------------- | ------------------------------------------- |
| `request_body` / `response_body` | dashboard እንደሚያቀርባቸው የcall payloads         |
| `pipeline_route_decision`        | router የመረጠው target እና model                |
| `pipeline_client_request`        | client በላከው ትክክለኛ መልክ ያለው raw request       |
| `pipeline_openai_request`        | ወደ ውስጣዊው OpenAI ቅርጽ ከተተረጎመ በኋላ              |
| `pipeline_provider_request`      | በprovider dialect ወደ upstream በትክክል እንደተላከው |
| `pipeline_provider_response`     | የraw upstream response                      |
| `pipeline_client_response`       | ወደ caller ተመልሶ የተሰጠው                        |
| `pipeline_error`                 | ላልተሳካ call የpipeline-ደረጃ የስህተት ዝርዝር         |
| `bodies_truncated`               | ከላይ ካሉት መስኮች አንዱ `maxBodyBytes` ሲደርስ True   |

ይህ የprompt ይዘት ነው፣ ስለዚህ **በነባሪነት የጠፋ** ነው እና ሆን ተብሎ ለእያንዳንዱ መድረሻ የሚደረግ ምርጫ ነው።
የሚላከው dashboard የሚያሳየው ነው፣ ምክንያቱም export እና `getCallLogById` ተመሳሳይ የዝርዝር መረጃ
resolution ይጋራሉ፦ payloads
ሲጻፉ አስቀድመው PII-sanitised እና secret-redacted ተደርገዋል፣ እንዲሁም
`noLog` API keyን በመጠቀም የተደረገ call ምንም payload አያከማችም፤ ስለዚህ export የሚደረግ ነገር የለም።

Payloads ከfilesystem artifact በእያንዳንዱ row ይነበባሉ፣ ስለዚህ hydration የሚሠራው
ለጠየቁት መድረሻዎች ብቻ ነው። የጠፋ ወይም የተበላሸ artifact batchን አስተጓጉሎ cursorን
ከማስቆም ይልቅ ማጠቃለያውን ከnull payloads ጋር export ያደርጋል።

`maxBodyBytes` (ነባሪው 262144) እያንዳንዱን መስክ ይገድባል። ረዘም ያሉ payloads **ከመጣል ይልቅ
ይቆረጣሉ** — የተቆረጠ prompt አሁንም "ምን ተጠይቆ ነበር" ለሚለው መልስ ይሰጣል — እና rowው
በ`bodies_truncated` ምልክት ይደረግበታል። ቁራጭ-በ-ቁራጭ የstream የተደረጉ deltas export አይደረጉም፤ የተገጣጠመው response
ቀድሞውኑ በ`pipeline_provider_response` እና `pipeline_client_response` ውስጥ ይገኛል።

---

## 2. ፋይሎች

| ክፍል             | መገኛ                                          |
| --------------- | -------------------------------------------- |
| መዳረሻ ውል         | `src/lib/logExport/types.ts`                 |
| መዝገብ            | `src/lib/logExport/registry.ts`              |
| የሚስጥር አያያዝ      | `src/lib/logExport/secrets.ts`               |
| አስኬጅ (ወላጅ IPC)  | `src/lib/logExport/runner.ts`                |
| የሂደት የሕይወት ዑደት  | `src/lib/logExport/childRunner.ts`           |
| የልጅ መግቢያ        | `src/lib/logExport/exportChild.ts`           |
| ለንባብ-ብቻ መክፈቻ    | `src/lib/db/logExportReadOnly.ts`            |
| የጋራ መጠይቅ/ማዛመድ   | `src/lib/usage/callLogExportQueries.ts`      |
| የዝርዝር መፍቻ       | `src/lib/usage/callLogDetailResolver.ts`     |
| የAPI ትንበያ       | `src/lib/logExport/presenter.ts`             |
| BigQuery መዳረሻ   | `src/lib/logExport/destinations/bigquery.ts` |
| Google SA ማረጋገጫ | `src/lib/logExport/googleServiceAccount.ts`  |
| የጥሪ-ምዝግብ ምንጭ    | `src/lib/usage/callLogExportSource.ts`       |
| ቋሚ ማከማቻ         | `src/lib/db/logExportDestinations.ts`        |
| Cron ተግባር       | `src/lib/jobs/logExportJob.ts`               |
| REST ንብርብር      | `src/app/api/log-export/`                    |
| የመቆጣጠሪያ ሰሌዳ ገጽ  | `src/app/(dashboard)/dashboard/log-export/`  |

የውሂብ መዋቅር፦ `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

ሁሉም መስመሮች በአስተዳደር ማረጋገጫ (`requireManagementAuth`) የተጠበቁ ናቸው። ሚስጥሮች ፈጽሞ አይመለሱም፦
የተከማቸ ሚስጥር እንደ ቃል በቃል `__stored__` ይመለሳል፤ በማዘመን ጊዜ ያንን እሴት መልሶ መላክ
የተከማቸውን ማረጋገጫ መረጃ እንዳለ ያቆየዋል።

ዓይነቱ ሚስጥር እንዳለው የሚገልጽ መድረሻን መፍጠር ወይም ማዘመን **`STORAGE_ENCRYPTION_KEY`
ያስፈልገዋል**። ያለዚህ `encrypt()` ምንም ሳይለውጥ በዝምታ ያሳልፋል፤ ስለዚህ የማረጋገጫ መረጃን
በSQLite ውስጥ እንደ ግልጽ ጽሑፍ ከማስቀመጥ ይልቅ ጽሑፉ በ400 ውድቅ ይደረጋል (ይህም የTelegram
webhook የሚተገብረው ተመሳሳይ መከላከያ ነው)።

| ዘዴ       | መንገድ                                     | ዓላማ                                               |
| -------- | ---------------------------------------- | ------------------------------------------------- |
| `GET`    | `/api/log-export/types`                  | የመድረሻ ዓይነቶች + የውቅር መስኮቻቸው ዝርዝር                    |
| `GET`    | `/api/log-export/destinations`           | መድረሻዎችን ይዘርዝሩ (ሚስጥሮች ተሸፍነዋል)                      |
| `POST`   | `/api/log-export/destinations`           | መድረሻ ይፍጠሩ                                         |
| `GET`    | `/api/log-export/destinations/{id}`      | አንዱን ያንብቡ                                         |
| `PUT`    | `/api/log-export/destinations/{id}`      | ስም / የነቃ ሁኔታ / ውቅር / በጥቅል ማስኬድን ያዘምኑ              |
| `DELETE` | `/api/log-export/destinations/{id}`      | ይሰርዙ                                              |
| `POST`   | `/api/log-export/destinations/{id}/test` | የማረጋገጫ መረጃን ይፈትሹ፣ ምንም አይጻፉ                        |
| `POST`   | `/api/log-export/destinations/{id}/run`  | አሁን ያስወግዱ፣ ከታቀደው አሂድ ጋር ተመሳሳይ መንገድ                |
| `GET`    | `/api/log-export/status`                 | የCron ሁኔታ፣ የቅርብ ጊዜ አሂዶች፣ በእያንዳንዱ ዒላማ ያልተከናወኑ ሥራዎች |

`GET /api/log-export/types` UIውን አጠቃላይ እንዲሆን የሚያደርገው ነው፦ የዳሽቦርድ ቅጹ
ከተመለሱት የመስክ ገላጮች ይሳላል፤ ስለዚህ አዲስ መድረሻ ምንም የUI ለውጥ አያስፈልገውም።

---

## 4. BigQuery መድረሻ

የውቅር ቁልፎች (`type: "bigquery"`)፦

| ቁልፍ                  | ማስታወሻዎች                                                   |
| -------------------- | --------------------------------------------------------- |
| `projectId`          | የውሂብ ስብስቡን የያዘው GCP ፕሮጀክት                                 |
| `datasetId`          | `[A-Za-z0-9_]+`                                           |
| `tableId`            | `[A-Za-z0-9_]+`                                           |
| `location`           | የውሂብ ስብስቡ መፈጠር ሲኖርበት ብቻ ጥቅም ላይ ይውላል (ነባሪ `EU`)            |
| `serviceAccountJson` | የአገልግሎት መለያ ቁልፍ። ሚስጥር፦ በማከማቻ ጊዜ የተመሰጠረ፣ ፈጽሞ የማይመለስ        |
| `autoCreate`         | በመጀመሪያው ወደ ውጭ መላክ ላይ የውሂብ ስብስቡንና ሰንጠረዡን ይፍጠሩ (ነባሪ `true`) |

የአገልግሎት መለያው በዒላማው ሰንጠረዥ ላይ `bigquery.tables.updateData`፣ በተጨማሪም
`autoCreate` ከነቃ `bigquery.datasets.create` / `bigquery.tables.create` ያስፈልገዋል።

የተዋቀረ ጥቅል የHTTP ሳይሆን የ**ጠቋሚ** አሃድ ነው፦ `send()` እስከ 500 ረድፎች ብቻ ወዳሏቸው
insertAll ጥሪዎች ይከፋፍለዋል፤ ስለዚህ ትልቅ `batch_size` የBigQueryን የ10 MB የጥያቄ ገደብ ሊያልፍ
አይችልም። ጊዜያዊ ሁኔታዎች (408/429/500/502/503/504) በኤክስፖነንሺያል መዘግየት እስከ ሦስት
ጊዜ ድረስ፣ ተመሳሳይ insertIdsን እንደገና በመጠቀም ይሞከራሉ፤ የማረጋገጫና የመርሐግብር ውድቀቶች
አሂዱን በከንቱ ከማባከን ይልቅ በመጀመሪያው ሙከራ ላይ ስህተት ይጥላሉ።

ከጥቂት ጊዜ በፊት የተፈጠረ ሰንጠረዥ ለዥረት መጨረሻ ነጥቡ ገና አይታይም፤ ስለዚህም ለጥቂት
ሰከንዶች 404 ይመልሳል። ያ 404 እንደገና ይሞከራል፣ ነገር ግን **ይህ አሂድ ሰንጠረዡን
ሲፈጥር ብቻ** ነው — በእርግጥ የሌለ ሰንጠረዥ ግን ወዲያውኑ ይወድቃል። በቅርቡ በተሰረዘ ስም ስር
ሰንጠረዥን እንደገና መፍጠር BigQuery ለብዙ ደቂቃዎች የዥረት ማስገባቶችን ውድቅ እንዲያደርግ
እንደሚያደርገው ያስተውሉ፤ ይህ የመሰረዝ-ከዚያም-እንደገና-የመፍጠር ባህሪ ስለሆነ፣ ሰንጠረዥን
ከማስወገድና እንደገና ከማከል ይልቅ አዲስ የሰንጠረዥ ስም መጠቀም ይመረጣል።

**ከፊል ውድቀት ባዶ ያልሆነ `insertErrors[]` ይዞ እንደ HTTP 200 ይመጣል።** ይህ እንደ
ውድቀት ተቆጥሮ ስህተት ይጥላል፤ ይህም BigQuery ካልተቀበላቸው ረድፎች አልፎ ጠቋሚው እንዳይራመድ
ያስቆመዋል፤ `tests/unit/log-export-bigquery.test.ts` ባህሪውን ያረጋግጣል።

መጓጓዣው ተራ REST ነው — በራስ የተፈረመ RS256 ማረጋገጫ በ
`https://oauth2.googleapis.com/token` የመዳረሻ ቶከን ለማግኘት ይለወጣል፣ ከዚያም ረድፎቹ ወደ
`tabledata.insertAll` ይሄዳሉ። ምንም Google SDK አይጨመርም። የመዳረሻ ቶከኖች በእያንዳንዱ
(የአገልግሎት መለያ፣ ወሰን) በሂደቱ ውስጥ በመሸጎጫ ይቀመጣሉ።

የተፈጠረው ሰንጠረዥ ለእያንዳንዱ የLogs ትር መስክ አንድ ዓምድ ከ`exported_at` ጋር ይይዛል፤
እንዲሁም የጥሪ ሎጎች በተግባር ለሚጠየቁበት መንገድ ተዘጋጅቷል፦

- **በ`timestamp` ላይ በቀን የተከፋፈለ**፣ ስለዚህ በቀን የተወሰነ ጥያቄ እነዚያን ቀናት ብቻ ይቃኛል።
- **በ`api_key_name`፣ `provider`፣ `model`፣ `status` የተከማቸ** (በዚያ ቅደም ተከተል)፣ ስለዚህ
  ማን እንዳስኬደው፣ ወዴት እንደሄደ ወይም እንደወደቀ መሰረት ማጣራት በእያንዳንዱ ክፍል ውስጥ
  ያሉ ጥቅሎችን ይቀንሳል። BigQuery ቢበዛ አራት የክላስተሪንግ ዓምዶችን ይፈቅዳል፣ እና ቅደም
  ተከተሉ አስፈላጊ ነው፦ በ`api_key_name` ብቻ ማጣራት ይቀንሳል፣ በ`status` ብቻ ማጣራት ግን
  አይቀንስም።
- በ`partitionExpirationDays` በኩል **አማራጭ የክፍል ማቆያ** (0 ሁሉንም ያቆያል)፣ ሰንጠረዡ
  ሲፈጠር ይተገበራል።

ሁለቱም ቅንብሮች በመፍጠር ጊዜ ተግባራዊ ይሆናሉ። ነባር ሰንጠረዥ ቀድሞውኑ ያለውን አቀማመጥ ይዞ ይቆያል፤ ስለዚህ
እነዚህን መተግበር ከፈለጉ መድረሻውን ወደ አዲስ የሰንጠረዥ id ያመልክቱ።

`tests/unit/log-export-bigquery.test.ts` ማፐሩና የሰንጠረዡ መርሐግብር በተመሳሳይ ሁኔታ
እንዲራመዱ ያረጋግጣል፤ በመሆኑም አዲስ የጥሪ ምዝግብ ዓምድ ወደ ውጭ በሚላክበት ሂደት ያለማስጠንቀቂያ ሊተው አይችልም።

ባቾች በ**ሁለቱም** የረድፍ ብዛትና ተከታታይ ተደርገው በተቀመጡ ባይቶች መጠን ይከፋፈላሉ። የውሂብ ጭነቶች ወደ ውጭ መላክ ከጀመሩ በኋላ የረድፍ ብዛት ብቻ በቂ አይደለም፤ መጠየቂያዎችን የያዙ 500 ረድፎች በአስር ሜጋባይቶች ሊለኩ ይችላሉ፣ እና insertAll
ከ10 MB በላይ የሆነ ጥያቄን አይቀበልም። ክፍሎቹ 500 ረድፎች ወይም 9 MB ሲደርሱ፣ ከሁለቱ ቀድሞ የደረሰው ላይ ይዘጋሉ።

---

## 5. መድረሻ ማከል

1. `LogExportDestinationType` የሚያስወጣ `src/lib/logExport/destinations/<name>.ts` ይፍጠሩ፦
   የZod `configSchema`፣ ለUI የሚያገለግል የ`fields` መግለጫ ድርድር፣ `secretFields`፣ እና
   `test()` / `prepare()` / `send(records)` የሚመልስ `createClient(config)`።
2. በ`src/lib/logExport/registry.ts` ውስጥ ወዳለው `DESTINATIONS` ድርድር ያክሉት።
3. በ`tests/unit/` ስር ሙከራዎችን ይጻፉ።

ለውጡ በሙሉ ይህ ብቻ ነው፦ የውሂብ ማቆያው፣ የcron ሥራው፣ የREST ንብርብሩ፣ የሚስጥር ምስጠራው እና
የdashboard ቅጹ ሁሉም registryውን ያነባሉ።

ለአዲስ መድረሻ ሁለት ደንቦች አሉ፦

- በከፊል ሲወድቅ `send()` **የግድ ስህተት መወርወር አለበት**። በስኬት መጠናቀቁ “መድረሻው እነዚህን ረድፎች ይዟል” ማለት ሲሆን፣
  cursorውም እነሱን በቋሚነት አልፎ ይሄዳል።
- ተጠቃሚው ያቀረበውን URL የሚቀበል መድረሻ፣ ልክ webhooks እንደሚያደርጉት፣ fetch ከማድረጉ በፊት
  በ`parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`) በኩል ማረጋገጥ አለበት።
  BigQuery ይህን አያስፈልገውም፦ hostsዎቹ ቋሚዎች ናቸው።

---

## 6. ማስኬድ

- **Dashboard**፦ Integrations → Log export። መድረሻ ያክሉ፣ ረድፎችን ሳይጽፉ credentialsን ለማረጋገጥ
  **Test**ን ያስኪዱ፣ ከዚያም ያንቁት።
- **Backlog**፦ የእያንዳንዱ መድረሻ ካርድ በመጠባበቅ ላይ ያሉ ረድፎችን እና cursorውን ያሳያል፤ `GET
/api/log-export/status` ተመሳሳይ አኃዞችን ከመጨረሻዎቹ 20 የሥራ አስኬዶች ጋር ይመልሳል።
- **የአንድ መድረሻ ውድቀት ሌሎቹን አያወድቅም** — የአስኬዱ ማጠቃለያ የእያንዳንዱን መድረሻ
  ሁኔታ በ`last_status` / `last_error` ውስጥ ይመዘግባል፣ የሥራ አስኬድ ታሪኩም ድምር ውጤቱን ያቆያል።
- **መድረሻን መሰረዝ cursorውንም ይሰርዛል።** እንደገና ማከል ከቆየው እጅግ ጥንታዊው
  የጥሪ log ይጀምራል፤ ይህም መድረሻው አስቀድሞ የያዛቸውን ረድፎች እንደገና ይልካል። በBigQuery ላይ የእያንዳንዱ ረድፍ
  `insertId` ይህን የሚያስወግደው በBigQuery የራሱ የድግግሞሽ ማስወገጃ ጊዜ መስኮት ውስጥ ብቻ ነው፤ ስለዚህ መድረሻን
  ከመሰረዝ ይልቅ ማሰናከልን ይምረጡ።
