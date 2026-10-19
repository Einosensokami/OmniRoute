# Authorization Guide (Српски)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/AUTHZ_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AUTHZ_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/AUTHZ_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/AUTHZ_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/AUTHZ_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/AUTHZ_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/AUTHZ_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/AUTHZ_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/AUTHZ_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AUTHZ_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/AUTHZ_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/AUTHZ_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AUTHZ_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/AUTHZ_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AUTHZ_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/AUTHZ_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/AUTHZ_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/AUTHZ_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/AUTHZ_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/AUTHZ_GUIDE.md)

---

> **Izvor istine:** `src/server/authz/`, `src/shared/constants/publicApiRoutes.ts`, `src/lib/api/requireManagementAuth.ts`, `src/shared/utils/apiAuth.ts`
> **Poslednje ažurirano:** 2026-09-22 — prostori imena opsega ukazuju na MCP-SERVER.md

OmniRoute ima autorizacionu cevovodnu liniju svesnu ruta koja kontroliše svaki API zahtev. Klasifikacija je **deterministička** i **fail-closed** — sve što se ne može klasifikovati završava kao `MANAGEMENT` i zahteva sesiju ili token menadžerskog nivoa. Ova stranica objašnjava model za inženjere koji održavaju rute ili dizajniraju nove krajnje tačke.

![AuthZ cevovodna linija (3 klase ruta + evaluacija politike)](../diagrams/exported/authz-pipeline.svg)

> Izvor: [diagrams/authz-pipeline.mmd](../diagrams/authz-pipeline.mmd)

## Два режима аутентификације

### 1. API кључ (Bearer)

Користи се за клијентске API-је компатибилне са OpenAI/Anthropic/Gemini и неколико управљачких рута када кључ има опсег `manage`.

```
Authorization: Bearer <api-key>
```

Проверава се помоћу `isValidApiKey()` / `extractApiKey()` у `src/sse/services/auth.ts` и поново се извози преко `src/shared/utils/apiAuth.ts`. Валидатор такође прихвата променљиве окружења `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` као трајне кључеве за директно прослеђивање (проблем #1350).

### 2. Сесија контролне табле (колачић auth_token)

За странице контролне табле и администраторске операције.

```
Cookie: auth_token=<JWT потписан помоћу JWT_SECRET>
```

Колачић представља сесију само када је JWT успешно проверен **и** садржи `authenticated: true`
(`src/shared/utils/dashboardSessionToken.ts` → `verifyDashboardSessionToken`). Сваки
потрошач колачића (заштита руте контролне табле (`isDashboardSessionAuthenticated()`), освежавање у authz проточном процесу, WebSocket руковање, активни
сервер, `/api/settings/require-login`, `/api/auth/status`) користи тај помоћни метод.
Постоје и други JWT-ови потписани помоћу `JWT_SECRET` — директно прослеђивање Cursor CLI-ја генерише
токене `iss "omniroute" / aud "cursor-cli"` за власнике кључева — и они никада не представљају сесије
(#13298).

Проверава се помоћу `isDashboardSessionAuthenticated()` у `src/shared/utils/apiAuth.ts`. Проточни процес аутоматски освежава JWT када му је преостало мање од 7 дана од периода важења од 30 дана.

Сесија се такође може завршити пре истека 30 дана, јер сваки издавалац користи `mintDashboardSessionToken` (време издавања `iat` и идентификатор `jti`), а верификатор проверава две поставке: `sessionsValidAfter`, која се поставља приликом промене лозинке тако да свака сесија издата пре тог тренутка престаје да буде важећа (прегледач у којем је лозинка промењена добија нови колачић), и `revokedDashboardSessions`, у коју `POST /api/auth/logout` додаје `jti` одјављене сесије. Сесије генерисане старијим издањем немају ниједну од ових тврдњи и остају важеће до прве промене лозинке. Ако поставке не могу да се прочитају, сесија се не сматра поузданом.

Неке управљачке руте прихватају **било који** режим: колачић ИЛИ `Bearer <key>` када API кључ има опсег `manage` (или `admin`). То омогућава ток рада „подесиво путем API позива“ који је додат у v3.8.

#### Опциона OIDC контрола пријављивања (#6973)

Администраторско пријављивање на контролну таблу такође подржава **опциони** OIDC (OpenID Connect) ток
поред подразумеваног пријављивања лозинком — пријављивање лозинком се никада не уклања, већ се само
допуњује:

- Онемогућено је осим ако је `settings.oidcEnabled === true` **и** ако су
  `oidcIssuer` / `oidcClientId` / `oidcClientSecret` конфигурисани (Подешавања → Аутентификација).
  У супротном, `GET /api/auth/oidc/login` враћа `400`.
- `GET /api/auth/oidc/login` открива `authorization_endpoint` из
  `/.well-known/openid-configuration` издаваоца (уз резервни прелазак на
  `<issuer>/authorize`), прави URI за преусмеравање на основу долазног захтева
  (уз подршку за `x-forwarded-proto`) и преусмерава на IdP са насумичним `state`
  сачуваним у `httpOnly` колачићу `oidc_state`.
- `GET /api/auth/oidc/callback` проверава `state`, размењује ауторизациони
  кôд и проверава потпис ID токена помоћу JWKS-а издаваоца
  (`createRemoteJWKSet` из пакета `jose`, кеширано по JWKS URI-ју), уз провере
  `issuer`/`audience`. Листа дозвољених `oidcAllowedSubjects` је обавезна: она
  се подудара са пољем `sub` токена или његовим пољем `email` — поље е-поште
  узима се у обзир само када је `email_verified === true`, тако да непотврђена
  адреса е-поште код IdP-а никада не може проћи проверу — а без иједног уноса
  повратни позив одбија сваку пријаву (`not_configured`).
- У случају успеха, генерише се **потпуно исти** 30-дневни `auth_token` JWT који
  издаје пријава лозинком (`src/app/api/auth/login/route.ts`), тако да остатак
  тока сесије контролне табле (аутоматско освежавање, заставице колачића) остаје
  непромењен — OIDC мења само начин на који се колачић генерише, а не овлашћења
  која он додељује.
- Свако `oidc*` подешавање (`oidcEnabled`, `oidcDisablePasswordLogin`,
  `oidcIssuer`, `oidcClientId`, `oidcClientSecret`, `oidcAllowedSubjects`,
  `oidcRedirectPath`, `oidcScopes`) налази се у `SECURITY_IMPACTING_SETTINGS_KEYS`
  (`src/shared/constants/securityImpactingSettings.ts`): `PATCH /api/settings`
  одговара са `400 PASSWORD_REQUIRED` осим ако тело захтева садржи управљачку
  лозинку као `currentPassword` (`401 PASSWORD_MISMATCH` када је нетачна).
  `oidcDisablePasswordLogin` онемогућава _пријаву_ лозинком (`POST /api/auth/login`),
  али задржава сачувани хеш лозинке, а поновна аутентификација и даље проверава
  `currentPassword` у односу на њега.
- `corsOrigins` и `bruteForceProtection` такође се налазе у `SECURITY_IMPACTING_SETTINGS_KEYS`:
  ублажавање било ког од ових подешавања слаби заштиту пријаве, па захтевају исту
  поновну аутентификацију преко `currentPassword` (картица Безбедност је тражи),
  док их JSON увоз изоставља.
- Сваки кључ безбедносне политике — ставке у `SECURITY_IMPACTING_SETTINGS_KEYS`,
  сваки `oidc*` кључ и стање сесије контролне табле — доступан је **само оператору**
  на `PATCH /api/settings`: API кључ са опсегом `manage` или `oma_` приступни токен
  одбија се са `403` чак и када пошаље исправан `currentPassword`, а одбијање се
  бележи у евиденцији као `settings.update_failed` са `reason: OPERATOR_REQUIRED`
  (`requireOperatorCredential()` у `src/lib/api/operatorCredential.ts`).
  Обична подешавања (тема, поставке приказа) остају доступна за уписивање помоћу
  кључа `manage` или приступног токена `admin`. Свака измена самог `/api/settings`
  (као и `/api/settings/require-login`) такође захтева опсег приступног токена
  `admin` (`ADMIN_MUTATION_EXACT_PATHS` у `src/server/authz/accessScopes.ts`,
  тачно подударање путање); `GET` остаје `read`, док остале `/api/settings/*`
  подруте (проксији, подразумеване комбиноване вредности, алијаси модела,
  компресија, чишћења…) задржавају опсег `write` изведен из метода.
- `POST /api/settings/import-json` прескаче ту поновну аутентификацију, па пре
  уписивања изоставља сваки кључ из `IMPORT_STRIPPED_SETTINGS_KEYS` (иста датотека):
  лозинку и `currentPassword`, сваку ставку из `SECURITY_IMPACTING_SETTINGS_KEYS`
  и стање сесије контролне табле (`sessionsValidAfter`, `revokedDashboardSessions`).
  Увоз старије резервне копије зато не може поново активирати сесију коју је
  промена лозинке или одјава већ окончала.

## Класе рута

`src/server/authz/types.ts` дефинише три класе; свака рута која се не може детерминистички класификовати подразумевано се сврстава у `MANAGEMENT`.

| Класа        | Опис                                                                                                                                                             | Потребна ауторизација                                                        |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `PUBLIC`     | Експлицитно безбедне руте — пријављивање, одјављивање, статус, иницијализација, провера исправности, почетно подешавање.                                         | Није потребна                                                                |
| `CLIENT_API` | Крајње тачке за опслуживање модела — `/api/v1/*`, `/api/v1beta/*`, као и алијаси `/v1/*`, `/v1beta/*`, `/chat/completions`, `/responses`, `/models`, `/codex/*`. | Bearer кључ када је ефективна заставица функције `REQUIRE_API_KEY` омогућена |
| `MANAGEMENT` | Странице контролне табле, подешавања, добављачи, кључеви, администраторске и дијагностичке крајње тачке.                                                         | Сесија контролне табле ИЛИ Bearer са опсегом `manage`                        |

Неколико `MANAGEMENT` радњи је **доступно само оператеру**: кључ са опсегом `manage` није довољан. Извоз сачуваних
акредитива (`GET /api/settings/export-json`, `GET /api/db-backups/export`,
`GET /api/db-backups/exportAll`), враћање резервне копије преко активних података
(`POST /api/db-backups/import`, укључујући `dryRun=true`, `POST /api/db-backups` враћање по идентификатору,
`POST /api/settings/import-json`), уништавање тачака враћања (`DELETE /api/db-backups` чишћење,
као и `PATCH /api/db-backups`, јер задржавање које чува управља аутоматским уклањањем након
сваког прављења резервне копије) захтевају сесију контролне табле, локални CLI субјекат или онемогућено пријављивање. Издавање
токена за синхронизацију (`POST /api/sync/tokens`) и генерисање `admin` CLI приступног токена
(`POST /api/cli/tokens`) захтевају сесију контролне табле или локални CLI субјекат у сваком режиму пријављивања.
API кључеви било ког опсега и `oma_` приступни токени нису операторски акредитиви: добијају `403`
кад год је операторски акредитив неопходан. Провера
се налази у `src/lib/api/operatorCredential.ts` (`resolveOperatorCredential()` /
`requireOperatorCredential()`). Промена подешавања пријављивања такође је доступна само оператеру:
`POST /api/settings/require-login` (постављање лозинке за управљање / укључивање или искључивање `requireLogin`) прихвата
само те акредитиве када лозинка већ постоји — период почетног подешавања (док лозинка још не постоји)
остаје непромењен — а сесија контролне табле мора да пошаље `currentPassword` ради замене лозинке
(`403` када недостаје или је нетачна, што се евидентира као `settings.update_failed`). Локални CLI и
инстанца са онемогућеним пријављивањем задржавају путању за опоравак и могу да поставе лозинку без тога, пошто су оба
везана за хост који поседује директоријум са подацима.

## Ток обраде

```
Долазни захтев → src/proxy.ts
  → runAuthzPipeline() у src/server/authz/pipeline.ts
    1. Уклони поуздана интерна заглавља (x-omniroute-auth-*, x-omniroute-route-class)
    2. Генериши идентификатор захтева, класификуј руту преко classifyRoute()
    3. Ако је pathname == "/" → преусмери на /dashboard
    4. Ако је у току пражњење (контролисано гашење) и /api/* → 503
    5. Ако је non-GET /api/* → примени checkBodySize() заштиту
    6. Ако је OPTIONS → CORS preflight 204
    7. Ако је options.enforce == false → проследи са заглављима класе руте
    8. У супротном: POLICIES[routeClass].evaluate(ctx)
       - allow  → постави x-omniroute-auth-{kind,id,label,scopes} → NextResponse.next()
       - reject → JSON грешка са correlation_id (странице контролне табле → 302 /login)
```

Поуздана интерна заглавља (дефинисана у `src/server/authz/headers.ts`) се **уклањају из долазних захтева** пре класификације — клијенти не могу унапред поставити `x-omniroute-auth-*` како би се представили као други субјект.

### Уговори смерница

Свака класа руте има смерницу у `src/server/authz/policies/`:

- **`publicPolicy`** (`policies/public.ts`) — увек враћа `allow({ kind: "anonymous", id: "anonymous" })`.
- **`clientApiPolicy`** (`policies/clientApi.ts`) — издваја Bearer и проверава га преко `validateApiKey()`. Прелази на анонимни приступ само када је ефективна заставица функције `REQUIRE_API_KEY` онемогућена. Ефективна заставица се одређује преко `isRequireApiKeyEnabled()` (`DB замена заставице функције > process.env.REQUIRE_API_KEY > подразумевана вредност`), тако да заставице функција на контролној табли и променљиве окружења доследно управљају рутама `/api/v1/*`, `/api/v1beta/*` и алијасима; грешке механизма за одређивање доводе до одбијања приступа. Дозвољава захтеве са сесијом контролне табле на клијентским API рутама (укључујући `/api/v1/models`, коју користи каталог модела на контролној табли).
- **`managementPolicy`** (`policies/management.ts`) — прихвата сесију контролне табле, интерне захтеве за синхронизацију модела (који се подударају са `/api/providers/[name]/(sync-models|models)`) или у потпуности прескаче проверу ако `isAuthRequired()` врати false. Враћа 403 (`AUTH_001`) када је Bearer токен присутан, али неважећи, а у супротном 401. Такође примењује нивое заштите рута (LOCAL_ONLY / ALWAYS_PROTECTED) пре било које гране аутентификације — погледајте [Нивои заштите рута](../security/ROUTE_GUARD_TIERS.md). LOCAL_ONLY путањама у `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES` (тренутно: `/api/mcp/`) може се приступити ван loopback интерфејса када Bearer кључ садржи опсег `manage`; све остале LOCAL_ONLY путање остају строго ограничене на loopback без обзира на опсег.

Успешна смерница враћа `AuthSubject` са `kind ∈ { client_api_key, dashboard_session, management_key, anonymous }`. Накнадни обрађивачи могу да га прочитају преко `assertAuth(request, "CLIENT_API")` у `src/server/authz/assertAuth.ts`, уместо да поново извршавају логику аутентификације.

## Листа јавних рута

`src/shared/constants/publicApiRoutes.ts` представља експлицитну листу дозвољених рута:

Листа је подељена према **облику**, а ова подела је безбедносно критична (GHSA-74g9-q8f6-793h): префикс се
подудара помоћу `startsWith()`, па се такође подудара са сваком суседном путањом која дели његове почетне знакове.
Префикс `/api/usage/om-usage` означио је `/api/usage/om-usage<anything>` као PUBLIC, а Next то разрешава
као `/api/usage/[connectionId]` — обрађивач који нема сопствену аутентификацију.

```ts
// Стварна подстабла. Свака ставка МОРА да се завршава са „/“ (што се проверава јединичним тестом).
PUBLIC_API_ROUTE_PREFIXES = [
  "/api/auth/oidc/",
  "/api/v1/", // у classify се третира као CLIENT_API, а не као јавна рута „без аутентификације“
  "/api/oauth/",
  "/api/codex/connect/",
  "/api/telegram/",
  "/api/cursor-cli/",
];

// Појединачне руте које се подударају ТАЧНО (са завршном косом цртом или без ње).
PUBLIC_API_ROUTES_EXACT = new Set([
  "/api/auth/login",
  "/api/auth/logout",
  "/api/auth/status",
  "/api/init",
  "/api/sync/bundle",
  "/api/cli/connect",
  "/api/usage/om-usage",
  "/api/skills/collect/chaos",
]);

// Појединачне руте само за читање на које се такође примењује ублажавање CORS ограничења порекла.
PUBLIC_READONLY_CORS_API_ROUTES = [
  "/api/health/ping",
  "/api/monitoring/health",
  "/api/settings/require-login",
];

// Појединачна рута само за читање БЕЗ ублажавања CORS ограничења.
PUBLIC_READONLY_API_ROUTES_EXACT = new Set(["/api/health"]);

PUBLIC_READONLY_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);
```

Руте само за читање су јавне **само** за безбедне методе. Напомена: `classifyRoute()` искључује `/api/v1/*` и `/api/v1beta/*` из резервне PUBLIC класификације — оне су увек `CLIENT_API`, тако да се политика Bearer кључева и даље примењује.

## Додавање нове руте

### Образац 1 — Јавна крајња тачка клијентског API-ја (Bearer аутентификација)

Руте под `/api/v1/` и `/api/v1beta/` аутоматски се класификују као `CLIENT_API`. Посреднички софтвер спроводи Bearer проверу; обрађивачи рута не морају да је понављају, али могу да прочитају субјекат ако је то корисно.

```typescript
// src/app/api/v1/your-route/route.ts
import { NextRequest, NextResponse } from "next/server";
import { assertAuth } from "@/server/authz/assertAuth";

export async function POST(req: NextRequest) {
  const subject = assertAuth(req, "CLIENT_API");
  // subject.kind === "client_api_key" | "anonymous" | "dashboard_session"
  // ... логика обрађивача
}
```

### Образац 2 — Управљачка крајња тачка (сесија или Bearer + manage)

Користите `requireManagementAuth()` из `src/lib/api/requireManagementAuth.ts`:

```typescript
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";

export async function POST(request: Request) {
  const rejection = await requireManagementAuth(request);
  if (rejection) return rejection;
  // ... логика обрађивача
}
```

`requireManagementAuth()` враћа `null` у случају успеха или JSON грешку типа `Response`:

- 401 `AUTH_001` „Аутентификација је обавезна“ — акредитиви уопште нису наведени
- 403 — неважећи Bearer **или** је Bearer присутан, али кључ нема опсег `manage` / `admin`

`hasManageScope(scopes)` враћа true за `"manage"` или `"admin"`.

### Образац 3 — Додавање на јавну листу дозвољених рута

Изаберите скуп према облику, а не према погодности. Једна рута иде у `PUBLIC_API_ROUTES_EXACT` (или у `PUBLIC_READONLY_CORS_API_ROUTES` ако је намењена само за GET); само стварно подстабло иде у `PUBLIC_API_ROUTE_PREFIXES` и оно **мора да се завршава са `/`**. Стављање једне руте на листу префикса такође објављује сваку суседну путању која дели њене почетне знакове — укључујући сродне руте са динамичким сегментима које се додају касније (GHSA-74g9-q8f6-793h). Ажурирајте јединичне тестове у `tests/unit/public-api-routes.test.ts`, `tests/unit/authz/public-route-exact-match.test.ts` и `tests/unit/authz/classify.test.ts`.

## Opsezi

Tri imenska prostora. Svaki proveravač čita samo sopstvene stringove. Uporedni prikaz,
uključujući zašto `manage` ne uspeva `scopeMatches` za `read:compression` i zašto
`read` pristupni token ne može `PATCH /api/keys/{id}`, nalazi se u
[Tri imenska prostora opsega](../frameworks/MCP-SERVER.md#three-scope-namespaces).

API ključevi sadrže niz `scopes` (sačuvan kao JSON u `api_keys.scopes`, pogledajte `src/lib/db/apiKeys.ts`).

### Opseg upravljanja

- `manage` / `admin` — `hasManageScope`. Pristup upravljačkim API rutama putem Bearer tokena.
- `mcp:connect`, `self:usage`, `self:account-quota` i
  `policy:bypass-provider-quota` su aditivni opsezi sa tačnim podudaranjem. Oni se nalaze
  izvan `MANAGEMENT_API_KEY_SCOPES`. `mcp:connect` otvara samo
  `/api/mcp/` ne-povratni izuzetak.

### MCP alatni opsezi

Katalog i pravila podudaranja (identičan string, ili dodeljeni opseg koji se završava sa `*`):
[MCP alatni opsezi](../frameworks/MCP-SERVER.md#mcp-tool-scopes).
`MCP_SCOPE_LIST` u `src/shared/constants/mcpScopes.ts` je originalni tipizirani
podskup, a ne taj puni katalog. Sprovođenje se vrši u
`open-sse/mcp-server/scopeEnforcement.ts` nakon što `resolveCallerScopeContext()`
razreši opsege iz MCP informacija o autentifikaciji, metapodataka zahteva ili `OMNIROUTE_MCP_SCOPES`.
Ostaje isključeno osim ako `OMNIROUTE_MCP_ENFORCE_SCOPES=true`.

### Opsezi pristupnog tokena

`read` / `write` / `admin` na `oma_live_…` tokenima, rangirani po `scopeSatisfies`
(`src/lib/accessTokens/scopes.ts`). Ovaj rang se primenjuje samo na akreditive
pristupnog tokena. Pogledajte [Autentifikacija upravljanja](../guides/MANAGEMENT-AUTH.md).

## Прекидач за захтевање аутентификације

`isAuthRequired()` у `src/shared/utils/apiAuth.ts` одређује да ли се за захтев примењује **било каква** аутентификација:

- `settings.requireLogin === false` → аутентификација је глобално онемогућена, осим за увек заштићени
  ниво (погледајте [Нивои заштите рута](../security/ROUTE_GUARD_TIERS.md)) и позиве који издају
  акредитиве које прихвата, а који захтевају исти акредитив као када је пријављивање укључено: издавање токена за синхронизацију,
  генерисање CLI приступних токена било ког опсега и креирање API кључа са опсегом `manage`/`admin`,
  додељивање тог опсега кључу или поновно генерисање, односно откривање таквог кључа
  (`requireCredentialForManagementScopedKey()` у `src/lib/api/requireManagementAuth.ts`).
  Кључеви намењени искључиво инференцији остају отворени.
- Није конфигурисана лозинка **и** не постоји env променљива `INITIAL_PASSWORD` → режим почетног подешавања дозвољава чаробњак за увођење и loopback захтеве, али захтеви преко изложене мреже и даље захтевају акредитиве.
- Било која грешка базе података → приступ се подразумевано одбија (безбедно подразумевано понашање).

Примена захтева за API кључ клијента користи `isRequireApiKeyEnabled()` у `src/shared/utils/featureFlags.ts`, а не директно читање `process.env.REQUIRE_API_KEY`. Ово је важно за инсталиране инстанце: промена вредности `REQUIRE_API_KEY` у Dashboard → Feature Flags чува заменску вредност у бази података и одмах утиче на `/v1/*`, `/v1beta/*`, `/models`, `/responses`, `/chat/completions`, `/codex/*` и друге провере аутентификације клијентског API-ја које користе ову помоћну функцију. Ако складиште заставица функција не може да се прочита, аутентификација клијентског API-ја подразумевано одбија приступ и захтева кључ.

## Promena koja narušava kompatibilnost — v3.8.0

Krajnje tačke `/api/v1/agents/tasks/*` i `/api/resilience/model-cooldowns` **sada zahtevaju upravljačku autentifikaciju** (izmena `588a0333`). Klijenti koji su ranije slali običan API ključ bez opsega `manage` dobijaju `403`. Migracija: dodelite ključu opseg `manage` na kontrolnoj tabli API ključeva ili koristite prijavljenu sesiju kontrolne table.

## Promena ponašanja — v3.8.2

`/api/mcp/*` (udaljeni MCP server) je i dalje podrazumevano LOCAL_ONLY, ali sada prihvata zahteve koji ne dolaze sa povratne sprege kada zaglavlje `Authorization: Bearer <api-key>` sadrži opseg `manage`. Izuzetak se eksplicitno omogućava za svaku putanju putem `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES` u `src/server/authz/routeGuard.ts`; srodni prefiks LOCAL_ONLY `/api/cli-tools/runtime/*` namerno nije moguće zaobići jer može da pokrene proizvoljne potprocese. Anonimni zahtevi ka `/api/mcp/*` koji ne dolaze sa povratne sprege i dalje vraćaju `403 LOCAL_ONLY` — podrazumevano ponašanje za svaku novu LOCAL_ONLY putanju ostaje strogo ograničeno na povratnu spregu. Pogledajte [Nivoi zaštite ruta](../security/ROUTE_GUARD_TIERS.md#manage-scope-carve-out).

## Testiranje

- Jedinični testovi: `tests/unit/authz/` — `classify.test.ts`, `pipeline.test.ts`, `client-api-policy.test.ts`, `management-policy.test.ts`, `public-policy.test.ts`.
- Javna lista dozvoljenih ruta: `tests/unit/public-api-routes.test.ts`.
- Pokretanje ciljanog testa: `node --import tsx/esm --test tests/unit/authz/classify.test.ts`.

## Отклањање грешака

Систем за обраду увек означава одговоре следећим заглављима:

```
x-request-id:               <идентификатор корелације, поновљен у телима грешака>
x-omniroute-route-class:    PUBLIC | CLIENT_API | MANAGEMENT
```

За аутентификоване захтеве, заглавља захтева прослеђеног узводној страни (руковаоцу) такође садрже:

```
x-omniroute-auth-kind:      client_api_key | dashboard_session | management_key | anonymous
x-omniroute-auth-id:        key_<последње 4 цифре> | "dashboard" | "anonymous"
x-omniroute-auth-label:     (опционо)
x-omniroute-auth-scopes:    листа раздвојена зарезима
```

Користите `assertAuth(req, expectedClass)` унутар руковалаца — баца `AuthzAssertionError` са кодом `AUTHZ_NOT_INITIALIZED` ако је посреднички софтвер заобиђен (корисно за откривање регресија конфигурације у тестовима).

## Pogledajte takođe

- [API_REFERENCE.md](../reference/API_REFERENCE.md) — oznaka za autentifikaciju po krajnjoj tački
- [COMPLIANCE.md](../security/COMPLIANCE.md) — dnevnik revizije za događaje autentifikacije
- [MCP-SERVER.md](../frameworks/MCP-SERVER.md#three-scope-namespaces) — tri imenska prostora opsega i MCP katalog opsega alata
- Izvor: `src/server/authz/`, `src/lib/api/requireManagementAuth.ts`
