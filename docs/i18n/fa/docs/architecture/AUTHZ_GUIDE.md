# Authorization Guide (فارسی)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/AUTHZ_GUIDE.md) · 🇪🇹 [am](../../../am/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/architecture/AUTHZ_GUIDE.md) · 🇦🇿 [az](../../../az/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇦 [bs](../../../bs/docs/architecture/AUTHZ_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/architecture/AUTHZ_GUIDE.md) · 🇩🇰 [da](../../../da/docs/architecture/AUTHZ_GUIDE.md) · 🇩🇪 [de](../../../de/docs/architecture/AUTHZ_GUIDE.md) · 🇬🇷 [el](../../../el/docs/architecture/AUTHZ_GUIDE.md) · 🇪🇸 [es](../../../es/docs/architecture/AUTHZ_GUIDE.md) · 🇪🇪 [et](../../../et/docs/architecture/AUTHZ_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/architecture/AUTHZ_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇱 [he](../../../he/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/architecture/AUTHZ_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/architecture/AUTHZ_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/architecture/AUTHZ_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇩 [id](../../../id/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇹 [it](../../../it/docs/architecture/AUTHZ_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/architecture/AUTHZ_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇭 [km](../../../km/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/architecture/AUTHZ_GUIDE.md) · 🇲🇲 [my](../../../my/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇴 [no](../../../no/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [or](../../../or/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/architecture/AUTHZ_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/architecture/AUTHZ_GUIDE.md) · 🇱🇰 [si](../../../si/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/architecture/AUTHZ_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/architecture/AUTHZ_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/architecture/AUTHZ_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/architecture/AUTHZ_GUIDE.md) · 🇮🇳 [te](../../../te/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇭 [th](../../../th/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/architecture/AUTHZ_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/AUTHZ_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/architecture/AUTHZ_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/architecture/AUTHZ_GUIDE.md) · 🇻🇳 [vi](../../../vi/docs/architecture/AUTHZ_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/architecture/AUTHZ_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/AUTHZ_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/AUTHZ_GUIDE.md)

---

> **منبع اصلی:** `src/server/authz/`, `src/shared/constants/publicApiRoutes.ts`, `src/lib/api/requireManagementAuth.ts`, `src/shared/utils/apiAuth.ts`
> **آخرین بهروزرسانی:** 2026-09-22 — فضاهای نام دامنه به MCP-SERVER.md اشاره دارند

OmniRoute دارای یک خط لوله احراز هویت آگاه به مسیر است که هر درخواست API را کنترل میکند. طبقهبندی **قطعی** و **بستهدرصورتخطا** است — هر چیزی که قابل طبقهبندی نباشد به عنوان `MANAGEMENT` در نظر گرفته میشود و به یک نشست یا توکن با سطح دسترسی مدیریت نیاز دارد. این صفحه مدل را برای مهندسانی که مسیرها را نگهداری میکنند یا نقاط پایانی جدید طراحی میکنند، توضیح میدهد.

![خط لوله AuthZ (3 کلاس مسیر + ارزیابی سیاست)](../diagrams/exported/authz-pipeline.svg)

> منبع: [diagrams/authz-pipeline.mmd](../diagrams/authz-pipeline.mmd)

## دو حالت احراز هویت

### 1. کلید API (Bearer)

برای APIهای کلاینت سازگار با OpenAI/Anthropic/Gemini و چند مسیر مدیریتی، در صورتی که کلید دارای محدودهٔ دسترسی `manage` باشد، استفاده میشود.

```
Authorization: Bearer <api-key>
```

اعتبارسنجی توسط `isValidApiKey()` / `extractApiKey()` در `src/sse/services/auth.ts` انجام میشود و از طریق `src/shared/utils/apiAuth.ts` مجدداً صادر میشود. اعتبارسنج همچنین متغیرهای محیطی `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` را بهعنوان کلیدهای عبوری دائمی میپذیرد (شمارهٔ #1350).

### 2. نشست داشبورد (کوکی auth_token)

برای صفحات داشبورد و عملیات مدیریتی.

```
Cookie: auth_token=<JWT signed with JWT_SECRET>
```

یک کوکی تنها زمانی نشست محسوب میشود که JWT با موفقیت تأیید شود **و** دارای `authenticated: true` باشد
(`src/shared/utils/dashboardSessionToken.ts` → `verifyDashboardSessionToken`). همهٔ
مصرفکنندگان این کوکی (محافظ مسیر داشبورد (`isDashboardSessionAuthenticated()`)، تازهسازی خط لولهٔ مجوزدهی، دستدهی WebSocket، سرور
زنده، `/api/settings/require-login`، `/api/auth/status`) از این تابع کمکی عبور میکنند.
JWTهای دیگری نیز وجود دارند که با `JWT_SECRET` امضا شدهاند — قابلیت عبور Cursor CLI برای دارندگان کلید، توکنهایی با
`iss "omniroute" / aud "cursor-cli"` صادر میکند — و هرگز نشست محسوب نمیشوند
(#13298).

اعتبارسنجی توسط `isDashboardSessionAuthenticated()` در `src/shared/utils/apiAuth.ts` انجام میشود. خط لوله زمانی که کمتر از ۷ روز از طول عمر ۳۰روزهٔ JWT باقی مانده باشد، آن را بهطور خودکار تازهسازی میکند.

یک نشست همچنین میتواند پیش از پایان ۳۰ روز خاتمه یابد، زیرا همهٔ صادرکنندگان از `mintDashboardSessionToken` عبور میکنند (با زمان صدور `iat` و شناسهٔ `jti`) و اعتبارسنج دو تنظیم را بررسی میکند: `sessionsValidAfter` که با تغییر رمز عبور تنظیم میشود تا همهٔ نشستهای صادرشده پیش از آن دیگر تأیید نشوند (مرورگری که رمز عبور را تغییر داده، یک کوکی تازه دریافت میکند)، و `revokedDashboardSessions` که `POST /api/auth/logout`، مقدار `jti` نشست خارجشده را به آن اضافه میکند. نشستهایی که توسط نسخهای قدیمیتر صادر شدهاند، هیچیک از این ادعاها را ندارند و تا نخستین تغییر رمز عبور معتبر باقی میمانند. اگر تنظیمات قابل خواندن نباشند، نشست مورد اعتماد قرار نمیگیرد.

برخی مسیرهای مدیریتی **هر یک** از این دو حالت را میپذیرند: کوکی یا `Bearer <key>`، مشروط بر اینکه کلید API دارای محدودهٔ دسترسی `manage` (یا `admin`) باشد. این همان چیزی است که گردشکار «قابل پیکربندی از طریق فراخوانیهای API» را که در v3.8 افزوده شد، امکانپذیر میکند.

#### دروازهٔ اختیاری ورود OIDC (#6973)

ورود مدیر داشبورد همچنین در کنار ورود پیشفرض با رمز عبور، از یک جریان **اختیاری** OIDC (OpenID Connect) پشتیبانی میکند — ورود با رمز عبور هرگز حذف نمیشود و فقط
با این روش تکمیل میشود:

- غیرفعال است، مگر اینکه `settings.oidcEnabled === true` باشد **و** همهٔ مقادیر `oidcIssuer` /
  `oidcClientId` / `oidcClientSecret` پیکربندی شده باشند (Settings → Auth).
  در غیر این صورت، `GET /api/auth/oidc/login` مقدار `400` را برمیگرداند.
- `GET /api/auth/oidc/login`، `authorization_endpoint` را از
  `/.well-known/openid-configuration` صادرکننده کشف میکند (با مسیر جایگزین
  `<issuer>/authorize`)، URI تغییرمسیر را از درخواست ورودی میسازد
  (با پشتیبانی از `x-forwarded-proto`) و کاربر را با یک `state` تصادفی که در
  کوکی `oidc_state` از نوع `httpOnly` ذخیره شده است، به IdP هدایت میکند.
- `GET /api/auth/oidc/callback`، مقدار `state` را اعتبارسنجی میکند، کد مجوز را
  مبادله میکند و امضای توکن ID را از طریق JWKS صادرکننده
  (`createRemoteJWKSet` متعلق به `jose`، با ذخیرهسازی موقت بهازای هر URI مربوط به JWKS)
  همراه با بررسیهای `issuer`/`audience` تأیید میکند. فهرست مجاز
  `oidcAllowedSubjects` الزامی است: این فهرست با claim مربوط به `sub` یا claim
  مربوط به `email` در توکن تطبیق داده میشود — claim ایمیل فقط زمانی پذیرفته
  میشود که `email_verified === true` باشد؛ بنابراین یک ایمیل تأییدنشده در IdP
  هرگز نمیتواند از این مرحله عبور کند — و اگر هیچ ورودیای وجود نداشته باشد،
  callback همهٔ ورودها را رد میکند (`not_configured`).
- در صورت موفقیت، **دقیقاً همان** JWT سیروزهٔ `auth_token` را صادر میکند که
  ورود با گذرواژه صادر میکند (`src/app/api/auth/login/route.ts`)؛ بنابراین
  باقی خط لولهٔ نشست داشبورد (نوسازی خودکار، پرچمهای کوکی) بدون تغییر میماند —
  OIDC فقط نحوهٔ صدور کوکی را جایگزین میکند، نه مجوزهایی را که اعطا میکند.
- همهٔ تنظیمات `oidc*` (`oidcEnabled`، `oidcDisablePasswordLogin`،
  `oidcIssuer`، `oidcClientId`، `oidcClientSecret`، `oidcAllowedSubjects`،
  `oidcRedirectPath`، `oidcScopes`) در `SECURITY_IMPACTING_SETTINGS_KEYS`
  قرار دارند (`src/shared/constants/securityImpactingSettings.ts`):
  `PATCH /api/settings` با `400 PASSWORD_REQUIRED` پاسخ میدهد، مگر اینکه بدنه
  شامل گذرواژهٔ مدیریتی در `currentPassword` باشد (اگر اشتباه باشد،
  `401 PASSWORD_MISMATCH`). گزینهٔ `oidcDisablePasswordLogin`، _ورود_ با
  گذرواژه (`POST /api/auth/login`) را رد میکند، اما هش گذرواژهٔ ذخیرهشده را
  نگه میدارد و احراز هویت مجدد همچنان `currentPassword` را با آن بررسی میکند.
- `corsOrigins` و `bruteForceProtection` نیز در `SECURITY_IMPACTING_SETTINGS_KEYS`
  قرار دارند: کاهش محدودیت هرکدام، دفاعهای ورود را تضعیف میکند؛ بنابراین
  همان احراز هویت مجدد با `currentPassword` برای آنها لازم است (زبانهٔ Security
  آن را درخواست میکند) و واردکردن JSON آنها را حذف میکند.
- همهٔ کلیدهای سیاست امنیتی — ورودیهای `SECURITY_IMPACTING_SETTINGS_KEYS`،
  همهٔ کلیدهای `oidc*` و وضعیت نشست داشبورد — در `PATCH /api/settings`
  **فقط برای اپراتور** هستند: یک کلید API با دامنهٔ `manage` یا یک توکن دسترسی
  `oma_`، حتی اگر `currentPassword` صحیح را ارسال کند، با `403` رد میشود و
  این ردشدن با رویداد `settings.update_failed` و
  `reason: OPERATOR_REQUIRED` ثبت ممیزی میشود
  (`requireOperatorCredential()` در `src/lib/api/operatorCredential.ts`).
  تنظیمات عادی (پوسته، ترجیحات نمایش) همچنان با یک کلید `manage` یا توکن دسترسی
  `admin` قابل تغییر هستند. هر تغییری در خود `/api/settings` (و نیز
  `/api/settings/require-login`) همچنین به دامنهٔ توکن دسترسی `admin` نیاز دارد
  (`ADMIN_MUTATION_EXACT_PATHS` در `src/server/authz/accessScopes.ts`، با تطبیق
  دقیق مسیر)؛ `GET` همچنان در دامنهٔ `read` باقی میماند و سایر زیرمسیرهای
  `/api/settings/*` (پراکسیها، پیشفرضهای ترکیبی، نامهای مستعار مدل،
  فشردهسازی، پاکسازیها و غیره) دامنهٔ `write` استنباطشده از متد را حفظ میکنند.
- `POST /api/settings/import-json` آن احراز هویت مجدد را نادیده میگیرد؛ بنابراین
  پیش از نوشتن، همهٔ کلیدهای موجود در `IMPORT_STRIPPED_SETTINGS_KEYS` (در همان
  فایل) را حذف میکند: گذرواژه و `currentPassword`، همهٔ ورودیهای
  `SECURITY_IMPACTING_SETTINGS_KEYS` و وضعیت نشست داشبورد
  (`sessionsValidAfter`، `revokedDashboardSessions`). در نتیجه، واردکردن یک
  نسخهٔ پشتیبان قدیمی نمیتواند نشستی را که قبلاً با تغییر گذرواژه یا خروج
  پایان یافته است، دوباره فعال کند.

## کلاسهای مسیر

`src/server/authz/types.ts` سه کلاس را تعریف میکند؛ هر مسیری که نتوان آن را بهصورت قطعی طبقهبندی کرد، بهطور پیشفرض در `MANAGEMENT` قرار میگیرد.

| کلاس         | توضیحات                                                                                                                                                        | احراز هویت لازم                                                    |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `PUBLIC`     | مسیرهایی که صراحتاً ایمن هستند — ورود، خروج، وضعیت، راهاندازی اولیه، سلامت و بوتاسترپ فرایند آغاز به کار.                                                      | هیچکدام                                                            |
| `CLIENT_API` | نقاط پایانی ارائهٔ مدل — `/api/v1/*`، `/api/v1beta/*`، بهعلاوهٔ نامهای مستعار `/v1/*`، `/v1beta/*`، `/chat/completions`، `/responses`، `/models` و `/codex/*`. | هنگامی که پرچم قابلیت مؤثر `REQUIRE_API_KEY` فعال است، کلید Bearer |
| `MANAGEMENT` | صفحههای داشبورد، تنظیمات، ارائهدهندگان، کلیدها و نقاط پایانی مدیریتی و عیبیابی.                                                                                | نشست داشبورد یا Bearer با حوزهٔ دسترسی `manage`                    |

برخی از عملیات `MANAGEMENT` **فقط مخصوص اپراتور** هستند: یک کلید `manage` کافی نیست. صادر کردن اعتبارنامههای ذخیرهشده (`GET /api/settings/export-json`، `GET /api/db-backups/export`،
`GET /api/db-backups/exportAll`)، بازیابی یک نسخهٔ پشتیبان روی دادههای فعال
(`POST /api/db-backups/import` شامل `dryRun=true`، بازیابی با شناسه از طریق `POST /api/db-backups`،
`POST /api/settings/import-json`)، و حذف نقاط بازیابی (`DELETE /api/db-backups` برای پاکسازی،
و `PATCH /api/db-backups`، زیرا سیاست نگهداری ثبتشده توسط آن، هرس خودکار پس از
هر پشتیبانگیری را کنترل میکند) به نشست داشبورد، هویت CLI محلی یا غیرفعال بودن ورود نیاز دارند. صدور یک
توکن همگامسازی (`POST /api/sync/tokens`) و ایجاد یک توکن دسترسی CLI با سطح `admin`
(`POST /api/cli/tokens`) در تمام حالتهای ورود به نشست داشبورد یا هویت CLI محلی نیاز دارند.
کلیدهای API با هر حوزهٔ دسترسی و توکنهای دسترسی `oma_`، اعتبارنامهٔ اپراتور محسوب نمیشوند: هرگاه
چنین اعتبارنامهای لازم باشد، پاسخ `403` دریافت میکنند. این بررسی در
`src/lib/api/operatorCredential.ts` (`resolveOperatorCredential()` /
`requireOperatorCredential()`) قرار دارد. تغییر تنظیمات ورود نیز فقط مخصوص اپراتور است:
`POST /api/settings/require-login` (تنظیم گذرواژهٔ مدیریت / تغییر وضعیت `requireLogin`) پس از آنکه
یک گذرواژه وجود داشته باشد، فقط این اعتبارنامهها را میپذیرد — پنجرهٔ بوتاسترپ اجرای نخستین
(هنگامی که هنوز گذرواژهای وجود ندارد) بدون تغییر باقی میماند — و نشست داشبورد برای جایگزین کردن
گذرواژه باید `currentPassword` را ارسال کند (`403` در صورت نبودن یا نادرست بودن آن، با ثبت ممیزی
بهصورت `settings.update_failed`). CLI محلی و نمونهای که ورود در آن غیرفعال است، مسیر بازیابی
را حفظ میکنند و میتوانند بدون آن گذرواژهای تنظیم کنند، زیرا هر دو به میزبانی متصلاند که مالک
دایرکتوری داده است.

## خط لوله

```
درخواست ورودی → src/proxy.ts
  → runAuthzPipeline() در src/server/authz/pipeline.ts
    1. حذف هدرهای داخلی مورداعتماد (x-omniroute-auth-*, x-omniroute-route-class)
    2. تولید شناسه درخواست و طبقهبندی مسیر از طریق classifyRoute()
    3. اگر pathname == "/" → هدایت به /dashboard
    4. اگر در حال تخلیه (خاموشسازی تدریجی) باشد و مسیر /api/* باشد → 503
    5. اگر درخواست غیر GET به /api/* باشد → بررسی محافظ checkBodySize()
    6. اگر OPTIONS باشد → پیشدرخواست CORS با وضعیت 204
    7. اگر options.enforce == false باشد → عبور مستقیم همراه با هدرهای کلاس مسیر
    8. در غیر این صورت: POLICIES[routeClass].evaluate(ctx)
       - مجاز  → درج x-omniroute-auth-{kind,id,label,scopes} → NextResponse.next()
       - رد → خطای JSON همراه با correlation_id (صفحات داشبورد → 302 /login)
```

هدرهای داخلی مورداعتماد (تعریفشده در `src/server/authz/headers.ts`) پیش از طبقهبندی، **از درخواستهای ورودی حذف میشوند** — کلاینتها نمیتوانند برای جعل هویت یک موجودیت، `x-omniroute-auth-*` را از پیش مقداردهی کنند.

### قراردادهای سیاست

هر کلاس مسیر، یک سیاست در `src/server/authz/policies/` دارد:

- **`publicPolicy`** (`policies/public.ts`) — همیشه `allow({ kind: "anonymous", id: "anonymous" })` را برمیگرداند.
- **`clientApiPolicy`** (`policies/clientApi.ts`) — Bearer را استخراج کرده و از طریق `validateApiKey()` اعتبارسنجی میکند. تنها زمانی به حالت ناشناس بازمیگردد که پرچم قابلیت مؤثر `REQUIRE_API_KEY` غیرفعال باشد. پرچم مؤثر از طریق `isRequireApiKeyEnabled()` (`بازنویسی پرچم قابلیت پایگاه داده > process.env.REQUIRE_API_KEY > مقدار پیشفرض`) تعیین میشود تا پرچمهای قابلیت داشبورد و متغیرهای محیطی، `/api/v1/*`، `/api/v1beta/*` و نامهای مستعار را بهطور یکسان کنترل کنند؛ خطاهای تعیین مقدار باعث رد بسته درخواست میشوند. درخواستهای دارای نشست داشبورد را در مسیرهای API کلاینت مجاز میداند (از جمله `/api/v1/models` که کاتالوگ مدل داشبورد از آن استفاده میکند).
- **`managementPolicy`** (`policies/management.ts`) — نشست داشبورد یا درخواستهای داخلی همگامسازی مدل را میپذیرد (که با `/api/providers/[name]/(sync-models|models)` تطبیق داده میشوند)، یا اگر `isAuthRequired()` مقدار false برگرداند، بهطور کامل از بررسی صرفنظر میکند. اگر توکن Bearer وجود داشته باشد اما نامعتبر باشد، 403 (`AUTH_001`) و در غیر این صورت 401 برمیگرداند. همچنین پیش از هر شاخه احراز هویت، سطوح محافظ مسیر (LOCAL_ONLY / ALWAYS_PROTECTED) را اعمال میکند — به [سطوح محافظ مسیر](../security/ROUTE_GUARD_TIERS.md) مراجعه کنید. مسیرهای LOCAL_ONLY در `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES` (در حال حاضر: `/api/mcp/`) زمانی از نشانی غیر loopback قابلدسترسی هستند که کلید Bearer دارای حوزه دسترسی `manage` باشد؛ سایر مسیرهای LOCAL_ONLY، صرفنظر از حوزه دسترسی، همچنان بهطور سختگیرانه به loopback محدود میمانند.

یک سیاست موفق، `AuthSubject` را با `kind ∈ { client_api_key, dashboard_session, management_key, anonymous }` برمیگرداند. کنترلکنندههای پاییندستی میتوانند بهجای اجرای مجدد منطق احراز هویت، آن را از طریق `assertAuth(request, "CLIENT_API")` در `src/server/authz/assertAuth.ts` بخوانند.

## فهرست مسیرهای عمومی

`src/shared/constants/publicApiRoutes.ts` فهرست مجاز صریح است:

این فهرست بر اساس **شکل** تقسیم شده است و این تفکیک نقشی حیاتی دارد (GHSA-74g9-q8f6-793h): یک پیشوند با `startsWith()` تطبیق داده میشود، بنابراین هر مسیر مجاوری را که نویسههای ابتدایی یکسانی داشته باشد نیز تطبیق میدهد.
قرار دادن `/api/usage/om-usage` بهعنوان پیشوند، مسیر `/api/usage/om-usage<anything>` را PUBLIC میکرد و Next آن را به `/api/usage/[connectionId]` نگاشت میکند — کنترلگری که احراز هویت مستقلی ندارد.

```ts
// زیردرختهای واقعی. هر ورودی باید با "/" پایان یابد (این موضوع با یک تست واحد بررسی میشود).
PUBLIC_API_ROUTE_PREFIXES = [
  "/api/auth/oidc/",
  "/api/v1/", // در classify بهعنوان CLIENT_API در نظر گرفته میشود، نه بهعنوان عمومیِ «بدون احراز هویت»
  "/api/oauth/",
  "/api/codex/connect/",
  "/api/telegram/",
  "/api/cursor-cli/",
];

// مسیرهای تکی که بهصورت دقیق تطبیق داده میشوند (با یا بدون اسلش انتهایی).
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

// مسیرهای تکیِ فقطخواندنی که تسهیل مبدأ CORS نیز برای آنها اعمال میشود.
PUBLIC_READONLY_CORS_API_ROUTES = [
  "/api/health/ping",
  "/api/monitoring/health",
  "/api/settings/require-login",
];

// مسیر تکیِ فقطخواندنی بدون تسهیل CORS.
PUBLIC_READONLY_API_ROUTES_EXACT = new Set(["/api/health"]);

PUBLIC_READONLY_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);
```

مسیرهای فقطخواندنی **فقط** برای متدهای امن عمومی هستند. توجه: `classifyRoute()` مسیرهای `/api/v1/*` و `/api/v1beta/*` را از حالت پیشفرض PUBLIC مستثنا میکند — این مسیرها همیشه `CLIENT_API` هستند تا سیاست کلید Bearer همچنان اعمال شود.

## افزودن یک مسیر جدید

### الگوی 1 — نقطه پایانی عمومی API کلاینت (احراز هویت Bearer)

مسیرهای زیر `/api/v1/` و `/api/v1beta/` بهطور خودکار بهعنوان `CLIENT_API` طبقهبندی میشوند. میانافزار بررسی Bearer را اعمال میکند؛ کنترلگرهای مسیر نیازی به تکرار آن ندارند، اما در صورت نیاز میتوانند subject را بخوانند.

```typescript
// src/app/api/v1/your-route/route.ts
import { NextRequest, NextResponse } from "next/server";
import { assertAuth } from "@/server/authz/assertAuth";

export async function POST(req: NextRequest) {
  const subject = assertAuth(req, "CLIENT_API");
  // subject.kind === "client_api_key" | "anonymous" | "dashboard_session"
  // ... منطق کنترلگر
}
```

### الگوی 2 — نقطه پایانی مدیریتی (نشست یا Bearer + manage)

از `requireManagementAuth()` در `src/lib/api/requireManagementAuth.ts` استفاده کنید:

```typescript
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";

export async function POST(request: Request) {
  const rejection = await requireManagementAuth(request);
  if (rejection) return rejection;
  // ... منطق کنترلگر
}
```

`requireManagementAuth()` در صورت موفقیت `null` و در صورت خطا یک `Response` از نوع JSON برمیگرداند:

- 401 `AUTH_001` "احراز هویت الزامی است" — هیچ اعتبارنامهای ارائه نشده است
- 403 — Bearer نامعتبر است **یا** Bearer وجود دارد، اما کلید فاقد محدوده `manage` / `admin` است

`hasManageScope(scopes)` برای `"manage"` یا `"admin"` مقدار true برمیگرداند.

### الگوی 3 — افزودن به فهرست مجاز عمومی

مجموعه را بر اساس شکل انتخاب کنید، نه بر اساس سهولت. یک مسیر تکی باید در `PUBLIC_API_ROUTES_EXACT` قرار گیرد (یا برای مسیرهای فقط-GET در `PUBLIC_READONLY_CORS_API_ROUTES`)؛ تنها یک زیردرخت واقعی باید در `PUBLIC_API_ROUTE_PREFIXES` قرار گیرد و **حتماً باید به `/` ختم شود**. قرار دادن یک مسیر تکی در فهرست پیشوندها، تمام مسیرهای مجاوری را که نویسههای ابتدایی یکسانی دارند نیز عمومی میکند — از جمله مسیرهای همخانواده با سگمنت پویا که بعداً اضافه میشوند (GHSA-74g9-q8f6-793h). تستهای واحد موجود در `tests/unit/public-api-routes.test.ts`، `tests/unit/authz/public-route-exact-match.test.ts` و `tests/unit/authz/classify.test.ts` را بهروزرسانی کنید.

## دامنهها

سه فضای نام. هر بررسیکننده فقط رشتههای خود را میخواند. مقایسه جانبی، شامل اینکه چرا `manage` برای `read:compression` در `scopeMatches` شکست میخورد و چرا یک توکن دسترسی `read` نمیتواند `PATCH /api/keys/{id}` را انجام دهد، در [سه فضای نام دامنه](../frameworks/MCP-SERVER.md#three-scope-namespaces) آمده است.

کلیدهای API یک آرایه `scopes` را حمل میکنند (که به صورت JSON در `api_keys.scopes` ذخیره میشود، به `src/lib/db/apiKeys.ts` مراجعه کنید).

### دامنه مدیریت

- `manage` / `admin` — `hasManageScope`. دسترسی Bearer به مسیرهای API مدیریت.
- `mcp:connect`، `self:usage`، `self:account-quota` و `policy:bypass-provider-quota` دامنههای افزودنی با تطابق دقیق هستند. آنها خارج از `MANAGEMENT_API_KEY_SCOPES` قرار دارند. `mcp:connect` فقط بخش غیر-لوپبک `/api/mcp/` را باز میکند.

### دامنههای ابزار MCP

کاتالوگ و قوانین تطابق (رشته یکسان، یا دامنهای اعطا شده که به `*` ختم میشود): [دامنههای ابزار MCP](../frameworks/MCP-SERVER.md#mcp-tool-scopes). `MCP_SCOPE_LIST` در `src/shared/constants/mcpScopes.ts` زیرمجموعه تایپ شده اصلی است، نه آن کاتالوگ کامل. اعمال قوانین در `open-sse/mcp-server/scopeEnforcement.ts` پس از اینکه `resolveCallerScopeContext()` دامنهها را از اطلاعات احراز هویت MCP، فراداده درخواست، یا `OMNIROUTE_MCP_SCOPES` حل و فصل میکند، اجرا میشود. این قابلیت خاموش میماند مگر اینکه `OMNIROUTE_MCP_ENFORCE_SCOPES=true` باشد.

### دامنههای توکن دسترسی

`read` / `write` / `admin` بر روی توکنهای `oma_live_…`، رتبهبندی شده توسط `scopeSatisfies` (`src/lib/accessTokens/scopes.ts`). این رتبه فقط برای اعتبارنامه توکن دسترسی اعمال میشود. به [احراز هویت مدیریت](../guides/MANAGEMENT-AUTH.md) مراجعه کنید.

## کلید تغییر وضعیت الزام احراز هویت

تابع `isAuthRequired()` در `src/shared/utils/apiAuth.ts` تعیین میکند که آیا **هر نوع** احراز هویتی برای یک درخواست اعمال شود یا خیر:

- `settings.requireLogin === false` ← احراز هویت بهصورت سراسری غیرفعال است، بهجز سطحی که همیشه محافظتشده است
  (به [سطوح محافظ مسیر](../security/ROUTE_GUARD_TIERS.md) مراجعه کنید) و فراخوانیهایی که یک اعتبارنامه مورد پذیرش آن را ارائه میدهند؛ این فراخوانیها به همان اعتبارنامه موردنیاز هنگام فعال بودن ورود نیاز دارند: صدور توکنهای همگامسازی،
  ایجاد توکنهای دسترسی CLI در هر محدودهای، ایجاد یک کلید API با محدوده `manage`/`admin`،
  اعطای آن محدوده به یک کلید، یا تولید مجدد یا آشکار کردن چنین کلیدی
  (`requireCredentialForManagementScopedKey()` در `src/lib/api/requireManagementAuth.ts`).
  کلیدهای صرفاً مخصوص استنتاج همچنان بدون محدودیت باقی میمانند.
- پیکربندی نشدن هیچ گذرواژهای **و** نبود متغیر محیطی `INITIAL_PASSWORD` ← حالت راهاندازی اولیه، اجرای راهنمای ورود اولیه و درخواستهای loopback را مجاز میکند، اما درخواستهای شبکهای در معرض دسترسی همچنان به اعتبارنامه نیاز دارند.
- هرگونه خطای DB ← بهصورت بسته و امن شکست میخورد (امنیت بهصورت پیشفرض).

اعمال الزام کلید API سمت کلاینت از `isRequireApiKeyEnabled()` در `src/shared/utils/featureFlags.ts` استفاده میکند، نه خواندن مستقیم `process.env.REQUIRE_API_KEY`. این موضوع برای نمونههای استقراریافته اهمیت دارد: تغییر وضعیت `REQUIRE_API_KEY` در Dashboard ← Feature Flags یک بازنویسی را در DB ذخیره میکند و بلافاصله بر `/v1/*`، `/v1beta/*`، `/models`، `/responses`، `/chat/completions`، `/codex/*` و سایر بررسیهای احراز هویت API کلاینت که از این تابع کمکی مشترک استفاده میکنند، تأثیر میگذارد. اگر مخزن feature flag قابل خواندن نباشد، احراز هویت API کلاینت بهصورت بسته و امن شکست میخورد و به یک کلید نیاز خواهد داشت.

## تغییر ناسازگار — v3.8.0

نقاط پایانی `/api/v1/agents/tasks/*` و `/api/resilience/model-cooldowns` **اکنون به احراز هویت مدیریتی نیاز دارند** (commit `588a0333`). کلاینتهایی که پیشتر یک کلید API عادی را بدون محدودهٔ `manage` ارسال میکردند، پاسخ `403` دریافت میکنند. مهاجرت: یا از طریق داشبورد API Keys محدودهٔ `manage` را به کلید اختصاص دهید، یا از یک نشست واردشده در داشبورد استفاده کنید.

## تغییر رفتار — v3.8.2

`/api/mcp/*` (سرور راه دور MCP) همچنان بهصورت پیشفرض LOCAL_ONLY است، اما اکنون درخواستهای غیر-loopback را زمانی میپذیرد که هدر `Authorization: Bearer <api-key>` دارای محدودهٔ `manage` باشد. این استثنا برای هر مسیر بهطور صریح از طریق `LOCAL_ONLY_MANAGE_SCOPE_BYPASS_PREFIXES` در `src/server/authz/routeGuard.ts` کنترل میشود؛ پیشوند همسطح LOCAL_ONLY یعنی `/api/cli-tools/runtime/*` عمداً قابل دور زدن نیست، زیرا میتواند زیرفرایندهای دلخواه را اجرا کند. درخواستهای ناشناس به `/api/mcp/*` از مبدأ غیر-loopback همچنان پاسخ `403 LOCAL_ONLY` دریافت میکنند — حالت پیشفرض برای هر مسیر جدید LOCAL_ONLY همچنان الزام سختگیرانهٔ loopback است. به [سطوح محافظ مسیر](../security/ROUTE_GUARD_TIERS.md#manage-scope-carve-out) مراجعه کنید.

## آزمایش

- آزمونهای واحد: `tests/unit/authz/` — `classify.test.ts`، `pipeline.test.ts`، `client-api-policy.test.ts`، `management-policy.test.ts`، `public-policy.test.ts`.
- فهرست مجاز عمومی: `tests/unit/public-api-routes.test.ts`.
- اجرای متمرکز: `node --import tsx/esm --test tests/unit/authz/classify.test.ts`.

## اشکالزدایی

پایپلاین همیشه پاسخها را با موارد زیر نشانهگذاری میکند:

```
x-request-id:               <شناسه همبستگی، تکرارشده در بدنه خطاها>
x-omniroute-route-class:    PUBLIC | CLIENT_API | MANAGEMENT
```

برای درخواستهای احراز هویتشده، هدرهای درخواست بالادستی (سمت هندلر) نیز شامل موارد زیر هستند:

```
x-omniroute-auth-kind:      client_api_key | dashboard_session | management_key | anonymous
x-omniroute-auth-id:        key_<چهار نویسه آخر> | "dashboard" | "anonymous"
x-omniroute-auth-label:     (اختیاری)
x-omniroute-auth-scopes:    فهرست جداشده با ویرگول
```

درون هندلرها از `assertAuth(req, expectedClass)` استفاده کنید — اگر میانافزار دور زده شده باشد، این تابع خطای `AuthzAssertionError` را با کد `AUTHZ_NOT_INITIALIZED` ایجاد میکند (که برای شناسایی پسرفتهای پیکربندی در تستها مفید است).

## همچنین ببینید

- [API_REFERENCE.md](../reference/API_REFERENCE.md) — نشانگر احراز هویت برای هر نقطه پایانی
- [COMPLIANCE.md](../security/COMPLIANCE.md) — گزارش حسابرسی برای رویدادهای احراز هویت
- [MCP-SERVER.md](../frameworks/MCP-SERVER.md#three-scope-namespaces) — سه فضای نام دامنه و کاتالوگ دامنه ابزار MCP
- منبع: `src/server/authz/`, `src/lib/api/requireManagementAuth.ts`
