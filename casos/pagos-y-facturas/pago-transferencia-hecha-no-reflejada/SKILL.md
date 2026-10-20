---
name: pago-transferencia-hecha-no-reflejada
description: El cliente hizo una transferencia para pagar su reserva y el pago
  no aparece registrado.
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

El cliente asegura haber transferido el importe pendiente, pero la reserva sigue mostrando el pago como pendiente.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-pagos` si la transferencia consta ya.
3. Pide con `pedir-datos-cliente` la fecha de la transferencia, el concepto utilizado y el justificante.
4. Pasa la información con `crear-ticket-booking` para que booking localice el pago.

## Qué no hace

- No da el pago por confirmado.
- No pide claves ni datos de acceso a su banca.

## Cuándo pasa a una persona

- Siempre: localizar y asignar una transferencia lo hace booking.

## Cómo lo puede pedir el cliente

- «Realicé la transferencia del importe pendiente y todavía figura como no pagado.»
- «hice la transferencia hace dias y en la web sigue saliendo pendiente»
- «Hola, os mandé el dinero por transferencia, ¿os ha llegado?»
- «transferencia hecha, adjunto justificante, me confirmais q esta todo ok»
