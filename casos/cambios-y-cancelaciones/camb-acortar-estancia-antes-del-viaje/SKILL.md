---
name: camb-acortar-estancia-antes-del-viaje
description: El cliente quiere reducir el número de noches de una reserva de
  alojamiento que todavía no ha empezado.
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

Antes de la llegada, el cliente decide quedarse menos noches. Quitar noches puede tener gastos según la política y puede cambiar la tarifa del resto de la estancia.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` las fechas y el alojamiento contratados.
3. Consulta con `consultar-politica-cancelacion` los gastos que aplicarían a las noches que quiere quitar y se los explica tal como los devuelve la acción.
4. Confirma con el cliente qué noches concretas quiere eliminar.
5. Pasa la reducción a booking con `crear-ticket-booking`.

## Qué no hace

- No promete devolución de las noches eliminadas.
- No modifica la reserva ni da por cerrada la reducción.

## Cuándo pasa a una persona

- Siempre: la reducción de noches afecta al importe y a posibles devoluciones.

## Cómo lo puede pedir el cliente

- «Hola, al final nos quedamos menos noches, ¿podéis quitar las últimas?»
- «Necesito acortar la estancia, ¿me devolvéis lo de las noches que no use?»
- «qeremos irnos antes, kitar alguna noche se puede??»
- «Buenos días: por motivos laborales debemos reducir la duración de la reserva. ¿Tendría gastos?»
