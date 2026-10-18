# Log export (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

Tuloy-tuloy at inkremental na pag-export ng mga call log ng OmniRoute patungo sa isang panlabas na analytics store.

Pinapanatili ng tab na Logs dashboard ang kasaysayan ng request sa SQLite (`call_logs`), na nililimitahan ng
rotation at retention. Ipinapadala ng log export ang parehong hanay ng mga record ayon sa iskedyul upang manatili
ang mga ito nang mas matagal kaysa sa lokal na database at maiugnay sa iba pang data. BigQuery ang unang destinasyon; ang
pipeline ay isang registry, kaya maaaring magdagdag ng higit pang mga destinasyon.

---

## 1. Paano ito gumagana

```
server (i-decrypt + i-validate ang config, i-reconcile ang cursor)
  → simulan ang IPC → nakahiwalay na exportChild OS process
    → read-only na storage.sqlite → nakabahaging call-log query/mapping
      → async na pag-hydrate ng artifact → prepare()/send() ng destination
        → batch IPC → sine-save ng server ang cursor → ack IPC
          → susunod na batch; done IPC → itinatala ng server ang tagumpay
```

- **Iskedyul** — isang `JobRegistry` cron job, `log_export`, na may default na `0 * * * *` (oras-oras,
  UTC). Nakarehistro sa `src/lib/initCloudSync.ts`; maaaring i-override gamit ang `OMNIROUTE_LOG_EXPORT_CRON`.
  Sa bawat tick, sunod-sunod nitong inuubos ang bawat **enabled** na destination.
- **Cursor** — ang implicit na `call_logs.rowid` ng SQLite, na sine-save kada destination sa
  `log_export_destinations.cursor_row_id`. Sadyang hindi cursor ang `timestamp`: maaaring
  magbigay ang mga caller ng sarili nilang value, kaya maaaring maisulat ang isang mabagal na request
  pagkatapos ng isang mas mabilis na request na nagsimula nang mas huli, at lalampasan iyon ng timestamp cursor.
- **Pagba-batch** — `batch_size` na row kada request (default na 500), `max_rows_per_run` na row kada run
  (default na 10000) upang maubos ang malaking backlog sa ilang tick sa halip na ma-block ang isang run.
- **Paghahatid** — uusad lamang ang cursor pagkatapos mag-resolve ang `send()`. Kapag nabigo ang isang batch,
  mananatili ang cursor sa kinaroroonan nito, kaya susubukang muli ang parehong mga row sa susunod na run.
  Ang garantiya ay at-least-once kasama ang de-duplication sa panig ng destination, hindi tunay na exactly-once:
  ginagamit ng BigQuery ang call-log id bilang key ng bawat row, na sinusunod nito sa best-effort na paraan
  sa loob ng sarili nitong dedup window.
- **Proteksiyon laban sa overlap** — maaaring sabay na ma-trigger ang cron tick at `POST .../run`.
  Ang destination na kasalukuyan nang inuubos ay nilalampasan sa halip na ubusin nang dalawang beses
  (`skipped: true` sa resulta ng run), kaya hindi maaaring muling magpadala ng batch o isulat paatras
  ang cursor ang isang kasabay na run.
- **Pag-recover mula sa purge** — kung mapunta ang `cursor_row_id` sa itaas ng `MAX(rowid)` (na-purge
  ang buong table at nagsimulang muli ang mga rowid), ibinabalik ng runner sa 0 ang cursor sa halip na
  tuluyan nang hindi makakita ng mga row.

### Nakahiwalay na runner at mga limitasyon

Ang bawat destination run sa Node ay nagsisimula ng hiwalay at panandaliang OS child process (`child_process`
na may IPC, hindi `worker_threads`). Ang pagbabasa ng body, pag-parse/pag-serialize ng payload JSON,
destination `prepare()`, at destination network I/O ay lahat tumatakbo roon, hindi sa event loop ng server.
Configuration at maliliit na progress message lamang ang dumadaan sa IPC; hindi kailanman bumabalik sa
server ang mga na-export na record. Pinananatili ng cron job at Run now route ang parehong pampublikong
resulta at overlap guard.

Binubuksan ng child ang na-resolve na `DATA_DIR/storage.sqlite` ng server bilang read-only gamit ang
`node:sqlite`, na may `busy_timeout=5000` at `query_only=ON`. Hindi ito nag-i-import ng anumang DB singleton
at hindi nagsasagawa ng mga migration, backup, o SQLite update. Ang bookkeeping para sa nawawala/sirang
artifact (kabilang ang corrupt-artifact UPDATE) ay nananatili lamang sa dashboard detail path. Parehong
gumagamit ang dalawang path ng iisang pure detail resolver; gumagamit ang export ng asynchronous na
pagbasa sa filesystem at ng parehong pagkakasunod-sunod ng pag-resolve na artifact → legacy inline →
legacy disk → none. Kumukuha ang isang run ng snapshot ng pinakamataas na insertion rowid kapag binuksan
ng child ang reader nito; maghihintay hanggang sa susunod na run ang mga insert na kasunod nito. Isa itong
insertion boundary, hindi isang pangmatagalang SQLite transaction: nananatiling malayang gumana ang mga
WAL writer at checkpoint habang naghihintay sa network. Hindi pina-freeze ng boundary na ito ang mga
update/pagbura ng mga umiiral nang row.

Pagkatapos ng bawat tinanggap na batch, naghihintay ang child ng acknowledgement. Sine-save muna ng server
ang cursor gamit ang `advanceLogExportCursor`, pagkatapos ay ipinapadala ang `ack`; walang susunod na batch
na magsisimula bago ito. Ang send failure, crash, o timeout ay nagtatala ng pagkabigo nang hindi inu-usad
ang batch na iyon. Nananatiling committed ang mga naunang na-acknowledge na batch; ang hindi pa
na-acknowledge na batch lamang ang maaaring maipadalang muli. Itinatala lamang ang tagumpay pagkatapos
ng `done` at malinis na pag-exit ng child. Tinatapos ng mga pagkabigo ang child gamit ang SIGTERM,
na itinataas sa SIGKILL pagkalipas ng 500 ms, at naghihintay ang runner hanggang magsara ang process.

| Environment variable                          | Default | Layunin                           |
| --------------------------------------------- | ------- | --------------------------------- |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000  | Wall-clock limit kada destination |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024    | V8 old-space limit ng child sa MB |

Ginagamit ng mga invalid/non-positive/non-integer na value ang mga default. Ang heap setting ay hindi
kabuuang RSS limit; maaari pa ring maubos ng napakalalaking batch ang memory ng child at ligtas na mabigo
ang run. Nagbibigay ang default na 1024 MB ng ekstrang kapasidad para sa default na 500-row batch ng
512 KiB na artifact kapag enabled ang mga body, kabilang ang byte-chunked JSON serialization ng BigQuery.
Hindi nito ginagawang ligtas ang isang 10000-row bodies batch. Nagtatala ang pagkaubos ng V8 heap ng
kabiguang may malinaw na aksiyon: babaan ang batch size o itaas ang
`OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB`; mananatili ang cursor sa huling na-acknowledge na batch.
Hindi saklaw ng modernong artifact cap ang mga makasaysayang inline/disk body. Kailangang hiwalay na
planuhin ng mga operator ang RSS, lalo na sa loob ng mga container na may limitadong memory.

Mula sa parent, tanging ang na-resolve na `DATA_DIR`, `NODE_ENV`, explicit na `TZ` (para sa pag-resolve
ng local time sa legacy filename), `ELECTRON_RUN_AS_NODE` kapag naroroon, at ang mga sumusunod na outbound
input ang minamana ng child: `HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (at ang lowercase na
mga anyo ng mga ito), `OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`,
`SSL_CERT_DIR`. Ibinabahagi ng isang global na Undici dispatcher ang pure environment-proxy resolution
at mga local-host bypass rule ng server, kabilang ang `NO_PROXY`; hindi nito ini-import ang `proxyFetch.ts`
o ang mga DB/feature flag nito. Nire-redact ang mga proxy credential mula sa ipinapasang output at mga
naitalang error. Sa iisang start IPC message lamang dumadaan ang mga credential ng destination, at hindi
kailanman sa argv o environment; nilalagyan ng prefix at sine-sanitize ang ipinapasang output/error.
`ExperimentalWarning` lamang ang dini-disable sa mga child exec argument upang maiwasang maulit ang SQLite
warning ng Node sa bawat cron run; nananatiling nakikita ang iba pang uri ng warning.

Dapat maaaring i-import ang mga destination module nang walang mga dependency na Next.js/server-only. Natutugunan na ng kasalukuyang
implementasyon ng BigQuery ang kontratang iyon. Tumatagal lamang ang mga access-token cache sa loob ng child
run, hindi sa pagitan ng mga run. Node ang suportadong runtime (`package.json` engines), ngunit ang seksyon ng
pag-install ng Bun sa README at ang `Dockerfile.bun` ay nag-aalok din ng production compatibility path gamit ang
`bun:sqlite` (`src/lib/db/core.ts` / mga adapter). Sa Bun, pinananatili samakatuwid ng mga export ang dating
in-process path at naglalabas ng isang beses na babala: hindi available ang child heap/timeout isolation. Gamitin ang
Node para sa event-loop at OOM isolation; hindi itinuturing na dev-only ang Bun dito.

Kapag naka-enable ang `includeBodies`, mas mainam ang minutong cadence gaya ng
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"` sa halip na mag-ipon ng payload backlog kada oras.
Nililimitahan pa rin ng mga batch at row limit ang bawat run. Ang process startup ay binabayaran sa bawat destination sa bawat run;
ipinagpapalit nito ang maliit na startup cost para sa server event-loop isolation, hindi para sa mas mababang kabuuang paggamit ng CPU.

### Mga payload (mga prompt at completion)

Bilang default, tanging ang mga summary field na ipinapakita ng **listahan** ng Logs ang kasama sa export. Kapag in-on ang
**I-export ang mga prompt at tugon** (`includeBodies`), isinasama rin kung ano ang ipinapakita ng **detail**
pane ng Logs para sa bawat call:

| Field                            | Nilalaman nito                                                  |
| -------------------------------- | --------------------------------------------------------------- |
| `request_body` / `response_body` | Mga call payload ayon sa pagkaka-render ng dashboard            |
| `pipeline_route_decision`        | Aling target at model ang pinili ng router                      |
| `pipeline_client_request`        | Ang raw request kung paano mismo ito ipinadala ng client        |
| `pipeline_openai_request`        | Pagkatapos isalin sa internal na OpenAI shape                   |
| `pipeline_provider_request`      | Gaya ng aktuwal na ipinadala upstream, sa dialect ng provider   |
| `pipeline_provider_response`     | Ang raw upstream response                                       |
| `pipeline_client_response`       | Ang ibinalik sa caller                                          |
| `pipeline_error`                 | Detalye ng pipeline-level error para sa nabigong call           |
| `bodies_truncated`               | True kapag naabot ng alinmang field sa itaas ang `maxBodyBytes` |

Nilalaman ito ng prompt, kaya **naka-off ito bilang default** at sadyang pinipili para sa bawat destination.
Ang ipinapadala ay kung ano ang ipinapakita ng dashboard, dahil magkapareho ang detail
resolution ng export at `getCallLogById`: ang mga payload ay
na-sanitize na para sa PII at na-redact na ang mga secret kapag isinusulat ang mga ito, at ang call na ginawa gamit ang
`noLog` API key ay hindi nag-iimbak ng anumang payload, kaya walang mae-export.

Binabasa ang mga payload sa bawat row mula sa filesystem artifact, kaya tumatakbo lamang ang hydration para sa mga destination
na humiling nito. Ine-export ng nawawala o sirang artifact ang summary nito na may mga null na payload sa halip
na mabigo ang batch at maipit ang cursor.

Nililimitahan ng `maxBodyBytes` (default na 262144) ang bawat field. Ang mas mahahabang payload ay **pinuputol sa halip na
inaalis** — masasagot pa rin ng pinutol na prompt ang "ano ang itinanong" — at mina-markahan ang row gamit ang
`bodies_truncated`. Hindi ine-export ang mga delta na ini-stream nang paisa-isang chunk; nasa
`pipeline_provider_response` at `pipeline_client_response` na ang nabuong response.

---

## 2. Mga File

| Bahagi                     | Lokasyon                                     |
| -------------------------- | -------------------------------------------- |
| Kontrata ng destinasyon    | `src/lib/logExport/types.ts`                 |
| Rehistro                   | `src/lib/logExport/registry.ts`              |
| Pangangasiwa ng lihim      | `src/lib/logExport/secrets.ts`               |
| Runner (magulang na IPC)   | `src/lib/logExport/runner.ts`                |
| Lifecycle ng proseso       | `src/lib/logExport/childRunner.ts`           |
| Entry ng child             | `src/lib/logExport/exportChild.ts`           |
| Read-only na opener        | `src/lib/db/logExportReadOnly.ts`            |
| Nakabahaging query/mapping | `src/lib/usage/callLogExportQueries.ts`      |
| Resolver ng detalye        | `src/lib/usage/callLogDetailResolver.ts`     |
| Projection ng API          | `src/lib/logExport/presenter.ts`             |
| Destinasyon ng BigQuery    | `src/lib/logExport/destinations/bigquery.ts` |
| Google SA auth             | `src/lib/logExport/googleServiceAccount.ts`  |
| Pinagmulan ng call-log     | `src/lib/usage/callLogExportSource.ts`       |
| Persistence                | `src/lib/db/logExportDestinations.ts`        |
| Cron job                   | `src/lib/jobs/logExportJob.ts`               |
| REST layer                 | `src/app/api/log-export/`                    |
| Pahina ng dashboard        | `src/app/(dashboard)/dashboard/log-export/`  |

Schema: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

Lahat ng route ay nangangailangan ng management authentication (`requireManagementAuth`). Hindi kailanman ibinabalik ang mga secret:
ang nakaimbak na secret ay ibinabalik bilang literal na `__stored__`, at ang pagpapadala muli ng halagang iyon sa isang update
ay nagpapanatili sa nakaimbak na credential.

Ang paggawa o pag-update ng destinasyon na ang uri ay nagdedeklara ng secret ay **nangangailangan ng
`STORAGE_ENCRYPTION_KEY`**. Kung wala ito, tahimik na passthrough ang `encrypt()`, kaya
tinatanggihan ang pagsusulat gamit ang 400 sa halip na maglagay ng credential sa SQLite bilang plaintext (ang parehong guard na
ginagamit ng Telegram webhook).

| Paraan   | Path                                     | Layunin                                                      |
| -------- | ---------------------------------------- | ------------------------------------------------------------ |
| `GET`    | `/api/log-export/types`                  | Mga uri ng destinasyon + listahan ng config field            |
| `GET`    | `/api/log-export/destinations`           | Ilista ang mga destinasyon (nakatago ang mga secret)         |
| `POST`   | `/api/log-export/destinations`           | Gumawa ng destinasyon                                        |
| `GET`    | `/api/log-export/destinations/{id}`      | Basahin ang isa                                              |
| `PUT`    | `/api/log-export/destinations/{id}`      | I-update ang pangalan / enabled / config / batching          |
| `DELETE` | `/api/log-export/destinations/{id}`      | Burahin                                                      |
| `POST`   | `/api/log-export/destinations/{id}/test` | Subukan ang mga credential, walang isusulat                  |
| `POST`   | `/api/log-export/destinations/{id}/run`  | I-drain ngayon, kaparehong path ng nakaiskedyul na run       |
| `GET`    | `/api/log-export/status`                 | Kalagayan ng cron, mga kamakailang run, backlog bawat target |

Ang `GET /api/log-export/types` ang dahilan kung bakit generic ang UI: nire-render ang form ng dashboard mula sa
mga ibinalik na field descriptor, kaya hindi nangangailangan ng pagbabago sa UI ang isang bagong destinasyon.

---

## 4. Destinasyong BigQuery

Mga config key (`type: "bigquery"`):

| Key                  | Mga Tala                                                                     |
| -------------------- | ---------------------------------------------------------------------------- |
| `projectId`          | GCP project na naglalaman ng dataset                                         |
| `datasetId`          | `[A-Za-z0-9_]+`                                                              |
| `tableId`            | `[A-Za-z0-9_]+`                                                              |
| `location`           | Ginagamit lamang kapag kailangang gawin ang dataset (default na `EU`)        |
| `serviceAccountJson` | Service-account key. Secret: naka-encrypt habang nakaimbak, hindi ibinabalik |
| `autoCreate`         | Gawin ang dataset at table sa unang export (default na `true`)               |

Kailangan ng service account ang `bigquery.tables.updateData` sa target na table, kasama ang
`bigquery.datasets.create` / `bigquery.tables.create` kapag naka-on ang `autoCreate`.

Ang naka-configure na batch ay isang **cursor** unit, hindi HTTP unit: hinahati ito ng `send()` sa mga insertAll
call na may hindi hihigit sa 500 row, kaya hindi maaaring lumampas ang malaking `batch_size` sa 10 MB request limit ng BigQuery.
Ang mga pansamantalang status (408/429/500/502/503/504) ay muling sinusubukan nang hanggang tatlong beses gamit ang exponential
backoff, habang ginagamit muli ang parehong mga insertId; ang mga pagkabigo sa auth at schema ay nagti-throw sa unang pagtatangka sa halip
na ubusin ang run.

Hindi pa nakikita ng streaming endpoint ang isang table na kagagawa lang ilang sandali ang nakalipas, kaya sumasagot ito ng
404 sa loob ng ilang segundo. Muling sinusubukan ang 404 na iyon, ngunit **kapag ginawa lamang ng run na ito ang table** —
mabilis pa ring nabibigo ang isang table na talagang wala. Tandaan na kapag muling gumawa ng table gamit ang pangalang
kamakailan lang binura, tatanggihan ng BigQuery ang mga streaming insert sa loob ng ilang minuto; katangian ito ng
delete-then-recreate, kaya mas mainam ang bagong pangalan ng table kaysa mag-drop at muling magdagdag ng table.

**Dumarating ang partial failure bilang HTTP 200 na may `insertErrors[]` na hindi empty.** Itinuturing itong
pagkabigo at nagti-throw, na siyang pumipigil sa cursor na lumampas sa mga row na hindi kailanman
tinanggap ng BigQuery; itinatakda ng `tests/unit/log-export-bigquery.test.ts` ang gawi na ito.

Plain REST ang transport — ipinagpapalit ang self-signed RS256 assertion para sa access token sa
`https://oauth2.googleapis.com/token`, pagkatapos ay ipinapadala ang mga row sa `tabledata.insertAll`. Walang
idinadagdag na Google SDK. Naka-cache ang mga access token sa loob ng proseso para sa bawat (service account, scope).

Ang ginawang table ay may tig-isang column para sa bawat field ng Logs tab kasama ang `exported_at`, at nakaayos ito ayon sa
aktuwal na paraan ng pag-query sa mga call log:

- **Naka-day partition sa `timestamp`**, kaya ang query na nililimitahan ayon sa petsa ay ang mga araw na iyon lamang ang sini-scan.
- **Naka-cluster ayon sa `api_key_name`, `provider`, `model`, `status`** (sa ayos na iyon), kaya ang pag-filter ayon sa
  kung sino ang nagpatakbo nito, kung saan ito ipinadala, o kung nabigo ito ay nagpa-prune ng mga block sa loob ng bawat partition. Pinapayagan ng BigQuery
  ang hindi hihigit sa apat na clustering column at mahalaga ang pagkakasunod-sunod: nagpa-prune ang filter sa `api_key_name` lamang,
  ngunit hindi ang filter sa `status` lamang.
- **Opsyonal na retention ng partition** sa pamamagitan ng `partitionExpirationDays` (pinapanatili ng 0 ang lahat), na inilalapat
  kapag ginawa ang table.

Nalalapat ang parehong setting sa oras ng paggawa. Pinananatili ng isang umiiral na table ang kasalukuyan nitong layout, kaya
ituro ang destinasyon sa isang bagong table id kung gusto mong gamitin ang mga ito.

Tinitiyak ng `tests/unit/log-export-bigquery.test.ts` na nananatiling magkatugma ang mapper at ang schema ng table,
kaya hindi maaaring tahimik na maalis ang isang bagong column ng call-log habang inilalabas ito.

Hinahati ang mga batch ayon sa **parehong** bilang ng row at mga na-serialize na byte. Hindi sapat ang bilang ng row lamang
kapag ine-export ang mga payload: ang 500 row na naglalaman ng mga prompt ay maaaring umabot sa sampu-sampung megabyte, at tinatanggihan ng insertAll
ang isang request na lampas sa 10 MB. Isinasara ang mga chunk kapag umabot sa 500 row o 9 MB, alinman ang mauna.

---

## 5. Pagdaragdag ng destinasyon

1. Gumawa ng `src/lib/logExport/destinations/<name>.ts` na nag-e-export ng `LogExportDestinationType`:
   isang Zod `configSchema`, isang array ng descriptor na `fields` para sa UI, `secretFields`, at isang
   `createClient(config)` na nagbabalik ng `test()` / `prepare()` / `send(records)`.
2. Idagdag ito sa array na `DESTINATIONS` sa `src/lib/logExport/registry.ts`.
3. Sumulat ng mga test sa ilalim ng `tests/unit/`.

Iyon lang ang buong pagbabago: binabasa ng persistence, cron job, REST layer, pag-encrypt ng secret, at
form ng dashboard ang registry.

Dalawang panuntunan para sa bagong destinasyon:

- Ang `send()` ay **dapat mag-throw** kapag may bahagyang pagkabigo. Ang matagumpay na pag-resolve ay nangangahulugang "nasa destinasyon ang mga row na ito",
  at permanenteng uusad ang cursor lampas sa mga ito.
- Ang destinasyong tumatanggap ng URL na ibinigay ng user ay dapat i-validate ito sa pamamagitan ng
  `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`) bago mag-fetch,
  tulad ng ginagawa ng mga webhook. Hindi ito kailangan ng BigQuery: hindi nagbabago ang mga host nito.

---

## 6. Pagpapatakbo nito

- **Dashboard**: Integrations → Log export. Magdagdag ng destinasyon, patakbuhin ang **Test** upang suriin ang mga credential
  nang hindi nagsusulat ng mga row, pagkatapos ay i-enable ito.
- **Backlog**: ipinapakita ng bawat card ng destinasyon ang mga nakabinbing row at ang cursor; ibinabalik ng `GET
/api/log-export/status` ang parehong mga bilang pati ang huling 20 pagpapatakbo ng job.
- **Ang pumalyang destinasyon ay hindi nagpapabagsak sa iba** — itinatala ng buod ng pagpapatakbo ang status ng bawat destinasyon
  sa `last_status` / `last_error`, at pinananatili ng kasaysayan ng pagpapatakbo ng job ang pinagsama-samang resulta.
- **Kapag binura ang isang destinasyon, nabubura rin ang cursor nito.** Kapag idinagdag itong muli, magsisimula ito sa pinakalumang naka-retain na
  call log, kaya muling ipapadala ang mga row na maaaring nasa destinasyon na. Sa BigQuery, inaasikaso lamang iyon ng bawat-row na
  `insertId` sa loob ng sariling de-duplication window ng BigQuery, kaya mas mainam na i-disable ang isang destinasyon kaysa burahin ito.
