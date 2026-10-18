# SQLite Runtime Resolution (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/SQLITE_RUNTIME.md) · 🇪🇹 [am](../../../am/docs/ops/SQLITE_RUNTIME.md) · 🇸🇦 [ar](../../../ar/docs/ops/SQLITE_RUNTIME.md) · 🇦🇿 [az](../../../az/docs/ops/SQLITE_RUNTIME.md) · 🇧🇬 [bg](../../../bg/docs/ops/SQLITE_RUNTIME.md) · 🇧🇩 [bn](../../../bn/docs/ops/SQLITE_RUNTIME.md) · 🇧🇦 [bs](../../../bs/docs/ops/SQLITE_RUNTIME.md) · 🇨🇿 [cs](../../../cs/docs/ops/SQLITE_RUNTIME.md) · 🇩🇰 [da](../../../da/docs/ops/SQLITE_RUNTIME.md) · 🇩🇪 [de](../../../de/docs/ops/SQLITE_RUNTIME.md) · 🇬🇷 [el](../../../el/docs/ops/SQLITE_RUNTIME.md) · 🇪🇸 [es](../../../es/docs/ops/SQLITE_RUNTIME.md) · 🇪🇪 [et](../../../et/docs/ops/SQLITE_RUNTIME.md) · 🇮🇷 [fa](../../../fa/docs/ops/SQLITE_RUNTIME.md) · 🇫🇮 [fi](../../../fi/docs/ops/SQLITE_RUNTIME.md) · 🇫🇷 [fr](../../../fr/docs/ops/SQLITE_RUNTIME.md) · 🇮🇪 [ga](../../../ga/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [gu](../../../gu/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ha](../../../ha/docs/ops/SQLITE_RUNTIME.md) · 🇮🇱 [he](../../../he/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [hi](../../../hi/docs/ops/SQLITE_RUNTIME.md) · 🇭🇷 [hr](../../../hr/docs/ops/SQLITE_RUNTIME.md) · 🇭🇺 [hu](../../../hu/docs/ops/SQLITE_RUNTIME.md) · 🇦🇲 [hy](../../../hy/docs/ops/SQLITE_RUNTIME.md) · 🇮🇩 [id](../../../id/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [ig](../../../ig/docs/ops/SQLITE_RUNTIME.md) · 🇮🇹 [it](../../../it/docs/ops/SQLITE_RUNTIME.md) · 🇯🇵 [ja](../../../ja/docs/ops/SQLITE_RUNTIME.md) · 🇬🇪 [ka](../../../ka/docs/ops/SQLITE_RUNTIME.md) · 🇰🇭 [km](../../../km/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [kn](../../../kn/docs/ops/SQLITE_RUNTIME.md) · 🇰🇷 [ko](../../../ko/docs/ops/SQLITE_RUNTIME.md) · 🇱🇹 [lt](../../../lt/docs/ops/SQLITE_RUNTIME.md) · 🇱🇻 [lv](../../../lv/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ml](../../../ml/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [mr](../../../mr/docs/ops/SQLITE_RUNTIME.md) · 🇲🇾 [ms](../../../ms/docs/ops/SQLITE_RUNTIME.md) · 🇲🇹 [mt](../../../mt/docs/ops/SQLITE_RUNTIME.md) · 🇲🇲 [my](../../../my/docs/ops/SQLITE_RUNTIME.md) · 🇳🇵 [ne](../../../ne/docs/ops/SQLITE_RUNTIME.md) · 🇳🇱 [nl](../../../nl/docs/ops/SQLITE_RUNTIME.md) · 🇳🇴 [no](../../../no/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [or](../../../or/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [pa](../../../pa/docs/ops/SQLITE_RUNTIME.md) · 🇵🇭 [phi](../../../phi/docs/ops/SQLITE_RUNTIME.md) · 🇵🇱 [pl](../../../pl/docs/ops/SQLITE_RUNTIME.md) · 🇵🇹 [pt](../../../pt/docs/ops/SQLITE_RUNTIME.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/SQLITE_RUNTIME.md) · 🇷🇴 [ro](../../../ro/docs/ops/SQLITE_RUNTIME.md) · 🇷🇺 [ru](../../../ru/docs/ops/SQLITE_RUNTIME.md) · 🇱🇰 [si](../../../si/docs/ops/SQLITE_RUNTIME.md) · 🇸🇰 [sk](../../../sk/docs/ops/SQLITE_RUNTIME.md) · 🇸🇮 [sl](../../../sl/docs/ops/SQLITE_RUNTIME.md) · 🇷🇸 [sr](../../../sr/docs/ops/SQLITE_RUNTIME.md) · 🇸🇪 [sv](../../../sv/docs/ops/SQLITE_RUNTIME.md) · 🇰🇪 [sw](../../../sw/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [ta](../../../ta/docs/ops/SQLITE_RUNTIME.md) · 🇮🇳 [te](../../../te/docs/ops/SQLITE_RUNTIME.md) · 🇹🇷 [tr](../../../tr/docs/ops/SQLITE_RUNTIME.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/SQLITE_RUNTIME.md) · 🇵🇰 [ur](../../../ur/docs/ops/SQLITE_RUNTIME.md) · 🇺🇿 [uz](../../../uz/docs/ops/SQLITE_RUNTIME.md) · 🇻🇳 [vi](../../../vi/docs/ops/SQLITE_RUNTIME.md) · 🇳🇬 [yo](../../../yo/docs/ops/SQLITE_RUNTIME.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/SQLITE_RUNTIME.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/SQLITE_RUNTIME.md)

---

OmniRoute จะเลือกไดรเวอร์ SQLite ขณะเริ่มต้นระบบผ่านลำดับการสำรอง 5 ขั้นตอน:

1. **`better-sqlite3` ที่รวมมาให้** (ผ่าน `dependencies` ใน `package.json`)
   — เร็วที่สุด เป็นไบนารีแบบเนทีฟ และติดตั้งโดย `npm install` เมื่อมีเครื่องมือสำหรับการบิลด์

2. **`better-sqlite3` ที่ติดตั้งขณะรันไทม์** (ใน `~/.omniroute/runtime/`)
   — ติดตั้งแบบหน่วงเวลาเมื่อเรียกใช้ครั้งแรก **หรือ** โดย `scripts/build/postinstall.mjs → scripts/postinstall.mjs`
   ตรวจสอบ magic bytes ของไฟล์ `.node` แบบเนทีฟ (ELF / Mach-O / PE) ก่อนโหลด
   เพื่อป้องกันไบนารีที่เสียหายหรือไม่ตรงกับแพลตฟอร์ม

3. **`node:sqlite`** (ไลบรารีมาตรฐานของ Node ≥22.5) — ไม่จำเป็นต้องบิลด์แบบเนทีฟ และจะถูกใช้เมื่อ
   ทั้งสองเส้นทางของ better-sqlite3 ล้มเหลว มีชุดฟีเจอร์ที่จำกัด

4. **`sql.js`** (WASM) — ตัวสำรองขั้นสุดท้าย ทำงานได้ทุกที่แต่ช้ากว่า
   และเขียนข้อมูลตามช่วงเวลาแทนที่จะเขียนแบบซิงโครนัส

## เหตุใดจึงซับซ้อนเช่นนี้?

- **Windows EBUSY**: `npm install -g omniroute@latest` อาจล้มเหลวหาก
  `better_sqlite3.node` ของเวอร์ชันก่อนหน้าถูกล็อกโดยโปรเซสที่กำลังทำงาน การติดตั้ง
  ขณะรันไทม์ใน `~/.omniroute/runtime/` ช่วยหลีกเลี่ยงแคช npm ส่วนกลาง
- **ไม่มีเครื่องมือสำหรับการบิลด์**: สภาพแวดล้อมบางประเภท (Windows ในองค์กรที่ไม่มี VS Build
  Tools, อิมเมจ Docker แบบขั้นต่ำ) ไม่สามารถคอมไพล์ `better-sqlite3` ได้ ตัวติดตั้งขณะรันไทม์
  จะดึงไบนารีที่บิลด์ไว้ล่วงหน้าจากรีจิสทรี npm ส่วนไดรเวอร์สำรอง
  ช่วยให้มั่นใจว่า OmniRoute ยังเริ่มทำงานได้แม้ขั้นตอนดังกล่าวล้มเหลว
- **ระบบที่แยกจากเครือข่าย**: หากไม่สามารถเข้าถึงรีจิสทรี npm ได้ `node:sqlite`
  หรือ `sql.js` จะรับประกันความสามารถพื้นฐานในการทำงาน

## การตรวจสอบ magic bytes

ก่อนโหลดไฟล์ `.node` ที่ติดตั้งขณะรันไทม์ OmniRoute จะอ่าน 8 ไบต์แรก
และเปรียบเทียบกับค่า magic ที่รู้จักของแต่ละแพลตฟอร์ม:

| แพลตฟอร์ม             | ไบต์ (ฐานสิบหก) | ป้ายกำกับ   |
| --------------------- | --------------- | ----------- |
| Linux                 | `7F 45 4C 46`   | `elf`       |
| macOS 64 บิต BE       | `FE ED FA CF`   | `macho`     |
| macOS 64 บิต LE       | `CF FA ED FE`   | `macho-le`  |
| macOS fat (universal) | `CA FE BA BE`   | `macho-fat` |
| Windows               | `4D 5A` (MZ)    | `pe`        |

หากค่า magic ไม่ตรงกัน → ไฟล์จะถูกละเว้น และดำเนินการสำรองไปยังขั้นตอนถัดไป

## การตรวจสอบไดรเวอร์ที่ใช้งานอยู่

```typescript
import { getDriverInfo } from "@/lib/db/core";

const info = getDriverInfo();
// { source: "bundled" | "runtime" | "runtime-installed-now" | "node-sqlite" | "sql-js",
//   kind: "better-sqlite3" | "node-sqlite" | "sql-js" }
```

## การควบคุมด้วยตนเอง

```bash
# ข้ามการอุ่นเครื่องหลังการติดตั้ง (สำหรับการติดตั้ง CI ที่รวดเร็ว)
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute

# บังคับติดตั้ง better-sqlite3 สำหรับรันไทม์ใหม่
rm -rf ~/.omniroute/runtime
omniroute  # จะติดตั้งใหม่เมื่อเริ่มทำงานครั้งถัดไป

# ตรวจสอบว่าไดรเวอร์ใดกำลังใช้งานอยู่
omniroute config db-info  # (หากมีคำสั่ง CLI นี้)
```

## การวินิจฉัยการหยุดชะงักแบบซิงโครนัส

เมื่อใช้ `better-sqlite3` ให้ตั้งค่า `OMNIROUTE_SQLITE_SLOW_MS=200` ก่อนเริ่มต้นระบบเพื่อเลือก
เปิดใช้การจับเวลาของอะแดปเตอร์แบบซิงโครนัส โดยค่าเริ่มต้นจะปิดอยู่ การดำเนินการที่เสร็จสิ้นและใช้เวลา
อย่างน้อยตามจำนวนมิลลิวินาทีที่กำหนดจะส่งคำเตือน `[SQLITE-SLOW]` ไม่เกินหนึ่งครั้งต่อ
สิบวินาทีต่ออะแดปเตอร์ คำเตือนจะมีเพียงไดรเวอร์ คลาสของการดำเนินการ
(`prepare`, `get`, `all`, `run`, `exec`, `pragma`, ธุรกรรม หรือการบำรุงรักษา) และ
เวลาที่ใช้เป็นมิลลิวินาที โดยไม่มี SQL, bindings, แถวข้อมูล, พาธ หรือข้อความข้อยกเว้น

นี่เป็นเครื่องมือช่วยวินิจฉัย ไม่ใช่การหมดเวลาหรือการปรับแต่งประสิทธิภาพคิวรี เครื่องมือนี้ไม่สามารถรายงาน
การดำเนินการที่ไม่คืนค่าเลย แยกความแตกต่างระหว่างงานของ CPU กับการรอดิสก์ ระบุ
SQL ที่แน่นอน หรือสังเกตการณ์การดำเนินการผ่านแฮนเดิลไดรเวอร์ดิบได้
ระยะเวลาของการสำรองข้อมูลแบบอะซิงโครนัสจะถูกละเว้นโดยเจตนา ส่วนไดรเวอร์ SQLite อื่นๆ จะไม่ได้รับ
การติดตามด้วยฟีเจอร์แบบเลือกเปิดใช้นี้ การปิดใช้งานตัวแปรจะคืนค่าอะแดปเตอร์ดั้งเดิม
โดยไม่มีตัวห่อสำหรับจับเวลา ไม่มีการเปลี่ยนแปลงสคีมาฐานข้อมูลหรือการกำหนดค่าที่จัดเก็บไว้

คำเตือนความหน่วงของ `/healthz` จะรายงานค่าสูงสุดของ event loop นับตั้งแต่ตัวอย่างก่อนหน้า
ไม่ใช่ค่าเฉลี่ยตลอดอายุการทำงาน ให้เทียบเวลาประทับกับคำเตือนการดำเนินการที่ช้า
และเมตริกของโฮสต์/พื้นที่จัดเก็บข้อมูล ก่อนสรุปว่าการหยุดชะงักเกิดจาก SQLite หรือความล้มเหลวของดิสก์

## เอกสารอ้างอิง

การนำไปใช้:

- `bin/cli/runtime/magicBytes.mjs` — ฟังก์ชันช่วยตรวจสอบ magic bytes ของไบนารี
- `bin/cli/runtime/sqliteRuntime.mjs` — ตัวเลือกไดรเวอร์ขณะรันไทม์แบบสำรอง 5 ขั้นตอน + ตัวติดตั้งแบบหน่วงเวลา
- `bin/cli/runtime/index.mjs` — ตัวประสานงานการเริ่มต้นระบบ (`warmUpRuntimes()`)
- `scripts/postinstall.mjs` — ฮุกหลังการติดตั้งของ npm (การอุ่นเครื่องที่ไม่ทำให้เกิดข้อผิดพลาดร้ายแรง)
- `src/lib/db/core.ts` — การส่งออก `ensureDbInitialized()` / `getDriverInfo()`

## โทโพโลยีแบบผู้เขียนรายเดียว (ไม่รองรับ HA)

ลำดับการสำรองไดรเวอร์ข้างต้นยังคงทำงานใน **โปรเซสเดียว** SQLite
เริ่มต้นของ OmniRoute เป็นแบบ **ผู้เขียนรายเดียว**:

- อย่าเชื่อมต่อเรพลิกา OmniRoute สองตัวเข้ากับไฟล์ `storage.sqlite` เดียวกัน
- การรีสตาร์ตคอนเทนเนอร์ การดีพลอยแบบ Recreate การหยุดจาก OOM หรือการรีสตาร์ตจาก HEALTHCHECK จะตัด
  เซสชัน SSE ที่กำลังดำเนินการอยู่ทั้งหมด ไม่มีการระบายเซสชันในเส้นทางมาตรฐาน
- การตรวจสอบความพร้อมทำงานของออร์เคสเตรเตอร์ที่ถือว่า `/healthz` ซึ่งตอบสนองช้านั้นหยุดทำงาน จะยุติ
  เรพลิกาเพียงตัวเดียว ควรใช้การตรวจสอบความพร้อมทำงานผ่าน TCP + การตรวจสอบความพร้อมให้บริการผ่าน HTTP `/healthz` โปรดดู
  [คู่มือ Docker — ความพร้อมใช้งาน](../guides/DOCKER_GUIDE.md#availability-default-sqlite-is-single-replica)
  และ [คำแนะนำเกี่ยวกับโพรบ Kubernetes](./MONITORING_GUIDE.md#kubernetes-probe-recommendations)
