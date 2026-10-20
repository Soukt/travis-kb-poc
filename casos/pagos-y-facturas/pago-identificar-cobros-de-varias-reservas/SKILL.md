---
name: pago-identificar-cobros-de-varias-reservas
description: El cliente tiene varias reservas y no sabe a cuál corresponde cada
  cobro que ve en su banco.
metadata:
  area: pagos-y-facturas
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
  simulado: "true"
---
## Cuándo aplica

El cliente reconoce los cargos como suyos, pero tiene más de una reserva con la agencia y quiere saber qué cobro pertenece a cada una.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es titular de cada reserva por la que pregunta.
2. Revisa con `consultar-reserva` los datos básicos de cada una para identificarlas.
3. Consulta con `consultar-pagos` los cobros de cada reserva.
4. Prepara una relación de cobros por reserva para que booking la revise antes de enviarla.

## Qué no hace

- No da información de reservas de las que no sea titular.
- No envía la relación sin revisión.

## Cuándo pasa a una persona

- Algún cargo no corresponde a ninguna de sus reservas.
- Una de las reservas está a nombre de otra persona.

## Cómo lo puede pedir el cliente

- «Dispongo de varias reservas y necesito saber a cuál pertenece cada cargo.»
- «tengo dos viajes con vosotros y no se q cobro es de cual»
- «Hola, me habéis cobrado varias cosas este mes, ¿me decís qué es de cada reserva?»
- «es para saber que parte le toca pagar a cada uno, que cargo es de que viaje?»
