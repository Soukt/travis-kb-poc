---
name: camb-reserva-duplicada-por-error
description: El cliente ha hecho la misma reserva dos veces o le aparecen cobros
  duplicados por la misma reserva.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Por un fallo al pagar o un doble clic, el cliente tiene dos reservas iguales o dos cobros por una sola, y quiere anular la que sobra.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` las reservas del cliente para identificar la duplicada.
3. Revisa con `consultar-pagos` los pagos de cada una.
4. Confirma con el cliente cuál quiere mantener.
5. Pasa el caso a booking con `crear-ticket-booking`.

## Qué no hace

- No cancela ninguna reserva por su cuenta.
- No promete devoluciones.

## Cuándo pasa a una persona

- Siempre: hay cobros y devoluciones de por medio.

## Cómo lo puede pedir el cliente

- «Creo que he reservado dos veces lo mismo, ¿podéis anular una?»
- «Me habéis cobrado dos veces la reserva»
- «me salen dos reservas iguales, una sobra»
- «Detecto un cargo duplicado correspondiente a la misma reserva. Solicito su revisión.»
