# Log export (Hrvatski)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

Kontinuirani, inkrementalni izvoz zapisa poziva OmniRoute u vanjsko spremište analitičkih podataka.

Kartica nadzorne ploče Logs čuva povijest zahtjeva u SQLiteu (`call_logs`), čija je veličina ograničena
rotacijom i pravilima zadržavanja. Izvoz zapisa šalje isti skup zapisa prema rasporedu kako bi se mogli
čuvati dulje od lokalne baze podataka i povezivati s drugim podacima. BigQuery je prvo odredište;
cjevovod je registar, pa se dodatna odredišta mogu jednostavno dodavati.

---

## 1. Kako radi

```
poslužitelj (dešifriranje + provjera konfiguracije, usklađivanje kursora)
  → pokretanje IPC-a → izolirani OS proces exportChild
    → storage.sqlite samo za čitanje → zajednički upit/mapiranje zapisnika poziva
      → asinkrono učitavanje artefakata → odredišni prepare()/send()
        → skupni IPC → poslužitelj sprema kursor → potvrdni IPC
          → sljedeća grupa; IPC završetka → poslužitelj bilježi uspjeh
```

- **Raspored** — jedan cron zadatak `JobRegistry`, `log_export`, sa zadanom vrijednošću `0 * * * *` (svakog sata,
  UTC). Registriran je u `src/lib/initCloudSync.ts`; može se nadjačati s `OMNIROUTE_LOG_EXPORT_CRON`.
  Svako pokretanje redom obrađuje sva **omogućena** odredišta.
- **Kursor** — implicitni SQLiteov `call_logs.rowid`, koji se za svako odredište sprema u
  `log_export_destinations.cursor_row_id`. `timestamp` namjerno nije kursor: pozivatelji
  mogu navesti vlastitu vrijednost, pa spor zahtjev može biti zapisan nakon bržeg zahtjeva koji je
  pokrenut kasnije, a kursor vremenske oznake preskočio bi ga.
- **Grupiranje** — `batch_size` redaka po zahtjevu (zadano 500), `max_rows_per_run` redaka po pokretanju
  (zadano 10000), tako da se veliki zaostatak obrađuje tijekom nekoliko pokretanja umjesto da blokira jedno.
- **Isporuka** — kursor napreduje tek nakon što se `send()` razriješi. Neuspjela grupa ostavlja
  kursor na postojećem mjestu, pa se isti retci ponovno pokušavaju poslati pri sljedećem pokretanju. Jamstvo je
  isporuka barem jednom uz uklanjanje duplikata na strani odredišta, a ne stvarna isporuka točno jednom: BigQuery svakom
  retku dodjeljuje ključ prema ID-u zapisnika poziva, što poštuje prema načelu najboljeg mogućeg truda unutar vlastitog razdoblja za uklanjanje duplikata.
- **Zaštita od preklapanja** — cron pokretanje i `POST .../run` mogu se izvršiti istodobno. Odredište
  koje se već obrađuje preskače se umjesto da se obrađuje dvaput (`skipped: true` u rezultatu pokretanja),
  pa istodobno pokretanje ne može ponovno poslati grupu niti pomaknuti kursor unatrag.
- **Oporavak nakon brisanja** — ako `cursor_row_id` završi iznad `MAX(rowid)` (cijela je tablica
  očišćena i rowid vrijednosti ponovno su pokrenute), izvršitelj vraća kursor na 0 umjesto da trajno prestane uočavati nove retke.

### Izolirani izvršitelj i ograničenja

Svako pokretanje odredišta u Nodeu pokreće zaseban, kratkotrajan podređeni OS proces (`child_process`
s IPC-om, a ne `worker_threads`). Čitanje tijela, raščlanjivanje/serijalizacija JSON korisnog sadržaja, odredišni
`prepare()` i mrežni U/I odredišta izvršavaju se u tom procesu, a ne u petlji događaja poslužitelja.
IPC-om se prenose samo konfiguracija i male poruke o napretku; izvezeni zapisi nikada se ne vraćaju na
poslužitelj. Cron zadatak i ruta „Pokreni sada” zadržavaju isti javni rezultat i zaštitu od preklapanja.

Podređeni proces otvara poslužiteljev razriješeni `DATA_DIR/storage.sqlite` samo za čitanje pomoću `node:sqlite`,
uz `busy_timeout=5000` i `query_only=ON`. Ne uvozi nijedan singleton baze podataka i ne izvršava
migracije, sigurnosne kopije ni SQLite ažuriranja. Evidentiranje nedostajućih/oštećenih artefakata (uključujući
UPDATE oštećenog artefakta) ostaje samo u putanji pojedinosti nadzorne ploče. Obje putanje dijele čisti
razrješivač pojedinosti; izvoz koristi asinkrona čitanja datotečnog sustava i isti redoslijed razrješavanja:
artefakt → naslijeđeno ugrađeno → naslijeđeno na disku → ništa. Pokretanje stvara snimku maksimalnog rowid-a umetanja
kada podređeni proces otvori svoj čitač; kasnija umetanja čekaju sljedeće pokretanje. To je granica
umetanja, a ne dugotrajna SQLite transakcija: WAL zapisivači i kontrolne točke ostaju slobodni tijekom
čekanja mreže. Ova granica ne zamrzava ažuriranja/brisanja postojećih redaka.

Nakon svake prihvaćene grupe podređeni proces čeka potvrdu. Poslužitelj najprije sprema
kursor pomoću `advanceLogExportCursor`, a zatim šalje `ack`; nijedna sljedeća grupa ne počinje prije toga.
Neuspjelo slanje, rušenje ili istek vremena bilježi neuspjeh bez pomicanja kursora za tu grupu. Prethodno
potvrđene grupe ostaju spremljene; najviše se jedna nepotvrđena grupa može ponovno poslati.
Uspjeh se bilježi tek nakon `done` i urednog završetka podređenog procesa. Neuspjesi prekidaju podređeni proces
signalom SIGTERM, koji se nakon 500 ms pojačava u SIGKILL, a izvršitelj čeka zatvaranje procesa.

| Varijabla okruženja                           | Zadano | Svrha                               |
| --------------------------------------------- | ------ | ----------------------------------- |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000 | Vremensko ograničenje po odredištu  |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024   | Ograničenje starog V8 prostora u MB |

Za nevaljane vrijednosti te vrijednosti koje nisu pozitivne ili nisu cijeli brojevi koriste se zadane vrijednosti. Postavka hrpe nije ukupno
ograničenje RSS-a; vrlo velike grupe i dalje mogu iscrpiti memoriju podređenog procesa i sigurno uzrokovati neuspjeh pokretanja.
Zadana vrijednost od 1024 MB ostavlja dovoljno prostora za zadanu grupu od 500 redaka s artefaktima veličine 512 KiB i
uključenim tijelima, uključujući BigQueryjevu JSON serijalizaciju u dijelovima prema broju bajtova. Ona ne čini
grupu od 10000 redaka s tijelima sigurnom. Iscrpljivanje V8 hrpe bilježi neuspjeh s jasnom uputom za rješavanje: smanjite veličinu
grupe ili povećajte `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB`; kursor ostaje na posljednjoj
potvrđenoj grupi. Povijesna ugrađena tijela/tijela na disku nisu obuhvaćena suvremenim ograničenjem artefakata.
Operateri moraju zasebno planirati RSS, osobito unutar spremnika s ograničenom memorijom.

Podređeni proces nasljeđuje samo razriješeni `DATA_DIR`, `NODE_ENV`, eksplicitni `TZ` (razrješavanje lokalnog vremena
u naslijeđenim nazivima datoteka), `ELECTRON_RUN_AS_NODE` kada je prisutan i sljedeće ulazne vrijednosti za izlazne veze:
`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (i njihove inačice malim slovima),
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`.
Globalni Undici dispečer dijeli poslužiteljevo čisto razrješavanje proxyja iz okruženja i pravila zaobilaženja
lokalnih domaćina, uključujući `NO_PROXY`; ne uvozi `proxyFetch.ts` ni njegove zastavice baze podataka/značajki.
Vjerodajnice proxyja redigiraju se iz proslijeđenog izlaza i zabilježenih pogrešaka. Vjerodajnice odredišta
prenose se samo u jednoj početnoj IPC poruci, nikada kroz argv ili okruženje; prosljeđivanje izlaza/pogrešaka
ima prefiks i pročišćava se. U argumentima za izvršavanje podređenog procesa onemogućuje se samo `ExperimentalWarning` kako bi se izbjeglo
ponavljanje Nodeova upozorenja za SQLite pri svakom cron pokretanju; ostale vrste upozorenja ostaju vidljive.

Odredišni moduli moraju se moći uvesti bez ovisnosti o Next.js-u ili ovisnosti namijenjenih samo poslužitelju. Postojeća implementacija za
BigQuery već ispunjava taj ugovor. Predmemorije pristupnih tokena traju samo tijekom izvođenja podređenog
procesa, ne između izvođenja. Node je podržano izvršno okruženje (`package.json` engines), ali odjeljak
o instalaciji B outputa u README-u i `Dockerfile.bun` također oglašavaju produkcijski put kompatibilnosti koji koristi
`bun:sqlite` (`src/lib/db/core.ts` / prilagodnici). Stoga pod Bunom izvozi zadržavaju prethodni
put unutar procesa i emitiraju jednokratno upozorenje: izolacija memorije podređenog procesa i vremenskog ograničenja nije dostupna. Upotrebljavajte
Node za izolaciju petlje događaja i OOM-a; Bun se ovdje ne smatra namijenjenim samo razvoju.

Kada je `includeBodies` omogućen, dajte prednost rasporedu na razini minuta, primjerice
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"`, umjesto gomilanja satnog zaostatka korisnih sadržaja.
Ograničenja serije i redaka i dalje ograničavaju svako izvođenje. Pokretanje procesa plaća se po odredištu pri svakom izvođenju;
time se mali trošak pokretanja mijenja za izolaciju petlje događaja poslužitelja, a ne za smanjenje ukupne potrošnje CPU-a.

### Korisni sadržaji (upiti i dovršeci)

Prema zadanim postavkama izvoz sadrži samo sažeta polja koja prikazuje **popis** Zapisa. Uključivanjem
opcije **Izvezi upite i odgovore** (`includeBodies`) dodatno se šalje ono što okno s **pojedinostima**
Zapisa prikazuje za svaki poziv:

| Polje                            | Što sadrži                                                     |
| -------------------------------- | -------------------------------------------------------------- |
| `request_body` / `response_body` | Korisne sadržaje poziva onako kako ih nadzorna ploča prikazuje |
| `pipeline_route_decision`        | Koje je odredište i model usmjerivač odabrao                   |
| `pipeline_client_request`        | Neobrađeni zahtjev točno onako kako ga je klijent poslao       |
| `pipeline_openai_request`        | Nakon prevođenja u interni OpenAI oblik                        |
| `pipeline_provider_request`      | Kako je stvarno poslano uzvodno, u dijalektu pružatelja        |
| `pipeline_provider_response`     | Neobrađeni uzvodni odgovor                                     |
| `pipeline_client_response`       | Ono što je vraćeno pozivatelju                                 |
| `pipeline_error`                 | Pojedinosti o pogrešci na razini obrade neuspjelog poziva      |
| `bodies_truncated`               | Istinito kada bilo koje prethodno polje dosegne `maxBodyBytes` |

To je sadržaj upita, pa je **prema zadanim postavkama isključeno** i namjerno se odabire zasebno za svako odredište.
Šalje se ono što prikazuje nadzorna ploča jer izvoz i `getCallLogById` dijele razrješavanje
pojedinosti: iz korisnih sadržaja već su uklonjeni podaci koji otkrivaju identitet i redigirane tajne
pri zapisivanju, a poziv upućen API ključem `noLog` uopće ne pohranjuje korisni sadržaj, pa nema
ničega za izvoz.

Korisni sadržaji čitaju se za svaki redak iz artefakta datotečnog sustava, pa se učitavanje obavlja samo za odredišta
koja su ga zatražila. Ako artefakt nedostaje ili je oštećen, izvozi se njegov sažetak s vrijednostima null za korisne sadržaje,
umjesto da se prekine obrada serije i blokira pokazivač.

`maxBodyBytes` (zadano 262144) ograničava svako polje. Dulji korisni sadržaji **skraćuju se umjesto
odbacivanja** — odrezani upit i dalje odgovara na pitanje „što je zatraženo” — a redak se označava poljem
`bodies_truncated`. Delta-promjene emitirane dio po dio ne izvoze se; sastavljeni odgovor već se nalazi
u poljima `pipeline_provider_response` i `pipeline_client_response`.

---

## 2. Datoteke

| Dio                             | Lokacija                                     |
| ------------------------------- | -------------------------------------------- |
| Ugovor odredišta                | `src/lib/logExport/types.ts`                 |
| Registar                        | `src/lib/logExport/registry.ts`              |
| Rukovanje tajnama               | `src/lib/logExport/secrets.ts`               |
| Izvršitelj (nadređeni IPC)      | `src/lib/logExport/runner.ts`                |
| Životni ciklus procesa          | `src/lib/logExport/childRunner.ts`           |
| Ulazna točka podređenog procesa | `src/lib/logExport/exportChild.ts`           |
| Otvarač samo za čitanje         | `src/lib/db/logExportReadOnly.ts`            |
| Zajednički upiti/mapiranje      | `src/lib/usage/callLogExportQueries.ts`      |
| Razrješivač detalja             | `src/lib/usage/callLogDetailResolver.ts`     |
| API projekcija                  | `src/lib/logExport/presenter.ts`             |
| BigQuery odredište              | `src/lib/logExport/destinations/bigquery.ts` |
| Autentikacija Google SA         | `src/lib/logExport/googleServiceAccount.ts`  |
| Izvor zapisnika poziva          | `src/lib/usage/callLogExportSource.ts`       |
| Trajna pohrana                  | `src/lib/db/logExportDestinations.ts`        |
| Cron zadatak                    | `src/lib/jobs/logExportJob.ts`               |
| REST sloj                       | `src/app/api/log-export/`                    |
| Stranica nadzorne ploče         | `src/app/(dashboard)/dashboard/log-export/`  |

Shema: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

Sve rute zahtijevaju autentikaciju za upravljanje (`requireManagementAuth`). Tajne se nikada ne vraćaju:
pohranjena tajna vraća se kao doslovna vrijednost `__stored__`, a slanje te vrijednosti natrag pri ažuriranju
zadržava pohranjenu vjerodajnicu.

Stvaranje ili ažuriranje odredišta čija vrsta deklarira tajnu **zahtijeva
`STORAGE_ENCRYPTION_KEY`**. Bez njega je `encrypt()` tihi prolaz bez izmjena, pa se zapisivanje
odbija odgovorom 400 umjesto spremanja vjerodajnice u SQLite kao običnog teksta (ista zaštita koju
primjenjuje Telegram webhook).

| Metoda   | Putanja                                  | Svrha                                                         |
| -------- | ---------------------------------------- | ------------------------------------------------------------- |
| `GET`    | `/api/log-export/types`                  | Vrste odredišta + njihov popis konfiguracijskih polja         |
| `GET`    | `/api/log-export/destinations`           | Popis odredišta (tajne su redigirane)                         |
| `POST`   | `/api/log-export/destinations`           | Stvaranje odredišta                                           |
| `GET`    | `/api/log-export/destinations/{id}`      | Dohvaćanje jednog odredišta                                   |
| `PUT`    | `/api/log-export/destinations/{id}`      | Ažuriranje naziva / omogućenosti / konfiguracije / grupiranja |
| `DELETE` | `/api/log-export/destinations/{id}`      | Brisanje                                                      |
| `POST`   | `/api/log-export/destinations/{id}/test` | Provjera vjerodajnica bez ikakvog zapisivanja                 |
| `POST`   | `/api/log-export/destinations/{id}/run`  | Trenutačno pražnjenje, istim putem kao i zakazano pokretanje  |
| `GET`    | `/api/log-export/status`                 | Stanje crona, nedavna pokretanja, zaostatak po cilju          |

`GET /api/log-export/types` omogućuje generičko korisničko sučelje: obrazac nadzorne ploče generira se iz
vraćenih deskriptora polja, pa novo odredište ne zahtijeva promjenu korisničkog sučelja.

---

## 4. BigQuery odredište

Konfiguracijski ključevi (`type: "bigquery"`):

| Ključ                | Napomene                                                             |
| -------------------- | -------------------------------------------------------------------- |
| `projectId`          | GCP projekt koji sadrži skup podataka                                |
| `datasetId`          | `[A-Za-z0-9_]+`                                                      |
| `tableId`            | `[A-Za-z0-9_]+`                                                      |
| `location`           | Upotrebljava se samo kada treba stvoriti skup podataka (zadano `EU`) |
| `serviceAccountJson` | Ključ računa usluge. Tajna: šifriran u mirovanju, nikada se ne vraća |
| `autoCreate`         | Stvaranje skupa podataka i tablice pri prvom izvozu (zadano `true`)  |

Račun usluge treba dopuštenje `bigquery.tables.updateData` na ciljnoj tablici, kao i
`bigquery.datasets.create` / `bigquery.tables.create` kada je `autoCreate` uključen.

Konfigurirana serija jedinica je **kursora**, a ne HTTP-a: `send()` je dijeli na pozive insertAll
s najviše 500 redaka, tako da veliki `batch_size` ne može prekoračiti BigQueryjevo ograničenje zahtjeva od 10 MB.
Privremeni statusi (408/429/500/502/503/504) pokušavaju se ponovno do tri puta uz eksponencijalno
povećanje čekanja, koristeći iste insertIds; pogreške autentikacije i sheme izazivaju iznimku pri prvom pokušaju
umjesto uzaludnog trošenja pokretanja.

Tablica stvorena prije nekoliko trenutaka još nije vidljiva krajnjoj točki za strujanje, koja nekoliko
sekundi odgovara statusom 404. Taj se 404 ponovno pokušava, ali **samo kada je ovo pokretanje stvorilo tablicu** —
tablica koja doista nedostaje i dalje odmah uzrokuje neuspjeh. Imajte na umu da ponovno stvaranje tablice pod nazivom
nedavno izbrisane tablice uzrokuje da BigQuery nekoliko minuta odbija umetanja strujanjem; to je svojstvo postupka
brisanja pa ponovnog stvaranja, stoga radije upotrijebite novi naziv tablice nego da je uklonite i ponovno dodate.

**Djelomični neuspjeh stiže kao HTTP 200 s nepraznim `insertErrors[]`.** To se smatra
neuspjehom i izaziva iznimku, čime se sprječava napredovanje kursora preko redaka koje BigQuery nikada nije
prihvatio; `tests/unit/log-export-bigquery.test.ts` utvrđuje to ponašanje.

Prijenos se odvija običnim REST-om — samopotpisana RS256 tvrdnja razmjenjuje se za pristupni token na
`https://oauth2.googleapis.com/token`, a zatim se retci šalju u `tabledata.insertAll`. Ne uključuje se
nijedan Google SDK. Pristupni tokeni predmemoriraju se unutar procesa za svaki par (račun usluge, opseg).

Stvorena tablica sadrži po jedan stupac za svako polje kartice Logs te `exported_at`, a organizirana je prema
načinu na koji se zapisnici poziva zaista pretražuju:

- **Particionirana po danima prema `timestamp`**, tako da upit ograničen datumom skenira samo te dane.
- **Grupirana prema `api_key_name`, `provider`, `model`, `status`** (tim redoslijedom), tako da filtriranje prema
  tome tko je pokrenuo poziv, kamo je otišao ili je li bio neuspješan uklanja blokove unutar svake particije. BigQuery
  dopušta najviše četiri stupca za grupiranje, a redoslijed je važan: filtar samo prema `api_key_name`
  uklanja blokove, dok filtar samo prema `status` to ne čini.
- **Neobavezno zadržavanje particija** putem `partitionExpirationDays` (0 zadržava sve), koje se primjenjuje
  pri stvaranju tablice.

Obje se postavke primjenjuju pri stvaranju. Postojeća tablica zadržava raspored koji već ima, stoga
odredište usmjerite na novi ID tablice ako ih želite primijeniti.

`tests/unit/log-export-bigquery.test.ts` provjerava da mapiranje i shema tablice ostanu
usklađeni, tako da se novi stupac zapisnika poziva ne može neprimjetno izostaviti pri izvozu.

Paketi se dijele prema **oba** kriterija: broju redaka i broju serijaliziranih bajtova. Sam broj redaka nije dovoljan
nakon što se počnu izvoziti korisni sadržaji: 500 redaka koji sadrže upite može zauzimati desetke megabajta, a insertAll
odbija zahtjeve veće od 10 MB. Paketi se zatvaraju pri 500 redaka ili 9 MB, ovisno o tome što nastupi prije.

---

## 5. Dodavanje odredišta

1. Stvorite `src/lib/logExport/destinations/<name>.ts` koji izvozi `LogExportDestinationType`:
   Zod `configSchema`, niz deskriptora `fields` za korisničko sučelje, `secretFields` i
   `createClient(config)` koji vraća `test()` / `prepare()` / `send(records)`.
2. Dodajte ga u niz `DESTINATIONS` u `src/lib/logExport/registry.ts`.
3. Napišite testove u `tests/unit/`.

To je cijela izmjena: sloj za trajnu pohranu, cron zadatak, REST sloj, šifriranje tajni i
obrazac na nadzornoj ploči čitaju registar.

Dva pravila za novo odredište:

- `send()` **mora baciti iznimku** u slučaju djelomičnog neuspjeha. Uspješan završetak znači „odredište sadrži ove retke”,
  a pokazivač se trajno pomiče iza njih.
- Odredište koje prihvaća URL koji je unio korisnik mora ga prije dohvaćanja provjeriti putem
  `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`),
  na isti način kao webhookovi. BigQuery to ne zahtijeva: njegovi su hostovi konstantni.

---

## 6. Upravljanje

- **Nadzorna ploča**: Integracije → Izvoz zapisnika. Dodajte odredište, pokrenite **Test** kako biste provjerili vjerodajnice
  bez zapisivanja redaka, a zatim ga omogućite.
- **Zaostali redci**: svaka kartica odredišta prikazuje retke na čekanju i pokazivač; `GET
/api/log-export/status` vraća iste podatke i posljednjih 20 izvođenja zadatka.
- **Neuspjeh jednog odredišta ne uzrokuje neuspjeh ostalih** — sažetak izvođenja bilježi status za svako odredište
  u `last_status` / `last_error`, a povijest izvođenja zadatka čuva zbirne podatke.
- **Brisanjem odredišta briše se i njegov pokazivač.** Ponovno dodavanje započinje od najstarijeg zadržanog
  zapisnika poziva, čime se ponovno šalju redci koje odredište možda već sadrži. U BigQueryju `insertId`
  za svaki redak to rješava samo unutar vlastitog BigQueryjeva vremenskog okvira za uklanjanje duplikata, stoga je bolje
  onemogućiti odredište nego ga izbrisati.
