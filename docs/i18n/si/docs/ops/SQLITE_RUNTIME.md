# SQLite Runtime Resolution (සිංහල)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute ආරම්භයේදී පියවර 5ක පසුබැසීමේ දාමයක් හරහා එහි SQLite ධාවකය නිරාකරණය කරයි:

1. **බණ්ඩලගත `better-sqlite3`** (`package.json` හි `dependencies` හරහා)
   — වේගවත්ම විකල්පය වන මෙය ස්වදේශීය ද්විමය ගොනුවක් වන අතර, ගොඩනැගීමේ මෙවලම් පවතින විට `npm install` මඟින් ස්ථාපනය කෙරේ.

2. **ධාවන කාලයේ ස්ථාපනය කළ `better-sqlite3`** (`~/.omniroute/runtime/` තුළ)
   — පළමු ධාවනයේදී අවශ්ය වූ විට **හෝ** `scripts/build/postinstall.mjs → scripts/postinstall.mjs` මඟින් ස්ථාපනය කෙරේ.
   දූෂිත හෝ වැරදි වේදිකාවකට අදාළ ද්විමය ගොනු පූරණය වීම වැළැක්වීම සඳහා,
   පූරණයට පෙර ස්වදේශීය `.node` මැජික් බයිට් (ELF / Mach-O / PE) වලංගු කරයි.

3. **`node:sqlite`** (Node ≥22.5 සම්මත පුස්තකාලය) — ස්වදේශීය ගොඩනැගීමක් අවශ්ය නොවේ; better-sqlite3 මාර්ග දෙකම අසාර්ථක වූ විට භාවිත කෙරේ. සීමිත විශේෂාංග කට්ටලයක් ඇත.

4. **`sql.js`** (WASM) — අවසාන පසුබැසීම. සෑම තැනකම ක්රියා කරන නමුත් වඩා මන්දගාමී වන අතර, දත්ත සමමුහුර්තව ලිවීම වෙනුවට කාලාන්තරයකට වරක් ලියයි.

## මෙතරම් සංකීර්ණ වන්නේ ඇයි?

- **Windows EBUSY**: පෙර අනුවාදයේ `better_sqlite3.node` ගොනුව ධාවනය වන ක්රියාවලියක් මඟින් අගුළු දමා ඇත්නම් `npm install -g omniroute@latest` අසාර්ථක විය හැක. `~/.omniroute/runtime/` තුළ සිදු කරන ධාවන කාල ස්ථාපනය ගෝලීය npm හැඹිලිය මඟහරියි.
- **ගොඩනැගීමේ මෙවලම් නොමැති වීම**: සමහර පරිසරවලට (`VS Build Tools` නොමැති ආයතනික Windows පද්ධති, අවම Docker images) `better-sqlite3` සම්පාදනය කළ නොහැක. ධාවන කාල ස්ථාපකය npm registry වෙතින් පෙර ගොඩනැගූ ද්විමය ගොනුවක් නිරාකරණය කරයි; එය අසාර්ථක වුවද OmniRoute ආරම්භ වන බව පසුබැසි ධාවක සහතික කරයි.
- **ජාලයෙන් හුදකලා කළ පද්ධති**: npm registry වෙත ළඟා විය නොහැකි නම්, `node:sqlite` හෝ `sql.js` මූලික ක්රියාකාරීත්වය සහතික කරයි.

## මැජික්-බයිට් වලංගුකරණය

ධාවන කාලයේ ස්ථාපනය කළ `.node` ගොනුවක් පූරණය කිරීමට පෙර, OmniRoute පළමු බයිට් 8 කියවා දන්නා වේදිකා මැජික් සමඟ සසඳයි:

| වේදිකාව               | බයිට් (hex)   | ලේබලය       |
| --------------------- | ------------- | ----------- |
| Linux                 | `7F 45 4C 46` | `elf`       |
| macOS 64-bit BE       | `FE ED FA CF` | `macho`     |
| macOS 64-bit LE       | `CF FA ED FE` | `macho-le`  |
| macOS fat (universal) | `CA FE BA BE` | `macho-fat` |
| Windows               | `4D 5A` (MZ)  | `pe`        |

මැජික් අගයක් නොගැළපේ නම් → ගොනුව නොසලකා හරින අතර පසුබැසීම ඊළඟ පියවරට ගමන් කරයි.

## සක්රිය ධාවකය පරීක්ෂා කිරීම

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## අතින් පාලනය කිරීම

```bash
# වේගවත් CI ස්ථාපන සඳහා postinstall පෙර-සූදානම මඟහරින්න
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# ධාවන කාල better-sqlite3 බලහත්කාරයෙන් නැවත ස්ථාපනය කරන්න
rm -rf ~/.omniroute/runtime
omniroute  # ඊළඟ ආරම්භයේදී නැවත ස්ථාපනය වනු ඇත

# සක්රියව ඇත්තේ කුමන ධාවකයදැයි පරීක්ෂා කරන්න
omniroute config db-info  # (CLI විධානය පවතී නම්)
```

## සමමුහුර්ත ඇණහිටීම් හඳුනාගැනීම

`better-sqlite3` සමඟ, සමමුහුර්ත ඇඩැප්ටර කාල මැනීම තෝරා සක්රිය කිරීමට ආරම්භයට පෙර `OMNIROUTE_SQLITE_SLOW_MS=200` සකසන්න. පෙරනිමියෙන් එය අක්රියය. අවම වශයෙන් එම මිලි තත්පර ගණනක් ගන්නා සම්පූර්ණ වූ මෙහෙයුමක්, එක් ඇඩැප්ටරයකට සෑම තත්පර දහයකටම උපරිම වශයෙන් එක් වරක් `[SQLITE-SLOW]` අනතුරු ඇඟවීමක් නිකුත් කරයි. අනතුරු ඇඟවීමේ අඩංගු වන්නේ ධාවකය, මෙහෙයුම් පන්තිය (`prepare`, `get`, `all`, `run`, `exec`, `pragma`, transaction හෝ maintenance), සහ ගත වූ මිලි තත්පර පමණි: SQL, bindings, rows, paths හෝ exception text කිසිවක් අඩංගු නොවේ.

මෙය රෝගනිශ්චය සහායකයක් මිස කල් ඉකුත් වීමක් හෝ විමසුම් ප්රශස්තකරණයක් නොවේ. කිසිදා ආපසු නොඑන මෙහෙයුමක් වාර්තා කිරීමට, CPU කාර්යය තැටි රැඳී සිටීම්වලින් වෙන්කර හඳුනාගැනීමට, නිශ්චිත SQL හඳුනාගැනීමට, හෝ අමු ධාවක හැන්ඩලය හරහා සිදු කරන මෙහෙයුම් නිරීක්ෂණය කිරීමට එයට නොහැක. අසමමුහුර්ත උපස්ථ කාලසීමාව හිතාමතාම බැහැර කර ඇත; අනෙකුත් SQLite ධාවක මෙම තෝරා සක්රිය කරන උපකරණකරණයට ඇතුළත් නොවේ. විචල්යය අක්රිය කිරීමෙන් කාල මැනීමේ wrappers නොමැති මුල් ඇඩැප්ටරය යළි පිහිටුවයි. දත්ත සමුදා schema එකට හෝ ගබඩා කළ වින්යාසයට කිසිදු වෙනසක් සිදු නොවේ.

`/healthz` ප්රමාද අනතුරු ඇඟවීම වාර්තා කරන්නේ සමස්ත කාලයෙහි සාමාන්යය නොව, පෙර නියැදියේ සිට ඇති event-loop උපරිම අගයයි. ඇණහිටීමක් SQLite හෝ තැටි අසමත් වීමකට ආරෝපණය කිරීමට පෙර එහි වේලාමුද්රා මන්දගාමී මෙහෙයුම් අනතුරු ඇඟවීම් සහ සත්කාරක/ගබඩා ප්රමිතික සමඟ සසඳන්න.

## යොමුව

ක්රියාත්මක කිරීම:

- `bin/cli/runtime/magicBytes.mjs` — ද්විමය මැජික්-බයිට් වලංගුකරණ සහායක
- `bin/cli/runtime/sqliteRuntime.mjs` — පියවර 5ක ධාවන කාල නිරාකරණය + අවශ්ය විට ස්ථාපකය
- `bin/cli/runtime/index.mjs` — ආරම්භක සම්බන්ධීකාරකය (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — npm පසු-ස්ථාපන hook එක (අසාර්ථක වුවද මාරාන්තික නොවන පෙර-සූදානම)
- `src/lib/db/core.ts` — `ensureDbInitialized()` / `getDriverInfo()` exports

## තනි-ලියන්නා ස්ථලකය (HA සහය නොදක්වයි)

ඉහත ධාවක පසුබැසීමේ දාමය තවමත් ක්රියාත්මක වන්නේ **එක් ක්රියාවලියක්** තුළය. පෙරනිමි SQLite OmniRoute යනු **තනි ලියන්නෙකි**:

- OmniRoute අනුරූ දෙකක් එකම `storage.sqlite` ගොනුවට අමුණන්න එපා.
- බහාලුම් නැවත ආරම්භයක්, Recreate deploy එකක්, OOM kill එකක්, හෝ HEALTHCHECK නැවත ආරම්භයක් මඟින් ක්රියාත්මක වෙමින් පවතින සෑම SSE සැසියක්ම විසන්ධි කරයි. සම්මත මාර්ගයේ සැසි ක්රමයෙන් අවසන් කිරීමක් නොමැත.
- මන්දගාමී `/healthz` එකක් අක්රිය ලෙස සලකන orchestrator liveness පරීක්ෂාව එකම අනුරුව නවතා දමනු ඇත. TCP liveness + HTTP `/healthz` readiness භාවිතයට ප්රමුඛත්වය දෙන්න. [Docker මාර්ගෝපදේශය — ලබාගත හැකි බව](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  සහ [Kubernetes probe නිර්දේශ](./MONITORING_GUIDE.md#kubernetes-probe-recommendations) බලන්න.
