# Log export (Oʻzbekcha)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

OmniRoute chaqiruv jurnallarini tashqi tahlil omboriga uzluksiz, bosqichma-bosqich eksport qilish.

Logs boshqaruv paneli ichki oynasi soʻrovlar tarixini SQLite (`call_logs`) bazasida saqlaydi; uning hajmi
rotatsiya va saqlash muddati bilan cheklangan. Jurnallarni eksport qilish ayni yozuvlar toʻplamini jadval
asosida tashqi manzilga yuboradi, shunda ular mahalliy maʼlumotlar bazasidan uzoqroq saqlanishi va boshqa
maʼlumotlar bilan birlashtirilishi mumkin. BigQuery — birinchi manzil; konveyer reyestr sifatida qurilgan,
shu sababli boshqa manzillarni qoʻshish mumkin.

---

## 1. Qanday ishlaydi

```
server (konfiguratsiyani shifrdan chiqarish + tekshirish, kursorni muvofiqlashtirish)
  → IPC’ni ishga tushirish → izolyatsiyalangan exportChild OS jarayoni
    → faqat oʻqish uchun storage.sqlite → umumiy qoʻngʻiroqlar jurnali soʻrovi/xaritalash
      → asinxron artefakt yuklash → manzil prepare()/send()
        → paketli IPC → server kursorni saqlaydi → tasdiqlash IPC’si
          → keyingi paket; yakunlash IPC’si → server muvaffaqiyatni qayd etadi
```

- **Jadval** — bitta `JobRegistry` cron vazifasi, `log_export`, standart qiymati `0 * * * *` (har soatda,
  UTC). `src/lib/initCloudSync.ts` ichida roʻyxatdan oʻtkaziladi; `OMNIROUTE_LOG_EXPORT_CRON` orqali
  almashtirish mumkin. Har bir ishga tushishda barcha **yoqilgan** manzillar ketma-ket boʻshatiladi.
- **Kursor** — SQLite’ning yashirin `call_logs.rowid` qiymati, har bir manzil uchun
  `log_export_destinations.cursor_row_id` ichida saqlanadi. `timestamp` ataylab kursor sifatida
  ishlatilmaydi: chaqiruvchilar oʻz qiymatini taqdim etishi mumkin, shu sababli sekin soʻrov keyinroq
  boshlangan tezroq soʻrovdan soʻng yozilishi mumkin va vaqt tamgʻasi kursori uni oʻtkazib yuboradi.
- **Paketlash** — har bir soʻrov uchun `batch_size` qator (standart 500), har bir ishga tushirish
  uchun `max_rows_per_run` qator (standart 10000); shu tariqa katta navbat bitta ishga tushirishni
  bloklash oʻrniga bir necha ishga tushirish davomida boʻshatiladi.
- **Yetkazib berish** — kursor faqat `send()` bajarilgandan keyin oldinga siljiydi. Muvaffaqiyatsiz
  paket kursorni oʻz joyida qoldiradi, shuning uchun ayni qatorlar keyingi ishga tushirishda qayta
  yuboriladi. Kafolat haqiqiy aynan bir martalik yetkazib berish emas, balki kamida bir marta
  yetkazib berish va manzil tomonida dublikatlarni yoʻq qilishdir: BigQuery har bir qatorni
  qoʻngʻiroqlar jurnali identifikatori boʻyicha kalitlaydi va buni oʻzining dublikatlarni aniqlash
  oynasi doirasida imkon qadar taʼminlaydi.
- **Ustma-ust bajarilishdan himoya** — cron ishga tushishi va `POST .../run` bir vaqtda sodir
  boʻlishi mumkin. Boʻshatilayotgan manzil ikkinchi marta boʻshatilish oʻrniga oʻtkazib yuboriladi
  (ishga tushirish natijasida `skipped: true`), shu sababli parallel ishga tushirish paketni qayta
  yubora yoki kursorni orqaga yoza olmaydi.
- **Tozalashdan keyin tiklanish** — agar `cursor_row_id` qiymati `MAX(rowid)` qiymatidan yuqori
  boʻlib qolsa (butun jadval tozalangan va rowid qiymatlari qaytadan boshlangan boʻlsa), bajaruvchi
  butunlay koʻr boʻlib qolmaslik uchun kursorni 0 ga qaytaradi.

### Izolyatsiyalangan bajaruvchi va cheklovlar

Node’dagi har bir manzil ishga tushirilganda alohida, qisqa muddatli OS bola jarayoni
(`worker_threads` emas, IPC’li `child_process`) boshlanadi. Tana qismini oʻqish, foydali yuk
JSON’ini tahlil qilish/serializatsiyalash, manzilning `prepare()` amali va manzilning tarmoq I/O
operatsiyalari server hodisalar siklida emas, balki shu jarayonda bajariladi. IPC orqali faqat
konfiguratsiya va kichik jarayon xabarlari oʻtadi; eksport qilingan yozuvlar serverga hech qachon
qaytmaydi. Cron vazifasi va Hozir ishga tushirish marshruti bir xil ommaviy natija hamda ustma-ust
bajarilishdan himoyani saqlab qoladi.

Bola jarayon server aniqlagan `DATA_DIR/storage.sqlite` faylini `node:sqlite` yordamida faqat
oʻqish rejimida, `busy_timeout=5000` va `query_only=ON` sozlamalari bilan ochadi. U hech qanday
DB singletonini import qilmaydi va migratsiyalar, zaxira nusxalar yoki SQLite yangilanishlarini
bajarmaydi. Yetishmayotgan/buzilgan artefaktlar hisobini yuritish (jumladan, buzilgan artefakt
uchun UPDATE) faqat boshqaruv panelining tafsilotlar yoʻlida qoladi. Ikkala yoʻl ham sof tafsilotlar
aniqlagichidan foydalanadi; eksport asinxron fayl tizimi oʻqishlaridan va bir xil artefakt →
eski inline → eski disk → yoʻq aniqlash tartibidan foydalanadi. Bola jarayon oʻz oʻqish vositasini
ochganda, ishga tushirish maksimal kiritish rowid qiymatini qayd etadi; keyinroq kiritilgan yozuvlar
navbatdagi ishga tushirishni kutadi. Bu uzoq muddatli SQLite tranzaksiyasi emas, balki kiritish
chegarasidir: tarmoq kutishlari davomida WAL yozuvchilari va nazorat nuqtalari erkin ishlashda
davom etadi. Mavjud qatorlarning yangilanishi yoki oʻchirilishi bu chegara bilan muzlatilmaydi.

Har bir qabul qilingan paketdan keyin bola jarayon tasdiqni kutadi. Server avval kursorni
`advanceLogExportCursor` orqali saqlaydi, soʻng `ack` yuboradi; undan oldin keyingi paket
boshlanmaydi. Yuborishdagi xato, avariya yoki vaqt tugashi ushbu paket kursorini oldinga
siljitmasdan xatoni qayd etadi. Oldin tasdiqlangan paketlar saqlangan holda qoladi; koʻpi bilan
tasdiqlanmagan bitta paket qayta yuborilishi mumkin. Muvaffaqiyat faqat `done` xabaridan va bola
jarayon xatosiz yakunlangandan keyin qayd etiladi. Xatoliklar bola jarayonni SIGTERM bilan
toʻxtatadi, 500 ms dan keyin esa SIGKILL’ga kuchaytiriladi; bajaruvchi jarayon yopilishini kutadi.

| Muhit oʻzgaruvchisi                           | Standart | Maqsad                                            |
| --------------------------------------------- | -------- | ------------------------------------------------- |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000   | Har bir manzil uchun umumiy vaqt chegarasi        |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024     | Bola V8 eski xotira maydonining MB’dagi chegarasi |

Notoʻgʻri, musbat boʻlmagan yoki butun son boʻlmagan qiymatlar uchun standart qiymatlar
ishlatiladi. Heap sozlamasi umumiy RSS chegarasi emas; juda katta paketlar hali ham bola jarayon
xotirasini tugatib, ishga tushirishni xavfsiz tarzda muvaffaqiyatsiz yakunlashi mumkin.
Standart 1024 MB qiymati tana qismlari yoqilgan holda 512 KiB artefaktlardan iborat standart
500 qatorli paket, jumladan BigQuery’ning bayt boʻlaklariga ajratilgan JSON serializatsiyasi uchun
yetarli zaxira qoldiradi. Bu tana qismlaridan iborat 10000 qatorli paketni xavfsiz qilmaydi.
V8 heap xotirasining tugashi amaliy chorasi koʻrsatilgan xatoni qayd etadi: paket hajmini
kamaytiring yoki `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` qiymatini oshiring; kursor oxirgi
tasdiqlangan paketda qoladi. Tarixiy inline/disk tana qismlari zamonaviy artefakt cheklovi bilan
qamrab olinmaydi. Operatorlar, ayniqsa xotirasi cheklangan konteynerlarda, RSS’ni alohida
rejalashtirishi kerak.

Bola jarayon faqat aniqlangan `DATA_DIR`, `NODE_ENV`, aniq koʻrsatilgan `TZ` (eski fayl nomlaridagi
mahalliy vaqtni aniqlash), mavjud boʻlganda `ELECTRON_RUN_AS_NODE` va quyidagi chiquvchi kirish
maʼlumotlarini meros qilib oladi: `HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (hamda
ularning kichik harfli shakllari), `OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`,
`SSL_CERT_FILE`, `SSL_CERT_DIR`. Global Undici dispetcheri serverning muhit proksisini sof aniqlash
va mahalliy xostni chetlab oʻtish qoidalaridan, jumladan `NO_PROXY`’dan foydalanadi; u
`proxyFetch.ts` yoki uning DB/funksiya bayroqlarini import qilmaydi. Proksi hisob maʼlumotlari
yoʻnaltirilgan chiqish va qayd etilgan xatolardan yashiriladi. Manzil hisob maʼlumotlari argv yoki
muhit orqali emas, faqat bitta boshlash IPC xabarida uzatiladi; chiqish/xatolarni yoʻnaltirishga
prefiks qoʻshiladi va ular maxfiy maʼlumotlardan tozalanadi. Har bir cron ishga tushishida Node’ning
SQLite ogohlantirishi takrorlanmasligi uchun bola jarayonning exec argumentlarida faqat
`ExperimentalWarning` oʻchiriladi; boshqa ogohlantirish turlari koʻrinib turadi.

Qabul qiluvchi modullar Next.js/faqat serverga xos bogʻliqliklarsiz import qilinishi kerak. Mavjud
BigQuery implementatsiyasi bu talabga allaqachon javob beradi. Kirish tokeni keshlari ishga tushirishlar
orasida emas, faqat yordamchi jarayon davomida saqlanadi. Node qoʻllab-quvvatlanadigan bajarish muhitidir
(`package.json` dagi engines), ammo README faylidagi Bun oʻrnatish boʻlimi va `Dockerfile.bun` ham
`bun:sqlite` (`src/lib/db/core.ts` / adapterlar) yordamida ishlab chiqarish muhiti uchun moslik yoʻlini
taqdim etadi. Shu sababli, Bun ostida eksportlar avvalgi jarayon ichidagi yoʻlni saqlab qoladi va bir
martalik ogohlantirish chiqaradi: yordamchi jarayon xotirasi/taym-autini izolyatsiya qilish imkoni mavjud
emas. Hodisalar sikli va OOM izolyatsiyasi uchun Node’dan foydalaning; bu yerda Bun faqat ishlab chiqish
muhitiga xos deb hisoblanmaydi.

`includeBodies` yoqilganda, bir soatlik foydali yuk navbatini toʻplash oʻrniga
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"` kabi daqiqalar darajasidagi davriylikni afzal koʻring.
Paket va qator cheklovlari har bir ishga tushirishni baribir chegaralaydi. Jarayonni ishga tushirish
xarajati har bir qabul qiluvchi uchun har bir ishga tushirishda toʻlanadi; bu jami CPU sarfini
kamaytirish uchun emas, balki kichik ishga tushirish xarajati evaziga server hodisalar siklini
izolyatsiya qilish uchun xizmat qiladi.

### Foydali yuklar (promptlar va yakuniy javoblar)

Standart holatda eksport faqat Logs **roʻyxati** koʻrsatadigan umumlashtirilgan maydonlarni oʻz ichiga
oladi. **Promptlar va javoblarni eksport qilish** (`includeBodies`) funksiyasini yoqish orqali har bir
chaqiruv uchun Logs **tafsilotlar** panelida koʻrsatiladigan maʼlumotlar ham yuboriladi:

| Maydon                           | Unda saqlanadigan maʼlumot                                             |
| -------------------------------- | ---------------------------------------------------------------------- |
| `request_body` / `response_body` | Boshqaruv paneli koʻrsatadigan chaqiruv foydali yuklari                |
| `pipeline_route_decision`        | Router tanlagan maqsad va model                                        |
| `pipeline_client_request`        | Mijoz yuborgan aynan oʻsha xom soʻrov                                  |
| `pipeline_openai_request`        | Ichki OpenAI shakliga oʻgirilgandan keyingi soʻrov                     |
| `pipeline_provider_request`      | Provayder shevasida yuqori oqimga amalda yuborilgan soʻrov             |
| `pipeline_provider_response`     | Yuqori oqimning xom javobi                                             |
| `pipeline_client_response`       | Chaqiruvchiga qaytarilgan maʼlumot                                     |
| `pipeline_error`                 | Muvaffaqiyatsiz chaqiruv uchun konveyer darajasidagi xato tafsilotlari |
| `bodies_truncated`               | Yuqoridagi maydonlardan biri `maxBodyBytes` chegarasiga yetganda True  |

Bu prompt tarkibidir, shuning uchun u **standart holatda oʻchirilgan** va ataylab har bir qabul
qiluvchi uchun alohida tanlanadi. Yuboriladigan maʼlumot boshqaruv panelida koʻrsatiladigan
maʼlumotning oʻzidir, chunki eksport va `getCallLogById` tafsilotlarni aniqlash mexanizmini birgalikda
ishlatadi: foydali yuklar yozilganda ulardagi PII maʼlumotlari allaqachon sanitarizatsiya qilinadi va
sirlar yashiriladi, `noLog` API kaliti bilan amalga oshirilgan chaqiruv esa umuman hech qanday foydali
yukni saqlamaydi, shu sababli eksport qilinadigan hech narsa boʻlmaydi.

Foydali yuklar fayl tizimidagi artefaktdan har bir qator boʻyicha oʻqiladi, shu sababli gidratatsiya
faqat uni soʻragan qabul qiluvchilar uchun bajariladi. Yoʻqolgan yoki buzilgan artefakt paketni
muvaffaqiyatsiz tugatib, kursorni toʻxtatib qoʻyish oʻrniga, null foydali yuklarga ega umumlashtirilgan
maʼlumotlarini eksport qiladi.

`maxBodyBytes` (standart qiymati 262144) har bir maydonni cheklaydi. Uzunroq foydali yuklar
**tashlab yuborilmaydi, balki qisqartiriladi** — kesilgan prompt baribir «nima soʻralgan edi?» degan
savolga javob beradi — va qator `bodies_truncated` bilan belgilanadi. Boʻlakma-boʻlak uzatilgan oqim
deltalari eksport qilinmaydi; yigʻilgan javob allaqachon `pipeline_provider_response` va
`pipeline_client_response` ichida mavjud.

---

## 2. Fayllar

| Qism                           | Joylashuv                                    |
| ------------------------------ | -------------------------------------------- |
| Maqsad shartnomasi             | `src/lib/logExport/types.ts`                 |
| Reyestr                        | `src/lib/logExport/registry.ts`              |
| Sirlarni boshqarish            | `src/lib/logExport/secrets.ts`               |
| Ishga tushiruvchi (asosiy IPC) | `src/lib/logExport/runner.ts`                |
| Jarayonning hayot sikli        | `src/lib/logExport/childRunner.ts`           |
| Ichki jarayon kirish nuqtasi   | `src/lib/logExport/exportChild.ts`           |
| Faqat o‘qish uchun ochuvchi    | `src/lib/db/logExportReadOnly.ts`            |
| Umumiy so‘rov/xaritalash       | `src/lib/usage/callLogExportQueries.ts`      |
| Tafsilotlarni aniqlovchi       | `src/lib/usage/callLogDetailResolver.ts`     |
| API proyeksiyasi               | `src/lib/logExport/presenter.ts`             |
| BigQuery maqsadi               | `src/lib/logExport/destinations/bigquery.ts` |
| Google SA autentifikatsiyasi   | `src/lib/logExport/googleServiceAccount.ts`  |
| Qo‘ng‘iroqlar jurnali manbasi  | `src/lib/usage/callLogExportSource.ts`       |
| Doimiy saqlash                 | `src/lib/db/logExportDestinations.ts`        |
| Cron vazifasi                  | `src/lib/jobs/logExportJob.ts`               |
| REST qatlami                   | `src/app/api/log-export/`                    |
| Boshqaruv paneli sahifasi      | `src/app/(dashboard)/dashboard/log-export/`  |

Sxema: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

Barcha marshrutlar boshqaruv autentifikatsiyasidan o‘tadi (`requireManagementAuth`). Sirlar hech qachon qaytarilmaydi:
saqlangan sir literal `__stored__` ko‘rinishida qaytariladi va yangilash vaqtida shu qiymatni qayta yuborish
saqlangan hisob ma’lumotlarini o‘zgarishsiz qoldiradi.

Turi sir mavjudligini e’lon qiladigan manzilni yaratish yoki yangilash uchun **`STORAGE_ENCRYPTION_KEY`
talab qilinadi**. Usiz `encrypt()` hech qanday o‘zgartirishsiz uzatadi, shuning uchun hisob ma’lumotlarini
SQLite’ga ochiq matn ko‘rinishida yozish o‘rniga so‘rov 400 xatosi bilan rad etiladi (Telegram webhook’i
qo‘llaydigan himoya bilan bir xil).

| Metod    | Yo‘l                                     | Maqsad                                                                  |
| -------- | ---------------------------------------- | ----------------------------------------------------------------------- |
| `GET`    | `/api/log-export/types`                  | Manzil turlari va ularning konfiguratsiya maydonlari ro‘yxati           |
| `GET`    | `/api/log-export/destinations`           | Manzillar ro‘yxati (sirlar yashirilgan)                                 |
| `POST`   | `/api/log-export/destinations`           | Manzil yaratish                                                         |
| `GET`    | `/api/log-export/destinations/{id}`      | Bitta manzilni o‘qish                                                   |
| `PUT`    | `/api/log-export/destinations/{id}`      | Nom / yoqilganlik / konfiguratsiya / paketlashni yangilash              |
| `DELETE` | `/api/log-export/destinations/{id}`      | O‘chirish                                                               |
| `POST`   | `/api/log-export/destinations/{id}/test` | Hisob ma’lumotlarini tekshirish, hech narsa yozmaslik                   |
| `POST`   | `/api/log-export/destinations/{id}/run`  | Darhol bo‘shatish, rejalashtirilgan ishga tushirish bilan bir xil yo‘l  |
| `GET`    | `/api/log-export/status`                 | Cron holati, so‘nggi ishga tushirishlar, har bir maqsad bo‘yicha navbat |

`GET /api/log-export/types` UI’ni universal qiladi: boshqaruv panelidagi shakl
qaytarilgan maydon deskriptorlari asosida chiziladi, shuning uchun yangi manzil UI’da hech qanday o‘zgarishni talab qilmaydi.

---

## 4. BigQuery manzili

Konfiguratsiya kalitlari (`type: "bigquery"`):

| Kalit                | Izohlar                                                                     |
| -------------------- | --------------------------------------------------------------------------- |
| `projectId`          | Dataset joylashgan GCP loyihasi                                             |
| `datasetId`          | `[A-Za-z0-9_]+`                                                             |
| `tableId`            | `[A-Za-z0-9_]+`                                                             |
| `location`           | Faqat dataset yaratilishi kerak bo‘lganda ishlatiladi (standart `EU`)       |
| `serviceAccountJson` | Xizmat hisobi kaliti. Sir: saqlashda shifrlanadi, hech qachon qaytarilmaydi |
| `autoCreate`         | Birinchi eksportda dataset va jadvalni yaratish (standart `true`)           |

Xizmat hisobiga maqsad jadvalda `bigquery.tables.updateData`, shuningdek `autoCreate` yoqilganida
`bigquery.datasets.create` / `bigquery.tables.create` ruxsatlari kerak.

Sozlangan paket HTTP birligi emas, **kursor** birligidir: `send()` uni ko‘pi bilan 500 qatordan iborat
insertAll chaqiruvlariga bo‘ladi, shu sababli katta `batch_size` BigQuery’ning 10 MB so‘rov cheklovini buzmaydi.
Vaqtinchalik holatlar (408/429/500/502/503/504) bir xil insertIds’dan foydalangan holda eksponensial
kechikish bilan uch martagacha qayta uriniladi; autentifikatsiya va sxema xatolari esa ishga tushirishni
behuda davom ettirmaslik uchun birinchi urinishdayoq istisno chiqaradi.

Bir necha lahza oldin yaratilgan jadval oqimli uzatish endpoint’iga hali ko‘rinmaydi va u bir necha soniya
davomida 404 javobini qaytaradi. Bu 404 qayta uriniladi, ammo **faqat jadval shu ishga tushirish vaqtida yaratilgan bo‘lsa** —
haqiqatan mavjud bo‘lmagan jadval uchun jarayon darhol xato bilan tugaydi. Yaqinda o‘chirilgan jadvalni ayni nom ostida
qayta yaratish BigQuery’ning bir necha daqiqa davomida oqimli kiritishlarni rad etishiga olib kelishini unutmang;
bu o‘chirish va qayta yaratish xususiyati, shuning uchun jadvalni o‘chirib, qayta qo‘shish o‘rniga yangi jadval
nomidan foydalaning.

**Qisman muvaffaqiyatsizlik bo‘sh bo‘lmagan `insertErrors[]` bilan HTTP 200 ko‘rinishida keladi.** Bu xato sifatida
qabul qilinadi va istisno chiqaradi; aynan shu holat kursorning BigQuery qabul qilmagan qatorlardan o‘tib ketishini
to‘xtatadi; `tests/unit/log-export-bigquery.test.ts` ushbu xatti-harakatni mustahkamlaydi.

Transport oddiy REST orqali amalga oshiriladi — o‘z-o‘zidan imzolangan RS256 tasdiqnomasi
`https://oauth2.googleapis.com/token` manzilida kirish tokeniga almashtiriladi, so‘ng qatorlar `tabledata.insertAll`’ga
yuboriladi. Hech qanday Google SDK qo‘shilmaydi. Kirish tokenlari har bir (xizmat hisobi, qamrov) juftligi uchun
jarayon ichida keshlanadi.

Yaratilgan jadval Logs sahifasidagi har bir maydon uchun bittadan ustun hamda `exported_at` ustunini o‘z ichiga oladi
va chaqiruv jurnallarining amalda qanday so‘ralishiga mos ravishda tuziladi:

- **`timestamp` bo‘yicha kunlik bo‘limlarga ajratilgan**, shuning uchun sana bilan chegaralangan so‘rov faqat o‘sha kunlarni skanerlaydi.
- **`api_key_name`, `provider`, `model`, `status` bo‘yicha klasterlangan** (shu tartibda), shuning uchun
  kim ishga tushirgani, qayerga yuborilgani yoki muvaffaqiyatsiz tugaganiga ko‘ra filtrlash har bir bo‘lim ichidagi
  bloklarni qisqartiradi. BigQuery ko‘pi bilan to‘rtta klasterlash ustuniga ruxsat beradi va tartib muhim:
  faqat `api_key_name` bo‘yicha filtr bloklarni qisqartiradi, faqat `status` bo‘yicha filtr esa qisqartirmaydi.
- **`partitionExpirationDays` orqali ixtiyoriy bo‘limlarni saqlash muddati** (`0` hammasini saqlaydi), jadval
  yaratilganda qo‘llanadi.

Har ikkala sozlama ham yaratish vaqtida qoʻllanadi. Mavjud jadval oʻzining joriy tuzilishini saqlab qoladi, shu sababli
ularni qoʻllamoqchi boʻlsangiz, manzil sifatida yangi jadval identifikatorini koʻrsating.

`tests/unit/log-export-bigquery.test.ts` mapper va jadval sxemasi doimo bir-biriga mos boʻlishini tekshiradi,
shuning uchun yangi chaqiruv jurnali ustuni eksport paytida sezdirmasdan tashlab yuborilmaydi.

Paketlar **ham** qatorlar soni, **ham** serializatsiya qilingan baytlar boʻyicha qismlarga ajratiladi. Foydali yuklar eksport
qilinganda faqat qatorlar sonining oʻzi yetarli emas: soʻrov matnlarini oʻz ichiga olgan 500 qator oʻnlab megabayt boʻlishi mumkin va insertAll
10 MB dan katta soʻrovni rad etadi. Qismlar 500 qatorga yoki 9 MB ga yetganda — qaysi biri avval sodir boʻlsa — yopiladi.

---

## 5. Manzil qoʻshish

1. `LogExportDestinationType` ni eksport qiladigan `src/lib/logExport/destinations/<name>.ts` faylini yarating:
   UI uchun Zod `configSchema`, `fields` deskriptorlari massivi, `secretFields` va
   `test()` / `prepare()` / `send(records)` ni qaytaradigan `createClient(config)`.
2. Uni `src/lib/logExport/registry.ts` faylidagi `DESTINATIONS` massiviga qoʻshing.
3. `tests/unit/` ichida testlar yozing.

Oʻzgartirishning barchasi shundan iborat: doimiy saqlash qatlami, cron vazifasi, REST qatlami, maxfiy maʼlumotlarni shifrlash va
boshqaruv paneli shakli — barchasi registrdan maʼlumot oladi.

Yangi manzil uchun ikkita qoida:

- Qisman xatolik yuz berganda `send()` **xatolik chiqarishi shart**. Muvaffaqiyatli yakunlanish “ushbu manzilda bu qatorlar mavjud” degan maʼnoni anglatadi
  va kursor ulardan doimiy ravishda oʻtib ketadi.
- Foydalanuvchi taqdim etgan URL manzilini qabul qiladigan manzil soʻrov yuborishdan oldin uni,
  xuddi vebhuklar kabi, `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`) orqali tekshirishi shart.
  BigQuery uchun bu talab qilinmaydi: uning hostlari oʻzgarmas.

---

## 6. Uni boshqarish

- **Boshqaruv paneli**: Integratsiyalar → Jurnal eksporti. Manzil qoʻshing, qatorlarni yozmasdan hisob maʼlumotlarini tekshirish uchun **Sinov**ni ishga tushiring, soʻng uni yoqing.
- **Navbat**: har bir manzil kartasi kutilayotgan qatorlar va kursorni koʻrsatadi; `GET
/api/log-export/status` ayni koʻrsatkichlar bilan birga oxirgi 20 ta vazifa ishga tushirilishini qaytaradi.
- **Bitta manzilning xatoligi boshqalariga taʼsir qilmaydi** — ishga tushirish xulosasi har bir manzil holatini
  `last_status` / `last_error` da qayd etadi, vazifani ishga tushirish tarixi esa umumiy natijani saqlaydi.
- **Manzilni oʻchirish uning kursorini ham oʻchiradi.** Uni qayta qoʻshish eng eski saqlanib qolgan
  chaqiruv jurnalidan boshlanadi va manzilda allaqachon mavjud boʻlishi mumkin boʻlgan qatorlarni qayta yuboradi. BigQueryʼda har bir qator uchun
  `insertId` buni faqat BigQueryʼning oʻz deduplikatsiya oynasi ichida bartaraf etadi, shuning uchun manzilni oʻchirishdan
  koʻra uni oʻchirib qoʻyish afzal.
