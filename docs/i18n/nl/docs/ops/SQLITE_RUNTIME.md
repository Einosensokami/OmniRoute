# SQLite Runtime Resolution (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute bepaalt bij het opstarten het SQLite-stuurprogramma via een fallbackketen van 5 stappen:

1. **Meegeleverde `better-sqlite3`** (via `dependencies` in `package.json`)
   — het snelst, native binary, geïnstalleerd door `npm install` wanneer buildtools aanwezig zijn.

2. **Tijdens runtime geïnstalleerde `better-sqlite3`** (in `~/.omniroute/runtime/`)
   — wordt bij de eerste uitvoering indien nodig geïnstalleerd **OF** door `scripts/build/postinstall.mjs → scripts/postinstall.mjs`.
   Valideert vóór het laden de magic bytes van het native `.node`-bestand (ELF / Mach-O / PE)
   als bescherming tegen beschadigde binaries of binaries voor het verkeerde platform.

3. **`node:sqlite`** (Node ≥22.5-standaardbibliotheek) — geen native build nodig; wordt gebruikt wanneer
   beide better-sqlite3-paden mislukken. Beperkte functionaliteit.

4. **`sql.js`** (WASM) — laatste fallback. Werkt overal, maar is langzamer
   en schrijft gegevens periodiek in plaats van synchroon.

## Waarom deze complexiteit?

- **Windows EBUSY**: `npm install -g omniroute@latest` kan mislukken als het
  `better_sqlite3.node`-bestand van de vorige versie is vergrendeld door een actief proces. De runtime-installatie
  in `~/.omniroute/runtime/` omzeilt de globale npm-cache.
- **Geen buildtools**: Sommige omgevingen (zakelijke Windows-systemen zonder VS Build
  Tools, minimale Docker-images) kunnen `better-sqlite3` niet compileren. Het runtime-installatieprogramma
  haalt een vooraf gebouwde binary op uit het npm-register; de fallbackstuurprogramma's
  zorgen ervoor dat OmniRoute alsnog opstart, zelfs als dat mislukt.
- **Air-gapped systemen**: Als het npm-register niet bereikbaar is, garanderen `node:sqlite`
  of `sql.js` basisfunctionaliteit.

## Validatie van magic bytes

Voordat een tijdens runtime geïnstalleerd `.node`-bestand wordt geladen, leest OmniRoute de eerste 8
bytes en vergelijkt deze met bekende platformmagics:

| Platform               | Bytes (hex)   | Label       |
| ---------------------- | ------------- | ----------- |
| Linux                  | `7F 45 4C 46` | `elf`       |
| macOS 64-bit BE        | `FE ED FA CF` | `macho`     |
| macOS 64-bit LE        | `CF FA ED FE` | `macho-le`  |
| macOS fat (universeel) | `CA FE BA BE` | `macho-fat` |
| Windows                | `4D 5A` (MZ)  | `pe`        |

Een niet-overeenkomende magic → het bestand wordt genegeerd en de fallback gaat door naar de volgende stap.

## Het actieve stuurprogramma controleren

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## Handmatige bediening

```bash
# Opwarming na installatie overslaan (voor snelle CI-installaties)
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# better-sqlite3 voor runtime geforceerd opnieuw installeren
rm -rf ~/.omniroute/runtime
omniroute  # wordt bij de volgende start opnieuw geïnstalleerd

# Controleren welk stuurprogramma actief is
omniroute config db-info  # (als de CLI-opdracht bestaat)
```

## Synchrone blokkeringen diagnosticeren

Stel bij `better-sqlite3` vóór het opstarten `OMNIROUTE_SQLITE_SLOW_MS=200` in om
timing van de synchrone adapter in te schakelen. Dit staat standaard uit. Voor een voltooide bewerking die
minstens zoveel milliseconden duurt, wordt een `[SQLITE-SLOW]`-waarschuwing gegenereerd, maximaal eenmaal per
tien seconden per adapter. De waarschuwing bevat alleen het stuurprogramma, de bewerkingsklasse
(`prepare`, `get`, `all`, `run`, `exec`, `pragma`, transactie of onderhoud) en
het aantal verstreken milliseconden: geen SQL, bindingen, rijen, paden of uitzonderingstekst.

Dit is een diagnostisch hulpmiddel, geen time-out of queryoptimalisatie. Het kan geen melding maken van
een bewerking die nooit terugkeert, CPU-werk niet onderscheiden van wachten op schijf-I/O, niet
de exacte SQL identificeren en geen bewerkingen waarnemen die via de onbewerkte stuurprogrammahandle worden uitgevoerd.
De duur van asynchrone back-ups wordt bewust uitgesloten; andere SQLite-stuurprogramma's worden niet
geïnstrumenteerd door deze opt-infunctie. Als de variabele wordt uitgeschakeld, wordt de oorspronkelijke adapter
zonder timingwrappers hersteld. Er worden geen databaseschema's of opgeslagen configuraties gewijzigd.

De vertragingswaarschuwing van `/healthz` meldt de event-looppiek sinds de vorige meting,
niet het gemiddelde over de gehele levensduur. Vergelijk de tijdstempels met waarschuwingen voor trage bewerkingen
en host-/opslagmetrieken voordat u een blokkering toeschrijft aan SQLite of een schijfstoring.

## Referentie

Implementatie:

- `bin/cli/runtime/magicBytes.mjs` — helpers voor de validatie van binaire magic bytes
- `bin/cli/runtime/sqliteRuntime.mjs` — runtime-resolver met 5 stappen + installatie indien nodig
- `bin/cli/runtime/index.mjs` — opstartorchestrator (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — npm-hook na installatie (niet-fatale opwarming)
- `src/lib/db/core.ts` — exports van `ensureDbInitialized()` / `getDriverInfo()`

## Topologie met één schrijver (HA niet ondersteund)

De bovenstaande fallbackketen voor stuurprogramma's wordt nog steeds in **één proces** uitgevoerd. Standaard is SQLite
in OmniRoute een systeem met **één schrijver**:

- Koppel niet twee OmniRoute-replica's aan hetzelfde `storage.sqlite`-bestand.
- Een herstart van een container, een Recreate-deployment, een OOM-kill of een HEALTHCHECK-herstart beëindigt
  elke actieve SSE-sessie. Het standaardpad voorziet niet in het geleidelijk beëindigen van sessies.
- Een livenesscontrole van de orchestrator die een trage `/healthz` als niet actief beschouwt, beëindigt de enige
  replica. Geef de voorkeur aan TCP-liveness + HTTP `/healthz`-readiness. Zie
  [Docker-handleiding — beschikbaarheid](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  en [aanbevelingen voor Kubernetes-probes](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
