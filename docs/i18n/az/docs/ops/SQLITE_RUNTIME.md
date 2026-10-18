# SQLite Runtime Resolution (Azərbaycan dili)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute işə salınarkən SQLite drayverini 5 mərhələli ehtiyat keçid zənciri vasitəsilə müəyyən edir:

1. **Paketə daxil edilmiş `better-sqlite3`** (`package.json` faylındakı `dependencies` vasitəsilə)
   — ən sürətli variantdır, yerli binar fayldan istifadə edir və yığım alətləri mövcud olduqda `npm install` tərəfindən quraşdırılır.

2. **İcra zamanı quraşdırılan `better-sqlite3`** (`~/.omniroute/runtime/` daxilində)
   — ilk işə salınma zamanı tənbəl şəkildə **VƏ YA** `scripts/build/postinstall.mjs → scripts/postinstall.mjs` tərəfindən quraşdırılır.
   Zədələnmiş və ya yanlış platformaya aid binar fayllardan qorunmaq üçün yüklənməzdən əvvəl yerli `.node` faylının sehrli baytları (ELF / Mach-O / PE) yoxlanılır.

3. **`node:sqlite`** (Node ≥22.5 standart kitabxanası) — yerli yığım tələb etmir; hər iki better-sqlite3 yolu uğursuz olduqda istifadə edilir. Funksiyalar dəsti məhduddur.

4. **`sql.js`** (WASM) — son ehtiyat variantıdır. Hər yerdə işləyir, lakin daha yavaşdır və məlumatları sinxron şəkildə deyil, müəyyən intervallarla yazır.

## Bu mürəkkəblik nəyə görədir?

- **Windows EBUSY**: Əvvəlki versiyanın `better_sqlite3.node` faylı işləyən proses tərəfindən kilidlənibsə, `npm install -g omniroute@latest` uğursuz ola bilər. `~/.omniroute/runtime/` daxilində icra zamanı quraşdırma qlobal npm keşindən yan keçir.
- **Yığım alətləri yoxdur**: Bəzi mühitlər (VS Build Tools olmayan korporativ Windows sistemləri, minimal Docker obrazları) `better-sqlite3` paketini kompilyasiya edə bilmir. İcra zamanı quraşdırıcı npm reyestrindən əvvəlcədən yığılmış binar faylı əldə edir; bu uğursuz olsa belə, ehtiyat drayverlər OmniRoute-un yenə də işə düşməsini təmin edir.
- **Şəbəkədən təcrid olunmuş sistemlər**: npm reyestri əlçatmazdırsa, `node:sqlite` və ya `sql.js` baza funksionallığını təmin edir.

## Sehrli baytların yoxlanması

İcra zamanı quraşdırılmış `.node` faylını yükləməzdən əvvəl OmniRoute ilk 8 baytı oxuyur və onları məlum platforma sehrli dəyərləri ilə müqayisə edir:

| Platforma             | Baytlar (hex) | Etiket      |
| --------------------- | ------------- | ----------- |
| Linux                 | `7F 45 4C 46` | `elf`       |
| macOS 64-bit BE       | `FE ED FA CF` | `macho`     |
| macOS 64-bit LE       | `CF FA ED FE` | `macho-le`  |
| macOS fat (universal) | `CA FE BA BE` | `macho-fat` |
| Windows               | `4D 5A` (MZ)  | `pe`        |

Sehrli dəyər uyğun gəlmirsə → fayl nəzərə alınmır və ehtiyat keçid növbəti mərhələ ilə davam edir.

## Aktiv drayverin yoxlanması

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## Əllə idarəetmə

```bash
# Sürətli CI quraşdırmaları üçün postinstall ilkin hazırlığını keçin
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# İcra zamanı istifadə olunan better-sqlite3 paketini məcburi şəkildə yenidən quraşdırın
rm -rf ~/.omniroute/runtime
omniroute  # növbəti işə salınmada yenidən quraşdırılacaq

# Hansı drayverin aktiv olduğunu yoxlayın
omniroute config db-info  # (CLI əmri mövcuddursa)
```

## Sinxron ilişmələrin diaqnostikası

Sinxron adapterin vaxt ölçməsini aktivləşdirmək üçün `better-sqlite3` ilə işə salınmadan əvvəl `OMNIROUTE_SQLITE_SLOW_MS=200` təyin edin. Standart olaraq bu funksiya deaktivdir. Ən azı göstərilən sayda millisaniyə çəkən tamamlanmış əməliyyat hər adapter üzrə on saniyədə ən çox bir dəfə `[SQLITE-SLOW]` xəbərdarlığı yaradır. Xəbərdarlıq yalnız drayveri, əməliyyat sinfini (`prepare`, `get`, `all`, `run`, `exec`, `pragma`, tranzaksiya və ya texniki xidmət) və keçən millisaniyə sayını ehtiva edir: SQL, bağlamalar, sətirlər, yollar və ya istisna mətni daxil edilmir.

Bu, taymaut və ya sorğu optimallaşdırması deyil, diaqnostik köməkçi vasitədir. O, heç vaxt qayıtmayan əməliyyat barədə məlumat verə, CPU işini disk gözləmələrindən fərqləndirə, dəqiq SQL-i müəyyənləşdirə və ya birbaşa drayver deskriptoru vasitəsilə yerinə yetirilən əməliyyatları müşahidə edə bilməz. Asinxron ehtiyat nüsxələmənin müddəti qəsdən nəzərə alınmır; digər SQLite drayverləri bu seçimlə instrumentasiya edilmir. Dəyişənin deaktiv edilməsi vaxt ölçmə sarğıları olmadan ilkin adapteri bərpa edir. Verilənlər bazası sxemində və ya saxlanılan konfiqurasiyada heç bir dəyişiklik edilmir.

`/healthz` gecikmə xəbərdarlığı ümumi istifadə müddətinin orta göstəricisini deyil, əvvəlki nümunədən bəri hadisələr dövrəsinin pik göstəricisini bildirir. İlişməni SQLite və ya disk nasazlığı ilə əlaqələndirməzdən əvvəl onun vaxt nişanlarını yavaş əməliyyat xəbərdarlıqları və host/yaddaş qurğusu metrikləri ilə müqayisə edin.

## İstinad

Realizasiya:

- `bin/cli/runtime/magicBytes.mjs` — binar sehrli baytların yoxlanması üçün köməkçi vasitələr
- `bin/cli/runtime/sqliteRuntime.mjs` — 5 mərhələli icra zamanı həlledicisi + tənbəl quraşdırıcı
- `bin/cli/runtime/index.mjs` — işəsalma orkestratoru (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — npm quraşdırmadan sonrakı qarmağı (kritik olmayan ilkin hazırlıq)
- `src/lib/db/core.ts` — `ensureDbInitialized()` / `getDriverInfo()` ixracları

## Tək yazıcı topologiyası (HA dəstəklənmir)

Yuxarıdakı drayver ehtiyat keçid zənciri yenə də **bir prosesdə** işləyir. Standart SQLite ilə OmniRoute **tək yazıcıdır**:

- İki OmniRoute replikasını eyni `storage.sqlite` faylına qoşmayın.
- Konteynerin yenidən başladılması, Recreate yerləşdirməsi, OOM səbəbli dayandırma və ya HEALTHCHECK yenidən başlatması icra prosesində olan bütün SSE sessiyalarını sonlandırır. Standart icra yolunda sessiyaların tədricən boşaldılması yoxdur.
- Yavaş `/healthz` cavabını dayanmış hesab edən orkestrator canlılıq yoxlaması yeganə replikanı sonlandıracaq. TCP canlılıq yoxlaması + HTTP `/healthz` hazırlıq yoxlamasına üstünlük verin. Baxın:
  [Docker Təlimatı — əlçatanlıq](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  və [Kubernetes yoxlama tövsiyələri](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
