# SQLite Runtime Resolution (Hausa)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute yana tantance direban SQLite ɗinsa a lokacin farawa ta hanyar jerin madadin matakai 5:

1. **`better-sqlite3` da aka haɗa** (ta hanyar `dependencies` a cikin `package.json`)
   — shi ne mafi sauri, yana amfani da binary na asali, kuma `npm install` ne ke girka shi idan akwai kayan aikin build.

2. **`better-sqlite3` da aka girka a lokacin aiki** (a cikin `~/.omniroute/runtime/`)
   — ana girka shi ne idan an buƙata a farkon aiki **KO** ta `scripts/build/postinstall.mjs → scripts/postinstall.mjs`.
   Yana tabbatar da magic bytes na `.node` na asali (ELF / Mach-O / PE) kafin lodawa
   domin kariya daga binary da ya lalace ko wanda ba na wannan dandali ba.

3. **`node:sqlite`** (Node ≥22.5 stdlib) — ba ya buƙatar build na asali; ana amfani da shi idan
   duk hanyoyin better-sqlite3 biyu suka gaza. Yana da iyakantattun fasaloli.

4. **`sql.js`** (WASM) — madadin ƙarshe. Yana aiki a ko'ina amma ya fi jinkiri
   kuma yana rubuta bayanai bisa tazara maimakon yin hakan nan take.

## Me ya sa ake buƙatar wannan sarƙaƙƙiya?

- **Windows EBUSY**: `npm install -g omniroute@latest` na iya gazawa idan
  `better_sqlite3.node` na sigar da ta gabata yana kulle saboda wani process da ke gudana. Girka na lokacin
  aiki a cikin `~/.omniroute/runtime/` yana kauce wa cache na npm na global.
- **Babu kayan aikin build**: Wasu mahallai (Windows na kamfani ba tare da VS Build
  Tools ba, ko ƙananan hotunan Docker) ba za su iya compile `better-sqlite3` ba. Mai girkawa na lokacin
  aiki yana samo binary da aka riga aka build daga registry na npm; direbobin
  madadin suna tabbatar da cewa OmniRoute zai ci gaba da farawa ko da hakan ya gaza.
- **Tsarukan da aka ware daga intanet**: Idan ba a iya isa registry na npm ba, `node:sqlite`
  ko `sql.js` suna tabbatar da samuwar aƙalla ayyukan asali.

## Tabbatar da magic-byte

Kafin loda fayil ɗin `.node` da aka girka a lokacin aiki, OmniRoute yana karanta bytes 8 na farko
kuma yana kwatanta su da sanannun magic na dandali:

| Dandali               | Bytes (hex)   | Lakabi      |
| --------------------- | ------------- | ----------- |
| Linux                 | `7F 45 4C 46` | `elf`       |
| macOS 64-bit BE       | `FE ED FA CF` | `macho`     |
| macOS 64-bit LE       | `CF FA ED FE` | `macho-le`  |
| macOS fat (universal) | `CA FE BA BE` | `macho-fat` |
| Windows               | `4D 5A` (MZ)  | `pe`        |

Idan magic bai dace ba → ana yin watsi da fayil ɗin, sannan madadin ya ci gaba zuwa mataki na gaba.

## Duba direban da ke aiki

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## Sarrafawa da hannu

```bash
# Tsallake warm-up na postinstall (domin girkawar CI mai sauri)
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# Tilasta sake girka better-sqlite3 na lokacin aiki
rm -rf ~/.omniroute/runtime
omniroute  # zai sake girkawa a farawa na gaba

# Duba direban da ke aiki
omniroute config db-info  # (idan umarnin CLI yana nan)
```

## Gano dalilan tsaikon aiki na synchronous

Tare da `better-sqlite3`, saita `OMNIROUTE_SQLITE_SLOW_MS=200` kafin farawa domin zaɓar
auna lokacin adapter na synchronous. A tsoho, wannan a kashe yake. Duk wani aiki da ya kammala wanda ya ɗauki
aƙalla wannan adadin milliseconds yana fitar da gargaɗin `[SQLITE-SLOW]`, ba fiye da sau ɗaya a kowane
daƙiƙa goma ga kowane adapter ba. Gargaɗin yana ƙunshe da direba, ajin aiki kawai
(`prepare`, `get`, `all`, `run`, `exec`, `pragma`, transaction ko maintenance), da
milliseconds da suka shuɗe: babu SQL, bindings, rows, paths ko rubutun exception.

Wannan taimako ne na bincike, ba timeout ko inganta query ba. Ba zai iya bayar da rahoton
aikin da bai taɓa dawowa ba, bambance aikin CPU da jiran disk, gano
ainihin SQL, ko lura da ayyukan da aka yi ta raw driver handle ba.
An cire tsawon lokacin async backup da gangan; sauran direbobin SQLite ba a
saka musu wannan kayan aunawa na zaɓi ba. Kashe variable ɗin yana dawo da adapter na asali
ba tare da wrappers na auna lokaci ba. Babu wani canji ga schema na database ko configuration da aka adana.

Gargaɗin lag na `/healthz` yana bayar da rahoton kololuwar event-loop tun daga sample na baya,
ba matsakaicin tsawon rayuwar tsarin ba. Daidaita timestamps ɗinsa da gargaɗin ayyuka masu jinkiri
da metrics na host/storage kafin a danganta tsaiko ga SQLite ko gazawar disk.

## Manazarta

Aiwatarwa:

- `bin/cli/runtime/magicBytes.mjs` — kayan taimako na tabbatar da magic-byte na binary
- `bin/cli/runtime/sqliteRuntime.mjs` — mai tantance runtime mai matakai 5 + mai girkawa idan an buƙata
- `bin/cli/runtime/index.mjs` — mai tsara farawa (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — hook na npm bayan girkawa (warm-up marar haddasa gazawa)
- `src/lib/db/core.ts` — exports na `ensureDbInitialized()` / `getDriverInfo()`

## Tsarin marubuci guda ɗaya (ba a tallafa wa HA)

Jerar madadin direban da ke sama har yanzu tana gudana a cikin **process guda ɗaya**. SQLite na tsoho
na OmniRoute yana da **marubuci guda ɗaya**:

- Kada a haɗa replicas biyu na OmniRoute da fayil ɗin `storage.sqlite` guda ɗaya.
- Sake kunna container, deploy na Recreate, OOM kill, ko sake kunnawar HEALTHCHECK yana katse
  duk wani zaman SSE da ke gudana. Babu session drain a hanyar da aka tanada ta asali.
- Liveness na orchestrator da ke ɗaukar `/healthz` mai jinkiri a matsayin matacce zai kashe replica
  guda ɗaya tilo. Fi son TCP liveness + readiness na HTTP `/healthz`. Duba
  [Jagorar Docker — samuwar sabis](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  da [shawarwarin probe na Kubernetes](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
