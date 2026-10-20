---
name: pago-devolucion-noches-no-disfrutadas
description: El cliente dejó el alojamiento antes de tiempo o llegó más tarde y
  pide que le devuelvan las noches no disfrutadas.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Por un imprevisto o por decisión propia, el cliente no usó todas las noches reservadas y quiere recuperar esa parte.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` las fechas y el alojamiento.
3. Consulta con `consultar-politica-cancelacion` las condiciones aplicables.
4. Pide con `pedir-datos-cliente` el motivo y cualquier justificante del alojamiento sobre la salida o la llegada.
5. Pasa la petición con `crear-ticket-booking`.

## Qué no hace

- No promete devolver las noches.
- No contacta con el alojamiento por su cuenta.

## Cuándo pasa a una persona

- Siempre: es una devolución.

## Cómo lo puede pedir el cliente

- «Abandonamos el hotel antes de lo previsto y solicitamos el reembolso de las noches restantes.»
- «nos fuimos antes del hotel, me devolveis las noches?»
- «Hola, el vuelo se retrasó y perdimos la primera noche, ¿la recupero?»
- «solo dormimos una noche de las que pagamos, eso se devuelve?»
