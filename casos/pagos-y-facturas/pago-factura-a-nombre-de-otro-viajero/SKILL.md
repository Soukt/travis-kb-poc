---
name: pago-factura-a-nombre-de-otro-viajero
description: El cliente pide que la factura se emita a nombre de otro viajero de
  la reserva en lugar del titular.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-factura
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Otro acompañante quiere la factura a su nombre, por ejemplo porque fue quien pagó. Implica datos de otra persona.

## Qué hace el agente

1. Verifica la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los viajeros de la reserva.
3. Consulta con `consultar-factura` la factura emitida.
4. Recoge la petición, sin pedir por el chat datos fiscales del otro viajero, y la pasa con `crear-ticket-booking`.

## Qué no hace

- No recoge datos personales del otro viajero.
- No cambia el titular de la factura.

## Cuándo pasa a una persona

- Siempre: afecta a datos de otra persona.

## Cómo lo puede pedir el cliente

- «Solicito que la factura figure a nombre de mi acompañante, que fue quien abonó el viaje.»
- «la factura la quiero a nombre de mi padre q es el que pago»
- «Hola, la reserva está a mi nombre pero mi amiga necesita la factura a nombre suyo»
- «se puede poner la factura a nombre de otro de los viajeros?»
