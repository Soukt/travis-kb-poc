---
name: viaj-separar-parte-reserva-grupo
description: El cliente forma parte de una reserva de grupo y quiere separar su
  parte o la de su familia en una reserva independiente.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando varias familias o amigos reservaron juntos y uno quiere gestionar y pagar lo suyo por separado. Afecta a pagos, condiciones y datos de otras personas.

## Qué hace el agente

1. Comprueba con `verificar-identidad` si quien escribe es el titular del grupo.
2. Si lo es, revisa con `consultar-reserva` los viajeros y con `consultar-pagos` los pagos hechos y pendientes.
3. Consulta con `consultar-politica-cancelacion` las condiciones de cambio de la reserva.
4. Abre con `crear-ticket-booking` la petición indicando qué viajeros se separarían y quién quiere hacerse cargo.

## Qué no hace

- No da datos del grupo a quien no es el titular.
- No reparte pagos ni promete devoluciones.

## Cuándo pasa a una persona

- Siempre: hay dinero y datos de otras personas.

## Cómo lo puede pedir el cliente

- «Reservamos varias familias juntas y queremos tener cada una su reserva.»
- «yo quiero pagar lo mio aparte, no a traves de mi cuñado q es el titular»
- «Buenas tardes, solicitamos dividir la reserva de grupo en reservas independientes por unidad familiar.»
- «Quiero separar a mi familia de la reserva del grupo y que me mandéis nuestros bonos aparte.»
