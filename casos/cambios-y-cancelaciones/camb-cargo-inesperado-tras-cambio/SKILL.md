---
name: camb-cargo-inesperado-tras-cambio
description: El cliente ve un cargo que no esperaba después de modificar su reserva.
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

Tras un cambio aparece un cobro que el cliente no reconoce o que no creía haber aceptado.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-pagos` los cobros recientes de la reserva.
3. Le explica a qué corresponde el cargo si los datos lo indican claramente.
4. Pasa el caso a booking con `crear-ticket-booking`.

## Qué no hace

- No anula ni devuelve cargos.
- No supone el motivo si los datos no lo aclaran.

## Cuándo pasa a una persona

- Siempre: hay un cargo en disputa.

## Cómo lo puede pedir el cliente

- «Me habéis cobrado algo más después del cambio y nadie me avisó»
- «¿Qué es este cargo nuevo en mi tarjeta?»
- «me ha llegado un cobro q no entiendo despues de cambiar las fechas»
- «He detectado un cargo no autorizado tras la modificación de mi reserva.»
