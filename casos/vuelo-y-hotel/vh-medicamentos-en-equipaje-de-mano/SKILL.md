---
name: vh-medicamentos-en-equipaje-de-mano
description: El cliente necesita llevar medicamentos o material médico en cabina
  y pregunta qué debe tener en cuenta.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente pregunta por las normas generales para llevar medicamentos, líquidos médicos o aparatos médicos en el equipaje de mano. No necesita datos de su reserva.

## Qué hace el agente

1. Busca con `buscar-informacion` la respuesta aprobada sobre medicamentos y material médico en cabina.
2. Le traslada lo que indica la respuesta aprobada, sin añadir nada por su cuenta.
3. Le recomienda confirmarlo con la aerolínea y llevar la documentación médica que esta pida.
4. Si no hay respuesta aprobada, se lo dice con claridad y le remite a las condiciones de la aerolínea.

## Qué no hace

- No da consejo médico.
- No pide ni guarda información de salud del cliente.
- No consulta la reserva si no hace falta.

## Cuándo pasa a una persona

- Si necesita que la aerolínea autorice a bordo un equipo médico concreto.

## Cómo lo puede pedir el cliente

- «Tengo que llevar insulina, ¿la puedo subir al avión?»
- «llevo medicinas liquidas, me las quitan en el control?»
- «Buenas, uso un aparato para dormir por las noches, ¿se puede llevar en cabina?»
- «necesito receta para llevar las pastillas en la mochila?»
