# SQLite Runtime Resolution (ગુજરાતી)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute સ્ટાર્ટઅપ સમયે 5-પગલાંની ફૉલબૅક શૃંખલા દ્વારા તેના SQLite ડ્રાઇવરને નિર્ધારિત કરે છે:

1. **બંડલ કરેલું `better-sqlite3`** (`package.json`માં `dependencies` મારફતે)
   — સૌથી ઝડપી, નેટિવ બાઇનરી, બિલ્ડ ટૂલ્સ ઉપલબ્ધ હોય ત્યારે `npm install` દ્વારા ઇન્સ્ટૉલ થાય છે.

2. **રનટાઇમમાં ઇન્સ્ટૉલ કરેલું `better-sqlite3`** (`~/.omniroute/runtime/`માં)
   — પ્રથમ રન વખતે જરૂર મુજબ **અથવા** `scripts/build/postinstall.mjs → scripts/postinstall.mjs` દ્વારા ઇન્સ્ટૉલ થાય છે.
   લોડ કરતાં પહેલાં નેટિવ `.node` મેજિક બાઇટ્સ (ELF / Mach-O / PE) ચકાસે છે,
   જેથી દૂષિત અથવા ખોટા પ્લેટફોર્મ માટેની બાઇનરીઓ સામે રક્ષણ મળી શકે.

3. **`node:sqlite`** (Node ≥22.5 stdlib) — નેટિવ બિલ્ડની જરૂર નથી; જ્યારે
   better-sqlite3ના બંને પાથ નિષ્ફળ જાય ત્યારે વપરાય છે. મર્યાદિત સુવિધાઓ ધરાવે છે.

4. **`sql.js`** (WASM) — અંતિમ ફૉલબૅક. બધે કાર્ય કરે છે, પરંતુ ધીમું છે
   અને ડેટા સમકાલીન રીતે લખવાને બદલે સમયાંતરે લખે છે.

## આ જટિલતા શા માટે?

- **Windows EBUSY**: જો અગાઉના વર્ઝનની `better_sqlite3.node` ચાલતી પ્રોસેસ દ્વારા
  લૉક થયેલી હોય, તો `npm install -g omniroute@latest` નિષ્ફળ થઈ શકે છે. `~/.omniroute/runtime/`માં
  થતું રનટાઇમ ઇન્સ્ટૉલ વૈશ્વિક npm કૅશને બાજુ પર રાખે છે.
- **બિલ્ડ ટૂલ્સ ઉપલબ્ધ નથી**: કેટલાક એન્વાયરમેન્ટ્સ (VS Build Tools વિનાનું કૉર્પોરેટ Windows,
  ન્યૂનતમ Docker ઇમેજો) `better-sqlite3` કમ્પાઇલ કરી શકતા નથી. રનટાઇમ
  ઇન્સ્ટૉલર npm રજિસ્ટ્રીમાંથી પૂર્વ-બિલ્ટ બાઇનરી મેળવે છે; જો તે પણ નિષ્ફળ જાય,
  તો ફૉલબૅક ડ્રાઇવરો સુનિશ્ચિત કરે છે કે OmniRoute હજી પણ શરૂ થઈ શકે.
- **એર-ગૅપ્ડ સિસ્ટમ્સ**: જો npm રજિસ્ટ્રી સુધી પહોંચી ન શકાય, તો `node:sqlite`
  અથવા `sql.js` મૂળભૂત કાર્યક્ષમતાની ખાતરી આપે છે.

## મેજિક-બાઇટ ચકાસણી

રનટાઇમમાં ઇન્સ્ટૉલ કરેલી `.node` ફાઇલ લોડ કરતાં પહેલાં, OmniRoute પ્રથમ 8
બાઇટ્સ વાંચે છે અને જાણીતા પ્લેટફોર્મ મેજિક્સ સાથે મેળવે છે:

| પ્લેટફોર્મ            | બાઇટ્સ (hex)  | લેબલ        |
| --------------------- | ------------- | ----------- |
| Linux                 | `7F 45 4C 46` | `elf`       |
| macOS 64-bit BE       | `FE ED FA CF` | `macho`     |
| macOS 64-bit LE       | `CF FA ED FE` | `macho-le`  |
| macOS fat (universal) | `CA FE BA BE` | `macho-fat` |
| Windows               | `4D 5A` (MZ)  | `pe`        |

મેજિક મેળ ન ખાય → ફાઇલ અવગણવામાં આવે છે અને ફૉલબૅક આગળના પગલાં પર ચાલુ રહે છે.

## સક્રિય ડ્રાઇવર તપાસવો

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## મેન્યુઅલ નિયંત્રણ

```bash
# ઝડપી CI ઇન્સ્ટૉલ માટે postinstall વૉર્મ-અપ છોડો
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# રનટાઇમ better-sqlite3ને બળજબરીથી ફરી ઇન્સ્ટૉલ કરો
rm -rf ~/.omniroute/runtime
omniroute  # આગામી સ્ટાર્ટ વખતે ફરી ઇન્સ્ટૉલ થશે

# કયો ડ્રાઇવર સક્રિય છે તે તપાસો
omniroute config db-info  # (જો CLI કમાન્ડ અસ્તિત્વમાં હોય)
```

## સમકાલીન અવરોધોનું નિદાન

`better-sqlite3` સાથે, સમકાલીન ઍડેપ્ટર ટાઇમિંગ પસંદ કરવા માટે સ્ટાર્ટઅપ પહેલાં
`OMNIROUTE_SQLITE_SLOW_MS=200` સેટ કરો. ડિફૉલ્ટ રૂપે તે બંધ હોય છે. પૂર્ણ થયેલી કોઈ
ક્રિયા ઓછામાં ઓછી એટલી મિલિસેકન્ડ લે, તો દરેક ઍડેપ્ટર માટે દર દસ સેકન્ડમાં વધુમાં વધુ
એક વખત `[SQLITE-SLOW]` ચેતવણી બહાર પડે છે. ચેતવણીમાં માત્ર ડ્રાઇવર, ઑપરેશન ક્લાસ
(`prepare`, `get`, `all`, `run`, `exec`, `pragma`, ટ્રાન્ઝેક્શન અથવા મેન્ટેનન્સ) અને
વીતેલી મિલિસેકન્ડ હોય છે: કોઈ SQL, બાઇન્ડિંગ્સ, રોઝ, પાથ અથવા અપવાદ ટેક્સ્ટ નહીં.

આ એક નિદાન સહાય છે, ટાઇમઆઉટ અથવા ક્વેરી ઑપ્ટિમાઇઝેશન નથી. તે ક્યારેય પરત ન આવતી
ક્રિયાની જાણ કરી શકતું નથી, CPU કાર્યને ડિસ્ક પ્રતીક્ષાથી અલગ પાડી શકતું નથી, ચોક્કસ
SQL ઓળખી શકતું નથી અથવા રૉ ડ્રાઇવર હૅન્ડલ દ્વારા કરવામાં આવેલી ક્રિયાઓનું નિરીક્ષણ
કરી શકતું નથી. અસિંક્રોનસ બૅકઅપની અવધિ ઇરાદાપૂર્વક બાકાત રાખવામાં આવી છે; અન્ય
SQLite ડ્રાઇવરો પર આ વૈકલ્પિક ઇન્સ્ટ્રુમેન્ટેશન લાગુ પડતું નથી. વેરિએબલને અક્ષમ કરવાથી
ટાઇમિંગ રૅપર્સ વિનાનું મૂળ ઍડેપ્ટર પુનઃસ્થાપિત થાય છે. ડેટાબેઝ સ્કીમા અથવા સંગ્રહિત
કન્ફિગરેશનમાં કોઈ ફેરફાર થતો નથી.

`/healthz` લૅગ ચેતવણી પાછલા નમૂના પછીનું ઇવેન્ટ-લૂપ શિખર દર્શાવે છે,
સમગ્ર આયુષ્યકાળની સરેરાશ નહીં. અવરોધને SQLite અથવા ડિસ્કની નિષ્ફળતા સાથે જોડતાં પહેલાં
તેના ટાઇમસ્ટૅમ્પ્સને ધીમી ક્રિયાની ચેતવણીઓ અને હોસ્ટ/સ્ટોરેજ મેટ્રિક્સ સાથે સહસંબંધિત કરો.

## સંદર્ભ

અમલીકરણ:

- `bin/cli/runtime/magicBytes.mjs` — બાઇનરી મેજિક-બાઇટ ચકાસણી માટેના સહાયક
- `bin/cli/runtime/sqliteRuntime.mjs` — 5-પગલાંનો રનટાઇમ રિઝૉલ્વર + જરૂર મુજબનો ઇન્સ્ટૉલર
- `bin/cli/runtime/index.mjs` — સ્ટાર્ટઅપ ઑર્કેસ્ટ્રેટર (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — npm પોસ્ટ-ઇન્સ્ટૉલ હૂક (બિન-ઘાતક વૉર્મ-અપ)
- `src/lib/db/core.ts` — `ensureDbInitialized()` / `getDriverInfo()` એક્સપોર્ટ્સ

## સિંગલ-રાઇટર ટોપોલોજી (HA અસમર્થિત)

ઉપરની ડ્રાઇવર ફૉલબૅક શૃંખલા હજી પણ **એક પ્રોસેસ**માં ચાલે છે. ડિફૉલ્ટ SQLite
OmniRoute એક **સિંગલ રાઇટર** છે:

- એક જ `storage.sqlite` ફાઇલ સાથે બે OmniRoute રેપ્લિકા જોડશો નહીં.
- કન્ટેનર રિસ્ટાર્ટ, Recreate ડિપ્લૉય, OOM kill અથવા HEALTHCHECK રિસ્ટાર્ટથી
  પ્રગતિમાં રહેલું દરેક SSE સેશન બંધ થઈ જાય છે. સ્ટૉક પાથ પર કોઈ સેશન ડ્રેઇન નથી.
- ધીમા `/healthz`ને નિષ્ક્રિય ગણતી ઑર્કેસ્ટ્રેટર લાઇવનેસ એકમાત્ર
  રેપ્લિકાને બંધ કરી દેશે. TCP લાઇવનેસ + HTTP `/healthz` રેડીનેસને પ્રાધાન્ય આપો. જુઓ
  [Docker માર્ગદર્શિકા — ઉપલબ્ધતા](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  અને [Kubernetes પ્રોબ ભલામણો](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
