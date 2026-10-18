# SQLite Runtime Resolution (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute определяет драйвер SQLite при запуске с помощью 5-этапной цепочки резервных вариантов:

1. **Встроенный `better-sqlite3`** (через `dependencies` в `package.json`)
   — самый быстрый вариант, нативный бинарный файл, устанавливаемый командой `npm install` при наличии инструментов сборки.

2. **Установленный во время выполнения `better-sqlite3`** (в `~/.omniroute/runtime/`)
   — устанавливается отложенно при первом запуске **ИЛИ** посредством `scripts/build/postinstall.mjs → scripts/postinstall.mjs`.
   Перед загрузкой проверяются магические байты нативного файла `.node` (ELF / Mach-O / PE),
   чтобы предотвратить использование повреждённых бинарных файлов или файлов для другой платформы.

3. **`node:sqlite`** (стандартная библиотека Node ≥22.5) — нативная сборка не требуется; используется, если
   оба варианта better-sqlite3 недоступны. Имеет ограниченный набор возможностей.

4. **`sql.js`** (WASM) — последний резервный вариант. Работает везде, но медленнее
   и записывает данные периодически, а не синхронно.

## Зачем нужна такая сложность?

- **EBUSY в Windows**: `npm install -g omniroute@latest` может завершиться ошибкой, если файл
  `better_sqlite3.node` предыдущей версии заблокирован запущенным процессом. Установка
  во время выполнения в `~/.omniroute/runtime/` позволяет обойти глобальный кеш npm.
- **Отсутствие инструментов сборки**: в некоторых средах (корпоративная Windows без VS Build
  Tools, минимальные образы Docker) невозможно скомпилировать `better-sqlite3`. Установщик
  среды выполнения получает предварительно собранный бинарный файл из реестра npm; резервные
  драйверы гарантируют, что OmniRoute сможет запуститься, даже если это не удастся.
- **Изолированные от сети системы**: если реестр npm недоступен, `node:sqlite`
  или `sql.js` гарантируют базовую функциональность.

## Проверка магических байтов

Перед загрузкой файла `.node`, установленного во время выполнения, OmniRoute считывает первые 8
байтов и сравнивает их с известными сигнатурами платформ:

| Платформа             | Байты (hex)   | Метка       |
| --------------------- | ------------- | ----------- |
| Linux                 | `7F 45 4C 46` | `elf`       |
| macOS, 64-битная BE   | `FE ED FA CF` | `macho`     |
| macOS, 64-битная LE   | `CF FA ED FE` | `macho-le`  |
| macOS fat (universal) | `CA FE BA BE` | `macho-fat` |
| Windows               | `4D 5A` (MZ)  | `pe`        |

Если сигнатура не совпадает, файл игнорируется, а цепочка переходит к следующему этапу.

## Проверка активного драйвера

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## Ручное управление

```bash
# Пропустить предварительную инициализацию после установки (для быстрой установки в CI)
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# Принудительно переустановить better-sqlite3 среды выполнения
rm -rf ~/.omniroute/runtime
omniroute  # будет переустановлен при следующем запуске

# Проверить, какой драйвер активен
omniroute config db-info  # (если команда CLI существует)
```

## Диагностика синхронных зависаний

При использовании `better-sqlite3` задайте `OMNIROUTE_SQLITE_SLOW_MS=200` перед запуском, чтобы
включить измерение времени работы синхронного адаптера. По умолчанию оно отключено. Если завершённая
операция занимает не менее указанного количества миллисекунд, выдаётся предупреждение `[SQLITE-SLOW]`,
но не чаще одного раза в десять секунд для каждого адаптера. Предупреждение содержит только драйвер,
класс операции (`prepare`, `get`, `all`, `run`, `exec`, `pragma`, транзакция или обслуживание) и
затраченное время в миллисекундах: без SQL, привязок, строк, путей или текста исключения.

Это средство диагностики, а не механизм тайм-аута или оптимизации запросов. Оно не может сообщить
об операции, которая никогда не завершается, отличить вычисления CPU от ожидания диска, определить
точный SQL-запрос или отслеживать операции, выполняемые через низкоуровневый дескриптор драйвера.
Длительность асинхронного резервного копирования намеренно исключена; другие драйверы SQLite
не охватываются этой опциональной диагностикой. Отключение переменной восстанавливает исходный
адаптер без обёрток для измерения времени. Схема базы данных и сохранённая конфигурация не изменяются.

Предупреждение `/healthz` о задержке сообщает о пиковом значении задержки цикла событий с момента
предыдущего измерения, а не о среднем значении за всё время работы. Сопоставляйте его временные метки
с предупреждениями о медленных операциях и метриками хоста/хранилища, прежде чем связывать зависание
с SQLite или сбоем диска.

## Справочная информация

Реализация:

- `bin/cli/runtime/magicBytes.mjs` — вспомогательные функции проверки магических байтов бинарных файлов
- `bin/cli/runtime/sqliteRuntime.mjs` — 5-этапный механизм выбора во время выполнения + отложенный установщик
- `bin/cli/runtime/index.mjs` — оркестратор запуска (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — хук npm после установки (не критическая предварительная инициализация)
- `src/lib/db/core.ts` — экспорты `ensureDbInitialized()` / `getDriverInfo()`

## Топология с одним процессом записи (HA не поддерживается)

Описанная выше цепочка резервных драйверов по-прежнему работает в **одном процессе**. Стандартная
конфигурация SQLite в OmniRoute предполагает **один процесс записи**:

- Не подключайте две реплики OmniRoute к одному и тому же файлу `storage.sqlite`.
- Перезапуск контейнера, развёртывание Recreate, завершение из-за OOM или перезапуск HEALTHCHECK прерывает
  все активные сеансы SSE. В стандартном варианте корректное завершение сеансов не выполняется.
- Проверка работоспособности оркестратора, считающая медленный ответ `/healthz` признаком сбоя, завершит
  единственную реплику. Для проверки активности предпочитайте TCP, а HTTP `/healthz` используйте для
  проверки готовности. См.
  [Руководство по Docker — доступность](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  и [рекомендации по пробам Kubernetes](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
