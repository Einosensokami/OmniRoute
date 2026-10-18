# SQLite Runtime Resolution (Slovenščina)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute ob zagonu razreši svoj gonilnik SQLite prek 5-stopenjske verige nadomestnih možnosti:

1. **Priloženi `better-sqlite3`** (prek `dependencies` v `package.json`)
   — najhitrejša možnost, izvorna binarna datoteka, ki jo namesti `npm install`, ko so na voljo orodja za gradnjo.

2. **Med izvajanjem nameščeni `better-sqlite3`** (v `~/.omniroute/runtime/`)
   — namesti se ob prvi uporabi **ALI** prek `scripts/build/postinstall.mjs → scripts/postinstall.mjs`.
   Pred nalaganjem preveri magične bajte izvorne datoteke `.node` (ELF / Mach-O / PE),
   da se zaščiti pred poškodovanimi binarnimi datotekami ali datotekami za napačno platformo.

3. **`node:sqlite`** (standardna knjižnica Node ≥22.5) — izvorna gradnja ni potrebna; uporabi se, ko
   obe poti better-sqlite3 spodletita. Omejen nabor funkcij.

4. **`sql.js`** (WASM) — zadnja nadomestna možnost. Deluje povsod, vendar je počasnejša
   in podatke zapisuje v intervalih namesto sinhrono.

## Zakaj ta zapletenost?

- **Windows EBUSY**: `npm install -g omniroute@latest` lahko spodleti, če izvajajoči se proces
  zaklene datoteko `better_sqlite3.node` prejšnje različice. Namestitev med izvajanjem
  v `~/.omniroute/runtime/` zaobide globalni predpomnilnik npm.
- **Brez orodij za gradnjo**: Nekatera okolja (poslovni sistemi Windows brez VS Build
  Tools, minimalne slike Docker) ne morejo prevesti paketa `better-sqlite3`. Namestitveni program
  med izvajanjem pridobi vnaprej zgrajeno binarno datoteko iz registra npm; nadomestni
  gonilniki zagotavljajo, da se OmniRoute zažene tudi, če to spodleti.
- **Sistemi brez omrežnega dostopa**: Če register npm ni dosegljiv, `node:sqlite`
  ali `sql.js` zagotavljata osnovno delovanje.

## Preverjanje magičnih bajtov

Pred nalaganjem med izvajanjem nameščene datoteke `.node` OmniRoute prebere prvih 8
bajtov in jih primerja z znanimi magičnimi vrednostmi platform:

| Platforma               | Bajti (šestnajstiško) | Oznaka      |
| ----------------------- | --------------------- | ----------- |
| Linux                   | `7F 45 4C 46`         | `elf`       |
| macOS 64-bitni BE       | `FE ED FA CF`         | `macho`     |
| macOS 64-bitni LE       | `CF FA ED FE`         | `macho-le`  |
| macOS fat (univerzalni) | `CA FE BA BE`         | `macho-fat` |
| Windows                 | `4D 5A` (MZ)          | `pe`        |

Neujemajoča se magična vrednost → datoteka se prezre, postopek pa nadaljuje z naslednjim korakom.

## Preverjanje aktivnega gonilnika

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## Ročno upravljanje

```bash
# Preskoči predhodno pripravo po namestitvi (za hitre namestitve CI)
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# Prisilno znova namesti better-sqlite3 za izvajalno okolje
rm -rf ~/.omniroute/runtime
omniroute  # znova se bo namestil ob naslednjem zagonu

# Preveri, kateri gonilnik je aktiven
omniroute config db-info  # (če ukaz CLI obstaja)
```

## Diagnosticiranje sinhronih zastojev

Pri uporabi `better-sqlite3` pred zagonom nastavite `OMNIROUTE_SQLITE_SLOW_MS=200`, da
vključite merjenje časa sinhronega vmesnika. Privzeto je izklopljeno. Dokončana operacija,
ki traja vsaj toliko milisekund, sproži opozorilo `[SQLITE-SLOW]`, največ enkrat na
deset sekund za posamezen vmesnik. Opozorilo vsebuje samo gonilnik, razred operacije
(`prepare`, `get`, `all`, `run`, `exec`, `pragma`, transakcija ali vzdrževanje) in
pretečene milisekunde: brez SQL-a, vezav, vrstic, poti ali besedila izjem.

To je diagnostični pripomoček, ne časovna omejitev ali optimizacija poizvedb. Ne more
poročati o operaciji, ki se nikoli ne zaključi, razlikovati med delom procesorja in
čakanjem na disk, določiti točnega SQL-a ali opazovati operacij, izvedenih prek neposredne
ročice gonilnika. Trajanje asinhronega varnostnega kopiranja je namenoma izključeno;
drugi gonilniki SQLite niso instrumentirani s to izbirno funkcijo. Če spremenljivko
onemogočite, se obnovi izvirni vmesnik brez ovojnikov za merjenje časa. Shema zbirke
podatkov ali shranjena konfiguracija se ne spremenita.

Opozorilo o zakasnitvi `/healthz` poroča o največji zakasnitvi dogodkovne zanke od
prejšnjega vzorca, ne o povprečju celotnega obdobja delovanja. Preden zastoj pripišete
SQLite ali okvari diska, primerjajte njegove časovne žige z opozorili o počasnih
operacijah ter metrikami gostitelja in shrambe.

## Referenca

Implementacija:

- `bin/cli/runtime/magicBytes.mjs` — pomožne funkcije za preverjanje magičnih bajtov binarnih datotek
- `bin/cli/runtime/sqliteRuntime.mjs` — 5-stopenjski razreševalnik izvajalnega okolja + leni namestitveni program
- `bin/cli/runtime/index.mjs` — usklajevalnik zagona (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — kavelj npm po namestitvi (nekritična predhodna priprava)
- `src/lib/db/core.ts` — izvoza `ensureDbInitialized()` / `getDriverInfo()`

## Topologija z enim zapisovalcem (HA ni podprt)

Zgornja veriga nadomestnih gonilnikov se še vedno izvaja v **enem procesu**. Privzeta
konfiguracija SQLite za OmniRoute ima **enega zapisovalca**:

- Ne povežite dveh replik OmniRoute z isto datoteko `storage.sqlite`.
- Ponovni zagon vsebnika, uvajanje Recreate, zaustavitev zaradi OOM ali ponovni zagon
  HEALTHCHECK prekine vse dejavne seje SSE. Privzeta pot ne omogoča nadzorovanega
  zaključevanja sej.
- Preverjanje živosti orkestratorja, ki počasen odziv `/healthz` obravnava kot nedelujočega,
  bo ustavilo edino repliko. Za preverjanje živosti raje uporabite TCP, za preverjanje
  pripravljenosti pa HTTP `/healthz`. Glejte
  [Vodnik za Docker — razpoložljivost](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  in [priporočila za preverjanja Kubernetes](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
