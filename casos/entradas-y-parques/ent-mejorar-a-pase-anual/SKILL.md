---
name: ent-mejorar-a-pase-anual
description: El cliente pregunta si puede convertir su entrada en un pase anual
  o de temporada aprovechando lo que ya ha pagado.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente ha disfrutado la visita o planea volver. La mejora suele gestionarla el propio parque.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Revisa con `consultar-condiciones-entrada` si las entradas admiten mejora a pase anual.
3. Busca con `buscar-informacion` las respuestas aprobadas sobre mejoras de entrada.
4. Le indica si es posible y dónde se gestiona, según lo encontrado.

## Qué no hace

- No da precios del pase.
- No gestiona la mejora.

## Cuándo pasa a una persona

- El cliente quiere que la agencia gestione la mejora.

## Cómo lo puede pedir el cliente

- «¿Puedo pasar la entrada a pase anual?»
- «si me hago el pase de temporada me descuentan la entrada?»
- «Buenos días, ¿es posible actualizar la entrada a un abono anual en el parque?»
- «nos ha encantado, como hacemos para volver con un pase?»
