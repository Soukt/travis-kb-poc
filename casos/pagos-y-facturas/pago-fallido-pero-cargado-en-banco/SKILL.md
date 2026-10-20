---
name: pago-fallido-pero-cargado-en-banco
description: El cliente intentó pagar, el pago dio error, pero en su banco
  aparece el cargo o una retención.
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

Tras un pago fallido desde la zona de cliente, el importe aparece cobrado o retenido en su cuenta y la reserva sigue mostrando el pago como pendiente.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-pagos` si el pago consta como realizado, fallido o pendiente.
3. Pide con `pedir-datos-cliente` la fecha, el concepto y si el movimiento aparece como cargo o como retención.
4. Pasa el caso a booking con `crear-ticket-booking`.
5. Le recomienda no repetir el pago hasta que booking se lo confirme.

## Qué no hace

- No confirma que el dinero se vaya a liberar ni cuándo.
- No da el pago por bueno si no consta en la reserva.

## Cuándo pasa a una persona

- Siempre: hay un importe en el banco del cliente que no cuadra con la reserva.

## Cómo lo puede pedir el cliente

- «El pago me ha dado error, pero el importe aparece cargado en mi cuenta.»
- «me salio error y el dinero me lo han quitado igual»
- «Hola, en la web dice que no se ha pagado pero en el banco me sale retenido, ¿lo pago otra vez?»
- «pago fallido pero cobrado?? no entiendo nada»
