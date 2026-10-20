---
name: ent-parque-acuatico-que-llevar
description: El cliente va a un parque acuático y pregunta qué tiene que llevar,
  si hay taquillas o toallas y qué normas de baño hay.
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

Aplica a entradas de parques acuáticos, donde hay normas específicas de vestimenta y servicios como taquillas o hamacas.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Revisa con `consultar-condiciones-entrada` qué incluye la entrada, como taquilla, hamaca o toalla.
3. Busca con `buscar-informacion` las respuestas aprobadas sobre normas de baño y servicios del parque acuático.
4. Responde con una lista práctica de lo que tiene que llevar y lo que puede encontrar allí.

## Qué no hace

- No da precios de taquillas ni de hamacas.
- No inventa normas de vestimenta.

## Cuándo pasa a una persona

- El cliente esperaba un servicio incluido que no le dan en el parque.

## Cómo lo puede pedir el cliente

- «¿Hay que llevar toalla al parque acuático o la dan allí?»
- «hay taquillas para dejar las cosas?»
- «Buenos días, ¿existen normas sobre el tipo de bañador en el parque acuático?»
- «los niños pequeños necesitan pañal de agua? y hay sombra?»
