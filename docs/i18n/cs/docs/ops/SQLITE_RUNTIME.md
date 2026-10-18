# SQLite Runtime Resolution (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute při spuštění vybere ovladač SQLite pomocí pětikrokového záložního řetězce:

1. **Přibalený `better-sqlite3`** (prostřednictvím `dependencies` v `package.json`)
   — nejrychlejší varianta, nativní binární soubor, nainstalovaný příkazem `npm install`, pokud jsou k dispozici nástroje pro sestavení.

2. **Za běhu nainstalovaný `better-sqlite3`** (v `~/.omniroute/runtime/`)
   — nainstaluje se odloženě při prvním spuštění **NEBO** prostřednictvím `scripts/build/postinstall.mjs → scripts/postinstall.mjs`.
   Před načtením ověří magické bajty nativního souboru `.node` (ELF / Mach-O / PE),
   aby zabránil načtení poškozených binárních souborů nebo souborů pro nesprávnou platformu.

3. **`node:sqlite`** (standardní knihovna Node ≥22.5) — nevyžaduje nativní sestavení; použije se,
   pokud obě cesty k better-sqlite3 selžou. Omezená sada funkcí.

4. **`sql.js`** (WASM) — poslední záložní možnost. Funguje všude, ale je pomalejší
   a data zapisuje v pravidelných intervalech, nikoli synchronně.

## Proč je to tak složité?

- **Windows EBUSY**: `npm install -g omniroute@latest` může selhat, pokud je soubor
  `better_sqlite3.node` z předchozí verze uzamčený běžícím procesem. Instalace
  za běhu do `~/.omniroute/runtime/` obchází globální mezipaměť npm.
- **Chybějící nástroje pro sestavení**: Některá prostředí (firemní Windows bez VS Build
  Tools, minimální obrazy Dockeru) nemohou zkompilovat `better-sqlite3`. Instalační program
  pro běhové prostředí získá předem sestavený binární soubor z registru npm; záložní
  ovladače zajistí, že se OmniRoute spustí, i když se to nepodaří.
- **Systémy bez přístupu k síti**: Pokud registr npm není dostupný, `node:sqlite`
  nebo `sql.js` zaručí základní funkčnost.

## Ověření magických bajtů

Před načtením souboru `.node` nainstalovaného za běhu přečte OmniRoute prvních 8
bajtů a porovná je se známými magickými hodnotami platforem:

| Platforma               | Bajty (hex)   | Označení    |
| ----------------------- | ------------- | ----------- |
| Linux                   | `7F 45 4C 46` | `elf`       |
| macOS 64bitové BE       | `FE ED FA CF` | `macho`     |
| macOS 64bitové LE       | `CF FA ED FE` | `macho-le`  |
| macOS fat (univerzální) | `CA FE BA BE` | `macho-fat` |
| Windows                 | `4D 5A` (MZ)  | `pe`        |

Neshodující se magická hodnota → soubor je ignorován a záložní řetězec pokračuje dalším krokem.

## Kontrola aktivního ovladače

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## Ruční ovládání

```bash
# Přeskočit zahřívání po instalaci (pro rychlé instalace v CI)
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# Vynutit přeinstalaci better-sqlite3 za běhu
rm -rf ~/.omniroute/runtime
omniroute  # při příštím spuštění se znovu nainstaluje

# Zjistit, který ovladač je aktivní
omniroute config db-info  # (pokud příkaz CLI existuje)
```

## Diagnostika synchronních prodlev

Při použití `better-sqlite3` nastavte před spuštěním `OMNIROUTE_SQLITE_SLOW_MS=200`,
chcete-li zapnout měření času synchronního adaptéru. Ve výchozím nastavení je vypnuté.
Dokončená operace, která trvá alespoň uvedený počet milisekund, vyvolá varování
`[SQLITE-SLOW]`, nejvýše jednou za deset sekund pro každý adaptér. Varování obsahuje
pouze ovladač, třídu operace (`prepare`, `get`, `all`, `run`, `exec`, `pragma`,
transakce nebo údržba) a uplynulý čas v milisekundách: žádné SQL, vazby, řádky,
cesty ani text výjimky.

Jde o diagnostickou pomůcku, nikoli o časový limit nebo optimalizaci dotazů. Nemůže
hlásit operaci, která se nikdy nevrátí, rozlišovat výpočty procesoru od čekání na disk,
určit přesný příkaz SQL ani sledovat operace prováděné prostřednictvím nezpracovaného
přístupu k ovladači. Doba trvání asynchronního zálohování je záměrně vyloučena;
ostatní ovladače SQLite nejsou touto volitelnou instrumentací sledovány. Vypnutím
proměnné se obnoví původní adaptér bez obalových vrstev pro měření času. Nedojde
k žádným změnám schématu databáze ani uložené konfigurace.

Varování endpointu `/healthz` o prodlevě hlásí maximum prodlevy smyčky událostí
od předchozího vzorku, nikoli celoživotní průměr. Než přisoudíte prodlevu systému
SQLite nebo selhání disku, porovnejte jeho časová razítka s varováními o pomalých
operacích a metrikami hostitele či úložiště.

## Reference

Implementace:

- `bin/cli/runtime/magicBytes.mjs` — pomocné funkce pro ověřování magických bajtů binárních souborů
- `bin/cli/runtime/sqliteRuntime.mjs` — pětikrokový výběr za běhu + odložený instalační program
- `bin/cli/runtime/index.mjs` — koordinátor spuštění (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — háček npm po instalaci (nekritické zahřívání)
- `src/lib/db/core.ts` — exporty `ensureDbInitialized()` / `getDriverInfo()`

## Topologie s jediným zapisujícím procesem (HA není podporováno)

Výše uvedený záložní řetězec ovladačů stále běží v **jednom procesu**. Výchozí
SQLite v OmniRoute má **jediný zapisující proces**:

- Nepřipojujte dvě repliky OmniRoute ke stejnému souboru `storage.sqlite`.
- Restart kontejneru, nasazení Recreate, ukončení kvůli OOM nebo restart vyvolaný
  HEALTHCHECK ukončí každou probíhající relaci SSE. Ve standardním režimu nedochází
  k řízenému ukončení relací.
- Kontrola životaschopnosti orchestrátoru, která pomalý endpoint `/healthz` považuje
  za mrtvý, ukončí jedinou repliku. Upřednostněte kontrolu životaschopnosti přes TCP
  a kontrolu připravenosti přes HTTP `/healthz`. Viz
  [Průvodce Dockerem — dostupnost](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  a [doporučení pro sondy Kubernetes](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
