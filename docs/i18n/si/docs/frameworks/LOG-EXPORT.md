# Log export (සිංහල)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

OmniRoute ඇමතුම් ලොග් බාහිර විශ්ලේෂණ ගබඩාවකට අඛණ්ඩව, වර්ධක ලෙස අපනයනය කිරීම.

Logs උපකරණ පුවරු ටැබය ඉල්ලීම් ඉතිහාසය SQLite (`call_logs`) තුළ තබා ගනී; එය භ්රමණය සහ රඳවාගැනීම මඟින් සීමා වේ.
ලොග් අපනයනය එම වාර්තා කට්ටලයම කාලසටහනකට අනුව පිටතට යවන බැවින්, එයට දේශීය දත්ත සමුදායට වඩා දිගු කලක් පැවතිය හැකි අතර වෙනත් දත්ත සමඟ සම්බන්ධ කළ හැක. BigQuery පළමු ගමනාන්තය වේ; මෙම
නලමාර්ගය රෙජිස්ට්රියක් බැවින් තවත් ගමනාන්ත එකතු කළ හැක.

---

## 1. එය ක්රියා කරන ආකාරය

```
සේවාදායකය (වින්යාසය විකේතනය + වලංගු කිරීම, කර්සරය සමථයකට පත් කිරීම)
  → IPC ආරම්භ කරන්න → හුදකලා කළ exportChild OS ක්රියාවලිය
    → කියවීමට පමණක් වූ storage.sqlite → හවුල් call-log විමසුම/සිතියම්කරණය
      → අසමමුහුර්ත artifact පූරණය → ගමනාන්තයේ prepare()/send()
        → කාණ්ඩ IPC → සේවාදායකය කර්සරය ස්ථිර කරයි → පිළිගැනීමේ IPC
          → ඊළඟ කාණ්ඩය; අවසන් IPC → සේවාදායකය සාර්ථකත්වය සටහන් කරයි
```

- **කාලසටහන** — එක් `JobRegistry` cron කාර්යයක්, `log_export`, පෙරනිමියෙන් `0 * * * *` (පැයකට වරක්,
  UTC). `src/lib/initCloudSync.ts` තුළ ලියාපදිංචි කර ඇත; `OMNIROUTE_LOG_EXPORT_CRON` මඟින් අභිබවා සැකසිය හැක.
  සෑම ක්රියාත්මක වීමකදීම **සක්රීය කර ඇති** සෑම ගමනාන්තයක්ම අනුක්රමිකව හිස් කරයි.
- **කර්සරය** — SQLite හි ව්යංග `call_logs.rowid`, එක් එක් ගමනාන්තය සඳහා
  `log_export_destinations.cursor_row_id` තුළ ස්ථිර කරයි. `timestamp` හිතාමතාම කර්සරය ලෙස භාවිත නොකෙරේ: ඇමතුම්කරුවන්ට
  තමන්ගේම අගයක් සැපයිය හැකි බැවින්, පසුව ආරම්භ වූ වේගවත් ඉල්ලීමකට පසුව මන්දගාමී ඉල්ලීමක් ලිවිය හැකි අතර,
  කාල මුද්රා කර්සරයක් එය මඟ හරිනු ඇත.
- **කාණ්ඩගත කිරීම** — එක් ඉල්ලීමකට පේළි `batch_size` (පෙරනිමිය 500), එක් ධාවනයකට පේළි
  `max_rows_per_run` (පෙරනිමිය 10000), එමඟින් විශාල පසුබැසීමක් එක් ධාවනයක් අවහිර කරනවා වෙනුවට
  කාලසටහන් ක්රියාත්මක වීම් කිහිපයක් පුරා හිස් වේ.
- **බෙදාහැරීම** — කර්සරය ඉදිරියට යන්නේ `send()` විසඳුණු පසුව පමණි. අසාර්ථක කාණ්ඩයක් කර්සරය
  තිබූ තැනම තබන බැවින්, ඊළඟ ධාවනයේදී එම පේළිම නැවත උත්සාහ කරයි. සහතිකය වන්නේ
  සත්ය වශයෙන්ම හරියටම එක් වරක් නොව, අවම වශයෙන් එක් වරක් බෙදාහැරීම සහ ගමනාන්ත පාර්ශ්වයේ අනුපිටපත් ඉවත් කිරීමයි: BigQuery සෑම
  පේළියකටම call-log id මඟින් යතුරක් නියම කරන අතර, එය තමන්ගේ අනුපිටපත් ඉවත් කිරීමේ කාල කවුළුව තුළ හැකි උපරිමයෙන් පිළිපදියි.
- **අතිච්ඡාදන ආරක්ෂණය** — cron ක්රියාත්මක වීම සහ `POST .../run` එකම වේලාවේ සිදුවිය හැක. දැනටමත්
  හිස් කරමින් පවතින ගමනාන්තයක් දෙවරක් හිස් කරනවා වෙනුවට මඟ හරිනු ලැබේ (ධාවන ප්රතිඵලයේ `skipped: true`),
  එබැවින් සමගාමී ධාවනයකට කාණ්ඩයක් නැවත යැවීමට හෝ කර්සරය පසුපසට ලිවීමට නොහැක.
- **පිරිසිදු කිරීමෙන් පසු ප්රතිසාධනය** — `cursor_row_id` අගය `MAX(rowid)` ඉක්මවා ගියහොත් (සම්පූර්ණ වගුවම
  පිරිසිදු කර පේළි හැඳුනුම් නැවත ආරම්භ වී ඇත්නම්), ධාවකය ස්ථිරව අන්ධ වීම වෙනුවට 0 වෙත ආපසු යයි.

### හුදකලා ධාවකය සහ සීමාවන්

Node මත සෑම ගමනාන්ත ධාවනයක්ම වෙනම, කෙටි කාලීන OS අනු ක්රියාවලියක් (`child_process`
IPC සමඟ, `worker_threads` නොවේ) ආරම්භ කරයි. Body කියවීම්, payload JSON විග්රහය/අනුක්රමීකරණය, ගමනාන්ත
`prepare()` සහ ගමනාන්ත ජාල I/O සියල්ලම සේවාදායකයේ event loop එක මත නොව එහි ක්රියාත්මක වේ.
IPC හරහා ගමන් කරන්නේ වින්යාසය සහ කුඩා ප්රගති පණිවිඩ පමණි; නිර්යාත කළ වාර්තා කිසිවිටෙක සේවාදායකයට
ආපසු නොඑයි. cron කාර්යය සහ දැන් ධාවනය කිරීමේ route එක එකම පොදු ප්රතිඵලය සහ අතිච්ඡාදන ආරක්ෂණය පවත්වා ගනී.

අනු ක්රියාවලිය `node:sqlite` භාවිතයෙන් සේවාදායකය විසඳාගත් `DATA_DIR/storage.sqlite` කියවීමට පමණක් විවෘත කරයි,
`busy_timeout=5000` සහ `query_only=ON` සමඟ. එය කිසිදු DB singleton එකක් ආයාත නොකරන අතර
migrations, backups හෝ SQLite යාවත්කාලීන කිසිවක් සිදු නොකරයි. අස්ථානගත/දූෂිත artifact ලේඛනගත කිරීම (දූෂිත-artifact
UPDATE එක ඇතුළුව) dashboard විස්තර මාර්ගය තුළ පමණක් පවතී. මාර්ග දෙකම පිරිසිදු
විස්තර විසඳුම්කාරකයක් හවුලේ භාවිත කරයි; නිර්යාතය අසමමුහුර්ත ගොනු පද්ධති කියවීම් සහ එකම artifact → පැරණි
inline → පැරණි disk → කිසිවක් නැත යන විසඳුම් අනුපිළිවෙළ භාවිත කරයි. අනු ක්රියාවලිය තම කියවනය විවෘත කරන විට ධාවනයක් උපරිම ඇතුළත් කිරීමේ rowid එකේ
ක්ෂණික පිටපතක් ගනී; පසුව ඇතුළත් කිරීම් ඊළඟ ධාවනය තෙක් රැඳී සිටියි. මෙය ඇතුළත් කිරීමේ
සීමාවක් මිස දිගුකාලීන SQLite transaction එකක් නොවේ: ජාල රැඳී සිටීම් අතරතුර WAL ලියන්නන්ට සහ checkpoints වලට නිදහසේ
ක්රියා කළ හැක. පවතින පේළිවල යාවත්කාලීන/මකාදැමීම් මෙම සීමාව මඟින් ස්ථිර නොකෙරේ.

පිළිගත් සෑම කාණ්ඩයකටම පසුව, අනු ක්රියාවලිය පිළිගැනීමක් සඳහා රැඳී සිටියි. සේවාදායකය පළමුව
`advanceLogExportCursor` සමඟ කර්සරය ස්ථිර කර, පසුව `ack` යවයි; ඊට පෙර ඊළඟ කාණ්ඩය ආරම්භ නොවේ.
යැවීමේ අසාර්ථකත්වයක්, බිඳවැටීමක් හෝ කාලය ඉක්මවීමක් එම කාණ්ඩය ඉදිරියට ගෙන නොගොස් අසාර්ථකත්වයක් සටහන් කරයි. පෙර
පිළිගත් කාණ්ඩ commit වී පවතී; නැවත යැවිය හැක්කේ පිළිගැනීම නොලැබුණු එක් කාණ්ඩය පමණි.
සාර්ථකත්වය සටහන් කරන්නේ `done` ලැබීමෙන් සහ අනු ක්රියාවලිය පිරිසිදුව අවසන් වීමෙන් පසුව පමණි. අසාර්ථකත්වයන් අනු ක්රියාවලිය
SIGTERM සමඟ අවසන් කරයි, 500 ms පසුව SIGKILL වෙත තීව්ර කරයි, සහ ධාවකය ක්රියාවලිය වැසෙන තෙක් රැඳී සිටියි.

| පරිසර විචල්යය                                 | පෙරනිමිය | අරමුණ                                       |
| --------------------------------------------- | -------- | ------------------------------------------- |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000   | එක් ගමනාන්තයක wall-clock කාල සීමාව          |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024     | අනු ක්රියාවලියේ V8 old-space සීමාව MB වලින් |

වලංගු නොවන/ධන නොවන/පූර්ණ සංඛ්යා නොවන අගයන් සඳහා පෙරනිමි භාවිත වේ. heap සැකසුම සම්පූර්ණ
RSS සීමාවක් නොවේ; ඉතා විශාල කාණ්ඩවලට තවමත් අනු ක්රියාවලියේ මතකය අවසන් කර ධාවනය ආරක්ෂිතව අසාර්ථක කළ හැක.
1024 MB පෙරනිමිය, bodies සක්රීය කර ඇති 512 KiB artifacts අඩංගු පෙරනිමි පේළි 500 කාණ්ඩයට,
BigQuery හි byte-chunked JSON අනුක්රමීකරණය ද ඇතුළුව, අමතර ඉඩක් තබයි. එය
පේළි 10000 ක bodies කාණ්ඩයක් ආරක්ෂිත නොකරයි. V8 heap අවසන් වීම ක්රියාකළ හැකි අසාර්ථකත්වයක් සටහන් කරයි: කාණ්ඩ
ප්රමාණය අඩු කරන්න හෝ `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` වැඩි කරන්න; කර්සරය අවසන්
පිළිගත් කාණ්ඩයේම පවතී. ඓතිහාසික inline/disk bodies නවීන artifact සීමාවෙන් ආවරණය නොවේ.
විශේෂයෙන් මතක-සීමිත containers තුළ, ක්රියාකරුවන් RSS සඳහා වෙනම සැලසුම් කළ යුතුය.

අනු ක්රියාවලියට උරුම වන්නේ විසඳාගත් `DATA_DIR`, `NODE_ENV`, පැහැදිලි `TZ` (පැරණි ගොනු නාම
දේශීය-වේලා විසඳීම), පවතින විට `ELECTRON_RUN_AS_NODE`, සහ පහත outbound inputs පමණි:
`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (සහ ඒවායේ කුඩා අකුරු ආකාර),
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`.
ගෝලීය Undici dispatcher එකක් සේවාදායකයේ පිරිසිදු environment-proxy විසඳීම සහ local-host
bypass නීති, `NO_PROXY` ඇතුළුව, හවුලේ භාවිත කරයි; එය `proxyFetch.ts` හෝ එහි DB/feature flags ආයාත නොකරයි.
ඉදිරියට යැවෙන ප්රතිදානයෙන් සහ සටහන් කරන ලද දෝෂවලින් proxy අක්තපත්ර වසන් කෙරේ. ගමනාන්ත අක්තපත්ර
ගමන් කරන්නේ එක් ආරම්භක IPC පණිවිඩයක පමණි, argv හෝ environment හරහා කිසිවිටෙක නොවේ; ප්රතිදාන/දෝෂ ඉදිරියට යැවීමට
උපසර්ග එක් කර පිරිසිදු කෙරේ. සෑම cron ධාවනයකදීම Node හි SQLite අනතුරු ඇඟවීම නැවත දැක්වීම වැළැක්වීමට,
අනු ක්රියාවලියේ exec arguments තුළ අක්රීය කරන්නේ `ExperimentalWarning` පමණි; අනෙකුත් අනතුරු ඇඟවීම් දෘශ්යව පවතී.

ගමනාන්ත මොඩියුල Next.js/server-only පරායත්තතා නොමැතිව import කළ හැකි විය යුතුය. පවතින
BigQuery ක්රියාත්මක කිරීම දැනටමත් එම ගිවිසුම සපුරාලයි. Access-token caches පවතින්නේ child
run එක තුළ පමණක් වන අතර runs අතර නොපවතී. Node යනු සහාය දක්වන runtime එකයි (`package.json` engines), නමුත් README හි Bun
ස්ථාපන කොටස සහ `Dockerfile.bun` ද `bun:sqlite` භාවිත කරන නිෂ්පාදන අනුකූලතා මාර්ගයක්
(`src/lib/db/core.ts` / adapters) ප්රචාරය කරයි. එබැවින් Bun යටතේ, exports පෙර පැවති
in-process මාර්ගය රඳවාගෙන එක් වරක් පමණක් අනතුරු ඇඟවීමක් නිකුත් කරයි: child heap/timeout හුදකලා කිරීම ලබාගත නොහැක. Event-loop සහ OOM හුදකලා කිරීම සඳහා
Node භාවිත කරන්න; මෙහිදී Bun dev-only ලෙස නොසලකයි.

`includeBodies` සක්රීය කර ඇති විට, පැයක payload backlog එකක් රැස් කිරීම වෙනුවට
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"` වැනි මිනිත්තු මට්ටමේ කාලසටහනක් වඩාත් සුදුසුය.
Batch සහ row සීමා තවමත් එක් එක් run එක සීමා කරයි. එක් එක් run එකේ එක් එක් ගමනාන්තය සඳහා process startup පිරිවැය දැරිය යුතුය;
මෙය සම්පූර්ණ CPU භාවිතය අඩු කිරීමක් නොව, server event-loop හුදකලා කිරීම වෙනුවෙන් කුඩා startup පිරිවැයක් හුවමාරු කිරීමකි.

### Payloads (prompts සහ completions)

පෙරනිමියෙන් export එක රැගෙන යන්නේ Logs **list** එක පෙන්වන සාරාංශ fields පමණි. **Export prompts and responses** (`includeBodies`) සක්රීය කිරීමෙන්, එක් එක් call එක සඳහා Logs **detail**
pane එක පෙන්වන දෑ ද අමතරව යවයි:

| Field                            | එහි අඩංගු දේ                                                 |
| -------------------------------- | ------------------------------------------------------------ |
| `request_body` / `response_body` | Dashboard එක ඒවා render කරන ආකාරයේ call payloads             |
| `pipeline_route_decision`        | Router එක තෝරාගත් target සහ model එක                         |
| `pipeline_client_request`        | Client එක එවූ ආකාරයටම ඇති raw request එක                     |
| `pipeline_openai_request`        | අභ්යන්තර OpenAI හැඩයට පරිවර්තනය කිරීමෙන් පසු                 |
| `pipeline_provider_request`      | Provider dialect එකෙන් සැබවින්ම upstream වෙත යැවූ ආකාරය      |
| `pipeline_provider_response`     | Raw upstream response එක                                     |
| `pipeline_client_response`       | Caller වෙත ආපසු ලබාදුන් දේ                                   |
| `pipeline_error`                 | අසාර්ථක call එකක් සඳහා pipeline මට්ටමේ error විස්තර          |
| `bodies_truncated`               | ඉහත කිසියම් field එකක් `maxBodyBytes` සීමාවට ළඟා වූ විට True |

මෙය prompt අන්තර්ගතය බැවින්, එය **පෙරනිමියෙන් අක්රීයයි** සහ හිතාමතාම එක් එක් ගමනාන්තය අනුව තෝරාගත හැක.
Export කරන්නේ dashboard එක පෙන්වන දේමය, මන්ද export සහ `getCallLogById` එකම detail
resolution එක බෙදාගනී: payloads ලියන අවස්ථාවේදීම
PII-sanitised සහ secret-redacted කර ඇති අතර, `noLog` API key එකක් සමඟ කරන ලද call එකක් කිසිදු payload එකක් ගබඩා නොකරන බැවින් export කිරීමට කිසිවක් නොමැත.

Payloads filesystem artifact එකෙන් row එක බැගින් කියවනු ලබන බැවින් hydration ක්රියාත්මක වන්නේ එය ඉල්ලා ඇති ගමනාන්ත සඳහා පමණි.
නොමැති හෝ දූෂිත artifact එකක් batch එක අසාර්ථක කර cursor එක සිරකර තැබීම වෙනුවට, null payloads සමඟ එහි සාරාංශය export කරයි.

`maxBodyBytes` (පෙරනිමිය 262144) එක් එක් field එක සීමා කරයි. දිගු payloads **ඉවත් කිරීම වෙනුවට
කප්පාදු කරනු ලැබේ** — කප්පාදු කළ prompt එකක් වුවත් "ඉල්ලා සිටියේ කුමක්ද" යන්නට පිළිතුරු දෙයි — සහ row එක
`bodies_truncated` මඟින් සලකුණු කරයි. Stream කරන ලද chunk-by-chunk deltas export නොකෙරේ; එකලස් කළ response එක
දැනටමත් `pipeline_provider_response` සහ `pipeline_client_response` තුළ ඇත.

---

## 2. ගොනු

| කොටස                     | පිහිටීම                                      |
| ------------------------ | -------------------------------------------- |
| ගමනාන්ත කොන්ත්රාත්තුව    | `src/lib/logExport/types.ts`                 |
| රෙජිස්ට්රිය              | `src/lib/logExport/registry.ts`              |
| රහස් හැසිරවීම            | `src/lib/logExport/secrets.ts`               |
| ධාවකය (මව් IPC)          | `src/lib/logExport/runner.ts`                |
| ක්රියාවලි ජීවන චක්රය     | `src/lib/logExport/childRunner.ts`           |
| උප ක්රියාවලි පිවිසුම     | `src/lib/logExport/exportChild.ts`           |
| කියවීමට පමණක් වන විවෘතකය | `src/lib/db/logExportReadOnly.ts`            |
| හවුල් විමසුම/අනුරූපණය    | `src/lib/usage/callLogExportQueries.ts`      |
| විස්තර නිරාකරණය          | `src/lib/usage/callLogDetailResolver.ts`     |
| API ප්රක්ෂේපණය           | `src/lib/logExport/presenter.ts`             |
| BigQuery ගමනාන්තය        | `src/lib/logExport/destinations/bigquery.ts` |
| Google SA සත්යාපනය       | `src/lib/logExport/googleServiceAccount.ts`  |
| ඇමතුම්-ලොග් මූලාශ්රය     | `src/lib/usage/callLogExportSource.ts`       |
| ස්ථායි ගබඩාකරණය          | `src/lib/db/logExportDestinations.ts`        |
| Cron කාර්යය              | `src/lib/jobs/logExportJob.ts`               |
| REST ස්තරය               | `src/app/api/log-export/`                    |
| උපකරණ පුවරු පිටුව        | `src/app/(dashboard)/dashboard/log-export/`  |

යෝජනා ක්රමය: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

සියලුම මාර්ග කළමනාකරණ-සත්යාපිතයි (`requireManagementAuth`). රහස් කිසි විටෙක ආපසු ලබා නොදේ:
ගබඩා කළ රහසක් `__stored__` යන වචනාර්ථ අගය ලෙස ආපසු ලැබෙන අතර, යාවත්කාලීන කිරීමකදී එම අගයම නැවත යැවීමෙන්
ගබඩා කළ අක්තපත්රය එලෙසම තබා ගනී.

රහසක් ප්රකාශ කරන වර්ගයක ගමනාන්තයක් සෑදීම හෝ යාවත්කාලීන කිරීම සඳහා **`STORAGE_ENCRYPTION_KEY`
අවශ්ය වේ**. එය නොමැතිව `encrypt()` නිහඬව වෙනසක් නොකර අගය හරහා යවන බැවින්, අක්තපත්රයක්
සරල පෙළ ලෙස SQLite තුළ තැබීම වෙනුවට ලිවීම 400 සමඟ ප්රතික්ෂේප කෙරේ (Telegram webhook එක යොදන ආරක්ෂණයමයි).

| ක්රමය    | මාර්ගය                                   | අරමුණ                                                         |
| -------- | ---------------------------------------- | ------------------------------------------------------------- |
| `GET`    | `/api/log-export/types`                  | ගමනාන්ත වර්ග + ඒවායේ වින්යාස ක්ෂේත්ර ලැයිස්තුව                |
| `GET`    | `/api/log-export/destinations`           | ගමනාන්ත ලැයිස්තුගත කිරීම (රහස් සඟවා ඇත)                       |
| `POST`   | `/api/log-export/destinations`           | ගමනාන්තයක් සෑදීම                                              |
| `GET`    | `/api/log-export/destinations/{id}`      | එකක් කියවීම                                                   |
| `PUT`    | `/api/log-export/destinations/{id}`      | නම / සක්රීය තත්ත්වය / වින්යාසය / කාණ්ඩකරණය යාවත්කාලීන කිරීම   |
| `DELETE` | `/api/log-export/destinations/{id}`      | මකා දැමීම                                                     |
| `POST`   | `/api/log-export/destinations/{id}/test` | අක්තපත්ර පරීක්ෂා කිරීම, කිසිවක් නොලියයි                       |
| `POST`   | `/api/log-export/destinations/{id}/run`  | දැන් හිස් කිරීම, කාලසටහන්ගත ධාවනයේ මාර්ගයම භාවිත කරයි         |
| `GET`    | `/api/log-export/status`                 | Cron තත්ත්වය, මෑත ධාවන, එක් එක් ඉලක්කයේ පසුබැසුණු වැඩ ප්රමාණය |

UI එක සාමාන්යකරණය කරන්නේ `GET /api/log-export/types` ය: උපකරණ පුවරුවේ පෝරමය
ආපසු ලැබෙන ක්ෂේත්ර විස්තරකවලින් නිර්මාණය වන බැවින්, නව ගමනාන්තයක් සඳහා UI වෙනසක් අවශ්ය නොවේ.

---

## 4. BigQuery ගමනාන්තය

වින්යාස යතුරු (`type: "bigquery"`):

| යතුර                 | සටහන්                                                                         |
| -------------------- | ----------------------------------------------------------------------------- |
| `projectId`          | දත්ත කට්ටලය අඩංගු GCP ව්යාපෘතිය                                               |
| `datasetId`          | `[A-Za-z0-9_]+`                                                               |
| `tableId`            | `[A-Za-z0-9_]+`                                                               |
| `location`           | දත්ත කට්ටලය සෑදිය යුතු විට පමණක් භාවිත වේ (පෙරනිමිය `EU`)                     |
| `serviceAccountJson` | සේවා-ගිණුම් යතුර. රහසකි: ගබඩා කිරීමේදී සංකේතනය කරයි, කිසි විටෙක ආපසු ලබා නොදේ |
| `autoCreate`         | පළමු අපනයනයේදී දත්ත කට්ටලය සහ වගුව සාදන්න (පෙරනිමිය `true`)                   |

සේවා ගිණුමට ඉලක්ක වගුව මත `bigquery.tables.updateData` අවශ්ය වන අතර,
`autoCreate` සක්රීය විට `bigquery.datasets.create` / `bigquery.tables.create` ද අවශ්ය වේ.

වින්යාස කළ කාණ්ඩයක් HTTP ඒකකයක් නොව **කර්සර** ඒකකයකි: `send()` එය උපරිම පේළි 500 බැගින් වූ
insertAll ඇමතුම්වලට බෙදන බැවින්, විශාල `batch_size` අගයකට BigQuery හි 10 MB ඉල්ලීම් සීමාව ඉක්මවා යා නොහැක.
තාවකාලික තත්ත්ව (408/429/500/502/503/504) ඝාතීය ප්රමාදයක් සමඟ උපරිම වාර තුනක් නැවත උත්සාහ කරයි,
එම insertIds ම නැවත භාවිත කරමින්; සත්යාපන සහ යෝජනා ක්රම දෝෂ ධාවනය නාස්ති කිරීම වෙනුවට පළමු උත්සාහයේදීම
ව්යතිරේකයක් නිකුත් කරයි.

මොහොතකට පෙර සෑදූ වගුවක් තවමත් ප්රවාහ අන්ත ලක්ෂ්යයට දෘශ්ය නොවන බැවින්, එය තත්පර කිහිපයක්
404 ප්රතිචාර දෙයි. එම 404 සඳහා නැවත උත්සාහ කරයි, නමුත් **මෙම ධාවනය වගුව සෑදූ විට පමණි** —
සැබවින්ම නොමැති වගුවක් තවමත් වහාම අසාර්ථක වේ. මෑතකදී මකා දැමූ නමක් යටතේ වගුවක් නැවත සෑදීමෙන්
BigQuery මිනිත්තු කිහිපයක් ප්රවාහ ඇතුළත් කිරීම් ප්රතික්ෂේප කරන බව සලකන්න; එය මකා-ඉන්පසු-නැවත-සෑදීමේ
ලක්ෂණයක් වන බැවින්, එකක් ඉවත් කර නැවත එක් කිරීම වෙනුවට නව වගු නමක් භාවිත කිරීමට ප්රමුඛත්වය දෙන්න.

**අර්ධ අසාර්ථකත්වයක් හිස් නොවන `insertErrors[]` එකක් සහිත HTTP 200 ලෙස ලැබේ.** එය අසාර්ථකත්වයක් ලෙස
සලකා ව්යතිරේකයක් නිකුත් කරයි; එමඟින් BigQuery කිසිදා පිළි නොගත් පේළි පසුකර කර්සරය ඉදිරියට යාම නවතී;
`tests/unit/log-export-bigquery.test.ts` මෙම හැසිරීම ස්ථිර කරයි.

ප්රවාහනය සරල REST වේ — ස්වයං-අත්සන් කළ RS256 ප්රකාශයක්
`https://oauth2.googleapis.com/token` හි ප්රවේශ ටෝකනයක් සඳහා හුවමාරු කර, ඉන්පසු පේළි `tabledata.insertAll` වෙත යවයි. කිසිදු Google SDK එකක්
ඇතුළත් කර නොගනී. ප්රවේශ ටෝකන එක් එක් (සේවා ගිණුම, විෂය පථය) සඳහා ක්රියාවලිය තුළ හැඹිලිගත කරයි.

සාදන ලද වගුවේ Logs පටිත්තේ එක් එක් ක්ෂේත්රයට තීරුවක් සහ `exported_at` ඇතුළත් වන අතර,
ඇමතුම් ලොග් සැබවින්ම විමසන ආකාරයට එය සකසා ඇත:

- **`timestamp` මත දින අනුව කොටස් කර ඇත**, එබැවින් දිනයෙන් සීමා කළ විමසුමක් පරිලෝකනය කරන්නේ එම දින පමණි.
- **`api_key_name`, `provider`, `model`, `status` අනුව සමූහගත කර ඇත** (එම අනුපිළිවෙළට), එබැවින්
  එය ධාවනය කළේ කවුද, එය ගියේ කොතැනටද, හෝ එය අසාර්ථක වූයේද යන්න අනුව පෙරීමෙන් එක් එක් කොටස තුළ ඇති කොටස් ඉවත් කරයි. BigQuery
  උපරිම සමූහකරණ තීරු හතරක් පමණක් ඉඩ දෙන අතර අනුපිළිවෙළ වැදගත් වේ: `api_key_name` මත පමණක් පෙරහනක්
  කොටස් ඉවත් කරයි, `status` මත පමණක් පෙරහනක් එසේ නොකරයි.
- **විකල්ප කොටස් රඳවාගැනීම** `partitionExpirationDays` හරහා (0 සියල්ල තබා ගනී), වගුව
  සාදන විට යොදනු ලැබේ.

සැකසුම් දෙකම නිර්මාණය කරන අවස්ථාවේදී අදාළ වේ. පවතින වගුවක් එයට දැනටමත් ඇති පිරිසැලසුම එලෙසම තබා ගනී, එබැවින්
ඒවා භාවිතයට ගැනීමට අවශ්ය නම් ගමනාන්තය නව වගු id එකකට යොමු කරන්න.

`tests/unit/log-export-bigquery.test.ts` මඟින් mapper එක සහ වගු schema එක එකිනෙකට සමපාතව පවතින බව තහවුරු කරන බැවින්, නව call-log තීරුවක් පිටතට යන අතරතුර නිහඬව ඉවත් විය නොහැක.

කණ්ඩායම් **පේළි ගණන** සහ අනුක්රමිකකරණය කළ බයිට් යන දෙකම අනුව කොටස්වලට බෙදේ. payload අපනයනය කරන විට පේළි ගණන පමණක් ප්රමාණවත් නොවේ: prompts රැගෙන යන පේළි 500ක් මෙගාබයිට් දස ගණනක් විය හැකි අතර, 10 MB ඉක්මවන ඉල්ලීමක් insertAll මඟින් ප්රතික්ෂේප කරයි. පේළි 500ක් හෝ 9 MB සීමාවට ළඟා වූ විට—පළමුව සිදුවන අවස්ථාවේදී—කොටස් අවසන් කෙරේ.

---

## 5. ගමනාන්තයක් එක් කිරීම

1. `LogExportDestinationType` එකක් export කරන `src/lib/logExport/destinations/<name>.ts` සාදන්න:
   Zod `configSchema` එකක්, UI සඳහා `fields` විස්තරකාරක array එකක්, `secretFields`, සහ
   `test()` / `prepare()` / `send(records)` ආපසු ලබා දෙන `createClient(config)` එකක්.
2. එය `src/lib/logExport/registry.ts` හි `DESTINATIONS` array එකට එක් කරන්න.
3. `tests/unit/` යටතේ පරීක්ෂණ ලියන්න.

සම්පූර්ණ වෙනස එපමණයි: දත්ත ස්ථීරව ගබඩා කිරීම, cron job එක, REST ස්තරය, රහස් සංකේතනය සහ
dashboard පෝරමය යන සියල්ල registry එක කියවයි.

නව ගමනාන්තයක් සඳහා නීති දෙකක්:

- අර්ධ අසාර්ථකත්වයකදී `send()` **අනිවාර්යයෙන්ම throw කළ යුතුය**. එය සාර්ථකව resolve වීම යනු "ගමනාන්තය සතුව මෙම පේළි ඇත" යන්නයි,
  එවිට cursor එක ඒවා පසුකර ස්ථිරවම ඉදිරියට යයි.
- පරිශීලකයා සපයන URL එකක් භාවිත කරන ගමනාන්තයක්, fetch කිරීමට පෙර,
  webhooks කරන ආකාරයටම `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`) හරහා එය වලංගු කළ යුතුය.
  BigQuery සඳහා මෙය අවශ්ය නොවේ: එහි hosts නියත අගයන් වේ.

---

## 6. එය ක්රියාත්මක කිරීම

- **Dashboard**: Integrations → Log export. ගමනාන්තයක් එක් කර, පේළි නොලියා credentials පරීක්ෂා කිරීමට **Test** ක්රියාත්මක කර,
  ඉන්පසු එය සක්රිය කරන්න.
- **Backlog**: සෑම ගමනාන්ත card එකකම pending පේළි සහ cursor එක පෙන්වයි; `GET
/api/log-export/status` මඟින් එම සංඛ්යා සහ අවසන් job runs 20 ද ලබා දෙයි.
- **එක් ගමනාන්තයක් අසාර්ථක වීමෙන් අනෙක් ඒවා අසාර්ථක නොවේ** — run summary එක `last_status` / `last_error` තුළ එක් එක් ගමනාන්තයේ
  status එක සටහන් කරන අතර, job run history එක සමස්ත ප්රතිඵලය තබා ගනී.
- **ගමනාන්තයක් මකා දැමීමෙන් එහි cursor එකද මැකේ.** එය නැවත එක් කළ විට, රඳවා තබා ඇති පැරණිතම
  call log එකෙන් ආරම්භ වන අතර, ගමනාන්තය සතුව දැනටමත් තිබිය හැකි පේළි නැවත යවයි. BigQuery තුළ එක් එක් පේළියේ
  `insertId` මඟින් එය අවශෝෂණය කරන්නේ BigQuery හිම de-duplication කාල කවුළුව තුළ පමණක් බැවින්, ගමනාන්තයක් මකා දැමීමට වඩා
  එය අක්රිය කිරීම වඩාත් සුදුසුය.
