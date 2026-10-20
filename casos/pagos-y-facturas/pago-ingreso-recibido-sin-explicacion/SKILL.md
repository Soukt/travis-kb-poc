---
name: pago-ingreso-recibido-sin-explicacion
description: El cliente ha recibido un ingreso de la agencia y no sabe a qué corresponde.
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

Le ha llegado una devolución o un abono que no esperaba, por ejemplo tras un cambio o la anulación de un servicio, y quiere saber el motivo.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` si ha habido cambios o servicios anulados.
3. Consulta con `consultar-pagos` las devoluciones registradas.
4. Prepara una explicación del ingreso para que booking la revise antes de enviarla.

## Qué no hace

- No pide que devuelva el dinero.
- No envía la explicación sin revisión.

## Cuándo pasa a una persona

- El ingreso no figura en ninguna de sus reservas.
- El ingreso hace pensar que se ha cancelado algo que el cliente no pidió.

## Cómo lo puede pedir el cliente

- «He recibido un abono por parte de su empresa del que desconozco el motivo.»
- «me habeis devuelto dinero y no se por que»
- «Hola, me ha llegado una devolución, ¿se ha cancelado algo de mi viaje?»
- «ingreso raro vuestro en mi cuenta, esta todo bien con la reserva?»
