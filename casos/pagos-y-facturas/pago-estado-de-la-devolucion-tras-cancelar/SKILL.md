---
name: pago-estado-de-la-devolucion-tras-cancelar
description: El cliente canceló su reserva y pregunta en qué estado está la
  devolución de su dinero.
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

La cancelación ya está hecha y tiene una devolución reconocida; el cliente quiere saber si se ha emitido y por qué importe.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Confirma con `consultar-reserva` que la reserva está cancelada.
3. Consulta con `consultar-pagos` si la devolución consta como emitida, con su fecha y su importe.
4. Prepara la respuesta con esos datos para que booking la revise antes de enviarla.

## Qué no hace

- No promete cuándo llegará el dinero a su cuenta.
- No modifica el importe de la devolución.

## Cuándo pasa a una persona

- No consta ninguna devolución pese a corresponderle.
- El cliente no está de acuerdo con el importe.

## Cómo lo puede pedir el cliente

- «Quisiera conocer el estado del reembolso tras la cancelación de mi reserva.»
- «cancele y aun no se nada de mi dinero»
- «Hola, ¿ya me habéis hecho la devolución? No me aparece en el banco»
- «como va lo de mi reembolso? lo necesito para pagar otra cosa»
