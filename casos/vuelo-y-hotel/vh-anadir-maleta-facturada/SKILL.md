---
name: vh-anadir-maleta-facturada
description: El cliente quiere añadir una o más maletas facturadas que no
  estaban incluidas en su reserva de vuelo.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La reserva no incluye equipaje facturado, o incluye menos del que el cliente necesita. Quiere añadirlo antes de viajar.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-vuelo` el equipaje que ya tiene incluido.
3. Pide con `pedir-datos-cliente` para qué viajeros, en qué trayectos y cuántas maletas quiere añadir.
4. Crea con `crear-ticket-booking` un ticket con la petición completa.
5. Le informa de que booking le confirmará disponibilidad y coste antes de aplicar nada.

## Qué no hace

- No da precios de equipaje.
- No confirma la maleta hasta que booking la gestione.
- No cobra ni pide datos de pago por el chat.

## Cuándo pasa a una persona

- Siempre, porque implica un cargo.

## Cómo lo puede pedir el cliente

- «Quiero añadir una maleta a la reserva»
- «al final llevamos mas cosas, se puede meter otra maleta?»
- «Buenas, ¿me podéis añadir equipaje facturado solo para la vuelta?»
- «cuanto cuesta añadir una maleta? me sale mejor ahora o en el aeropuerto?»
