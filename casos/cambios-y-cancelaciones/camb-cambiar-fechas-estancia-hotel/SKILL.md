---
name: camb-cambiar-fechas-estancia-hotel
description: El cliente quiere mover su estancia en el hotel a otras fechas
  manteniendo el mismo alojamiento.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente tiene un alojamiento confirmado y pide trasladarlo a otras fechas. El cambio depende de la disponibilidad del hotel y puede tener gastos o diferencia de precio.

## Qué hace el agente

1. Comprueba que quien escribe es el titular con `verificar-identidad`.
2. Revisa las fechas actuales, el alojamiento y los viajeros con `consultar-reserva`.
3. Consulta con `consultar-politica-cancelacion` si la reserva admite cambios y qué gastos aplicarían hoy, y se lo explica al cliente.
4. Pregunta las nuevas fechas deseadas y si tiene alternativas por si no hay disponibilidad.
5. Pasa la solicitud a booking con `crear-ticket-booking`, con las fechas actuales, las nuevas, las alternativas y las condiciones aplicables.

## Qué no hace

- No confirma el cambio ni garantiza disponibilidad en las nuevas fechas.
- No calcula ni promete diferencias de precio.
- No modifica la reserva por su cuenta.

## Cuándo pasa a una persona

- Siempre: el cambio de fechas lo cotiza y lo gestiona booking.
- Si el viaje es inminente, lo marca como prioritario en el ticket.

## Cómo lo puede pedir el cliente

- «Buenos días, querría cambiar las fechas de mi reserva de hotel a la semana siguiente, ¿es posible?»
- «oye, al final no podemos ir esos días, ¿me lo pasáis a septiembre?»
- «kiero cambiar las fechas del hotel xq me han cambiado las vacaciones en el curro»
- «Hola, necesito mover la reserva unos días más tarde y de paso saber si el hotel tiene parking»
