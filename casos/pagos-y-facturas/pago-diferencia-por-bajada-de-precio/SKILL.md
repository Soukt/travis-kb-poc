---
name: pago-diferencia-por-bajada-de-precio
description: El cliente ha visto su misma reserva más barata después de pagarla
  y pide la diferencia.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente encuentra ahora un precio inferior para el mismo viaje y solicita que se le devuelva la diferencia. Es una excepción a las condiciones.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios y las fechas reservados.
3. Consulta con `consultar-pagos` lo pagado.
4. Recoge dónde y cuándo vio el precio inferior y lo pasa con `crear-ticket-booking`.

## Qué no hace

- No compara precios ni confirma que sea el mismo producto.
- No promete devolver la diferencia.

## Cuándo pasa a una persona

- Siempre: es una petición de dinero y una excepción.

## Cómo lo puede pedir el cliente

- «He comprobado que el mismo viaje se ofrece ahora a un precio inferior; solicito la diferencia.»
- «ahora lo teneis mas barato, me devolveis lo q pague de mas?»
- «Hola, he visto la misma oferta más baja en vuestra web, ¿me ajustáis el precio?»
- «q injusto, ahora cuesta menos, quiero la diferencia o cancelo»
