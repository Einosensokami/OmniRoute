# Devin Claude Bridge (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../DEVIN_CLAUDE_BRIDGE.md) · 🇪🇹 [am](../../am/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇸🇦 [ar](../../ar/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇦🇿 [az](../../az/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇧🇬 [bg](../../bg/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇧🇩 [bn](../../bn/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇧🇦 [bs](../../bs/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇨🇿 [cs](../../cs/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇩🇪 [de](../../de/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇬🇷 [el](../../el/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇪🇸 [es](../../es/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇪🇪 [et](../../et/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇮🇷 [fa](../../fa/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇫🇮 [fi](../../fi/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇫🇷 [fr](../../fr/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇮🇪 [ga](../../ga/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇮🇳 [gu](../../gu/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇳🇬 [ha](../../ha/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇮🇱 [he](../../he/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇮🇳 [hi](../../hi/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇭🇷 [hr](../../hr/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇭🇺 [hu](../../hu/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇦🇲 [hy](../../hy/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇮🇩 [id](../../id/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇳🇬 [ig](../../ig/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇮🇹 [it](../../it/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇯🇵 [ja](../../ja/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇬🇪 [ka](../../ka/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇰🇭 [km](../../km/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇮🇳 [kn](../../kn/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇰🇷 [ko](../../ko/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇱🇹 [lt](../../lt/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇱🇻 [lv](../../lv/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇮🇳 [ml](../../ml/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇮🇳 [mr](../../mr/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇲🇾 [ms](../../ms/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇲🇹 [mt](../../mt/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇲🇲 [my](../../my/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇳🇵 [ne](../../ne/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇳🇱 [nl](../../nl/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇳🇴 [no](../../no/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇮🇳 [or](../../or/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇮🇳 [pa](../../pa/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇵🇭 [phi](../../phi/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇵🇱 [pl](../../pl/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇵🇹 [pt](../../pt/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇷🇴 [ro](../../ro/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇷🇺 [ru](../../ru/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇱🇰 [si](../../si/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇸🇰 [sk](../../sk/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇸🇮 [sl](../../sl/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇷🇸 [sr](../../sr/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇸🇪 [sv](../../sv/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇰🇪 [sw](../../sw/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇮🇳 [ta](../../ta/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇮🇳 [te](../../te/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇹🇭 [th](../../th/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇹🇷 [tr](../../tr/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇵🇰 [ur](../../ur/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇺🇿 [uz](../../uz/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇻🇳 [vi](../../vi/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇳🇬 [yo](../../yo/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/DEVIN_CLAUDE_BRIDGE.md) · 🇹🇼 [zh-TW](../../zh-TW/docs/DEVIN_CLAUDE_BRIDGE.md)

---

`devin-cli-agentic` lader den rigtige Claude Code-runtime bruge OmniRoutes lokale Anthropic
Messages-endpoint, mens den officielle Devin CLI leverer modelsvar via ACP stdio. Den
ændrer ikke de eksisterende Anthropic-, Claude OAuth-, Claude Web- eller `devin-cli`-udbydere.

For klientejede værktøjskald skal der routes gennem `devin-cli-agentic` (alias `dva`), den
værktøjsunderstøttende udbyder i Claude-format. Den ældre `devin-cli` (`dv`) ACP-eksekvering
er kun tekstbaseret: Den kører Devins værktøjsløse summarizer og kan ikke returnere værktøjskald. Dens
modelmetadata er markeret tilsvarende, så combo-routing, der kræver værktøjer, undgår den.

> **Aktuel status: fastlåst til Claude Code `2.1.258`; offline- og livevalidering senest registreret
> på `2.1.220`.** Fastlåsningen til `2.1.220` gennemførte tre isolerede scenarier via Devin CLI
> `3000.2.17` og modellen `swe-1-7-lightning`; den afsluttende livekørsel dokumenterede klientejede `Read`-,
> `Edit`- og `Bash`-ture, vellykkede `npm test`-resultater, registrering af projektkommandoer og skills,
> routing udelukkende gennem Devin samt ingen udgående trafik til Claude. Fastlåsningen blev derefter hævet til `2.1.258`
> (den CLI-generation, som OmniRoutes Claude-identitet udgiver sig for at være, og den første linje, der
> leveres med Fable 5.1-niveauet indbygget). Med den nye fastlåsning blev installationslaget og
> `claude --version` verificeret på det fastlåste basisimage, og bridgens enhedstestsuite,
> `compose config` og det statiske isolationsbevis består — men hverken det offline mock-scenarie eller
> live-suiten med tre scenarier er blevet kørt igen endnu. Kør dem igen (se "Opdatering af fastlåste
> værktøjer"), før bridgen bruges med denne fastlåsning.

## Arkitektur

```text
Claude Code 2.1.258 (isoleret Linux-container uden root-rettigheder)
  -> http://omniroute:20128/v1/messages
  -> devin-cli-agentic (Claude-format, udbyder uden godkendelse)
  -> devin acp --agent-type summarizer (officiel ACP stdio, ingen Devin-værktøjer)
  -> Devin-konto i den dedikerede devin-auth-diskenhed
```

Den officielle CLI's standard-ACP-agent kan udføre sine egne værktøjer, så denne bridge bruger
den ikke. Den starter den faste `summarizer`-ACP-agent, hvis officielle CLI-tilstand ikke har nogen værktøjer, og
indrammer den serialiserede Anthropic-anmodning som et eksekveringsspor. Når endnu en Claude-ejet
handling er nødvendig, skal svaret indeholde præcis én klientværktøjskonvolut. Enhver ACP-
`tool_call` eller `tool_call_update` afvises, før et svar kan rapporteres som
vellykket.

Serializeren i `open-sse/executors/devin-agentic/serializer.ts` bevarer `system`,
`text`, `tool_use`, `tool_result`, `thinking`, `redacted_thinking`, `tool_choice` og de
værktøjer, som Claude Code leverer. Billeder og ukendte blokke medfører en eksplicit fejl. Store værktøjsresultater
bruger en synlig afkortningsmarkør.

Parseren accepterer én selvstændig `<tool>{...}</tool>`-konvolut pr. modeltur. Den kontrollerer
navnet mod anmodningens værktøjsliste, validerer argumenter mod værktøjets JSON
Schema, afviser blandinger af narrativ tekst og handlinger og tillader ét afgrænset reparationsforsøg. Claude Code
udfører derefter den resulterende Anthropic-`tool_use` lokalt og sender `tool_result` tilbage gennem
OmniRoute.

## Automatisk routing

Udbyderen kan vælges i OmniRoutes `auto/*`-kandidatpuljer, når den ikke er blokeret.
Muligheden for at blive valgt som kandidat garanterer ikke, at den bliver valgt: Comboens routingstrategi (for eksempel
senest kendte fungerende) kan foretrække en anden udbyder. Brug `dva/<model>` eller en combo med Devin
som førstevalg, når du kræver, at alle anmodninger går gennem Devin.

## Isolation og trusselsmodel

Værtens Claude-installation, -konto og -konfiguration er uden for omfanget og behandles som
forbudte. Compose-tjenesterne:

- kører som UID/GID `10001:10001` med et skrivebeskyttet rodfilsystem, fjernede kapabiliteter og
  `no-new-privileges`;
- bruger en privat `/home/bridge`, en dedikeret Claude-konfigurationsdiskenhed, isolerede OmniRoute-data
  og en separat `devin-auth`-diskenhed;
- monterer kun midlertidige `.sandbox`-arbejdsområder/beviser;
- monterer ikke værtens hjemmemappe, Keychain, SSH, cloud-legitimationsoplysninger eller Docker-socket;
- konstruerer eksplicitte miljøer og fjerner Anthropic API/OAuth/routing-variabler;
- dirigerer udelukkende Claude Code-inferens til `http://omniroute:20128` med en nøgle, der kun er lokal.

Offlineprofilen bruger et internt netværk. I liveprofilen når OmniRoute kun de
officielle Devin-slutpunkter gennem `network-guard`; ikke-relaterede destinationer afvises.
Claude Code har en separat udgående trafikvagt, der afviser alt, og kan kun nå den lokale OmniRoute-
tjeneste via `NO_PROXY`. Vagternes revisionsfiler monteres kun af deres respektive vagtproces.
Scripts verificerer filejerskab, tilstand, antal links og hver beslutning, før der eksporteres
tokenfri dokumentation.

Kør isolationsbeviset uafhængigt:

```bash
./scripts/devin-bridge/verify-anthropic-isolation
```

Det validerer topologi, navngivne monteringer, indstillinger for ikke-root/skrivebeskyttelse, eksplicit lokal routing,
fravær af følsomme miljøvariabler, fravær af Docker-socket, blokeret adgang til
`api.anthropic.com` og `claude.ai`, valg af en udbyder begrænset til Devin samt eksplicit fejl, når
ACP-backenden ikke er tilgængelig.

## Førstegangsopsætning og normal brug

Byg det fastlåste image:

```bash
./scripts/devin-bridge/build
```

Godkend kun den isolerede Devin-diskenhed:

```bash
ENABLE_LIVE_DEVIN_TESTS=1 ./scripts/devin-bridge/login-devin
```

Login-kommandoen bruger det officielle manuelle tokenflow, som er beregnet til fjern-/container-
miljøer. Værdien indtastes direkte i CLI-prompten; den videregives ikke som et
procesargument, skrives til Git eller kopieres fra værten.

Start den isolerede Claude Code-kørselstid:

```bash
./scripts/devin-bridge/launch
```

`launch` kontrollerer isolation, Devin-godkendelse og modelregistrering igen, før den
containeriserede Claude Code startes. Den kører aldrig værtens Claude-eksekverbare fil. Modelaliasser kan
angives i `.env.devin-bridge`; hver konfigureret værdi skal beholde
`devin-cli-agentic/`-præfikset.

## Valideringskommandoer

Den reproducerbare offlinesti kræver ingen Devin-konto og har ingen internetadgang under kørsel:

```bash
./scripts/devin-bridge/test-unit
./scripts/devin-bridge/test-contract
./scripts/devin-bridge/test-e2e-mock
./scripts/devin-bridge/verify-anthropic-isolation
```

Den godkendte tilvalgte livesti er:

```bash
ENABLE_LIVE_DEVIN_TESTS=1 ./scripts/devin-bridge/test-live-devin
```

Live-runneren venter mellem scenarier for at undgå at åbne ACP-sessioner i en klynge og
validerer strukturerede Claude-streamhændelser i stedet for at stole på tekstlige påstande. Dens tre
scenarier beviser:

1. direkte læsning af projektet og fejlanalyse;
2. en reel `Edit`, en klientejet `Bash` `npm test` og et terminalresultat;
3. `/bridge-check` samt registrering af `bridge-proof`, læsning af projektet, endnu en vellykket
   klientejet `npm test` og fuldførelse uden afventende arbejde.

Den endelige kontrol undersøger også Devin-netværksrevisionen og kræver, at Claude-revisionen af udgående trafik
forbliver tom.

## Opdatering af fastlåste værktøjer

Image-et fastlåser Node, Claude Code og Devin CLI i
`docker/devin-bridge/Dockerfile`. Sådan opdateres de:

1. skift de eksplicitte versioner;
2. erstat begge arkitekturspecifikke kontrolsummer for Devin-arkivet med værdierne for det officielle
   artefakt;
3. genopbyg, og kør alle offline-valideringskommandoer;
4. bekræft versionerne i image-et;
5. kør den godkendte live-testsuite med tre scenarier igen.

Installer ikke nogen af CLI'erne globalt på værten, og erstat ikke kontrolsumverificering med en
ikke-verificeret download.

## Diagnosticering og oprydning

- `docker compose -f docker/devin-bridge/compose.yml --profile offline logs omniroute`
  viser lokal routing og rensede executor-fejl.
- `.sandbox/evidence/mock-acp.jsonl` registrerer deterministiske mock-ACP-handlinger.
- `.sandbox/evidence/claude-stream.jsonl` registrerer den faktiske offline-kørsel af Claude Code.
- `.sandbox/evidence/live-*.jsonl` registrerer de tre validerede live-streams.
- `.sandbox/evidence/egress.jsonl` og `.sandbox/evidence/claude-egress.jsonl` er validerede,
  tokenfri kopier af guard-kontrollerne.

Stop ejede containere og netværk, mens login-/konfigurationsvolumener bevares:

```bash
./scripts/devin-bridge/clean
```

Fjern hele det bridge-ejede miljø, inklusive navngivne volumener:

```bash
./scripts/devin-bridge/clean --all
```

## Begrænsninger

- Bridge-løsningen er afhængig af den fastlagte `summarizer`-rolle uden værktøjer, fordi Devin CLI `3000.2.17`
  ikke stiller en neutral ACP-agent uden værktøjer til rådighed. Adapteren kompenserer for oversigtslignende
  mellemliggende svar, men ét afgrænset reparationsforsøg kan stadig fejle eksplicit.
- Live-ACP-kald kan returnere midlertidige `502`-/`504`-svar. Testsystemet indsætter pauser mellem scenarierne;
  vedvarende fejl håndteres fortsat fail-closed, og der vælges aldrig en anden udbyder.
- ACP-konteksten rekonstrueres fra hver Anthropic-anmodning; der er ingen proces-/sessionstilknytning.
- Ét værktøjskald understøttes pr. modelsvar; parallelle kald afvises.
- Billeder understøttes eksplicit ikke. Vision, thinking-output, effort-styring og et kontekstvindue på 1M
  annonceres ikke.
- SSE bruger gyldige Anthropic-livscyklushændelser, men udsendes, efter at den afgrænsede ACP-runde er
  indsamlet; ACP-chunks videresendes ikke inkrementelt.
