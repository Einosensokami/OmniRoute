# Log export (Eesti)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

OmniRoute'i kõnelogide pidev, inkrementaalne eksport välisesse analüütikaandmehoidlasse.

Logide töölaua vahekaart säilitab päringute ajaloo SQLite'is (`call_logs`), mille mahtu piiravad
rotatsioon ja säilitusperiood. Logide eksport saadab sama kirjete kogumi ajakava alusel välja, et see säiliks
kohalikust andmebaasist kauem ja seda saaks muude andmetega ühendada. BigQuery on esimene sihtkoht;
konveier kasutab registrit, seega saab sihtkohti juurde lisada.

---

## 1. Kuidas see töötab

```
server (dekrüptib + valideerib konfiguratsiooni, kooskõlastab kursori)
  → käivitab IPC → isoleeritud exportChild OS-i protsess
    → kirjutuskaitstud storage.sqlite → ühine kõnelogi päring/vastendus
      → asünkroonne artefaktide laadimine → sihtkoha prepare()/send()
        → partii IPC → server salvestab kursori → kinnituse IPC
          → järgmine partii; lõpetamise IPC → server salvestab õnnestumise
```

- **Ajastus** — üks `JobRegistry` cron-töö, `log_export`, mille vaikeväärtus on `0 * * * *` (kord tunnis,
  UTC). Registreeritud failis `src/lib/initCloudSync.ts`; ülekirjutatav muutujaga `OMNIROUTE_LOG_EXPORT_CRON`.
  Iga käivitus töötleb järjest kõik **lubatud** sihtkohad lõpuni.
- **Kursor** — SQLite'i implitsiitne `call_logs.rowid`, mis salvestatakse iga sihtkoha kohta väljal
  `log_export_destinations.cursor_row_id`. `timestamp` ei ole teadlikult kursor: kutsujad
  võivad anda oma väärtuse, mistõttu aeglane päring võidakse kirjutada pärast kiiremat päringut, mis algas
  hiljem, ning ajatemplipõhine kursor jätaks selle vahele.
- **Partiideks jagamine** — `batch_size` rida päringu kohta (vaikimisi 500), `max_rows_per_run` rida käivituse kohta
  (vaikimisi 10000), et suur mahajäämus töödeldaks mitme käivituse jooksul, mitte ei blokeeriks üht käivitust.
- **Edastamine** — kursor liigub edasi alles pärast funktsiooni `send()` lahenemist. Nurjunud partii jätab
  kursori endisesse asukohta, seega proovitakse samu ridu järgmisel käivitusel uuesti. Tagatis on
  vähemalt üks kord edastamine koos sihtkohapoolse duplikaadieemaldusega, mitte tõeline täpselt üks kord edastamine: BigQuery võtmena kasutatakse igal
  real kõnelogi ID-d, mida arvestatakse parima võimaluse põhimõttel selle enda duplikaadieemalduse ajavahemiku piires.
- **Kattuvuse kaitse** — cron-käivitus ja `POST .../run` võivad käivituda samal ajal. Sihtkoht,
  mida juba töödeldakse, jäetakse teistkordse töötlemise asemel vahele (käivituse tulemuses `skipped: true`),
  seega ei saa samaaegne käivitus partiid uuesti saata ega kursorit tagasi liigutada.
- **Taastumine puhastamisest** — kui `cursor_row_id` jõuab väärtusest `MAX(rowid)` kõrgemale (kogu tabel
  puhastati ja rea-ID-d alustati uuesti), kerib käitaja kursori tagasi 0-le, selle asemel et jääda püsivalt andmeid mitte nägema.

### Isoleeritud käitaja ja piirangud

Iga sihtkoha käivitus Node'is käivitab eraldi lühiealise OS-i alamprotsessi (`child_process`
koos IPC-ga, mitte `worker_threads`). Kehade lugemine, lasti JSON-i sõelumine/serialiseerimine, sihtkoha
`prepare()` ja sihtkoha võrgu-I/O toimuvad kõik seal, mitte serveri sündmusetsüklis.
IPC kaudu liiguvad ainult konfiguratsioon ja väikesed edenemissõnumid; eksporditud kirjeid ei saadeta kunagi serverisse tagasi.
Cron-töö ja kohese käivitamise marsruut säilitavad sama avaliku tulemuse ja kattuvuse kaitse.

Alamprotsess avab serveri lahendatud faili `DATA_DIR/storage.sqlite` kirjutuskaitstult, kasutades `node:sqlite`,
seadetega `busy_timeout=5000` ja `query_only=ON`. See ei impordi ühtegi andmebaasi singletoni ega tee
migratsioone, varukoopiaid või SQLite'i uuendusi. Puuduvate/rikutud artefaktide arvestus (sealhulgas
rikutud artefakti UPDATE) jääb ainult töölaua üksikasjavaatesse. Mõlemad teed kasutavad ühist puhast
üksikasjade lahendajat; eksport kasutab asünkroonseid failisüsteemi lugemisi ning sama artefakt → pärand-
tekstisisene → pärandketas → puudub lahendusjärjekorda. Käivitus teeb maksimaalsest lisamise rea-ID-st
hetktõmmise, kui alamprotsess oma lugeja avab; hilisemad lisamised ootavad järgmist käivitust. See on lisamise
piir, mitte pikaajaline SQLite'i tehing: WAL-i kirjutajad ja kontrollpunktid saavad võrguootuste ajal vabalt
töötada. See piir ei fikseeri olemasolevate ridade uuendusi/kustutusi.

Pärast iga vastuvõetud partiid ootab alamprotsess kinnitust. Server salvestab esmalt
kursori funktsiooniga `advanceLogExportCursor` ja saadab seejärel `ack`; enne seda ei alustata järgmist partiid.
Saatmise nurjumine, krahh või ajalõpp salvestab nurjumise ilma selle partii kursorit edasi liigutamata. Varem
kinnitatud partiid jäävad jõustatuks; uuesti võidakse saata kõige rohkem üks kinnitamata partii.
Õnnestumine salvestatakse alles pärast teadet `done` ja alamprotsessi korrektset väljumist. Nurjumise korral
lõpetatakse alamprotsess signaaliga SIGTERM, eskaleerides 500 ms pärast signaalile SIGKILL, ning käitaja ootab protsessi sulgumist.

| Keskkonnamuutuja                              | Vaikeväärtus | Otstarve                                   |
| --------------------------------------------- | ------------ | ------------------------------------------ |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000       | Sihtkohapõhine seinaajakella piirang       |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024         | Alamprotsessi V8 vana ruumi piirang MB-des |

Sobimatud/mittepositiivsed/mittetäisarvulised väärtused asendatakse vaikeväärtustega. Kuhja seadistus ei ole täielik
RSS-i piirang; väga suured partiid võivad siiski alamprotsessi mälu ammendada ja käivituse turvaliselt nurjata.
Vaikimisi 1024 MB jätab piisavalt varu vaikepartiile, mis koosneb 500 reast ja 512 KiB artefaktidest ning mille puhul
on kehad lubatud, sealhulgas BigQuery baitide kaupa tükeldatud JSON-i serialiseerimiseks. See ei muuda
10000-realist kehadega partiid turvaliseks. V8 kuhja ammendumine salvestab tegutsemist võimaldava tõrke: vähendage partii
suurust või suurendage `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB`; kursor jääb viimase
kinnitatud partii juurde. Ajaloolised tekstisisesed/kettal olevad kehad ei kuulu kaasaegse artefaktipiirangu alla.
Operaatorid peavad RSS-i eraldi planeerima, eriti mälupiiranguga konteinerites.

Alamprotsess pärib ainult lahendatud `DATA_DIR`, `NODE_ENV`, eksplitsiitse `TZ` (pärandfailinimede
kohaliku aja lahendamiseks), olemasolu korral `ELECTRON_RUN_AS_NODE` ning järgmised väljaminevate ühenduste sisendid:
`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (ja nende väiketähelised vormid),
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`.
Globaalne Undici-dispetšer jagab serveri puhast keskkonnapõhist puhverserveri lahendamist ja kohaliku hosti
möödumisreegleid, sealhulgas `NO_PROXY`; see ei impordi faili `proxyFetch.ts` ega selle andmebaasi-/funktsioonilippe.
Puhverserveri identimisteave peidetakse edastatavast väljundist ja salvestatud vigadest. Sihtkoha identimisteave
liigub ainult ühes käivitamise IPC-sõnumis, mitte kunagi argv-s ega keskkonnas; väljundi/vigade edastusele
lisatakse prefiks ja see puhastatakse tundlikest andmetest. Alamprotsessi käivitusargumentides keelatakse ainult `ExperimentalWarning`, et vältida
Node'i SQLite'i hoiatuse kordamist igal cron-käivitusel; muud hoiatuste tüübid jäävad nähtavaks.

Sihtkoha moodulid peavad olema imporditavad ilma Next.js-i/serveripoolsete sõltuvusteta. Olemasolev
BigQuery teostus juba vastab sellele lepingule. Juurdepääsuloa vahemälud kestavad ainult alamprotsessi
käituse vältel, mitte üle mitme käituse. Node on toetatud käituskeskkond (`package.json`-i engines), kuid README Bun-i
paigaldusjaotis ja `Dockerfile.bun` reklaamivad samuti tootmiskeskkonnaga ühilduvat teed, mis kasutab
`bun:sqlite`-i (`src/lib/db/core.ts` / adapterid). Seetõttu säilitavad ekspordid Bun-is varasema
protsessisisese tee ja väljastavad ühekordse hoiatuse: alamprotsessi mälu- ja ajalõpuisolatsioon pole saadaval. Kasutage
Node'i sündmusetsükli ja OOM-i isolatsiooniks; Bun-i ei käsitleta siin ainult arenduskeskkonnana.

Kui `includeBodies` on lubatud, eelistage minutipõhist sagedust, näiteks
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"`, selle asemel et koguda tunnipõhist kasuliku koormuse järjekorda.
Paketi- ja reapõhised piirangud piiravad endiselt iga käitust. Protsessi käivitamise kulu tekib iga sihtkoha ja käituse kohta;
see vahetab väikese käivituskulu serveri sündmusetsükli isolatsiooni vastu, mitte ei vähenda üldist protsessorikasutust.

### Kasulikud koormused (viibad ja vastused)

Vaikimisi sisaldab eksport ainult kokkuvõttevälju, mida näitab logide **loend**. Valiku
**Ekspordi viibad ja vastused** (`includeBodies`) sisselülitamisel saadetakse lisaks see, mida logide **detailvaade**
iga kutse kohta näitab:

| Väli                             | Mida see sisaldab                                                                    |
| -------------------------------- | ------------------------------------------------------------------------------------ |
| `request_body` / `response_body` | Kutse kasulikud koormused nii, nagu juhtpaneel neid kuvab                            |
| `pipeline_route_decision`        | Millise sihtkoha ja mudeli ruuter valis                                              |
| `pipeline_client_request`        | Töötlemata päring täpselt sellisena, nagu klient selle saatis                        |
| `pipeline_openai_request`        | Pärast sisemisse OpenAI vormingusse teisendamist                                     |
| `pipeline_provider_request`      | Sellisena, nagu see tegelikult ülesvoolu teenusele saadeti, teenusepakkuja dialektis |
| `pipeline_provider_response`     | Töötlemata ülesvoolu vastus                                                          |
| `pipeline_client_response`       | See, mis tagastati kutsujale                                                         |
| `pipeline_error`                 | Konveieritaseme vea üksikasjad nurjunud kutse kohta                                  |
| `bodies_truncated`               | Tõene, kui mõni ülaltoodud väli saavutas `maxBodyBytes`-i piiri                      |

See on viiba sisu, mistõttu on see **vaikimisi välja lülitatud** ja teadlikult iga sihtkoha eraldi valik.
Saadetakse see, mida juhtpaneel näitab, sest eksport ja `getCallLogById` kasutavad sama detailide
lahendamist: kasulikud koormused on
juba isikuandmetest puhastatud ja saladused on neist kirjutamise ajal eemaldatud ning
`noLog` API-võtmega tehtud kutse ei salvesta üldse kasulikku koormust, seega pole midagi eksportida.

Kasulikud koormused loetakse iga rea kohta failisüsteemi artefaktist, mistõttu toimub rikastamine ainult nende sihtkohtade jaoks,
mis seda taotlesid. Puuduva või rikutud artefakti korral eksporditakse kokkuvõte nullväärtusega kasulike koormustega,
selle asemel et pakett nurjata ja kursorit kinni hoida.

`maxBodyBytes` (vaikimisi 262144) piirab iga välja suurust. Pikemad kasulikud koormused **kärbitakse, mitte
ei jäeta välja** — kärbitud viip vastab endiselt küsimusele „mida küsiti“ — ning rida märgistatakse väljaga
`bodies_truncated`. Voogedastatud tükikaupa deltasid ei ekspordita; koostatud vastus on
juba väljadel `pipeline_provider_response` ja `pipeline_client_response`.

---

## 2. Failid

| Osa                           | Asukoht                                      |
| ----------------------------- | -------------------------------------------- |
| Sihtkoha leping               | `src/lib/logExport/types.ts`                 |
| Register                      | `src/lib/logExport/registry.ts`              |
| Saladuste käsitlemine         | `src/lib/logExport/secrets.ts`               |
| Käitaja (ülemprotsessi IPC)   | `src/lib/logExport/runner.ts`                |
| Protsessi elutsükkel          | `src/lib/logExport/childRunner.ts`           |
| Alamprotsessi sisenemispunkt  | `src/lib/logExport/exportChild.ts`           |
| Kirjutuskaitstud avaja        | `src/lib/db/logExportReadOnly.ts`            |
| Jagatud päringud/vastendamine | `src/lib/usage/callLogExportQueries.ts`      |
| Üksikasjade lahendaja         | `src/lib/usage/callLogDetailResolver.ts`     |
| API projektsioon              | `src/lib/logExport/presenter.ts`             |
| BigQuery sihtkoht             | `src/lib/logExport/destinations/bigquery.ts` |
| Google'i SA autentimine       | `src/lib/logExport/googleServiceAccount.ts`  |
| Kõnelogi allikas              | `src/lib/usage/callLogExportSource.ts`       |
| Püsimälu                      | `src/lib/db/logExportDestinations.ts`        |
| Croni töö                     | `src/lib/jobs/logExportJob.ts`               |
| REST-kiht                     | `src/app/api/log-export/`                    |
| Töölaua leht                  | `src/app/(dashboard)/dashboard/log-export/`  |

Skeem: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

Kõik marsruudid nõuavad haldusautentimist (`requireManagementAuth`). Saladusi ei tagastata kunagi:
salvestatud saladus tagastatakse literaalina `__stored__` ning selle väärtuse saatmine uuendamisel
säilitab salvestatud pääsuteabe.

Sihtkoha loomine või uuendamine, kui selle tüüp deklareerib saladuse, **nõuab
`STORAGE_ENCRYPTION_KEY`**. Ilma selleta on `encrypt()` vaikne läbivoperatsioon, mistõttu
keeldutakse kirjutamisest veakoodiga 400, selle asemel et talletada pääsuteave SQLite'i lihttekstina
(sama kaitset rakendab Telegrami veebihaak).

| Meetod   | Tee                                      | Eesmärk                                                           |
| -------- | ---------------------------------------- | ----------------------------------------------------------------- |
| `GET`    | `/api/log-export/types`                  | Sihtkohatüübid ja nende konfiguratsiooniväljade loend             |
| `GET`    | `/api/log-export/destinations`           | Sihtkohtade loend (saladused peidetud)                            |
| `POST`   | `/api/log-export/destinations`           | Sihtkoha loomine                                                  |
| `GET`    | `/api/log-export/destinations/{id}`      | Ühe sihtkoha lugemine                                             |
| `PUT`    | `/api/log-export/destinations/{id}`      | Nime / lubatuse / konfiguratsiooni / paketeerimise uuendamine     |
| `DELETE` | `/api/log-export/destinations/{id}`      | Kustutamine                                                       |
| `POST`   | `/api/log-export/destinations/{id}/test` | Pääsuteabe kontrollimine ilma midagi kirjutamata                  |
| `POST`   | `/api/log-export/destinations/{id}/run`  | Kohene tühjendamine, sama tee nagu ajastatud käitusel             |
| `GET`    | `/api/log-export/status`                 | Croni olek, hiljutised käitused, iga sihtmärgi ootel kirjete hulk |

`GET /api/log-export/types` muudab kasutajaliidese üldiseks: töölaua vorm renderdatakse
tagastatud väljadeskriptorite põhjal, seega ei vaja uus sihtkoht kasutajaliidese muudatust.

---

## 4. BigQuery sihtkoht

Konfiguratsioonivõtmed (`type: "bigquery"`):

| Võti                 | Märkused                                                                  |
| -------------------- | ------------------------------------------------------------------------- |
| `projectId`          | GCP projekt, mis sisaldab andmestikku                                     |
| `datasetId`          | `[A-Za-z0-9_]+`                                                           |
| `tableId`            | `[A-Za-z0-9_]+`                                                           |
| `location`           | Kasutatakse ainult siis, kui andmestik tuleb luua (vaikimisi `EU`)        |
| `serviceAccountJson` | Teenusekonto võti. Saladus: puhkeolekus krüpteeritud, ei tagastata kunagi |
| `autoCreate`         | Andmestiku ja tabeli loomine esimesel eksportimisel (vaikimisi `true`)    |

Teenusekonto vajab sihttabelis õigust `bigquery.tables.updateData` ning juhul, kui `autoCreate`
on sisse lülitatud, õigusi `bigquery.datasets.create` / `bigquery.tables.create`.

Konfigureeritud pakk on **kursori** ühik, mitte HTTP ühik: `send()` jagab selle `insertAll`
kutseteks, milles on kuni 500 rida, mistõttu suur `batch_size` ei saa ületada BigQuery 10 MB
päringupiirangut. Ajutiste olekukoodidega (408/429/500/502/503/504) päringuid proovitakse
eksponentsiaalse viivitusega kuni kolm korda uuesti, kasutades samu insertIds-väärtusi;
autentimis- ja skeemitõrked annavad vea juba esimesel katsel, selle asemel et käitust asjatult jätkata.

Äsja loodud tabel ei ole voogedastuse lõpp-punktile veel nähtav, mistõttu vastab see mõne sekundi
jooksul koodiga 404. Seda 404 vastust proovitakse uuesti, kuid **ainult siis, kui tabel loodi selle
käituse käigus** — tegelikult puuduv tabel nurjub endiselt kohe. Pange tähele, et hiljuti kustutatud
tabeli sama nime all uuesti loomisel keeldub BigQuery mitme minuti jooksul voogedastatavaid lisamisi
vastu võtmast; see tuleneb kustutamisele järgnevast taasloomisest, seega eelistage tabeli eemaldamisele
ja uuesti lisamisele uut tabelinime.

**Osaline tõrge saabub HTTP 200 vastusena, mille `insertErrors[]` pole tühi.** Seda käsitletakse
tõrkena ja visatakse erind, mis takistab kursoril liikumast mööda ridadest, mida BigQuery kunagi
vastu ei võtnud; `tests/unit/log-export-bigquery.test.ts` fikseerib selle käitumise.

Transport kasutab tavalist REST-i — ise allkirjastatud RS256-väide vahetatakse pääsutõendi vastu
aadressil `https://oauth2.googleapis.com/token`, seejärel saadetakse read meetodile
`tabledata.insertAll`. Ühtegi Google'i SDK-d ei kaasata. Pääsutõendid puhverdatakse protsessisiseselt
iga paari (teenusekonto, ulatus) kohta.

Loodud tabel sisaldab üht veergu iga vahekaardi Logs välja kohta ning lisaks veergu `exported_at`
ja selle paigutus vastab kõnelogide tegelikule päringukasutusele:

- **Päevade kaupa partitsioneeritud välja `timestamp` alusel**, mistõttu kuupäevaga piiratud päring
  skannib ainult neid päevi.
- **Klastriteks jaotatud väljade `api_key_name`, `provider`, `model`, `status` järgi** (selles
  järjekorras), mistõttu käitaja, sihtkoha või nurjumise järgi filtreerimine kõrvaldab iga
  partitsiooni sees ebaolulised plokid. BigQuery lubab kuni nelja klasterdamisveergu ja järjekord on
  oluline: ainult välja `api_key_name` filter kõrvaldab plokke, ainult välja `status` filter mitte.
- **Valikuline partitsioonide säilitusaeg** võtme `partitionExpirationDays` kaudu (0 säilitab kõik),
  mida rakendatakse tabeli loomisel.

Mõlemad sätted rakenduvad loomise ajal. Olemasolev tabel säilitab oma senise paigutuse, seega
nende kasutuselevõtuks suunake sihtkoht uuele tabeli ID-le.

`tests/unit/log-export-bigquery.test.ts` kontrollib, et vastendaja ja tabeli skeem püsiksid
sünkroonis, nii et uut kõnelogi veergu ei saaks eksportimisel märkamatult kõrvale jätta.

Paketid tükeldatakse **nii** ridade arvu kui ka serialiseeritud baitide järgi. Ainult ridade arvust ei piisa,
kui eksporditakse kasulikke andmeid: 500 viipasid sisaldavat rida võib moodustada kümneid megabaite ning insertAll
lükkab tagasi üle 10 MB suuruse päringu. Tükid suletakse 500 rea või 9 MB täitumisel, olenevalt sellest, kumb saabub varem.

---

## 5. Sihtkoha lisamine

1. Loo `src/lib/logExport/destinations/<name>.ts`, mis ekspordib tüübi `LogExportDestinationType`:
   Zodi `configSchema`, kasutajaliidese jaoks mõeldud `fields`-kirjelduste massiiv, `secretFields` ja
   `createClient(config)`, mis tagastab `test()` / `prepare()` / `send(records)`.
2. Lisa see faili `src/lib/logExport/registry.ts` massiivi `DESTINATIONS`.
3. Kirjuta testid kataloogi `tests/unit/`.

See ongi kogu muudatus: püsiandmete kiht, cron-töö, REST-kiht, saladuste krüptimine ja
töölaua vorm loevad kõik registrit.

Kaks reeglit uue sihtkoha jaoks:

- `send()` **peab osalise nurjumise korral erindi viskama**. Edukas lõpulejõudmine tähendab, et „sihtkohas on need read olemas”,
  ning kursor liigub neist jäädavalt edasi.
- Kasutaja antud URL-i kasutav sihtkoht peab selle enne päringu tegemist valideerima funktsiooniga
  `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`),
  samamoodi nagu veebihaagid. BigQuery puhul pole see vajalik: selle hostid on konstantsed.

---

## 6. Kasutamine

- **Töölaud**: Integratsioonid → Logide eksport. Lisa sihtkoht, käivita mandaatide kontrollimiseks
  ilma ridu kirjutamata **Test** ja seejärel luba sihtkoht.
- **Tööjärg**: iga sihtkoha kaart näitab ootel ridu ja kursorit; `GET
/api/log-export/status` tagastab samad arvud ning viimase 20 töö käivituse andmed.
- **Ühe sihtkoha nurjumine ei põhjusta teiste nurjumist** — käivituse kokkuvõte salvestab iga sihtkoha
  oleku väljadel `last_status` / `last_error` ning töö käivituste ajalugu säilitab koondtulemuse.
- **Sihtkoha kustutamine kustutab selle kursori.** Selle uuesti lisamisel alustatakse vanimast säilitatud
  kõnelogist, mistõttu saadetakse uuesti read, mis võivad sihtkohas juba olemas olla. BigQuery puhul
  kõrvaldab reapõhine `insertId` duplikaadid ainult BigQuery enda deduplikatsiooniakna piires,
  seega eelista sihtkoha kustutamisele selle keelamist.
