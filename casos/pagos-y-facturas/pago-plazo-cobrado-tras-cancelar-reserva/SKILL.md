---
name: pago-plazo-cobrado-tras-cancelar-reserva
description: El cliente canceló su reserva y, aun así, se le ha cobrado un plazo.
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

La reserva figura, o debería figurar, como cancelada, pero se ha producido un cobro posterior de un plazo pendiente.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Confirma con `consultar-reserva` el estado y la fecha de la cancelación.
3. Revisa con `consultar-pagos` el cobro posterior y si quedan más plazos programados.
4. Pasa el caso con `crear-ticket-booking`, destacando si siguen activos cobros futuros.

## Qué no hace

- No promete la devolución del plazo.
- No calcula lo que le corresponde.

## Cuándo pasa a una persona

- Siempre: hay un cobro discutido y una posible devolución.

## Cómo lo puede pedir el cliente

- «Cancelé la reserva y, sin embargo, se me ha cargado el siguiente plazo.»
- «si cancele por que me seguis cobrando??»
- «Hola, anulé el viaje y hoy me ha llegado el cobro del plazo, ¿me lo devolvéis?»
- «la reserva esta cancelada pero los plazos siguen cobrandose, paradlo ya»
