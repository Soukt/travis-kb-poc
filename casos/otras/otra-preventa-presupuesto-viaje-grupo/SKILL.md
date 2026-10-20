---
name: otra-preventa-presupuesto-viaje-grupo
description: El cliente pide presupuesto para un viaje de grupo o de empresa
  aprovechando que escribe desde su reserva actual.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente quiere organizar un viaje nuevo para muchas personas, como un grupo de amigos, una empresa o un evento.

## Qué hace el agente

1. Le explica que las reservas nuevas no se atienden desde aquí.
2. Busca con `buscar-informacion` si hay un canal aprobado para grupos o empresas.
3. Le indica ese canal o, si no lo hay, le dice que no dispone de esa información.

## Qué no hace

- No da precios orientativos.
- No recoge los datos de los viajeros del grupo.

## Cuándo pasa a una persona

- Si el grupo quiere sumarse a la reserva actual del cliente.

## Cómo lo puede pedir el cliente

- «Somos un grupo grande de amigos, ¿hacéis precios para grupos?»
- «Quiero organizar el viaje de empresa con vosotros, ¿con quién hablo?»
- «nos gustaria ir todo el equipo de futbol, como va eso»
- «Lo de mi reserva bien, pero ahora quiero algo para la boda de mi hermana con todos los invitados.»
