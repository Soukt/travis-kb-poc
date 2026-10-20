---
name: pago-cuanto-me-devuelven-si-cancelo
description: El cliente está pensando en cancelar y quiere saber cuánto dinero recuperaría.
metadata:
  area: pagos-y-facturas
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-politica-cancelacion
    - consultar-pagos
  simulado: "true"
---
## Cuándo aplica

Antes de decidir, el cliente quiere conocer los gastos de cancelación que aplicarían en este momento y qué parte de lo pagado se le devolvería.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Consulta con `consultar-politica-cancelacion` los gastos que aplicarían según la fecha actual.
3. Revisa con `consultar-pagos` lo pagado hasta ahora.
4. Prepara una respuesta con los gastos y lo que se recuperaría según esos datos, para que booking la revise.

## Qué no hace

- No cancela la reserva.
- No calcula importes que no se deduzcan directamente de las acciones.
- No aconseja si le conviene cancelar o esperar.

## Cuándo pasa a una persona

- El cliente decide cancelar y pide la devolución.
- El calendario de gastos no está disponible.

## Cómo lo puede pedir el cliente

- «En caso de cancelar ahora, ¿qué importe me sería reembolsado?»
- «si cancelo cuanto pierdo?»
- «Hola, igual no podemos ir, ¿cuánto me devolvéis si lo anulo hoy?»
- «me sale a cuenta cancelar ya o esperar? cuanto me devolveis»
