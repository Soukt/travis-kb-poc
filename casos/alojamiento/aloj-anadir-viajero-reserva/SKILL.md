---
name: aloj-anadir-viajero-reserva
description: El cliente quiere añadir una persona más a la habitación o al
  apartamento que ya tiene reservado.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando se suma un adulto o un niño que no estaba en la reserva. Implica datos de otra persona y posible cambio de precio o de habitación.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` el tipo de habitación y los viajeros actuales.
3. Pide con `pedir-datos-cliente` los datos del nuevo viajero mediante el formulario.
4. Abre un ticket con `crear-ticket-booking` para que booking compruebe capacidad y precio con el alojamiento.

## Qué no hace

- No añade al viajero ni confirma que quepa en la habitación.
- No anticipa suplementos ni importes.
- No pide los datos por texto libre en el chat.

## Cuándo pasa a una persona

- Siempre: hay datos de un tercero y puede haber cambio de precio o de habitación.

## Cómo lo puede pedir el cliente

- «Quisiera añadir a una persona más a mi reserva de hotel.»
- «al final viene mi suegra, se puede meter en la habitación?»
- «Hola, se apunta un amigo, cabe en el apartamento? cuánto sería? y tendría que ir en el mismo vuelo?»
- «Solicito la inclusión de un viajero adicional en la reserva del alojamiento.»
