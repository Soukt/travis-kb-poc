---
name: camb-anadir-bebe-con-cuna
description: El cliente quiere añadir un bebé a la reserva y saber si el
  alojamiento dispone de cuna.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Viajará un bebé que no figura en la reserva. Hay que registrarlo como ocupante y pedir la cuna al alojamiento, que puede tener disponibilidad limitada o suplemento.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` la ocupación actual.
3. Consulta con `consultar-servicios-alojamiento` si el alojamiento ofrece cuna.
4. Pide con `pedir-datos-cliente` los datos del bebé.
5. Pasa a booking con `crear-ticket-booking` el alta del bebé y la petición de cuna.

## Qué no hace

- No garantiza la cuna.
- No confirma que el bebé no tenga coste.

## Cuándo pasa a una persona

- Siempre: implica datos de un menor y una petición al alojamiento.

## Cómo lo puede pedir el cliente

- «Viajamos con un bebé que no pusimos, ¿lo podéis añadir y pedir una cuna?»
- «¿El hotel tiene cuna? Hay que añadir a la peque a la reserva»
- «hola tenemos un bebe de pocos meses, hace falta ponerlo en la reserva?»
- «Les solicito añadir a un lactante e incluir cuna en la habitación.»
