---
name: pago-devolucion-a-otra-cuenta-distinta
description: El cliente pide que su devolución se haga a una cuenta o tarjeta
  distinta de la que usó para pagar.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El medio de pago original sigue activo, pero el cliente prefiere recibir el dinero en otra cuenta, a veces de otra persona. Es una excepción.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Consulta con `consultar-pagos` la devolución y el medio de pago original.
3. Recoge el motivo de la petición sin pedir datos bancarios por el chat.
4. Pasa la petición con `crear-ticket-booking`.

## Qué no hace

- No acepta datos bancarios propios ni de terceros por el chat.
- No promete cambiar el destino del dinero.

## Cuándo pasa a una persona

- Siempre: es una excepción sobre una devolución.

## Cómo lo puede pedir el cliente

- «Desearía que el reembolso se efectuara en una cuenta distinta de la del pago.»
- «me lo podeis devolver a otra tarjeta?»
- «Hola, pagó mi hermano pero quiero que el dinero me llegue a mí»
- «devolvedmelo por transferencia a mi cuenta nueva mejor»
