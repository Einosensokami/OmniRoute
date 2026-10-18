# Log export (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

OmniRoute-kutsulokien jatkuva, inkrementaalinen vienti ulkoiseen analytiikkatietovarastoon.

Lokit-hallintapaneelin välilehti säilyttää pyyntöhistorian SQLite-tietokannassa (`call_logs`), jonka kokoa
rajoittavat kierto ja säilytysaika. Lokivienti lähettää saman tietuejoukon ajastetusti muualle, jotta se säilyy
paikallista tietokantaa pidempään ja voidaan yhdistää muihin tietoihin. BigQuery on ensimmäinen kohde;
putki käyttää rekisteriä, joten uusia kohteita voidaan lisätä.

---

## 1. Toimintaperiaate

```
palvelin (pura salaus + validoi määritykset, täsmäytä kohdistin)
  → käynnistä IPC → eristetty exportChild-käyttöjärjestelmäprosessi
    → vain luku -tilassa oleva storage.sqlite → jaettu kutsulokien kysely/määritys
      → asynkroninen artefaktien lataus → kohteen prepare()/send()
        → erän IPC → palvelin tallentaa kohdistimen → kuittauksen IPC
          → seuraava erä; valmistumisen IPC → palvelin kirjaa onnistumisen
```

- **Ajastus** — yksi `JobRegistry`-cron-työ, `log_export`, jonka oletusarvo on `0 * * * *` (tunneittain,
  UTC). Rekisteröidään tiedostossa `src/lib/initCloudSync.ts`; voidaan ohittaa muuttujalla `OMNIROUTE_LOG_EXPORT_CRON`.
  Jokainen ajo tyhjentää kaikki **käytössä olevat** kohteet peräkkäin.
- **Kohdistin** — SQLiten implisiittinen `call_logs.rowid`, joka tallennetaan kohdekohtaisesti kenttään
  `log_export_destinations.cursor_row_id`. Kenttää `timestamp` ei tarkoituksella käytetä kohdistimena: kutsujat
  voivat antaa sille oman arvonsa, joten hidas pyyntö voidaan kirjoittaa myöhemmin kuin myöhemmin alkanut
  nopeampi pyyntö, jolloin aikaleimaan perustuva kohdistin ohittaisi sen.
- **Eräkäsittely** — `batch_size` riviä pyyntöä kohden (oletus 500), `max_rows_per_run` riviä ajoa kohden
  (oletus 10000), jotta suuri jono tyhjennetään usean ajon aikana eikä yksi ajo estä toimintaa.
- **Toimitus** — kohdistin etenee vasta, kun `send()` on valmistunut. Epäonnistunut erä jättää
  kohdistimen entiseen paikkaansa, joten samat rivit yritetään uudelleen seuraavalla ajolla. Takuu on
  vähintään kerran tapahtuva toimitus ja kohdepään kaksoiskappaleiden poisto, ei todellinen täsmälleen kerran
  tapahtuva toimitus: BigQuery käyttää jokaisen rivin avaimena kutsulokin tunnusta, jota se noudattaa
  parhaan kykynsä mukaan oman deduplikointi-ikkunansa aikana.
- **Päällekkäisyyden esto** — cron-ajo ja `POST .../run` voivat käynnistyä samanaikaisesti. Jo
  tyhjennettävänä oleva kohde ohitetaan sen sijaan, että se tyhjennettäisiin kahdesti (`skipped: true`
  ajon tuloksessa), joten rinnakkainen ajo ei voi lähettää erää uudelleen tai siirtää kohdistinta taaksepäin.
- **Tyhjennyksestä palautuminen** — jos `cursor_row_id` päätyy arvon `MAX(rowid)` yläpuolelle (koko taulu
  tyhjennettiin ja rivitunnukset alkoivat uudelleen alusta), suorittaja palauttaa sen arvoon 0 sen sijaan,
  että se lakkaisi pysyvästi havaitsemasta rivejä.

### Eristetty suorittaja ja rajoitukset

Jokainen kohdeajo käynnistyy Nodessa erillisenä, lyhytikäisenä käyttöjärjestelmän aliprosessina (`child_process`
IPC-yhteydellä, ei `worker_threads`). Runkojen lukeminen, hyötykuorman JSON-jäsennys/-sarjallistaminen, kohteen
`prepare()` ja kohteen verkkoliikenne suoritetaan kaikki siellä, eivät palvelimen tapahtumasilmukassa.
IPC:n kautta siirretään vain määritykset ja pienet edistymisviestit; vietyjä tietueita ei koskaan palauteta
palvelimelle. Cron-työ ja Suorita nyt -reitti säilyttävät saman julkisen tuloksen ja päällekkäisyyden eston.

Aliprosessi avaa palvelimen ratkaistun tiedoston `DATA_DIR/storage.sqlite` vain luku -tilassa käyttäen moduulia
`node:sqlite`, asetuksilla `busy_timeout=5000` ja `query_only=ON`. Se ei tuo mitään tietokannan singleton-oliota
eikä suorita migraatioita, varmuuskopioita tai SQLite-päivityksiä. Puuttuvien tai vioittuneiden artefaktien
kirjanpito (mukaan lukien vioittuneen artefaktin UPDATE) säilyy vain hallintapaneelin tietonäkymässä. Molemmat
polut käyttävät yhteistä puhdasta tietojen ratkaisijaa; vienti käyttää asynkronisia tiedostojärjestelmän lukuja
ja samaa artefakti → vanha sisäinen → vanha levy → ei mitään -ratkaisujärjestystä. Ajo ottaa tilannevedoksen
suurimmasta lisäyshetken rivitunnuksesta, kun aliprosessi avaa lukijansa; myöhemmät lisäykset odottavat seuraavaa
ajoa. Tämä on lisäysraja, ei pitkäkestoinen SQLite-transaktio: WAL-kirjoittajat ja tarkistuspisteet voivat jatkaa
vapaasti verkkoodotusten aikana. Tämä raja ei jäädytä olemassa olevien rivien päivityksiä tai poistoja.

Jokaisen hyväksytyn erän jälkeen aliprosessi odottaa kuittausta. Palvelin tallentaa ensin
kohdistimen funktiolla `advanceLogExportCursor` ja lähettää sitten viestin `ack`; seuraava erä ei käynnisty ennen sitä.
Lähetysvirhe, kaatuminen tai aikakatkaisu kirjaa epäonnistumisen etenemättä kyseisen erän yli. Aiemmin
kuitatut erät pysyvät vahvistettuina; enintään yksi kuittaamaton erä voidaan lähettää uudelleen.
Onnistuminen kirjataan vasta viestin `done` ja aliprosessin siistin poistumisen jälkeen. Epäonnistumiset
lopettavat aliprosessin signaalilla SIGTERM ja siirtyvät signaaliin SIGKILL 500 ms:n jälkeen, minkä jälkeen
suorittaja odottaa prosessin sulkeutumista.

| Ympäristömuuttuja                             | Oletus | Tarkoitus                                   |
| --------------------------------------------- | ------ | ------------------------------------------- |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000 | Kohdekohtainen kokonaisaikaraja             |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024   | Aliprosessin V8 old-space -raja megatavuina |

Virheelliset, muut kuin positiiviset tai muut kuin kokonaislukuarvot käyttävät oletusarvoja. Keon asetus ei ole
kokonais-RSS-raja; erittäin suuret erät voivat silti kuluttaa aliprosessin muistin loppuun ja aiheuttaa ajon
turvallisen epäonnistumisen. Oletusarvo 1024 MB jättää liikkumavaraa oletusarvoiselle 500 rivin erälle, jossa
on 512 KiB:n artefaktit ja rungot käytössä, mukaan lukien BigQueryn tavupaloihin jaettu JSON-sarjallistaminen.
Se ei tee 10000 rivin runkoerästä turvallista. V8-keon loppuminen kirjaa toimintakelpoisen virheen: pienennä eräkokoa
tai kasvata arvoa `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB`; kohdistin pysyy viimeisessä kuitatussa erässä.
Moderni artefaktirajoitus ei kata historiallisia sisäisiä tai levylle tallennettuja runkoja.
Ylläpitäjien on budjetoitava RSS erikseen, erityisesti muistirajoitetuissa säilöissä.

Aliprosessi perii vain ratkaistun muuttujan `DATA_DIR`, muuttujan `NODE_ENV`, eksplisiittisen muuttujan `TZ` (vanhojen
tiedostonimien paikallisen ajan ratkaisu), muuttujan `ELECTRON_RUN_AS_NODE`, jos se on asetettu, sekä seuraavat lähtevän
liikenteen syötteet:
`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (ja niiden pienikirjaimiset muodot),
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`.
Yleinen Undici-välittäjä käyttää samaa palvelimen puhdasta ympäristöpohjaista välityspalvelimen ratkaisua ja
paikallisten isäntien ohitussääntöjä, mukaan lukien `NO_PROXY`; se ei tuo tiedostoa `proxyFetch.ts` eikä sen
tietokanta- tai ominaisuuslippuja. Välityspalvelimen tunnistetiedot peitetään välitetystä tulosteesta ja kirjatuista
virheistä. Kohteen tunnistetiedot kulkevat vain yhdessä IPC-käynnistysviestissä, eivät koskaan argv-parametreissa tai
ympäristössä; tulosteiden ja virheiden välitykseen lisätään etuliite, ja tiedot puhdistetaan. Aliprosessin
suoritusargumenteissa poistetaan käytöstä vain `ExperimentalWarning`, jotta Noden SQLite-varoitus ei toistu jokaisella
cron-ajolla; muut varoitustyypit pysyvät näkyvissä.

Kohdemoduulien on oltava tuotavissa ilman Next.js- tai vain palvelimelle tarkoitettuja riippuvuuksia. Nykyinen
BigQuery-toteutus täyttää jo tämän sopimuksen. Käyttöoikeustunnusten välimuistit säilyvät vain aliprosessin
suorituksen ajan, eivät suoritusten välillä. Node on tuettu suoritusympäristö (`package.json`-tiedoston engines-määrityksen mukaisesti), mutta README-tiedoston Bun-
asennusosio ja `Dockerfile.bun` tarjoavat myös tuotantoyhteensopivan polun, joka käyttää
`bun:sqlite`-rajapintaa (`src/lib/db/core.ts` / sovittimet). Bun-ympäristössä viennit säilyttävät siksi aiemman
prosessinsisäisen polun ja antavat kertaluonteisen varoituksen: aliprosessin keon ja aikakatkaisun eristys ei ole käytettävissä. Käytä
Nodea tapahtumasilmukan ja OOM-tilanteiden eristämiseen; Bunia ei käsitellä tässä vain kehityskäyttöön tarkoitettuna.

Kun `includeBodies` on käytössä, suosi minuuttitason ajoitusväliä, kuten
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"`, sen sijaan että kerryttäisit tunnin verran hyötykuormia jonoon.
Erä- ja rivirajoitukset rajaavat edelleen jokaista suoritusta. Prosessin käynnistyskustannus syntyy kerran kohdetta ja suoritusta kohden;
tässä pieni käynnistyskustannus vaihdetaan palvelimen tapahtumasilmukan eristykseen, ei kokonaisprosessorikäytön vähentämiseen.

### Hyötykuormat (kehotteet ja vastaukset)

Oletusarvoisesti vienti sisältää vain yhteenvetokentät, jotka lokien **luettelo** näyttää. Kun
**Vie kehotteet ja vastaukset** (`includeBodies`) otetaan käyttöön, mukaan lähetetään lisäksi tiedot, jotka lokien **tiedot**-
ruutu näyttää kustakin kutsusta:

| Kenttä                           | Mitä se sisältää                                                |
| -------------------------------- | --------------------------------------------------------------- |
| `request_body` / `response_body` | Kutsun hyötykuormat kojelaudan esittämässä muodossa             |
| `pipeline_route_decision`        | Reitittimen valitsema kohde ja malli                            |
| `pipeline_client_request`        | Raakapyyntö täsmälleen asiakkaan lähettämässä muodossa          |
| `pipeline_openai_request`        | Sisäiseen OpenAI-muotoon muuntamisen jälkeen                    |
| `pipeline_provider_request`      | Ylävirtaan lähetetty pyyntö palveluntarjoajan muodossa          |
| `pipeline_provider_response`     | Ylävirran raakavastaus                                          |
| `pipeline_client_response`       | Kutsujalle palautettu sisältö                                   |
| `pipeline_error`                 | Putkitason virheen tiedot epäonnistuneesta kutsusta             |
| `bodies_truncated`               | Tosi, kun jokin yllä oleva kenttä saavutti `maxBodyBytes`-rajan |

Tämä on kehotesisältöä, joten se on **oletusarvoisesti pois käytöstä** ja tarkoituksella kohdekohtainen valinta.
Lähetettävä sisältö vastaa kojelaudan näyttämää, koska vienti ja `getCallLogById` käyttävät samaa tietojen
selvitystä: hyötykuormien
henkilötiedot on jo puhdistettu ja salaisuudet peitetty niitä kirjoitettaessa, eikä `noLog`-API-avaimella tehty
kutsu tallenna lainkaan hyötykuormaa, joten vietävää ei ole.

Hyötykuormat luetaan tiedostojärjestelmän artefaktista rivi kerrallaan, joten täydentäminen suoritetaan vain sitä
pyytäneille kohteille. Puuttuvan tai vioittuneen artefaktin yhteenveto viedään niin, että hyötykuormat ovat null-arvoja,
sen sijaan että erä epäonnistuisi ja kohdistin jäisi jumiin.

`maxBodyBytes` (oletusarvo 262144) rajoittaa kunkin kentän kokoa. Pidemmät hyötykuormat **katkaistaan sen sijaan,
että ne poistettaisiin** — katkaistu kehote vastaa silti kysymykseen ”mitä kysyttiin” — ja rivi merkitään
`bodies_truncated`-kentällä. Suoratoistettuja pala palalta saapuvia muutoksia ei viedä; koottu vastaus on
jo kentissä `pipeline_provider_response` ja `pipeline_client_response`.

---

## 2. Tiedostot

| Osa                              | Sijainti                                     |
| -------------------------------- | -------------------------------------------- |
| Kohdesopimus                     | `src/lib/logExport/types.ts`                 |
| Rekisteri                        | `src/lib/logExport/registry.ts`              |
| Salaisuuksien käsittely          | `src/lib/logExport/secrets.ts`               |
| Suorittaja (yläprosessin IPC)    | `src/lib/logExport/runner.ts`                |
| Prosessin elinkaari              | `src/lib/logExport/childRunner.ts`           |
| Lapsiprosessin aloituspiste      | `src/lib/logExport/exportChild.ts`           |
| Vain luku -avaaja                | `src/lib/db/logExportReadOnly.ts`            |
| Jaettu kysely/vastaavuusmääritys | `src/lib/usage/callLogExportQueries.ts`      |
| Tietojen ratkaisija              | `src/lib/usage/callLogDetailResolver.ts`     |
| API-projektio                    | `src/lib/logExport/presenter.ts`             |
| BigQuery-kohde                   | `src/lib/logExport/destinations/bigquery.ts` |
| Google-palvelutilin todennus     | `src/lib/logExport/googleServiceAccount.ts`  |
| Puhelulokilähde                  | `src/lib/usage/callLogExportSource.ts`       |
| Pysyväistallennus                | `src/lib/db/logExportDestinations.ts`        |
| Cron-työ                         | `src/lib/jobs/logExportJob.ts`               |
| REST-kerros                      | `src/app/api/log-export/`                    |
| Koontinäyttösivu                 | `src/app/(dashboard)/dashboard/log-export/`  |

Skeema: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

Kaikki reitit edellyttävät hallintatodennusta (`requireManagementAuth`). Salaisuuksia ei koskaan palauteta:
tallennettu salaisuus palautetaan literaalina `__stored__`, ja tämän arvon lähettäminen takaisin päivityksen
yhteydessä säilyttää tallennetun tunnistetiedon.

Sellaisen kohteen luominen tai päivittäminen, jonka tyyppi määrittää salaisuuden, **edellyttää
`STORAGE_ENCRYPTION_KEY`-muuttujaa**. Ilman sitä `encrypt()` päästää arvon hiljaisesti läpi muuttamatta sitä, joten kirjoitus
hylätään 400-virheellä sen sijaan, että tunnistetieto tallennettaisiin SQLiteen selväkielisenä (sama suojaus on käytössä
Telegram-webhookissa).

| Menetelmä | Polku                                    | Tarkoitus                                                        |
| --------- | ---------------------------------------- | ---------------------------------------------------------------- |
| `GET`     | `/api/log-export/types`                  | Kohdetyypit ja niiden määrityskenttien luettelo                  |
| `GET`     | `/api/log-export/destinations`           | Kohteiden luettelo (salaisuudet peitettyinä)                     |
| `POST`    | `/api/log-export/destinations`           | Luo kohde                                                        |
| `GET`     | `/api/log-export/destinations/{id}`      | Lue yksi kohde                                                   |
| `PUT`     | `/api/log-export/destinations/{id}`      | Päivitä nimi / käytössäolo / määritykset / eräkäsittely          |
| `DELETE`  | `/api/log-export/destinations/{id}`      | Poista                                                           |
| `POST`    | `/api/log-export/destinations/{id}/test` | Testaa tunnistetiedot kirjoittamatta mitään                      |
| `POST`    | `/api/log-export/destinations/{id}/run`  | Tyhjennä jono nyt samalla polulla kuin ajastetussa suorituksessa |
| `GET`     | `/api/log-export/status`                 | Cron-tila, viimeisimmät suoritukset ja kohdekohtainen jono       |

`GET /api/log-export/types` tekee käyttöliittymästä yleiskäyttöisen: hallintapaneelin lomake muodostetaan
palautettujen kenttäkuvausten perusteella, joten uusi kohde ei vaadi käyttöliittymämuutoksia.

---

## 4. BigQuery-kohde

Määritysavaimet (`type: "bigquery"`):

| Avain                | Huomautukset                                                                  |
| -------------------- | ----------------------------------------------------------------------------- |
| `projectId`          | Tietojoukon sisältävä GCP-projekti                                            |
| `datasetId`          | `[A-Za-z0-9_]+`                                                               |
| `tableId`            | `[A-Za-z0-9_]+`                                                               |
| `location`           | Käytetään vain, kun tietojoukko on luotava (oletus `EU`)                      |
| `serviceAccountJson` | Palvelutilin avain. Salaisuus: salataan tallennettaessa, ei koskaan palauteta |
| `autoCreate`         | Luo tietojoukko ja taulu ensimmäisen viennin yhteydessä (oletus `true`)       |

Palvelutili tarvitsee `bigquery.tables.updateData`-oikeuden kohdetauluun sekä
`bigquery.datasets.create`- / `bigquery.tables.create`-oikeudet, kun `autoCreate` on käytössä.

Määritetty erä on **kohdistimen** yksikkö, ei HTTP-yksikkö: `send()` jakaa sen enintään 500 rivin
insertAll-kutsuiksi, joten suuri `batch_size` ei voi ylittää BigQueryn 10 Mt:n pyyntörajaa.
Tilapäisiä tiloja (408/429/500/502/503/504) yritetään uudelleen enintään kolme kertaa eksponentiaalisella
viiveellä käyttäen samoja insertIds-arvoja uudelleen; todennus- ja skeemavirheet aiheuttavat poikkeuksen ensimmäisellä yrityksellä
sen sijaan, että suoritus käyttäisi turhaan kaikki yritykset.

Hetki sitten luotu taulu ei vielä näy suoratoiston päätepisteelle, joka vastaa muutaman sekunnin ajan
404-virheellä. Tätä 404-virhettä yritetään uudelleen, mutta **vain jos tämä suoritus loi taulun** —
aidosti puuttuva taulu aiheuttaa silti virheen välittömästi. Huomaa, että taulun luominen uudelleen samalla nimellä pian sen
poistamisen jälkeen saa BigQueryn hylkäämään suoratoistolisäykset useiden minuuttien ajan; tämä on
poista-ja-luo-uudelleen-toimintatavan ominaisuus, joten käytä mieluummin uutta taulun nimeä kuin poista ja lisää sama taulu uudelleen.

**Osittainen epäonnistuminen saapuu HTTP 200 -vastauksena, jossa `insertErrors[]` ei ole tyhjä.** Tätä käsitellään
virheenä ja se aiheuttaa poikkeuksen, mikä estää kohdistinta etenemästä niiden rivien ohi, joita BigQuery ei koskaan
hyväksynyt; `tests/unit/log-export-bigquery.test.ts` lukitsee tämän toiminnan.

Siirtotapa on tavallinen REST — itse allekirjoitettu RS256-väite vaihdetaan käyttöoikeustunnukseen osoitteessa
`https://oauth2.googleapis.com/token`, minkä jälkeen rivit lähetetään `tabledata.insertAll`-rajapintaan. Google SDK:ta ei
oteta mukaan. Käyttöoikeustunnukset välimuistitetaan prosessissa palvelutilin ja käyttöalueen yhdistelmän mukaan.

Luotu taulu sisältää yhden sarakkeen kutakin Lokit-välilehden kenttää kohti sekä `exported_at`-sarakkeen, ja sen rakenne on optimoitu
kutsulokien todellisten kyselytapojen mukaan:

- **Päiväkohtainen osiointi `timestamp`-kentän perusteella**, joten päivämäärillä rajattu kysely käsittelee vain kyseiset päivät.
- **Klusterointi kenttien `api_key_name`, `provider`, `model`, `status` perusteella** (tässä järjestyksessä), joten suodatus sen mukaan,
  kuka suorituksen teki, minne se kohdistui tai epäonnistuiko se, karsii lohkoja kunkin osion sisältä. BigQuery
  sallii enintään neljä klusterointisaraketta, ja järjestyksellä on merkitystä: pelkkä `api_key_name`-suodatin
  karsii, mutta pelkkä `status`-suodatin ei.
- **Valinnainen osioiden säilytysaika** asetuksella `partitionExpirationDays` (0 säilyttää kaiken), jota käytetään
  taulua luotaessa.

Molemmat asetukset otetaan käyttöön luontihetkellä. Olemassa oleva taulu säilyttää nykyisen rakenteensa, joten
osoita kohde uuteen taulutunnukseen, jos haluat ottaa ne käyttöön.

`tests/unit/log-export-bigquery.test.ts` varmistaa, että mäppäys ja taulun skeema pysyvät
täsmälleen yhdenmukaisina, joten uutta kutsulokin saraketta ei voida huomaamatta jättää pois viennin aikana.

Erät pilkotaan **sekä** rivimäärän että serialisoitujen tavujen perusteella. Pelkkä rivimäärä ei riitä,
kun hyötykuormat viedään: 500 kehotteita sisältävää riviä voi olla kymmenien megatavujen kokoisia, ja insertAll
hylkää yli 10 MB:n pyynnöt. Osio suljetaan 500 rivin tai 9 MB:n kohdalla sen mukaan, kumpi raja saavutetaan ensin.

---

## 5. Kohteen lisääminen

1. Luo `src/lib/logExport/destinations/<name>.ts`, joka vie `LogExportDestinationType`-tyypin:
   Zod-`configSchema`, käyttöliittymän `fields`-kuvaustaulukko, `secretFields` sekä
   `createClient(config)`, joka palauttaa metodit `test()` / `prepare()` / `send(records)`.
2. Lisää se `DESTINATIONS`-taulukkoon tiedostossa `src/lib/logExport/registry.ts`.
3. Kirjoita testit hakemistoon `tests/unit/`.

Siinä on koko muutos: pysyvyyskerros, cron-työ, REST-kerros, salaisuuksien salaus ja
hallintapaneelin lomake lukevat kaikki rekisteriä.

Uutta kohdetta koskee kaksi sääntöä:

- `send()`-metodin **on aiheutettava poikkeus** osittaisen epäonnistumisen yhteydessä. Onnistunut suoritus tarkoittaa, että kohteessa ovat kyseiset rivit,
  ja kohdistin siirtyy pysyvästi niiden ohi.
- Käyttäjän antaman URL-osoitteen vastaanottavan kohteen on validoitava se
  `parseAndValidateWebhookUrl`-funktion (`src/shared/network/outboundUrlGuardPolicy.ts`) avulla ennen noutoa
  samalla tavalla kuin webhookit. BigQuery ei tarvitse tätä, sillä sen isäntänimet ovat vakioita.

---

## 6. Käyttö

- **Hallintapaneeli**: Integraatiot → Lokien vienti. Lisää kohde, tarkista tunnistetiedot rivejä kirjoittamatta suorittamalla **Testaa** ja ota kohde sitten käyttöön.
- **Jono**: jokaisen kohteen kortti näyttää odottavat rivit ja kohdistimen; `GET
/api/log-export/status` palauttaa samat luvut sekä 20 viimeisintä työajoa.
- **Yhden kohteen epäonnistuminen ei aiheuta muiden epäonnistumista** — ajon yhteenveto tallentaa kohdekohtaisen
  tilan kenttiin `last_status` / `last_error`, ja työajojen historia säilyttää koostetiedot.
- **Kohteen poistaminen poistaa sen kohdistimen.** Kun kohde lisätään uudelleen, käsittely alkaa vanhimmasta säilytetystä
  puhelulokista, jolloin kohteeseen saatetaan lähettää uudelleen rivejä, jotka siellä jo ovat. BigQueryssä rivikohtainen
  `insertId` estää tämän vain BigQueryn oman kaksoiskappaleiden poistoikkunan aikana, joten kohde kannattaa mieluummin
  poistaa käytöstä kuin poistaa kokonaan.
