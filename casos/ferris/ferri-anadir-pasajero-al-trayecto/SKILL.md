---
name: ferri-anadir-pasajero-al-trayecto
description: El cliente quiere añadir un viajero nuevo a su trayecto en barco.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Una persona que no estaba en la reserva va a viajar en el barco, sea adulto, niño o bebé.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` los viajeros y la acomodación actuales.
3. Pide con `pedir-datos-cliente` los datos del nuevo viajero y en qué trayectos viaja.
4. Abre un caso con `crear-ticket-booking` y explica que booking confirmará disponibilidad y coste.

## Qué no hace

- No confirma la plaza ni el precio.
- No da por hecho que el nuevo viajero cabe en la acomodación contratada.

## Cuándo pasa a una persona

- Siempre: implica un cargo y datos de otra persona.

## Cómo lo puede pedir el cliente

- «Se apunta una amiga al viaje, ¿la podéis añadir al barco?»
- «se me olvido meter al bebe en la reserva del ferri!!»
- «Buenos días, quisiera incluir un pasajero adicional en el trayecto de ida y vuelta.»
- «Viene mi madre también, ¿cabe en nuestro camarote o hay que coger otro?»
