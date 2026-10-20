---
name: pago-doble-cobro-mismo-plazo
description: El cliente ve que el mismo plazo o pago de su reserva se le ha
  cobrado dos veces.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

En su extracto aparecen dos cargos iguales por el mismo concepto de la reserva. Puede ser un cobro duplicado o una retención temporal del banco, y debe revisarlo booking.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-pagos` cuántos cobros constan para ese plazo.
3. Solicita con `pedir-datos-cliente` las fechas y los conceptos de los dos cargos que ve en su banco.
4. Crea el ticket con `crear-ticket-booking` con lo que consta en la reserva y lo que aporta el cliente.
5. Le confirma que el caso queda en manos de booking.

## Qué no hace

- No confirma que sea un duplicado ni promete devolver nada.
- No pide capturas con los datos completos de la tarjeta.

## Cuándo pasa a una persona

- Siempre: un posible cobro duplicado implica dinero y lo gestiona booking.

## Cómo lo puede pedir el cliente

- «He detectado dos cargos idénticos correspondientes a la misma reserva.»
- «me habeis cobrado dos veces el mismo plazo»
- «Hola, me sale el cargo repetido en el banco, ¿me lo vais a devolver?»
- «OS HABEIS COBRADO DOBLE, quiero una solución ya»
- «Tengo el pago duplicado y además no me llega el bono, ¿está todo bien con la reserva?»
