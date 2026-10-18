# Log export (മലയാളം)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

OmniRoute കോൾ ലോഗുകൾ ഒരു ബാഹ്യ അനലിറ്റിക്സ് സ്റ്റോറിലേക്ക് തുടർച്ചയായും ഇൻക്രിമെന്റലായും എക്സ്പോർട്ട് ചെയ്യുന്നു.

Logs ഡാഷ്ബോർഡ് ടാബ് അഭ്യർത്ഥനാ ചരിത്രം SQLite (`call_logs`)-ൽ സൂക്ഷിക്കുന്നു; റൊട്ടേഷനും റിട്ടൻഷനും അതിന്റെ പരിധി നിർണ്ണയിക്കുന്നു. ഷെഡ്യൂൾ പ്രകാരം അതേ റെക്കോർഡ് സെറ്റ് പുറത്തേക്ക് അയയ്ക്കുന്ന ലോഗ് എക്സ്പോർട്ട്, പ്രാദേശിക ഡാറ്റാബേസിന്റെ കാലാവധിക്കപ്പുറം അവ നിലനിർത്താനും മറ്റ് ഡാറ്റയുമായി ചേർക്കാനും സഹായിക്കുന്നു. BigQuery ആണ് ആദ്യ ഡെസ്റ്റിനേഷൻ; പൈപ്പ്ലൈൻ ഒരു രജിസ്ട്രിയായതിനാൽ കൂടുതൽ ഡെസ്റ്റിനേഷനുകൾ കൂട്ടിച്ചേർക്കാം.

---

## 1. ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു

```
server (config ഡീക്രിപ്റ്റ് ചെയ്യുക + സാധൂകരിക്കുക, cursor സമന്വയിപ്പിക്കുക)
  → IPC ആരംഭിക്കുക → ഒറ്റപ്പെടുത്തിയ exportChild OS process
    → read-only storage.sqlite → പങ്കിട്ട call-log query/mapping
      → async artifact hydration → destination prepare()/send()
        → batch IPC → server cursor സ്ഥിരമായി സംഭരിക്കുന്നു → ack IPC
          → അടുത്ത batch; done IPC → server വിജയം രേഖപ്പെടുത്തുന്നു
```

- **ഷെഡ്യൂൾ** — ഒരു `JobRegistry` cron job, `log_export`, ഡിഫോൾട്ടായി `0 * * * *` (ഓരോ മണിക്കൂറിലും,
  UTC). `src/lib/initCloudSync.ts`-ൽ രജിസ്റ്റർ ചെയ്തിരിക്കുന്നു; `OMNIROUTE_LOG_EXPORT_CRON` ഉപയോഗിച്ച്
  മാറ്റിയെഴുതാം. ഓരോ tick-ലും **പ്രവർത്തനക്ഷമമാക്കിയ** എല്ലാ destination-കളും ക്രമാനുഗതമായി drain ചെയ്യുന്നു.
- **കർസർ** — SQLite-ന്റെ implicit `call_logs.rowid`, ഓരോ destination-നും പ്രത്യേകം
  `log_export_destinations.cursor_row_id`-ൽ സ്ഥിരമായി സംഭരിക്കുന്നു. `timestamp` മനഃപൂർവം cursor ആയി
  ഉപയോഗിക്കുന്നില്ല: callers-ന് സ്വന്തം value നൽകാം; അതിനാൽ പിന്നീട് ആരംഭിച്ച വേഗമേറിയ request-നുശേഷം
  വേഗം കുറഞ്ഞ ഒരു request എഴുതപ്പെടാം, അപ്പോൾ timestamp cursor അത് ഒഴിവാക്കും.
- **ബാച്ചിംഗ്** — ഓരോ request-നും `batch_size` rows (ഡിഫോൾട്ട് 500), ഓരോ run-നും
  `max_rows_per_run` rows (ഡിഫോൾട്ട് 10000); അതിനാൽ വലിയ backlog ഒറ്റ run തടയുന്നതിനുപകരം
  നിരവധി tick-കളിലായി drain ചെയ്യപ്പെടുന്നു.
- **ഡെലിവറി** — `send()` resolve ചെയ്തതിനുശേഷം മാത്രമേ cursor മുന്നോട്ട് നീങ്ങൂ. പരാജയപ്പെട്ട batch,
  cursor ഉണ്ടായിരുന്നിടത്തുതന്നെ നിലനിർത്തുന്നതിനാൽ, അതേ rows അടുത്ത run-ൽ വീണ്ടും ശ്രമിക്കും. ഉറപ്പ്
  യഥാർത്ഥ exactly-once അല്ല, മറിച്ച് at-least-once കൂടാതെ destination-side de-duplication ആണ്: BigQuery
  ഓരോ row-നും call-log id ഉപയോഗിച്ച് key നൽകുന്നു; സ്വന്തം dedup window-യ്ക്കുള്ളിൽ best-effort
  അടിസ്ഥാനത്തിലാണ് അത് ഈ key മാനിക്കുന്നത്.
- **ഓവർലാപ്പ് ഗാർഡ്** — cron tick-ഉം `POST .../run`-ഉം ഒരുമിച്ച് പ്രവർത്തിക്കാം. ഇതിനകം drain
  ചെയ്തുകൊണ്ടിരിക്കുന്ന destination രണ്ടാമതും drain ചെയ്യുന്നതിനുപകരം ഒഴിവാക്കപ്പെടുന്നു (run result-ൽ
  `skipped: true`), അതിനാൽ concurrent run-ന് ഒരു batch വീണ്ടും അയയ്ക്കാനോ cursor പിന്നിലേക്ക്
  എഴുതാനോ കഴിയില്ല.
- **പർജ് റിക്കവറി** — `cursor_row_id`, `MAX(rowid)`-ന് മുകളിൽ എത്തുകയാണെങ്കിൽ (table മുഴുവൻ purge
  ചെയ്യുകയും rowids പുനരാരംഭിക്കുകയും ചെയ്താൽ), സ്ഥിരമായി ഒന്നും കാണാനാകാത്ത അവസ്ഥ ഒഴിവാക്കാൻ runner
  0-ലേക്ക് rewind ചെയ്യുന്നു.

### ഒറ്റപ്പെടുത്തിയ റണ്ണറും പരിധികളും

Node-ൽ ഓരോ destination run-നും പ്രത്യേകം, ഹ്രസ്വകാലം മാത്രം പ്രവർത്തിക്കുന്ന OS child process
(`worker_threads` അല്ല, IPC സഹിതമുള്ള `child_process`) ആരംഭിക്കുന്നു. Body reads, payload JSON
parsing/serialization, destination `prepare()`, destination network I/O എന്നിവയെല്ലാം server-ന്റെ
event loop-ൽ അല്ല, അവിടെയാണ് പ്രവർത്തിക്കുന്നത്. Configuration-ഉം ചെറിയ progress messages-ഉം മാത്രമേ
IPC വഴി കടന്നുപോകൂ; export ചെയ്ത records ഒരിക്കലും server-ലേക്ക് മടങ്ങിവരില്ല. Cron job-ഉം Run now
route-ഉം അതേ public result-ഉം overlap guard-ഉം നിലനിർത്തുന്നു.

Child, server resolve ചെയ്ത `DATA_DIR/storage.sqlite`, `node:sqlite` ഉപയോഗിച്ച് read-only ആയി
തുറക്കുന്നു; `busy_timeout=5000`, `query_only=ON` എന്നിവ സജ്ജീകരിച്ചിരിക്കുന്നു. ഇത് ഒരു DB singleton-ഉം
import ചെയ്യുന്നില്ല; migrations, backups, SQLite updates എന്നിവയും നടത്തുന്നില്ല. Missing/corrupt
artifact bookkeeping (corrupt-artifact UPDATE ഉൾപ്പെടെ) dashboard detail path-ൽ മാത്രം തുടരുന്നു.
രണ്ട് path-കളും pure detail resolver പങ്കിടുന്നു; export asynchronous filesystem reads-ഉം അതേ
artifact → legacy inline → legacy disk → none resolution order-ഉം ഉപയോഗിക്കുന്നു. Child reader
തുറക്കുമ്പോൾ പരമാവധി insertion rowid-ന്റെ snapshot ഒരു run എടുക്കുന്നു; അതിനുശേഷമുള്ള inserts അടുത്ത
run വരെ കാത്തിരിക്കും. ഇത് ഒരു insertion boundary ആണ്, ദീർഘകാല SQLite transaction അല്ല: network
waits-ന്റെ സമയത്ത് WAL writers-നും checkpoints-നും സ്വതന്ത്രമായി തുടരാം. നിലവിലുള്ള rows-ന്റെ
updates/deletions ഈ boundary മൂലം freeze ചെയ്യപ്പെടുന്നില്ല.

അംഗീകരിച്ച ഓരോ batch-നുശേഷവും child ഒരു acknowledgement-നായി കാത്തിരിക്കുന്നു. Server ആദ്യം
`advanceLogExportCursor` ഉപയോഗിച്ച് cursor സ്ഥിരമായി സംഭരിക്കുകയും തുടർന്ന് `ack` അയയ്ക്കുകയും ചെയ്യുന്നു;
അതിനുമുമ്പ് അടുത്ത batch ആരംഭിക്കില്ല. Send failure, crash, timeout എന്നിവ ആ batch മുന്നോട്ട്
നീക്കാതെ failure രേഖപ്പെടുത്തുന്നു. മുമ്പ് acknowledged ആയ batches committed ആയി തുടരും; acknowledge
ചെയ്യപ്പെടാത്ത ഒറ്റ batch മാത്രമേ വീണ്ടും അയയ്ക്കപ്പെടാൻ സാധ്യതയുള്ളൂ. `done` ലഭിക്കുകയും child clean
ആയി exit ചെയ്യുകയും ചെയ്തതിനുശേഷം മാത്രമേ success രേഖപ്പെടുത്തൂ. Failures child-നെ SIGTERM ഉപയോഗിച്ച്
terminate ചെയ്യുന്നു; 500 ms-നുശേഷം SIGKILL-ലേക്ക് escalation നടത്തുകയും runner process closure-നായി
കാത്തിരിക്കുകയും ചെയ്യുന്നു.

| എൻവയൺമെന്റ് വേരിയബിൾ                          | ഡിഫോൾട്ട് | ഉദ്ദേശ്യം                            |
| --------------------------------------------- | --------- | ------------------------------------ |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000    | ഓരോ destination-നും wall-clock പരിധി |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024      | MB-യിലുള്ള child V8 old-space പരിധി  |

അസാധുവായ/പോസിറ്റീവ് അല്ലാത്ത/പൂർണ്ണസംഖ്യ അല്ലാത്ത values-ന് defaults ഉപയോഗിക്കുന്നു. Heap setting ഒരു
മൊത്തം RSS limit അല്ല; വളരെ വലിയ batches-ന് ഇപ്പോഴും child memory തീർക്കാനും run സുരക്ഷിതമായി
പരാജയപ്പെടുത്താനും കഴിയും. Bodies enabled ആയിരിക്കുമ്പോൾ 512 KiB artifacts ഉള്ള ഡിഫോൾട്ട് 500-row
batch-ന്, BigQuery-യുടെ byte-chunked JSON serialization ഉൾപ്പെടെ, മതിയായ അധിക ശേഷി 1024 MB default
നൽകുന്നു. ഇത് 10000-row bodies batch സുരക്ഷിതമാക്കുന്നില്ല. V8 heap exhaustion പരിഹാരനടപടി വ്യക്തമാക്കുന്ന
failure രേഖപ്പെടുത്തുന്നു: batch size കുറയ്ക്കുക അല്ലെങ്കിൽ `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB`
ഉയർത്തുക; cursor അവസാനം acknowledged ആയ batch-ൽ തുടരും. Historical inline/disk bodies-ന് modern
artifact cap ബാധകമല്ല. പ്രത്യേകിച്ച് memory-limited containers-ൽ, operators RSS പ്രത്യേകം
കണക്കാക്കണം.

Child-ന് resolve ചെയ്ത `DATA_DIR`, `NODE_ENV`, explicit `TZ` (legacy filename local-time resolution),
നിലവിലുണ്ടെങ്കിൽ `ELECTRON_RUN_AS_NODE`, കൂടാതെ താഴെപ്പറയുന്ന outbound inputs എന്നിവ മാത്രമാണ് inherit
ചെയ്യുന്നത്: `HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (അവയുടെ lowercase forms ഉൾപ്പെടെ),
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`.
ഒരു global Undici dispatcher, `NO_PROXY` ഉൾപ്പെടെയുള്ള server-ന്റെ pure environment-proxy resolution-ഉം
local-host bypass rules-ഉം പങ്കിടുന്നു; ഇത് `proxyFetch.ts` അല്ലെങ്കിൽ അതിന്റെ DB/feature flags import
ചെയ്യുന്നില്ല. Forward ചെയ്ത output-ലും രേഖപ്പെടുത്തിയ errors-ലും proxy credentials redacted
ചെയ്യപ്പെടുന്നു. Destination credentials ഒരു start IPC message-ൽ മാത്രമേ സഞ്ചരിക്കൂ; argv-യിലോ
environment-ലോ ഒരിക്കലുമില്ല; output/error forwarding prefix ചെയ്യുകയും sanitize ചെയ്യുകയും ചെയ്യുന്നു.
ഓരോ cron run-ലും Node-ന്റെ SQLite warning ആവർത്തിക്കുന്നത് ഒഴിവാക്കാൻ child exec arguments-ൽ
`ExperimentalWarning` മാത്രം disabled ആണ്; മറ്റ് warning types ദൃശ്യമായി തുടരും.

ലക്ഷ്യസ്ഥാന മൊഡ്യൂളുകൾ Next.js/server-only ഡിപെൻഡൻസികളില്ലാതെ ഇംപോർട്ട് ചെയ്യാനാകണം. നിലവിലുള്ള
BigQuery ഇംപ്ലിമെന്റേഷൻ ഇതിനകം ആ കരാർ പാലിക്കുന്നു. ആക്സസ്-ടോക്കൺ കാഷുകൾ ചൈൽഡ്
റൺ അവസാനിക്കുന്നതുവരെ മാത്രമേ നിലനിൽക്കൂ, വ്യത്യസ്ത റണ്ണുകൾക്കിടയിൽ നിലനിൽക്കില്ല. Node ആണ് പിന്തുണയ്ക്കുന്ന റൺടൈം (`package.json` engines), എന്നാൽ README-യിലെ Bun
ഇൻസ്റ്റലേഷൻ വിഭാഗവും `Dockerfile.bun`-ഉം `bun:sqlite` (`src/lib/db/core.ts` / അഡാപ്റ്ററുകൾ) ഉപയോഗിക്കുന്ന ഒരു പ്രൊഡക്ഷൻ അനുയോജ്യതാ പാതയും പരസ്യപ്പെടുത്തുന്നു. അതിനാൽ Bun-ന് കീഴിൽ, എക്സ്പോർട്ടുകൾ മുമ്പുണ്ടായിരുന്ന
ഇൻ-പ്രോസസ് പാത നിലനിർത്തുകയും ഒറ്റത്തവണ മുന്നറിയിപ്പ് നൽകുകയും ചെയ്യുന്നു: ചൈൽഡ് ഹീപ്പ്/ടൈംഔട്ട് ഐസൊലേഷൻ ലഭ്യമല്ല. ഇവന്റ്-ലൂപ്പ്, OOM ഐസൊലേഷനുകൾക്കായി
Node ഉപയോഗിക്കുക; ഇവിടെ Bun-നെ ഡെവലപ്മെന്റിനായി മാത്രമുള്ളതായി കണക്കാക്കുന്നില്ല.

`includeBodies` പ്രവർത്തനക്ഷമമാക്കിയിരിക്കുമ്പോൾ, ഒരു മണിക്കൂറിലെ പേലോഡ് ബാക്ക്ലോഗ് ശേഖരിക്കുന്നതിന് പകരം
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"` പോലുള്ള മിനിറ്റ്-തല ഇടവേളയ്ക്ക് മുൻഗണന നൽകുക.
ബാച്ച്, റോ പരിധികൾ ഓരോ റണ്ണിനെയും തുടർന്നും നിയന്ത്രിക്കുന്നു. ഓരോ റണ്ണിലും ഓരോ ലക്ഷ്യസ്ഥാനത്തിനും പ്രോസസ് സ്റ്റാർട്ടപ്പിന്റെ ചെലവ് ഉണ്ടാകും;
ഇത് മൊത്തം CPU ഉപയോഗം കുറയ്ക്കുന്നതിനല്ല, മറിച്ച് സെർവർ ഇവന്റ്-ലൂപ്പ് ഐസൊലേഷനുവേണ്ടി ചെറിയൊരു സ്റ്റാർട്ടപ്പ് ചെലവ് സ്വീകരിക്കുന്നതാണ്.

### പേലോഡുകൾ (പ്രോംപ്റ്റുകളും കംപ്ലീഷനുകളും)

ഡിഫോൾട്ടായി, Logs **list** കാണിക്കുന്ന സംഗ്രഹ ഫീൽഡുകൾ മാത്രമാണ് എക്സ്പോർട്ടിൽ ഉൾപ്പെടുന്നത്.
**Export prompts and responses** (`includeBodies`) പ്രവർത്തനക്ഷമമാക്കുമ്പോൾ, ഓരോ കോളിനുമായി Logs **detail**
പെയ്ൻ കാണിക്കുന്ന വിവരങ്ങളും അധികമായി അയയ്ക്കുന്നു:

| ഫീൽഡ്                            | അതിൽ അടങ്ങിയിരിക്കുന്നത്                                        |
| -------------------------------- | --------------------------------------------------------------- |
| `request_body` / `response_body` | ഡാഷ്ബോർഡ് റെൻഡർ ചെയ്യുന്ന കോൾ പേലോഡുകൾ                          |
| `pipeline_route_decision`        | റൂട്ടർ തിരഞ്ഞെടുത്ത ടാർഗറ്റും മോഡലും                            |
| `pipeline_client_request`        | ക്ലയന്റ് അയച്ച അതേ രൂപത്തിലുള്ള അസംസ്കൃത റിക്വസ്റ്റ്            |
| `pipeline_openai_request`        | ആന്തരിക OpenAI രൂപത്തിലേക്ക് പരിഭാഷപ്പെടുത്തിയ ശേഷമുള്ളത്       |
| `pipeline_provider_request`      | പ്രൊവൈഡർ ഡയലക്റ്റിൽ യഥാർത്ഥത്തിൽ അപ്സ്ട്രീമിലേക്ക് അയച്ചത്      |
| `pipeline_provider_response`     | അസംസ്കൃത അപ്സ്ട്രീം റെസ്പോൺസ്                                   |
| `pipeline_client_response`       | കോളറിന് തിരികെ നൽകിയവ                                           |
| `pipeline_error`                 | പരാജയപ്പെട്ട കോളിന്റെ പൈപ്പ്ലൈൻ-തല പിശക് വിശദാംശം               |
| `bodies_truncated`               | മുകളിലെ ഏതെങ്കിലും ഫീൽഡ് `maxBodyBytes` പരിധിയിലെത്തുമ്പോൾ True |

ഇത് പ്രോംപ്റ്റ് ഉള്ളടക്കമാണ്, അതിനാൽ ഇത് **ഡിഫോൾട്ടായി ഓഫാണ്**, കൂടാതെ മനഃപൂർവം ഓരോ ലക്ഷ്യസ്ഥാനത്തിനും പ്രത്യേകം തിരഞ്ഞെടുക്കാവുന്ന ഓപ്ഷനാണ്.
എക്സ്പോർട്ടും `getCallLogById`-ഉം ഒരേ ഡീറ്റെയിൽ
റെസല്യൂഷൻ പങ്കിടുന്നതിനാൽ, ഡാഷ്ബോർഡ് കാണിക്കുന്നതുതന്നെയാണ് അയയ്ക്കുന്നത്: പേലോഡുകൾ എഴുതുമ്പോൾത്തന്നെ
PII നീക്കംചെയ്ത് സുരക്ഷിതമാക്കുകയും രഹസ്യങ്ങൾ മറയ്ക്കുകയും ചെയ്യുന്നു; കൂടാതെ `noLog` API കീ ഉപയോഗിച്ച് നടത്തുന്ന കോൾ
ഒരു പേലോഡും സംഭരിക്കാത്തതിനാൽ, എക്സ്പോർട്ട് ചെയ്യാൻ ഒന്നുമുണ്ടാകില്ല.

ഫയൽസിസ്റ്റം ആർട്ടിഫാക്റ്റിൽ നിന്ന് ഓരോ റോ വീതമാണ് പേലോഡുകൾ വായിക്കുന്നത്, അതിനാൽ ആവശ്യപ്പെട്ട ലക്ഷ്യസ്ഥാനങ്ങൾക്കായി
മാത്രമേ ഹൈഡ്രേഷൻ പ്രവർത്തിക്കൂ. ആർട്ടിഫാക്റ്റ് നഷ്ടപ്പെട്ടതോ കേടായതോ ആണെങ്കിൽ, ബാച്ച് പരാജയപ്പെടുത്തി കർസർ
തടസ്സപ്പെടുത്തുന്നതിന് പകരം null പേലോഡുകളോടുകൂടിയ അതിന്റെ സംഗ്രഹം എക്സ്പോർട്ട് ചെയ്യുന്നു.

`maxBodyBytes` (ഡിഫോൾട്ട് 262144) ഓരോ ഫീൽഡിനും പരിധി നിശ്ചയിക്കുന്നു. ദൈർഘ്യമേറിയ പേലോഡുകൾ ഒഴിവാക്കുന്നതിന് പകരം
**വെട്ടിച്ചുരുക്കുന്നു** — വെട്ടിച്ചുരുക്കിയ പ്രോംപ്റ്റിന് ഇപ്പോഴും "എന്താണ് ചോദിച്ചത്" എന്നതിന് ഉത്തരം നൽകാനാകും — കൂടാതെ ആ റോയിൽ
`bodies_truncated` ഫ്ലാഗ് സജ്ജീകരിക്കുന്നു. സ്ട്രീം ചെയ്ത ചങ്ക്-ബൈ-ചങ്ക് ഡെൽറ്റകൾ എക്സ്പോർട്ട് ചെയ്യുന്നില്ല; സംയോജിപ്പിച്ച റെസ്പോൺസ്
ഇതിനകം `pipeline_provider_response`-ലും `pipeline_client_response`-ലും ഉണ്ട്.

---

## 2. ഫയലുകൾ

| ഘടകം                      | സ്ഥാനം                                       |
| ------------------------- | -------------------------------------------- |
| ലക്ഷ്യസ്ഥാന കോൺട്രാക്ട്   | `src/lib/logExport/types.ts`                 |
| രജിസ്ട്രി                 | `src/lib/logExport/registry.ts`              |
| രഹസ്യങ്ങൾ കൈകാര്യം ചെയ്യൽ | `src/lib/logExport/secrets.ts`               |
| റണ്ണർ (പാരന്റ് IPC)       | `src/lib/logExport/runner.ts`                |
| പ്രോസസ് ലൈഫ്സൈക്കിൾ       | `src/lib/logExport/childRunner.ts`           |
| ചൈൽഡ് എൻട്രി              | `src/lib/logExport/exportChild.ts`           |
| റീഡ്-ഒൺലി ഓപ്പണർ          | `src/lib/db/logExportReadOnly.ts`            |
| പങ്കിട്ട ക്വറി/മാപ്പിംഗ്  | `src/lib/usage/callLogExportQueries.ts`      |
| വിശദാംശ റിസോൾവർ           | `src/lib/usage/callLogDetailResolver.ts`     |
| API പ്രൊജക്ഷൻ             | `src/lib/logExport/presenter.ts`             |
| BigQuery ലക്ഷ്യസ്ഥാനം     | `src/lib/logExport/destinations/bigquery.ts` |
| Google SA പ്രാമാണീകരണം    | `src/lib/logExport/googleServiceAccount.ts`  |
| കോൾ-ലോഗ് ഉറവിടം           | `src/lib/usage/callLogExportSource.ts`       |
| സ്ഥിരസംഭരണം               | `src/lib/db/logExportDestinations.ts`        |
| Cron ജോലി                 | `src/lib/jobs/logExportJob.ts`               |
| REST ലെയർ                 | `src/app/api/log-export/`                    |
| ഡാഷ്ബോർഡ് പേജ്            | `src/app/(dashboard)/dashboard/log-export/`  |

സ്കീമ: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

എല്ലാ റൂട്ടുകളിലും മാനേജ്മെന്റ് ഓതന്റിക്കേഷൻ (`requireManagementAuth`) ആവശ്യമാണ്. സീക്രട്ടുകൾ ഒരിക്കലും തിരികെ നൽകില്ല:
സംഭരിച്ച സീക്രട്ട് ലിറ്ററൽ മൂല്യമായ `__stored__` ആയി തിരികെ ലഭിക്കും; അപ്ഡേറ്റിൽ ആ മൂല്യം തന്നെ തിരികെ അയച്ചാൽ
സംഭരിച്ച ക്രെഡൻഷ്യൽ നിലനിർത്തും.

സീക്രട്ട് നിർവചിച്ചിട്ടുള്ള തരത്തിലുള്ള ഡെസ്റ്റിനേഷൻ സൃഷ്ടിക്കുന്നതിനോ അപ്ഡേറ്റ് ചെയ്യുന്നതിനോ **`STORAGE_ENCRYPTION_KEY`
ആവശ്യമാണ്**. അതില്ലെങ്കിൽ `encrypt()` നിശ്ശബ്ദമായ പാസ്ത്രൂ ആയതിനാൽ, ക്രെഡൻഷ്യൽ SQLite-ൽ പ്ലെയിൻടെക്സ്റ്റായി
ഇടുന്നതിനു പകരം റൈറ്റ് 400 ഉപയോഗിച്ച് നിരസിക്കും (Telegram webhook പ്രയോഗിക്കുന്ന അതേ ഗാർഡ്).

| മെത്തഡ്  | പാത്ത്                                   | ഉദ്ദേശ്യം                                                     |
| -------- | ---------------------------------------- | ------------------------------------------------------------- |
| `GET`    | `/api/log-export/types`                  | ഡെസ്റ്റിനേഷൻ തരങ്ങൾ + അവയുടെ കോൺഫിഗ് ഫീൽഡ് പട്ടിക             |
| `GET`    | `/api/log-export/destinations`           | ഡെസ്റ്റിനേഷനുകളുടെ പട്ടിക (സീക്രട്ടുകൾ മറച്ചത്)               |
| `POST`   | `/api/log-export/destinations`           | ഒരു ഡെസ്റ്റിനേഷൻ സൃഷ്ടിക്കുക                                  |
| `GET`    | `/api/log-export/destinations/{id}`      | ഒരെണ്ണം വായിക്കുക                                             |
| `PUT`    | `/api/log-export/destinations/{id}`      | പേര് / പ്രവർത്തനക്ഷമത / കോൺഫിഗ് / ബാച്ചിംഗ് അപ്ഡേറ്റ് ചെയ്യുക |
| `DELETE` | `/api/log-export/destinations/{id}`      | ഇല്ലാതാക്കുക                                                  |
| `POST`   | `/api/log-export/destinations/{id}/test` | ക്രെഡൻഷ്യലുകൾ പരിശോധിക്കുക, ഒന്നും റൈറ്റ് ചെയ്യരുത്           |
| `POST`   | `/api/log-export/destinations/{id}/run`  | ഇപ്പോൾ ഡ്രെയിൻ ചെയ്യുക, ഷെഡ്യൂൾ ചെയ്ത റണ്ണിന്റെ അതേ പാത്ത്    |
| `GET`    | `/api/log-export/status`                 | Cron നില, സമീപകാല റണ്ണുകൾ, ഓരോ ടാർഗറ്റിലെയും ബാക്ക്ലോഗ്       |

`GET /api/log-export/types` ആണ് UI-യെ പൊതുവായതാക്കുന്നത്: തിരികെ ലഭിക്കുന്ന ഫീൽഡ് ഡിസ്ക്രിപ്റ്ററുകളിൽ നിന്നാണ്
ഡാഷ്ബോർഡ് ഫോം റെൻഡർ ചെയ്യുന്നത്, അതിനാൽ പുതിയ ഡെസ്റ്റിനേഷനായി UI മാറ്റേണ്ടതില്ല.

---

## 4. BigQuery ഡെസ്റ്റിനേഷൻ

കോൺഫിഗ് കീകൾ (`type: "bigquery"`):

| കീ                   | കുറിപ്പുകൾ                                                                                    |
| -------------------- | --------------------------------------------------------------------------------------------- |
| `projectId`          | ഡാറ്റാസെറ്റ് ഉൾക്കൊള്ളുന്ന GCP പ്രോജക്റ്റ്                                                    |
| `datasetId`          | `[A-Za-z0-9_]+`                                                                               |
| `tableId`            | `[A-Za-z0-9_]+`                                                                               |
| `location`           | ഡാറ്റാസെറ്റ് സൃഷ്ടിക്കേണ്ടിവരുമ്പോൾ മാത്രം ഉപയോഗിക്കുന്നു (ഡിഫോൾട്ട് `EU`)                    |
| `serviceAccountJson` | സർവീസ്-അക്കൗണ്ട് കീ. സീക്രട്ട്: സംഭരിക്കുമ്പോൾ എൻക്രിപ്റ്റ് ചെയ്യും, ഒരിക്കലും തിരികെ നൽകില്ല |
| `autoCreate`         | ആദ്യ എക്സ്പോർട്ടിൽ ഡാറ്റാസെറ്റും ടേബിളും സൃഷ്ടിക്കുക (ഡിഫോൾട്ട് `true`)                       |

സർവീസ് അക്കൗണ്ടിന് ടാർഗറ്റ് ടേബിളിൽ `bigquery.tables.updateData` ആവശ്യമാണ്; കൂടാതെ
`autoCreate` ഓണായിരിക്കുമ്പോൾ `bigquery.datasets.create` / `bigquery.tables.create` എന്നിവയും ആവശ്യമാണ്.

കോൺഫിഗർ ചെയ്ത ബാച്ച് ഒരു **കർസർ** യൂണിറ്റാണ്, HTTP യൂണിറ്റല്ല: `send()` അതിനെ പരമാവധി 500 റോകളുള്ള
insertAll കോളുകളായി വിഭജിക്കുന്നു, അതിനാൽ വലിയ `batch_size` BigQuery-യുടെ 10 MB റിക്വസ്റ്റ് പരിധി ലംഘിക്കില്ല.
താൽക്കാലിക സ്റ്റാറ്റസുകൾ (408/429/500/502/503/504), അതേ insertIds വീണ്ടും ഉപയോഗിച്ചുകൊണ്ട്, എക്സ്പോണൻഷ്യൽ
ബാക്ക്ഓഫോടെ പരമാവധി മൂന്ന് തവണ റീട്രൈ ചെയ്യും; റൺ പാഴാക്കുന്നതിനു പകരം ഓത്ത്, സ്കീമ പരാജയങ്ങൾ ആദ്യ ശ്രമത്തിൽ
തന്നെ എറർ ത്രോ ചെയ്യും.

നിമിഷങ്ങൾക്ക് മുമ്പ് സൃഷ്ടിച്ച ടേബിൾ സ്ട്രീമിംഗ് എൻഡ്പോയിന്റിൽ ഉടൻ ദൃശ്യമാകില്ല, അതിനാൽ ഏതാനും സെക്കൻഡുകൾ
അത് 404 നൽകും. ആ 404 റീട്രൈ ചെയ്യും, എന്നാൽ **ഈ റൺ ടേബിൾ സൃഷ്ടിച്ചപ്പോൾ മാത്രം** —
യഥാർത്ഥത്തിൽ ടേബിൾ ഇല്ലെങ്കിൽ ഉടൻ പരാജയപ്പെടും. അടുത്തിടെ ഇല്ലാതാക്കിയ ടേബിളിന്റെ അതേ പേരിൽ വീണ്ടും ടേബിൾ
സൃഷ്ടിക്കുന്നത് ഏതാനും മിനിറ്റുകൾ സ്ട്രീമിംഗ് ഇൻസേർട്ടുകൾ നിരസിക്കാൻ BigQuery-യെ പ്രേരിപ്പിക്കുമെന്നത് ശ്രദ്ധിക്കുക;
ഇത് ഡിലീറ്റ്-ചെയ്ത്-വീണ്ടും-സൃഷ്ടിക്കുന്നതിന്റെ സ്വഭാവമാണ്, അതിനാൽ ഒരെണ്ണം ഡ്രോപ്പ് ചെയ്ത് വീണ്ടും ചേർക്കുന്നതിനേക്കാൾ
പുതിയ ടേബിൾ പേര് തിരഞ്ഞെടുക്കുക.

**ഭാഗിക പരാജയം, ശൂന്യമല്ലാത്ത `insertErrors[]` സഹിതം HTTP 200 ആയി ലഭിക്കും.** അതിനെ പരാജയമായി
കണക്കാക്കി എറർ ത്രോ ചെയ്യും; BigQuery ഒരിക്കലും സ്വീകരിക്കാത്ത റോകൾക്ക് അപ്പുറത്തേക്ക് കർസർ നീങ്ങുന്നത് ഇതാണ്
തടയുന്നത്; `tests/unit/log-export-bigquery.test.ts` ഈ സ്വഭാവം ഉറപ്പിക്കുന്നു.

ട്രാൻസ്പോർട്ട് പ്ലെയിൻ REST ആണ് — സ്വയം സൈൻ ചെയ്ത RS256 അസർഷൻ
`https://oauth2.googleapis.com/token`-ൽ ഒരു ആക്സസ് ടോക്കണായി എക്സ്ചേഞ്ച് ചെയ്യുന്നു, തുടർന്ന് റോകൾ
`tabledata.insertAll`-ലേക്ക് പോകുന്നു. Google SDK ഉൾപ്പെടുത്തുന്നില്ല. ഓരോ (സർവീസ് അക്കൗണ്ട്, സ്കോപ്പ്)
ജോഡിക്കും ആക്സസ് ടോക്കണുകൾ ഇൻ-പ്രോസസായി കാഷ് ചെയ്യുന്നു.

സൃഷ്ടിച്ച ടേബിളിൽ Logs-ടാബിലെ ഓരോ ഫീൽഡിനും ഓരോ കോളവും കൂടാതെ `exported_at`-ഉം ഉണ്ടായിരിക്കും; കോൾ ലോഗുകൾ
യഥാർത്ഥത്തിൽ ക്വറി ചെയ്യുന്ന രീതിക്കനുസരിച്ചാണ് അത് ക്രമീകരിച്ചിരിക്കുന്നത്:

- **`timestamp` അടിസ്ഥാനമാക്കി ദിവസം തിരിച്ചുള്ള പാർട്ടീഷനിംഗ്**, അതിനാൽ തീയതിയാൽ പരിമിതപ്പെടുത്തിയ ക്വറി ആ ദിവസങ്ങൾ മാത്രം സ്കാൻ ചെയ്യും.
- **`api_key_name`, `provider`, `model`, `status` എന്നിവയാൽ ക്ലസ്റ്റർ ചെയ്തത്** (ആ ക്രമത്തിൽ), അതിനാൽ
  ആരാണ് അത് റൺ ചെയ്തത്, അത് എവിടേക്കാണ് പോയത്, അല്ലെങ്കിൽ അത് പരാജയപ്പെട്ടോ എന്നിവ ഉപയോഗിച്ചുള്ള ഫിൽട്ടറിംഗ് ഓരോ
  പാർട്ടീഷനിലെയും ബ്ലോക്കുകൾ പ്രൂൺ ചെയ്യും. BigQuery പരമാവധി നാല് ക്ലസ്റ്ററിംഗ് കോളങ്ങൾ അനുവദിക്കുന്നു, കൂടാതെ ക്രമം
  പ്രധാനമാണ്: `api_key_name` മാത്രം ഉപയോഗിച്ചുള്ള ഫിൽട്ടർ പ്രൂൺ ചെയ്യും, `status` മാത്രം ഉപയോഗിച്ചുള്ള ഫിൽട്ടർ പ്രൂൺ ചെയ്യില്ല.
- **`partitionExpirationDays` വഴിയുള്ള ഓപ്ഷണൽ പാർട്ടീഷൻ നിലനിർത്തൽ** (0 എല്ലാം നിലനിർത്തും), ടേബിൾ
  സൃഷ്ടിക്കുമ്പോൾ പ്രയോഗിക്കുന്നു.

ഈ രണ്ട് ക്രമീകരണങ്ങളും സൃഷ്ടിക്കുന്ന സമയത്താണ് ബാധകമാകുന്നത്. നിലവിലുള്ള ഒരു പട്ടിക അതിന് ഇതിനകം ഉള്ള ലേഔട്ട് നിലനിർത്തും, അതിനാൽ
ഇവ സ്വീകരിക്കണമെങ്കിൽ ലക്ഷ്യസ്ഥാനം ഒരു പുതിയ പട്ടിക id-ലേക്ക് ചൂണ്ടുക.

മാപ്പറും പട്ടിക സ്കീമയും ഒരേ ക്രമത്തിൽ തുടരുന്നുവെന്ന് `tests/unit/log-export-bigquery.test.ts` ഉറപ്പാക്കുന്നു,
അതിനാൽ പുറത്തേക്ക് അയയ്ക്കുന്നതിനിടെ ഒരു പുതിയ call-log കോളം നിശ്ശബ്ദമായി ഒഴിവാക്കാനാവില്ല.

ബാച്ചുകൾ **രണ്ടും**—വരി എണ്ണവും സീരിയലൈസ് ചെയ്ത ബൈറ്റുകളും—അടിസ്ഥാനമാക്കി ചങ്കുകളായി വിഭജിക്കുന്നു. പേലോഡുകൾ എക്സ്പോർട്ട് ചെയ്തുകഴിഞ്ഞാൽ
വരി എണ്ണം മാത്രം മതിയാകില്ല: പ്രോംപ്റ്റുകൾ ഉൾക്കൊള്ളുന്ന 500 വരികൾക്ക് പതിനായിരക്കണക്കിന് മെഗാബൈറ്റുകൾ വലുപ്പമുണ്ടാകാം, കൂടാതെ 10 MB-യിൽ കൂടുതലുള്ള
ഒരു അഭ്യർത്ഥന insertAll നിരസിക്കും. ആദ്യം ഏത് പരിധിയിലെത്തുന്നുവോ അതനുസരിച്ച്, 500 വരികളിലോ 9 MB-യിലോ ചങ്കുകൾ അവസാനിപ്പിക്കും.

---

## 5. ഒരു destination ചേർക്കൽ

1. `LogExportDestinationType` export ചെയ്യുന്ന `src/lib/logExport/destinations/<name>.ts` സൃഷ്ടിക്കുക:
   ഒരു Zod `configSchema`, UI-യ്ക്കായുള്ള ഒരു `fields` descriptor array, `secretFields`, കൂടാതെ
   `test()` / `prepare()` / `send(records)` നൽകുന്ന ഒരു `createClient(config)`.
2. `src/lib/logExport/registry.ts`-ലെ `DESTINATIONS` array-യിലേക്ക് അത് ചേർക്കുക.
3. `tests/unit/`-ന് കീഴിൽ tests എഴുതുക.

മാറ്റം ഇത്രമാത്രമാണ്: persistence, cron job, REST layer, secret encryption, dashboard form എന്നിവയെല്ലാം registry വായിക്കുന്നു.

ഒരു പുതിയ destination-നുള്ള രണ്ട് നിയമങ്ങൾ:

- ഭാഗിക പരാജയം സംഭവിക്കുമ്പോൾ `send()` **നിർബന്ധമായും throw ചെയ്യണം**. Resolve ചെയ്യുന്നത് "destination-ൽ ഈ rows ഉണ്ട്" എന്നാണ് അർത്ഥമാക്കുന്നത്,
  തുടർന്ന് cursor അവയെ ശാശ്വതമായി മറികടന്ന് മുന്നോട്ട് നീങ്ങും.
- ഉപയോക്താവ് നൽകുന്ന URL സ്വീകരിക്കുന്ന destination, fetch ചെയ്യുന്നതിന് മുമ്പ്
  webhooks ചെയ്യുന്നതുപോലെതന്നെ, `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`) വഴി അത് validate ചെയ്യണം.
  BigQuery-യ്ക്ക് ഇത് ആവശ്യമില്ല: അതിന്റെ hosts constants ആണ്.

---

## 6. ഇത് പ്രവർത്തിപ്പിക്കൽ

- **Dashboard**: Integrations → Log export. ഒരു destination ചേർക്കുക, rows എഴുതാതെ credentials പരിശോധിക്കാൻ **Test** പ്രവർത്തിപ്പിക്കുക,
  തുടർന്ന് അത് enable ചെയ്യുക.
- **Backlog**: ഓരോ destination card-ഉം pending rows-ഉം cursor-ഉം കാണിക്കുന്നു; `GET
/api/log-export/status` അതേ കണക്കുകൾക്കൊപ്പം അവസാനത്തെ 20 job runs-ഉം നൽകുന്നു.
- **പരാജയപ്പെടുന്ന ഒരു destination മറ്റുള്ളവയെ പരാജയപ്പെടുത്തില്ല** — run summary ഓരോ destination-ന്റെയും
  status `last_status` / `last_error` എന്നിവയിൽ രേഖപ്പെടുത്തുന്നു, കൂടാതെ job run history aggregate സൂക്ഷിക്കുന്നു.
- **ഒരു destination delete ചെയ്യുന്നത് അതിന്റെ cursor-ഉം delete ചെയ്യും.** അത് വീണ്ടും ചേർക്കുമ്പോൾ നിലനിർത്തിയിട്ടുള്ളതിൽ ഏറ്റവും പഴയ
  call log മുതൽ ആരംഭിക്കും; ഇതുവഴി destination-ൽ ഇതിനകം ഉണ്ടായിരിക്കാവുന്ന rows വീണ്ടും അയയ്ക്കപ്പെടും. BigQuery-യിൽ ഓരോ row-യ്ക്കുമുള്ള
  `insertId`, BigQuery-യുടെ സ്വന്തം de-duplication window-യ്ക്കുള്ളിൽ മാത്രമേ ഇത് കൈകാര്യം ചെയ്യൂ; അതിനാൽ destination delete ചെയ്യുന്നതിനെക്കാൾ
  disable ചെയ്യുന്നതാണ് അഭികാമ്യം.
