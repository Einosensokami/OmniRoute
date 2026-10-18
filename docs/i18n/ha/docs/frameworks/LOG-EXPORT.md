# Log export (Hausa)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

Fitar da rajistan kiran OmniRoute zuwa ma'ajiyar nazari ta waje secara ci gaba kuma a matakai.

Shafin dashboard na Logs yana adana tarihin buƙatu a SQLite (`call_logs`), wanda ake iyakancewa ta hanyar
juyawa da tsare bayanai. Fitar da rajista tana aika wannan tarin bayanan a kan jadawali domin ya daɗe fiye da
ma'ajiyar bayanai ta gida kuma a iya haɗa shi da wasu bayanai. BigQuery ita ce manufa ta farko;
bututun sarrafawar rajista ne, don haka za a iya ƙara ƙarin wuraren manufa.

---

## 1. Yadda yake aiki

```
sabar (warware ɓoyewa + tabbatar da config, daidaita cursor)
  → fara IPC → keɓantaccen tsarin OS na exportChild
    → storage.sqlite na karantawa-kawai → tambaya/daidaita call-log da aka raba
      → cika artifact ta async → destination prepare()/send()
        → IPC na batch → sabar ta adana cursor → IPC na ack
          → batch na gaba; IPC na done → sabar ta rubuta nasara
```

- **Jadawali** — aikin cron guda ɗaya na `JobRegistry`, `log_export`, wanda tsohon ƙimarsa ita ce `0 * * * *` (kowace awa,
  UTC). Ana yi masa rajista a `src/lib/initCloudSync.ts`; ana iya sauya shi da `OMNIROUTE_LOG_EXPORT_CRON`.
  Kowace tick tana fitar da bayanan kowace destination da aka **kunna**, ɗaya bayan ɗaya.
- **Cursor** — `call_logs.rowid` na ɓoye na SQLite, wanda ake adanawa ga kowace destination a
  `log_export_destinations.cursor_row_id`. Da gangan ba a amfani da `timestamp` a matsayin cursor: masu kira
  na iya bayar da ƙimarsu, don haka ana iya rubuta request mai jinkiri bayan wanda ya fi sauri da ya fara
  daga baya, kuma cursor na timestamp zai tsallake shi.
- **Rarraba batch** — layuka `batch_size` a kowane request (tsohuwar ƙima 500), layuka `max_rows_per_run` a kowane run
  (tsohuwar ƙima 10000), ta yadda za a fitar da tarin bayanai mai yawa a tick da dama maimakon ya toshe guda ɗaya.
- **Isarwa** — cursor yana ci gaba ne kawai bayan `send()` ya kammala. Batch da ya gaza yana barin
  cursor a inda yake, don haka za a sake gwada layukan a run na gaba. Garantin shi ne
  aƙalla-sau-ɗaya tare da cire maimaituwa a ɓangaren destination, ba ainihin sau-ɗaya-takal ba: BigQuery yana sanya wa kowane
  layi maɓalli ta amfani da id na call-log, wanda yake mutuntawa gwargwadon ƙoƙari a cikin tagar cire maimaituwarsa.
- **Kariyar haɗuwar lokaci** — tick na cron da `POST .../run` na iya faruwa tare. Ana tsallake destination
  da ake kan fitar da ita maimakon a fitar da ita sau biyu (`skipped: true` a sakamakon run),
  don haka run da ke gudana lokaci guda ba zai iya sake aika batch ko mayar da cursor baya ba.
- **Farfadowa bayan gogewa** — idan `cursor_row_id` ya ƙare sama da `MAX(rowid)` (an
  share dukkan teburin kuma rowids sun sake farawa), runner zai mayar da shi zuwa 0 maimakon ya daina ganin bayanai har abada.

### Keɓantaccen runner da iyakoki

Kowane run na destination a Node yana fara wani keɓantaccen tsarin OS na ɗan lokaci (`child_process`
tare da IPC, ba `worker_threads` ba). Karanta body, parsing/serialization na payload JSON, `prepare()`
na destination da network I/O na destination duk suna gudana a can, ba a event loop na sabar ba.
Configuration da ƙananan saƙonnin ci gaba kawai ke wucewa ta IPC; bayanan da aka fitar ba sa komawa
sabar. Aikin cron da route na Run now suna riƙe da sakamakon jama'a da kariyar haɗuwar lokaci iri ɗaya.

Child yana buɗe `DATA_DIR/storage.sqlite` da sabar ta warware a yanayin karantawa-kawai ta amfani da `node:sqlite`,
tare da `busy_timeout=5000` da `query_only=ON`. Ba ya import ɗin DB singleton kuma ba ya yin
migrations, backups ko sabuntawar SQLite. Kula da artifact da ya ɓace/lalata (ciki har da
UPDATE na corrupt-artifact) yana nan ne kawai a hanyar bayanan dashboard. Duk hanyoyin biyu suna amfani da pure
detail resolver guda ɗaya; export yana amfani da karatun filesystem na asynchronous da tsarin warwarewa iri ɗaya na artifact → legacy
inline → legacy disk → none. Run yana ɗaukar snapshot na mafi girman rowid na shigarwa
lokacin da child ya buɗe reader ɗinsa; sabbin shigarwa daga baya suna jira har run na gaba. Wannan iyakar
shigarwa ce, ba dogon transaction na SQLite ba: masu rubutun WAL da checkpoints suna ci gaba da walwala yayin
jiran network. Wannan iyaka ba ta daskarar da sabuntawa/gogewar layukan da suke akwai ba.

Bayan kowane batch da aka karɓa, child yana jiran amincewa. Da farko sabar tana adana
cursor da `advanceLogExportCursor`, sannan ta aika `ack`; ba a fara batch na gaba kafin wannan ba.
Gazawar aikawa, crash ko timeout suna rubuta gazawa ba tare da ciyar da batch ɗin gaba ba. Batch-batch ɗin da aka
amince da su a baya suna ci gaba da kasancewa committed; aƙalla batch guda ɗaya da ba a amince da shi ba ne kawai za a iya sake aikawa.
Ana rubuta nasara ne kawai bayan `done` da fitar child cikin tsabta. Gazawa tana dakatar da child
da SIGTERM, sannan ta koma SIGKILL bayan 500 ms, kuma runner yana jiran rufewar process.

| Environment variable                          | Tsohuwar ƙima | Manufa                                     |
| --------------------------------------------- | ------------- | ------------------------------------------ |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000        | Iyakar lokaci ga kowace destination        |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024          | Iyakar old-space ta V8 ga child a cikin MB |

Ƙimomi marasa inganci/marasa kyau/marasa zama cikakkun lambobi suna amfani da tsoffin ƙimomi. Saitin heap ba cikakkiyar
iyakar RSS ba ce; batch masu girma ƙwarai za su iya cinye memory na child su sa run ya gaza cikin aminci.
Tsohuwar ƙimar 1024 MB tana barin sarari ga tsohon batch na layuka 500 na artifact masu 512 KiB tare da
kunna bodies, gami da serialization na JSON da BigQuery ke yi bisa gutsattsarin byte. Ba ta sa
batch na bodies mai layuka 10000 ya zama mai aminci ba. Ƙarewar heap ta V8 tana rubuta gazawa da za a iya gyarawa: rage girman
batch ko ƙara `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB`; cursor yana nan a batch na ƙarshe
da aka amince da shi. Historical inline/disk bodies ba sa ƙarƙashin iyakar artifact ta zamani.
Dole ne operators su tsara kasafin RSS daban, musamman a cikin containers masu iyakantaccen memory.

Child yana gado ne kawai daga resolved `DATA_DIR`, `NODE_ENV`, explicit `TZ` (warware legacy filename
bisa local-time), `ELECTRON_RUN_AS_NODE` idan yana nan, da waɗannan outbound inputs:
`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (da siffofinsu na lowercase),
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`.
Global Undici dispatcher yana amfani da pure environment-proxy resolution na sabar da ƙa'idojin
kauce wa local-host, gami da `NO_PROXY`; ba ya import ɗin `proxyFetch.ts` ko DB/feature flags nasa.
Ana ɓoye proxy credentials daga output da aka tura da errors da aka rubuta. Credentials na destination
suna tafiya ne kawai a cikin saƙon IPC na farawa guda ɗaya, ba a argv ko environment ba; tura output/error yana
da prefix kuma an tsabtace shi. `ExperimentalWarning` kawai ake kashewa a child exec arguments domin guje wa
maimaita gargaɗin SQLite na Node a kowane run na cron; sauran nau'ikan warning suna ci gaba da kasancewa a bayyane.

Dole ne a iya shigo da manhajojin manufa ba tare da dogaro da Next.js/abubuwan da ake amfani da su a uwar garke kaɗai ba. Aiwatarwar
BigQuery da ake da ita ta riga ta cika wannan ƙa’ida. Ma’ajiyar wucin gadi ta access-token tana aiki ne kawai na tsawon
gudanarwar child ɗin, ba ta ci gaba daga wata gudanarwa zuwa wata ba. Node ne runtime da ake tallafawa (`package.json` engines), amma sashen
shigar da Bun na README da `Dockerfile.bun` suna kuma nuna wata hanyar dacewa da yanayin samarwa da ke amfani da
`bun:sqlite` (`src/lib/db/core.ts` / adapters). Saboda haka, a ƙarƙashin Bun, exports suna ci gaba da amfani da hanyar
in-process ta baya kuma suna fitar da gargaɗi sau ɗaya: babu killacewar heap/timeout ta child. Yi amfani da
Node don killace event-loop da OOM; ba a ɗauki Bun a matsayin na dev-only a nan ba.

Lokacin da aka kunna `includeBodies`, fi son jadawalin kowane ƴan mintuna kamar
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"` maimakon tara bayanan payload na tsawon awa guda.
Iyakokin batch da row har yanzu suna iyakance kowace gudanarwa. Ana biyan kuɗin fara process ga kowace manufa a kowace gudanarwa;
wannan yana musanya ƙaramin kuɗin farawa da killace event-loop na uwar garke, ba rage jimillar amfani da CPU ba.

### Payloads (prompts da completions)

A tsoho, export ɗin yana ɗauke ne kawai da filayen taƙaitawa da jerin **list** na Logs ke nunawa. Kunna
**Export prompts and responses** (`includeBodies`) yana kuma aika abin da ɓangaren **detail** na Logs
ke nunawa ga kowace kira:

| Field                            | Abin da yake ɗauke da shi                                          |
| -------------------------------- | ------------------------------------------------------------------ |
| `request_body` / `response_body` | Payloads na kiran yadda dashboard ke nuna su                       |
| `pipeline_route_decision`        | Target da model da router ya zaɓa                                  |
| `pipeline_client_request`        | Raw request daidai yadda client ya aika da shi                     |
| `pipeline_openai_request`        | Bayan fassara shi zuwa tsarin OpenAI na ciki                       |
| `pipeline_provider_request`      | Yadda aka aika da shi upstream a zahiri, cikin tsarin provider     |
| `pipeline_provider_response`     | Raw response na upstream                                           |
| `pipeline_client_response`       | Abin da aka mayar wa mai kiran                                     |
| `pipeline_error`                 | Cikakken bayani na kuskuren matakin pipeline ga kira da ya gaza    |
| `bodies_truncated`               | True idan wani daga cikin filayen da ke sama ya kai `maxBodyBytes` |

Wannan abun cikin prompt ne, don haka yana **a kashe a tsoho** kuma da gangan zaɓi ne na kowace manufa.
Abin da ake aika shi ne abin da dashboard ke nunawa, domin export da `getCallLogById` suna amfani da hanyar
warware cikakkun bayanai iri ɗaya: an riga an
cire PII daga payloads tare da ɓoye sirrika lokacin da ake rubuta su, kuma kira da aka yi da maɓallin API mai
`noLog` ba ya adana kowane payload kwata-kwata, don haka babu abin da za a export.

Ana karanta payloads ga kowace row daga artifact na filesystem, don haka hydration yana gudana ne kawai ga manufofin
da suka buƙace shi. Idan artifact ya ɓace ko ya lalace, za a export da taƙaitawarsa tare da null payloads
maimakon batch ya gaza ya kuma bar cursor makale.

`maxBodyBytes` (tsoho 262144) yana iyakance kowane field. Ana **datse payloads masu tsawo maimakon
watsar da su** — prompt da aka yanke har yanzu yana amsa "me aka tambaya" — kuma ana yi wa row alama da
`bodies_truncated`. Ba a export da deltas da aka watsa chunk-by-chunk; assembled response ya
riga ya kasance a cikin `pipeline_provider_response` da `pipeline_client_response`.

---

## 2. Fayiloli

| Sashi                             | Wuri                                         |
| --------------------------------- | -------------------------------------------- |
| Kwangilar manufa                  | `src/lib/logExport/types.ts`                 |
| Rajista                           | `src/lib/logExport/registry.ts`              |
| Gudanar da sirrika                | `src/lib/logExport/secrets.ts`               |
| Mai gudanarwa (IPC na uwar tsari) | `src/lib/logExport/runner.ts`                |
| Zagayowar rayuwar tsari           | `src/lib/logExport/childRunner.ts`           |
| Mashigar ƙaramin tsari            | `src/lib/logExport/exportChild.ts`           |
| Mai buɗewa na karantawa kawai     | `src/lib/db/logExportReadOnly.ts`            |
| Tambaya/daidaitawa ta bai ɗaya    | `src/lib/usage/callLogExportQueries.ts`      |
| Mai warware cikakkun bayanai      | `src/lib/usage/callLogDetailResolver.ts`     |
| Tsarawar API                      | `src/lib/logExport/presenter.ts`             |
| Manufar BigQuery                  | `src/lib/logExport/destinations/bigquery.ts` |
| Tantancewar Google SA             | `src/lib/logExport/googleServiceAccount.ts`  |
| Tushen rajistar kira              | `src/lib/usage/callLogExportSource.ts`       |
| Adana bayanai                     | `src/lib/db/logExportDestinations.ts`        |
| Aikin Cron                        | `src/lib/jobs/logExportJob.ts`               |
| Matakin REST                      | `src/app/api/log-export/`                    |
| Shafin dashboard                  | `src/app/(dashboard)/dashboard/log-export/`  |

Tsarin bayanai: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

Duk hanyoyin suna buƙatar tantancewar gudanarwa (`requireManagementAuth`). Ba a taɓa dawo da bayanan sirri:
ana dawo da sirrin da aka adana a matsayin ainihin `__stored__`, kuma aika wannan ƙimar a lokacin sabuntawa
yana riƙe bayanan tantancewar da aka adana.

Ƙirƙira ko sabunta manufa wadda nau'inta ya ayyana sirri **yana buƙatar
`STORAGE_ENCRYPTION_KEY`**. Idan babu shi, `encrypt()` yana wuce bayanin ba tare da wani canji ba, saboda haka
ana ƙin rubutawar da 400 maimakon saka bayanan tantancewa cikin SQLite a matsayin rubutu marar ɓoyewa (irin kariyar da
webhook na Telegram yake amfani da ita).

| Hanya    | Tafarki                                  | Manufa                                                             |
| -------- | ---------------------------------------- | ------------------------------------------------------------------ |
| `GET`    | `/api/log-export/types`                  | Nau'ikan manufa + jerin filayen daidaitawarsu                      |
| `GET`    | `/api/log-export/destinations`           | Jera manufofi (an ɓoye bayanan sirri)                              |
| `POST`   | `/api/log-export/destinations`           | Ƙirƙiri manufa                                                     |
| `GET`    | `/api/log-export/destinations/{id}`      | Karanta guda ɗaya                                                  |
| `PUT`    | `/api/log-export/destinations/{id}`      | Sabunta suna / kunnawa / daidaitawa / haɗa-rukuni                  |
| `DELETE` | `/api/log-export/destinations/{id}`      | Share                                                              |
| `POST`   | `/api/log-export/destinations/{id}/test` | Gwada bayanan tantancewa, kada a rubuta komai                      |
| `POST`   | `/api/log-export/destinations/{id}/run`  | Kwashe yanzu, ta hanya ɗaya da gudanarwar da aka tsara             |
| `GET`    | `/api/log-export/status`                 | Halin Cron, gudanarwa na baya-bayan nan, tarin aikin kowane manufa |

`GET /api/log-export/types` ne yake sa UI ya zama na gama-gari: ana gina fom ɗin dashboard daga
bayanan filaye da aka dawo da su, don haka sabuwar manufa ba ta buƙatar wani canji ga UI.

---

## 4. Manufar BigQuery

Maɓallan daidaitawa (`type: "bigquery"`):

| Maɓalli              | Bayani                                                                          |
| -------------------- | ------------------------------------------------------------------------------- |
| `projectId`          | Aikin GCP da ke ɗauke da dataset                                                |
| `datasetId`          | `[A-Za-z0-9_]+`                                                                 |
| `tableId`            | `[A-Za-z0-9_]+`                                                                 |
| `location`           | Ana amfani da shi ne kawai idan dole ne a ƙirƙiri dataset (tsoho `EU`)          |
| `serviceAccountJson` | Maɓallin service-account. Sirri: an ɓoye shi yayin ajiya, ba a taɓa dawo da shi |
| `autoCreate`         | Ƙirƙiri dataset da table a fitarwa ta farko (tsoho `true`)                      |

Service account yana buƙatar `bigquery.tables.updateData` a kan table ɗin da aka nufa, tare da
`bigquery.datasets.create` / `bigquery.tables.create` lokacin da aka kunna `autoCreate`.

Rukunin da aka daidaita naúrar **cursor** ce, ba ta HTTP ba: `send()` yana raba shi zuwa kiraye-kirayen insertAll
masu layuka aƙalla 500, don haka babban `batch_size` ba zai iya karya iyakar buƙata ta 10 MB ta BigQuery ba.
Ana sake gwada halayen wucin gadi (408/429/500/502/503/504) har sau uku tare da ƙara lokacin jira a hankali,
ana sake amfani da insertIds iri ɗaya; gazawar tantancewa da tsarin bayanai suna jefa kuskure tun a gwajin farko
maimakon ɓata gudanarwar.

Table da aka ƙirƙira ƴan daƙiƙu da suka wuce bai riga ya bayyana ga streaming endpoint ba, wanda ke amsawa da
404 na ƴan daƙiƙu. Ana sake gwada wannan 404, amma **kawai idan wannan gudanarwar ce ta ƙirƙiri table ɗin** —
table da babu shi da gaske zai gaza nan take. Ka lura cewa sake ƙirƙirar table da sunan wanda
aka goge kwanan nan yana sa BigQuery ya ƙi streaming inserts na tsawon mintuna da dama; wannan
siffa ce ta gogewa-sannan-sake-ƙirƙirawa, don haka ya fi kyau a yi amfani da sabon sunan table maimakon gogewa da sake ƙara shi.

**Gazawar wani ɓangare tana zuwa a matsayin HTTP 200 tare da `insertErrors[]` wanda ba fanko ba.** Ana ɗaukar wannan a matsayin
gazawa kuma yana jefa kuskure, wanda ke hana cursor ci gaba ya wuce layukan da BigQuery bai taɓa
karɓa ba; `tests/unit/log-export-bigquery.test.ts` yana tabbatar da wannan halayya.

Hanyar jigilar bayanai REST ce kai tsaye — ana musanya ikirarin RS256 da aka sanya wa hannu da kansa da access token a
`https://oauth2.googleapis.com/token`, sannan layuka su tafi zuwa `tabledata.insertAll`. Ba a haɗa wani Google SDK ba.
Ana adana access tokens na ɗan lokaci a cikin tsarin aiki ga kowane (service account, scope).

Table da aka ƙirƙira yana ɗauke da ginshiƙi ɗaya ga kowane filin shafin Logs tare da `exported_at`, kuma an tsara shi
bisa yadda ake binciken rajistan kira a zahiri:

- **An raba shi bisa rana a kan `timestamp`**, don haka binciken da aka iyakance da kwanan wata yana binciken waɗannan ranakun kawai.
- **An haɗa shi rukuni bisa `api_key_name`, `provider`, `model`, `status`** (a wannan jeri), don haka tacewa bisa
  wanda ya gudanar da shi, inda ya tafi, ko ko ya gaza tana cire tubalan da ba su dace ba a cikin kowane partition. BigQuery
  yana ba da damar ginshiƙan clustering guda huɗu aƙalla kuma tsarin jeri yana da muhimmanci: tacewa bisa `api_key_name` kaɗai
  tana cirewa, amma tacewa bisa `status` kaɗai ba ta yi.
- **Riƙewar partition na zaɓi** ta hanyar `partitionExpirationDays` (0 yana riƙe komai), ana amfani da ita
  lokacin da aka ƙirƙiri table.

Dukkan saitunan biyu suna aiki ne a lokacin ƙirƙirawa. Teburin da yake akwai yana riƙe da tsarin da yake da shi, don haka
ka nuna wurin da za a aika zuwa sabon id na tebur idan kana son amfani da su.

`tests/unit/log-export-bigquery.test.ts` yana tabbatar da cewa mai daidaitawa da tsarin tebur suna ci gaba da
daidaituwa sosai, don haka ba za a iya watsar da sabon ginshiƙin rajistar kira a ɓoye yayin fitarwa ba.

Ana rarraba rukuni-rukuni bisa ga **duka** adadin layuka da kuma bytes da aka serialise. Adadin layuka kaɗai bai isa ba
da zarar an fitar da payloads: layuka 500 masu ɗauke da prompts na iya kaiwa gomman megabytes, kuma insertAll
yana ƙin buƙatar da ta wuce 10 MB. Ana rufe kowane rukuni idan ya kai layuka 500 ko 9 MB, duk wanda ya fara kaiwa.

---

## 5. Ƙara wurin aikawa

1. Ƙirƙiri `src/lib/logExport/destinations/<name>.ts` wanda yake fitar da `LogExportDestinationType`:
   wani `configSchema` na Zod, jerin bayanan `fields` don UI, `secretFields`, da kuma
   `createClient(config)` wanda yake dawo da `test()` / `prepare()` / `send(records)`.
2. Ƙara shi cikin jerin `DESTINATIONS` da ke `src/lib/logExport/registry.ts`.
3. Rubuta gwaje-gwaje a ƙarƙashin `tests/unit/`.

Wannan shi ne duk canjin: ma'ajiyar bayanai, aikin cron, matakin REST, ɓoye sirrika, da fom ɗin
dashboard duk suna karanta rajistar.

Ka'idoji biyu don sabon wurin aikawa:

- `send()` **dole ne ya jefa kuskure** idan an samu gazawar wani ɓangare. Idan ya kammala cikin nasara, hakan yana nufin "wurin aikawa yana da waɗannan layukan",
  kuma siginar matsayi za ta wuce su har abada.
- Wurin aikawa da yake karɓar URL da mai amfani ya bayar dole ne ya tabbatar da ingancinsa ta
  `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`) kafin ɗauko bayanai,
  kamar yadda webhooks suke yi. BigQuery ba ya buƙatar wannan: rundunoninsa tabbatattu ne.

---

## 6. Gudanar da shi

- **Dashboard**: Integrations → Log export. Ƙara wurin aikawa, gudanar da **Test** don bincika bayanan tantancewa
  ba tare da rubuta layuka ba, sannan kunna shi.
- **Jerin jiran aiki**: kowane katin wurin aikawa yana nuna layukan da ke jira da siginar matsayi; `GET
/api/log-export/status` yana dawo da waɗannan alkaluman tare da bayanan gudanuwar ayyuka 20 na ƙarshe.
- **Gazawar wani wurin aikawa ba ta sa sauran su gaza ba** — taƙaitaccen sakamakon gudanuwar yana adana matsayin kowane wurin aikawa
  a `last_status` / `last_error`, yayin da tarihin gudanuwar aikin yake adana sakamakon gaba ɗaya.
- **Share wurin aikawa yana share siginar matsayinsa.** Sake ƙara shi yana farawa daga mafi tsohon
  rajistan kira da aka riƙe, wanda zai sake aika layukan da mai yiwuwa wurin aikawar ya riga ya adana. A BigQuery, `insertId`
  na kowane layi yana hana maimaituwar ne kawai a cikin tazarar lokacin cire maimaituwa ta BigQuery, don haka ya fi kyau a kashe
  wurin aikawa maimakon share shi.
