# SQLite Runtime Resolution (Lietuvių)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute paleidimo metu parenka SQLite tvarkyklę naudodama 5 žingsnių atsarginių variantų grandinę:

1. **Kartu pateikiama `better-sqlite3`** (per `dependencies` faile `package.json`)
   — sparčiausia, naudoja savąjį dvejetainį failą, įdiegiama vykdant `npm install`, kai yra komponavimo įrankiai.

2. **Vykdymo metu įdiegta `better-sqlite3`** (aplanke `~/.omniroute/runtime/`)
   — įdiegiama atidėtai pirmojo paleidimo metu **ARBA** per `scripts/build/postinstall.mjs → scripts/postinstall.mjs`.
   Prieš įkeliant patikrinami savosios `.node` bibliotekos kontroliniai baitai (ELF / Mach-O / PE),
   kad būtų apsisaugota nuo sugadintų arba kitai platformai skirtų dvejetainių failų.

3. **`node:sqlite`** (Node ≥22.5 standartinė biblioteka) — nereikia savosios bibliotekos komponavimo; naudojama, kai
   nepavyksta panaudoti abiejų better-sqlite3 variantų. Funkcijų rinkinys ribotas.

4. **`sql.js`** (WASM) — galutinis atsarginis variantas. Veikia visur, tačiau yra lėtesnis
   ir duomenis įrašo periodiškai, o ne sinchroniškai.

## Kodėl tai taip sudėtinga?

- **Windows EBUSY**: `npm install -g omniroute@latest` gali nepavykti, jei ankstesnės
  versijos `better_sqlite3.node` yra užrakintas veikiančio proceso. Įdiegimas vykdymo metu
  į `~/.omniroute/runtime/` leidžia apeiti visuotinę npm podėlio saugyklą.
- **Nėra komponavimo įrankių**: kai kuriose aplinkose (įmonių Windows sistemose be VS Build
  Tools, minimaliose Docker atvaizdžių versijose) negalima sukompiliuoti `better-sqlite3`. Vykdymo
  aplinkos diegimo programa iš npm registro parenka iš anksto sukompiliuotą dvejetainį failą, o atsarginės
  tvarkyklės užtikrina, kad OmniRoute vis tiek bus paleista, net jei tai nepavyks.
- **Nuo tinklo atskirtos sistemos**: jei npm registras nepasiekiamas, `node:sqlite`
  arba `sql.js` užtikrina bazinį funkcionalumą.

## Kontrolinių baitų tikrinimas

Prieš įkeldama vykdymo metu įdiegtą `.node` failą, OmniRoute nuskaito pirmuosius 8
baitus ir palygina juos su žinomomis platformų signatūromis:

| Platforma              | Baitai (šešioliktainiai) | Žyma        |
| ---------------------- | ------------------------ | ----------- |
| Linux                  | `7F 45 4C 46`            | `elf`       |
| macOS 64 bitų BE       | `FE ED FA CF`            | `macho`     |
| macOS 64 bitų LE       | `CF FA ED FE`            | `macho-le`  |
| macOS fat (universali) | `CA FE BA BE`            | `macho-fat` |
| Windows                | `4D 5A` (MZ)             | `pe`        |

Jei signatūra nesutampa → failas ignoruojamas, o atsarginių variantų grandinė pereina prie kito žingsnio.

## Aktyvios tvarkyklės tikrinimas

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## Rankinis valdymas

```bash
# Praleisti paruošimą po įdiegimo (kad CI diegimas būtų spartus)
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# Priverstinai iš naujo įdiegti vykdymo aplinkos better-sqlite3
rm -rf ~/.omniroute/runtime
omniroute  # bus iš naujo įdiegta kito paleidimo metu

# Patikrinti, kuri tvarkyklė aktyvi
omniroute config db-info  # (jei CLI komanda egzistuoja)
```

## Sinchroninių strigimų diagnostika

Naudodami `better-sqlite3`, prieš paleisdami nustatykite `OMNIROUTE_SQLITE_SLOW_MS=200`, kad
įjungtumėte sinchroninio adapterio vykdymo trukmės matavimą. Pagal numatytąją nuostatą jis išjungtas. Jei užbaigta operacija trunka
bent tiek milisekundžių, pateikiamas `[SQLITE-SLOW]` įspėjimas, bet ne dažniau kaip kartą per
dešimt sekundžių kiekvienam adapteriui. Įspėjime pateikiama tik tvarkyklė, operacijos klasė
(`prepare`, `get`, `all`, `run`, `exec`, `pragma`, transakcija arba priežiūra) ir
praėjęs laikas milisekundėmis: nepateikiama jokia SQL užklausa, susiejimai, eilutės, keliai ar išimties tekstas.

Tai yra diagnostikos priemonė, o ne skirtasis laikas ar užklausų optimizavimas. Ji negali pranešti
apie operaciją, kuri niekada negrąžina rezultato, atskirti procesoriaus darbo nuo disko laukimo, nustatyti
tikslios SQL užklausos ar stebėti operacijų, atliekamų naudojant tiesioginę tvarkyklės prieigą.
Asinchroninių atsarginių kopijų kūrimo trukmė sąmoningai neįtraukiama; kitos SQLite tvarkyklės
šiuo pasirinktiniu matavimu nestebimos. Išjungus kintamąjį atkuriamas pradinis adapteris
be trukmės matavimo apvalkalų. Duomenų bazės schema ir išsaugota konfigūracija nekeičiamos.

`/healthz` delsos įspėjime nurodomas įvykių ciklo delsos maksimumas nuo ankstesnio matavimo,
o ne viso veikimo laikotarpio vidurkis. Prieš priskirdami strigimą SQLite arba disko gedimui,
palyginkite jo laiko žymas su lėtų operacijų įspėjimais ir pagrindinio kompiuterio bei saugyklos metrikomis.

## Nuorodos

Įgyvendinimas:

- `bin/cli/runtime/magicBytes.mjs` — dvejetainių failų kontrolinių baitų tikrinimo pagalbinės priemonės
- `bin/cli/runtime/sqliteRuntime.mjs` — 5 žingsnių vykdymo aplinkos parinkiklis ir atidėto diegimo programa
- `bin/cli/runtime/index.mjs` — paleidimo koordinatorius (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — npm po įdiegimo vykdomas kabliukas (nekritinis paruošimas)
- `src/lib/db/core.ts` — `ensureDbInitialized()` / `getDriverInfo()` eksportai

## Vieno rašytojo topologija (HA nepalaikoma)

Pirmiau aprašyta tvarkyklių atsarginių variantų grandinė vis tiek veikia **viename procese**. Pagal numatytąją
SQLite konfigūraciją OmniRoute yra **vienintelis rašytojas**:

- Nejunkite dviejų OmniRoute replikų prie to paties `storage.sqlite` failo.
- Konteinerio paleidimas iš naujo, Recreate diegimas, nutraukimas dėl OOM arba HEALTHCHECK paleidimas iš naujo nutraukia
  kiekvieną vykdomą SSE seansą. Standartiniame veikimo režime nėra seansų užbaigimo prieš stabdymą.
- Orkestratoriaus gyvybingumo patikra, laikanti lėtą `/healthz` atsaką neveikimo požymiu, nutrauks vienintelę
  repliką. Gyvybingumui geriau naudoti TCP, o parengčiai — HTTP `/healthz`. Žr.
  [Docker vadovą — pasiekiamumas](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  ir [Kubernetes zondų rekomendacijas](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
