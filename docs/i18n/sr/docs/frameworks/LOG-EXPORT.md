# Log export (Српски)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

Kontinuirani, inkrementalni izvoz OmniRoute evidencije poziva u eksterno skladište analitičkih podataka.

Kartica Logs na kontrolnoj tabli čuva istoriju zahteva u SQLite bazi (`call_logs`), koja je ograničena
rotacijom i periodom čuvanja. Izvoz evidencije šalje isti skup zapisa prema rasporedu kako bi oni
mogli da nadžive lokalnu bazu podataka i da se povezuju sa drugim podacima. BigQuery je prvo odredište;
cevovod predstavlja registar, pa se dodatna odredišta mogu naknadno dodavati.

---

## 1. Како функционише

```
сервер (дешифровање + валидација конфигурације, усаглашавање курсора)
  → покретање IPC-а → изоловани exportChild процес оперативног система
    → storage.sqlite само за читање → заједнички упит/мапирање евиденције позива
      → асинхроно учитавање артефаката → одредишни prepare()/send()
        → групни IPC → сервер чува курсор → IPC потврда
          → следећа група; IPC завршетка → сервер бележи успех
```

- **Распоред** — један `JobRegistry` cron задатак, `log_export`, са подразумеваном вредношћу `0 * * * *` (сваког сата,
  UTC). Регистрован је у `src/lib/initCloudSync.ts`; може се заменити помоћу `OMNIROUTE_LOG_EXPORT_CRON`.
  Свако покретање редом испразни свако **омогућено** одредиште.
- **Курсор** — SQLite-ов имплицитни `call_logs.rowid`, који се чува по одредишту у
  `log_export_destinations.cursor_row_id`. `timestamp` намерно није курсор: позиваоци
  могу да наведу сопствену вредност, па спор захтев може бити уписан након бржег захтева који је започет
  касније, а курсор заснован на временској ознаци би га прескочио.
- **Груписање** — `batch_size` редова по захтеву (подразумевано 500), `max_rows_per_run` редова по покретању
  (подразумевано 10000), тако да се велики заостатак обрађује током више покретања уместо да блокира једно.
- **Испорука** — курсор напредује тек након што се `send()` разреши. Неуспешна група оставља
  курсор тамо где је био, па се исти редови поново покушавају при следећем покретању. Гаранција је
  најмање једна испорука уз уклањање дупликата на страни одредишта, а не истински тачно једна испорука: BigQuery сваком
  реду додељује кључ на основу ID-а евиденције позива, што поштује по принципу најбољег могућег исхода унутар сопственог периода за уклањање дупликата.
- **Заштита од преклапања** — cron покретање и `POST .../run` могу се активирати истовремено. Одредиште
  које се већ празни прескаче се уместо да буде испражњено двапут (`skipped: true` у резултату покретања),
  тако да истовремено покретање не може поново послати групу нити вратити курсор уназад.
- **Опоравак након чишћења** — ако `cursor_row_id` заврши изнад `MAX(rowid)` (цела табела је
  очишћена и rowid вредности су поново започете), покретач враћа курсор на 0 уместо да трајно престане да види нове редове.

### Изоловани покретач и ограничења

Свако покретање одредишта на Node-у покреће засебан, краткотрајан подређени процес оперативног система (`child_process`
са IPC-ом, а не `worker_threads`). Читање тела, JSON рашчлањивање/серијализација садржаја, одредишни
`prepare()` и одредишни мрежни У/И извршавају се у њему, а не у петљи догађаја сервера.
Преко IPC-а пролазе само конфигурација и мале поруке о напретку; извезени записи се никада не враћају
на сервер. Cron задатак и рута „Покрени сада“ задржавају исти јавни резултат и заштиту од преклапања.

Подређени процес отвара серверов разрешени `DATA_DIR/storage.sqlite` само за читање помоћу `node:sqlite`,
уз `busy_timeout=5000` и `query_only=ON`. Не увози ниједан DB singleton и не обавља
миграције, резервне копије нити SQLite ажурирања. Евидентирање недостајућих/оштећених артефаката (укључујући
UPDATE за оштећени артефакт) остаје искључиво у путањи детаља контролне табле. Обе путање деле чист
разрешавач детаља; извоз користи асинхрона читања система датотека и исти редослед разрешавања:
артефакт → застарело уграђено тело → застарели диск → ништа. Покретање прави снимак максималног rowid-а уметања
када подређени процес отвори свој читач; каснија уметања чекају следеће покретање. Ово је граница
уметања, а не дуготрајна SQLite трансакција: WAL уписивачи и контролне тачке остају слободни током
чекања на мрежу. Ажурирања/брисања постојећих редова нису замрзнута овом границом.

Након сваке прихваћене групе, подређени процес чека потврду. Сервер најпре чува
курсор помоћу `advanceLogExportCursor`, а затим шаље `ack`; ниједна следећа група не започиње пре тога.
Неуспешно слање, пад или истек времена бележе неуспех без померања курсора за ту групу. Претходно
потврђене групе остају трајно уписане; највише једна непотврђена група може бити поново послата.
Успех се бележи тек након `done` и уредног завршетка подређеног процеса. У случају неуспеха, подређени процес
се прекида сигналом SIGTERM, уз прелазак на SIGKILL након 500 ms, а покретач чека затварање процеса.

| Променљива окружења                           | Подразумевано | Сврха                                                  |
| --------------------------------------------- | ------------- | ------------------------------------------------------ |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000        | Временско ограничење по одредишту                      |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024          | Ограничење старог простора V8 у MB за подређени процес |

Неважеће вредности, вредности које нису позитивне или нису цели бројеви користе подразумеване вредности. Подешавање гомиле није ограничење укупног
RSS-а; веома велике групе и даље могу исцрпети меморију подређеног процеса и безбедно прекинути покретање.
Подразумеваних 1024 MB оставља довољно простора за подразумевану групу од 500 артефаката величине 512 KiB са
укљученим телима, укључујући BigQuery-ову JSON серијализацију у сегментима по бајтовима. То не чини
групу од 10000 редова са телима безбедном. Исцрпљивање V8 гомиле бележи неуспех са јасним упутством: смањите величину
групе или повећајте `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB`; курсор остаје на последњој
потврђеној групи. Историјска уграђена тела/тела на диску нису обухваћена савременим ограничењем артефаката.
Оператери морају засебно планирати RSS, нарочито унутар контејнера са ограниченом меморијом.

Подређени процес наслеђује само разрешени `DATA_DIR`, `NODE_ENV`, експлицитни `TZ` (разрешавање локалног времена
за застареле називе датотека), `ELECTRON_RUN_AS_NODE` када је присутан и следеће улазне вредности за одлазне везе:
`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (и њихове варијанте малим словима),
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`.
Глобални Undici dispatcher дели серверово чисто разрешавање проксија из окружења и правила заобилажења локалних хостова,
укључујући `NO_PROXY`; не увози `proxyFetch.ts` нити његове DB/feature заставице.
Акредитиви проксија уклањају се из прослеђеног излаза и забележених грешака. Акредитиви одредишта
путују само у једној почетној IPC поруци, никада кроз argv или окружење; прослеђивање излаза/грешака добија
префикс и прочишћава се. Само је `ExperimentalWarning` онемогућен у аргументима извршавања подређеног процеса како би се избегло
понављање Node-овог SQLite упозорења при сваком cron покретању; остале врсте упозорења остају видљиве.

Одредишни модули морају бити увозиви без зависности које захтевају Next.js или искључиво серверско окружење. Постојећа
BigQuery имплементација већ испуњава тај уговор. Кешеви приступних токена трају само током подређеног
покретања, не и између покретања. Node је подржано извршно окружење (`package.json` engines), али одељак о
Bun инсталацији у README-у и `Dockerfile.bun` такође оглашавају путању за продукциону компатибилност која користи
`bun:sqlite` (`src/lib/db/core.ts` / адаптери). Под Bun-ом, извози зато задржавају претходну
путању унутар процеса и приказују једнократно упозорење: изолација хипа/временског ограничења подређеног процеса није доступна. Користите
Node за изолацију петље догађаја и OOM-а; Bun се овде не сматра окружењем искључиво за развој.

Када је `includeBodies` омогућен, дајте предност учесталости на нивоу минута, као што је
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"`, уместо нагомилавања сатног заостатка корисних података.
Ограничења серија и редова и даље ограничавају свако покретање. Покретање процеса плаћа се по одредишту за свако покретање;
тиме се мали трошак покретања мења за изолацију серверске петље догађаја, а не за смањену укупну употребу процесора.

### Корисни подаци (упити и довршавања)

Извоз подразумевано преноси само поља сажетка која приказује **листа** дневника. Укључивање
опције **Извези упите и одговоре** (`includeBodies`) додатно шаље оно што окно **детаља**
дневника приказује за сваки позив:

| Поље                             | Шта садржи                                                     |
| -------------------------------- | -------------------------------------------------------------- |
| `request_body` / `response_body` | Корисне податке позива онако како их контролна табла приказује |
| `pipeline_route_decision`        | Које одредиште и модел је рутер изабрао                        |
| `pipeline_client_request`        | Сирови захтев тачно онако како га је клијент послао            |
| `pipeline_openai_request`        | Након превођења у интерни OpenAI облик                         |
| `pipeline_provider_request`      | Како је заиста послат узводно, у дијалекту добављача           |
| `pipeline_provider_response`     | Сирови узводни одговор                                         |
| `pipeline_client_response`       | Оно што је враћено позиваоцу                                   |
| `pipeline_error`                 | Детаљи грешке на нивоу цевовода за неуспели позив              |
| `bodies_truncated`               | True када било које горње поље достигне `maxBodyBytes`         |

Ово је садржај упита, па је зато **подразумевано искључен** и намерно се бира засебно за свако одредиште.
Шаље се оно што контролна табла приказује, јер извоз и `getCallLogById` деле разрешавање
детаља: корисни подаци су
већ очишћени од личних података и из њих су уклоњене тајне када се упишу, а позив упућен помоћу
`noLog` API кључа уопште не чува корисне податке, па нема шта да се извезе.

Корисни подаци се читају за сваки ред из артефакта система датотека, па се хидратација покреће само за одредишта
која су је затражила. Ако артефакт недостаје или је оштећен, извози се његов сажетак са null корисним подацима,
уместо да серија не успе и курсор остане заглављен.

`maxBodyBytes` (подразумевано 262144) ограничава свако поље. Дужи корисни подаци се **скраћују уместо да се
одбаце** — скраћени упит и даље одговара на питање „шта је тражено“ — а ред се означава пољем
`bodies_truncated`. Делови који се стримују корак по корак не извозе се; састављени одговор се
већ налази у `pipeline_provider_response` и `pipeline_client_response`.

---

## 2. Датотеке

| Део                       | Локација                                     |
| ------------------------- | -------------------------------------------- |
| Уговор одредишта          | `src/lib/logExport/types.ts`                 |
| Регистар                  | `src/lib/logExport/registry.ts`              |
| Руковање тајнама          | `src/lib/logExport/secrets.ts`               |
| Покретач (родитељски IPC) | `src/lib/logExport/runner.ts`                |
| Животни циклус процеса    | `src/lib/logExport/childRunner.ts`           |
| Улазна тачка детета       | `src/lib/logExport/exportChild.ts`           |
| Отварач само за читање    | `src/lib/db/logExportReadOnly.ts`            |
| Дељени упит/мапирање      | `src/lib/usage/callLogExportQueries.ts`      |
| Разрешивач детаља         | `src/lib/usage/callLogDetailResolver.ts`     |
| API пројекција            | `src/lib/logExport/presenter.ts`             |
| BigQuery одредиште        | `src/lib/logExport/destinations/bigquery.ts` |
| Google SA аутентификација | `src/lib/logExport/googleServiceAccount.ts`  |
| Извор евиденције позива   | `src/lib/usage/callLogExportSource.ts`       |
| Перзистенција             | `src/lib/db/logExportDestinations.ts`        |
| Cron задатак              | `src/lib/jobs/logExportJob.ts`               |
| REST слој                 | `src/app/api/log-export/`                    |
| Страница контролне табле  | `src/app/(dashboard)/dashboard/log-export/`  |

Шема: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

Све руте су заштићене управљачком аутентификацијом (`requireManagementAuth`). Тајне се никада не враћају:
сачувана тајна се враћа као литерал `__stored__`, а слање те вредности назад приликом ажурирања
задржава сачувани акредитив.

Прављење или ажурирање одредишта чији тип декларише тајну **захтева
`STORAGE_ENCRYPTION_KEY`**. Без њега је `encrypt()` тихи пролаз без измена, па се упис
одбија статусом 400 уместо да се акредитив стави у SQLite као обичан текст (исту заштиту
примењује Telegram webhook).

| Метод    | Путања                                   | Сврха                                                       |
| -------- | ---------------------------------------- | ----------------------------------------------------------- |
| `GET`    | `/api/log-export/types`                  | Типови одредишта + листа њихових конфигурационих поља       |
| `GET`    | `/api/log-export/destinations`           | Листа одредишта (тајне су редиговане)                       |
| `POST`   | `/api/log-export/destinations`           | Прављење одредишта                                          |
| `GET`    | `/api/log-export/destinations/{id}`      | Читање једног одредишта                                     |
| `PUT`    | `/api/log-export/destinations/{id}`      | Ажурирање назива / омогућености / конфигурације / груписања |
| `DELETE` | `/api/log-export/destinations/{id}`      | Брисање                                                     |
| `POST`   | `/api/log-export/destinations/{id}/test` | Провера акредитива, без уписивања                           |
| `POST`   | `/api/log-export/destinations/{id}/run`  | Пражњење одмах, истом путањом као заказано извршавање       |
| `GET`    | `/api/log-export/status`                 | Стање Cron-а, недавна извршавања, заостатак по циљу         |

`GET /api/log-export/types` чини кориснички интерфејс генеричким: образац контролне табле се приказује на основу
враћених дескриптора поља, тако да ново одредиште не захтева измену корисничког интерфејса.

---

## 4. BigQuery одредиште

Конфигурациони кључеви (`type: "bigquery"`):

| Кључ                 | Напомене                                                                   |
| -------------------- | -------------------------------------------------------------------------- |
| `projectId`          | GCP пројекат који садржи скуп података                                     |
| `datasetId`          | `[A-Za-z0-9_]+`                                                            |
| `tableId`            | `[A-Za-z0-9_]+`                                                            |
| `location`           | Користи се само када скуп података мора да се направи (подразумевано `EU`) |
| `serviceAccountJson` | Кључ услужног налога. Тајна: шифрована у мировању, никада се не враћа      |
| `autoCreate`         | Прављење скупа података и табеле при првом извозу (подразумевано `true`)   |

Услужном налогу је потребна дозвола `bigquery.tables.updateData` над циљном табелом, као и
`bigquery.datasets.create` / `bigquery.tables.create` када је `autoCreate` укључен.

Конфигурисана група је јединица **курсора**, а не HTTP-а: `send()` је дели на `insertAll`
позиве од највише 500 редова, тако да велика вредност `batch_size` не може да премаши BigQuery ограничење захтева од 10 MB.
Привремени статуси (408/429/500/502/503/504) покушавају се поново до три пута уз експоненцијално
одлагање, при чему се поново користе исти insertIds; грешке аутентификације и шеме изазивају изузетак при првом покушају,
уместо да непотребно троше извршавање.

Табела направљена пре неколико тренутака још није видљива крајњој тачки за стримовање, која
неколико секунди враћа 404. Тај 404 се поново покушава, али **само када је ово извршавање направило табелу** —
табела која заиста недостаје и даље одмах изазива грешку. Имајте у виду да поновно прављење табеле под називом који
је недавно обрисан доводи до тога да BigQuery неколико минута одбија стримоване уносе; то је
својство поступка брисања па поновног прављења, зато радије користите нов назив табеле него да је избришете и поново додате.

**Делимичан неуспех стиже као HTTP 200 са непразним `insertErrors[]`.** То се третира као
неуспех и изазива изузетак, чиме се спречава да курсор напредује преко редова које BigQuery никада није
прихватио; `tests/unit/log-export-bigquery.test.ts` фиксира ово понашање.

Транспорт користи обичан REST — самопотписана RS256 тврдња размењује се за приступни токен на
`https://oauth2.googleapis.com/token`, а затим редови одлазе у `tabledata.insertAll`. Ниједан Google SDK се
не укључује. Приступни токени се кеширају унутар процеса за сваки пар (услужни налог, опсег).

Направљена табела садржи по једну колону за свако поље картице Logs, као и `exported_at`, и организована је
према начину на који се евиденције позива заиста упитују:

- **Партиционисана по дану на основу `timestamp`**, тако да упит ограничен датумом скенира само те дане.
- **Кластерована по `api_key_name`, `provider`, `model`, `status`** (тим редоследом), тако да филтрирање према
  томе ко је извршио позив, куда је отишао или да ли је био неуспешан одбацује блокове унутар сваке партиције. BigQuery
  дозвољава највише четири колоне за кластеровање и редослед је битан: филтер само по `api_key_name`
  одбацује блокове, док филтер само по `status` то не чини.
- **Опционално задржавање партиција** путем `partitionExpirationDays` (0 задржава све), које се примењује
  приликом прављења табеле.

Обе поставке се примењују у тренутку креирања. Постојећа табела задржава распоред који већ има, па
усмерите одредиште на нови ID табеле ако желите да их примените.

`tests/unit/log-export-bigquery.test.ts` проверава да ли мапер и шема табеле остају
усклађени, тако да нова колона евиденције позива не може неприметно да буде изостављена приликом извоза.

Пакети се деле на делове према **оба** критеријума: броју редова и броју бајтова након серијализације. Сам број редова није довољан
када се извозе корисни садржаји: 500 редова који садрже упите могу заузимати десетине мегабајта, а insertAll
одбија захтев већи од 10 MB. Део се затвара када достигне 500 редова или 9 MB, шта год се прво догоди.

---

## 5. Dodavanje odredišta

1. Kreirajte `src/lib/logExport/destinations/<name>.ts` koji izvozi `LogExportDestinationType`:
   Zod `configSchema`, niz deskriptora `fields` za korisnički interfejs, `secretFields` i
   `createClient(config)` koji vraća `test()` / `prepare()` / `send(records)`.
2. Dodajte ga u niz `DESTINATIONS` u datoteci `src/lib/logExport/registry.ts`.
3. Napišite testove u direktorijumu `tests/unit/`.

To je cela izmena: sloj za perzistenciju, cron zadatak, REST sloj, šifrovanje tajnih podataka i
obrazac na kontrolnoj tabli koriste registar.

Dva pravila za novo odredište:

- `send()` **mora da izazove izuzetak** pri delimičnom neuspehu. Uspešno izvršenje znači „odredište ima ove redove“,
  a kursor se trajno pomera iza njih.
- Odredište koje prihvata URL koji je uneo korisnik mora da ga validira pomoću
  `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`) pre slanja zahteva,
  na isti način kao webhook-ovi. BigQuery ovo ne zahteva: njegovi hostovi su konstante.

---

## 6. Upravljanje

- **Kontrolna tabla**: Integracije → Izvoz evidencije. Dodajte odredište, pokrenite **Test** da proverite pristupne podatke
  bez upisivanja redova, a zatim ga omogućite.
- **Zaostali redovi**: svaka kartica odredišta prikazuje redove na čekanju i kursor; `GET
/api/log-export/status` vraća iste podatke, kao i poslednjih 20 izvršavanja zadatka.
- **Neuspeh jednog odredišta ne uzrokuje neuspeh ostalih** — rezime izvršavanja beleži status svakog odredišta
  u `last_status` / `last_error`, dok istorija izvršavanja zadatka čuva zbirne podatke.
- **Brisanjem odredišta briše se i njegov kursor.** Ponovno dodavanje počinje od najstarije sačuvane
  evidencije poziva, čime se ponovo šalju redovi koje odredište možda već sadrži. U BigQuery-ju `insertId`
  svakog reda sprečava duplikate samo unutar BigQuery-jevog sopstvenog vremenskog okvira za uklanjanje duplikata,
  pa je bolje onemogućiti odredište nego ga izbrisati.
