---
name: vh-consultar-gastos-cancelacion-paquete
description: El cliente quiere saber cuánto le costaría cancelar su paquete de
  vuelo y hotel antes de tomar una decisión.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-politica-cancelacion
  simulado: "true"
---
## Cuándo aplica

El cliente se plantea cancelar pero aún no lo ha decidido. Solo pide información sobre los gastos.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-politica-cancelacion` el calendario de gastos de la reserva.
3. Le explica los gastos tal y como los devuelve la acción, distinguiendo vuelo y hotel si vienen separados.
4. Le aclara que es solo información y que la reserva no se ha cancelado.

## Qué no hace

- No cancela la reserva.
- No calcula importes que la acción no devuelva.
- No negocia las condiciones.

## Cuándo pasa a una persona

- Si el cliente decide cancelar.
- Si pide una excepción a las condiciones.

## Cómo lo puede pedir el cliente

- «Si cancelo ahora, ¿cuánto pierdo?»
- «q gastos tiene cancelar el viaje?»
- «Buenos días, ¿el vuelo es reembolsable o solo el hotel?»
- «no se si podremos ir, hasta cuando puedo cancelar gratis?»
