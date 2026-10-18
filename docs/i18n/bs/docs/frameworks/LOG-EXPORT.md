# Log export (Bosanski)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

# Izvoz logova

Kontinuirani, inkrementalni izvoz OmniRoute logova poziva u vanjsko skladište za analitiku.

Kartica Logs na kontrolnoj ploči čuva historiju zahtjeva u SQLite (`call_logs`), koja je ograničena rotacijom i zadržavanjem. Izvoz logova šalje isti skup zapisa prema rasporedu kako bi mogao nadživjeti lokalnu bazu podataka i biti povezan s drugim podacima. BigQuery je prvo odredište; cjevovod (pipeline) je registar, tako da su dodatna odredišta aditivna.

---

## 1. Kako radi

```
server (dešifriranje + provjera konfiguracije, usklađivanje kursora)
  → pokretanje IPC-a → izolirani OS proces exportChild
    → storage.sqlite samo za čitanje → zajednički upit/mapiranje evidencije poziva
      → asinhrono učitavanje artefakata → odredišni prepare()/send()
        → grupni IPC → server pohranjuje kursor → IPC potvrda
          → sljedeća grupa; IPC završetak → server bilježi uspjeh
```

- **Raspored** — jedan cron zadatak `JobRegistry`, `log_export`, sa zadanom vrijednošću `0 * * * *` (svakog sata,
  UTC). Registriran je u `src/lib/initCloudSync.ts`; može se promijeniti pomoću `OMNIROUTE_LOG_EXPORT_CRON`.
  Svako pokretanje redom obrađuje sva **omogućena** odredišta.
- **Kursor** — implicitni SQLite `call_logs.rowid`, pohranjen za svako odredište u
  `log_export_destinations.cursor_row_id`. `timestamp` namjerno nije kursor: pozivaoci
  mogu navesti vlastitu vrijednost, pa sporiji zahtjev može biti zapisan nakon bržeg koji je pokrenut
  kasnije, a kursor zasnovan na vremenskoj oznaci bi ga preskočio.
- **Grupiranje** — `batch_size` redova po zahtjevu (zadano 500), `max_rows_per_run` redova po pokretanju
  (zadano 10000), tako da se veliki zaostatak obradi kroz nekoliko pokretanja umjesto da blokira jedno.
- **Isporuka** — kursor napreduje tek nakon što se `send()` razriješi. Neuspjela grupa ostavlja
  kursor tamo gdje je bio, pa se isti redovi ponovo pokušavaju poslati pri sljedećem pokretanju. Garancija je
  najmanje-jednom uz uklanjanje duplikata na strani odredišta, a ne stvarna isporuka tačno-jednom: BigQuery svakom
  redu dodjeljuje ključ prema ID-u evidencije poziva, koji poštuje po principu najboljeg pokušaja unutar vlastitog prozora za uklanjanje duplikata.
- **Zaštita od preklapanja** — cron pokretanje i `POST .../run` mogu se aktivirati istovremeno. Odredište
  koje se već obrađuje preskače se umjesto da bude obrađeno dvaput (`skipped: true` u rezultatu pokretanja),
  tako da istovremeno pokretanje ne može ponovo poslati grupu niti vratiti kursor unazad.
- **Oporavak nakon čišćenja** — ako `cursor_row_id` završi iznad `MAX(rowid)` (cijela tabela je
  očišćena i ID-jevi redova su ponovo pokrenuti), izvršilac vraća kursor na 0 umjesto da trajno izgubi pregled.

### Izolirani izvršilac i ograničenja

Svako pokretanje odredišta na Nodeu pokreće zaseban, kratkotrajan podređeni OS proces (`child_process`
sa IPC-om, a ne `worker_threads`). Čitanje tijela, raščlanjivanje/serijalizacija JSON sadržaja, odredišni
`prepare()` i odredišni mrežni U/I obavljaju se u njemu, a ne u petlji događaja servera.
Preko IPC-a prenose se samo konfiguracija i male poruke o napretku; izvezeni zapisi nikada se ne vraćaju
na server. Cron zadatak i ruta Pokreni sada zadržavaju isti javni rezultat i zaštitu od preklapanja.

Podređeni proces otvara razriješeni serverski `DATA_DIR/storage.sqlite` samo za čitanje pomoću `node:sqlite`,
uz `busy_timeout=5000` i `query_only=ON`. Ne uvozi nijedan singleton baze podataka i ne izvršava
migracije, sigurnosne kopije niti SQLite ažuriranja. Evidentiranje nedostajućih/oštećenih artefakata (uključujući
UPDATE oštećenog artefakta) ostaje samo u putanji detalja kontrolne ploče. Obje putanje dijele čisti
razrješivač detalja; izvoz koristi asinhrono čitanje datotečnog sistema i isti redoslijed razrješavanja
artefakt → naslijeđeni ugrađeni sadržaj → naslijeđeni disk → ništa. Pokretanje pravi snimak maksimalnog `rowid` umetanja
kada podređeni proces otvori svoj čitač; kasnija umetanja čekaju sljedeće pokretanje. Ovo je granica
umetanja, a ne dugotrajna SQLite transakcija: WAL zapisivači i kontrolne tačke ostaju slobodni tokom
čekanja mreže. Ova granica ne zamrzava ažuriranja/brisanja postojećih redova.

Nakon svake prihvaćene grupe podređeni proces čeka potvrdu. Server prvo pohranjuje
kursor pomoću `advanceLogExportCursor`, a zatim šalje `ack`; nijedna sljedeća grupa ne počinje prije toga.
Neuspjelo slanje, pad ili istek vremena bilježe neuspjeh bez pomjeranja kursora za tu grupu. Prethodno
potvrđene grupe ostaju zabilježene; najviše jedna nepotvrđena grupa može biti ponovo poslana.
Uspjeh se bilježi tek nakon `done` i urednog završetka podređenog procesa. Neuspjesi prekidaju podređeni proces
signalom SIGTERM, uz prelazak na SIGKILL nakon 500 ms, a izvršilac čeka zatvaranje procesa.

| Varijabla okruženja                           | Zadano | Svrha                               |
| --------------------------------------------- | ------ | ----------------------------------- |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000 | Vremensko ograničenje po odredištu  |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024   | Ograničenje starog V8 prostora u MB |

Nevažeće/nepozitivne vrijednosti i vrijednosti koje nisu cijeli brojevi koriste zadane postavke. Postavka hipa nije ukupno
RSS ograničenje; vrlo velike grupe i dalje mogu iscrpiti memoriju podređenog procesa i sigurno prekinuti pokretanje.
Zadana vrijednost od 1024 MB ostavlja dovoljno prostora za zadanu grupu od 500 redova s artefaktima veličine 512 KiB i
uključenim tijelima, uključujući BigQuery serijalizaciju JSON-a u dijelovima prema broju bajtova. Ona ne čini
grupu od 10000 redova s tijelima sigurnom. Iscrpljivanje V8 hipa bilježi neuspjeh s jasnim postupkom: smanjite veličinu
grupe ili povećajte `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB`; kursor ostaje na posljednjoj
potvrđenoj grupi. Historijska ugrađena tijela/tijela na disku nisu obuhvaćena modernim ograničenjem artefakata.
Operateri moraju zasebno planirati RSS, posebno unutar kontejnera s ograničenom memorijom.

Podređeni proces nasljeđuje samo razriješeni `DATA_DIR`, `NODE_ENV`, eksplicitni `TZ` (razrješavanje lokalnog vremena
za naslijeđene nazive datoteka), `ELECTRON_RUN_AS_NODE` kada je prisutan i sljedeće ulazne vrijednosti za odlazne veze:
`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (i njihove varijante malim slovima),
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`.
Globalni Undici dispečer dijeli čisto serversko razrješavanje proxyja iz okruženja i pravila zaobilaženja lokalnih hostova,
uključujući `NO_PROXY`; ne uvozi `proxyFetch.ts` niti njegove zastavice baze podataka/funkcionalnosti.
Pristupni podaci proxyja uklanjaju se iz proslijeđenog izlaza i zabilježenih grešaka. Pristupni podaci odredišta
prenose se samo u jednoj početnoj IPC poruci, nikada kroz argv ili okruženje; prosljeđivanje izlaza/grešaka
ima prefiks i sanitizira se. U argumentima za izvršavanje podređenog procesa onemogućen je samo `ExperimentalWarning` kako bi se izbjeglo
ponavljanje Nodeovog upozorenja za SQLite pri svakom cron pokretanju; ostale vrste upozorenja ostaju vidljive.

Odredišni moduli moraju se moći uvesti bez zavisnosti koje zahtijevaju Next.js/server. Postojeća
BigQuery implementacija već ispunjava taj ugovor. Keševi pristupnih tokena traju samo tokom podređenog
pokretanja, a ne između pokretanja. Node je podržano izvršno okruženje (`package.json` engines), ali README odjeljak
za instalaciju Buna i `Dockerfile.bun` također oglašavaju putanju kompatibilnosti za produkciju koja koristi
`bun:sqlite` (`src/lib/db/core.ts` / adapteri). Stoga pod Bunom izvozi zadržavaju prethodnu
putanju unutar procesa i emituju jednokratno upozorenje: izolacija memorije podređenog procesa/vremenskog ograničenja nije dostupna. Koristite
Node za izolaciju petlje događaja i OOM-a; Bun se ovdje ne smatra namijenjenim samo za razvoj.

Kada je `includeBodies` omogućen, preferirajte učestalost na nivou minute, kao što je
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"`, umjesto gomilanja jednosatnog zaostatka korisnog sadržaja.
Ograničenja paketa i redova i dalje ograničavaju svako pokretanje. Pokretanje procesa plaća se po odredištu za svako pokretanje;
time se mali trošak pokretanja mijenja za izolaciju serverske petlje događaja, a ne za smanjenu ukupnu upotrebu CPU-a.

### Korisni sadržaji (upiti i dovršeci)

Izvoz podrazumijevano prenosi samo polja sažetka koja prikazuje **lista** dnevnika. Uključivanje
opcije **Izvezi upite i odgovore** (`includeBodies`) dodatno šalje ono što okno **detalja**
dnevnika prikazuje za svaki poziv:

| Polje                            | Šta sadrži                                                      |
| -------------------------------- | --------------------------------------------------------------- |
| `request_body` / `response_body` | Korisne sadržaje poziva onako kako ih nadzorna ploča prikazuje  |
| `pipeline_route_decision`        | Koje je odredište i model usmjerivač odabrao                    |
| `pipeline_client_request`        | Neobrađeni zahtjev tačno onako kako ga je klijent poslao        |
| `pipeline_openai_request`        | Nakon prevođenja u interni OpenAI oblik                         |
| `pipeline_provider_request`      | Kako je stvarno poslan uzvodno, u dijalektu pružaoca usluge     |
| `pipeline_provider_response`     | Neobrađeni uzvodni odgovor                                      |
| `pipeline_client_response`       | Ono što je vraćeno pozivaocu                                    |
| `pipeline_error`                 | Detalji greške na nivou cjevovoda za neuspjeli poziv            |
| `bodies_truncated`               | Tačno kada bilo koje gore navedeno polje dosegne `maxBodyBytes` |

Ovo je sadržaj upita, pa je **podrazumijevano isključen** i namjerno predstavlja izbor za svako odredište.
Šalje se ono što prikazuje nadzorna ploča jer izvoz i `getCallLogById` dijele razrješavanje
detalja: korisni sadržaji su
već očišćeni od ličnih podataka i tajne su redigovane prilikom zapisivanja, a poziv izvršen pomoću
`noLog` API ključa uopće ne pohranjuje korisni sadržaj, tako da nema šta izvesti.

Korisni sadržaji čitaju se za svaki red iz artefakta sistema datoteka, pa se hidratacija izvršava samo za odredišta
koja su je zatražila. Ako artefakt nedostaje ili je oštećen, izvozi se njegov sažetak s null korisnim sadržajima,
umjesto da paket bude neuspješan i da kursor ostane blokiran.

`maxBodyBytes` (podrazumijevano 262144) ograničava svako polje. Duži korisni sadržaji se **skraćuju umjesto
odbacuju** — skraćeni upit i dalje odgovara na pitanje „šta je zatraženo“ — a red se označava poljem
`bodies_truncated`. Delte koje se prenose dio po dio ne izvoze se; sastavljeni odgovor već se nalazi
u `pipeline_provider_response` i `pipeline_client_response`.

---

## 2. Datoteke

| Dio                        | Lokacija                                     |
| -------------------------- | -------------------------------------------- |
| Ugovor odredišta           | `src/lib/logExport/types.ts`                 |
| Registar                   | `src/lib/logExport/registry.ts`              |
| Upravljanje tajnama        | `src/lib/logExport/secrets.ts`               |
| Pokretač (nadređeni IPC)   | `src/lib/logExport/runner.ts`                |
| Životni ciklus procesa     | `src/lib/logExport/childRunner.ts`           |
| Ulaz podređenog procesa    | `src/lib/logExport/exportChild.ts`           |
| Otvarač samo za čitanje    | `src/lib/db/logExportReadOnly.ts`            |
| Zajednički upiti/mapiranje | `src/lib/usage/callLogExportQueries.ts`      |
| Razrješivač detalja        | `src/lib/usage/callLogDetailResolver.ts`     |
| API projekcija             | `src/lib/logExport/presenter.ts`             |
| BigQuery odredište         | `src/lib/logExport/destinations/bigquery.ts` |
| Google SA autentifikacija  | `src/lib/logExport/googleServiceAccount.ts`  |
| Izvor evidencije poziva    | `src/lib/usage/callLogExportSource.ts`       |
| Perzistencija              | `src/lib/db/logExportDestinations.ts`        |
| Cron zadatak               | `src/lib/jobs/logExportJob.ts`               |
| REST sloj                  | `src/app/api/log-export/`                    |
| Stranica kontrolne ploče   | `src/app/(dashboard)/dashboard/log-export/`  |

Shema: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

Sve rute su autentifikovane upravljačkim pristupom (`requireManagementAuth`). Tajne se nikada ne vraćaju: pohranjena tajna se vraća kao literal `__stored__`, a slanje te vrijednosti nazad prilikom ažuriranja zadržava pohranjene vjerodajnice.

Kreiranje ili ažuriranje odredišta čiji tip deklariše tajnu **zahtijeva `STORAGE_ENCRYPTION_KEY`**. Bez njega, `encrypt()` je tihi prolaz (passthrough), pa se upis odbija sa 400 umjesto stavljanja vjerodajnica u SQLite u čistom tekstu (ista zaštita koju primjenjuje Telegram webhook).

| Metoda   | Putanja                                  | Svrha                                                   |
| -------- | ---------------------------------------- | ------------------------------------------------------- |
| `GET`    | `/api/log-export/types`                  | Tipovi odredišta + njihova lista konfiguracijskih polja |
| `GET`    | `/api/log-export/destinations`           | Lista odredišta (tajne redigovane)                      |
| `POST`   | `/api/log-export/destinations`           | Kreiraj odredište                                       |
| `GET`    | `/api/log-export/destinations/{id}`      | Čitaj jedno                                             |
| `PUT`    | `/api/log-export/destinations/{id}`      | Ažuriraj naziv / omogućeno / konfiguraciju / grupisanje |
| `DELETE` | `/api/log-export/destinations/{id}`      | Izbriši                                                 |
| `POST`   | `/api/log-export/destinations/{id}/test` | Provjeri vjerodajnice, ne upisuj ništa                  |
| `POST`   | `/api/log-export/destinations/{id}/run`  | Isprazni odmah, ista putanja kao i zakazano izvršavanje |
| `GET`    | `/api/log-export/status`                 | Cron stanje, nedavna izvršavanja, zaostatak po meti     |

`GET /api/log-export/types` je ono što čini korisnički interfejs generičkim: forma kontrolne ploče se renderuje iz vraćenih deskriptora polja, tako da novo odredište ne zahtijeva promjenu korisničkog interfejsa.

---

## 4. BigQuery odredište

Konfiguracijski ključevi (`type: "bigquery"`):

| Ključ                | Napomene                                                                   |
| -------------------- | -------------------------------------------------------------------------- |
| `projectId`          | GCP projekat koji sadrži skup podataka                                     |
| `datasetId`          | `[A-Za-z0-9_]+`                                                            |
| `tableId`            | `[A-Za-z0-9_]+`                                                            |
| `location`           | Koristi se samo kada se skup podataka mora kreirati (podrazumijevano `EU`) |
| `serviceAccountJson` | Ključ servisnog naloga. Tajna: šifrovano u mirovanju, nikada se ne vraća   |
| `autoCreate`         | Kreiraj skup podataka i tabelu pri prvom izvozu (podrazumijevano `true`)   |

Servisni nalog treba `bigquery.tables.updateData` na ciljnoj tabeli, plus `bigquery.datasets.create` / `bigquery.tables.create` kada je `autoCreate` uključen.

Konfigurisana serija (batch) je **kursor** jedinica, a ne HTTP jedinica: `send()` je dijeli na insertAll pozive od najviše 500 redova, tako da veliki `batch_size` ne može premašiti BigQuery ograničenje zahtjeva od 10 MB. Prolazni statusi (408/429/500/502/503/504) se ponovo pokušavaju do tri puta uz eksponencijalno čekanje (backoff), ponovo koristeći iste insertIds; greške autentifikacije i šeme bacaju izuzetak pri prvom pokušaju umjesto da troše izvršavanje.

Tabela kreirana prije nekoliko trenutaka još nije vidljiva streaming krajnjoj tački, koja odgovara sa 404 nekoliko sekundi. Taj 404 se ponovo pokušava, ali **samo kada je ovo izvršavanje kreiralo tabelu** — tabela koja zaista nedostaje i dalje brzo pada (fails fast). Imajte na umu da ponovno kreiranje tabele pod imenom koje je nedavno izbrisano čini da BigQuery odbija streaming unose nekoliko minuta; to je svojstvo brisanja-pa-ponovnog-kreiranja, pa preferirajte novo ime tabele umjesto brisanja i ponovnog dodavanja iste.

**Djelimični neuspjeh stiže kao HTTP 200 sa nepraznim `insertErrors[]`.** To se tretira kao neuspjeh i baca izuzetak, što zaustavlja kursor da napreduje pored redova koje BigQuery nikada nije prihvatio; `tests/unit/log-export-bigquery.test.ts` definiše to ponašanje.

Transport je običan REST — samopotpisana RS256 tvrdnja se mijenja za pristupni token na `https://oauth2.googleapis.com/token`, a zatim redovi idu na `tabledata.insertAll`. Nema uključenog Google SDK-a. Pristupni tokeni se keširaju u procesu po (servisni nalog, opseg).

Kreirana tabela nosi jednu kolonu po polju Logs-tab plus `exported_at`, i raspoređena je prema tome kako se dnevnici poziva zapravo pretražuju:

- **Dnevno particionisano po `timestamp`**, tako da upit ograničen datumom skenira samo te dane.
- **Klasterisano po `api_key_name`, `provider`, `model`, `status`** (tim redoslijedom), tako da filtriranje po tome ko ga je pokrenuo, kuda je otišlo ili da li nije uspjelo, odbacuje blokove unutar svake particije. BigQuery dozvoljava najviše četiri kolone za klasterisanje i redoslijed je bitan: filter samo na `api_key_name` odbacuje podatke, filter samo na `status` ne.
- **Opciono zadržavanje particija** putem `partitionExpirationDays` (0 zadržava sve), primjenjuje se kada se tabela kreira.

Obje postavke se primjenjuju u vrijeme kreiranja. Postojeća tabela zadržava raspored koji već ima, pa usmjerite odredište na novi ID tabele ako želite da ih usvojite.

`tests/unit/log-export-bigquery.test.ts` potvrđuje da mapper i šema tabele ostaju usklađeni, tako da se nova call-log kolona ne može neprimjetno odbaciti prilikom izlaza.

Serije se segmentiraju prema **oba** kriterijuma: broju redova i serijalizovanim bajtovima. Samo broj redova nije dovoljan kada se payload-ovi izvezu: 500 redova koji nose promptove mogu biti desetine megabajta, a insertAll odbija zahtjev preko 10 MB. Segmenti se zatvaraju na 500 redova ili 9 MB, šta god nastupi prvo.

---

## 5. Dodavanje odredišta

1. Kreirajte `src/lib/logExport/destinations/<name>.ts` koji eksportuje `LogExportDestinationType`:
   Zod `configSchema`, niz `fields` deskriptora za UI, `secretFields`, i `createClient(config)` koji vraća `test()` / `prepare()` / `send(records)`.
2. Dodajte ga u `DESTINATIONS` niz u `src/lib/logExport/registry.ts`.
3. Napišite testove u `tests/unit/`.

To je cijela izmjena: perzistencija, cron zadatak, REST sloj, enkripcija tajni i forma na dashboardu čitaju registar.

Dva pravila za novo odredište:

- `send()` **mora baciti izuzetak** (throw) u slučaju djelimičnog neuspjeha. Razrješavanje (resolving) znači "odredište ima ove redove", a kursor se trajno pomjera preko njih.
- Odredište koje prihvata URL koji unosi korisnik mora ga validirati kroz `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`) prije preuzimanja, na isti način kao što to rade webhooks. BigQuery ovo ne treba: njegovi hostovi su konstante.

---

## 6. Upravljanje

- **Dashboard**: Integrations → Log export. Dodajte odredište, pokrenite **Test** da provjerite akreditive bez upisivanja redova, a zatim ga omogućite.
- **Backlog**: svaka kartica odredišta prikazuje redove na čekanju i kursor; `GET /api/log-export/status` vraća iste podatke plus posljednjih 20 pokretanja poslova.
- **Neuspjeh jednog odredišta ne dovodi do neuspjeha ostalih** — rezime pokretanja bilježi status po odredištu u `last_status` / `last_error`, a historija pokretanja poslova čuva agregat.
- **Brisanje odredišta briše njegov kursor.** Ponovno dodavanje počinje od najstarijeg zadržanog dnevnika poziva, što ponovo šalje redove koje odredište možda već posjeduje. Na BigQuery-u, `insertId` po redu to apsorbuje samo unutar BigQuery-evog vlastitog prozora za deduplikaciju, stoga je bolje onemogućiti odredište nego ga obrisati.
