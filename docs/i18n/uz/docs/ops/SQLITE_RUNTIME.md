# SQLite Runtime Resolution (Oʻzbekcha)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute ishga tushirilganda SQLite drayverini 5 bosqichli zaxira zanjiri orqali aniqlaydi:

1. **Paketga kiritilgan `better-sqlite3`** (`package.json` faylidagi `dependencies` orqali)
   — eng tezkor, mahalliy ikkilik fayl; qurish vositalari mavjud bo‘lsa, `npm install` tomonidan o‘rnatiladi.

2. **Ishlash vaqtida o‘rnatilgan `better-sqlite3`** (`~/.omniroute/runtime/` ichida)
   — birinchi ishga tushirishda **YOKI** `scripts/build/postinstall.mjs → scripts/postinstall.mjs` orqali kechiktirib o‘rnatiladi.
   Yuklashdan oldin buzilgan yoki noto‘g‘ri platformaga mo‘ljallangan ikkilik fayllardan
   himoyalanish uchun mahalliy `.node` faylining sehrli baytlari (ELF / Mach-O / PE) tekshiriladi.

3. **`node:sqlite`** (Node ≥22.5 standart kutubxonasi) — mahalliy qurish talab qilinmaydi;
   better-sqlite3 yo‘llarining ikkalasi ham ishlamasa qo‘llanadi. Imkoniyatlari cheklangan.

4. **`sql.js`** (WASM) — so‘nggi zaxira variant. Hamma joyda ishlaydi, ammo sekinroq
   va ma’lumotlarni sinxron ravishda emas, belgilangan oraliqlarda yozadi.

## Nega buncha murakkab?

- **Windows EBUSY**: agar avvalgi versiyaning `better_sqlite3.node` fayli ishlayotgan
  jarayon tomonidan bloklangan bo‘lsa, `npm install -g omniroute@latest` muvaffaqiyatsiz
  tugashi mumkin. `~/.omniroute/runtime/` ichidagi ish vaqti o‘rnatilishi global npm keshini chetlab o‘tadi.
- **Qurish vositalari yo‘q**: ayrim muhitlar (VS Build Tools o‘rnatilmagan korporativ
  Windows tizimlari, minimal Docker tasvirlari) `better-sqlite3` paketini kompilyatsiya
  qila olmaydi. Ish vaqti o‘rnatuvchisi npm reyestridan oldindan qurilgan ikkilik faylni
  oladi; bu ham muvaffaqiyatsiz bo‘lsa, zaxira drayverlar OmniRoute baribir ishga tushishini ta’minlaydi.
- **Tarmoqdan uzilgan tizimlar**: npm reyestriga kirib bo‘lmasa, `node:sqlite`
  yoki `sql.js` asosiy funksionallikni kafolatlaydi.

## Sehrli baytlarni tekshirish

Ishlash vaqtida o‘rnatilgan `.node` faylini yuklashdan oldin OmniRoute dastlabki 8
baytni o‘qiydi va ularni ma’lum platforma signaturalari bilan solishtiradi:

| Platforma             | Baytlar (hex) | Yorliq      |
| --------------------- | ------------- | ----------- |
| Linux                 | `7F 45 4C 46` | `elf`       |
| macOS 64-bit BE       | `FE ED FA CF` | `macho`     |
| macOS 64-bit LE       | `CF FA ED FE` | `macho-le`  |
| macOS fat (universal) | `CA FE BA BE` | `macho-fat` |
| Windows               | `4D 5A` (MZ)  | `pe`        |

Sehrli baytlar mos kelmasa → fayl e’tiborsiz qoldiriladi va zaxira zanjiri keyingi bosqichga o‘tadi.

## Faol drayverni tekshirish

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## Qo‘lda boshqarish

```bash
# Tezkor CI o‘rnatishlari uchun postinstall oldindan qizdirishini o‘tkazib yuborish
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# Ish vaqtidagi better-sqlite3 paketini majburan qayta o‘rnatish
rm -rf ~/.omniroute/runtime
omniroute  # keyingi ishga tushirishda qayta o‘rnatiladi

# Qaysi drayver faolligini tekshirish
omniroute config db-info  # (agar CLI buyrug‘i mavjud bo‘lsa)
```

## Sinxron to‘xtalishlarni diagnostika qilish

`better-sqlite3` bilan sinxron adapter vaqtini o‘lchashni yoqish uchun ishga tushirishdan
oldin `OMNIROUTE_SQLITE_SLOW_MS=200` qiymatini belgilang. Standart holatda bu o‘chiq.
Kamida shuncha millisekund davom etgan yakunlangan amal har bir adapter uchun ko‘pi
bilan har o‘n soniyada bir marta `[SQLITE-SLOW]` ogohlantirishini chiqaradi.
Ogohlantirish faqat drayver, amal sinfi (`prepare`, `get`, `all`, `run`, `exec`,
`pragma`, tranzaksiya yoki texnik xizmat) va o‘tgan millisekundlar sonini o‘z ichiga
oladi: SQL, bog‘langan qiymatlar, qatorlar, yo‘llar yoki istisno matni kiritilmaydi.

Bu taymaut yoki so‘rovlarni optimallashtirish vositasi emas, balki diagnostika
yordamchisidir. U hech qachon qaytmaydigan amal haqida xabar bera olmaydi, CPU ishini
disk kutishlaridan ajrata olmaydi, aniq SQL so‘rovini aniqlay olmaydi yoki bevosita
drayver deskriptori orqali bajarilgan amallarni kuzata olmaydi. Asinxron zaxiralash
davomiyligi ataylab hisobga olinmaydi; boshqa SQLite drayverlari ushbu ixtiyoriy
instrumentatsiya bilan qamrab olinmagan. O‘zgaruvchini o‘chirib qo‘yish vaqtni
o‘lchash o‘ramlarisiz asl adapterni tiklaydi. Ma’lumotlar bazasi sxemasi yoki
saqlangan konfiguratsiya o‘zgarmaydi.

`/healthz` kechikish ogohlantirishi butun ishlash davridagi o‘rtacha qiymatni emas,
oldingi namunadan beri voqealar siklining eng yuqori kechikishini bildiradi.
To‘xtalishni SQLite yoki disk nosozligi bilan bog‘lashdan oldin uning vaqt belgilarini
sekin amallar haqidagi ogohlantirishlar hamda xost/xotira qurilmasi metrikalari bilan solishtiring.

## Ma’lumotnoma

Amalga oshirish:

- `bin/cli/runtime/magicBytes.mjs` — ikkilik fayl sehrli baytlarini tekshirish yordamchilari
- `bin/cli/runtime/sqliteRuntime.mjs` — 5 bosqichli ish vaqti aniqlagichi + kechiktirilgan o‘rnatuvchi
- `bin/cli/runtime/index.mjs` — ishga tushirish koordinatori (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — npm o‘rnatishdan keyingi ilgagi (xatolik halokatli emas)
- `src/lib/db/core.ts` — `ensureDbInitialized()` / `getDriverInfo()` eksportlari

## Yagona yozuvchi topologiyasi (HA qo‘llab-quvvatlanmaydi)

Yuqoridagi drayver zaxira zanjiri baribir **bitta jarayonda** ishlaydi. Standart SQLite
bilan OmniRoute **yagona yozuvchi** hisoblanadi:

- Ikki OmniRoute replikasini bir xil `storage.sqlite` fayliga ulamang.
- Konteynerning qayta ishga tushirilishi, Recreate joylashtirishi, OOM sababli to‘xtatilishi
  yoki HEALTHCHECK qayta ishga tushirishi jarayondagi barcha SSE seanslarini uzadi.
  Standart yo‘lda seanslarni bosqichma-bosqich yakunlash mavjud emas.
- Sekin ishlayotgan `/healthz` holatini nosozlik deb hisoblaydigan orkestrator
  faollik tekshiruvi yagona replikani to‘xtatadi. TCP faollik tekshiruvi + HTTP
  `/healthz` tayyorlik tekshiruvini afzal ko‘ring. Quyidagilarga qarang:
  [Docker qo‘llanmasi — mavjudlik](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  va [Kubernetes tekshiruvlari bo‘yicha tavsiyalar](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
