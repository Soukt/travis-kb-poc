---
name: pago-reserva-cancelada-por-el-proveedor
description: El cliente tiene la reserva anulada por el alojamiento o por la
  agencia, sin haberlo pedido, y quiere la devolución íntegra.
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

La cancelación no la pidió el cliente: el alojamiento cerró, no había disponibilidad o la agencia la anuló, y el cliente quiere recuperar todo lo pagado o una alternativa.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Confirma con `consultar-reserva` el estado y el motivo de la cancelación.
3. Consulta con `consultar-pagos` lo pagado.
4. Recoge si prefiere reembolso o alternativa y lo pasa con `crear-ticket-booking`.

## Qué no hace

- No ofrece alternativas ni compensaciones por su cuenta.
- No culpa al proveedor.

## Cuándo pasa a una persona

- Siempre: es una devolución.

## Cómo lo puede pedir el cliente

- «Se me ha notificado la cancelación de la reserva por parte del establecimiento. Solicito el reembolso íntegro.»
- «me habeis anulado vosotros la reserva, devolvedme todo»
- «Hola, el hotel dice que no tiene mi reserva y que está cerrado, ¿y mi dinero?»
- «cancelada sin pedirlo, quiero otra opcion o el dinero»
