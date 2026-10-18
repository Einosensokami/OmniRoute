# SQLite Runtime Resolution (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute selvittää SQLite-ajurinsa käynnistyksen yhteydessä 5-vaiheisella varaketjulla:

1. **Paketoitu `better-sqlite3`** (`package.json`-tiedoston `dependencies`-määrityksen kautta)
   — nopein vaihtoehto, natiivibinääri, jonka `npm install` asentaa, kun koontityökalut ovat käytettävissä.

2. **Ajonaikaisesti asennettu `better-sqlite3`** (hakemistossa `~/.omniroute/runtime/`)
   — asennetaan laiskasti ensimmäisellä suorituskerralla **TAI** komennolla `scripts/build/postinstall.mjs → scripts/postinstall.mjs`.
   Natiivin `.node`-tiedoston tunnistetavut (ELF / Mach-O / PE) tarkistetaan ennen lataamista,
   jotta vioittuneet tai väärälle alustalle tarkoitetut binäärit eivät lataudu.

3. **`node:sqlite`** (Node ≥22.5:n vakiokirjasto) — natiivikoontia ei tarvita; käytetään, kun
   kumpikin better-sqlite3-polku epäonnistuu. Ominaisuusvalikoima on rajallinen.

4. **`sql.js`** (WASM) — viimeinen varavaihtoehto. Toimii kaikkialla, mutta on hitaampi
   ja kirjoittaa tiedot määräajoin synkronisen kirjoittamisen sijaan.

## Miksi näin monimutkainen ratkaisu?

- **Windows EBUSY**: `npm install -g omniroute@latest` voi epäonnistua, jos käynnissä oleva
  prosessi lukitsee edellisen version `better_sqlite3.node`-tiedoston. Ajonaikainen
  asennus hakemistoon `~/.omniroute/runtime/` ohittaa npm:n globaalin välimuistin.
- **Koontityökaluja ei ole**: Jotkin ympäristöt (yritysten Windows-ympäristöt ilman VS Build
  Tools -työkaluja, minimaaliset Docker-levykuvat) eivät voi kääntää `better-sqlite3`-pakettia.
  Ajonaikainen asennusohjelma hakee valmiiksi käännetyn binäärin npm-rekisteristä;
  vara-ajurit varmistavat, että OmniRoute käynnistyy, vaikka tämä epäonnistuisi.
- **Ilmaraolla eristetyt järjestelmät**: Jos npm-rekisteriin ei saada yhteyttä, `node:sqlite`
  tai `sql.js` takaa perustoiminnallisuuden.

## Tunnistetavujen tarkistus

Ennen ajonaikaisesti asennetun `.node`-tiedoston lataamista OmniRoute lukee ensimmäiset 8
tavua ja vertaa niitä tunnettuihin alustakohtaisiin tunnisteisiin:

| Alusta                  | Tavut (heks.) | Tunniste    |
| ----------------------- | ------------- | ----------- |
| Linux                   | `7F 45 4C 46` | `elf`       |
| macOS 64-bittinen BE    | `FE ED FA CF` | `macho`     |
| macOS 64-bittinen LE    | `CF FA ED FE` | `macho-le`  |
| macOS fat (universaali) | `CA FE BA BE` | `macho-fat` |
| Windows                 | `4D 5A` (MZ)  | `pe`        |

Jos tunniste ei täsmää, tiedosto ohitetaan ja varaketju jatkaa seuraavaan vaiheeseen.

## Aktiivisen ajurin tarkistaminen

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## Manuaalinen hallinta

```bash
# Ohita asennuksen jälkeinen esilämmitys (nopeita CI-asennuksia varten)
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# Pakota ajonaikaisen better-sqlite3-paketin uudelleenasennus
rm -rf ~/.omniroute/runtime
omniroute  # asennetaan uudelleen seuraavan käynnistyksen yhteydessä

# Tarkista aktiivinen ajuri
omniroute config db-info  # (jos CLI-komento on olemassa)
```

## Synkronisten jumitusten diagnosointi

Kun käytössä on `better-sqlite3`, aseta `OMNIROUTE_SQLITE_SLOW_MS=200` ennen käynnistystä,
jos haluat ottaa synkronisen sovittimen ajoituksen käyttöön. Se on oletusarvoisesti poissa
käytöstä. Jos valmistunut toiminto kestää vähintään näin monta millisekuntia, järjestelmä
antaa `[SQLITE-SLOW]`-varoituksen enintään kerran kymmenessä sekunnissa sovitinta kohden.
Varoitus sisältää vain ajurin, toimintoluokan (`prepare`, `get`, `all`, `run`, `exec`,
`pragma`, transaktio tai ylläpito) ja kuluneet millisekunnit: ei SQL:ää, sidoksia, rivejä,
polkuja tai poikkeustekstiä.

Tämä on diagnostiikka-apu, ei aikakatkaisu tai kyselyoptimointi. Se ei voi ilmoittaa
toiminnosta, joka ei koskaan palaudu, erottaa suoritintyötä levyodotuksista, tunnistaa
tarkkaa SQL:ää tai seurata raaka-ajurikahvan kautta suoritettuja toimintoja.
Asynkronisen varmuuskopioinnin kesto on tarkoituksella jätetty pois; tämän valinnaisen
instrumentoinnin piiriin eivät kuulu muut SQLite-ajurit. Muuttujan poistaminen käytöstä
palauttaa alkuperäisen sovittimen ilman ajoituskääreitä. Tietokannan skeemaan tai
tallennettuihin määrityksiin ei tehdä muutoksia.

`/healthz`-viivevaroitus ilmoittaa tapahtumasilmukan huippuviiveen edellisen näytteen
jälkeen, ei koko käyttöajan keskiarvoa. Vertaa sen aikaleimoja hitaiden toimintojen
varoituksiin sekä isäntä- ja tallennusmittareihin, ennen kuin päättelet jumituksen
johtuvan SQLitestä tai levyvirheestä.

## Viite

Toteutus:

- `bin/cli/runtime/magicBytes.mjs` — binääristen tunnistetavujen tarkistuksen apufunktiot
- `bin/cli/runtime/sqliteRuntime.mjs` — 5-vaiheinen ajonaikainen selvitys + laiska asennusohjelma
- `bin/cli/runtime/index.mjs` — käynnistyksen orkestrointi (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — npm:n asennuksen jälkeinen koukku (ei-kriittinen esilämmitys)
- `src/lib/db/core.ts` — `ensureDbInitialized()`- / `getDriverInfo()`-viennit

## Yhden kirjoittajan topologia (korkeaa käytettävyyttä ei tueta)

Yllä oleva ajurien varaketju suoritetaan edelleen **yhdessä prosessissa**. SQLitea
oletusasetuksilla käyttävä OmniRoute on **yhden kirjoittajan** järjestelmä:

- Älä liitä kahta OmniRoute-replikaa samaan `storage.sqlite`-tiedostoon.
- Säilön uudelleenkäynnistys, Recreate-käyttöönotto, OOM-lopetus tai HEALTHCHECK-uudelleenkäynnistys
  katkaisee kaikki käynnissä olevat SSE-istunnot. Vakiopolku ei tyhjennä istuntoja hallitusti.
- Orkestroijan elossaolotarkistus, joka tulkitsee hitaan `/healthz`-vastauksen kuolleeksi
  palveluksi, lopettaa ainoan replikan. Suosi TCP-elossaolotarkistusta + HTTP `/healthz`
  -valmiustarkistusta. Katso
  [Docker-opas — käytettävyys](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  ja [Kubernetes-tarkistusten suositukset](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
