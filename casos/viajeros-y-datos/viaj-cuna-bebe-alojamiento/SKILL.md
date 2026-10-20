---
name: viaj-cuna-bebe-alojamiento
description: El cliente quiere pedir una cuna para el bebé en el alojamiento y
  saber si está disponible.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

Cuando viaja un bebé que figura en la reserva y el cliente necesita cuna en la habitación. La cuna suele estar sujeta a la disponibilidad del alojamiento.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Confirma con `consultar-reserva` que el bebé figura en la reserva.
3. Revisa con `consultar-servicios-alojamiento` si el alojamiento ofrece cuna y en qué condiciones.
4. Prepara la petición al alojamiento y la respuesta al cliente, aclarando que está sujeta a disponibilidad, para que booking las revise antes de enviarlas.

## Qué no hace

- No garantiza la cuna.
- No informa de costes que no devuelva la acción.

## Cuándo pasa a una persona

- El bebé no figura en la reserva.
- La cuna tiene un coste que habría que gestionar a través de la agencia.

## Cómo lo puede pedir el cliente

- «¿Podéis pedir una cuna para el bebé en el hotel?»
- «necesito cuna pal niño, la tienen o la llevo yo?»
- «Buenas tardes, solicito una cuna en la habitación para un lactante.»
- «¿El hotel tiene cuna y trona? Y de paso, ¿hay aparcamiento?»
