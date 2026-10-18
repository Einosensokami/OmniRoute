# SQLite Runtime Resolution (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute își rezolvă driverul SQLite la pornire printr-un lanț de fallback în 5 pași:

1. **`better-sqlite3` inclus** (prin `dependencies` în `package.json`)
   — cea mai rapidă opțiune, binar nativ, instalat de `npm install` atunci când sunt disponibile instrumentele de compilare.

2. **`better-sqlite3` instalat la runtime** (în `~/.omniroute/runtime/`)
   — instalat în mod leneș la prima rulare **SAU** de `scripts/build/postinstall.mjs → scripts/postinstall.mjs`.
   Validează octeții magici ai fișierului nativ `.node` (ELF / Mach-O / PE) înainte de încărcare,
   pentru a preveni utilizarea unor binare corupte sau destinate altei platforme.

3. **`node:sqlite`** (biblioteca standard Node ≥22.5) — nu necesită compilare nativă; este utilizat atunci când
   ambele căi pentru better-sqlite3 eșuează. Set de funcționalități limitat.

4. **`sql.js`** (WASM) — ultimul fallback. Funcționează peste tot, dar este mai lent
   și scrie datele la intervale regulate, nu sincron.

## De ce această complexitate?

- **EBUSY pe Windows**: `npm install -g omniroute@latest` poate eșua dacă fișierul
  `better_sqlite3.node` al versiunii anterioare este blocat de un proces în execuție. Instalarea la runtime
  în `~/.omniroute/runtime/` evită cache-ul npm global.
- **Lipsa instrumentelor de compilare**: Unele medii (Windows corporativ fără VS Build
  Tools, imagini Docker minimale) nu pot compila `better-sqlite3`. Programul de instalare
  la runtime obține un binar precompilat din registrul npm; driverele de fallback
  asigură pornirea OmniRoute chiar dacă această operațiune eșuează.
- **Sisteme izolate de rețea**: Dacă registrul npm nu este accesibil, `node:sqlite`
  sau `sql.js` garantează funcționalitatea de bază.

## Validarea octeților magici

Înainte de a încărca un fișier `.node` instalat la runtime, OmniRoute citește primii 8
octeți și îi compară cu semnăturile cunoscute ale platformelor:

| Platformă             | Octeți (hex)  | Etichetă    |
| --------------------- | ------------- | ----------- |
| Linux                 | `7F 45 4C 46` | `elf`       |
| macOS 64-bit BE       | `FE ED FA CF` | `macho`     |
| macOS 64-bit LE       | `CF FA ED FE` | `macho-le`  |
| macOS fat (universal) | `CA FE BA BE` | `macho-fat` |
| Windows               | `4D 5A` (MZ)  | `pe`        |

O semnătură care nu corespunde → fișierul este ignorat, iar fallback-ul continuă cu pasul următor.

## Verificarea driverului activ

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## Control manual

```bash
# Omite încălzirea post-instalare (pentru instalări CI rapide)
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# Reinstalează forțat better-sqlite3 la runtime
rm -rf ~/.omniroute/runtime
omniroute  # va fi reinstalat la următoarea pornire

# Verifică ce driver este activ
omniroute config db-info  # (dacă există comanda CLI)
```

## Diagnosticarea blocajelor sincrone

Cu `better-sqlite3`, setați `OMNIROUTE_SQLITE_SLOW_MS=200` înainte de pornire pentru a activa
măsurarea timpului adaptorului sincron. Implicit, aceasta este dezactivată. O operațiune finalizată care durează
cel puțin atâtea milisecunde emite un avertisment `[SQLITE-SLOW]`, cel mult o dată la
zece secunde pentru fiecare adaptor. Avertismentul conține doar driverul, clasa operațiunii
(`prepare`, `get`, `all`, `run`, `exec`, `pragma`, tranzacție sau mentenanță) și
timpul scurs în milisecunde: fără SQL, parametri, rânduri, căi sau textul excepției.

Acesta este un instrument de diagnosticare, nu un timeout sau o optimizare a interogărilor. Nu poate raporta
o operațiune care nu se termină niciodată, nu poate distinge procesarea CPU de așteptările după disc, nu poate identifica
instrucțiunea SQL exactă și nu poate observa operațiunile efectuate prin handle-ul driverului brut.
Durata backupului asincron este exclusă în mod intenționat; celelalte drivere SQLite nu sunt
instrumentate prin această opțiune. Dezactivarea variabilei restaurează adaptorul original,
fără wrapper-ele de măsurare a timpului. Schema bazei de date și configurația stocată nu se modifică.

Avertismentul de latență `/healthz` raportează valoarea maximă a latenței buclei de evenimente de la eșantionul anterior,
nu media pe întreaga durată de funcționare. Corelați marcajele sale temporale cu avertismentele privind operațiunile lente
și cu metricile gazdei/stocării înainte de a atribui un blocaj unei defecțiuni SQLite sau a discului.

## Referință

Implementare:

- `bin/cli/runtime/magicBytes.mjs` — funcții ajutătoare pentru validarea octeților magici ai binarelor
- `bin/cli/runtime/sqliteRuntime.mjs` — rezolvator runtime în 5 pași + program de instalare leneșă
- `bin/cli/runtime/index.mjs` — orchestrator de pornire (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — hook npm post-instalare (încălzire necritică)
- `src/lib/db/core.ts` — exporturile `ensureDbInitialized()` / `getDriverInfo()`

## Topologie cu un singur proces de scriere (HA nu este acceptată)

Lanțul de fallback al driverului de mai sus rulează în continuare într-un **singur proces**. Configurația SQLite
implicită a OmniRoute are un **singur proces de scriere**:

- Nu conectați două replici OmniRoute la același fișier `storage.sqlite`.
- O repornire a containerului, o implementare Recreate, o oprire cauzată de OOM sau o repornire HEALTHCHECK întrerupe
  fiecare sesiune SSE aflată în desfășurare. Calea standard nu include golirea sesiunilor.
- Verificarea liveness a orchestratorului care tratează un răspuns lent de la `/healthz` drept indisponibil va opri singura
  replică. Preferați liveness prin TCP + readiness HTTP prin `/healthz`. Consultați
  [Ghidul Docker — disponibilitate](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  și [Recomandările pentru probele Kubernetes](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
