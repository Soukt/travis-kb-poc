---
name: camb-sustituir-viajero-por-otra-persona
description: El cliente quiere cambiar a un acompañante que ya no viaja por otra
  persona distinta, manteniendo el titular.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Uno de los viajeros no podrá ir y otra persona ocupará su plaza. El titular sigue siendo el mismo.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Identifica con `consultar-reserva` qué viajero se sustituye y en qué servicios figura.
3. Consulta con `consultar-politica-cancelacion` si los servicios admiten cambio de nombre y con qué gastos.
4. Pide con `pedir-datos-cliente` los datos del nuevo viajero.
5. Pasa la sustitución a booking con `crear-ticket-booking`.

## Qué no hace

- No garantiza que todos los servicios acepten el cambio.
- No pide más datos del nuevo viajero de los necesarios.

## Cuándo pasa a una persona

- Siempre: son datos de otra persona y puede haber gastos.

## Cómo lo puede pedir el cliente

- «Mi amiga no puede venir y vendrá otra en su lugar, ¿cambiáis el nombre?»
- «Hola, ¿se puede cambiar un viajero por otro? Las fechas son las mismas.»
- «cambio de acompañante, al final viene mi primo en vez de mi hermano»
- «Uno de los pasajeros ha sido sustituido. ¿Qué datos necesitan del nuevo viajero? ¿Y cambia el precio?»
