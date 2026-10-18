# Log export (မြန်မာ)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

OmniRoute ခေါ်ဆိုမှုမှတ်တမ်းများကို ပြင်ပ analytics store တစ်ခုသို့ စဉ်ဆက်မပြတ်၊ တိုးပွားပုံစံဖြင့် export လုပ်ခြင်း။

Logs dashboard tab သည် request history ကို SQLite (`call_logs`) တွင် သိမ်းဆည်းထားပြီး၊ ၎င်းကို
rotation နှင့် retention တို့ဖြင့် ကန့်သတ်ထားသည်။ Log export သည် တူညီသော record အစုကို သတ်မှတ်ထားသည့် အချိန်ဇယားအတိုင်း
ပြင်ပသို့ ပို့ပေးသောကြောင့် local database ထက် ပိုမိုကြာရှည်စွာ သိမ်းဆည်းနိုင်ပြီး အခြား data များနှင့် ချိတ်ဆက်အသုံးပြုနိုင်သည်။ BigQuery သည် ပထမဆုံး destination ဖြစ်ပြီး၊
pipeline သည် registry တစ်ခုဖြစ်သောကြောင့် နောက်ထပ် destination များကို ထပ်မံထည့်သွင်းနိုင်သည်။

---

## 1. အလုပ်လုပ်ပုံ

```
server (config ကို စာဝှက်ဖြည် + စစ်ဆေးအတည်ပြုခြင်း၊ cursor ကို ညှိနှိုင်းခြင်း)
  → IPC စတင် → သီးခြားခွဲထားသော exportChild OS process
    → read-only storage.sqlite → မျှဝေထားသော call-log query/mapping
      → async artifact hydration → destination prepare()/send()
        → batch IPC → server က cursor ကို သိမ်းဆည်း → ack IPC
          → နောက် batch; done IPC → server က အောင်မြင်မှုကို မှတ်တမ်းတင်
```

- **အချိန်ဇယား** — `JobRegistry` cron job တစ်ခုဖြစ်သော `log_export` ကို မူလသတ်မှတ်ချက်အရ `0 * * * *` (တစ်နာရီတစ်ကြိမ်၊
  UTC) ဖြင့် လုပ်ဆောင်သည်။ `src/lib/initCloudSync.ts` တွင် register လုပ်ထားပြီး `OMNIROUTE_LOG_EXPORT_CRON` ဖြင့်
  override လုပ်နိုင်သည်။ tick တစ်ကြိမ်စီတွင် **ဖွင့်ထားသော** destination အားလုံးကို အစဉ်လိုက် အပြီးသတ်ပို့ဆောင်သည်။
- **Cursor** — SQLite ၏ သွယ်ဝိုက်သော `call_logs.rowid` ကို destination တစ်ခုစီအလိုက်
  `log_export_destinations.cursor_row_id` တွင် သိမ်းဆည်းထားသည်။ `timestamp` ကို တမင်တကာ cursor အဖြစ် မသုံးထားပါ။
  အကြောင်းမှာ caller များက ၎င်းတို့၏ကိုယ်ပိုင်တန်ဖိုးကို ပေးနိုင်သဖြင့် နှေးကွေးသော request တစ်ခုကို နောက်မှစတင်သည့်
  ပိုမြန်သော request တစ်ခုအပြီးတွင် ရေးသားမိနိုင်ပြီး timestamp cursor က ထို request ကို ကျော်သွားနိုင်သောကြောင့် ဖြစ်သည်။
- **Batch ခွဲခြင်း** — request တစ်ခုလျှင် `batch_size` row (မူလ 500)၊ run တစ်ကြိမ်လျှင်
  `max_rows_per_run` row (မူလ 10000) ဖြစ်ပြီး ကြီးမားသော backlog တစ်ခုက run တစ်ကြိမ်ကို ပိတ်ဆို့မနေဘဲ
  tick အကြိမ်များစွာအတွင်း တဖြည်းဖြည်း အပြီးသတ်နိုင်စေသည်။
- **ပို့ဆောင်ခြင်း** — `send()` ပြီးဆုံးသွားမှသာ cursor ကို ရှေ့တိုးသည်။ မအောင်မြင်သော batch တစ်ခုသည်
  cursor ကို မူလနေရာတွင် ထားရှိသဖြင့် တူညီသော row များကို နောက် run တွင် ပြန်လည်ကြိုးစားမည်။ အာမခံချက်မှာ
  စစ်မှန်သော exactly-once မဟုတ်ဘဲ at-least-once နှင့် destination ဘက်မှ de-duplication ဖြစ်သည်။ BigQuery သည်
  row တစ်ခုစီကို call-log id ဖြင့် key သတ်မှတ်ပြီး ၎င်း၏ကိုယ်ပိုင် dedup window အတွင်း best-effort အခြေခံဖြင့်
  ထို key ကို လေးစားအသုံးပြုသည်။
- **ထပ်တူလုပ်ဆောင်မှု ကာကွယ်ချက်** — cron tick နှင့် `POST .../run` သည် တစ်ချိန်တည်း စတင်နိုင်သည်။
  အပြီးသတ်ပို့ဆောင်နေပြီးသား destination ကို နှစ်ကြိမ်လုပ်ဆောင်မည့်အစား ကျော်သွားမည် (run result တွင် `skipped: true`)။
  ထို့ကြောင့် တစ်ပြိုင်နက် run သည် batch တစ်ခုကို ပြန်ပို့ခြင်း သို့မဟုတ် cursor ကို နောက်ပြန်ရေးခြင်း မပြုနိုင်ပါ။
- **Purge ပြီးနောက် ပြန်လည်ရယူခြင်း** — `cursor_row_id` သည် `MAX(rowid)` ထက် မြင့်သွားပါက (table တစ်ခုလုံးကို
  purge လုပ်ပြီး rowid များ ပြန်စထားပါက) runner သည် အမြဲတမ်း data မမြင်တော့ခြင်းအစား 0 သို့ ပြန်ရစ်မည်။

### သီးခြား runner နှင့် ကန့်သတ်ချက်များ

Node ပေါ်ရှိ destination run တစ်ခုစီသည် သီးခြားဖြစ်ပြီး သက်တမ်းတိုသော OS child process (`worker_threads` မဟုတ်ဘဲ
IPC ပါသည့် `child_process`) တစ်ခုကို စတင်သည်။ Body ဖတ်ခြင်း၊ payload JSON parsing/serialization၊ destination
`prepare()` နှင့် destination network I/O အားလုံးသည် server ၏ event loop ပေါ်တွင် မဟုတ်ဘဲ ထို process တွင်
လုပ်ဆောင်သည်။ Configuration နှင့် သေးငယ်သော progress message များသာ IPC ကို ဖြတ်သန်းပြီး export လုပ်ထားသော
record များသည် server ထံ မည်သည့်အခါမျှ ပြန်မလာပါ။ cron job နှင့် Run now route တို့သည် တူညီသော public result
နှင့် ထပ်တူလုပ်ဆောင်မှု ကာကွယ်ချက်ကို ဆက်လက်ထားရှိသည်။

child သည် server က ဖြေရှင်းသတ်မှတ်ထားသော `DATA_DIR/storage.sqlite` ကို `node:sqlite` အသုံးပြု၍ read-only အဖြစ်
ဖွင့်ပြီး `busy_timeout=5000` နှင့် `query_only=ON` ကို အသုံးပြုသည်။ ၎င်းသည် DB singleton တစ်ခုမျှ import မလုပ်ဘဲ
migration၊ backup သို့မဟုတ် SQLite update များလည်း မလုပ်ပါ။ ပျောက်ဆုံး/ပျက်စီးနေသော artifact bookkeeping
(corrupt-artifact UPDATE အပါအဝင်) သည် dashboard detail path တွင်သာ ဆက်ရှိနေသည်။ path နှစ်ခုစလုံးသည် pure
detail resolver တစ်ခုကို မျှဝေသုံးသည်။ export သည် asynchronous filesystem read များနှင့် တူညီသော
artifact → legacy inline → legacy disk → none ဖြေရှင်းမှုအစဉ်ကို အသုံးပြုသည်။ run တစ်ခုသည် child က reader ကို
ဖွင့်သည့်အချိန်တွင် အများဆုံး insertion rowid ကို snapshot ယူသည်။ နောက်မှ insert လုပ်သည့် data များသည်
နောက် run အထိ စောင့်ရမည်။ ဤအရာသည် insertion boundary ဖြစ်ပြီး သက်တမ်းရှည် SQLite transaction မဟုတ်ပါ။
network စောင့်ဆိုင်းချိန်များအတွင်း WAL writer များနှင့် checkpoint များသည် လွတ်လပ်စွာ ဆက်လက်လုပ်ဆောင်နိုင်သည်။
ရှိပြီးသား row များ၏ update/delete များကို ဤ boundary က အေးခဲမထားပါ။

လက်ခံထားသော batch တစ်ခုစီအပြီးတွင် child သည် acknowledgement ကို စောင့်သည်။ server သည် ပထမဦးစွာ
`advanceLogExportCursor` ဖြင့် cursor ကို သိမ်းဆည်းပြီးနောက် `ack` ကို ပို့သည်။ ၎င်းမတိုင်မီ နောက် batch ကို
မစတင်ပါ။ ပို့ဆောင်မှု မအောင်မြင်ခြင်း၊ crash သို့မဟုတ် timeout ဖြစ်ခြင်းသည် ထို batch ၏ cursor ကို မတိုးဘဲ
မအောင်မြင်မှုအဖြစ် မှတ်တမ်းတင်သည်။ ယခင်က acknowledgement ရရှိထားသော batch များသည် commit ဖြစ်ပြီးသားအတိုင်း
ဆက်ရှိနေမည်။ acknowledgement မရသေးသော batch တစ်ခုသာ အများဆုံး ပြန်ပို့နိုင်သည်။ `done` ရရှိပြီး child က
ပြဿနာမရှိဘဲ exit လုပ်ပြီးမှသာ အောင်မြင်မှုကို မှတ်တမ်းတင်သည်။ မအောင်မြင်မှုများဖြစ်ပါက child ကို SIGTERM ဖြင့်
ရပ်တန့်ပြီး 500 ms နောက်တွင် SIGKILL သို့ မြှင့်တင်အသုံးပြုကာ runner သည် process ပိတ်သွားသည်အထိ စောင့်သည်။

| Environment variable                          | မူလတန်ဖိုး | ရည်ရွယ်ချက်                                      |
| --------------------------------------------- | ---------- | ------------------------------------------------ |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000     | Destination တစ်ခုချင်းစီ၏ wall-clock ကန့်သတ်ချက် |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024       | Child V8 old-space ကန့်သတ်ချက် (MB)              |

မမှန်ကန်သော၊ သုည သို့မဟုတ် အနုတ်တန်ဖိုးဖြစ်သော၊ ကိန်းပြည့်မဟုတ်သော တန်ဖိုးများအတွက် မူလတန်ဖိုးများကို
အသုံးပြုသည်။ heap setting သည် စုစုပေါင်း RSS ကန့်သတ်ချက်မဟုတ်ပါ။ အလွန်ကြီးမားသော batch များသည် child memory
ကို ကုန်ခမ်းစေနိုင်သေးပြီး run ကို ဘေးကင်းစွာ မအောင်မြင်စေနိုင်သည်။ မူလ 1024 MB သည် body များဖွင့်ထားသည့်
512 KiB artifact ပါဝင်သော မူလ 500-row batch အတွက် BigQuery ၏ byte-chunked JSON serialization အပါအဝင်
အပိုနေရာ ချန်ထားပေးသည်။ ၎င်းသည် 10000-row body batch တစ်ခုကို ဘေးကင်းစေခြင်း မဟုတ်ပါ။ V8 heap ကုန်ခမ်းမှုသည်
လုပ်ဆောင်ချက်ယူနိုင်သော မအောင်မြင်မှုတစ်ခုကို မှတ်တမ်းတင်သည်—batch size ကို လျှော့ပါ သို့မဟုတ်
`OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` ကို တိုးပါ။ cursor သည် နောက်ဆုံး acknowledgement ရထားသော
batch တွင် ဆက်ရှိနေမည်။ သမိုင်းဝင် inline/disk body များကို ခေတ်သစ် artifact cap က အကျုံးမဝင်ပါ။
အထူးသဖြင့် memory ကန့်သတ်ထားသော container များအတွင်း operator များသည် RSS ကို သီးခြားတွက်ချက်စီမံရမည်။

child သည် ဖြေရှင်းသတ်မှတ်ထားသော `DATA_DIR`၊ `NODE_ENV`၊ အတိအလင်းသတ်မှတ်ထားသော `TZ` (legacy filename
local-time resolution)၊ ရှိနေပါက `ELECTRON_RUN_AS_NODE` နှင့် အောက်ပါ outbound input များကိုသာ ဆက်ခံသည်—
`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (၎င်းတို့၏ lowercase ပုံစံများပါဝင်သည်)၊
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`။
global Undici dispatcher တစ်ခုသည် `NO_PROXY` အပါအဝင် server ၏ pure environment-proxy resolution နှင့်
local-host bypass rule များကို မျှဝေအသုံးပြုသည်။ ၎င်းသည် `proxyFetch.ts` သို့မဟုတ် ယင်း၏ DB/feature flag များကို
import မလုပ်ပါ။ Proxy credential များကို forwarded output နှင့် မှတ်တမ်းတင်ထားသော error များမှ ဖုံးကွယ်ထားသည်။
Destination credential များသည် argv သို့မဟုတ် environment မှ မည်သည့်အခါမျှ မသွားဘဲ start IPC message
တစ်ခုတည်းမှသာ သွားသည်။ output/error forwarding တွင် prefix ထည့်ထားပြီး sensitive data များကို ဖယ်ရှားထားသည်။
cron run တိုင်းတွင် Node ၏ SQLite warning ထပ်မံမပေါ်စေရန် child exec argument များ၌ `ExperimentalWarning`
တစ်ခုတည်းကိုသာ ပိတ်ထားပြီး အခြား warning အမျိုးအစားများကို ဆက်လက်မြင်နိုင်သည်။

ဦးတည်ရာ module များကို Next.js/server-only dependency များမပါဘဲ import လုပ်နိုင်ရမည်။ လက်ရှိ
BigQuery implementation သည် ထိုသတ်မှတ်ချက်ကို ဖြည့်ဆည်းထားပြီးဖြစ်သည်။ Access-token cache များသည် child
run အတွင်း၌သာ တည်ရှိပြီး run များအကြား ဆက်လက်မတည်ရှိပါ။ Node သည် ပံ့ပိုးထားသော runtime ဖြစ်သည် (`package.json` engines)၊ သို့သော် README ၏ Bun
ထည့်သွင်းခြင်းအပိုင်းနှင့် `Dockerfile.bun` တို့သည် `bun:sqlite` (`src/lib/db/core.ts` / adapter များ) ကိုအသုံးပြုသည့်
production compatibility လမ်းကြောင်းကိုလည်း ဖော်ပြထားသည်။ ထို့ကြောင့် Bun အောက်တွင် export များသည် ယခင်
in-process လမ်းကြောင်းကို ဆက်လက်ထိန်းသိမ်းထားပြီး တစ်ကြိမ်သာ warning ထုတ်ပေးသည်- child heap/timeout isolation ကို အသုံးမပြုနိုင်ပါ။
event-loop နှင့် OOM isolation အတွက် Node ကို အသုံးပြုပါ။ ဤနေရာတွင် Bun ကို dev-only အဖြစ် မသတ်မှတ်ထားပါ။

`includeBodies` ကို ဖွင့်ထားသည့်အခါ တစ်နာရီစာ payload backlog စုဆောင်းခြင်းအစား
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"` ကဲ့သို့ မိနစ်အဆင့် cadence ကို ဦးစားပေးပါ။
Batch နှင့် row limit များက run တစ်ခုစီကို ဆက်လက်ကန့်သတ်ထားသည်။ Process startup ကုန်ကျစရိတ်ကို run တစ်ခုစီ၏ ဦးတည်ရာတစ်ခုချင်းစီအတွက် ပေးရသည်။
ဤနည်းလမ်းသည် စုစုပေါင်း CPU အသုံးပြုမှုကို လျှော့ချခြင်းမဟုတ်ဘဲ server event-loop isolation အတွက် startup ကုန်ကျစရိတ်အနည်းငယ်နှင့် လဲလှယ်ခြင်းဖြစ်သည်။

### Payload များ (prompt များနှင့် completion များ)

ပုံမှန်အားဖြင့် export တွင် Logs **list** က ပြသသည့် summary field များသာ ပါဝင်သည်။
**Export prompts and responses** (`includeBodies`) ကို ဖွင့်လိုက်ပါက call တစ်ခုစီအတွက် Logs **detail**
pane က ပြသသည့်အရာများကို ထပ်မံပို့ဆောင်သည်-

| Field                            | ပါဝင်သည့်အရာ                                                         |
| -------------------------------- | -------------------------------------------------------------------- |
| `request_body` / `response_body` | Dashboard က render လုပ်ပြသည့် call payload များ                      |
| `pipeline_route_decision`        | Router က ရွေးချယ်ခဲ့သည့် target နှင့် model                          |
| `pipeline_client_request`        | Client က ပေးပို့ခဲ့သည့်အတိုင်း အတိအကျဖြစ်သော raw request             |
| `pipeline_openai_request`        | Internal OpenAI ပုံစံသို့ ပြောင်းလဲပြီးနောက်ရှိ request              |
| `pipeline_provider_request`      | Provider dialect ဖြင့် upstream သို့ အမှန်တကယ်ပေးပို့ခဲ့သည့် request |
| `pipeline_provider_response`     | Raw upstream response                                                |
| `pipeline_client_response`       | Caller ထံ ပြန်လည်ပေးအပ်ခဲ့သည့်အရာ                                    |
| `pipeline_error`                 | မအောင်မြင်သော call အတွက် pipeline-level error အသေးစိတ်               |
| `bodies_truncated`               | အထက်ပါ field တစ်ခုခုသည် `maxBodyBytes` သို့ ရောက်ရှိခဲ့လျှင် True    |

၎င်းသည် prompt အကြောင်းအရာဖြစ်သောကြောင့် ပုံမှန်အားဖြင့် **ပိတ်ထားသည်**၊ ထို့အပြင် ဦးတည်ရာတစ်ခုချင်းစီအလိုက် ရည်ရွယ်ချက်ရှိရှိ ရွေးချယ်နိုင်စေထားသည်။
Export နှင့် `getCallLogById` တို့သည် detail
resolution ကို မျှဝေအသုံးပြုသောကြောင့် ပို့ဆောင်သည့်အရာသည် dashboard က ပြသသည့်အရာပင်ဖြစ်သည်- payload များကို
ရေးသားသိမ်းဆည်းချိန်တွင် PII ဖယ်ရှားသန့်စင်ခြင်းနှင့် secret ဖုံးကွယ်ခြင်းတို့ ပြုလုပ်ပြီးသားဖြစ်ကာ
`noLog` API key ဖြင့် ပြုလုပ်သည့် call သည် payload လုံးဝသိမ်းဆည်းခြင်းမရှိသဖြင့် export လုပ်ရန် မည်သည့်အရာမျှ မရှိပါ။

Payload များကို filesystem artifact မှ row တစ်ခုချင်းစီအလိုက် ဖတ်ယူသောကြောင့် hydration သည် ၎င်းကို တောင်းဆိုထားသည့် ဦးတည်ရာများအတွက်သာ
လုပ်ဆောင်သည်။ Artifact ပျောက်ဆုံးနေခြင်း သို့မဟုတ် ပျက်စီးနေခြင်းဖြစ်ပါက batch ပျက်ကွက်ပြီး cursor ရပ်တန့်နေစေခြင်းအစား
၎င်း၏ summary ကို null payload များဖြင့် export လုပ်သည်။

`maxBodyBytes` (မူလတန်ဖိုး 262144) သည် field တစ်ခုချင်းစီကို ကန့်သတ်သည်။ ပိုရှည်သော payload များကို
**ဖယ်ရှားပစ်ခြင်းမဟုတ်ဘဲ ဖြတ်တောက်သည်** — ဖြတ်တောက်ထားသော prompt တစ်ခုကပင် "ဘာကိုမေးခဲ့သလဲ" ဟူသည်ကို ဖြေဆိုနိုင်ဆဲဖြစ်သည် — ထို့အပြင် row ကို
`bodies_truncated` ဖြင့် အမှတ်အသားပြုသည်။ Stream လုပ်ထားသော chunk-by-chunk delta များကို export မလုပ်ပါ။ စုစည်းပြီးသား response သည်
`pipeline_provider_response` နှင့် `pipeline_client_response` တို့တွင် ရှိပြီးသားဖြစ်သည်။

---

## 2. ဖိုင်များ

| အစိတ်အပိုင်း                | တည်နေရာ                                      |
| --------------------------- | -------------------------------------------- |
| ဦးတည်ရာ contract            | `src/lib/logExport/types.ts`                 |
| Registry                    | `src/lib/logExport/registry.ts`              |
| လျှို့ဝှက်ချက် ကိုင်တွယ်မှု | `src/lib/logExport/secrets.ts`               |
| Runner (မူလ IPC)            | `src/lib/logExport/runner.ts`                |
| Process lifecycle           | `src/lib/logExport/childRunner.ts`           |
| Child entry                 | `src/lib/logExport/exportChild.ts`           |
| ဖတ်ရှုရန်သီးသန့် opener     | `src/lib/db/logExportReadOnly.ts`            |
| မျှဝေထားသော query/mapping   | `src/lib/usage/callLogExportQueries.ts`      |
| အသေးစိတ် resolver           | `src/lib/usage/callLogDetailResolver.ts`     |
| API projection              | `src/lib/logExport/presenter.ts`             |
| BigQuery ဦးတည်ရာ            | `src/lib/logExport/destinations/bigquery.ts` |
| Google SA authentication    | `src/lib/logExport/googleServiceAccount.ts`  |
| Call-log ရင်းမြစ်           | `src/lib/usage/callLogExportSource.ts`       |
| အမြဲတမ်းသိမ်းဆည်းမှု        | `src/lib/db/logExportDestinations.ts`        |
| Cron အလုပ်                  | `src/lib/jobs/logExportJob.ts`               |
| REST အလွှာ                  | `src/app/api/log-export/`                    |
| Dashboard စာမျက်နှာ         | `src/app/(dashboard)/dashboard/log-export/`  |

Schema: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

Route အားလုံးတွင် စီမံခန့်ခွဲမှုဆိုင်ရာ အထောက်အထားစစ်ဆေးခြင်း (`requireManagementAuth`) ပါဝင်သည်။ Secret များကို မည်သည့်အခါမျှ ပြန်မပေးပါ-
သိမ်းဆည်းထားသော secret ကို စာသားအတိအကျ `__stored__` အဖြစ် ပြန်ပေးပြီး update လုပ်စဉ် ထိုတန်ဖိုးကို ပြန်ပို့ခြင်းက
သိမ်းဆည်းထားသော credential ကို ဆက်လက်ထိန်းသိမ်းထားသည်။

Secret ပါရှိကြောင်း type က သတ်မှတ်ထားသော destination တစ်ခုကို ဖန်တီးခြင်း သို့မဟုတ် update လုပ်ခြင်းအတွက် **`STORAGE_ENCRYPTION_KEY`
လိုအပ်သည်**။ ၎င်းမရှိပါက `encrypt()` သည် အသံတိတ် passthrough အဖြစ် လုပ်ဆောင်သောကြောင့် credential ကို
SQLite ထဲသို့ plaintext ဖြင့် ထည့်မည့်အစား write ကို 400 ဖြင့် ငြင်းပယ်သည် (Telegram webhook တွင် သုံးသည့် guard နှင့် အတူတူဖြစ်သည်)။

| Method   | Path                                     | ရည်ရွယ်ချက်                                                                 |
| -------- | ---------------------------------------- | --------------------------------------------------------------------------- |
| `GET`    | `/api/log-export/types`                  | Destination type များ + ၎င်းတို့၏ config field စာရင်း                       |
| `GET`    | `/api/log-export/destinations`           | Destination များကို စာရင်းပြုစုခြင်း (secret များကို ဖုံးကွယ်ထားသည်)        |
| `POST`   | `/api/log-export/destinations`           | Destination တစ်ခု ဖန်တီးခြင်း                                               |
| `GET`    | `/api/log-export/destinations/{id}`      | တစ်ခုကို ဖတ်ရှုခြင်း                                                        |
| `PUT`    | `/api/log-export/destinations/{id}`      | အမည် / enabled / config / batching ကို update လုပ်ခြင်း                     |
| `DELETE` | `/api/log-export/destinations/{id}`      | ဖျက်ခြင်း                                                                   |
| `POST`   | `/api/log-export/destinations/{id}/test` | Credential များကို စမ်းသပ်စစ်ဆေးပြီး မည်သည့်အရာမျှ မရေးခြင်း                |
| `POST`   | `/api/log-export/destinations/{id}/run`  | ချက်ချင်း drain လုပ်ခြင်း၊ scheduled run နှင့် တူညီသော path ကို အသုံးပြုသည် |
| `GET`    | `/api/log-export/status`                 | Cron အခြေအနေ၊ လတ်တလော run များ၊ target တစ်ခုစီ၏ backlog                     |

`GET /api/log-export/types` ကြောင့် UI သည် generic ဖြစ်လာသည်- dashboard form ကို
ပြန်ရရှိလာသော field descriptor များမှ render လုပ်သောကြောင့် destination အသစ်တစ်ခုအတွက် UI ပြောင်းလဲရန် မလိုအပ်ပါ။

---

## 4. BigQuery destination

Config key များ (`type: "bigquery"`):

| Key                  | မှတ်ချက်များ                                                                                   |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| `projectId`          | Dataset ကို ထိန်းသိမ်းထားသော GCP project                                                       |
| `datasetId`          | `[A-Za-z0-9_]+`                                                                                |
| `tableId`            | `[A-Za-z0-9_]+`                                                                                |
| `location`           | Dataset ကို ဖန်တီးရန် လိုအပ်မှသာ အသုံးပြုသည် (မူလတန်ဖိုး `EU`)                                 |
| `serviceAccountJson` | Service-account key။ Secret ဖြစ်သည်- သိမ်းဆည်းထားစဉ် encrypt လုပ်ပြီး မည်သည့်အခါမျှ ပြန်မပေးပါ |
| `autoCreate`         | ပထမဆုံး export လုပ်စဉ် dataset နှင့် table ကို ဖန်တီးသည် (မူလတန်ဖိုး `true`)                   |

Service account သည် target table အတွက် `bigquery.tables.updateData` လိုအပ်ပြီး
`autoCreate` ဖွင့်ထားချိန်တွင် `bigquery.datasets.create` / `bigquery.tables.create` ကိုလည်း လိုအပ်သည်။

သတ်မှတ်ထားသော batch သည် HTTP unit မဟုတ်ဘဲ **cursor** unit ဖြစ်သည်- `send()` က ၎င်းကို
အများဆုံး row 500 ပါဝင်သော insertAll call များအဖြစ် ခွဲပေးသောကြောင့် ကြီးမားသော `batch_size` သည် BigQuery ၏ 10 MB request ကန့်သတ်ချက်ကို မကျော်လွန်စေနိုင်ပါ။
ယာယီ status များ (408/429/500/502/503/504) ကို တူညီသော insertIds များအား ပြန်လည်အသုံးပြု၍ exponential
backoff ဖြင့် သုံးကြိမ်အထိ ထပ်မံကြိုးစားသည်။ Auth နှင့် schema failure များအတွက်မူ run ကို အလဟဿကုန်ဆုံးစေမည့်အစား
ပထမဆုံး ကြိုးစားမှုတွင်ပင် throw လုပ်သည်။

မကြာသေးမီက ဖန်တီးထားသော table ကို streaming endpoint က မမြင်နိုင်သေးသဖြင့်
စက္ကန့်အနည်းငယ်ကြာ 404 ပြန်ပေးသည်။ ထို 404 ကို ထပ်မံကြိုးစားသော်လည်း **ဤ run က table ကို ဖန်တီးထားသည့်အခါမှသာ** ဖြစ်သည်-
အမှန်တကယ် မရှိသော table သည် ချက်ချင်းပင် fail ဖြစ်သည်။ မကြာသေးမီက ဖျက်ထားသော table အမည်အောက်တွင်
table တစ်ခုကို ပြန်လည်ဖန်တီးပါက BigQuery သည် streaming insert များကို မိနစ်အတော်ကြာ ငြင်းပယ်မည်ဖြစ်ကြောင်း သတိပြုပါ။ ၎င်းသည်
ဖျက်ပြီးနောက် ပြန်လည်ဖန်တီးခြင်း၏ သဘောသဘာဝဖြစ်သောကြောင့် table ကို ဖျက်ပြီး ပြန်ထည့်ခြင်းထက် table အမည်အသစ်ကို ပိုမိုနှစ်သက်သင့်သည်။

**Partial failure တစ်ခုသည် HTTP 200 နှင့်အတူ အလွတ်မဟုတ်သော `insertErrors[]` အဖြစ် ရောက်ရှိလာသည်။** ၎င်းကို
failure အဖြစ် သတ်မှတ်ပြီး throw လုပ်သည်။ ထို့ကြောင့် BigQuery က လက်မခံခဲ့သော row များကို ကျော်၍ cursor ရှေ့တိုးသွားခြင်းကို
ရပ်တန့်စေသည်။ `tests/unit/log-export-bigquery.test.ts` က ထိုအပြုအမူကို အတည်ပြုထားသည်။

Transport သည် ရိုးရိုး REST ဖြစ်သည်- self-signed RS256 assertion ကို access token တစ်ခုအတွက်
`https://oauth2.googleapis.com/token` တွင် လဲလှယ်ပြီးနောက် row များကို `tabledata.insertAll` သို့ ပို့သည်။ မည်သည့် Google SDK ကိုမျှ
ထည့်သွင်းမထားပါ။ Access token များကို (service account, scope) တစ်စုံစီအလိုက် process အတွင်း cache လုပ်ထားသည်။

ဖန်တီးထားသော table တွင် Logs tab ၏ field တစ်ခုစီအတွက် column တစ်ခုစီနှင့် `exported_at` ပါဝင်ပြီး
call log များကို အမှန်တကယ် query လုပ်ပုံနှင့် ကိုက်ညီအောင် ဖွဲ့စည်းထားသည်-

- **`timestamp` အပေါ် နေ့အလိုက် partition ခွဲထားသည်**၊ ထို့ကြောင့် ရက်စွဲဖြင့် ကန့်သတ်ထားသော query တစ်ခုသည် ထိုရက်များကိုသာ scan လုပ်သည်။
- **`api_key_name`, `provider`, `model`, `status` အလိုက် clustered လုပ်ထားသည်** (ထိုအစဉ်အတိုင်း)၊ ထို့ကြောင့်
  မည်သူက run ခဲ့သည်၊ မည်သည့်နေရာသို့ သွားသည် သို့မဟုတ် fail ဖြစ်ခဲ့ခြင်းရှိမရှိတို့ဖြင့် filter လုပ်သည့်အခါ partition တစ်ခုစီအတွင်းရှိ block များကို ဖယ်ရှားနိုင်သည်။ BigQuery သည်
  clustering column အများဆုံး လေးခုအထိ ခွင့်ပြုပြီး အစဉ်သည် အရေးကြီးသည်- `api_key_name` တစ်ခုတည်းအပေါ် filter လုပ်ခြင်းက
  prune လုပ်နိုင်သော်လည်း `status` တစ်ခုတည်းအပေါ် filter လုပ်ခြင်းက မလုပ်နိုင်ပါ။
- **ရွေးချယ်အသုံးပြုနိုင်သော partition retention** ကို `partitionExpirationDays` မှတစ်ဆင့် သတ်မှတ်နိုင်သည် (`0` သည် အားလုံးကို ထိန်းသိမ်းထားသည်)၊
  table ကို ဖန်တီးသည့်အခါ အသုံးချသည်။

ဆက်တင်နှစ်ခုစလုံးသည် ဖန်တီးချိန်တွင် သက်ရောက်သည်။ ရှိပြီးသား table သည် ၎င်းတွင် ရှိနှင့်ပြီးသော layout ကို ဆက်လက်ထိန်းသိမ်းထားမည်ဖြစ်သောကြောင့်
၎င်းတို့ကို အသုံးပြုလိုပါက destination ကို table ID အသစ်တစ်ခုသို့ ညွှန်ပေးပါ။

`tests/unit/log-export-bigquery.test.ts` သည် mapper နှင့် table schema တို့ အမြဲတမ်း တစ်ပြေးညီရှိနေကြောင်း စစ်ဆေးအတည်ပြုသဖြင့် call-log column အသစ်တစ်ခုကို export လုပ်သည့်လမ်းကြောင်းတွင် အသိပေးခြင်းမရှိဘဲ ချန်လှပ်ထား၍ မရပါ။

Batch များကို row အရေအတွက်နှင့် serialise လုပ်ထားသော byte ပမာဏ **နှစ်ခုစလုံး** အပေါ်မူတည်၍ chunk များအဖြစ် ခွဲထားသည်။ Payload များကို export လုပ်သည့်အခါ row အရေအတွက်တစ်ခုတည်းဖြင့် မလုံလောက်ပါ။ Prompt များပါဝင်သော row 500 ခုသည် megabyte ဆယ်ဂဏန်းအထိ ရှိနိုင်ပြီး insertAll သည် 10 MB ကျော်သော request ကို ငြင်းပယ်သည်။ Row 500 ခု သို့မဟုတ် 9 MB သို့ ရောက်သည်နှင့်၊ မည်သည့်သတ်မှတ်ချက်က အရင်ပြည့်သည်ဖြစ်စေ chunk ကို ပိတ်သည်။

---

## 5. Destination တစ်ခု ထည့်သွင်းခြင်း

1. `LogExportDestinationType` ကို export လုပ်သည့် `src/lib/logExport/destinations/<name>.ts` ကို ဖန်တီးပါ။ ၎င်းတွင် Zod `configSchema`၊ UI အတွက် `fields` descriptor array၊ `secretFields` နှင့် `test()` / `prepare()` / `send(records)` တို့ကို ပြန်ပေးသည့် `createClient(config)` ပါဝင်ရမည်။
2. ၎င်းကို `src/lib/logExport/registry.ts` ရှိ `DESTINATIONS` array ထဲသို့ ထည့်ပါ။
3. `tests/unit/` အောက်တွင် စမ်းသပ်မှုများ ရေးပါ။

ပြောင်းလဲရန်မှာ ဤမျှသာ ဖြစ်သည်။ ဒေတာသိမ်းဆည်းမှု၊ cron job၊ REST layer၊ လျှို့ဝှက်ဒေတာ encryption နှင့် dashboard form တို့အားလုံးသည် registry ကို ဖတ်ရှုအသုံးပြုကြသည်။

Destination အသစ်တစ်ခုအတွက် စည်းမျဉ်းနှစ်ခုရှိသည်-

- တစ်စိတ်တစ်ပိုင်း မအောင်မြင်မှုဖြစ်ပါက `send()` သည် **မဖြစ်မနေ throw လုပ်ရမည်**။ Resolve ဖြစ်ခြင်းသည် "destination တွင် ဤ row များ ရှိနေပြီ" ဟု အဓိပ္ပာယ်ရပြီး cursor သည် ၎င်းတို့ကို အပြီးတိုင် ကျော်သွားမည်ဖြစ်သည်။
- အသုံးပြုသူပေးသည့် URL ကို လက်ခံသော destination သည် fetch မလုပ်မီ webhook များလုပ်ဆောင်သည့်နည်းအတိုင်း `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`) မှတစ်ဆင့် ၎င်း URL ကို validate လုပ်ရမည်။ BigQuery ၏ host များသည် constants များဖြစ်သောကြောင့် ဤအဆင့် မလိုအပ်ပါ။

---

## 6. လည်ပတ်အသုံးပြုခြင်း

- **Dashboard**: Integrations → Log export သို့ သွားပါ။ Destination တစ်ခု ထည့်ပါ၊ row များ မရေးဘဲ credentials များကို စစ်ဆေးရန် **Test** ကို run လုပ်ပြီးနောက် ၎င်းကို enable လုပ်ပါ။
- **Backlog**: Destination card တစ်ခုစီတွင် pending ဖြစ်နေသော row များနှင့် cursor ကို ပြသသည်။ `GET
/api/log-export/status` သည် အလားတူ ကိန်းဂဏန်းများအပြင် နောက်ဆုံး job run ၂၀ ခုကိုပါ ပြန်ပေးသည်။
- **Destination တစ်ခု မအောင်မြင်ခြင်းကြောင့် အခြား destination များ မအောင်မြင်စေပါ** — run summary သည် destination တစ်ခုချင်းစီ၏ status ကို `last_status` / `last_error` တွင် မှတ်တမ်းတင်ပြီး job run history က စုစုပေါင်းရလဒ်ကို ထိန်းသိမ်းထားသည်။
- **Destination တစ်ခုကို ဖျက်ခြင်းသည် ၎င်း၏ cursor ကိုပါ ဖျက်သည်။** ၎င်းကို ပြန်လည်ထည့်သွင်းပါက ထိန်းသိမ်းထားသော call log များအနက် အဟောင်းဆုံးမှ စတင်မည်ဖြစ်ပြီး destination တွင် ရှိနှင့်ပြီးသား ဖြစ်နိုင်သည့် row များကို ပြန်လည်ပို့မည်။ BigQuery တွင် row တစ်ခုချင်းစီ၏ `insertId` သည် BigQuery ၏ ကိုယ်ပိုင် de-duplication window အတွင်း၌သာ ထိုထပ်ပို့မှုကို စုပ်ယူနိုင်သောကြောင့် destination ကို ဖျက်ခြင်းထက် disable လုပ်ခြင်းကို ဦးစားပေးပါ။
