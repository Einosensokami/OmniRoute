# Log export (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

Continue, incrementeel exporteren van OmniRoute-aanroeplogboeken naar een externe analyticsopslag.

Het tabblad Logs van het dashboard bewaart de aanvraaggeschiedenis in SQLite (`call_logs`), die wordt begrensd door rotatie en retentie. Logexport verzendt dezelfde recordset volgens een schema, zodat deze langer kan worden bewaard dan in de lokale database en kan worden gecombineerd met andere gegevens. BigQuery is de eerste bestemming; de pipeline is een register, zodat meer bestemmingen eenvoudig kunnen worden toegevoegd.

---

## 1. Hoe het werkt

```
server (configuratie ontsleutelen + valideren, cursor afstemmen)
  → IPC starten → geïsoleerd exportChild-OS-proces
    → alleen-lezen storage.sqlite → gedeelde query/toewijzing voor oproeplogboeken
      → asynchrone hydratatie van artefacten → bestemming prepare()/send()
        → batch-IPC → server slaat cursor op → bevestigings-IPC
          → volgende batch; gereed-IPC → server registreert succes
```

- **Planning** — één `JobRegistry`-crontaak, `log_export`, standaard ingesteld op `0 * * * *` (elk uur,
  UTC). Geregistreerd in `src/lib/initCloudSync.ts`; kan worden overschreven met `OMNIROUTE_LOG_EXPORT_CRON`.
  Elke uitvoering verwerkt alle **ingeschakelde** bestemmingen, opeenvolgend.
- **Cursor** — SQLite's impliciete `call_logs.rowid`, per bestemming opgeslagen in
  `log_export_destinations.cursor_row_id`. `timestamp` is bewust niet de cursor: aanroepers
  kunnen hun eigen waarde opgeven, waardoor een langzame aanvraag kan worden weggeschreven na een snellere
  die later is gestart, en een tijdstempelcursor deze zou overslaan.
- **Batchverwerking** — `batch_size` rijen per aanvraag (standaard 500), `max_rows_per_run` rijen per uitvoering
  (standaard 10000), zodat een grote achterstand over meerdere uitvoeringen wordt verwerkt in plaats van één uitvoering te blokkeren.
- **Levering** — de cursor gaat pas vooruit nadat `send()` is voltooid. Bij een mislukte batch blijft de
  cursor staan, zodat dezelfde rijen bij de volgende uitvoering opnieuw worden geprobeerd. De garantie is
  ten minste één levering plus deduplicatie aan de bestemmingszijde, niet werkelijk exact één levering: BigQuery gebruikt
  de oproeplogboek-id als sleutel voor elke rij en respecteert die op basis van redelijke inspanning binnen het eigen deduplicatievenster.
- **Beveiliging tegen overlap** — de cronuitvoering en `POST .../run` kunnen tegelijkertijd worden geactiveerd. Een bestemming
  die al wordt verwerkt, wordt overgeslagen in plaats van tweemaal verwerkt (`skipped: true` in het uitvoeringsresultaat),
  zodat een gelijktijdige uitvoering geen batch opnieuw kan verzenden of de cursor terug kan schrijven.
- **Herstel na opschonen** — als `cursor_row_id` boven `MAX(rowid)` komt te liggen (de hele tabel is
  opgeschoond en de rij-id's zijn opnieuw begonnen), zet de runner de cursor terug naar 0 in plaats van permanent blind te blijven.

### Geïsoleerde runner en limieten

Elke bestemmingsuitvoering op Node start een afzonderlijk, kortlevend onderliggend OS-proces (`child_process`
met IPC, niet `worker_threads`). Het lezen van bodies, het parseren/serialiseren van payload-JSON, `prepare()`
van de bestemming en de netwerk-I/O van de bestemming worden allemaal daar uitgevoerd, niet in de eventloop van de server.
Alleen configuratie en kleine voortgangsberichten passeren IPC; geëxporteerde records keren nooit terug naar
de server. De crontaak en de route Nu uitvoeren behouden hetzelfde openbare resultaat en dezelfde beveiliging tegen overlap.

Het onderliggende proces opent de door de server bepaalde `DATA_DIR/storage.sqlite` alleen-lezen met `node:sqlite`,
met `busy_timeout=5000` en `query_only=ON`. Het importeert geen DB-singleton en voert geen
migraties, back-ups of SQLite-updates uit. Boekhouding voor ontbrekende/beschadigde artefacten (inclusief de
UPDATE voor beschadigde artefacten) blijft uitsluitend in het detailpad van het dashboard. Beide paden delen een zuivere
detailresolver; export gebruikt asynchrone bestandssysteemlezingen en dezelfde oplossingsvolgorde
artefact → verouderd inline → verouderde schijf → geen. Een uitvoering legt de maximale invoegings-rowid vast
wanneer het onderliggende proces zijn reader opent; latere invoegingen wachten tot de volgende uitvoering. Dit is een invoegingsgrens,
geen langdurige SQLite-transactie: WAL-writers en checkpoints blijven vrij tijdens
netwerkwachttijden. Updates/verwijderingen van bestaande rijen worden niet door deze grens bevroren.

Na elke geaccepteerde batch wacht het onderliggende proces op een bevestiging. De server slaat eerst
de cursor op met `advanceLogExportCursor` en verzendt daarna `ack`; er wordt geen volgende batch gestart voordat dit is gebeurd.
Een verzendfout, crash of time-out registreert een fout zonder die batch vooruit te zetten. Eerder
bevestigde batches blijven vastgelegd; maximaal de ene onbevestigde batch kan opnieuw worden verzonden.
Succes wordt pas geregistreerd na `done` en een correcte afsluiting van het onderliggende proces. Bij fouten wordt het onderliggende proces
beëindigd met SIGTERM, dat na 500 ms wordt geëscaleerd naar SIGKILL, en de runner wacht totdat het proces is afgesloten.

| Omgevingsvariabele                            | Standaard | Doel                                    |
| --------------------------------------------- | --------- | --------------------------------------- |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000    | Tijdsgrens per bestemming               |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024      | Limiet voor V8 old space van kind in MB |

Bij ongeldige/niet-positieve/niet-gehele waarden worden de standaardwaarden gebruikt. De heap-instelling is geen totale
RSS-limiet; zeer grote batches kunnen nog steeds het geheugen van het onderliggende proces uitputten en de uitvoering veilig laten mislukken.
De standaardwaarde van 1024 MB laat ruimte over voor de standaardbatch van 500 rijen met artefacten van 512 KiB
waarbij bodies zijn ingeschakeld, inclusief BigQuery's in byteblokken verdeelde JSON-serialisatie. Dit maakt een
batch van 10000 rijen met bodies niet veilig. Uitputting van de V8-heap registreert een bruikbare foutmelding: verlaag de batchgrootte
of verhoog `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB`; de cursor blijft bij de laatst
bevestigde batch staan. Historische inline-/schijfbodies vallen niet onder de moderne artefactlimiet.
Operators moeten het RSS-gebruik afzonderlijk begroten, vooral binnen containers met een geheugenlimiet.

Het onderliggende proces erft alleen de bepaalde `DATA_DIR`, `NODE_ENV`, expliciete `TZ` (oplossing op basis van lokale tijd
voor verouderde bestandsnamen), `ELECTRON_RUN_AS_NODE` indien aanwezig, en de volgende uitgaande invoerwaarden:
`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (en hun varianten in kleine letters),
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`.
Een globale Undici-dispatcher deelt de zuivere proxyresolutie op basis van omgevingsvariabelen en de regels voor het
omzeilen van lokale hosts van de server, inclusief `NO_PROXY`; deze importeert `proxyFetch.ts` of de bijbehorende DB-/functievlaggen niet.
Proxyreferenties worden geredigeerd uit doorgestuurde uitvoer en geregistreerde fouten. Bestemmingsreferenties
worden uitsluitend verzonden in één IPC-startbericht, nooit via argv of de omgeving; het doorsturen van uitvoer/fouten wordt
voorzien van een voorvoegsel en opgeschoond. Alleen `ExperimentalWarning` is uitgeschakeld in de uitvoeringsargumenten van het onderliggende proces om
te voorkomen dat Node's SQLite-waarschuwing bij elke cronuitvoering wordt herhaald; andere waarschuwingstypen blijven zichtbaar.

Bestemmingsmodules moeten importeerbaar zijn zonder Next.js-/server-only-afhankelijkheden. De bestaande
BigQuery-implementatie voldoet al aan dat contract. Access-token-caches blijven alleen bestaan gedurende de
child-run, niet tussen runs. Node is de ondersteunde runtime (`package.json` engines), maar de Bun-
installatiesectie in de README en `Dockerfile.bun` bieden ook een productiecompatibiliteitspad met
`bun:sqlite` (`src/lib/db/core.ts` / adapters). Onder Bun behouden exports daarom het eerdere
in-process-pad en geven ze een eenmalige waarschuwing: isolatie van child-heap en time-outs is niet beschikbaar. Gebruik
Node voor isolatie van de event-loop en OOM; Bun wordt hier niet uitsluitend als ontwikkelomgeving beschouwd.

Wanneer `includeBodies` is ingeschakeld, heeft een interval op minuutniveau de voorkeur, zoals
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"`, in plaats van elk uur een achterstand aan payloads op te bouwen.
Batch- en rijlimieten begrenzen nog steeds elke run. Het opstarten van een proces gebeurt per bestemming per run;
hiermee wordt een kleine opstartkost ingeruild voor isolatie van de server-event-loop, niet voor een lager totaal CPU-gebruik.

### Payloads (prompts en completions)

Standaard bevat de export alleen de samenvattingsvelden die in de **lijst** van Logs worden weergegeven. Als
**Prompts en antwoorden exporteren** (`includeBodies`) wordt ingeschakeld, wordt aanvullend verzonden wat het
**detailvenster** van Logs voor elke call weergeeft:

| Veld                             | Inhoud                                                                 |
| -------------------------------- | ---------------------------------------------------------------------- |
| `request_body` / `response_body` | De call-payloads zoals het dashboard ze weergeeft                      |
| `pipeline_route_decision`        | Welk target en model de router heeft gekozen                           |
| `pipeline_client_request`        | De ruwe request, precies zoals de client die stuurde                   |
| `pipeline_openai_request`        | Na omzetting naar de interne OpenAI-vorm                               |
| `pipeline_provider_request`      | Zoals daadwerkelijk upstream verzonden, in het dialect van de provider |
| `pipeline_provider_response`     | De ruwe upstream-response                                              |
| `pipeline_client_response`       | Wat aan de caller is teruggegeven                                      |
| `pipeline_error`                 | Foutdetails op pipeline-niveau voor een mislukte call                  |
| `bodies_truncated`               | Waar als een van de bovenstaande velden `maxBodyBytes` heeft bereikt   |

Dit is promptinhoud en staat daarom **standaard uit**; het is bewust een keuze per bestemming.
Wat wordt verzonden, is wat het dashboard weergeeft, omdat export en `getCallLogById` dezelfde
detailresolutie gebruiken: payloads zijn
al van PII ontdaan en secrets zijn geredigeerd wanneer ze worden opgeslagen, en voor een call met een
`noLog`-API-key wordt helemaal geen payload opgeslagen, zodat er niets te exporteren is.

Payloads worden per rij uit het bestandssysteemartifact gelezen, zodat hydratatie alleen wordt uitgevoerd voor bestemmingen
die daarom hebben gevraagd. Bij een ontbrekend of beschadigd artifact wordt de samenvatting geëxporteerd met null-payloads,
in plaats van dat de batch mislukt en de cursor geblokkeerd raakt.

`maxBodyBytes` (standaard 262144) begrenst elk veld. Langere payloads worden **afgekapt in plaats van
weggelaten** — een afgekorte prompt geeft nog steeds antwoord op de vraag "wat werd er gevraagd" — en de rij wordt gemarkeerd met
`bodies_truncated`. Chunk-voor-chunk gestreamde delta's worden niet geëxporteerd; de samengestelde response staat
al in `pipeline_provider_response` en `pipeline_client_response`.

---

## 2. Bestanden

| Onderdeel                 | Locatie                                      |
| ------------------------- | -------------------------------------------- |
| Doelcontract              | `src/lib/logExport/types.ts`                 |
| Register                  | `src/lib/logExport/registry.ts`              |
| Geheimenbeheer            | `src/lib/logExport/secrets.ts`               |
| Runner (bovenliggend IPC) | `src/lib/logExport/runner.ts`                |
| Proceslevenscyclus        | `src/lib/logExport/childRunner.ts`           |
| Onderliggend toegangspunt | `src/lib/logExport/exportChild.ts`           |
| Alleen-lezen-opener       | `src/lib/db/logExportReadOnly.ts`            |
| Gedeelde query/toewijzing | `src/lib/usage/callLogExportQueries.ts`      |
| Detailresolver            | `src/lib/usage/callLogDetailResolver.ts`     |
| API-projectie             | `src/lib/logExport/presenter.ts`             |
| BigQuery-doel             | `src/lib/logExport/destinations/bigquery.ts` |
| Google SA-authenticatie   | `src/lib/logExport/googleServiceAccount.ts`  |
| Gesprekslogbron           | `src/lib/usage/callLogExportSource.ts`       |
| Persistentie              | `src/lib/db/logExportDestinations.ts`        |
| Cron-taak                 | `src/lib/jobs/logExportJob.ts`               |
| REST-laag                 | `src/app/api/log-export/`                    |
| Dashboardpagina           | `src/app/(dashboard)/dashboard/log-export/`  |

Schema: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST-API

Alle routes zijn beveiligd met beheerauthenticatie (`requireManagementAuth`). Geheimen worden nooit geretourneerd:
een opgeslagen geheim wordt teruggegeven als de letterlijke waarde `__stored__`, en als die waarde bij een update
wordt teruggestuurd, blijft de opgeslagen referentie behouden.

Voor het aanmaken of bijwerken van een doel waarvan het type een geheim declareert, is
**`STORAGE_ENCRYPTION_KEY` vereist**. Zonder deze sleutel voert `encrypt()` stilzwijgend niets uit, waardoor de
schrijfbewerking met een 400 wordt geweigerd in plaats van een referentie als platte tekst in SQLite op te slaan
(dezelfde beveiliging die de Telegram-webhook toepast).

| Methode  | Pad                                      | Doel                                                    |
| -------- | ---------------------------------------- | ------------------------------------------------------- |
| `GET`    | `/api/log-export/types`                  | Doeltypen + hun lijst met configuratievelden            |
| `GET`    | `/api/log-export/destinations`           | Doelen weergeven (geheimen geredigeerd)                 |
| `POST`   | `/api/log-export/destinations`           | Een doel aanmaken                                       |
| `GET`    | `/api/log-export/destinations/{id}`      | Eén doel lezen                                          |
| `PUT`    | `/api/log-export/destinations/{id}`      | Naam / ingeschakeld / configuratie / batching bijwerken |
| `DELETE` | `/api/log-export/destinations/{id}`      | Verwijderen                                             |
| `POST`   | `/api/log-export/destinations/{id}/test` | Referenties testen, niets schrijven                     |
| `POST`   | `/api/log-export/destinations/{id}/run`  | Nu leegmaken, hetzelfde pad als de geplande uitvoering  |
| `GET`    | `/api/log-export/status`                 | Cron-status, recente uitvoeringen, achterstand per doel |

`GET /api/log-export/types` maakt de gebruikersinterface generiek: het dashboardformulier wordt opgebouwd uit
de geretourneerde veldbeschrijvingen, zodat voor een nieuw doel geen wijziging aan de gebruikersinterface nodig is.

---

## 4. BigQuery-doel

Configuratiesleutels (`type: "bigquery"`):

| Sleutel              | Opmerkingen                                                                |
| -------------------- | -------------------------------------------------------------------------- |
| `projectId`          | GCP-project dat de dataset bevat                                           |
| `datasetId`          | `[A-Za-z0-9_]+`                                                            |
| `tableId`            | `[A-Za-z0-9_]+`                                                            |
| `location`           | Alleen gebruikt wanneer de dataset moet worden aangemaakt (standaard `EU`) |
| `serviceAccountJson` | Serviceaccountsleutel. Geheim: versleuteld opgeslagen, nooit geretourneerd |
| `autoCreate`         | De dataset en tabel bij de eerste export aanmaken (standaard `true`)       |

Het serviceaccount heeft `bigquery.tables.updateData` nodig voor de doeltabel, plus
`bigquery.datasets.create` / `bigquery.tables.create` wanneer `autoCreate` is ingeschakeld.

Een geconfigureerde batch is een **cursor**-eenheid, geen HTTP-eenheid: `send()` splitst deze op in `insertAll`-
aanroepen van maximaal 500 rijen, zodat een grote `batch_size` de BigQuery-limiet van 10 MB per verzoek niet kan
overschrijden. Tijdelijke statussen (408/429/500/502/503/504) worden maximaal drie keer opnieuw geprobeerd met
exponentiële back-off, waarbij dezelfde insertIds opnieuw worden gebruikt; authenticatie- en schemafouten
genereren bij de eerste poging een fout in plaats van de uitvoering te verspillen.

Een tabel die enkele ogenblikken geleden is aangemaakt, is nog niet zichtbaar voor het streaming-eindpunt, dat
gedurende enkele seconden met 404 antwoordt. Die 404 wordt opnieuw geprobeerd, maar **alleen wanneer deze
uitvoering de tabel heeft aangemaakt** — een werkelijk ontbrekende tabel faalt nog steeds onmiddellijk. Houd er
rekening mee dat BigQuery streaming-invoegingen enkele minuten weigert als een tabel opnieuw wordt aangemaakt
onder een naam die onlangs is verwijderd; dit is inherent aan verwijderen en vervolgens opnieuw aanmaken, dus
gebruik bij voorkeur een nieuwe tabelnaam in plaats van een tabel te verwijderen en opnieuw toe te voegen.

**Een gedeeltelijke fout wordt geretourneerd als HTTP 200 met een niet-lege `insertErrors[]`.** Dit wordt als
een fout behandeld en genereert een uitzondering, waardoor wordt voorkomen dat de cursor voorbij rijen gaat die
BigQuery nooit heeft geaccepteerd; `tests/unit/log-export-bigquery.test.ts` legt dit gedrag vast.

Het transport verloopt via gewone REST — een zelfondertekende RS256-assertie wordt bij
`https://oauth2.googleapis.com/token` ingewisseld voor een toegangstoken, waarna de rijen naar
`tabledata.insertAll` worden verzonden. Er wordt geen Google SDK toegevoegd. Toegangstokens worden tijdens het
proces gecachet per combinatie van serviceaccount en scope.

De aangemaakte tabel bevat één kolom per veld van het tabblad Logs plus `exported_at`, en is ingericht op de
manier waarop aanroeplogboeken daadwerkelijk worden opgevraagd:

- **Per dag gepartitioneerd op `timestamp`**, zodat een op datum begrensde query alleen die dagen scant.
- **Geclusterd op `api_key_name`, `provider`, `model`, `status`** (in die volgorde), zodat filteren op
  wie de uitvoering startte, waar deze naartoe ging of of deze mislukte, blokken binnen elke partitie uitsluit.
  BigQuery staat maximaal vier clusterkolommen toe en de volgorde is belangrijk: een filter op alleen
  `api_key_name` sluit blokken uit, terwijl een filter op alleen `status` dat niet doet.
- **Optionele bewaartermijn voor partities** via `partitionExpirationDays` (0 bewaart alles), toegepast
  wanneer de tabel wordt aangemaakt.

Beide instellingen worden toegepast op het moment van aanmaken. Een bestaande tabel behoudt de bestaande indeling, dus
laat de bestemming naar een nieuwe tabel-id verwijzen als u deze instellingen wilt gebruiken.

`tests/unit/log-export-bigquery.test.ts` controleert of de mapper en het tabelschema synchroon blijven,
zodat een nieuwe kolom in het aanroeplogboek niet ongemerkt kan wegvallen tijdens de export.

Batches worden opgesplitst op basis van **zowel** het aantal rijen als het aantal geserialiseerde bytes. Alleen het aantal rijen is niet voldoende
wanneer payloads worden geëxporteerd: 500 rijen met prompts kunnen tientallen megabytes groot zijn, en insertAll
weigert een aanvraag van meer dan 10 MB. Chunks worden afgesloten bij 500 rijen of 9 MB, afhankelijk van welke limiet het eerst wordt bereikt.

---

## 5. Een bestemming toevoegen

1. Maak `src/lib/logExport/destinations/<name>.ts` aan die een `LogExportDestinationType` exporteert:
   een Zod-`configSchema`, een `fields`-descriptorarray voor de UI, `secretFields` en een
   `createClient(config)` die `test()` / `prepare()` / `send(records)` retourneert.
2. Voeg deze toe aan de `DESTINATIONS`-array in `src/lib/logExport/registry.ts`.
3. Schrijf tests onder `tests/unit/`.

Dat is de volledige wijziging: persistentie, de cron-taak, de REST-laag, versleuteling van geheimen en het
dashboardformulier lezen allemaal het register.

Twee regels voor een nieuwe bestemming:

- `send()` **moet een fout genereren** bij een gedeeltelijke mislukking. Als de functie succesvol wordt afgehandeld, betekent dit: "de bestemming bevat deze rijen",
  en de cursor wordt er permanent voorbij verplaatst.
- Een bestemming die een door de gebruiker opgegeven URL accepteert, moet deze vóór het ophalen valideren met
  `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`),
  op dezelfde manier als webhooks. Voor BigQuery is dit niet nodig: de hosts zijn constanten.

---

## 6. Beheer

- **Dashboard**: Integraties → Logboekexport. Voeg een bestemming toe, voer **Testen** uit om de referenties te controleren
  zonder rijen te schrijven en schakel de bestemming vervolgens in.
- **Achterstand**: elke bestemmingskaart toont de wachtende rijen en de cursor; `GET
/api/log-export/status` retourneert dezelfde cijfers, plus de laatste 20 taakuitvoeringen.
- **Een falende bestemming laat de andere niet falen** — het uitvoeringsoverzicht registreert de status per bestemming
  in `last_status` / `last_error`, en de taakuitvoeringsgeschiedenis bewaart het totaaloverzicht.
- **Als een bestemming wordt verwijderd, wordt ook de cursor verwijderd.** Als u de bestemming opnieuw toevoegt, wordt begonnen bij het oudste bewaarde
  oproeplogboek, waardoor rijen die de bestemming mogelijk al bevat opnieuw worden verzonden. In BigQuery voorkomt de `insertId` per rij dit alleen
  binnen het eigen deduplicatievenster van BigQuery. Schakel een bestemming daarom bij voorkeur uit in plaats van deze te verwijderen.
