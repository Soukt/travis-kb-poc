---
name: camb-cuanto-cuesta-cancelar-hoy
description: El cliente quiere saber cuánto le costaría cancelar su reserva si
  lo hiciera hoy.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
  simulado: "true"
---
## Cuándo aplica

El cliente está valorando cancelar y necesita conocer los gastos vigentes en este momento antes de decidir.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios que se verían afectados.
3. Consulta con `consultar-politica-cancelacion` los gastos que aplican hoy a cada servicio.
4. Se los comunica tal como los devuelve la acción, le indica cuándo cambiarían y le aclara que el importe definitivo lo confirma booking al tramitar la cancelación.

## Qué no hace

- No calcula importes por su cuenta.
- No inicia la cancelación sin que el cliente lo pida.

## Cuándo pasa a una persona

- El cliente decide cancelar.
- La política no devuelve gastos para algún servicio.

## Cómo lo puede pedir el cliente

- «Si cancelo hoy, ¿cuánto pierdo?»
- «cuanto me cuesta anular ahora mismo?»
- «Estoy pensando en cancelar, ¿qué gastos tendría a día de hoy?»
- «Quisiera conocer la penalización exacta en caso de cancelar hoy. ¿Y me devolverían las tasas?»
