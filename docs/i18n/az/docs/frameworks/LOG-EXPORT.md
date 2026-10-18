# Log export (Azərbaycan dili)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

OmniRoute çağırış jurnallarının xarici analitika anbarına davamlı, artımlı ixracı.

Logs idarəetmə paneli vərəqi sorğu tarixçəsini rotasiya və saxlama müddəti ilə məhdudlaşdırılan SQLite (`call_logs`) verilənlər bazasında saxlayır. Jurnal ixracı eyni qeyd dəstini cədvəl üzrə xaricə göndərir ki, bu qeydlər yerli verilənlər bazasından daha uzun müddət saxlanılsın və digər məlumatlarla birləşdirilə bilsin. İlk təyinat BigQuery-dir; konveyer reyestr şəklindədir, buna görə əlavə təyinatlar artırıla bilər.

---

## 1. İş prinsipi

```
server (konfiqurasiyanın şifrəsini açır + doğrulayır, kursoru uzlaşdırır)
  → IPC-ni başladır → izolə edilmiş exportChild OS prosesi
    → yalnız oxuma üçün storage.sqlite → ortaq zəng jurnalı sorğusu/xəritələndirilməsi
      → asinxron artefakt yüklənməsi → təyinat nöqtəsinin prepare()/send() əməliyyatları
        → paket IPC-si → server kursoru saxlayır → təsdiq IPC-si
          → növbəti paket; tamamlanma IPC-si → server uğuru qeydə alır
```

- **Cədvəl** — bir `JobRegistry` cron tapşırığı, `log_export`; standart olaraq `0 * * * *` (hər saat,
  UTC). `src/lib/initCloudSync.ts` faylında qeydiyyata alınır; `OMNIROUTE_LOG_EXPORT_CRON` ilə dəyişdirilə bilər.
  Hər işəsalma bütün **aktivləşdirilmiş** təyinat nöqtələrini ardıcıl olaraq boşaldır.
- **Kursor** — hər təyinat nöqtəsi üçün `log_export_destinations.cursor_row_id` daxilində saxlanılan
  SQLite-ın gizli `call_logs.rowid` dəyəri. `timestamp` qəsdən kursor kimi istifadə edilmir: çağıranlar
  öz dəyərlərini təqdim edə bilər, buna görə yavaş sorğu daha sonra başlamış sürətli sorğudan sonra
  yazıla bilər və zaman nişanı kursoru onu ötürərdi.
- **Paketləmə** — hər sorğu üçün `batch_size` sətir (standart 500), hər işəsalma üçün
  `max_rows_per_run` sətir (standart 10000); beləliklə, böyük növbə bir işəsalmanı bloklamaq əvəzinə
  bir neçə işəsalma ərzində boşaldılır.
- **Çatdırılma** — kursor yalnız `send()` tamamlandıqdan sonra irəliləyir. Uğursuz paket kursoru
  olduğu yerdə saxlayır, buna görə eyni sətirlər növbəti işəsalmada yenidən sınanır. Təminat həqiqi
  tam olaraq bir dəfə deyil, ən azı bir dəfə çatdırılma və təyinat nöqtəsi tərəfində təkrarların
  aradan qaldırılmasıdır: BigQuery hər sətirə zəng jurnalının id-si ilə açar verir və öz
  təkrarsızlaşdırma pəncərəsi daxilində buna mümkün olan ən yaxşı şəkildə əməl edir.
- **Üst-üstə düşmədən qorunma** — cron işəsalması və `POST .../run` eyni anda işə düşə bilər.
  Artıq boşaldılan təyinat nöqtəsi iki dəfə boşaldılmaq əvəzinə ötürülür (işəsalma nəticəsində
  `skipped: true`), beləliklə paralel işəsalma paketi yenidən göndərə və ya kursoru geriyə yaza bilməz.
- **Təmizləmədən sonra bərpa** — `cursor_row_id` dəyəri `MAX(rowid)` dəyərindən yuxarı olarsa
  (bütün cədvəl təmizlənib və sətir id-ləri yenidən başlayıb), icraçı həmişəlik kor qalmaq əvəzinə
  kursoru 0-a qaytarır.

### İzolə edilmiş icraçı və limitlər

Node üzərində hər təyinat nöqtəsinin işəsalması ayrıca, qısaömürlü OS alt prosesi başladır
(IPC ilə `child_process`, `worker_threads` deyil). Gövdələrin oxunması, faydalı yük JSON-unun
təhlili/serializasiyası, təyinat nöqtəsinin `prepare()` əməliyyatı və təyinat nöqtəsinə şəbəkə
G/Ç-si serverin hadisə dövrəsində deyil, həmin prosesdə icra olunur. IPC üzərindən yalnız
konfiqurasiya və kiçik irəliləyiş mesajları ötürülür; ixrac edilmiş qeydlər heç vaxt serverə
qayıtmır. Cron tapşırığı və İndi işə sal marşrutu eyni açıq nəticəni və üst-üstə düşmədən qorunmanı saxlayır.

Alt proses serverin müəyyən edilmiş `DATA_DIR/storage.sqlite` faylını `node:sqlite` vasitəsilə,
`busy_timeout=5000` və `query_only=ON` ilə yalnız oxuma rejimində açır. O, heç bir DB singleton-u
idxal etmir və heç bir miqrasiya, ehtiyat nüsxələmə və ya SQLite yeniləməsi həyata keçirmir.
Çatışmayan/zədələnmiş artefaktın uçotu (zədələnmiş artefakt üçün UPDATE daxil olmaqla) yalnız
idarəetmə panelinin təfərrüat yolunda qalır. Hər iki yol saf təfərrüat həlledicisini paylaşır;
ixrac asinxron fayl sistemi oxumalarından və eyni artefakt → köhnə daxili → köhnə disk → yoxdur
həll ardıcıllığından istifadə edir. Alt proses oxuyucunu açanda işəsalma maksimum əlavəetmə
sətir id-sinin anlıq görüntüsünü götürür; sonrakı əlavələr növbəti işəsalmanı gözləyir. Bu,
uzunömürlü SQLite tranzaksiyası deyil, əlavəetmə sərhədidir: WAL yazıcıları və yoxlama nöqtələri
şəbəkə gözləmələri zamanı sərbəst qalır. Mövcud sətirlərin yenilənməsi/silinməsi bu sərhədlə
dondurulmur.

Hər qəbul edilmiş paketdən sonra alt proses təsdiqi gözləyir. Server əvvəlcə kursoru
`advanceLogExportCursor` ilə saxlayır, sonra `ack` göndərir; bundan əvvəl növbəti paket başlamır.
Göndərmə xətası, qəza və ya taym-aut həmin paketin kursorunu irəlilətmədən uğursuzluğu qeydə alır.
Daha əvvəl təsdiqlənmiş paketlər saxlanılmış qalır; ən çoxu təsdiqlənməmiş bir paket yenidən
göndərilə bilər. Uğur yalnız `done` mesajından və alt prosesin xətasız çıxışından sonra qeydə alınır.
Uğursuzluqlar alt prosesi SIGTERM ilə dayandırır, 500 ms-dən sonra SIGKILL-ə keçir və icraçı
prosesin bağlanmasını gözləyir.

| Mühit dəyişəni                                | Standart | Məqsəd                                     |
| --------------------------------------------- | -------- | ------------------------------------------ |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000   | Hər təyinat nöqtəsi üçün ümumi vaxt limiti |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024     | Alt prosesin V8 köhnə sahə limiti, MB      |

Yanlış/müsbət olmayan/tam ədəd olmayan dəyərlər üçün standartlar istifadə olunur. Yığın ayarı
ümumi RSS limiti deyil; çox böyük paketlər yenə də alt prosesin yaddaşını tükəndirə və işəsalmanı
təhlükəsiz şəkildə uğursuz edə bilər. Standart 1024 MB, gövdələr aktiv olduqda 512 KiB-lıq
artefaktlardan ibarət standart 500 sətirlik paket üçün, BigQuery-nin bayt hissələri ilə JSON
serializasiyası daxil olmaqla, ehtiyat sahəsi saxlayır. Bu, gövdələri olan 10000 sətirlik paketi
təhlükəsiz etmir. V8 yığın yaddaşının tükənməsi əməli tədbir tələb edən uğursuzluq qeydə alır:
paket ölçüsünü azaldın və ya `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` dəyərini artırın;
kursor son təsdiqlənmiş paketdə qalır. Tarixi daxili/disk gövdələri müasir artefakt limiti ilə
əhatə olunmur. Operatorlar, xüsusilə yaddaşı məhdud konteynerlər daxilində, RSS-i ayrıca
planlaşdırmalıdır.

Alt proses yalnız müəyyən edilmiş `DATA_DIR`, `NODE_ENV`, açıq şəkildə verilmiş `TZ` (köhnə fayl
adlarında yerli vaxtın müəyyən edilməsi), mövcud olduqda `ELECTRON_RUN_AS_NODE` və aşağıdakı
xaricə yönələn girişləri miras alır: `HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY`
(və onların kiçik hərfli formaları), `OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`,
`NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`. Qlobal Undici dispetçeri serverin saf
mühit-proksi həllini və `NO_PROXY` daxil olmaqla lokal hostdan yan keçmə qaydalarını paylaşır;
o, `proxyFetch.ts` faylını və ya onun DB/funksiya bayraqlarını idxal etmir. Proksi giriş məlumatları
ötürülən çıxışdan və qeydə alınan xətalardan gizlədilir. Təyinat nöqtəsinin giriş məlumatları
yalnız bir başlanğıc IPC mesajında ötürülür, heç vaxt argv və ya mühitdə deyil; çıxış/xəta
ötürülməsi prefikslənir və təmizlənir. Hər cron işəsalmasında Node-un SQLite xəbərdarlığının
təkrarlanmasının qarşısını almaq üçün alt prosesin icra arqumentlərində yalnız `ExperimentalWarning`
deaktiv edilir; digər xəbərdarlıq növləri görünən qalır.

Təyinat modulları Next.js/server-only asılılıqları olmadan import edilə bilməlidir. Mövcud
BigQuery implementasiyası artıq bu müqaviləyə uyğundur. Giriş tokeni keşləri icralar arasında
deyil, yalnız alt prosesin icrası müddətində qalır. Node dəstəklənən icra mühitidir (`package.json` engines), lakin README-dəki Bun
quraşdırma bölməsi və `Dockerfile.bun` həmçinin `bun:sqlite` (`src/lib/db/core.ts` / adapterlər) istifadə edən
istehsal uyğunluğu yolunu təqdim edir. Buna görə Bun altında export-lar əvvəlki
prosesdaxili yolu saxlayır və birdəfəlik xəbərdarlıq verir: alt prosesin yaddaş yığını/taym-aut izolyasiyası əlçatan deyil. Hadisə dövrəsi
və OOM izolyasiyası üçün Node istifadə edin; Bun burada yalnız inkişaf üçün nəzərdə tutulmuş hesab edilmir.

`includeBodies` aktiv olduqda, saatlıq faydalı yük ehtiyatı toplamaq əvəzinə
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"` kimi dəqiqə səviyyəli intervala üstünlük verin.
Paket və sətir limitləri yenə də hər icranı məhdudlaşdırır. Prosesin işə salınması xərci hər icrada hər təyinat üçün ödənilir;
bu, ümumi CPU istifadəsini azaltmaq üçün deyil, server hadisə dövrəsinin izolyasiyası üçün kiçik başlanğıc xərcini qəbul edir.

### Faydalı yüklər (promtlar və tamamlamalar)

Standart olaraq export yalnız Logs **siyahısının** göstərdiyi xülasə sahələrini daşıyır.
**Promtları və cavabları export et** (`includeBodies`) seçiminin aktivləşdirilməsi əlavə olaraq hər çağırış üçün
Logs **təfərrüat** panelinin göstərdiyi məlumatları göndərir:

| Sahə                             | Saxladığı məlumat                                                          |
| -------------------------------- | -------------------------------------------------------------------------- |
| `request_body` / `response_body` | İdarə panelinin göstərdiyi formada çağırışın faydalı yükləri               |
| `pipeline_route_decision`        | Routerin hansı hədəfi və modeli seçdiyi                                    |
| `pipeline_client_request`        | Müştərinin göndərdiyi ilkin sorğu, tam olduğu kimi                         |
| `pipeline_openai_request`        | Daxili OpenAI formatına çevrildikdən sonra                                 |
| `pipeline_provider_request`      | Təchizatçı dialektində yuxarı axına faktiki göndərildiyi formada           |
| `pipeline_provider_response`     | Yuxarı axından gələn ilkin cavab                                           |
| `pipeline_client_response`       | Çağırış edən tərəfə geri təqdim edilən məlumat                             |
| `pipeline_error`                 | Uğursuz çağırış üçün konveyer səviyyəli xəta təfərrüatı                    |
| `bodies_truncated`               | Yuxarıdakı sahələrdən hər hansı biri `maxBodyBytes` limitinə çatdıqda True |

Bu, promt məzmunudur, ona görə də **standart olaraq deaktivdir** və qəsdən hər təyinat üzrə ayrıca seçimdir.
Göndərilən məlumat idarə panelinin göstərdiyi məlumatdır, çünki export və `getCallLogById` eyni təfərrüat
həllindən istifadə edir: faydalı yüklər
yazılarkən artıq şəxsiyyəti müəyyən edən məlumatlardan təmizlənir və məxfi məlumatlar redaktə olunur; `noLog` API açarı ilə edilən
çağırış isə heç bir faydalı yük saxlamır, buna görə export ediləcək heç nə olmur.

Faydalı yüklər fayl sistemi artefaktından hər sətir üzrə oxunur, buna görə hidratasiya yalnız bunu tələb edən
təyinatlar üçün icra olunur. Çatışmayan və ya zədələnmiş artefakt paketin uğursuz olmasına və kursorun ilişib qalmasına səbəb olmaq əvəzinə,
xülasəsini null faydalı yüklərlə export edir.

`maxBodyBytes` (standart olaraq 262144) hər sahəni məhdudlaşdırır. Daha uzun faydalı yüklər **silinmək əvəzinə
qısaldılır** — kəsilmiş promt yenə də «nə soruşulmuşdu» sualını cavablandırır — və sətir
`bodies_truncated` ilə işarələnir. Hissə-hissə axınla ötürülən deltalar export edilmir; yığılmış cavab artıq
`pipeline_provider_response` və `pipeline_client_response` daxilindədir.

---

## 2. Fayllar

| Hissə                       | Yerləşmə yeri                                |
| --------------------------- | -------------------------------------------- |
| Təyinat müqaviləsi          | `src/lib/logExport/types.ts`                 |
| Reyestr                     | `src/lib/logExport/registry.ts`              |
| Məxfi məlumatların emalı    | `src/lib/logExport/secrets.ts`               |
| İcraçı (ana IPC)            | `src/lib/logExport/runner.ts`                |
| Prosesin həyat dövrü        | `src/lib/logExport/childRunner.ts`           |
| Alt prosesin giriş nöqtəsi  | `src/lib/logExport/exportChild.ts`           |
| Yalnız oxumaq üçün açıcı    | `src/lib/db/logExportReadOnly.ts`            |
| Ortaq sorğu/xəritələndirmə  | `src/lib/usage/callLogExportQueries.ts`      |
| Təfərrüat həlledicisi       | `src/lib/usage/callLogDetailResolver.ts`     |
| API proyeksiyası            | `src/lib/logExport/presenter.ts`             |
| BigQuery təyinatı           | `src/lib/logExport/destinations/bigquery.ts` |
| Google SA autentifikasiyası | `src/lib/logExport/googleServiceAccount.ts`  |
| Zəng jurnalının mənbəyi     | `src/lib/usage/callLogExportSource.ts`       |
| Davamlı yaddaş              | `src/lib/db/logExportDestinations.ts`        |
| Cron tapşırığı              | `src/lib/jobs/logExportJob.ts`               |
| REST qatı                   | `src/app/api/log-export/`                    |
| İdarəetmə paneli səhifəsi   | `src/app/(dashboard)/dashboard/log-export/`  |

Sxem: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

Bütün marşrutlar idarəetmə autentifikasiyasından keçir (`requireManagementAuth`). Məxfi məlumatlar heç vaxt qaytarılmır:
saxlanmış məxfi məlumat literal `__stored__` kimi qaytarılır və yeniləmə zamanı həmin dəyərin geri göndərilməsi
saxlanmış giriş məlumatını qoruyur.

Tipi məxfi məlumat tələb edən təyinatın yaradılması və ya yenilənməsi üçün **`STORAGE_ENCRYPTION_KEY`
tələb olunur**. Bu dəyişən olmadan `encrypt()` səssiz şəkildə dəyəri dəyişmədən ötürür, buna görə giriş məlumatını
SQLite-a açıq mətn şəklində yazmaq əvəzinə sorğu 400 xətası ilə rədd edilir (Telegram webhook-unun tətbiq etdiyi eyni qoruma).

| Metod    | Yol                                      | Məqsəd                                                               |
| -------- | ---------------------------------------- | -------------------------------------------------------------------- |
| `GET`    | `/api/log-export/types`                  | Təyinat tipləri və onların konfiqurasiya sahələrinin siyahısı        |
| `GET`    | `/api/log-export/destinations`           | Təyinatları siyahılamaq (məxfi məlumatlar gizlədilir)                |
| `POST`   | `/api/log-export/destinations`           | Təyinat yaratmaq                                                     |
| `GET`    | `/api/log-export/destinations/{id}`      | Bir təyinatı oxumaq                                                  |
| `PUT`    | `/api/log-export/destinations/{id}`      | Adı / aktivlik vəziyyətini / konfiqurasiyanı / paketləməni yeniləmək |
| `DELETE` | `/api/log-export/destinations/{id}`      | Silmək                                                               |
| `POST`   | `/api/log-export/destinations/{id}/test` | Giriş məlumatlarını yoxlamaq, heç nə yazmamaq                        |
| `POST`   | `/api/log-export/destinations/{id}/run`  | İndi boşaltmaq; planlaşdırılmış icra ilə eyni yol                    |
| `GET`    | `/api/log-export/status`                 | Cron vəziyyəti, son icralar, hər hədəf üzrə növbə                    |

İstifadəçi interfeysini ümumi edən `GET /api/log-export/types` marşrutudur: idarə panelindəki forma
qaytarılan sahə deskriptorları əsasında yaradılır, buna görə yeni təyinat üçün istifadəçi interfeysində dəyişiklik tələb olunmur.

---

## 4. BigQuery təyinatı

Konfiqurasiya açarları (`type: "bigquery"`):

| Açar                 | Qeydlər                                                                     |
| -------------------- | --------------------------------------------------------------------------- |
| `projectId`          | Dataset-i saxlayan GCP layihəsi                                             |
| `datasetId`          | `[A-Za-z0-9_]+`                                                             |
| `tableId`            | `[A-Za-z0-9_]+`                                                             |
| `location`           | Yalnız dataset yaradılmalı olduqda istifadə olunur (standart `EU`)          |
| `serviceAccountJson` | Xidmət hesabı açarı. Məxfidir: saxlanarkən şifrələnir, heç vaxt qaytarılmır |
| `autoCreate`         | İlk ixrac zamanı dataset və cədvəli yaratmaq (standart `true`)              |

Xidmət hesabına hədəf cədvəldə `bigquery.tables.updateData`, həmçinin `autoCreate` aktiv olduqda
`bigquery.datasets.create` / `bigquery.tables.create` icazələri lazımdır.

Konfiqurasiya edilmiş paket HTTP deyil, **kursor** vahididir: `send()` onu maksimum 500 sətirdən ibarət
insertAll çağırışlarına bölür, buna görə böyük `batch_size` BigQuery-nin 10 MB-lıq sorğu limitini aşa bilməz.
Müvəqqəti statuslar (408/429/500/502/503/504) eyni insertIds-lərdən təkrar istifadə edilməklə eksponensial
gecikmə ilə üç dəfəyədək yenidən sınanır; autentifikasiya və sxem xətaları isə icranı boş yerə uzatmamaq üçün
ilk cəhddə istisna yaradır.

Bir neçə an əvvəl yaradılmış cədvəl hələ axın son nöqtəsinə görünmür və həmin son nöqtə bir neçə saniyə ərzində
404 cavabı verir. Bu 404 yenidən sınanır, lakin **yalnız cədvəl bu icra zamanı yaradılıbsa** —
həqiqətən mövcud olmayan cədvəl üçün əməliyyat dərhal uğursuz olur. Nəzərə alın ki, yaxınlarda silinmiş cədvəlin
adı ilə yenidən cədvəl yaratmaq BigQuery-nin bir neçə dəqiqə ərzində axın əlavələrini rədd etməsinə səbəb olur;
bu, silib-sonra-yenidən-yaratma əməliyyatının xüsusiyyətidir, buna görə cədvəli silib yenidən əlavə etmək əvəzinə
yeni cədvəl adına üstünlük verin.

**Qismən xəta boş olmayan `insertErrors[]` ilə HTTP 200 cavabı kimi gəlir.** Bu, xəta kimi qəbul edilir və
istisna yaradır; məhz bu davranış kursorun BigQuery-nin heç vaxt qəbul etmədiyi sətirləri keçərək irəliləməsinin
qarşısını alır; `tests/unit/log-export-bigquery.test.ts` bu davranışı sabitləşdirir.

Nəqliyyat adi REST vasitəsilə həyata keçirilir — öz imzası ilə imzalanmış RS256 təsdiqi
`https://oauth2.googleapis.com/token` ünvanında giriş tokeni ilə dəyişdirilir, sonra sətirlər `tabledata.insertAll`
ünvanına göndərilir. Heç bir Google SDK əlavə edilmir. Giriş tokenləri proses daxilində hər (xidmət hesabı, əhatə dairəsi)
cütü üzrə keşlənir.

Yaradılmış cədvəldə Jurnallar bölməsinin hər sahəsi üçün bir sütun və əlavə olaraq `exported_at` sütunu var;
cədvəlin quruluşu zəng jurnallarının faktiki sorğulanma üsuluna uyğunlaşdırılıb:

- **`timestamp` üzrə günlük bölmələrə ayrılır**, beləliklə tarixlə məhdudlaşdırılmış sorğu yalnız həmin günləri skan edir.
- **`api_key_name`, `provider`, `model`, `status` üzrə klasterləşdirilir** (bu ardıcıllıqla), beləliklə əməliyyatı
  kimin icra etdiyinə, hara göndərildiyinə və ya uğursuz olub-olmadığına görə filtrləmə hər bölmənin daxilindəki
  blokları ixtisar edir. BigQuery maksimum dörd klasterləşdirmə sütununa icazə verir və ardıcıllıq vacibdir:
  yalnız `api_key_name` üzrə filtr blokları ixtisar edir, yalnız `status` üzrə filtr isə etmir.
- **`partitionExpirationDays` vasitəsilə istəyə bağlı bölmə saxlanma müddəti** (`0` hər şeyi saxlayır), cədvəl
  yaradılarkən tətbiq edilir.

Hər iki parametr yaradılma zamanı tətbiq olunur. Mövcud cədvəl hazırkı strukturunu saxlayır, buna görə də onları tətbiq etmək istəyirsinizsə, təyinatı yeni cədvəl ID-sinə yönəldin.

`tests/unit/log-export-bigquery.test.ts` mapperin və cədvəl sxeminin bir-birinə tam uyğun qalmasını yoxlayır; beləliklə, yeni çağırış jurnalı sütunu ixrac zamanı səssizcə buraxıla bilməz.

Paketlər **həm** sətir sayına, həm də seriallaşdırılmış baytların həcminə görə hissələrə bölünür. Faydalı yüklər ixrac edildikdə təkcə sətir sayı kifayət etmir: sorğuları ehtiva edən 500 sətir onlarla meqabayt həcmində ola bilər və insertAll 10 MB-dan böyük sorğunu rədd edir. Hansı həddə əvvəl çatılmasından asılı olaraq, hissələr 500 sətirdə və ya 9 MB-da tamamlanır.

---

## 5. Təyinat yerinin əlavə edilməsi

1. `LogExportDestinationType` ixrac edən `src/lib/logExport/destinations/<name>.ts` faylını yaradın:
   Zod `configSchema`, UI üçün `fields` deskriptor massivi, `secretFields` və
   `test()` / `prepare()` / `send(records)` qaytaran `createClient(config)`.
2. Onu `src/lib/logExport/registry.ts` faylındakı `DESTINATIONS` massivinə əlavə edin.
3. Testləri `tests/unit/` qovluğu altında yazın.

Dəyişiklik bundan ibarətdir: məlumatların daimi saxlanması, cron tapşırığı, REST qatı, məxfi məlumatların şifrələnməsi və
idarə paneli forması — hamısı reyestrdən məlumat oxuyur.

Yeni təyinat yeri üçün iki qayda:

- Qismən nasazlıq olduqda `send()` **mütləq xəta atmalıdır**. Uğurlu tamamlanma “təyinat yerində bu sətirlər var” deməkdir
  və kursor həmişəlik onların sonrasına keçir.
- İstifadəçinin təqdim etdiyi URL-i qəbul edən təyinat yeri sorğu göndərməzdən əvvəl onu,
  vebhuklarda olduğu kimi, `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`) vasitəsilə doğrulamalıdır.
  BigQuery üçün buna ehtiyac yoxdur: onun hostları sabitdir.

---

## 6. İstifadəsi

- **İdarə paneli**: İnteqrasiyalar → Jurnal ixracı. Təyinat yeri əlavə edin, sətir yazmadan giriş məlumatlarını
  yoxlamaq üçün **Test** düyməsini işə salın, sonra isə onu aktivləşdirin.
- **Növbə**: hər təyinat yeri kartında gözləyən sətirlər və kursor göstərilir; `GET
/api/log-export/status` eyni göstəriciləri, həmçinin son 20 tapşırıq icrasını qaytarır.
- **Bir təyinat yerindəki nasazlıq digərlərinin uğursuz olmasına səbəb olmur** — icra xülasəsi hər təyinat yerinin
  statusunu `last_status` / `last_error` sahələrində qeyd edir, tapşırıq icraları tarixçəsi isə ümumi nəticəni saxlayır.
- **Təyinat yerinin silinməsi onun kursorunu da silir.** Onu yenidən əlavə etdikdə proses saxlanılan ən köhnə
  çağırış jurnalından başlayır və təyinat yerində artıq mövcud ola biləcək sətirlər yenidən göndərilir. BigQuery-də hər sətir üçün
  `insertId` bunu yalnız BigQuery-nin öz dublikatları aradan qaldırma zaman pəncərəsi daxilində kompensasiya edir; buna görə də
  təyinat yerini silmək əvəzinə deaktiv etməyə üstünlük verin.
