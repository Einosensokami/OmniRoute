# SQLite Runtime Resolution (Հայերեն)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute-ը գործարկման պահին որոշում է իր SQLite դրայվերը՝ օգտագործելով հետադարձ անցման 5-քայլանոց շղթա․

1. **Փաթեթում ներառված `better-sqlite3`** (`package.json`-ի `dependencies`-ի միջոցով)
   — ամենաարագ տարբերակը՝ բնիկ բինար ֆայլով, որը տեղադրվում է `npm install`-ի միջոցով, երբ առկա են կառուցման գործիքները։

2. **Կատարման պահին տեղադրված `better-sqlite3`** (`~/.omniroute/runtime/`-ում)
   — առաջին գործարկման ժամանակ տեղադրվում է հետաձգված եղանակով **ԿԱՄ** `scripts/build/postinstall.mjs → scripts/postinstall.mjs`-ի միջոցով։
   Բեռնումից առաջ ստուգում է բնիկ `.node` ֆայլի կախարդական բայթերը (ELF / Mach-O / PE)՝
   վնասված կամ այլ հարթակի համար նախատեսված բինար ֆայլերից պաշտպանվելու նպատակով։

3. **`node:sqlite`** (Node ≥22.5 ստանդարտ գրադարան) — բնիկ կառուցում չի պահանջվում․ օգտագործվում է, երբ
   better-sqlite3-ի երկու ուղիներն էլ ձախողվում են։ Ունի սահմանափակ գործառույթներ։

4. **`sql.js`** (WASM) — վերջնական հետադարձ տարբերակը։ Աշխատում է ամենուր, սակայն ավելի դանդաղ է
   և տվյալները գրում է պարբերաբար, այլ ոչ թե համաժամանակյա կերպով։

## Ինչո՞ւ է սա այսքան բարդ։

- **Windows EBUSY**․ `npm install -g omniroute@latest`-ը կարող է ձախողվել, եթե նախորդ
  տարբերակի `better_sqlite3.node` ֆայլը կողպված է աշխատող գործընթացի կողմից։ Կատարման պահին
  `~/.omniroute/runtime/`-ում տեղադրումը շրջանցում է npm-ի գլոբալ քեշը։
- **Կառուցման գործիքների բացակայություն**․ որոշ միջավայրեր (կորպորատիվ Windows՝ առանց VS Build
  Tools-ի, նվազագույն Docker պատկերներ) չեն կարող կոմպիլացնել `better-sqlite3`-ը։ Կատարման պահին
  տեղադրիչը npm ռեեստրից ստանում է նախապես կառուցված բինար ֆայլը, իսկ հետադարձ
  դրայվերներն ապահովում են, որ OmniRoute-ը գործարկվի նույնիսկ այդ գործողության ձախողման դեպքում։
- **Ցանցից մեկուսացված համակարգեր**․ եթե npm ռեեստրն անհասանելի է, `node:sqlite`-ը
  կամ `sql.js`-ը երաշխավորում են հիմնական գործառույթները։

## Կախարդական բայթերի ստուգում

Կատարման պահին տեղադրված `.node` ֆայլը բեռնելուց առաջ OmniRoute-ը կարդում է առաջին 8
բայթերը և համեմատում դրանք հայտնի հարթակների կախարդական բայթերի հետ․

| Հարթակ                 | Բայթեր (hex)  | Պիտակ       |
| ---------------------- | ------------- | ----------- |
| Linux                  | `7F 45 4C 46` | `elf`       |
| macOS 64-բիթանոց BE    | `FE ED FA CF` | `macho`     |
| macOS 64-բիթանոց LE    | `CF FA ED FE` | `macho-le`  |
| macOS fat (ունիվերսալ) | `CA FE BA BE` | `macho-fat` |
| Windows                | `4D 5A` (MZ)  | `pe`        |

Չհամապատասխանող կախարդական բայթերի դեպքում ֆայլն անտեսվում է, և հետադարձ անցումը շարունակվում է հաջորդ քայլին։

## Ակտիվ դրայվերի ստուգում

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## Ձեռքով կառավարում

```bash
# Բաց թողնել postinstall նախնական գործարկումը (CI-ում արագ տեղադրման համար)
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# Հարկադրաբար վերատեղադրել կատարման միջավայրի better-sqlite3-ը
rm -rf ~/.omniroute/runtime
omniroute  # կվերատեղադրվի հաջորդ գործարկման ժամանակ

# Ստուգել, թե որ դրայվերն է ակտիվ
omniroute config db-info  # (եթե CLI հրամանը գոյություն ունի)
```

## Համաժամանակյա կանգերի ախտորոշում

`better-sqlite3`-ի դեպքում գործարկումից առաջ սահմանեք `OMNIROUTE_SQLITE_SLOW_MS=200`՝
համաժամանակյա ադապտերի ժամանակաչափումն ընտրովի միացնելու համար։ Լռելյայն այն անջատված է։ Ավարտված գործողությունը,
որը տևում է առնվազն այդքան միլիվայրկյան, առաջացնում է `[SQLITE-SLOW]` նախազգուշացում՝ յուրաքանչյուր
ադապտերի համար առավելագույնը տասը վայրկյանը մեկ։ Նախազգուշացումը պարունակում է միայն դրայվերը, գործողության դասը
(`prepare`, `get`, `all`, `run`, `exec`, `pragma`, տրանզակցիա կամ սպասարկում) և
անցած միլիվայրկյանները․ առանց SQL-ի, կապակցումների, տողերի, ուղիների կամ բացառության տեքստի։

Սա ախտորոշիչ օժանդակ միջոց է, այլ ոչ թե ժամանակի սահմանափակում կամ հարցման օպտիմալացում։ Այն չի կարող հաղորդել
երբեք չվերադարձող գործողության մասին, տարբերակել CPU-ի աշխատանքը սկավառակի սպասումներից, նույնականացնել
ճշգրիտ SQL-ը կամ դիտարկել անմիջապես դրայվերի չմշակված բռնակի միջոցով կատարվող գործողությունները։
Ասինխրոն պահուստավորման տևողությունը միտումնավոր բացառված է․ SQLite-ի մյուս դրայվերները չեն
գործիքավորվում այս ընտրովի հնարավորությամբ։ Փոփոխականի անջատումը վերականգնում է սկզբնական ադապտերը՝
առանց ժամանակաչափման փաթաթիչների։ Տվյալների բազայի սխեման կամ պահպանված կազմաձևումը չի փոխվում։

`/healthz`-ի ուշացման նախազգուշացումը հաղորդում է նախորդ նմուշառումից ի վեր իրադարձությունների ցիկլի առավելագույն ուշացումը,
այլ ոչ թե ամբողջ աշխատանքի ժամանակահատվածի միջինը։ Համադրեք դրա ժամանակային դրոշմանիշները դանդաղ գործողությունների նախազգուշացումների
և հոսթի/պահոցային համակարգի չափումների հետ՝ նախքան կանգը SQLite-ին կամ սկավառակի խափանմանը վերագրելը։

## Հղումներ

Իրականացում․

- `bin/cli/runtime/magicBytes.mjs` — բինար ֆայլերի կախարդական բայթերի ստուգման օժանդակ գործառույթներ
- `bin/cli/runtime/sqliteRuntime.mjs` — կատարման միջավայրի 5-քայլանոց որոշիչ + հետաձգված տեղադրիչ
- `bin/cli/runtime/index.mjs` — գործարկման համակարգող (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — npm-ի հետտեղադրման կեռիկ (ոչ ճակատագրական նախնական գործարկում)
- `src/lib/db/core.ts` — `ensureDbInitialized()` / `getDriverInfo()` արտահանումներ

## Մեկ գրողի տոպոլոգիա (HA-ն չի աջակցվում)

Վերևում նկարագրված դրայվերների հետադարձ անցման շղթան շարունակում է աշխատել **մեկ գործընթացում**։ SQLite-ով
լռելյայն OmniRoute-ը **մեկ գրող** ունի․

- Մի միացրեք OmniRoute-ի երկու կրկնօրինակ նույն `storage.sqlite` ֆայլին։
- Կոնտեյների վերագործարկումը, Recreate տեղակայումը, OOM-ի պատճառով դադարեցումը կամ HEALTHCHECK-ի վերագործարկումը խզում է
  ընթացքի մեջ գտնվող բոլոր SSE աշխատաշրջանները։ Ստանդարտ ուղում աշխատաշրջանների աստիճանական ավարտ չկա։
- Կազմակերպչի կենսունակության ստուգումը, որը դանդաղ `/healthz`-ը համարում է չաշխատող, կդադարեցնի միակ
  կրկնօրինակը։ Նախընտրեք TCP կենսունակության ստուգում + HTTP `/healthz` պատրաստության ստուգում։ Տե՛ս
  [Docker ուղեցույց — հասանելիություն](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  և [Kubernetes-ի ստուգիչների առաջարկություններ](./MONITORING_GUIDE.md#kubernetes-probe-recommendations)։
