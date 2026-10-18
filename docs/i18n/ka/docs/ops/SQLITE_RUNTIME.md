# SQLite Runtime Resolution (ქართული)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute გაშვებისას SQLite-ის დრაივერს 5-საფეხურიანი სარეზერვო ჯაჭვის მეშვეობით არჩევს:

1. **პაკეტში ჩაშენებული `better-sqlite3`** (`package.json`-ში `dependencies`-ის მეშვეობით)
   — ყველაზე სწრაფი, ნატიური ბინარული ფაილი, რომელსაც `npm install` აყენებს, როდესაც აგების ხელსაწყოები ხელმისაწვდომია.

2. **შესრულების გარემოში დაყენებული `better-sqlite3`** (`~/.omniroute/runtime/`-ში)
   — ზარმაცად ყენდება პირველი გაშვებისას **ან** `scripts/build/postinstall.mjs → scripts/postinstall.mjs`-ის მიერ.
   ჩატვირთვამდე ამოწმებს ნატიური `.node` ფაილის მაგიურ ბაიტებს (ELF / Mach-O / PE),
   რათა თავიდან აიცილოს დაზიანებული ან სხვა პლატფორმისთვის განკუთვნილი ბინარული ფაილების ჩატვირთვა.

3. **`node:sqlite`** (Node ≥22.5-ის სტანდარტული ბიბლიოთეკა) — ნატიური აგება არ სჭირდება; გამოიყენება, როდესაც
   better-sqlite3-ის ორივე გზა ვერ მუშაობს. აქვს ფუნქციების შეზღუდული ნაკრები.

4. **`sql.js`** (WASM) — საბოლოო სარეზერვო ვარიანტი. ყველგან მუშაობს, თუმცა უფრო ნელია
   და მონაცემებს სინქრონულად ჩაწერის ნაცვლად პერიოდული ინტერვალებით წერს.

## რატომ არის საჭირო ასეთი სირთულე?

- **Windows EBUSY**: `npm install -g omniroute@latest` შეიძლება ვერ შესრულდეს, თუ წინა
  ვერსიის `better_sqlite3.node` გაშვებული პროცესის მიერაა დაბლოკილი. შესრულების გარემოში
  `~/.omniroute/runtime/`-ში დაყენება გვერდს უვლის npm-ის გლობალურ კეშს.
- **აგების ხელსაწყოების არარსებობა**: ზოგიერთ გარემოს (კორპორაციულ Windows-ს VS Build
  Tools-ის გარეშე, მინიმალურ Docker-ის იმიჯებს) `better-sqlite3`-ის კომპილაცია არ შეუძლია. შესრულების გარემოს
  ინსტალატორი npm-ის რეესტრიდან წინასწარ აგებულ ბინარულ ფაილს მოიპოვებს; სარეზერვო
  დრაივერები კი უზრუნველყოფს OmniRoute-ის გაშვებას მაშინაც, თუ ეს ვერ მოხერხდება.
- **ქსელისგან იზოლირებული სისტემები**: თუ npm-ის რეესტრი მიუწვდომელია, `node:sqlite`
  ან `sql.js` საბაზისო ფუნქციონირებას უზრუნველყოფს.

## მაგიური ბაიტების ვალიდაცია

შესრულების გარემოში დაყენებული `.node` ფაილის ჩატვირთვამდე OmniRoute კითხულობს პირველ 8
ბაიტს და ადარებს მათ პლატფორმების ცნობილ მაგიურ მნიშვნელობებს:

| პლატფორმა                | ბაიტები (hex) | ჭდე         |
| ------------------------ | ------------- | ----------- |
| Linux                    | `7F 45 4C 46` | `elf`       |
| macOS 64-ბიტიანი BE      | `FE ED FA CF` | `macho`     |
| macOS 64-ბიტიანი LE      | `CF FA ED FE` | `macho-le`  |
| macOS fat (უნივერსალური) | `CA FE BA BE` | `macho-fat` |
| Windows                  | `4D 5A` (MZ)  | `pe`        |

შეუსაბამო მაგიური მნიშვნელობა → ფაილი იგნორირდება და სარეზერვო ჯაჭვი შემდეგ საფეხურზე გადადის.

## აქტიური დრაივერის შემოწმება

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## ხელით მართვა

```bash
# გამოტოვეთ postinstall-ის წინასწარი მომზადება (CI-ში სწრაფი ინსტალაციისთვის)
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# იძულებით ხელახლა დააყენეთ შესრულების გარემოს better-sqlite3
rm -rf ~/.omniroute/runtime
omniroute  # ხელახლა დაყენდება შემდეგი გაშვებისას

# შეამოწმეთ, რომელი დრაივერია აქტიური
omniroute config db-info  # (თუ CLI ბრძანება არსებობს)
```

## სინქრონული შეფერხებების დიაგნოსტიკა

`better-sqlite3`-ის გამოყენებისას გაშვებამდე დააყენეთ `OMNIROUTE_SQLITE_SLOW_MS=200`,
რათა სინქრონული ადაპტერის დროის გაზომვა ჩართოთ. ნაგულისხმევად ეს ფუნქცია გამორთულია. დასრულებული ოპერაცია,
რომელსაც სულ მცირე ამდენივე მილიწამი დასჭირდება, გამოსცემს `[SQLITE-SLOW]` გაფრთხილებას,
თითოეულ ადაპტერზე არაუმეტეს ერთხელ ათ წამში. გაფრთხილება შეიცავს მხოლოდ დრაივერს, ოპერაციის კლასს
(`prepare`, `get`, `all`, `run`, `exec`, `pragma`, ტრანზაქცია ან ტექნიკური მომსახურება) და
გასულ მილიწამებს: SQL-ს, ბმებს, სტრიქონებს, ბილიკებს ან გამონაკლისის ტექსტს არ შეიცავს.

ეს დიაგნოსტიკური დამხმარე საშუალებაა და არა დროის ლიმიტი ან მოთხოვნის ოპტიმიზაცია. მას არ შეუძლია
შეატყობინოს ოპერაციის შესახებ, რომელიც არასდროს სრულდება, განასხვაოს CPU-ს მუშაობა დისკის ლოდინისგან,
განსაზღვროს ზუსტი SQL ან დააკვირდეს ნედლი დრაივერის დესკრიპტორის მეშვეობით შესრულებულ ოპერაციებს.
ასინქრონული სარეზერვო ასლის შექმნის ხანგრძლივობა განზრახ გამორიცხულია; SQLite-ის სხვა დრაივერები
ამ ნებაყოფლობითი ფუნქციით არ ინსტრუმენტირდება. ცვლადის გამორთვა აღადგენს თავდაპირველ ადაპტერს
დროის საზომი გარსების გარეშე. მონაცემთა ბაზის სქემა ან შენახული კონფიგურაცია არ იცვლება.

`/healthz`-ის დაყოვნების გაფრთხილება ასახავს მოვლენათა ციკლის პიკურ მნიშვნელობას წინა ნიმუშის შემდეგ
და არა მთელი არსებობის პერიოდის საშუალო მნიშვნელობას. სანამ შეფერხებას SQLite-ს ან დისკის გაუმართაობას
მიაწერთ, მისი დროის ნიშნულები შეაჯერეთ ნელი ოპერაციების გაფრთხილებებსა და ჰოსტის/საცავის მეტრიკებთან.

## ცნობარი

იმპლემენტაცია:

- `bin/cli/runtime/magicBytes.mjs` — ბინარული ფაილების მაგიური ბაიტების ვალიდაციის დამხმარე ფუნქციები
- `bin/cli/runtime/sqliteRuntime.mjs` — შესრულების გარემოს 5-საფეხურიანი გადამწყვეტი + ზარმაცი ინსტალატორი
- `bin/cli/runtime/index.mjs` — გაშვების ორკესტრატორი (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — npm-ის ინსტალაციის შემდგომი ჰუკი (არაკრიტიკული წინასწარი მომზადება)
- `src/lib/db/core.ts` — `ensureDbInitialized()` / `getDriverInfo()` ექსპორტები

## ერთი ჩამწერის ტოპოლოგია (HA არ არის მხარდაჭერილი)

ზემოთ აღწერილი დრაივერების სარეზერვო ჯაჭვი კვლავ **ერთ პროცესში** მუშაობს. ნაგულისხმევი SQLite-ის
მქონე OmniRoute არის **ერთი ჩამწერის** სისტემა:

- არ მიაბათ OmniRoute-ის ორი რეპლიკა ერთსა და იმავე `storage.sqlite` ფაილს.
- კონტეინერის ხელახლა გაშვება, Recreate განთავსება, OOM kill ან HEALTHCHECK-ის მიერ გამოწვეული ხელახლა გაშვება
  ყველა მიმდინარე SSE სესიას წყვეტს. სტანდარტულ გზაზე სესიების თანდათანობითი დაცლა არ ხდება.
- ორკესტრატორის სიცოცხლისუნარიანობის შემოწმება, რომელიც ნელ `/healthz`-ს მკვდარად მიიჩნევს, ერთადერთ
  რეპლიკას გააჩერებს. უპირატესობა მიანიჭეთ TCP სიცოცხლისუნარიანობის შემოწმებას + HTTP `/healthz` მზადყოფნის შემოწმებას. იხილეთ
  [Docker-ის სახელმძღვანელო — ხელმისაწვდომობა](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  და [Kubernetes-ის შემოწმებების რეკომენდაციები](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
