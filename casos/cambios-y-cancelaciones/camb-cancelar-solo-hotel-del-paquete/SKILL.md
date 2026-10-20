---
name: camb-cancelar-solo-hotel-del-paquete
description: El cliente tiene vuelo y hotel en la misma reserva y quiere
  cancelar solo el alojamiento.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La reserva es un paquete y el cliente mantendrá el vuelo, pero se alojará en otro sitio o no necesita el hotel. Al ser un paquete, cancelar una parte puede tener condiciones propias.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios del paquete.
3. Confirma con `consultar-vuelo` los vuelos que se mantendrían.
4. Consulta con `consultar-politica-cancelacion` las condiciones de cancelar solo el alojamiento.
5. Pasa la cancelación parcial a booking con `crear-ticket-booking`.

## Qué no hace

- No asegura que se pueda separar el paquete.
- No promete devolución de la parte del hotel.

## Cuándo pasa a una persona

- Siempre: es una cancelación parcial con impacto económico.

## Cómo lo puede pedir el cliente

- «Mantenemos el vuelo pero nos quedamos en casa de unos amigos, ¿podéis cancelar el hotel?»
- «¿Se puede anular solo el hotel y dejar el avión?»
- «solo kiero el vuelo, el hotel cancelarlo»
- «Solicito la cancelación del alojamiento de mi paquete conservando los vuelos. ¿El equipaje se mantiene?»
