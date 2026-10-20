---
name: pago-plazo-cobrado-antes-de-fecha
description: El cliente ve que le han cobrado un plazo antes de la fecha que tenía prevista.
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

Aparece en su banco un cargo de un plazo que, según el cliente, todavía no tocaba. Hay dinero de por medio y puede requerir una corrección.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Consulta con `consultar-pagos` las fechas previstas y los cobros registrados.
3. Pide con `pedir-datos-cliente` la fecha y el concepto del cargo tal como aparecen en su banco.
4. Pasa el caso con `crear-ticket-booking`, indicando la fecha prevista y la fecha real del cobro.

## Qué no hace

- No admite un error ni promete una devolución.
- No pide el número completo de la tarjeta.

## Cuándo pasa a una persona

- Siempre: un cobro fuera de calendario lo revisa booking.

## Cómo lo puede pedir el cliente

- «Me han realizado un cargo que, según mi calendario de pagos, no correspondía todavía.»
- «me habeis cobrado el plazo antes de tiempo!!»
- «Buenas, el pago era para más adelante y ya me lo habéis quitado, ¿qué ha pasado?»
- «Me ha saltado el cobro del plazo y no me tocaba aún, ahora me he quedado sin saldo para otras cosas»
