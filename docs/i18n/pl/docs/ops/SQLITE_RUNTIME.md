# SQLite Runtime Resolution (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇭 [th](../../../th/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute wybiera sterownik SQLite podczas uruchamiania, korzystając z 5-etapowego łańcucha mechanizmów awaryjnych:

1. **Dołączony `better-sqlite3`** (za pośrednictwem `dependencies` w `package.json`)
   — najszybszy, natywny plik binarny, instalowany przez `npm install`, gdy dostępne są narzędzia do kompilacji.

2. **Instalowany w czasie działania `better-sqlite3`** (w `~/.omniroute/runtime/`)
   — instalowany leniwie przy pierwszym uruchomieniu **LUB** przez `scripts/build/postinstall.mjs → scripts/postinstall.mjs`.
   Przed załadowaniem weryfikuje magiczne bajty natywnego pliku `.node` (ELF / Mach-O / PE),
   aby chronić przed uszkodzonymi plikami binarnymi lub plikami przeznaczonymi dla niewłaściwej platformy.

3. **`node:sqlite`** (biblioteka standardowa Node ≥22.5) — nie wymaga natywnej kompilacji; używany, gdy
   obie ścieżki better-sqlite3 zawiodą. Ograniczony zestaw funkcji.

4. **`sql.js`** (WASM) — ostateczny mechanizm awaryjny. Działa wszędzie, ale jest wolniejszy
   i zapisuje dane okresowo zamiast synchronicznie.

## Skąd ta złożoność?

- **Windows EBUSY**: `npm install -g omniroute@latest` może zakończyć się niepowodzeniem, jeśli plik
  `better_sqlite3.node` poprzedniej wersji jest zablokowany przez działający proces. Instalacja
  w czasie działania w `~/.omniroute/runtime/` omija globalną pamięć podręczną npm.
- **Brak narzędzi do kompilacji**: Niektóre środowiska (firmowy Windows bez VS Build
  Tools, minimalne obrazy Docker) nie mogą skompilować `better-sqlite3`. Instalator działający
  w czasie wykonywania pobiera wstępnie skompilowany plik binarny z rejestru npm; sterowniki
  awaryjne zapewniają uruchomienie OmniRoute nawet wtedy, gdy ta operacja się nie powiedzie.
- **Systemy odizolowane od sieci**: Jeśli rejestr npm jest nieosiągalny, `node:sqlite`
  lub `sql.js` gwarantują podstawową funkcjonalność.

## Walidacja magicznych bajtów

Przed załadowaniem pliku `.node` zainstalowanego w czasie działania OmniRoute odczytuje pierwsze 8
bajtów i porównuje je ze znanymi sygnaturami platform:

| Platforma               | Bajty (hex)   | Etykieta    |
| ----------------------- | ------------- | ----------- |
| Linux                   | `7F 45 4C 46` | `elf`       |
| macOS 64-bit BE         | `FE ED FA CF` | `macho`     |
| macOS 64-bit LE         | `CF FA ED FE` | `macho-le`  |
| macOS fat (uniwersalny) | `CA FE BA BE` | `macho-fat` |
| Windows                 | `4D 5A` (MZ)  | `pe`        |

Niezgodna sygnatura → plik jest ignorowany, a mechanizm awaryjny przechodzi do następnego kroku.

## Sprawdzanie aktywnego sterownika

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## Sterowanie ręczne

```bash
# Pomiń wstępne przygotowanie po instalacji (dla szybkich instalacji CI)
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# Wymuś ponowną instalację better-sqlite3 dla środowiska uruchomieniowego
rm -rf ~/.omniroute/runtime
omniroute  # zostanie ponownie zainstalowany przy następnym uruchomieniu

# Sprawdź, który sterownik jest aktywny
omniroute config db-info  # (jeśli polecenie CLI istnieje)
```

## Diagnozowanie synchronicznych przestojów

W przypadku `better-sqlite3` ustaw `OMNIROUTE_SQLITE_SLOW_MS=200` przed uruchomieniem, aby włączyć
pomiar czasu operacji synchronicznego adaptera. Domyślnie jest on wyłączony. Ukończona operacja trwająca
co najmniej tyle milisekund generuje ostrzeżenie `[SQLITE-SLOW]`, nie częściej niż raz na
dziesięć sekund dla każdego adaptera. Ostrzeżenie zawiera wyłącznie sterownik, klasę operacji
(`prepare`, `get`, `all`, `run`, `exec`, `pragma`, transakcję lub konserwację) oraz
czas trwania w milisekundach: bez SQL, powiązań, wierszy, ścieżek ani tekstu wyjątku.

Jest to pomoc diagnostyczna, a nie limit czasu ani optymalizacja zapytań. Nie może raportować
operacji, która nigdy się nie kończy, odróżnić obciążenia CPU od oczekiwania na dysk, wskazać
dokładnego SQL ani obserwować operacji wykonywanych za pośrednictwem surowego uchwytu sterownika.
Czas trwania asynchronicznej kopii zapasowej jest celowo pomijany; inne sterowniki SQLite nie są
objęte tą opcjonalną instrumentacją. Wyłączenie zmiennej przywraca oryginalny adapter
bez nakładek mierzących czas. Schemat bazy danych ani zapisana konfiguracja nie ulegają zmianie.

Ostrzeżenie o opóźnieniu `/healthz` raportuje szczytowe opóźnienie pętli zdarzeń od poprzedniej próbki,
a nie średnią z całego czasu działania. Przed przypisaniem przestoju SQLite lub awarii dysku porównaj
jego znaczniki czasu z ostrzeżeniami o wolnych operacjach oraz metrykami hosta i pamięci masowej.

## Materiały referencyjne

Implementacja:

- `bin/cli/runtime/magicBytes.mjs` — funkcje pomocnicze do walidacji magicznych bajtów plików binarnych
- `bin/cli/runtime/sqliteRuntime.mjs` — 5-etapowy mechanizm wyboru w czasie działania + leniwy instalator
- `bin/cli/runtime/index.mjs` — koordynator uruchamiania (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — hak poinstalacyjny npm (niekrytyczne wstępne przygotowanie)
- `src/lib/db/core.ts` — eksporty `ensureDbInitialized()` / `getDriverInfo()`

## Topologia z pojedynczym procesem zapisującym (brak obsługi HA)

Powyższy łańcuch sterowników awaryjnych nadal działa w **jednym procesie**. Domyślna konfiguracja SQLite
w OmniRoute korzysta z **jednego procesu zapisującego**:

- Nie podłączaj dwóch replik OmniRoute do tego samego pliku `storage.sqlite`.
- Ponowne uruchomienie kontenera, wdrożenie typu Recreate, zatrzymanie przez OOM lub ponowne uruchomienie przez HEALTHCHECK przerywa
  każdą aktywną sesję SSE. Standardowa ścieżka nie obsługuje kontrolowanego wygaszania sesji.
- Mechanizm liveness orkiestratora, który uznaje wolne `/healthz` za niedziałające, zakończy jedyną
  replikę. Preferuj liveness przez TCP oraz readiness przez HTTP `/healthz`. Zobacz
  [Przewodnik po Dockerze — dostępność](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  oraz [zalecenia dotyczące sond Kubernetes](./MONITORING_GUIDE.md#kubernetes-probe-recommendations).
