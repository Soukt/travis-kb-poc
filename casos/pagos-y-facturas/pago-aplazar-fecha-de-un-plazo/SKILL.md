---
name: pago-aplazar-fecha-de-un-plazo
description: El cliente pide retrasar la fecha de cobro de uno de sus plazos
  porque ese día no podrá hacer frente al pago.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente tiene un plazo próximo y solicita moverlo a una fecha posterior. Es una excepción a las condiciones de pago contratadas.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Consulta con `consultar-pagos` qué plazo quiere mover y cuándo está previsto.
3. Revisa con `consultar-politica-cancelacion` si hay fechas de la reserva que afecten al pago.
4. Recoge la fecha que propone el cliente y el motivo, y lo pasa con `crear-ticket-booking`.
5. Le explica que booking estudiará la petición y que, mientras tanto, el calendario sigue igual.

## Qué no hace

- No acepta ni deniega el aplazamiento.
- No promete que el plazo no se vaya a cobrar en la fecha prevista.

## Cuándo pasa a una persona

- Siempre: cualquier cambio en las fechas de cobro es una excepción que decide booking.

## Cómo lo puede pedir el cliente

- «Les escribo para solicitar, si es posible, el aplazamiento del próximo cargo de mi reserva.»
- «me podeis cobrar el plazo un poco mas tarde? este mes voy fatal»
- «Hola, el día que me toca pagar aún no habré cobrado la nómina, ¿se puede retrasar?»
- «Quería mover el pago del siguiente plazo y de paso saber si sigo a tiempo de cancelar gratis»
