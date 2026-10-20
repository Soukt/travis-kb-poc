---
name: camb-que-queda-activo-tras-cancelacion-parcial
description: El cliente canceló una parte de la reserva y quiere saber qué
  servicios siguen activos y si sus bonos siguen valiendo.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Tras anular un servicio, por ejemplo las entradas o una habitación, el cliente quiere comprobar que el resto sigue en pie.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` el estado de cada servicio.
3. Comprueba con `consultar-bonos` qué bonos siguen disponibles y válidos.
4. Le resume qué se mantiene y qué está cancelado.

## Qué no hace

- No reactiva servicios cancelados.
- No informa de devoluciones.

## Cuándo pasa a una persona

- Aparece cancelado algo que el cliente quería mantener.
- Falta algún bono de un servicio activo.

## Cómo lo puede pedir el cliente

- «Cancelé las entradas, pero el hotel sigue, ¿verdad?»
- «¿Qué me queda activo de la reserva después de quitar la habitación?»
- «los bonos q tengo siguen valiendo despues de cancelar el traslado?»
- «Ruego confirmen qué servicios permanecen vigentes tras la anulación parcial. ¿Y cuándo es el próximo cobro?»
