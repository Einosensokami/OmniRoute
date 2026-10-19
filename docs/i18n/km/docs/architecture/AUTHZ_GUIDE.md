# Authorization Guide (ខ្មែរ)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/AUTHZ_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AUTHZ_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/AUTHZ_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/AUTHZ_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/AUTHZ_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/AUTHZ_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/AUTHZ_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/AUTHZ_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/AUTHZ_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AUTHZ_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/AUTHZ_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/AUTHZ_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AUTHZ_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/AUTHZ_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AUTHZ_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/AUTHZ_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/AUTHZ_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/AUTHZ_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/AUTHZ_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/AUTHZ_GUIDE.md)

---

> **ប្រភពនៃការពិត:** `src/server/authz/`, `src/shared/constants/publicApiRoutes.ts`, `src/lib/api/requireManagementAuth.ts`, `src/shared/utils/apiAuth.ts`
> **បានធ្វើបច្ចុប្បន្នភាពចុងក្រោយ:** 2026-09-22 — ឈ្មោះលំហនៃវិសាលភាពចង្អុលទៅ MCP-SERVER.md

OmniRoute មានបំពង់បង្ហូរការអនុញ្ញាតដែលដឹងពីផ្លូវ ដែលទប់ស្កាត់រាល់សំណើ API។ ការចាត់ថ្នាក់គឺ **កំណត់បាន** និង **បរាជ័យបិទ** — អ្វីដែលមិនអាចចាត់ថ្នាក់បាននឹងក្លាយជា `MANAGEMENT` ហើយទាមទារវគ្គ ឬថូខឹនកម្រិតគ្រប់គ្រង។ ទំព័រនេះពន្យល់ពីគំរូសម្រាប់វិស្វករដែលថែទាំផ្លូវ ឬរចនាចំណុចបញ្ចប់ថ្មី។

![AuthZ pipeline (3 route classes + policy evaluation)](../diagrams/exported/authz-pipeline.svg)

> ប្រភព: [diagrams/authz-pipeline.mmd](../diagrams/authz-pipeline.mmd)

## របៀបផ្ទៀងផ្ទាត់អត្តសញ្ញាណពីរប្រភេទ

### 1. API Key (Bearer)

ប្រើសម្រាប់ API របស់ម៉ាស៊ីនភ្ញៀវដែលឆបគ្នាជាមួយ OpenAI/Anthropic/Gemini និង route គ្រប់គ្រងមួយចំនួន នៅពេល key មាន scope `manage`។

```
Authorization: Bearer <api-key>
```

ត្រូវបានផ្ទៀងផ្ទាត់ដោយ `isValidApiKey()` / `extractApiKey()` នៅក្នុង `src/sse/services/auth.ts` និងត្រូវបាននាំចេញឡើងវិញតាមរយៈ `src/shared/utils/apiAuth.ts`។ កម្មវិធីផ្ទៀងផ្ទាត់ក៏ទទួលយក env vars `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` ជា passthrough keys អចិន្ត្រៃយ៍ផងដែរ (បញ្ហា #1350)។

### 2. សម័យ Dashboard (cookie auth_token)

សម្រាប់ទំព័រ dashboard និងប្រតិបត្តិការរដ្ឋបាល។

```
Cookie: auth_token=<JWT signed with JWT_SECRET>
```

cookie មួយគឺជាសម័យ លុះត្រាតែ JWT ត្រូវបានផ្ទៀងផ្ទាត់ **ហើយ** មាន `authenticated: true`
(`src/shared/utils/dashboardSessionToken.ts` → `verifyDashboardSessionToken`)។ រាល់
ផ្នែកដែលប្រើ cookie នេះ (ឧបករណ៍ការពារ route របស់ dashboard (`isDashboardSessionAuthenticated()`), ការធ្វើឱ្យ authz pipeline ស្រស់ឡើងវិញ, WebSocket handshake, live
server, `/api/settings/require-login`, `/api/auth/status`) សុទ្ធតែឆ្លងកាត់ helper នោះ។
មាន JWT ផ្សេងទៀតដែលបានចុះហត្ថលេខាដោយ `JWT_SECRET` — Cursor CLI passthrough បង្កើត
token ដែលមាន `iss "omniroute" / aud "cursor-cli"` សម្រាប់អ្នកកាន់ key — ហើយ token ទាំងនោះមិនដែលជាសម័យឡើយ
(#13298)។

ត្រូវបានផ្ទៀងផ្ទាត់ដោយ `isDashboardSessionAuthenticated()` នៅក្នុង `src/shared/utils/apiAuth.ts`។ pipeline ធ្វើឱ្យ JWT ស្រស់ឡើងវិញដោយស្វ័យប្រវត្តិ នៅពេលវានៅសល់អាយុកាលតិចជាង 7 ថ្ងៃ ក្នុងចំណោមអាយុកាលសរុប 30 ថ្ងៃ។

សម័យមួយក៏អាចបញ្ចប់មុនពេលគ្រប់ 30 ថ្ងៃផងដែរ ពីព្រោះរាល់កម្មវិធីបង្កើត token សុទ្ធតែឆ្លងកាត់ `mintDashboardSessionToken` (ពេលវេលាចេញ `iat` និងលេខសម្គាល់ `jti`) ហើយកម្មវិធីផ្ទៀងផ្ទាត់ពិនិត្យមើលការកំណត់ពីរ៖ `sessionsValidAfter` ដែលត្រូវបានកំណត់ដោយការផ្លាស់ប្តូរពាក្យសម្ងាត់ ដើម្បីឱ្យសម័យទាំងអស់ដែលបានចេញមុនពេលនោះឈប់ផ្ទៀងផ្ទាត់បាន (កម្មវិធីរុករកដែលបានផ្លាស់ប្តូរពាក្យសម្ងាត់ នឹងទទួលបាន cookie ថ្មី) និង `revokedDashboardSessions` ដែល `POST /api/auth/logout` បន្ថែម `jti` របស់សម័យដែលបានចាកចេញទៅក្នុងនោះ។ សម័យដែលបានបង្កើតដោយកំណែចាស់ មិនមាន claim ទាំងពីរនេះទេ ហើយនៅតែមានសុពលភាពរហូតដល់ការផ្លាស់ប្តូរពាក្យសម្ងាត់លើកដំបូង។ ប្រសិនបើមិនអាចអានការកំណត់បាន សម័យនោះនឹងមិនត្រូវបានទុកចិត្តឡើយ។

route គ្រប់គ្រងមួយចំនួនទទួលយករបៀប **មួយណាក៏បាន**៖ cookie ឬ `Bearer <key>` នៅពេល API key មាន scope `manage` (ឬ `admin`)។ នេះជាអ្វីដែលធ្វើឱ្យ workflow "អាចកំណត់រចនាសម្ព័ន្ធតាមរយៈការហៅ API" ដែលត្រូវបានបន្ថែមនៅក្នុង v3.8 អាចដំណើរការបាន។

#### ច្រកចូល OIDC ជាជម្រើស (#6973)

ការចូលជាអ្នកគ្រប់គ្រង dashboard ក៏គាំទ្រ flow OIDC (OpenID Connect) ដែលត្រូវបាន **បើកប្រើតាមជម្រើស** ផងដែរ
រួមជាមួយការចូលដោយពាក្យសម្ងាត់លំនាំដើម — ការចូលដោយពាក្យសម្ងាត់មិនត្រូវបានលុបចេញឡើយ គ្រាន់តែ
ត្រូវបានបំពេញបន្ថែមប៉ុណ្ណោះ៖

- ត្រូវបានបិទ លុះត្រាតែ `settings.oidcEnabled === true` **ហើយ** `oidcIssuer` /
  `oidcClientId` / `oidcClientSecret` ត្រូវបានកំណត់រចនាសម្ព័ន្ធទាំងអស់ (Settings → Auth)។
  បើមិនដូច្នោះទេ `GET /api/auth/oidc/login` ត្រឡប់ `400`។
- `GET /api/auth/oidc/login` ស្វែងរក `authorization_endpoint` ពី
  `/.well-known/openid-configuration` របស់ issuer (បើរកមិនឃើញ នឹងប្រើ
  `<issuer>/authorize` ជំនួស) បង្កើត URI បញ្ជូនត្រឡប់ពីសំណើចូល
  (គាំទ្រ `x-forwarded-proto`) ហើយបញ្ជូនបន្តទៅ IdP ជាមួយ `state`
  ចៃដន្យ ដែលត្រូវបានរក្សាទុកក្នុង cookie `oidc_state` ប្រភេទ `httpOnly`។
- `GET /api/auth/oidc/callback` ផ្ទៀងផ្ទាត់ `state` ប្ដូរ authorization
  code និងផ្ទៀងផ្ទាត់ហត្ថលេខារបស់ ID token តាមរយៈ JWKS របស់ issuer
  (`createRemoteJWKSet` របស់ `jose` ដែលត្រូវបាន cache តាម JWKS URI នីមួយៗ) ជាមួយនឹងការត្រួតពិនិត្យ `issuer`/`audience`។
  បញ្ជីអនុញ្ញាត `oidcAllowedSubjects` គឺជាតម្រូវការ៖ វាផ្គូផ្គងជាមួយ
  claim `sub` របស់ token ឬ claim `email` របស់វា — claim អ៊ីមែលត្រូវបានទទួលស្គាល់
  តែនៅពេល `email_verified === true` ប៉ុណ្ណោះ ដូច្នេះអ៊ីមែលដែលមិនបានផ្ទៀងផ្ទាត់នៅ IdP
  មិនអាចឆ្លងកាត់ការត្រួតពិនិត្យបានទេ — ហើយបើគ្មានធាតុណាមួយ callback នឹងបដិសេធរាល់ការចូល
  (`not_configured`)។
- នៅពេលជោគជ័យ វាបង្កើត JWT `auth_token` រយៈពេល 30 ថ្ងៃដែល **ដូចគ្នាទាំងស្រុង** នឹង JWT ដែលការចូលដោយពាក្យសម្ងាត់បង្កើត
  (`src/app/api/auth/login/route.ts`) ដូច្នេះ pipeline សម័យរបស់
  dashboard ដែលនៅសល់ (ការធ្វើឱ្យថ្មីដោយស្វ័យប្រវត្តិ និង flag របស់ cookie) មិនផ្លាស់ប្ដូរទេ —
  OIDC គ្រាន់តែជំនួសវិធីបង្កើត cookie ប៉ុណ្ណោះ មិនមែនអ្វីដែលវាផ្ដល់សិទ្ធិនោះទេ។
- ការកំណត់ `oidc*` ទាំងអស់ (`oidcEnabled`, `oidcDisablePasswordLogin`,
  `oidcIssuer`, `oidcClientId`, `oidcClientSecret`, `oidcAllowedSubjects`,
  `oidcRedirectPath`, `oidcScopes`) ស្ថិតក្នុង `SECURITY_IMPACTING_SETTINGS_KEYS`
  (`src/shared/constants/securityImpactingSettings.ts`)៖ `PATCH /api/settings`
  ឆ្លើយតប `400 PASSWORD_REQUIRED` លុះត្រាតែ body មានពាក្យសម្ងាត់គ្រប់គ្រងជា
  `currentPassword` (`401 PASSWORD_MISMATCH` នៅពេលវាខុស)។
  `oidcDisablePasswordLogin` បដិសេធការ _ចូល_ ដោយពាក្យសម្ងាត់ (`POST /api/auth/login`)
  ប៉ុន្តែរក្សាទុក hash របស់ពាក្យសម្ងាត់ដដែល ហើយការផ្ទៀងផ្ទាត់អត្តសញ្ញាណឡើងវិញនៅតែត្រួតពិនិត្យ
  `currentPassword` ទល់នឹងវា។
- `corsOrigins` និង `bruteForceProtection` ក៏ស្ថិតក្នុង `SECURITY_IMPACTING_SETTINGS_KEYS`
  ដែរ៖ ការបន្ធូរបន្ថយណាមួយក្នុងចំណោមទាំងពីរធ្វើឱ្យការការពារការចូលចុះខ្សោយ ដូច្នេះពួកវាតម្រូវឱ្យមានការផ្ទៀងផ្ទាត់អត្តសញ្ញាណឡើងវិញដោយ
  `currentPassword` ដូចគ្នា (ផ្ទាំង Security ស្នើសុំវា) ហើយការនាំចូល JSON
  នឹងលុបពួកវាចេញ។
- រាល់ key នៃគោលការណ៍សុវត្ថិភាព — ធាតុក្នុង `SECURITY_IMPACTING_SETTINGS_KEYS`,
  រាល់ key `oidc*` និងស្ថានភាពសម័យរបស់ dashboard — គឺសម្រាប់ **operator ប៉ុណ្ណោះ** នៅលើ
  `PATCH /api/settings`៖ API key ដែលមាន scope `manage` ឬ access token ប្រភេទ `oma_`
  ត្រូវបានបដិសេធដោយ `403` ទោះបីវាផ្ញើ `currentPassword` ត្រឹមត្រូវក៏ដោយ ហើយការ
  បដិសេធនេះត្រូវបានកត់ត្រាក្នុង audit ជា `settings.update_failed` ជាមួយ `reason: OPERATOR_REQUIRED`
  (`requireOperatorCredential()` ក្នុង `src/lib/api/operatorCredential.ts`)។
  ការកំណត់ធម្មតា (theme និងចំណូលចិត្តការបង្ហាញ) នៅតែអាចសរសេរបានសម្រាប់ key `manage`
  ឬ access token `admin`។ រាល់ការកែប្រែ `/api/settings` ផ្ទាល់ (និង
  `/api/settings/require-login`) ក៏ត្រូវការ scope `admin` របស់ access token
  (`ADMIN_MUTATION_EXACT_PATHS` ក្នុង `src/server/authz/accessScopes.ts` ដែលផ្គូផ្គង
  path ពិតប្រាកដ)។ `GET` នៅតែជា `read` ហើយ sub-route `/api/settings/*` ផ្សេងទៀត (proxies,
  combo defaults, model aliases, compression, purges…) នៅតែប្រើ scope
  `write` ដែលកំណត់តាម method។
- `POST /api/settings/import-json` រំលងការផ្ទៀងផ្ទាត់អត្តសញ្ញាណឡើងវិញនោះ ដូច្នេះវាលុបរាល់ key ក្នុង
  `IMPORT_STRIPPED_SETTINGS_KEYS` (ឯកសារដូចគ្នា) មុនពេលសរសេរ៖ ពាក្យសម្ងាត់ និង
  `currentPassword` រាល់ធាតុក្នុង `SECURITY_IMPACTING_SETTINGS_KEYS` និង
  ស្ថានភាពសម័យរបស់ dashboard (`sessionsValidAfter`, `revokedDashboardSessions`)។
  ដូច្នេះ ការនាំចូល backup ចាស់មិនអាចធ្វើឱ្យសម័យដែលការផ្លាស់ប្ដូរពាក្យសម្ងាត់
  ឬការចាកចេញបានបញ្ចប់រួចហើយ មានសុពលភាពឡើងវិញបានទេ។

## ថ្នាក់ Route

`src/server/authz/types.ts` កំណត់ថ្នាក់ចំនួនបី។ Route ណាមួយដែលមិនអាចចាត់ថ្នាក់បានយ៉ាងជាក់លាក់ នឹងត្រូវបានចាត់ចូលក្នុង `MANAGEMENT` តាមលំនាំដើម។

| ថ្នាក់       | សេចក្តីពិពណ៌នា                                                                                                                                               | តម្រូវឱ្យផ្ទៀងផ្ទាត់អត្តសញ្ញាណ                                               |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| `PUBLIC`     | Route ដែលបានកំណត់យ៉ាងច្បាស់ថាមានសុវត្ថិភាព — ការចូល ការចេញ ស្ថានភាព ការចាប់ផ្ដើម សុខភាព និងការចាប់ផ្ដើមដំណើរការណែនាំ។                                        | មិនតម្រូវ                                                                    |
| `CLIENT_API` | Endpoint សម្រាប់បម្រើម៉ូដែល — `/api/v1/*`, `/api/v1beta/*` រួមទាំងឈ្មោះជំនួស `/v1/*`, `/v1beta/*`, `/chat/completions`, `/responses`, `/models`, `/codex/*`។ | Bearer key នៅពេល feature flag `REQUIRE_API_KEY` ដែលមានប្រសិទ្ធភាពត្រូវបានបើក |
| `MANAGEMENT` | ទំព័រ Dashboard ការកំណត់ អ្នកផ្ដល់សេវា Key Endpoint សម្រាប់អ្នកគ្រប់គ្រង និងការធ្វើរោគវិនិច្ឆ័យ។                                                             | Session របស់ Dashboard ឬ Bearer ដែលមាន scope `manage`                        |

សកម្មភាព `MANAGEMENT` មួយចំនួនគឺ **សម្រាប់តែ operator ប៉ុណ្ណោះ**៖ Key ដែលមាន `manage` មិនគ្រប់គ្រាន់ទេ។ ការនាំចេញ
ព័ត៌មានសម្ងាត់ដែលបានរក្សាទុក (`GET /api/settings/export-json`, `GET /api/db-backups/export`,
`GET /api/db-backups/exportAll`), ការស្ដារ Backup ពីលើទិន្នន័យកំពុងប្រើប្រាស់
(`POST /api/db-backups/import` រួមទាំង `dryRun=true`, `POST /api/db-backups` ស្ដារតាម id,
`POST /api/settings/import-json`), ការបំផ្លាញចំណុចស្ដារ (`DELETE /api/db-backups` សម្រាប់ការសម្អាត
និង `PATCH /api/db-backups` ព្រោះការរក្សាទុកដែលវាបន្តរក្សាទុកនឹងកំណត់ការលុបដោយស្វ័យប្រវត្តិបន្ទាប់ពី
Backup នីមួយៗ) តម្រូវឱ្យមាន Session របស់ Dashboard, Subject របស់ CLI មូលដ្ឋាន ឬការចូលត្រូវបានបិទ។ ការចេញ
Sync Token (`POST /api/sync/tokens`) និងការបង្កើត CLI Access Token ប្រភេទ `admin`
(`POST /api/cli/tokens`) តម្រូវឱ្យមាន Session របស់ Dashboard ឬ Subject របស់ CLI មូលដ្ឋានក្នុងគ្រប់របៀបចូលទាំងអស់។
API Key គ្រប់ scope និង Access Token `oma_` មិនមែនជា Credential របស់ operator ទេ៖ ពួកវានឹងទទួលបាន `403`
រាល់ពេលដែលតម្រូវឱ្យមាន Credential ប្រភេទនេះ។ ការត្រួតពិនិត្យនេះ
ស្ថិតនៅក្នុង `src/lib/api/operatorCredential.ts` (`resolveOperatorCredential()` /
`requireOperatorCredential()`)។ ការផ្លាស់ប្ដូរការកំណត់សម្រាប់ការចូលក៏សម្រាប់តែ operator ផងដែរ៖
`POST /api/settings/require-login` (កំណត់ពាក្យសម្ងាត់គ្រប់គ្រង / បិទបើក `requireLogin`) ទទួលយក
តែ Credential ទាំងនោះប៉ុណ្ណោះ បន្ទាប់ពីមានពាក្យសម្ងាត់រួច — ចន្លោះពេលចាប់ផ្ដើមលើកដំបូង (មិនទាន់មានពាក្យសម្ងាត់)
នៅតែមិនផ្លាស់ប្ដូរ — ហើយ Session របស់ Dashboard ត្រូវតែផ្ញើ `currentPassword` ដើម្បីជំនួសពាក្យសម្ងាត់
(`403` នៅពេលវាបាត់ ឬមិនត្រឹមត្រូវ ហើយត្រូវបានកត់ត្រាសវនកម្មជា `settings.update_failed`)។ CLI មូលដ្ឋាន និង
Instance ដែលបានបិទការចូល នៅតែរក្សាផ្លូវសង្គ្រោះ ហើយអាចកំណត់ពាក្យសម្ងាត់ដោយមិនចាំបាច់មានវា ព្រោះទាំងពីរ
ត្រូវបានចងភ្ជាប់ទៅនឹង Host ដែលជាម្ចាស់ថតទិន្នន័យ។

## Pipeline

```
Request ចូលមក → src/proxy.ts
  → runAuthzPipeline() នៅក្នុង src/server/authz/pipeline.ts
    1. ដក header ខាងក្នុងដែលទុកចិត្តបានចេញ (x-omniroute-auth-*, x-omniroute-route-class)
    2. បង្កើត request id ហើយចាត់ថ្នាក់ route តាមរយៈ classifyRoute()
    3. ប្រសិនបើ pathname == "/" → បញ្ជូនបន្តទៅ /dashboard
    4. ប្រសិនបើកំពុងបញ្ចប់ដំណើរការ (graceful shutdown) ហើយជា /api/* → 503
    5. ប្រសិនបើជា /api/* ដែលមិនមែនជា GET → ប្រើ guard checkBodySize()
    6. ប្រសិនបើជា OPTIONS → CORS preflight 204
    7. ប្រសិនបើ options.enforce == false → ឆ្លងកាត់ជាមួយ header សម្រាប់ route class
    8. បើមិនដូច្នោះទេ៖ POLICIES[routeClass].evaluate(ctx)
       - អនុញ្ញាត  → កំណត់ x-omniroute-auth-{kind,id,label,scopes} → NextResponse.next()
       - បដិសេធ → JSON error ជាមួយ correlation_id (ទំព័រ dashboard → 302 /login)
```

Header ខាងក្នុងដែលទុកចិត្តបាន (កំណត់នៅក្នុង `src/server/authz/headers.ts`) ត្រូវបាន **ដកចេញពី request ចូលមក** មុនពេលចាត់ថ្នាក់ — client មិនអាចកំណត់ `x-omniroute-auth-*` ជាមុន ដើម្បីក្លែងខ្លួនជាប្រធានបទណាមួយបានទេ។

### កិច្ចសន្យារបស់ Policy

ថ្នាក់ route នីមួយៗមាន policy មួយនៅក្នុង `src/server/authz/policies/`៖

- **`publicPolicy`** (`policies/public.ts`) — តែងតែត្រឡប់ `allow({ kind: "anonymous", id: "anonymous" })`។
- **`clientApiPolicy`** (`policies/clientApi.ts`) — ទាញយក Bearer ហើយផ្ទៀងផ្ទាត់តាមរយៈ `validateApiKey()`។ វាបន្តទៅជា anonymous តែនៅពេល feature flag `REQUIRE_API_KEY` ដែលមានប្រសិទ្ធភាពត្រូវបានបិទប៉ុណ្ណោះ។ Flag ដែលមានប្រសិទ្ធភាពត្រូវបានកំណត់តាមរយៈ `isRequireApiKeyEnabled()` (`ការកំណត់ជាន់លើដោយ DB feature flag > process.env.REQUIRE_API_KEY > តម្លៃលំនាំដើម`) ដូច្នេះ Dashboard Feature Flags និង environment variables គ្រប់គ្រង `/api/v1/*`, `/api/v1beta/*` និង alias ឱ្យស្របគ្នា; ប្រសិនបើ resolver បរាជ័យ ប្រព័ន្ធនឹងបិទជាលំនាំដើម។ អនុញ្ញាត request ដែលមាន dashboard session នៅលើ client API route (រួមទាំង `/api/v1/models` ដែលត្រូវបានប្រើដោយបញ្ជី model របស់ dashboard)។
- **`managementPolicy`** (`policies/management.ts`) — ទទួលយក dashboard session, request សមកាលកម្ម model ខាងក្នុង (ដែលផ្គូផ្គងនឹង `/api/providers/[name]/(sync-models|models)`) ឬរំលងទាំងស្រុង ប្រសិនបើ `isAuthRequired()` ត្រឡប់ false។ ត្រឡប់ 403 (`AUTH_001`) នៅពេលមាន Bearer token ប៉ុន្តែមិនត្រឹមត្រូវ ហើយត្រឡប់ 401 ក្នុងករណីផ្សេងទៀត។ វាក៏អនុវត្តកម្រិត route guard (LOCAL_ONLY / ALWAYS_PROTECTED) មុន auth branch ណាមួយផងដែរ — សូមមើល [កម្រិត Route Guard](../security/ROUTE_GUARD_TIERS.md)។ Path ប្រភេទ LOCAL_ONLY នៅក្នុង `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES` (បច្ចុប្បន្ន៖ `/api/mcp/`) អាចត្រូវបានចូលប្រើពី non-loopback នៅពេល Bearer key មាន scope `manage`; path ប្រភេទ LOCAL_ONLY ផ្សេងទៀតទាំងអស់ នៅតែតម្រូវឱ្យជា strict-loopback ដោយមិនគិតពី scope។

Policy ដែលជោគជ័យត្រឡប់ `AuthSubject` ដែលមាន `kind ∈ { client_api_key, dashboard_session, management_key, anonymous }`។ Handler នៅខ្សែដំណើរការបន្ទាប់អាចអានវាតាមរយៈ `assertAuth(request, "CLIENT_API")` នៅក្នុង `src/server/authz/assertAuth.ts` ជំនួសឱ្យការដំណើរការ logic សម្រាប់ auth ឡើងវិញ។

## បញ្ជី Route សាធារណៈ

`src/shared/constants/publicApiRoutes.ts` គឺជា allowlist ដែលបានកំណត់យ៉ាងច្បាស់៖

បញ្ជីនេះត្រូវបានបែងចែកតាម **ទម្រង់** ហើយការបែងចែកនេះមានសារៈសំខាន់ចាំបាច់ (GHSA-74g9-q8f6-793h)៖ prefix មួយត្រូវបានផ្គូផ្គងដោយប្រើ `startsWith()` ដូច្នេះវាក៏ផ្គូផ្គងនឹង path ជាប់គ្នាទាំងអស់ដែលមានតួអក្សរដើមដូចគ្នាផងដែរ។
ការដាក់ `/api/usage/om-usage` ជា prefix បានកំណត់ឱ្យ `/api/usage/om-usage<anything>` ជា PUBLIC ហើយ Next បកស្រាយវាទៅជា `/api/usage/[connectionId]` — ដែលជា handler គ្មានការផ្ទៀងផ្ទាត់អត្តសញ្ញាណផ្ទាល់ខ្លួន។

```ts
// Subtree ពិតប្រាកដ។ ធាតុនីមួយៗត្រូវតែបញ្ចប់ដោយ "/" (ត្រូវបានផ្ទៀងផ្ទាត់ដោយ unit test)។
PUBLIC_API_ROUTE_PREFIXES = [
  "/api/auth/oidc/",
  "/api/v1/", // ត្រូវបានចាត់ទុកជា CLIENT_API នៅក្នុង classify មិនមែនជា "សាធារណៈដោយមិនត្រូវការការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ" ទេ
  "/api/oauth/",
  "/api/codex/connect/",
  "/api/telegram/",
  "/api/cursor-cli/",
];

// Route ទោល ដែលត្រូវបានផ្គូផ្គងយ៉ាងជាក់លាក់ (មាន ឬគ្មាន trailing slash)។
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

// Route ទោលសម្រាប់តែអាន ដែលក៏ទទួលបានការបន្ធូរបន្ថយលើ CORS origin ផងដែរ។
PUBLIC_READONLY_CORS_API_ROUTES = [
  "/api/health/ping",
  "/api/monitoring/health",
  "/api/settings/require-login",
];

// Route ទោលសម្រាប់តែអាន ដោយគ្មានការបន្ធូរបន្ថយ CORS។
PUBLIC_READONLY_API_ROUTES_EXACT = new Set(["/api/health"]);

PUBLIC_READONLY_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);
```

Route សម្រាប់តែអានគឺសាធារណៈ **តែ** សម្រាប់ method ដែលមានសុវត្ថិភាពប៉ុណ្ណោះ។ ចំណាំ៖ `classifyRoute()` ដក `/api/v1/*` និង `/api/v1beta/*` ចេញពី PUBLIC fall-through — ទាំងនេះតែងតែជា `CLIENT_API` ដើម្បីឱ្យគោលការណ៍ Bearer-key នៅតែត្រូវបានអនុវត្ត។

## ការបន្ថែម Route ថ្មី

### លំនាំទី 1 — Endpoint សាធារណៈសម្រាប់ client API (ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណដោយ Bearer)

Route ក្រោម `/api/v1/` និង `/api/v1beta/` ត្រូវបានចាត់ថ្នាក់ជា `CLIENT_API` ដោយស្វ័យប្រវត្តិ។ Middleware អនុវត្តការត្រួតពិនិត្យ Bearer។ Route handler មិនចាំបាច់ធ្វើវាឡើងវិញទេ ប៉ុន្តែអាចអាន subject បាន ប្រសិនបើមានប្រយោជន៍។

```typescript
// src/app/api/v1/your-route/route.ts
import { NextRequest, NextResponse } from "next/server";
import { assertAuth } from "@/server/authz/assertAuth";

export async function POST(req: NextRequest) {
  const subject = assertAuth(req, "CLIENT_API");
  // subject.kind === "client_api_key" | "anonymous" | "dashboard_session"
  // ... តក្កវិជ្ជារបស់ handler
}
```

### លំនាំទី 2 — Endpoint សម្រាប់ការគ្រប់គ្រង (session ឬ Bearer + manage)

ប្រើ `requireManagementAuth()` ពី `src/lib/api/requireManagementAuth.ts`៖

```typescript
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";

export async function POST(request: Request) {
  const rejection = await requireManagementAuth(request);
  if (rejection) return rejection;
  // ... តក្កវិជ្ជារបស់ handler
}
```

`requireManagementAuth()` ត្រឡប់ `null` នៅពេលជោគជ័យ ឬ JSON error `Response`៖

- 401 `AUTH_001` "តម្រូវឱ្យមានការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ" — គ្មានព័ត៌មានសម្គាល់អត្តសញ្ញាណសោះ
- 403 — Bearer មិនត្រឹមត្រូវ **ឬ** មាន Bearer ប៉ុន្តែ key ខ្វះ scope `manage` / `admin`

`hasManageScope(scopes)` ត្រឡប់ true សម្រាប់ `"manage"` ឬ `"admin"`។

### លំនាំទី 3 — ការបន្ថែមទៅក្នុង allowlist សាធារណៈ

ជ្រើសរើស set តាមទម្រង់ មិនមែនតាមភាពងាយស្រួលទេ។ Route មួយត្រូវដាក់ក្នុង `PUBLIC_API_ROUTES_EXACT` (ឬ `PUBLIC_READONLY_CORS_API_ROUTES` សម្រាប់ GET-only)។ មានតែ subtree ពិតប្រាកដប៉ុណ្ណោះដែលត្រូវដាក់ក្នុង `PUBLIC_API_ROUTE_PREFIXES` ហើយវា **ត្រូវតែបញ្ចប់ដោយ `/`**។ ការដាក់ route ទោលមួយក្នុងបញ្ជី prefix ក៏ធ្វើឱ្យ path ជាប់គ្នាទាំងអស់ដែលមានតួអក្សរដើមដូចគ្នាក្លាយជាសាធារណៈផងដែរ — រួមទាំង dynamic-segment sibling ដែលត្រូវបានបន្ថែមនៅពេលក្រោយ (GHSA-74g9-q8f6-793h)។ ធ្វើបច្ចុប្បន្នភាព unit test នៅ `tests/unit/public-api-routes.test.ts`, `tests/unit/authz/public-route-exact-match.test.ts` និង `tests/unit/authz/classify.test.ts`។

## Scopes

ឈ្មោះលំហបី។ កម្មវិធីពិនិត្យនីមួយៗអានតែខ្សែអក្សររបស់វាប៉ុណ្ណោះ។ ការប្រៀបធៀបគ្នា រួមទាំងមូលហេតុដែល `manage` បរាជ័យ `scopeMatches` សម្រាប់ `read:compression` និងមូលហេតុដែល access token `read` មិនអាច `PATCH /api/keys/{id}` គឺ [ឈ្មោះលំហបី](../frameworks/MCP-SERVER.md#three-scope-namespaces)។

API keys មាន array `scopes` (រក្សាទុកជា JSON ក្នុង `api_keys.scopes` សូមមើល `src/lib/db/apiKeys.ts`)។

### Management scope

- `manage` / `admin` — `hasManageScope`។ ការចូលប្រើ Bearer ទៅកាន់ផ្លូវ API គ្រប់គ្រង។
- `mcp:connect`, `self:usage`, `self:account-quota`, និង `policy:bypass-provider-quota` គឺជា scopes ដែលត្រូវគ្នាពិតប្រាកដបន្ថែម។ ពួកវាស្ថិតនៅខាងក្រៅ `MANAGEMENT_API_KEY_SCOPES`។ `mcp:connect` បើកតែ `/api/mcp/` non-loopback carve-out ប៉ុណ្ណោះ។

### MCP tool scopes

កាតាឡុក និងច្បាប់ផ្គូផ្គង (ខ្សែអក្សរដូចគ្នា ឬ scope ដែលបានផ្តល់ដែលបញ្ចប់ដោយ `*`): [MCP tool scopes](../frameworks/MCP-SERVER.md#mcp-tool-scopes)។ `MCP_SCOPE_LIST` ក្នុង `src/shared/constants/mcpScopes.ts` គឺជា subset ដែលបានកំណត់ប្រភេទដើម មិនមែនជាកាតាឡុកពេញលេញនោះទេ។ ការអនុវត្តដំណើរការក្នុង `open-sse/mcp-server/scopeEnforcement.ts` បន្ទាប់ពី `resolveCallerScopeContext()` ដោះស្រាយ scopes ពីព័ត៌មាន MCP auth, metadata សំណើ, ឬ `OMNIROUTE_MCP_SCOPES`។ វានៅតែបិទ លុះត្រាតែ `OMNIROUTE_MCP_ENFORCE_SCOPES=true`។

### Access-token scopes

`read` / `write` / `admin` លើ tokens `oma_live_…` ដែលត្រូវបានចាត់ថ្នាក់ដោយ `scopeSatisfies` (`src/lib/accessTokens/scopes.ts`)។ ចំណាត់ថ្នាក់នេះអនុវត្តចំពោះ access-token credential ប៉ុណ្ណោះ។ សូមមើល [Management Authentication](../guides/MANAGEMENT-AUTH.md)។

## បិទ/បើកការតម្រូវឱ្យផ្ទៀងផ្ទាត់អត្តសញ្ញាណ

`isAuthRequired()` នៅក្នុង `src/shared/utils/apiAuth.ts` កំណត់ថាតើការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ **ណាមួយ** ត្រូវបានអនុវត្តសម្រាប់សំណើឬអត់៖

- `settings.requireLogin === false` → ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណត្រូវបានបិទជាសកល លើកលែងតែកម្រិតដែលត្រូវបានការពារជានិច្ច
  (សូមមើល [កម្រិតការពារផ្លូវ](../security/ROUTE_GUARD_TIERS.md)) និងការហៅដែលផ្តល់ព័ត៌មានសម្ងាត់ដែលប្រព័ន្ធទទួលយក ដែលតម្រូវឱ្យមានព័ត៌មានសម្ងាត់ដូចគ្នានឹងពេលបើកការចូលប្រើប្រាស់ដែរ៖ ការចេញ sync token,
  ការបង្កើត CLI access token នៅ scope ណាមួយ និងការបង្កើត API key ដែលមាន scope `manage`/`admin`,
  ការផ្តល់ scope នោះទៅឱ្យ key ឬការបង្កើតឡើងវិញ ឬការបង្ហាញ key ប្រភេទនេះ
  (`requireCredentialForManagementScopedKey()` នៅក្នុង `src/lib/api/requireManagementAuth.ts`)។
  Key សម្រាប់តែ inference នៅតែបើកចំហ។
- មិនមាន password ដែលបានកំណត់រចនាសម្ព័ន្ធ **និង** មិនមាន env var `INITIAL_PASSWORD` → របៀប bootstrap អនុញ្ញាតឱ្យប្រើអ្នកជំនួយការរៀបចំដំបូង និងសំណើ loopback ប៉ុន្តែសំណើតាមបណ្ដាញដែលបានបើកឱ្យចូលប្រើនៅតែត្រូវការព័ត៌មានសម្ងាត់។
- កំហុស DB ណាមួយ → បដិសេធការចូលប្រើជានិច្ច (មានសុវត្ថិភាពតាមលំនាំដើម)។

ការអនុវត្តការតម្រូវ API key របស់ client ប្រើ `isRequireApiKeyEnabled()` នៅក្នុង `src/shared/utils/featureFlags.ts` មិនមែនអាន `process.env.REQUIRE_API_KEY` ដោយផ្ទាល់ទេ។ ចំណុចនេះមានសារៈសំខាន់សម្រាប់ instance ដែលបាន deploy៖ ការបិទ/បើក `REQUIRE_API_KEY` នៅក្នុង Dashboard → Feature Flags រក្សាទុកតម្លៃ override ក្នុង DB ហើយមានប្រសិទ្ធភាពភ្លាមៗលើ `/v1/*`, `/v1beta/*`, `/models`, `/responses`, `/chat/completions`, `/codex/*` និងការត្រួតពិនិត្យការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ client-API ផ្សេងទៀតដែលប្រើ helper នេះរួមគ្នា។ ប្រសិនបើមិនអាចអានឃ្លាំង feature flag បាន ការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ client API នឹងបដិសេធការចូលប្រើជានិច្ច ហើយតម្រូវឱ្យមាន key។

## ការផ្លាស់ប្តូរដែលមិនត្រូវគ្នាជាមួយកំណែមុន — v3.8.0

endpoint `/api/v1/agents/tasks/*` និង `/api/resilience/model-cooldowns` **ឥឡូវនេះតម្រូវឱ្យមានការផ្ទៀងផ្ទាត់សម្រាប់ការគ្រប់គ្រង** (commit `588a0333`)។ Client ដែលពីមុនផ្ញើ API key ធម្មតាដោយគ្មានវិសាលភាព `manage` នឹងទទួលបាន `403`។ ការធ្វើ migration៖ ផ្តល់វិសាលភាព `manage` ដល់ key នៅក្នុង dashboard API Keys ឬប្រើ dashboard session ដែលបាន log in។

## ការផ្លាស់ប្តូរឥរិយាបថ — v3.8.2

`/api/mcp/*` (ម៉ាស៊ីនមេ MCP ពីចម្ងាយ) នៅតែជា LOCAL_ONLY តាមលំនាំដើម ប៉ុន្តែឥឡូវនេះវាទទួលយក request ដែលមិនមែនជា loopback នៅពេល header `Authorization: Bearer <api-key>` មានវិសាលភាព `manage`។ ករណីលើកលែងនេះត្រូវបានគ្រប់គ្រងយ៉ាងច្បាស់លាស់តាម path នីមួយៗតាមរយៈ `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES` នៅក្នុង `src/server/authz/routeGuard.ts`។ prefix LOCAL_ONLY ដែលនៅជាប់គ្នា `/api/cli-tools/runtime/*` មានចេតនា **មិន** អនុញ្ញាតឱ្យរំលងទេ ព្រោះវាអាចបង្កើត subprocess តាមអំពើចិត្ត។ Anonymous request ទៅកាន់ `/api/mcp/*` ពី non-loopback នៅតែបន្តទទួលបាន `403 LOCAL_ONLY` — លំនាំដើមសម្រាប់ path LOCAL_ONLY ថ្មីណាមួយនៅតែតម្រូវឱ្យជា loopback យ៉ាងតឹងរ៉ឹង។ សូមមើល [កម្រិត Route Guard](../security/ROUTE_GUARD_TIERS.md#manage-scope-carve-out)។

## ការធ្វើតេស្ត

- Unit test៖ `tests/unit/authz/` — `classify.test.ts`, `pipeline.test.ts`, `client-api-policy.test.ts`, `management-policy.test.ts`, `public-policy.test.ts`។
- Public allowlist៖ `tests/unit/public-api-routes.test.ts`។
- ដំណើរការ test ជាក់លាក់៖ `node --import tsx/esm --test tests/unit/authz/classify.test.ts`។

## ការបំបាត់កំហុស

Pipeline តែងតែបន្ថែមសញ្ញាសម្គាល់លើចម្លើយតបដោយ៖

```
x-request-id:               <លេខសម្គាល់ទំនាក់ទំនង ដែលត្រូវបានបង្ហាញឡើងវិញក្នុងតួអត្ថបទកំហុស>
x-omniroute-route-class:    PUBLIC | CLIENT_API | MANAGEMENT
```

សម្រាប់សំណើដែលបានផ្ទៀងផ្ទាត់អត្តសញ្ញាណ បឋមកថាសំណើនៅ upstream (ខាង handler) ក៏រួមបញ្ចូលផងដែរ៖

```
x-omniroute-auth-kind:      client_api_key | dashboard_session | management_key | anonymous
x-omniroute-auth-id:        key_<លេខ 4 ខ្ទង់ចុងក្រោយ> | "dashboard" | "anonymous"
x-omniroute-auth-label:     (ស្រេចចិត្ត)
x-omniroute-auth-scopes:    បញ្ជីដែលបំបែកដោយសញ្ញាក្បៀស
```

ប្រើ `assertAuth(req, expectedClass)` នៅក្នុង handlers — វាបោះ `AuthzAssertionError` ដែលមានកូដ `AUTHZ_NOT_INITIALIZED` ប្រសិនបើ middleware ត្រូវបានរំលង (មានប្រយោជន៍សម្រាប់ការរកឃើញការថយចុះគុណភាពនៃការកំណត់រចនាសម្ព័ន្ធក្នុងការធ្វើតេស្ត)។

## សូមមើលផងដែរ

- [API_REFERENCE.md](../reference/API_REFERENCE.md) — សញ្ញាសម្គាល់ការផ្ទៀងផ្ទាត់សម្រាប់ចុងចំណុចនីមួយៗ
- [COMPLIANCE.md](../security/COMPLIANCE.md) — កំណត់ហេតុសវនកម្មសម្រាប់ព្រឹត្តិការណ៍ផ្ទៀងផ្ទាត់
- [MCP-SERVER.md](../frameworks/MCP-SERVER.md#three-scope-namespaces) — ដែនឈ្មោះវិសាលភាពបី និងកាតាឡុកវិសាលភាពឧបករណ៍ MCP
- ប្រភព: `src/server/authz/`, `src/lib/api/requireManagementAuth.ts`
