# Log export (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

Az OmniRoute hívásnaplóinak folyamatos, inkrementális exportálása egy külső analitikai adattárba.

A Naplók irányítópultlap SQLite-ban (`call_logs`) őrzi a kérések előzményeit, amelyek méretét
a rotáció és a megőrzési idő korlátozza. A naplóexport ugyanazt a rekordkészletet ütemezetten
továbbítja, így az a helyi adatbázisnál hosszabb ideig megőrizhető, és más adatokkal összekapcsolható.
Az első célhely a BigQuery; a folyamatleíró egy regisztrációs jegyzék, így további célhelyek
egyszerűen hozzáadhatók.

---

## 1. Működés

```
szerver (konfiguráció visszafejtése + ellenőrzése, kurzor egyeztetése)
  → IPC indítása → elkülönített exportChild operációsrendszer-folyamat
    → csak olvasható storage.sqlite → megosztott hívásnapló-lekérdezés/-leképezés
      → aszinkron műtermékbetöltés → célhely prepare()/send()
        → köteg IPC-n keresztül → szerver menti a kurzort → nyugtázás IPC-n keresztül
          → következő köteg; kész IPC-üzenet → szerver rögzíti a sikert
```

- **Ütemezés** — egyetlen `JobRegistry` cron-feladat, `log_export`, amelynek alapértelmezett ütemezése `0 * * * *` (óránként,
  UTC szerint). Regisztrációja a `src/lib/initCloudSync.ts` fájlban történik; az `OMNIROUTE_LOG_EXPORT_CRON` használatával felülírható.
  Minden futás egymás után kiüríti az összes **engedélyezett** célhelyet.
- **Kurzor** — az SQLite implicit `call_logs.rowid` értéke, célhelyenként tárolva a
  `log_export_destinations.cursor_row_id` mezőben. A `timestamp` szándékosan nem kurzor: a hívók
  saját értéket adhatnak meg, így egy lassú kérés egy később indított, de gyorsabb kérés után is
  bekerülhet, és egy időbélyegalapú kurzor kihagyná azt.
- **Kötegelés** — kérésenként `batch_size` sor (alapértelmezés szerint 500), futásonként
  `max_rows_per_run` sor (alapértelmezés szerint 10000), így a nagy várólista több ütemezett futás
  alatt ürül ki ahelyett, hogy egyetlen futást blokkolna.
- **Kézbesítés** — a kurzor csak a `send()` sikeres befejeződése után lép tovább. Egy sikertelen
  köteg a helyén hagyja a kurzort, így a következő futáskor ugyanazokkal a sorokkal történik újabb
  próbálkozás. A garancia legalább egyszeri kézbesítés céloldali deduplikációval, nem valódi
  pontosan egyszeri kézbesítés: a BigQuery minden sort a hívásnapló azonosítója alapján kulcsol,
  amit a saját deduplikációs időablakán belül a lehetőségekhez mérten vesz figyelembe.
- **Átfedés elleni védelem** — a cron futása és a `POST .../run` egyszerre is elindulhat. A már
  ürítés alatt álló célhely kimarad ahelyett, hogy kétszer ürülne ki (`skipped: true` a futási
  eredményben), így egy párhuzamos futás nem küldhet újra egy köteget, és nem írhatja visszafelé
  a kurzort.
- **Helyreállítás törlés után** — ha a `cursor_row_id` a `MAX(rowid)` fölé kerül (a teljes táblát
  törölték, és a sorazonosítók újraindultak), a futtató 0-ra állítja vissza, így nem válik végleg
  vakká.

### Elkülönített futtató és korlátok

Node alatt minden célhelyfutás különálló, rövid életű operációsrendszer-gyermekfolyamatot indít
(`child_process` IPC-vel, nem `worker_threads` használatával). A törzsek beolvasása, a hasznos
adat JSON-feldolgozása/-szerializálása, a célhely `prepare()` művelete és a célhely hálózati I/O-ja
mind ott fut, nem a szerver eseményciklusán. IPC-n keresztül csak a konfiguráció és kis méretű
folyamatüzenetek haladnak át; az exportált rekordok soha nem térnek vissza a szerverhez. A
cron-feladat és az azonnali futtatási útvonal ugyanazt a nyilvános eredményt és átfedés elleni
védelmet tartja meg.

A gyermekfolyamat csak olvasható módban nyitja meg a szerver feloldott
`DATA_DIR/storage.sqlite` adatbázisát a `node:sqlite` használatával, `busy_timeout=5000` és
`query_only=ON` beállításokkal. Nem importál adatbázis-singleton példányt, és nem végez
migrációkat, biztonsági mentéseket vagy SQLite-frissítéseket. A hiányzó/sérült műtermékek
nyilvántartási műveletei (beleértve a sérült műtermékhez tartozó UPDATE műveletet) kizárólag az
irányítópult részletes nézetének útvonalán maradnak. Mindkét útvonal közös, tiszta részletfeloldót
használ; az export aszinkron fájlrendszer-olvasásokat, valamint ugyanazt a műtermék → örökölt
beágyazott adat → örökölt lemezadat → nincs feloldási sorrendet használja. Egy futás pillanatképet
készít a legnagyobb beszúrási sorazonosítóról, amikor a gyermekfolyamat megnyitja az olvasót; a
későbbi beszúrások a következő futásra várnak. Ez beszúrási határ, nem hosszú életű SQLite-tranzakció:
a WAL-írók és az ellenőrzőpontok a hálózati várakozások alatt is szabadon működhetnek. A meglévő
sorok frissítéseit/törléseit ez a határ nem fagyasztja be.

Minden elfogadott köteg után a gyermekfolyamat nyugtázásra vár. A szerver először menti a kurzort
az `advanceLogExportCursor` használatával, majd elküldi az `ack` üzenetet; előtte nem indulhat el
a következő köteg. Küldési hiba, összeomlás vagy időtúllépés esetén a rendszer a köteg kurzorának
továbbléptetése nélkül rögzíti a hibát. A korábban nyugtázott kötegek véglegesítve maradnak;
legfeljebb az egyetlen nyugtázatlan köteg küldhető újra. A rendszer csak a `done` üzenet és a
gyermekfolyamat hibamentes kilépése után rögzít sikert. Hiba esetén a gyermekfolyamatot SIGTERM
jelzéssel állítja le, 500 ms után SIGKILL jelzésre váltva, majd a futtató megvárja a folyamat
bezárulását.

| Környezeti változó                            | Alapértelmezés | Rendeltetés                                    |
| --------------------------------------------- | -------------- | ---------------------------------------------- |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000         | Célhelyenkénti teljes futásidőkorlát           |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024           | A gyermekfolyamat V8 old-space korlátja MB-ban |

Érvénytelen, nem pozitív vagy nem egész értékek esetén az alapértelmezések lépnek érvénybe. A
halombeállítás nem a teljes RSS korlátja; a nagyon nagy kötegek továbbra is kimeríthetik a
gyermekfolyamat memóriáját, és biztonságosan meghiúsíthatják a futást. Az alapértelmezett 1024 MB
elegendő tartalékot hagy az alapértelmezett 500 soros köteg számára, ha az 512 KiB méretű
műtermékek törzsei is engedélyezve vannak, beleértve a BigQuery bájttömbökre bontott
JSON-szerializálását is. Ettől egy 10000 soros, törzseket tartalmazó köteg még nem válik
biztonságossá. A V8-halom kimerülése végrehajtható javaslatot tartalmazó hibát rögzít: csökkentse
a kötegméretet, vagy növelje az `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` értékét; a kurzor
az utolsó nyugtázott kötegnél marad. A korábbi beágyazott/lemezen tárolt törzsekre nem vonatkozik
a modern műtermékkorlát. Az üzemeltetőknek az RSS-t külön kell méretezniük, különösen
memóriakorlátos konténerekben.

A gyermekfolyamat csak a feloldott `DATA_DIR`, `NODE_ENV`, explicit `TZ` (örökölt fájlnév
helyi idő szerinti feloldásához), valamint — ha jelen van — az `ELECTRON_RUN_AS_NODE` értékét,
továbbá a következő kimenő beállításokat örökli:
`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (és ezek kisbetűs változatai),
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`.
Egy globális Undici-diszpécser osztozik a szerver tiszta, környezetalapú proxyfeloldásán és a
helyi gépek megkerülési szabályain, beleértve a `NO_PROXY` beállítást; nem importálja a
`proxyFetch.ts` fájlt, sem annak adatbázis-/funkciójelzőit. A proxyauthentikációs adatok ki vannak
takarva a továbbított kimenetből és a rögzített hibákból. A célhely hitelesítő adatai kizárólag
egyetlen indítási IPC-üzenetben haladnak, soha nem az argv vagy a környezet részeként; a
kimenet-/hibatovábbítás előtaggal van ellátva és megtisztítva. A gyermekfolyamat végrehajtási
argumentumaiban csak az `ExperimentalWarning` van letiltva, hogy a Node SQLite-figyelmeztetése ne
ismétlődjön meg minden cron-futáskor; a többi figyelmeztetéstípus látható marad.

A célmoduloknak Next.js-/kizárólag szerveroldali függőségek nélkül importálhatóknak kell lenniük. A meglévő
BigQuery-megvalósítás már megfelel ennek a szerződésnek. A hozzáférési tokenek gyorsítótára csak az adott
gyermekfolyamat futása alatt él, a futások között nem. A támogatott futtatókörnyezet a Node (`package.json` engines), de a README Bun-
telepítési szakasza és a `Dockerfile.bun` egy `bun:sqlite`-ot használó éles kompatibilitási útvonalat is
hirdet (`src/lib/db/core.ts` / adapterek). Bun alatt ezért az exportálások megtartják a korábbi
folyamaton belüli útvonalat, és egyszeri figyelmeztetést adnak ki: a gyermekfolyamat heap-/időtúllépés-izolációja nem érhető el. Az eseményhurok és az OOM
izolálásához használjon Node-ot; a Bun itt nem kizárólag fejlesztési célúként van kezelve.

Ha az `includeBodies` engedélyezve van, részesítse előnyben a percenkénti ütemezést, például:
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"`, ahelyett, hogy óránkénti hasznosadat-hátralékot halmozna fel.
A köteg- és sorlimitek továbbra is korlátozzák az egyes futásokat. A folyamatindítás költsége célhelyenként és futásonként jelentkezik;
ez csekély indítási költséget cserél a szerver eseményhurkának izolációjára, nem pedig a teljes CPU-használat csökkentésére.

### Hasznos adatok (promptok és kiegészítések)

Alapértelmezés szerint az exportálás csak azokat az összegző mezőket tartalmazza, amelyeket a Logs **listája** megjelenít. Az
**Export prompts and responses** (`includeBodies`) bekapcsolásával ezen felül az is továbbításra kerül, amit a Logs **részletező**
panelje az egyes hívásokhoz megjelenít:

| Mező                             | Tartalma                                                                     |
| -------------------------------- | ---------------------------------------------------------------------------- |
| `request_body` / `response_body` | A hívás hasznos adatai a vezérlőpulton megjelenő formában                    |
| `pipeline_route_decision`        | A router által kiválasztott cél és modell                                    |
| `pipeline_client_request`        | A nyers kérés pontosan úgy, ahogyan az ügyfél elküldte                       |
| `pipeline_openai_request`        | A belső OpenAI-formátumra történő átalakítás után                            |
| `pipeline_provider_request`      | A szolgáltató dialektusában, ténylegesen upstream irányba elküldött formában |
| `pipeline_provider_response`     | A nyers upstream válasz                                                      |
| `pipeline_client_response`       | A hívónak visszaadott tartalom                                               |
| `pipeline_error`                 | Folyamatszintű hibarészletek egy sikertelen híváshoz                         |
| `bodies_truncated`               | Igaz, ha a fenti mezők bármelyike elérte a `maxBodyBytes` értéket            |

Ez prompttartalom, ezért **alapértelmezés szerint ki van kapcsolva**, és szándékosan célhelyenként
választható. Az kerül továbbításra, amit a vezérlőpult megjelenít, mivel az exportálás és a `getCallLogById` ugyanazt a részletfeloldást
használja: a hasznos adatok
már a kiírásukkor személyesadat-mentesítve és titokelfedve vannak, a `noLog` API-kulccsal indított
hívások pedig egyáltalán nem tárolnak hasznos adatot, így nincs mit exportálni.

A rendszer soronként olvassa be a hasznos adatokat a fájlrendszerbeli műtermékből, ezért a hidratálás csak azoknál a célhelyeknél
fut le, amelyek ezt kérték. Hiányzó vagy sérült műtermék esetén a rendszer null értékű hasznos adatokkal exportálja az összegzést,
ahelyett, hogy meghiúsítaná a köteget és beragasztaná a kurzort.

A `maxBodyBytes` (alapértelmezett érték: 262144) minden mezőt korlátoz. A hosszabb hasznos adatok **csonkolásra, nem pedig
eldobásra kerülnek** — egy levágott prompt továbbra is megválaszolja a „mi volt a kérdés?” kérdést —, és a sor
`bodies_truncated` jelölést kap. A streamelt, darabonkénti delták nem kerülnek exportálásra; az összeállított válasz
már megtalálható a `pipeline_provider_response` és a `pipeline_client_response` mezőben.

---

## 2. Fájlok

| Elem                            | Hely                                         |
| ------------------------------- | -------------------------------------------- |
| Célrendszer-szerződés           | `src/lib/logExport/types.ts`                 |
| Regiszter                       | `src/lib/logExport/registry.ts`              |
| Titokkezelés                    | `src/lib/logExport/secrets.ts`               |
| Futtató (szülő IPC)             | `src/lib/logExport/runner.ts`                |
| Folyamat-életciklus             | `src/lib/logExport/childRunner.ts`           |
| Gyermekfolyamat belépési pontja | `src/lib/logExport/exportChild.ts`           |
| Csak olvasható megnyitó         | `src/lib/db/logExportReadOnly.ts`            |
| Megosztott lekérdezés/leképezés | `src/lib/usage/callLogExportQueries.ts`      |
| Részletfeloldó                  | `src/lib/usage/callLogDetailResolver.ts`     |
| API-projekció                   | `src/lib/logExport/presenter.ts`             |
| BigQuery-célrendszer            | `src/lib/logExport/destinations/bigquery.ts` |
| Google SA-hitelesítés           | `src/lib/logExport/googleServiceAccount.ts`  |
| Hívásnapló-forrás               | `src/lib/usage/callLogExportSource.ts`       |
| Perzisztencia                   | `src/lib/db/logExportDestinations.ts`        |
| Cron-feladat                    | `src/lib/jobs/logExportJob.ts`               |
| REST-réteg                      | `src/app/api/log-export/`                    |
| Irányítópult oldala             | `src/app/(dashboard)/dashboard/log-export/`  |

Séma: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

Minden útvonal kezelői hitelesítést használ (`requireManagementAuth`). A titkos értékek soha nem kerülnek visszaadásra:
a tárolt titkos érték helyett a literális `__stored__` érték érkezik vissza, és ha frissítéskor ezt az értéket küldik vissza,
a tárolt hitelesítési adat változatlan marad.

Olyan célhely létrehozásához vagy frissítéséhez, amelynek típusa titkos értéket deklarál, **szükséges a
`STORAGE_ENCRYPTION_KEY`**. Enélkül az `encrypt()` észrevétlenül változtatás nélkül továbbítja az értéket, ezért az írás
400-as hibával elutasításra kerül, ahelyett hogy a hitelesítési adat egyszerű szövegként kerülne az SQLite-ba (ugyanezt a védelmet
alkalmazza a Telegram-webhook is).

| Metódus  | Útvonal                                  | Cél                                                          |
| -------- | ---------------------------------------- | ------------------------------------------------------------ |
| `GET`    | `/api/log-export/types`                  | Célhelytípusok és konfigurációs mezőik listája               |
| `GET`    | `/api/log-export/destinations`           | Célhelyek listázása (titkok kitakarva)                       |
| `POST`   | `/api/log-export/destinations`           | Célhely létrehozása                                          |
| `GET`    | `/api/log-export/destinations/{id}`      | Egy célhely lekérése                                         |
| `PUT`    | `/api/log-export/destinations/{id}`      | Név / engedélyezés / konfiguráció / kötegelés frissítése     |
| `DELETE` | `/api/log-export/destinations/{id}`      | Törlés                                                       |
| `POST`   | `/api/log-export/destinations/{id}/test` | Hitelesítési adatok ellenőrzése írás nélkül                  |
| `POST`   | `/api/log-export/destinations/{id}/run`  | Azonnali kiürítés, az ütemezett futtatással azonos útvonalon |
| `GET`    | `/api/log-export/status`                 | Cron-állapot, legutóbbi futtatások, célhelyenkénti hátralék  |

A `GET /api/log-export/types` teszi általánossá a felhasználói felületet: az irányítópult űrlapja
a visszaadott mezőleírókból épül fel, így egy új célhelyhez nincs szükség felhasználóifelület-módosításra.

---

## 4. BigQuery-célhely

Konfigurációs kulcsok (`type: "bigquery"`):

| Kulcs                | Megjegyzések                                                                          |
| -------------------- | ------------------------------------------------------------------------------------- |
| `projectId`          | Az adatkészletet tartalmazó GCP-projekt                                               |
| `datasetId`          | `[A-Za-z0-9_]+`                                                                       |
| `tableId`            | `[A-Za-z0-9_]+`                                                                       |
| `location`           | Csak akkor használatos, ha az adatkészletet létre kell hozni (alapértelmezett: `EU`)  |
| `serviceAccountJson` | Szolgáltatásfiók kulcsa. Titkos: tároláskor titkosított, soha nem kerül visszaadásra  |
| `autoCreate`         | Az adatkészlet és a tábla létrehozása az első exportáláskor (alapértelmezett: `true`) |

A szolgáltatásfióknak `bigquery.tables.updateData` jogosultságra van szüksége a céltáblán, továbbá
`bigquery.datasets.create` / `bigquery.tables.create` jogosultságokra, ha az `autoCreate` be van kapcsolva.

A beállított köteg **kurzor**egység, nem HTTP-egység: a `send()` legfeljebb 500 soros insertAll-hívásokra
bontja, így egy nagy `batch_size` sem lépheti túl a BigQuery 10 MB-os kérési korlátját.
Az átmeneti állapotok (408/429/500/502/503/504) legfeljebb háromszor kerülnek újrapróbálásra exponenciális
visszalépéssel, ugyanazon insertIds értékek újrafelhasználásával; a hitelesítési és sémahibák már az első próbálkozáskor kivételt
váltanak ki, ahelyett hogy feleslegesen felhasználnák a futtatást.

Az alig néhány pillanattal korábban létrehozott tábla még nem látható a streamelési végpont számára, amely
néhány másodpercig 404-es választ ad. Ez a 404-es hiba újrapróbálásra kerül, de **csak akkor, ha ezt a futtatást a tábla hozta létre** —
egy valóban hiányzó tábla esetén a művelet továbbra is azonnal meghiúsul. Fontos, hogy egy nemrég törölt tábla nevével
új tábla létrehozásakor a BigQuery több percig elutasítja a streamelt beszúrásokat; ez
a törlés, majd újbóli létrehozás sajátossága, ezért a tábla eldobása és újbóli hozzáadása helyett célszerű új táblanevet használni.

**A részleges hiba HTTP 200-as válaszként, nem üres `insertErrors[]` tömbbel érkezik.** Ez hibának minősül,
és kivételt vált ki, ami megakadályozza, hogy a kurzor túllépjen azokon a sorokon, amelyeket a BigQuery nem
fogadott el; ezt a viselkedést a `tests/unit/log-export-bigquery.test.ts` rögzíti.

Az átvitel egyszerű REST-en keresztül történik — egy saját aláírású RS256-állítás hozzáférési tokenre cserélődik a
`https://oauth2.googleapis.com/token` címen, majd a sorok a `tabledata.insertAll` végpontra kerülnek. Google SDK
nincs bevonva. A hozzáférési tokenek folyamaton belül, (szolgáltatásfiók, hatókör) páronként gyorsítótárazódnak.

A létrehozott tábla a Naplók lap minden mezőjéhez egy-egy oszlopot, valamint egy `exported_at` oszlopot tartalmaz, és
a hívásnaplók tényleges lekérdezési módjához igazodik:

- **Nap szerint particionált a `timestamp` alapján**, így egy dátummal behatárolt lekérdezés csak az adott napokat vizsgálja.
- **Az `api_key_name`, `provider`, `model`, `status` szerint klaszterezett** (ebben a sorrendben), így annak szűrése, hogy
  ki futtatta, hová irányult, illetve sikertelen volt-e, az egyes partíciókon belüli blokkokat szűkíti. A BigQuery
  legfeljebb négy klaszterezési oszlopot engedélyez, és a sorrend számít: az önmagában alkalmazott `api_key_name` szűrő
  szűkíti a vizsgált blokkokat, az önmagában alkalmazott `status` szűrő viszont nem.
- **Opcionális partíciómegőrzés** a `partitionExpirationDays` segítségével (a 0 mindent megőriz), amely
  a tábla létrehozásakor kerül alkalmazásra.

Mindkét beállítás a létrehozáskor lép érvénybe. Egy meglévő tábla megtartja a már meglévő elrendezését, ezért
ha alkalmazni szeretné ezeket a beállításokat, a célként egy új táblaazonosítót adjon meg.

A `tests/unit/log-export-bigquery.test.ts` ellenőrzi, hogy a leképező és a táblaséma összhangban
maradjon, így egy új hívásnapló-oszlop nem maradhat ki észrevétlenül az exportálás során.

A kötegek darabolása **mind** a sorok száma, **mind** a szerializált méret alapján történik. A hasznos adatok
exportálásakor önmagában a sorok száma nem elegendő: 500, promptokat tartalmazó sor mérete több tíz megabájt is
lehet, az insertAll pedig elutasítja a 10 MB-nál nagyobb kéréseket. Egy darab 500 sornál vagy 9 MB-nál zárul le,
attól függően, hogy melyik határt éri el előbb.

---

## 5. Cél hozzáadása

1. Hozza létre a `src/lib/logExport/destinations/<name>.ts` fájlt, amely egy `LogExportDestinationType` típust exportál:
   egy Zod `configSchema` sémát, egy felhasználói felülethez tartozó `fields` leírótömböt, `secretFields` mezőket, valamint egy
   `createClient(config)` függvényt, amely `test()` / `prepare()` / `send(records)` metódusokat ad vissza.
2. Adja hozzá a `DESTINATIONS` tömbhöz a `src/lib/logExport/registry.ts` fájlban.
3. Írjon teszteket a `tests/unit/` könyvtárban.

Ez a teljes módosítás: az adatmegőrzés, a cron-feladat, a REST-réteg, a titkos adatok titkosítása és az
irányítópult űrlapja egyaránt a regisztert használja.

Két szabály vonatkozik az új célokra:

- A `send()` függvénynek részleges hiba esetén **kivételt kell dobnia**. A sikeres visszatérés azt jelenti, hogy „a cél rendelkezik ezekkel a sorokkal”,
  és a kurzor véglegesen túllép rajtuk.
- A felhasználó által megadott URL-t fogadó célnak a lekérés előtt a
  `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`) segítségével kell ellenőriznie azt,
  ugyanúgy, ahogy a webhookok teszik. A BigQuery esetében erre nincs szükség: a gazdagépnevei állandók.

---

## 6. Üzemeltetés

- **Irányítópult**: Integrációk → Naplóexportálás. Adjon hozzá egy célt, a hitelesítő adatok sorok írása nélküli
  ellenőrzéséhez futtassa a **Teszt** műveletet, majd engedélyezze a célt.
- **Feldolgozási hátralék**: minden cél kártyája megjeleníti a függőben lévő sorokat és a kurzort; a `GET
/api/log-export/status` ugyanezeket az adatokat adja vissza az utolsó 20 feladatfuttatással együtt.
- **Egy cél hibája nem okozza a többi cél hibáját** — a futtatási összesítés célonként rögzíti az
  állapotot a `last_status` / `last_error` mezőkben, a feladatfuttatások előzményei pedig megőrzik az összesített eredményt.
- **Egy cél törlése annak kurzorát is törli.** Az újbóli hozzáadás a legrégebbi megőrzött
  hívásnaplótól indul, így ismét elküldi azokat a sorokat, amelyekkel a cél esetleg már rendelkezik. A BigQuery esetében a soronkénti
  `insertId` ezt csak a BigQuery saját deduplikációs időablakán belül kezeli, ezért a cél törlése helyett inkább annak letiltását
  részesítse előnyben.
