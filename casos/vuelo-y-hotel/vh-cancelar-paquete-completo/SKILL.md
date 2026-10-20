---
name: vh-cancelar-paquete-completo
description: El cliente ha decidido cancelar su paquete completo de vuelo y hotel.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-politica-cancelacion
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente pide expresamente anular toda la reserva. No alega causas excepcionales.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Consulta con `consultar-politica-cancelacion` los gastos que aplican en este momento.
3. Revisa con `consultar-pagos` lo pagado hasta ahora.
4. Le informa de las condiciones según la acción y le pide confirmación expresa de que quiere cancelar.
5. Crea con `crear-ticket-booking` un ticket con la petición confirmada.

## Qué no hace

- No ejecuta la cancelación.
- No confirma el importe que se le devolverá.

## Cuándo pasa a una persona

- Siempre, porque hay devolución de dinero.

## Cómo lo puede pedir el cliente

- «Quiero cancelar el viaje»
- «anulad la reserva porfavor, no podemos ir»
- «Buenas tardes, deseo cancelar el paquete completo; ¿cómo se procede?»
- «cancelo todo, cuando me devolveis lo pagado?»
