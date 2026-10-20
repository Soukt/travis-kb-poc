---
name: camb-anadir-nino-reserva-hotel
description: El cliente quiere añadir un niño que no incluyó al hacer la reserva
  de alojamiento.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La reserva se hizo para menos personas y ahora viajará también un menor. Depende de la capacidad de la habitación y de la edad, y puede tener coste.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` la ocupación y el tipo de habitación actuales.
3. Pide con `pedir-datos-cliente` el nombre y la fecha de nacimiento del niño.
4. Le avisa de que hay que confirmar si la habitación admite al menor y si cambia el precio, y lo pasa a booking con `crear-ticket-booking`.

## Qué no hace

- No confirma que el niño quepa en la habitación.
- No asegura que sea gratis por la edad.

## Cuándo pasa a una persona

- Siempre: implica datos de un menor y posible coste.

## Cómo lo puede pedir el cliente

- «Al final viene también mi sobrino, ¿se puede añadir a la reserva?»
- «Quiero añadir a mi hijo pequeño a la habitación, ¿tiene coste?»
- «se me olvido poner al niño en la reserva!! se puede añadir?»
- «Solicito incluir a un menor en la reserva. ¿Hay suplemento? ¿Y el hotel tiene piscina infantil?»
