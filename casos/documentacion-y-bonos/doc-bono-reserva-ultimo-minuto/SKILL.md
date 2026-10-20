---
name: doc-bono-reserva-ultimo-minuto
description: El cliente ha reservado para hoy o mañana y necesita el bono con
  urgencia porque está a punto de llegar.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - reenviar-bono
    - consultar-horarios-hotel
  simulado: "true"
---
## Cuándo aplica

Reserva de última hora en la que el cliente va de camino o llega en breve y aún no tiene la documentación.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Confirma con `consultar-reserva` que la reserva está confirmada.
3. Revisa con `consultar-bonos` si el bono está disponible y, si lo está, lo envía al momento con `reenviar-bono`.
4. Le indica con `consultar-horarios-hotel` el horario de entrada y si se admite llegada tarde.

## Qué no hace

- No asegura que el alojamiento tenga ya la reserva si el bono no está emitido.
- No envía documentación a otro email.

## Cuándo pasa a una persona

- La reserva está pendiente o el bono no está disponible y el cliente llega en breve.
- El cliente ya está en el alojamiento y allí no encuentran la reserva.

## Cómo lo puede pedir el cliente

- «Acabo de reservar para esta noche y no tengo el bono, ya voy en el coche»
- «llego en un rato al hotel y no me ha llegado nada, urgente»
- «He efectuado una reserva para hoy mismo y necesito la documentación con urgencia.»
- «reserve hace nada para mañana, me llega el bono a tiempo? hasta que hora puedo entrar?»
