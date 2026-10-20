---
name: vh-liquidos-y-objetos-restringidos-cabina
description: El cliente pregunta qué puede llevar en el equipaje de mano, como
  líquidos, baterías externas u objetos cortantes.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente prepara la maleta de cabina y duda de qué objetos pasan el control de seguridad. Es una consulta general que no necesita datos de la reserva.

## Qué hace el agente

1. Busca con `buscar-informacion` la respuesta aprobada sobre líquidos y objetos restringidos en cabina.
2. Le traslada esa información sin añadir normas por su cuenta.
3. Le recuerda que la decisión final es del control de seguridad y de la aerolínea.
4. Si no hay respuesta aprobada, se lo dice con claridad y le remite a las normas del aeropuerto y de la aerolínea.

## Qué no hace

- No da normas de seguridad de memoria.
- No consulta la reserva si no hace falta.

## Cuándo pasa a una persona

- Si el cliente necesita transportar un objeto que requiere autorización expresa de la aerolínea.

## Cómo lo puede pedir el cliente

- «¿Puedo llevar líquidos en la maleta de mano?»
- «la bateria externa va en cabina o en la maleta grande?»
- «Buenas, ¿se puede llevar una maquinilla de afeitar en cabina?»
- «puedo subir crema solar y champu? y el cargador del movil?»
