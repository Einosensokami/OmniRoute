# SQLite Runtime Resolution (Kiswahili)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute hutatua kiendeshi chake cha SQLite wakati wa kuanzisha kupitia mnyororo wa hatua 5 wa mbinu mbadala:

1. **`better-sqlite3` iliyojumuishwa** (kupitia `dependencies` katika `package.json`)
   — ndiyo ya kasi zaidi, ina faili asilia ya binary, na husakinishwa na `npm install` wakati zana za kujenga zinapatikana.

2. **`better-sqlite3` iliyosakinishwa wakati wa utekelezaji** (katika `~/.omniroute/runtime/`)
   — husakinishwa kwa ulegevu wakati wa uendeshaji wa kwanza **AU** na `scripts/build/postinstall.mjs → scripts/postinstall.mjs`.
   Huthibitisha baiti tambulishi za `.node` asilia (ELF / Mach-O / PE) kabla ya kupakia
   ili kujilinda dhidi ya faili za binary zilizoharibika au za mfumo usio sahihi.

3. **`node:sqlite`** (maktaba sanifu ya Node ≥22.5) — haihitaji ujengaji asilia; hutumika wakati
   njia zote mbili za better-sqlite3 zinaposhindwa. Ina seti ndogo ya vipengele.

4. **`sql.js`** (WASM) — mbinu mbadala ya mwisho. Hufanya kazi kila mahali lakini ni polepole zaidi
   na huandika data kwa vipindi badala ya kufanya hivyo kisawazishi.

## Kwa nini kuna utata huu?

- **Windows EBUSY**: `npm install -g omniroute@latest` inaweza kushindwa ikiwa
  `better_sqlite3.node` ya toleo la awali imefungwa na mchakato unaoendelea. Usakinishaji
  wa wakati wa utekelezaji katika `~/.omniroute/runtime/` huepuka kache ya kimataifa ya npm.
- **Hakuna zana za kujenga**: Baadhi ya mazingira (Windows ya mashirika isiyo na VS Build
  Tools, picha za kiwango cha chini za Docker) hayawezi kukusanya `better-sqlite3`. Kisakinishaji
  cha wakati wa utekelezaji hupata faili ya binary iliyojengwa tayari kutoka rejista ya npm; viendeshi
  mbadala huhakikisha OmniRoute bado inaanza hata ikiwa hatua hiyo itashindwa.
- **Mifumo iliyotengwa na mtandao**: Ikiwa rejista ya npm haipatikani, `node:sqlite`
  au `sql.js` huhakikisha utendaji wa msingi.

## Uthibitishaji wa baiti tambulishi

Kabla ya kupakia faili ya `.node` iliyosakinishwa wakati wa utekelezaji, OmniRoute husoma baiti 8
za kwanza na kuzilinganisha na alama tambulishi zinazojulikana za mifumo:

| Mfumo                 | Baiti (hex)   | Lebo        |
| --------------------- | ------------- | ----------- |
| Linux                 | `7F 45 4C 46` | `elf`       |
| macOS 64-bit BE       | `FE ED FA CF` | `macho`     |
| macOS 64-bit LE       | `CF FA ED FE` | `macho-le`  |
| macOS fat (universal) | `CA FE BA BE` | `macho-fat` |
| Windows               | `4D 5A` (MZ)  | `pe`        |

Alama tambulishi isiyolingana → faili hupuuzwa, na mbinu mbadala huendelea hadi hatua inayofuata.

## Kuangalia kiendeshi kinachotumika

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## Udhibiti wa moja kwa moja

```bash
# Ruka uandaaji wa awali baada ya usakinishaji (kwa usakinishaji wa haraka wa CI)
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# Sakinisha upya kwa lazima better-sqlite3 ya wakati wa utekelezaji
rm -rf ~/.omniroute/runtime
omniroute  # itasakinishwa upya wakati wa kuanza mara inayofuata

# Angalia ni kiendeshi gani kinachotumika
omniroute config db-info  # (ikiwa amri ya CLI ipo)
```

## Kutambua kukwama kwa shughuli za kisawazishi

Ukitumia `better-sqlite3`, weka `OMNIROUTE_SQLITE_SLOW_MS=200` kabla ya kuanzisha ili kuwezesha
upimaji wa muda wa adapta ya kisawazishi. Kwa chaguo-msingi umezimwa. Operesheni iliyokamilika inayochukua
angalau idadi hiyo ya milisekunde hutoa onyo la `[SQLITE-SLOW]`, lisilozidi mara moja kwa
kila sekunde kumi kwa kila adapta. Onyo hilo lina kiendeshi, aina ya operesheni
(`prepare`, `get`, `all`, `run`, `exec`, `pragma`, muamala au matengenezo), na
milisekunde zilizopita pekee: halina SQL, vifungamanishi, safu mlalo, njia za faili wala maandishi ya hitilafu.

Hiki ni kifaa cha uchunguzi, si kikomo cha muda wala uboreshaji wa hoja. Hakiwezi kuripoti
operesheni ambayo hairudi kamwe, kutofautisha kazi ya CPU na kusubiri diski, kubainisha
SQL halisi, au kuchunguza operesheni zinazofanywa kupitia kishikio ghafi cha kiendeshi.
Muda wa uhifadhi nakala usiosawazishwa umeondolewa kimakusudi; viendeshi vingine vya SQLite
havijawekewa kipimo na kipengele hiki cha hiari. Kuzima kigezo hicho hurejesha adapta ya awali
bila vifungashio vya kupima muda. Hakuna mabadiliko kwenye muundo wa hifadhidata au usanidi uliohifadhiwa.

Onyo la ucheleweshaji la `/healthz` huripoti kilele cha ucheleweshaji wa kitanzi cha matukio tangu sampuli iliyotangulia,
si wastani wa muda wote. Linganisha mihuri yake ya muda na maonyo ya operesheni polepole
pamoja na vipimo vya mwenyeji/hifadhi kabla ya kuhusisha kukwama na SQLite au hitilafu ya diski.

## Marejeleo

Utekelezaji:

- `bin/cli/runtime/magicBytes.mjs` — visaidizi vya kuthibitisha baiti tambulishi za faili za binary
- `bin/cli/runtime/sqliteRuntime.mjs` — kitatuzi cha wakati wa utekelezaji cha hatua 5 + kisakinishaji cha ulegevu
- `bin/cli/runtime/index.mjs` — kiratibu cha kuanzisha (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — ndoano ya npm baada ya usakinishaji (uandaaji wa awali usiosababisha hitilafu kuu)
- `src/lib/db/core.ts` — uhamishaji nje wa `ensureDbInitialized()` / `getDriverInfo()`

## Topolojia ya mwandishi mmoja (HA haitumiki)

Mnyororo wa viendeshi mbadala hapo juu bado huendeshwa katika **mchakato mmoja**. Kwa SQLite
ya chaguo-msingi, OmniRoute ni **mwandishi mmoja**:

- Usiunganishe nakala mbili za OmniRoute kwenye faili moja ya `storage.sqlite`.
- Kuwashwa upya kwa kontena, uwekaji wa Recreate, kusimamishwa kwa OOM, au kuwashwa upya na HEALTHCHECK hukatiza
  kila kipindi cha SSE kinachoendelea. Hakuna uondoaji taratibu wa vipindi katika njia ya kawaida.
- Ukaguzi wa uhai wa kiratibu unaochukulia `/healthz` yenye mwitikio wa polepole kuwa imekufa utasitisha nakala
  pekee. Pendelea ukaguzi wa uhai wa TCP + utayari wa HTTP `/healthz`. Tazama
  [Mwongozo wa Docker — upatikanaji](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  na [mapendekezo ya uchunguzi wa Kubernetes](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
