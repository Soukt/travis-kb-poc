---
name: camb-gastos-de-gestion-agencia
description: El cliente pregunta si la agencia cobra gastos de gestión por
  tramitar un cambio o una cancelación.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-politica-cancelacion
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente quiere saber si, además de lo que cobre el proveedor, hay un cargo de la agencia por gestionar su petición.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Consulta con `consultar-politica-cancelacion` si las condiciones de su reserva recogen gastos de gestión.
3. Busca con `buscar-informacion` la respuesta aprobada de la agencia sobre los gastos de gestión.
4. Le responde con lo que dicen ambas fuentes, distinguiendo lo que cobra el proveedor de lo que cobra la agencia.

## Qué no hace

- No da importes que no salgan de las acciones.
- No promete que no haya gastos de gestión.

## Cuándo pasa a una persona

- Las dos fuentes se contradicen.
- El cliente pide que no se le apliquen.

## Cómo lo puede pedir el cliente

- «¿Vosotros cobráis algo por hacer el cambio o solo el hotel?»
- «Si cancelo, ¿hay gastos de gestión de la agencia?»
- «aparte de lo del hotel me cobrais algo vosotros?»
- «Solicito información sobre posibles cargos de gestión por modificación.»
