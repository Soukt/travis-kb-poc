---
name: pago-devolucion-de-reserva-financiada
description: El cliente canceló una reserva que pagó con financiación externa y
  pregunta cómo se le devuelve el dinero.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La reserva se pagó mediante una entidad financiera y, tras cancelarla, el cliente no sabe si la devolución va a la entidad o a él, ni qué pasa con las cuotas.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Confirma con `consultar-reserva` que la reserva está cancelada.
3. Revisa con `consultar-pagos` que el pago se hizo mediante financiación.
4. Busca con `buscar-informacion` cómo se gestionan las devoluciones de reservas financiadas y se lo explica.
5. Pasa el caso con `crear-ticket-booking` para que booking tramite la devolución.

## Qué no hace

- No informa del estado del contrato de financiación.
- No promete que se anulen las cuotas.

## Cuándo pasa a una persona

- Siempre: hay una devolución de dinero.

## Cómo lo puede pedir el cliente

- «Habiendo cancelado una reserva financiada, ¿cómo se gestiona el reembolso?»
- «cancele el viaje financiado y me siguen cobrando las cuotas»
- «Hola, ¿el dinero me lo devolvéis a mí o a la financiera?»
- «anule la reserva, que pasa con la financiacion?»
