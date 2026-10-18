# Log export (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

Exportación continua e incremental de los registros de llamadas de OmniRoute a un almacén de analítica externo.

La pestaña Logs del panel conserva el historial de solicitudes en SQLite (`call_logs`), cuyo tamaño está limitado por la rotación y la retención. La exportación de registros envía el mismo conjunto de registros de forma programada para que pueda conservarse más allá de la base de datos local y combinarse con otros datos. BigQuery es el primer destino; la canalización funciona como un registro, por lo que se pueden añadir más destinos.

---

## 1. Cómo funciona

```
servidor (descifra + valida la configuración, reconcilia el cursor)
  → inicia IPC → proceso aislado del SO exportChild
    → storage.sqlite de solo lectura → consulta/mapeo compartido del registro de llamadas
      → hidratación asíncrona de artefactos → prepare()/send() del destino
        → IPC por lotes → el servidor persiste el cursor → IPC de confirmación
          → siguiente lote; IPC de finalización → el servidor registra el éxito
```

- **Programación** — un trabajo cron de `JobRegistry`, `log_export`, cuyo valor predeterminado es `0 * * * *` (cada hora,
  UTC). Se registra en `src/lib/initCloudSync.ts`; puede sobrescribirse con `OMNIROUTE_LOG_EXPORT_CRON`.
  Cada ejecución procesa secuencialmente todos los destinos **habilitados**.
- **Cursor** — el `call_logs.rowid` implícito de SQLite, persistido por destino en
  `log_export_destinations.cursor_row_id`. Deliberadamente, `timestamp` no es el cursor: quienes realizan las llamadas
  pueden proporcionar su propio valor, por lo que una solicitud lenta puede escribirse después de otra más rápida que comenzó
  más tarde, y un cursor basado en la marca de tiempo la omitiría.
- **Procesamiento por lotes** — `batch_size` filas por solicitud (valor predeterminado: 500), `max_rows_per_run` filas por ejecución
  (valor predeterminado: 10000), para que una cola pendiente grande se procese durante varias ejecuciones en lugar de bloquear una sola.
- **Entrega** — el cursor avanza únicamente después de que `send()` se resuelva. Un lote fallido deja el
  cursor donde estaba, por lo que las mismas filas vuelven a intentarse en la siguiente ejecución. La garantía es
  de al menos una entrega junto con la desduplicación en el destino, no de exactamente una entrega real: BigQuery identifica cada
  fila mediante el id del registro de llamadas, que respeta según el mejor esfuerzo dentro de su propia ventana de desduplicación.
- **Protección contra solapamientos** — la ejecución cron y `POST .../run` pueden activarse al mismo tiempo. Un destino
  que ya se esté procesando se omite en lugar de procesarse dos veces (`skipped: true` en el resultado de la ejecución),
  por lo que una ejecución simultánea no puede volver a enviar un lote ni hacer retroceder el cursor.
- **Recuperación tras una purga** — si `cursor_row_id` termina por encima de `MAX(rowid)` (se purgó toda la tabla
  y los rowids se reiniciaron), el ejecutor retrocede a 0 en lugar de quedar permanentemente sin detectar datos.

### Ejecutor aislado y límites

Cada ejecución de destino en Node inicia un proceso hijo del SO independiente y de corta duración (`child_process`
con IPC, no `worker_threads`). Las lecturas de cuerpos, el análisis/la serialización JSON de la carga útil, las operaciones
`prepare()` del destino y la E/S de red del destino se ejecutan allí, no en el bucle de eventos del servidor.
Solo la configuración y pequeños mensajes de progreso cruzan IPC; los registros exportados nunca regresan al
servidor. El trabajo cron y la ruta Ejecutar ahora conservan el mismo resultado público y la misma protección contra solapamientos.

El proceso hijo abre el archivo `DATA_DIR/storage.sqlite` resuelto del servidor en modo de solo lectura mediante `node:sqlite`,
con `busy_timeout=5000` y `query_only=ON`. No importa ningún singleton de base de datos y no realiza
migraciones, copias de seguridad ni actualizaciones de SQLite. La gestión de artefactos ausentes o dañados (incluida la
sentencia UPDATE del artefacto dañado) permanece únicamente en la ruta de detalles del panel. Ambas rutas comparten un
solucionador de detalles puro; la exportación utiliza lecturas asíncronas del sistema de archivos y el mismo orden de resolución:
artefacto → contenido heredado en línea → disco heredado → ninguno. Una ejecución captura el rowid máximo de inserción
cuando el proceso hijo abre su lector; las inserciones posteriores esperan hasta la siguiente ejecución. Este es un límite
de inserción, no una transacción de SQLite de larga duración: los escritores WAL y los puntos de control permanecen libres durante
las esperas de red. Las actualizaciones/eliminaciones de filas existentes no quedan inmovilizadas por este límite.

Después de cada lote aceptado, el proceso hijo espera una confirmación. El servidor primero persiste
el cursor con `advanceLogExportCursor` y luego envía `ack`; ningún lote posterior comienza antes de eso.
Un fallo de envío, cierre inesperado o tiempo de espera agotado registra el fallo sin hacer avanzar ese lote. Los lotes
confirmados anteriormente permanecen comprometidos; como máximo puede volver a enviarse el único lote no confirmado.
El éxito solo se registra después de `done` y de una salida limpia del proceso hijo. Los fallos terminan el proceso hijo
con SIGTERM, pasando a SIGKILL después de 500 ms, y el ejecutor espera a que el proceso se cierre.

| Variable de entorno                           | Valor predeterminado | Propósito                              |
| --------------------------------------------- | -------------------- | -------------------------------------- |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000               | Límite de tiempo real por destino      |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024                 | Límite del espacio antiguo de V8 en MB |

Los valores no válidos, no positivos o no enteros usan los valores predeterminados. La configuración del montón no es un límite
total de RSS; los lotes muy grandes aún pueden agotar la memoria del proceso hijo y hacer que la ejecución falle de forma segura.
El valor predeterminado de 1024 MB deja margen para el lote predeterminado de 500 filas con artefactos de 512 KiB y los
cuerpos habilitados, incluida la serialización JSON por fragmentos de bytes de BigQuery. No hace que un lote de cuerpos
de 10000 filas sea seguro. El agotamiento del montón de V8 registra un fallo con medidas aplicables: reduzca el tamaño del lote
o aumente `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB`; el cursor permanece en el último lote
confirmado. Los cuerpos históricos en línea/en disco no están cubiertos por el límite moderno de artefactos.
Los operadores deben presupuestar RSS por separado, especialmente dentro de contenedores con memoria limitada.

El proceso hijo hereda únicamente el `DATA_DIR` resuelto, `NODE_ENV`, el valor explícito de `TZ` (resolución en hora local
de nombres de archivos heredados), `ELECTRON_RUN_AS_NODE` cuando está presente y las siguientes entradas de salida:
`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (y sus variantes en minúsculas),
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`.
Un despachador global de Undici comparte la resolución pura de proxies de entorno del servidor y las reglas para omitir
el proxy en hosts locales, incluido `NO_PROXY`; no importa `proxyFetch.ts` ni sus indicadores de base de datos/funcionalidad.
Las credenciales del proxy se ocultan de la salida reenviada y de los errores registrados. Las credenciales del destino
solo se transmiten en un mensaje IPC de inicio, nunca mediante argv ni el entorno; el reenvío de salida/errores
incluye un prefijo y está saneado. Solo `ExperimentalWarning` se deshabilita en los argumentos de ejecución del proceso hijo para evitar
repetir la advertencia de SQLite de Node en cada ejecución cron; los demás tipos de advertencias permanecen visibles.

Los módulos de destino deben poder importarse sin dependencias exclusivas de Next.js o del servidor. La implementación existente de
BigQuery ya cumple ese contrato. Las cachés de tokens de acceso solo duran durante la ejecución del proceso hijo,
no entre ejecuciones. Node es el entorno de ejecución compatible (`package.json` engines), pero la sección de instalación
de Bun del README y `Dockerfile.bun` también anuncian una ruta de compatibilidad para producción que usa
`bun:sqlite` (`src/lib/db/core.ts` / adaptadores). Por tanto, con Bun, las exportaciones conservan la ruta anterior
dentro del proceso y emiten una advertencia una sola vez: el aislamiento de memoria dinámica y de tiempo de espera del proceso hijo no está disponible. Usa
Node para aislar el bucle de eventos y los errores de memoria insuficiente; Bun no se considera exclusivo para desarrollo en este caso.

Cuando `includeBodies` esté habilitado, es preferible una frecuencia a nivel de minutos, como
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"`, en lugar de acumular durante una hora una cola de cargas útiles pendientes.
Los límites de lotes y filas siguen acotando cada ejecución. El coste de inicio del proceso se paga por destino y por ejecución;
esto intercambia un pequeño coste de inicio por el aislamiento del bucle de eventos del servidor, no por una reducción del uso total de CPU.

### Cargas útiles (prompts y respuestas)

De forma predeterminada, la exportación solo contiene los campos de resumen que muestra la **lista** de Registros. Al activar
**Exportar prompts y respuestas** (`includeBodies`), también se envía lo que muestra el panel de **detalle**
de Registros para cada llamada:

| Campo                            | Contenido                                                               |
| -------------------------------- | ----------------------------------------------------------------------- |
| `request_body` / `response_body` | Las cargas útiles de la llamada tal como las muestra el panel           |
| `pipeline_route_decision`        | El destino y el modelo que eligió el enrutador                          |
| `pipeline_client_request`        | La solicitud sin procesar exactamente como la envió el cliente          |
| `pipeline_openai_request`        | Tras traducirla al formato interno de OpenAI                            |
| `pipeline_provider_request`      | Tal como se envió realmente al proveedor, en su dialecto                |
| `pipeline_provider_response`     | La respuesta sin procesar del proveedor                                 |
| `pipeline_client_response`       | Lo que se devolvió al llamador                                          |
| `pipeline_error`                 | Detalle del error a nivel de canalización para una llamada fallida      |
| `bodies_truncated`               | Verdadero cuando alguno de los campos anteriores alcanzó `maxBodyBytes` |

Este es contenido de prompts, por lo que está **desactivado de forma predeterminada** y es deliberadamente una opción por destino.
Lo que se envía es lo que muestra el panel, porque la exportación y `getCallLogById` comparten la resolución
de detalles: las cargas útiles ya se
sanean para eliminar PII y se redactan para ocultar secretos cuando se escriben, y una llamada realizada con una
clave de API `noLog` no almacena ninguna carga útil, por lo que no hay nada que exportar.

Las cargas útiles se leen por fila desde el artefacto del sistema de archivos, por lo que la hidratación solo se ejecuta para los destinos
que la solicitaron. Si falta un artefacto o está dañado, se exporta su resumen con cargas útiles nulas en lugar de
provocar un error en el lote y dejar el cursor bloqueado.

`maxBodyBytes` (valor predeterminado: 262144) limita cada campo. Las cargas útiles más largas se **truncan en lugar de
descartarse** —un prompt recortado sigue respondiendo a «qué se preguntó»— y la fila se marca con
`bodies_truncated`. Los deltas transmitidos fragmento por fragmento no se exportan; la respuesta ensamblada ya está
en `pipeline_provider_response` y `pipeline_client_response`.

---

## 2. Archivos

| Componente                      | Ubicación                                    |
| ------------------------------- | -------------------------------------------- |
| Contrato de destino             | `src/lib/logExport/types.ts`                 |
| Registro                        | `src/lib/logExport/registry.ts`              |
| Gestión de secretos             | `src/lib/logExport/secrets.ts`               |
| Ejecutor (IPC padre)            | `src/lib/logExport/runner.ts`                |
| Ciclo de vida del proceso       | `src/lib/logExport/childRunner.ts`           |
| Punto de entrada secundario     | `src/lib/logExport/exportChild.ts`           |
| Apertura de solo lectura        | `src/lib/db/logExportReadOnly.ts`            |
| Consulta/mapeo compartido       | `src/lib/usage/callLogExportQueries.ts`      |
| Solucionador de detalles        | `src/lib/usage/callLogDetailResolver.ts`     |
| Proyección de la API            | `src/lib/logExport/presenter.ts`             |
| Destino de BigQuery             | `src/lib/logExport/destinations/bigquery.ts` |
| Autenticación de SA de Google   | `src/lib/logExport/googleServiceAccount.ts`  |
| Fuente del registro de llamadas | `src/lib/usage/callLogExportSource.ts`       |
| Persistencia                    | `src/lib/db/logExportDestinations.ts`        |
| Tarea cron                      | `src/lib/jobs/logExportJob.ts`               |
| Capa REST                       | `src/app/api/log-export/`                    |
| Página del panel                | `src/app/(dashboard)/dashboard/log-export/`  |

Esquema: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. API REST

Todas las rutas están autenticadas para administración (`requireManagementAuth`). Los secretos nunca se devuelven:
un secreto almacenado se devuelve como el literal `__stored__`, y enviar de nuevo ese valor en una actualización
conserva la credencial almacenada.

Crear o actualizar un destino cuyo tipo declare un secreto **requiere
`STORAGE_ENCRYPTION_KEY`**. Sin ella, `encrypt()` realiza una transferencia directa silenciosa, por lo que la escritura se
rechaza con un 400 en lugar de guardar una credencial en texto sin formato en SQLite (la misma protección que
aplica el webhook de Telegram).

| Método   | Ruta                                     | Propósito                                                                       |
| -------- | ---------------------------------------- | ------------------------------------------------------------------------------- |
| `GET`    | `/api/log-export/types`                  | Tipos de destino + su lista de campos de configuración                          |
| `GET`    | `/api/log-export/destinations`           | Listar destinos (secretos ocultos)                                              |
| `POST`   | `/api/log-export/destinations`           | Crear un destino                                                                |
| `GET`    | `/api/log-export/destinations/{id}`      | Leer uno                                                                        |
| `PUT`    | `/api/log-export/destinations/{id}`      | Actualizar nombre / estado habilitado / configuración / procesamiento por lotes |
| `DELETE` | `/api/log-export/destinations/{id}`      | Eliminar                                                                        |
| `POST`   | `/api/log-export/destinations/{id}/test` | Comprobar credenciales sin escribir nada                                        |
| `POST`   | `/api/log-export/destinations/{id}/run`  | Vaciar ahora, mediante la misma ruta que la ejecución programada                |
| `GET`    | `/api/log-export/status`                 | Estado de cron, ejecuciones recientes y trabajo pendiente por destino           |

`GET /api/log-export/types` es lo que hace que la interfaz de usuario sea genérica: el formulario del panel se renderiza a partir de
los descriptores de campos devueltos, por lo que un nuevo destino no requiere cambios en la interfaz de usuario.

---

## 4. Destino de BigQuery

Claves de configuración (`type: "bigquery"`):

| Clave                | Notas                                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------- |
| `projectId`          | Proyecto de GCP que contiene el conjunto de datos                                             |
| `datasetId`          | `[A-Za-z0-9_]+`                                                                               |
| `tableId`            | `[A-Za-z0-9_]+`                                                                               |
| `location`           | Solo se usa cuando hay que crear el conjunto de datos (valor predeterminado: `EU`)            |
| `serviceAccountJson` | Clave de la cuenta de servicio. Secreto: cifrado en reposo, nunca se devuelve                 |
| `autoCreate`         | Crea el conjunto de datos y la tabla en la primera exportación (valor predeterminado: `true`) |

La cuenta de servicio necesita `bigquery.tables.updateData` en la tabla de destino, además de
`bigquery.datasets.create` / `bigquery.tables.create` cuando `autoCreate` está activado.

Un lote configurado es una unidad de **cursor**, no una unidad HTTP: `send()` lo divide en llamadas insertAll
de 500 filas como máximo, para que un `batch_size` grande no pueda superar el límite de 10 MB por solicitud de BigQuery.
Los estados transitorios (408/429/500/502/503/504) se reintentan hasta tres veces con espera
exponencial, reutilizando los mismos insertIds; los errores de autenticación y esquema generan una excepción en el primer intento en lugar
de consumir la ejecución.

Una tabla creada hace apenas unos instantes todavía no es visible para el endpoint de streaming, que responde
con 404 durante unos segundos. Ese 404 se reintenta, pero **solo cuando esta ejecución creó la tabla**;
si la tabla realmente no existe, el proceso falla de inmediato. Tenga en cuenta que volver a crear una tabla con un nombre que
se eliminó recientemente hace que BigQuery rechace las inserciones de streaming durante varios minutos; esta es una
característica de eliminar y luego volver a crear, por lo que es preferible usar un nuevo nombre de tabla en vez de eliminarla y volver a añadirla.

**Un fallo parcial llega como HTTP 200 con un `insertErrors[]` no vacío.** Esto se trata como
un fallo y genera una excepción, lo que impide que el cursor avance más allá de las filas que BigQuery nunca
aceptó; `tests/unit/log-export-bigquery.test.ts` fija este comportamiento.

El transporte usa REST puro: una aserción RS256 autofirmada se intercambia por un token de acceso en
`https://oauth2.googleapis.com/token` y, a continuación, las filas se envían a `tabledata.insertAll`. No se
incluye ningún SDK de Google. Los tokens de acceso se almacenan en caché dentro del proceso por cada par (cuenta de servicio, ámbito).

La tabla creada contiene una columna por cada campo de la pestaña Registros, además de `exported_at`, y está diseñada para
la forma en que realmente se consultan los registros de llamadas:

- **Particionada por día según `timestamp`**, por lo que una consulta acotada por fecha solo examina esos días.
- **Agrupada por `api_key_name`, `provider`, `model`, `status`** (en ese orden), de modo que filtrar por
  quién la ejecutó, adónde se envió o si falló permite omitir bloques dentro de cada partición. BigQuery
  permite como máximo cuatro columnas de agrupación y el orden importa: un filtro únicamente por `api_key_name`
  permite omitir bloques, mientras que uno únicamente por `status` no.
- **Retención opcional de particiones** mediante `partitionExpirationDays` (0 conserva todo), aplicada
  cuando se crea la tabla.

Ambos ajustes se aplican en el momento de la creación. Una tabla existente conserva la disposición que ya tiene, así que
apunta el destino a un nuevo id de tabla si quieres adoptarlos.

`tests/unit/log-export-bigquery.test.ts` comprueba que el mapeador y el esquema de la tabla permanezcan
sincronizados, de modo que una nueva columna del registro de llamadas no pueda omitirse silenciosamente durante la exportación.

Los lotes se dividen según **tanto** el número de filas como los bytes serializados. El número de filas por sí solo no es suficiente
cuando se exportan las cargas útiles: 500 filas con prompts pueden ocupar decenas de megabytes, e insertAll
rechaza las solicitudes de más de 10 MB. Los bloques se cierran al alcanzar 500 filas o 9 MB, lo que ocurra primero.

---

## 5. Añadir un destino

1. Cree `src/lib/logExport/destinations/<name>.ts` que exporte un `LogExportDestinationType`:
   un `configSchema` de Zod, un array descriptor `fields` para la interfaz de usuario, `secretFields` y una
   función `createClient(config)` que devuelva `test()` / `prepare()` / `send(records)`.
2. Añádalo al array `DESTINATIONS` en `src/lib/logExport/registry.ts`.
3. Escriba pruebas en `tests/unit/`.

Ese es todo el cambio: la persistencia, el trabajo cron, la capa REST, el cifrado de secretos y el
formulario del panel usan el registro.

Dos reglas para un destino nuevo:

- `send()` **debe lanzar una excepción** ante un fallo parcial. Que se resuelva significa que «el destino tiene estas filas»,
  y el cursor avanza más allá de ellas permanentemente.
- Un destino que acepte una URL proporcionada por el usuario debe validarla mediante
  `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`) antes de realizar la solicitud,
  del mismo modo que lo hacen los webhooks. BigQuery no lo necesita: sus hosts son constantes.

---

## 6. Operarlo

- **Panel**: Integraciones → Exportación de registros. Añada un destino, ejecute **Probar** para comprobar las credenciales
  sin escribir filas y, a continuación, habilítelo.
- **Elementos pendientes**: cada tarjeta de destino muestra las filas pendientes y el cursor; `GET
/api/log-export/status` devuelve las mismas cifras junto con las últimas 20 ejecuciones del trabajo.
- **Un destino que falla no hace que fallen los demás**: el resumen de la ejecución registra el estado
  de cada destino en `last_status` / `last_error`, y el historial de ejecuciones del trabajo conserva los datos agregados.
- **Eliminar un destino elimina su cursor.** Al volver a añadirlo, se comienza desde el registro de llamadas
  conservado más antiguo, lo que reenvía filas que el destino quizá ya contenga. En BigQuery, el `insertId`
  de cada fila solo evita esos duplicados dentro de la propia ventana de deduplicación de BigQuery, por lo que es preferible
  deshabilitar un destino en lugar de eliminarlo.
