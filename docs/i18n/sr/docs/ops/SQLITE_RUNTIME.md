# SQLite Runtime Resolution (Српски)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute разрешава свој SQLite управљачки програм при покретању кроз ланац од 5 резервних корака:

1. **Уграђени `better-sqlite3`** (преко `dependencies` у `package.json`)
   — најбржи, користи изворну бинарну датотеку, инсталира се помоћу `npm install` када су доступни алати за изградњу.

2. **`better-sqlite3` инсталиран током извршавања** (у `~/.omniroute/runtime/`)
   — инсталира се по потреби при првом покретању **ИЛИ** преко `scripts/build/postinstall.mjs → scripts/postinstall.mjs`.
   Пре учитавања проверава магичне бајтове изворне `.node` датотеке (ELF / Mach-O / PE)
   ради заштите од оштећених бинарних датотека или оних намењених другој платформи.

3. **`node:sqlite`** (стандардна библиотека за Node ≥22.5) — није потребна изворна изградња; користи се када
   обе путање за better-sqlite3 не успеју. Има ограничен скуп функција.

4. **`sql.js`** (WASM) — последња резерва. Ради свуда, али је спорији
   и уписује податке у интервалима уместо синхроно.

## Зашто ова сложеност?

- **Windows EBUSY**: `npm install -g omniroute@latest` може да не успе ако је
  `better_sqlite3.node` из претходне верзије закључан од стране активног процеса. Инсталација
  током извршавања у `~/.omniroute/runtime/` заобилази глобални npm кеш.
- **Нема алата за изградњу**: Нека окружења (пословни Windows без VS Build
  Tools алата, минималне Docker слике) не могу да компајлирају `better-sqlite3`. Инсталатор
  током извршавања преузима унапред изграђену бинарну датотеку из npm регистра; резервни
  управљачки програми обезбеђују да се OmniRoute ипак покрене чак и ако то не успе.
- **Системи без приступа мрежи**: Ако npm регистар није доступан, `node:sqlite`
  или `sql.js` гарантују основну функционалност.

## Провера магичних бајтова

Пре учитавања `.node` датотеке инсталиране током извршавања, OmniRoute чита првих 8
бајтова и упоређује их са познатим магичним вредностима платформи:

| Платформа               | Бајтови (хекс.) | Ознака      |
| ----------------------- | --------------- | ----------- |
| Linux                   | `7F 45 4C 46`   | `elf`       |
| macOS 64-битни BE       | `FE ED FA CF`   | `macho`     |
| macOS 64-битни LE       | `CF FA ED FE`   | `macho-le`  |
| macOS fat (универзални) | `CA FE BA BE`   | `macho-fat` |
| Windows                 | `4D 5A` (MZ)    | `pe`        |

Неподударање магичне вредности → датотека се игнорише, а резервни поступак прелази на следећи корак.

## Провера активног управљачког програма

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## Ручно управљање

```bash
# Прескочи postinstall загревање (за брзе CI инсталације)
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# Принудно поново инсталирај better-sqlite3 за окружење извршавања
rm -rf ~/.omniroute/runtime
omniroute  # поново ће се инсталирати при следећем покретању

# Провери који је управљачки програм активан
omniroute config db-info  # (ако CLI команда постоји)
```

## Дијагностиковање синхроних застоја

Уз `better-sqlite3`, подесите `OMNIROUTE_SQLITE_SLOW_MS=200` пре покретања да бисте
укључили мерење времена синхроног адаптера. Подразумевано је искључено. Завршена операција која траје
најмање толико милисекунди генерише упозорење `[SQLITE-SLOW]`, највише једном у
десет секунди по адаптеру. Упозорење садржи само управљачки програм, класу операције
(`prepare`, `get`, `all`, `run`, `exec`, `pragma`, трансакција или одржавање) и
протекле милисекунде: без SQL-а, повезаних вредности, редова, путања или текста изузетка.

Ово је помоћно средство за дијагностику, а не временско ограничење или оптимизација упита. Оно не може да пријави
операцију која се никада не заврши, да разликује процесорски рад од чекања на диск, да идентификује
тачан SQL нити да прати операције извршене преко сировог дескриптора управљачког програма.
Трајање асинхроног прављења резервне копије намерно је изузето; други SQLite управљачки програми нису
инструментисани овом опционом функцијом. Искључивање променљиве враћа оригинални адаптер
без омотача за мерење времена. Нема промена у шеми базе података нити у сачуваној конфигурацији.

Упозорење о кашњењу за `/healthz` пријављује вршну вредност петље догађаја од претходног узорка,
а не просек током целокупног рада. Упоредите његове временске ознаке са упозорењима о спорим операцијама
и метрикама хоста/складишта пре него што застој припишете SQLite-у или отказу диска.

## Референце

Имплементација:

- `bin/cli/runtime/magicBytes.mjs` — помоћне функције за проверу магичних бајтова бинарних датотека
- `bin/cli/runtime/sqliteRuntime.mjs` — механизам разрешавања током извршавања у 5 корака + инсталатор који се покреће по потреби
- `bin/cli/runtime/index.mjs` — оркестратор покретања (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — npm post-install кука (нефатално загревање)
- `src/lib/db/core.ts` — извози `ensureDbInitialized()` / `getDriverInfo()`

## Топологија са једним писцем (HA није подржан)

Наведени ланац резервних управљачких програма и даље се извршава у **једном процесу**. Подразумевани SQLite
у OmniRoute-у има **једног писца**:

- Не повезујте две OmniRoute реплике са истом датотеком `storage.sqlite`.
- Поновно покретање контејнера, Recreate примена, OOM прекид или HEALTHCHECK поновно покретање прекидају
  сваку активну SSE сесију. На подразумеваној путањи нема контролисаног завршетка сесија.
- Провера виталности оркестратора која спор `/healthz` сматра неактивним угасиће једину
  реплику. За проверу виталности користите TCP, а за проверу спремности HTTP `/healthz`. Погледајте
  [Docker водич — доступност](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  и [препоруке за Kubernetes пробе](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
