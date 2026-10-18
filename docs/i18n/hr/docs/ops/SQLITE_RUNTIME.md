# SQLite Runtime Resolution (Hrvatski)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute pri pokretanju određuje svoj SQLite upravljački program putem lanca od 5 pričuvnih koraka:

1. **Priloženi `better-sqlite3`** (putem `dependencies` u datoteci `package.json`)
   — najbrži, izvorna binarna datoteka, instalira ga `npm install` kada su dostupni alati za izgradnju.

2. **`better-sqlite3` instaliran tijekom izvođenja** (u `~/.omniroute/runtime/`)
   — instalira se po potrebi pri prvom pokretanju **ILI** putem `scripts/build/postinstall.mjs → scripts/postinstall.mjs`.
   Prije učitavanja provjerava magične bajtove izvorne datoteke `.node` (ELF / Mach-O / PE)
   radi zaštite od oštećenih binarnih datoteka ili onih namijenjenih pogrešnoj platformi.

3. **`node:sqlite`** (standardna biblioteka za Node ≥22.5) — nije potrebna izvorna izgradnja; koristi se kada
   obje putanje za better-sqlite3 ne uspiju. Ograničen skup značajki.

4. **`sql.js`** (WASM) — posljednja pričuvna opcija. Radi svugdje, ali je sporija
   i zapisuje podatke u intervalima umjesto sinkrono.

## Zašto je ovo toliko složeno?

- **Windows EBUSY**: `npm install -g omniroute@latest` može se prekinuti pogreškom ako je
  `better_sqlite3.node` prethodne verzije zaključan zbog aktivnog procesa. Instalacija
  tijekom izvođenja u `~/.omniroute/runtime/` zaobilazi globalnu predmemoriju npm-a.
- **Nema alata za izgradnju**: Neka okruženja (poslovni Windows bez alata VS Build
  Tools, minimalne Docker slike) ne mogu kompilirati `better-sqlite3`. Instalacijski
  program tijekom izvođenja dohvaća unaprijed izgrađenu binarnu datoteku iz registra npm-a; pričuvni
  upravljački programi osiguravaju da se OmniRoute ipak pokrene čak i ako to ne uspije.
- **Izolirani sustavi**: Ako registar npm-a nije dostupan, `node:sqlite`
  ili `sql.js` jamče osnovnu funkcionalnost.

## Provjera magičnih bajtova

Prije učitavanja datoteke `.node` instalirane tijekom izvođenja, OmniRoute čita prvih 8
bajtova i uspoređuje ih s poznatim magičnim vrijednostima platformi:

| Platforma               | Bajtovi (hex) | Oznaka      |
| ----------------------- | ------------- | ----------- |
| Linux                   | `7F 45 4C 46` | `elf`       |
| macOS 64-bitni BE       | `FE ED FA CF` | `macho`     |
| macOS 64-bitni LE       | `CF FA ED FE` | `macho-le`  |
| macOS fat (univerzalni) | `CA FE BA BE` | `macho-fat` |
| Windows                 | `4D 5A` (MZ)  | `pe`        |

Neodgovarajuća magična vrijednost → datoteka se zanemaruje, a postupak se nastavlja sljedećim pričuvnim korakom.

## Provjera aktivnog upravljačkog programa

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## Ručno upravljanje

```bash
# Preskoči pripremu nakon instalacije (za brze instalacije u CI-ju)
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# Prisilno ponovno instaliraj better-sqlite3 za izvođenje
rm -rf ~/.omniroute/runtime
omniroute  # ponovno će se instalirati pri sljedećem pokretanju

# Provjeri koji je upravljački program aktivan
omniroute config db-info  # (ako CLI naredba postoji)
```

## Dijagnosticiranje sinkronih zastoja

Uz `better-sqlite3`, prije pokretanja postavite `OMNIROUTE_SQLITE_SLOW_MS=200` kako biste
uključili mjerenje vremena sinkronog prilagodnika. Prema zadanim postavkama ono je isključeno. Dovršena operacija koja traje
najmanje toliko milisekundi emitira upozorenje `[SQLITE-SLOW]`, najviše jednom u
deset sekundi po prilagodniku. Upozorenje sadrži samo upravljački program, klasu operacije
(`prepare`, `get`, `all`, `run`, `exec`, `pragma`, transakcija ili održavanje) i
protekle milisekunde: bez SQL-a, povezanih vrijednosti, redaka, putanja ili teksta iznimke.

Ovo je dijagnostičko pomagalo, a ne vremensko ograničenje ili optimizacija upita. Ne može prijaviti
operaciju koja se nikada ne završi, razlikovati rad procesora od čekanja na disk, utvrditi
točan SQL niti promatrati operacije izvedene putem sirovog pristupa upravljačkom programu.
Trajanje asinkrone sigurnosne kopije namjerno je izostavljeno; drugi SQLite upravljački programi nisu
instrumentirani ovom opcijom. Onemogućavanje varijable vraća izvorni prilagodnik
bez omotača za mjerenje vremena. Ne mijenjaju se shema baze podataka ni pohranjena konfiguracija.

Upozorenje o kašnjenju krajnje točke `/healthz` prikazuje vršno kašnjenje petlje događaja od prethodnog uzorka,
a ne prosjek tijekom cijelog vremena rada. Usporedite njegove vremenske oznake s upozorenjima o sporim operacijama
i metrikama glavnog računala/pohrane prije nego što zastoj pripišete SQLiteu ili kvaru diska.

## Referenca

Implementacija:

- `bin/cli/runtime/magicBytes.mjs` — pomoćne funkcije za provjeru magičnih bajtova binarnih datoteka
- `bin/cli/runtime/sqliteRuntime.mjs` — određivanje upravljačkog programa tijekom izvođenja u 5 koraka + instalacijski program koji se pokreće po potrebi
- `bin/cli/runtime/index.mjs` — orkestrator pokretanja (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — npm kuka nakon instalacije (priprema koja nije kritična)
- `src/lib/db/core.ts` — izvozi `ensureDbInitialized()` / `getDriverInfo()`

## Topologija s jednim zapisivačem (HA nije podržan)

Gornji lanac pričuvnih upravljačkih programa i dalje se izvodi u **jednom procesu**. Zadani SQLite
u OmniRouteu ima **jedan zapisivač**:

- Nemojte povezivati dvije replike OmniRoutea s istom datotekom `storage.sqlite`.
- Ponovno pokretanje spremnika, implementacija tipa Recreate, prekid zbog OOM-a ili ponovno pokretanje putem HEALTHCHECK-a prekida
  svaku aktivnu SSE sesiju. Na standardnoj putanji nema kontroliranog završavanja sesija.
- Provjera aktivnosti orkestratora koja spori `/healthz` smatra mrtvim prekinut će jedinu
  repliku. Za provjeru aktivnosti koristite TCP, a za provjeru spremnosti HTTP `/healthz`. Pogledajte
  [Vodič za Docker — dostupnost](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  i [preporuke za Kubernetes provjere](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
