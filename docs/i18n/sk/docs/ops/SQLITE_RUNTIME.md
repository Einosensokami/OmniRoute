# SQLite Runtime Resolution (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute rozpoznáva svoj ovládač SQLite pri spustení prostredníctvom 5-krokového reťazca záložných možností:

1. **Pribalený `better-sqlite3`** (prostredníctvom `dependencies` v súbore `package.json`)
   — najrýchlejší, natívny binárny súbor, nainštalovaný príkazom `npm install`, keď sú k dispozícii nástroje na zostavenie.

2. **Ovládač `better-sqlite3` nainštalovaný za behu** (v `~/.omniroute/runtime/`)
   — inštaluje sa odložene pri prvom spustení **ALEBO** prostredníctvom `scripts/build/postinstall.mjs → scripts/postinstall.mjs`.
   Pred načítaním overuje magické bajty natívneho súboru `.node` (ELF / Mach-O / PE),
   aby zabránil načítaniu poškodených binárnych súborov alebo súborov určených pre inú platformu.

3. **`node:sqlite`** (štandardná knižnica Node ≥22.5) — nevyžaduje natívne zostavenie; použije sa, keď
   zlyhajú obe cesty k better-sqlite3. Má obmedzenú množinu funkcií.

4. **`sql.js`** (WASM) — posledná záložná možnosť. Funguje všade, ale je pomalšia
   a zapisuje údaje v intervaloch namiesto synchrónneho zápisu.

## Prečo je to také zložité?

- **EBUSY vo Windows**: `npm install -g omniroute@latest` môže zlyhať, ak je súbor
  `better_sqlite3.node` predchádzajúcej verzie uzamknutý spusteným procesom. Inštalácia
  za behu do `~/.omniroute/runtime/` obchádza globálnu vyrovnávaciu pamäť npm.
- **Chýbajúce nástroje na zostavenie**: Niektoré prostredia (firemný Windows bez VS Build
  Tools, minimálne obrazy Docker) nedokážu skompilovať `better-sqlite3`. Inštalátor
  za behu získa vopred zostavený binárny súbor z registra npm; záložné
  ovládače zabezpečia, že sa OmniRoute spustí, aj keď tento postup zlyhá.
- **Systémy bez prístupu k sieti**: Ak register npm nie je dostupný, `node:sqlite`
  alebo `sql.js` zaručia základnú funkčnosť.

## Overovanie magických bajtov

Pred načítaním súboru `.node` nainštalovaného za behu OmniRoute načíta prvých 8
bajtov a porovná ich so známymi magickými hodnotami platforiem:

| Platforma               | Bajty (hex)   | Označenie   |
| ----------------------- | ------------- | ----------- |
| Linux                   | `7F 45 4C 46` | `elf`       |
| macOS 64-bit BE         | `FE ED FA CF` | `macho`     |
| macOS 64-bit LE         | `CF FA ED FE` | `macho-le`  |
| macOS fat (univerzálny) | `CA FE BA BE` | `macho-fat` |
| Windows                 | `4D 5A` (MZ)  | `pe`        |

Nezhodná magická hodnota → súbor sa ignoruje a pokračuje sa ďalším krokom záložného reťazca.

## Kontrola aktívneho ovládača

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## Manuálne ovládanie

```bash
# Preskočenie zahrievania po inštalácii (pre rýchle inštalácie v CI)
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# Vynútenie preinštalovania runtime verzie better-sqlite3
rm -rf ~/.omniroute/runtime
omniroute  # pri ďalšom spustení sa preinštaluje

# Kontrola aktívneho ovládača
omniroute config db-info  # (ak príkaz CLI existuje)
```

## Diagnostika synchrónnych pozastavení

Pri použití `better-sqlite3` nastavte pred spustením `OMNIROUTE_SQLITE_SLOW_MS=200`,
čím povolíte meranie času synchrónneho adaptéra. Predvolene je vypnuté. Dokončená
operácia, ktorá trvá aspoň uvedený počet milisekúnd, vyvolá upozornenie
`[SQLITE-SLOW]`, najviac raz za desať sekúnd pre každý adaptér. Upozornenie obsahuje
iba ovládač, triedu operácie (`prepare`, `get`, `all`, `run`, `exec`, `pragma`,
transakciu alebo údržbu) a uplynutý čas v milisekundách: neobsahuje SQL, väzby,
riadky, cesty ani text výnimky.

Ide o diagnostickú pomôcku, nie o časový limit ani optimalizáciu dopytov. Nedokáže
ohlásiť operáciu, ktorá sa nikdy nevráti, rozlíšiť prácu procesora od čakania na disk,
identifikovať presný príkaz SQL ani sledovať operácie vykonané prostredníctvom priameho
rozhrania ovládača. Trvanie asynchrónneho zálohovania je zámerne vynechané; ostatné
ovládače SQLite nie sú touto voliteľnou funkciou monitorované. Vypnutím premennej sa
obnoví pôvodný adaptér bez obalov na meranie času. Schéma databázy ani uložená
konfigurácia sa nemenia.

Upozornenie na oneskorenie `/healthz` uvádza maximum slučky udalostí od predchádzajúcej
vzorky, nie priemer za celú dobu prevádzky. Predtým, ako pozastavenie pripíšete SQLite
alebo zlyhaniu disku, porovnajte jeho časové pečiatky s upozorneniami na pomalé operácie
a metrikami hostiteľa či úložiska.

## Referencie

Implementácia:

- `bin/cli/runtime/magicBytes.mjs` — pomocné funkcie na overovanie magických bajtov binárnych súborov
- `bin/cli/runtime/sqliteRuntime.mjs` — 5-krokový prekladač ovládača za behu + odložený inštalátor
- `bin/cli/runtime/index.mjs` — orchestrátor spustenia (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — hák npm po inštalácii (nekritické zahriatie)
- `src/lib/db/core.ts` — exporty `ensureDbInitialized()` / `getDriverInfo()`

## Topológia s jediným zapisujúcim procesom (HA nie je podporovaná)

Vyššie uvedený reťazec záložných ovládačov stále beží v **jednom procese**. Predvolená
konfigurácia OmniRoute so SQLite používa **jediný zapisujúci proces**:

- Nepripájajte dve repliky OmniRoute k rovnakému súboru `storage.sqlite`.
- Reštart kontajnera, nasadenie typu Recreate, ukončenie z dôvodu OOM alebo reštart
  prostredníctvom HEALTHCHECK preruší každú prebiehajúcu reláciu SSE. V štandardnej
  konfigurácii sa nevykonáva postupné ukončenie relácií.
- Kontrola aktívnosti orchestrátora, ktorá považuje pomalú odpoveď `/healthz` za stav
  mimo prevádzky, ukončí jedinú repliku. Uprednostnite kontrolu aktívnosti cez TCP
  a kontrolu pripravenosti cez HTTP `/healthz`. Pozrite si
  [Sprievodcu Dockerom — dostupnosť](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  a [odporúčania pre sondy Kubernetes](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
