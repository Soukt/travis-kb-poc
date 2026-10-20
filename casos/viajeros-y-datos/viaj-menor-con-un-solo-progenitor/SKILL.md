---
name: viaj-menor-con-un-solo-progenitor
description: El cliente pregunta si un menor que viaja solo con uno de sus
  progenitores necesita autorización del otro.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando un padre o una madre viaja solo con sus hijos menores, a veces con apellidos distintos o en situación de separación. Es un tema sensible y la respuesta se revisa.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` el destino y los viajeros.
3. Busca con `buscar-informacion` la respuesta aprobada sobre menores que viajan con un solo progenitor.
4. Prepara una respuesta respetuosa con lo que indique esa información y la deja para revisión de booking.

## Qué no hace

- No pregunta por la situación familiar más allá de lo necesario.
- No da asesoramiento legal.

## Cuándo pasa a una persona

- El cliente plantea un conflicto con el otro progenitor sobre el viaje.
- No hay respuesta aprobada.

## Cómo lo puede pedir el cliente

- «Viajo sola con mis hijos, ¿necesito un permiso de su padre?»
- «soy padre separado y me llevo a mi hija de vacaciones, me pueden pedir algo en el aeropuerto?»
- «Buenas tardes, ¿se requiere autorización del otro progenitor para viajar con un menor?»
- «Mis hijos tienen el apellido de su padre y voy yo sola con ellos; ¿qué llevo para el ferri?»
