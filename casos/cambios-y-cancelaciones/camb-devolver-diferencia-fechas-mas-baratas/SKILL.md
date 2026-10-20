---
name: camb-devolver-diferencia-fechas-mas-baratas
description: El cliente ha cambiado su reserva a fechas más baratas y pide que
  le devuelvan la diferencia.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Tras un cambio de fechas, la nueva estancia cuesta menos que la original y el cliente reclama la diferencia.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` que el cambio está aplicado.
3. Revisa con `consultar-pagos` lo pagado y si hay devoluciones registradas.
4. Pasa la petición a booking con `crear-ticket-booking`.

## Qué no hace

- No calcula la diferencia.
- No promete la devolución, que depende de las condiciones del cambio.

## Cuándo pasa a una persona

- Siempre: es una devolución.

## Cómo lo puede pedir el cliente

- «Las fechas nuevas eran más baratas, ¿me devolvéis la diferencia?»
- «He cambiado a temporada baja, ¿no me toca algo de vuelta?»
- «el cambio salio mas barato y no me habeis devuelto nada»
- «Solicito el reembolso de la diferencia de precio resultante de la modificación.»
