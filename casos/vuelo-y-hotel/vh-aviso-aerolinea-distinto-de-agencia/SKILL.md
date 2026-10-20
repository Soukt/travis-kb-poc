---
name: vh-aviso-aerolinea-distinto-de-agencia
description: El cliente ha recibido directamente de la aerolínea un horario
  distinto del que figura en su reserva con la agencia y no sabe cuál vale.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La información que tiene el cliente por parte de la aerolínea no coincide con la de la zona de cliente. Hay que aclarar cuál es la correcta.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` el horario que figura en la reserva.
3. Compara ese horario con el que indica el cliente y anota las diferencias.
4. Prepara la respuesta y la envía con `crear-ticket-booking`, junto con las dos versiones, para que booking la revise antes de enviarla.

## Qué no hace

- No da por bueno ninguno de los dos horarios sin la revisión de booking.
- No modifica la reserva.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la respuesta antes de enviarla.
- Si la diferencia de horario afecta al hotel o al traslado.

## Cómo lo puede pedir el cliente

- «La aerolínea me dice una hora y vuestra reserva otra»
- «a quien hago caso? en la app de la compañia sale distinto»
- «Buenas, me ha escrito la aerolínea con un cambio que vosotros no me habéis comunicado.»
- «q horario es el real, el vuestro o el de la aerolinea? el traslado con cual va?»
