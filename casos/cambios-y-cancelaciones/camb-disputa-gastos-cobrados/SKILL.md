---
name: camb-disputa-gastos-cobrados
description: El cliente ya ha cancelado, le han aplicado gastos y no está de
  acuerdo con ellos.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Tras una cancelación con gastos, el cliente considera que el cargo es injusto o excesivo y lo reclama.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-pagos` los cargos y devoluciones realizados.
3. Consulta con `consultar-politica-cancelacion` las condiciones que aplicaban en el momento de cancelar.
4. Recoge los argumentos del cliente con respeto.
5. Pasa la reclamación a booking con `crear-ticket-booking`.

## Qué no hace

- No anula ni reduce gastos.
- No discute con el cliente.

## Cuándo pasa a una persona

- Siempre: es una reclamación económica.

## Cómo lo puede pedir el cliente

- «Me habéis cobrado gastos de cancelación y cancelé con tiempo de sobra»
- «No estoy de acuerdo con lo que me habéis quitado al cancelar»
- «es un robo lo q me habeis cobrado por cancelar, quiero q lo reviseis»
- «Manifiesto mi disconformidad con la penalización aplicada a mi cancelación.»
