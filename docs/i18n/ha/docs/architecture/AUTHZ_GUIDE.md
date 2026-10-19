# Authorization Guide (Hausa)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/AUTHZ_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AUTHZ_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/AUTHZ_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/AUTHZ_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/AUTHZ_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/AUTHZ_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/AUTHZ_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/AUTHZ_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/architecture/AUTHZ_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AUTHZ_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/AUTHZ_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/AUTHZ_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AUTHZ_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/AUTHZ_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AUTHZ_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/AUTHZ_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/AUTHZ_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/AUTHZ_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/AUTHZ_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/AUTHZ_GUIDE.md)

---

> **Tushen gaskiya:** `src/server/authz/`, `src/shared/constants/publicApiRoutes.ts`, `src/lib/api/requireManagementAuth.ts`, `src/shared/utils/apiAuth.ts`
> **An sabunta ta ƙarshe:** 2026-09-22 — sararin samaniya na iyakoki suna nuni zuwa MCP-SERVER.md

OmniRoute yana da tsarin izini mai sanin hanya wanda ke hana kowane buƙatar API. Rarraba yana da **ƙayyadaddun** kuma **mai rufe-kuskure** — duk abin da ba za a iya rarraba shi ba yana ƙarewa a matsayin `MANAGEMENT` kuma yana buƙatar zama ko alamar matakin gudanarwa. Wannan shafin yana bayyana tsarin ga injiniyoyi masu kula da hanyoyi ko masu tsara sabbin wuraren ƙarshe.

![Tsarin AuthZ (ajiye hanyoyi 3 + kimanta manufofi)](../diagrams/exported/authz-pipeline.svg)

> Tushe: [diagrams/authz-pipeline.mmd](../diagrams/authz-pipeline.mmd)

## Hanyoyin Tantancewa Biyu

### 1. Maɓallin API (Bearer)

Ana amfani da shi don API na abokan hulɗa masu dacewa da OpenAI/Anthropic/Gemini da kuma wasu hanyoyin gudanarwa idan maɓallin yana da ikon `manage`.

```
Authorization: Bearer <api-key>
```

Ana tabbatar da ingancinsa ta `isValidApiKey()` / `extractApiKey()` a cikin `src/sse/services/auth.ts`, sannan ana sake fitar da su ta `src/shared/utils/apiAuth.ts`. Mai tabbatarwar kuma yana karɓar canje-canjen muhalli na `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` a matsayin maɓallan wucewa na dindindin (matsala #1350).

### 2. Zaman Dashboard (kukis ɗin auth_token)

Don shafukan dashboard da ayyukan gudanarwa.

```
Cookie: auth_token=<JWT signed with JWT_SECRET>
```

Ana ɗaukar kuki a matsayin zama ne kawai idan an tabbatar da JWT ɗin **kuma** yana ɗauke da `authenticated: true`
(`src/shared/utils/dashboardSessionToken.ts` → `verifyDashboardSessionToken`). Duk
mai amfani da kukin (mai gadin hanyar dashboard (`isDashboardSessionAuthenticated()`), sabunta tsarin authz, musayar farko ta WebSocket, uwar garken kai-tsaye, `/api/settings/require-login`, `/api/auth/status`) yana bi ta wannan mataimakin.
Akwai wasu JWT da aka sanya wa hannu da `JWT_SECRET` — hanyar wucewar Cursor CLI tana ƙirƙirar
alamomin `iss "omniroute" / aud "cursor-cli"` ga masu riƙe da maɓalli — kuma ba a taɓa ɗaukar su a matsayin zaman shiga ba
(#13298).

Ana tabbatar da shi ta `isDashboardSessionAuthenticated()` a cikin `src/shared/utils/apiAuth.ts`. Tsarin yana sabunta JWT ta atomatik idan saura ƙasa da kwanaki 7 kafin cikar wa'adinsa na kwanaki 30.

Zama na iya ƙarewa kafin kwanaki 30 su cika, saboda kowane mai ƙirƙira yana bi ta `mintDashboardSessionToken` (lokacin fitarwa `iat` da kuma shaida `jti`) sannan mai tabbatarwa yana duba saituna biyu: `sessionsValidAfter`, wanda ake saita shi bayan sauya kalmar sirri domin duk zaman da aka fitar kafin wannan lokaci ya daina samun tabbaci (burauzar da ta sauya kalmar sirrin tana samun sabon kuki), da kuma `revokedDashboardSessions`, wanda `POST /api/auth/logout` ke ƙara `jti` na zaman da aka fita daga cikinsa. Zaman da tsohuwar siga ta ƙirƙira ba ya ɗauke da ko ɗaya daga cikin waɗannan da'awoyin kuma yana ci gaba da aiki har sai an fara sauya kalmar sirri. Idan ba za a iya karanta saitunan ba, ba a amince da zaman.

Wasu hanyoyin gudanarwa suna karɓar **ɗaya daga cikin** hanyoyin biyu: kuki KO `Bearer <key>` idan maɓallin API yana da ikon `manage` (ko `admin`). Wannan ne ke ba da damar tsarin aiki na "mai iya daidaitawa ta hanyar kiran API" da aka ƙara a v3.8.

#### Shingen shiga na OIDC na zaɓi (#6973)

Shigar mai gudanarwa na dashboard kuma yana goyon bayan tsarin OIDC (OpenID Connect) na **zaɓin shiga**
tare da tsohuwar hanyar shiga ta kalmar sirri — ba a taɓa cire hanyar shiga ta kalmar sirri ba, ana
ƙara mata wani zaɓi ne kawai:

- A kashe yake sai idan `settings.oidcEnabled === true` **kuma** an saita dukkan
  `oidcIssuer` / `oidcClientId` / `oidcClientSecret` (Settings → Auth).
  In ba haka ba, `GET /api/auth/oidc/login` yana mayar da `400`.
- `GET /api/auth/oidc/login` yana gano `authorization_endpoint` daga
  `/.well-known/openid-configuration` na issuer (idan hakan bai yiwu ba, sai ya koma
  `<issuer>/authorize`), yana gina URI na turawa daga buƙatar da ta shigo
  (tare da la'akari da `x-forwarded-proto`), sannan yana tura mai amfani zuwa IdP tare da `state`
  na bazuwar da aka adana a cikin cookie na `httpOnly` mai suna `oidc_state`.
- `GET /api/auth/oidc/callback` yana tabbatar da ingancin `state`, yana musanya lambar
  izini, sannan yana tantance sa hannun ID token ta hanyar JWKS na issuer
  (`createRemoteJWKSet` na `jose`, wanda ake adanawa a cache bisa ga kowane JWKS URI) tare da binciken
  `issuer`/`audience`. Dole ne a samar da jerin izini na `oidcAllowedSubjects`: yana daidaita
  da’awar `sub` ta token ko da’awar `email` ɗinsa — ana amincewa da da’awar email ne kawai
  idan `email_verified === true`, saboda haka email da ba a tabbatar da shi ba a IdP ba zai taɓa
  wuce shingen ba — kuma idan babu shigarwa, callback ɗin yana ƙin kowane yunƙurin shiga
  (`not_configured`).
- Idan an yi nasara, yana ƙirƙirar **ainihin** JWT na `auth_token` na kwanaki 30 da tsarin shiga
  ta kalmar sirri yake bayarwa (`src/app/api/auth/login/route.ts`), don haka sauran
  tsarin zaman dashboard (sabuntawa ta atomatik, tutocin cookie) ba sa canzawa —
  OIDC yana maye gurbin yadda ake ƙirƙirar cookie ne kawai, ba abin da yake ba da izini ba.
- Kowane saitin `oidc*` (`oidcEnabled`, `oidcDisablePasswordLogin`,
  `oidcIssuer`, `oidcClientId`, `oidcClientSecret`, `oidcAllowedSubjects`,
  `oidcRedirectPath`, `oidcScopes`) yana cikin `SECURITY_IMPACTING_SETTINGS_KEYS`
  (`src/shared/constants/securityImpactingSettings.ts`): `PATCH /api/settings`
  yana mayar da `400 PASSWORD_REQUIRED` sai idan body ɗin ya ƙunshi kalmar sirrin gudanarwa
  a matsayin `currentPassword` (`401 PASSWORD_MISMATCH` idan ba daidai ba ne).
  `oidcDisablePasswordLogin` yana hana _shiga_ ta kalmar sirri (`POST /api/auth/login`)
  amma yana barin hash na kalmar sirrin da aka adana, kuma sake tabbatar da shaida har yanzu yana gwada
  `currentPassword` da shi.
- `corsOrigins` da `bruteForceProtection` su ma suna cikin `SECURITY_IMPACTING_SETTINGS_KEYS`:
  sassauta ɗaya daga cikinsu yana raunana kariyar shiga, saboda haka suna buƙatar irin wannan sake tabbatarwa da
  `currentPassword` (shafin Security yana neman sa), kuma shigo da JSON yana cire su.
- Kowane maɓallin manufar tsaro — shigarwar `SECURITY_IMPACTING_SETTINGS_KEYS`,
  kowane maɓallin `oidc*` da yanayin zaman dashboard — na **operator-only** ne a
  `PATCH /api/settings`: ana ƙin API key mai iyakar `manage` ko access token na `oma_`
  da `403` ko da ya aika da madaidaicin `currentPassword`, kuma ana rubuta ƙin a rajistar bincike a matsayin
  `settings.update_failed` tare da `reason: OPERATOR_REQUIRED`
  (`requireOperatorCredential()` a cikin `src/lib/api/operatorCredential.ts`).
  Saituna na yau da kullum (theme, zaɓuɓɓukan nuni) suna ci gaba da kasancewa masu iya gyarawa ta maɓallin `manage`
  ko access token na `admin`. Duk wani gyara ga `/api/settings` kansa (da kuma
  `/api/settings/require-login`) yana kuma buƙatar scope na access token na `admin`
  (`ADMIN_MUTATION_EXACT_PATHS` a cikin `src/server/authz/accessScopes.ts`, daidaitawar exact-path);
  `GET` yana ci gaba da zama `read`, sannan sauran ƙananan hanyoyin `/api/settings/*` (proxies,
  combo defaults, model aliases, compression, purges…) suna riƙe da scope na `write`
  da aka ƙayyade daga method.
- `POST /api/settings/import-json` yana tsallake wannan sake tabbatarwa, don haka yana cire kowane maɓalli a
  `IMPORT_STRIPPED_SETTINGS_KEYS` (fayil ɗaya) kafin rubutawa: kalmar sirri da
  `currentPassword`, kowace shigarwar `SECURITY_IMPACTING_SETTINGS_KEYS`, da
  yanayin zaman dashboard (`sessionsValidAfter`, `revokedDashboardSessions`).
  Saboda haka, shigo da tsohon backup ba zai iya dawo da zaman da canjin kalmar sirri
  ko fita ya riga ya kawo ƙarshensa ba.

## Rukunan Hanyoyin Shiga

`src/server/authz/types.ts` yana ayyana rukuni uku; duk hanyar shiga da ba za a iya tantance rukuninta kai tsaye ba tana komawa zuwa `MANAGEMENT`.

| Rukuni       | Bayani                                                                                                                                                                 | Ana buƙatar tantancewa                                                 |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `PUBLIC`     | Hanyoyin shiga da aka tabbatar suna da aminci — shiga, fita, matsayi, farawa, lafiyar tsari, da fara saitin mai amfani.                                                | Babu                                                                   |
| `CLIENT_API` | Wuraren ƙarshen hidimar samfuri — `/api/v1/*`, `/api/v1beta/*`, tare da sunayen madadi `/v1/*`, `/v1beta/*`, `/chat/completions`, `/responses`, `/models`, `/codex/*`. | Maɓallin Bearer idan an kunna tutar fasalin `REQUIRE_API_KEY` mai aiki |
| `MANAGEMENT` | Shafukan dashboard, saituna, masu samarwa, maɓallai, da wuraren ƙarshen gudanarwa da binciken matsala.                                                                 | Zaman dashboard KO Bearer mai ikon `manage`                            |

Wasu ayyukan `MANAGEMENT` na **mai gudanar da tsari kaɗai** ne: maɓallin `manage` bai wadatar ba. Fitar da
bayanan sirri da aka adana (`GET /api/settings/export-json`, `GET /api/db-backups/export`,
`GET /api/db-backups/exportAll`), dawo da kwafin ajiya a kan bayanan da ake amfani da su
(`POST /api/db-backups/import` har da `dryRun=true`, `POST /api/db-backups` don dawo da su ta id,
`POST /api/settings/import-json`), lalata wuraren maidowa (`DELETE /api/db-backups` don tsaftacewa,
da `PATCH /api/db-backups` saboda tsarin riƙewar da yake adanawa ne ke tafiyar da cire tsofaffin bayanai ta atomatik bayan
kowane kwafin ajiya) suna buƙatar zaman dashboard, batun CLI na gida, ko kuma a kashe shiga. Bayar da
alamar sync (`POST /api/sync/tokens`) da ƙirƙirar alamar samun damar CLI ta `admin`
(`POST /api/cli/tokens`) suna buƙatar zaman dashboard ko batun CLI na gida a kowane yanayin shiga.
Maɓallan API na kowane irin iko da alamomin samun dama na `oma_` ba bayanan tantance mai gudanar da tsari ba ne: suna samun `403`
duk lokacin da ake buƙatar irin wannan tantancewa. Binciken yana
cikin `src/lib/api/operatorCredential.ts` (`resolveOperatorCredential()` /
`requireOperatorCredential()`). Canza saitunan shiga ma aikin mai gudanar da tsari kaɗai ne:
`POST /api/settings/require-login` (saita kalmar sirrin gudanarwa / sauya `requireLogin`) yana karɓar
waɗannan bayanan tantancewa kaɗai bayan an riga an samar da kalmar sirri — taga ta fara amfani a karon farko (lokacin da babu kalmar sirri tukuna)
ba ta canza ba — kuma zaman dashboard dole ne ya aika `currentPassword` domin maye gurbin kalmar sirri
(`403` idan babu ita ko kuma ba daidai ba ce, ana rubuta shi a rajistar bincike a matsayin `settings.update_failed`). CLI na gida da
tsarin da aka kashe shiga a cikinsa suna ci gaba da samun hanyar farfadowa kuma suna iya saita kalmar sirri ba tare da ita ba, domin duka biyun
suna daure da na’urar da ta mallaki kundin bayanai.

## Bututun Aiki

```
Buƙata mai shigowa → src/proxy.ts
  → runAuthzPipeline() a cikin src/server/authz/pipeline.ts
    1. Cire amintattun kanun bayanai na ciki (x-omniroute-auth-*, x-omniroute-route-class)
    2. Samar da id na buƙata, tantance rukunin hanya ta hanyar classifyRoute()
    3. Idan pathname == "/" → karkatar zuwa /dashboard
    4. Idan ana rufe tsarin a hankali kuma hanyar ita ce /api/* → 503
    5. Idan /api/* ce ba ta GET ba → aiwatar da kariyar checkBodySize()
    6. Idan OPTIONS ce → gwajin-farko na CORS 204
    7. Idan options.enforce == false → bari ta wuce tare da kanun rukunin hanya
    8. In ba haka ba: POLICIES[routeClass].evaluate(ctx)
       - allow  → sanya x-omniroute-auth-{kind,id,label,scopes} → NextResponse.next()
       - reject → kuskuren JSON mai correlation_id (shafukan dashboard → 302 /login)
```

Amintattun kanun bayanai na ciki (waɗanda aka ayyana a cikin `src/server/authz/headers.ts`) ana **cire su daga buƙatun da ke shigowa** kafin tantance rukuni — abokan hulɗa ba za su iya riga cika `x-omniroute-auth-*` don kwaikwayon wani mai amfani ba.

### Yarjejeniyoyin manufofi

Kowane rukunin hanya yana da manufa a cikin `src/server/authz/policies/`:

- **`publicPolicy`** (`policies/public.ts`) — koyaushe yana mayar da `allow({ kind: "anonymous", id: "anonymous" })`.
- **`clientApiPolicy`** (`policies/clientApi.ts`) — yana cire Bearer, sannan ya inganta shi ta hanyar `validateApiKey()`. Yana komawa ga mara suna ne kawai idan an kashe tutar fasalin `REQUIRE_API_KEY` mai aiki. Ana tantance tutar mai aiki ta hanyar `isRequireApiKeyEnabled()` (`Maye gurbin tutar fasalin DB > process.env.REQUIRE_API_KEY > tsohon ƙima`) domin Tutocin Fasali na Dashboard da sauye-sauyen muhalli su sarrafa `/api/v1/*`, `/api/v1beta/*`, da laƙabbai iri ɗaya; gazawar mai tantancewa tana hana shiga. Yana ba da izini ga buƙatun zaman dashboard a hanyoyin client API (ciki har da `/api/v1/models`, wanda kundin samfuran dashboard ke amfani da shi).
- **`managementPolicy`** (`policies/management.ts`) — yana karɓar zaman dashboard, buƙatun daidaita samfuri na ciki (waɗanda aka dace da `/api/providers/[name]/(sync-models|models)`), ko kuma ya tsallake gaba ɗaya idan `isAuthRequired()` ya mayar da false. Yana mayar da 403 (`AUTH_001`) idan akwai alamar Bearer amma ba ta da inganci, in ba haka ba 401. Haka kuma yana tilasta matakan kariyar hanya (LOCAL_ONLY / ALWAYS_PROTECTED) kafin kowane reshen tantancewa — duba [Matakan Kariyar Hanya](../security/ROUTE_GUARD_TIERS.md). Ana iya samun damar hanyoyin LOCAL_ONLY da ke cikin `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES` (a yau: `/api/mcp/`) daga wurin da ba loopback ba idan maɓallin Bearer yana ɗauke da iyakar izinin `manage`; duk sauran hanyoyin LOCAL_ONLY suna ci gaba da buƙatar strict-loopback ba tare da la'akari da iyakar izini ba.

Manufa mai nasara tana mayar da `AuthSubject` tare da `kind ∈ { client_api_key, dashboard_session, management_key, anonymous }`. Masu sarrafa buƙatu na gaba za su iya karanta shi ta hanyar `assertAuth(request, "CLIENT_API")` a cikin `src/server/authz/assertAuth.ts` maimakon sake gudanar da dabarun tantancewa.

## Jerin Hanyoyin Jama'a

`src/shared/constants/publicApiRoutes.ts` shi ne jerin izini na bayyane:

An raba jerin bisa ga **siffa**, kuma wannan rabuwar tana da matuƙar muhimmanci (GHSA-74g9-q8f6-793h): ana daidaita prefix ta amfani da `startsWith()`, don haka yana kuma daidaita kowace hanya da ke kusa wadda take da haruffan farko iri ɗaya.
Amfani da `/api/usage/om-usage` a matsayin prefix ya sanya `/api/usage/om-usage<anything>` ya zama PUBLIC, sannan Next yana fassara hakan zuwa `/api/usage/[connectionId]` — handler wanda ba shi da nasa tantancewar izini.

```ts
// Manyan rassan hanyoyi na ainihi. DOLE kowane shigarwa ya ƙare da "/" (gwajin unit yana tabbatar da hakan).
PUBLIC_API_ROUTE_PREFIXES = [
  "/api/auth/oidc/",
  "/api/v1/", // ana ɗaukarsa a matsayin CLIENT_API a classify, ba a matsayin "jama'a ba tare da auth ba"
  "/api/oauth/",
  "/api/codex/connect/",
  "/api/telegram/",
  "/api/cursor-cli/",
];

// Hanyoyi guda-guda, ana daidaita su DAIDAI (tare da ko ba tare da slash a ƙarshe ba).
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

// Hanyoyi guda-guda na karantawa kawai waɗanda kuma suke samun sassaucin origin na CORS.
PUBLIC_READONLY_CORS_API_ROUTES = [
  "/api/health/ping",
  "/api/monitoring/health",
  "/api/settings/require-login",
];

// Hanya guda ta karantawa kawai BA TARE da sassaucin CORS ba.
PUBLIC_READONLY_API_ROUTES_EXACT = new Set(["/api/health"]);

PUBLIC_READONLY_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);
```

Hanyoyin karantawa kawai na jama'a ne **kawai** ga hanyoyin buƙata masu aminci. Lura: `classifyRoute()` yana cire `/api/v1/*` da `/api/v1beta/*` daga faɗuwar PUBLIC — waɗannan koyaushe `CLIENT_API` ne domin manufar Bearer-key ta ci gaba da aiki.

## Ƙara Sabuwar Hanya

### Tsari na 1 — Endpoint na API na abokin ciniki na jama'a (Bearer-auth)

Hanyoyin da ke ƙarƙashin `/api/v1/` da `/api/v1beta/` ana rarraba su a matsayin `CLIENT_API` ta atomatik. Middleware yana tilasta binciken Bearer; route handlers ba sa buƙatar sake yin sa, amma za su iya karanta subject idan hakan yana da amfani.

```typescript
// src/app/api/v1/your-route/route.ts
import { NextRequest, NextResponse } from "next/server";
import { assertAuth } from "@/server/authz/assertAuth";

export async function POST(req: NextRequest) {
  const subject = assertAuth(req, "CLIENT_API");
  // subject.kind === "client_api_key" | "anonymous" | "dashboard_session"
  // ... dabarun handler
}
```

### Tsari na 2 — Endpoint na gudanarwa (session ko Bearer + manage)

Yi amfani da `requireManagementAuth()` daga `src/lib/api/requireManagementAuth.ts`:

```typescript
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";

export async function POST(request: Request) {
  const rejection = await requireManagementAuth(request);
  if (rejection) return rejection;
  // ... dabarun handler
}
```

`requireManagementAuth()` yana mayar da `null` idan an yi nasara ko kuma kuskuren JSON `Response`:

- 401 `AUTH_001` "Ana buƙatar tantancewa" — babu bayanan tantancewa kwata-kwata
- 403 — Bearer mara inganci **ko** Bearer yana nan amma key ba shi da scope na `manage` / `admin`

`hasManageScope(scopes)` yana mayar da true ga `"manage"` ko `"admin"`.

### Tsari na 3 — Ƙarawa cikin jerin izinin jama'a

Zaɓi set bisa ga siffa, ba bisa ga sauƙi ba. Hanya guda tana shiga `PUBLIC_API_ROUTES_EXACT` (ko `PUBLIC_READONLY_CORS_API_ROUTES` idan GET-kawai ce); babban reshen hanyoyi na ainihi ne kawai zai shiga `PUBLIC_API_ROUTE_PREFIXES`, kuma **dole ne ya ƙare da `/`**. Sanya hanya guda a jerin prefix yana kuma wallafa kowace hanya da ke kusa wadda take da haruffan farko iri ɗaya — har da 'yan'uwan dynamic-segment da za a ƙara daga baya (GHSA-74g9-q8f6-793h). Sabunta gwaje-gwajen unit a `tests/unit/public-api-routes.test.ts`, `tests/unit/authz/public-route-exact-match.test.ts` da `tests/unit/authz/classify.test.ts`.

## Fadukan Aiki

Fadukan suna uku. Kowane mai dubawa yana karanta nasa zaren ne kawai. Kwatancen,
ciki har da dalilin da yasa `manage` ke kasa `scopeMatches` don `read:compression` da kuma dalilin da yasa alamar shiga `read` ba zai iya `PATCH /api/keys/{id}` ba, yana nan a
[Fadukan suna uku](../frameworks/MCP-SERVER.md#three-scope-namespaces).

Mabudan API suna ɗauke da jeri na `scopes` (an adana su a matsayin JSON a `api_keys.scopes`, duba `src/lib/db/apiKeys.ts`).

### Fadukan Aiki na Gudanarwa

- `manage` / `admin` — `hasManageScope`. Samun damar shiga hanyoyin API na gudanarwa.
- `mcp:connect`, `self:usage`, `self:account-quota`, da
  `policy:bypass-provider-quota` fadukan aiki ne masu ƙari, masu daidai-daidai. Suna waje da `MANAGEMENT_API_KEY_SCOPES`. `mcp:connect` yana buɗe kawai `/api/mcp/` wanda ba na madauki ba.

### Fadukan Aiki na Kayan Aikin MCP

Katalog da ka'idojin daidaitawa (zaren daidai, ko fadukan aiki da aka bayar wanda ya ƙare da `*`):
[Fadukan Aiki na Kayan Aikin MCP](../frameworks/MCP-SERVER.md#mcp-tool-scopes).
`MCP_SCOPE_LIST` a `src/shared/constants/mcpScopes.ts` shine ainihin ƙaramin saitin da aka rubuta, ba cikakken katalog ɗin ba. Aiwatarwa yana gudana a
`open-sse/mcp-server/scopeEnforcement.ts` bayan `resolveCallerScopeContext()` ya warware fadukan aiki daga bayanan shiga na MCP, metadata na buƙata, ko `OMNIROUTE_MCP_SCOPES`.
Yana kashe sai dai idan `OMNIROUTE_MCP_ENFORCE_SCOPES=true`.

### Fadukan Aiki na Alamar Shiga

`read` / `write` / `admin` akan alamomin `oma_live_…`, an jera su ta `scopeSatisfies`
(`src/lib/accessTokens/scopes.ts`). Wannan matsayi yana aiki ne kawai ga takardar shaidar alamar shiga. Duba [Tabbatar da Gudanarwa](../guides/MANAGEMENT-AUTH.md).

## Maɓallin Kunna/Kashe Buƙatar Tabbatar da Ainihi

`isAuthRequired()` a cikin `src/shared/utils/apiAuth.ts` yana tantance ko za a tilasta **kowace irin** tabbatar da ainihi ga wata buƙata:

- `settings.requireLogin === false` → an kashe tabbatar da ainihi a ko’ina, sai dai ga matakin da ake
  karewa a kowane lokaci (duba [Matakan Tsaron Hanyoyi](../security/ROUTE_GUARD_TIERS.md)) da kuma kiraye-kirayen da ke bayar da wata
  shaidar shiga da tsarin ke karɓa, waɗanda ke buƙatar shaidar iri ɗaya da lokacin da aka kunna shiga: bayar da sync tokens,
  ƙirƙirar CLI access tokens a kowane scope, da ƙirƙirar API key mai scope na `manage`/`admin`,
  ba wa wani key wannan scope, ko sake ƙirƙira ko bayyana irin wannan key
  (`requireCredentialForManagementScopedKey()` a cikin `src/lib/api/requireManagementAuth.ts`).
  Inference-only keys suna ci gaba da kasancewa a buɗe.
- Ba a saita kalmar sirri ba **kuma** babu env var na `INITIAL_PASSWORD` → bootstrap mode yana ba da damar onboarding wizard da loopback requests, amma exposed network requests har yanzu suna buƙatar credentials.
- Duk wani DB error → tsarin yana hana shiga kai tsaye (secure-by-default).

Tilasta amfani da Client API key yana amfani da `isRequireApiKeyEnabled()` a cikin `src/shared/utils/featureFlags.ts`, ba karatun `process.env.REQUIRE_API_KEY` kai tsaye ba. Wannan yana da muhimmanci ga deployed instances: sauya `REQUIRE_API_KEY` a Dashboard → Feature Flags yana adana DB override kuma nan take yana shafar `/v1/*`, `/v1beta/*`, `/models`, `/responses`, `/chat/completions`, `/codex/*`, da sauran client-API auth checks da ke amfani da wannan helper ɗin. Idan ba za a iya karanta feature flag store ba, client API auth yana hana shiga kai tsaye kuma yana buƙatar key.

## Sauyin da ke Karya Daidaituwa — v3.8.0

Wuraren ƙarshen `/api/v1/agents/tasks/*` da `/api/resilience/model-cooldowns` **yanzu suna buƙatar tantancewar gudanarwa** (commit `588a0333`). Abokan ciniki waɗanda a baya suke aika maɓallin API na yau da kullum ba tare da iyakar izinin `manage` ba za su karɓi `403`. Ƙaura: ko dai a bai wa maɓallin iyakar izinin `manage` a cikin dashboard na API Keys, ko kuma a yi amfani da zaman dashboard da aka shiga.

## Sauyin Halayya — v3.8.2

`/api/mcp/*` (uwar garken MCP mai nisa) har yanzu LOCAL_ONLY ne ta tsohuwa, amma yanzu yana karɓar buƙatun da ba na loopback ba idan header na `Authorization: Bearer <api-key>` yana ɗauke da iyakar izinin `manage`. An kayyade wannan keɓancewar a sarari ga kowace hanya ta hanyar `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES` a cikin `src/server/authz/routeGuard.ts`; da gangan ba za a iya tsallake ƙawancen prefix na LOCAL_ONLY mai suna `/api/cli-tools/runtime/*` ba, saboda yana iya ƙaddamar da subprocesses na kowace iri. Buƙatun da ba a tantance ba zuwa `/api/mcp/*` daga wajen loopback za su ci gaba da dawo da `403 LOCAL_ONLY` — tsohon ƙa'ida ga kowace sabuwar hanyar LOCAL_ONLY ita ce tsauraran loopback kawai. Duba [Matakan Tsaron Hanya](../security/ROUTE_GUARD_TIERS.md#manage-scope-carve-out).

## Gwaji

- Gwaje-gwajen unit: `tests/unit/authz/` — `classify.test.ts`, `pipeline.test.ts`, `client-api-policy.test.ts`, `management-policy.test.ts`, `public-policy.test.ts`.
- Jerin hanyoyin jama'a da aka amince da su: `tests/unit/public-api-routes.test.ts`.
- Gudanar da gwaji takamaimai: `node --import tsx/esm --test tests/unit/authz/classify.test.ts`.

## Gano Matsala

Pipeline koyaushe yana yi wa amsoshi tambari da:

```
x-request-id:               <ID na daidaitawa, ana maimaita shi a jikin kuskure>
x-omniroute-route-class:    PUBLIC | CLIENT_API | MANAGEMENT
```

Ga buƙatun da aka tantance, headers na buƙatar upstream (a ɓangaren handler) su ma sun haɗa da:

```
x-omniroute-auth-kind:      client_api_key | dashboard_session | management_key | anonymous
x-omniroute-auth-id:        key_<lambobi-4-na-ƙarshe> | "dashboard" | "anonymous"
x-omniroute-auth-label:     (na zaɓi)
x-omniroute-auth-scopes:    jeri da aka raba da waƙafi
```

Yi amfani da `assertAuth(req, expectedClass)` a cikin handlers — yana jefa `AuthzAssertionError` mai lambar `AUTHZ_NOT_INITIALIZED` idan an tsallake middleware (yana taimakawa wajen gano koma-baya na saiti a gwaje-gwaje).

## Duba Kuma

- [API_REFERENCE.md](../reference/API_REFERENCE.md) — alama ta izini ga kowane maƙasudi
- [COMPLIANCE.md](../security/COMPLIANCE.md) — rajistan bincike na abubuwan izini
- [MCP-SERVER.md](../frameworks/MCP-SERVER.md#three-scope-namespaces) — sararin suna mai iyakoki uku da kundin kayan aikin MCP
- Tushe: `src/server/authz/`, `src/lib/api/requireManagementAuth.ts`
