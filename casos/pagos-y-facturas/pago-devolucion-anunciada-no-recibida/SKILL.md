---
name: pago-devolucion-anunciada-no-recibida
description: El cliente tiene confirmada una devolución pero el dinero no le ha llegado.
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

Consta o se le comunicó una devolución, ha pasado más tiempo del que le indicaron y no la ve en su cuenta.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Consulta con `consultar-pagos` la devolución registrada y su fecha de emisión.
3. Pide con `pedir-datos-cliente` qué medio de pago usó y si ha revisado los movimientos con su banco.
4. Pasa el caso con `crear-ticket-booking`.

## Qué no hace

- No promete una nueva fecha.
- No pide datos de acceso a su banca.

## Cuándo pasa a una persona

- Siempre: es una devolución no recibida.

## Cómo lo puede pedir el cliente

- «Se me comunicó un reembolso que, a fecha de hoy, no he recibido.»
- «me dijisteis que me devolviais el dinero y nada»
- «Hola, la devolución sale como hecha pero en mi cuenta no hay nada»
- «llevo semanas esperando la devolucion, ya esta bien»
