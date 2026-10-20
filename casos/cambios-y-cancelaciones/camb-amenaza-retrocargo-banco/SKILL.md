---
name: camb-amenaza-retrocargo-banco
description: El cliente amenaza con reclamar el cargo a su banco si no le
  devuelven el dinero de una cancelación.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente no está conforme con los gastos o con la devolución y anuncia que pedirá a su banco que anule el cobro. Es un caso delicado que debe tratar booking.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-pagos` los cobros y devoluciones de la reserva.
3. Responde con calma, sin entrar en confrontación, y le explica que su caso se revisará.
4. Pasa el caso con prioridad a booking con `crear-ticket-booking`, indicando la intención de reclamar al banco.

## Qué no hace

- No disuade al cliente de ejercer sus derechos.
- No promete devoluciones para evitar la reclamación.

## Cuándo pasa a una persona

- Siempre: hay una disputa económica en curso.

## Cómo lo puede pedir el cliente

- «Si no me devolvéis el dinero, llamo al banco para que anule el cargo»
- «Voy a pedir la devolución a mi tarjeta directamente»
- «ya he hablado con mi banco, o me devolveis o lo reclamo por ahi»
- «Les comunico que, de no resolverse, iniciaré una reclamación del cargo ante mi entidad bancaria.»
