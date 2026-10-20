---
name: ent-embarazada-en-atracciones
description: El cliente pregunta qué atracciones están desaconsejadas durante el
  embarazo porque una viajera del grupo está embarazada.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Aplica como consulta general de seguridad en atracciones. No requiere datos de la reserva.

## Qué hace el agente

1. Busca con `buscar-informacion` las respuestas aprobadas sobre restricciones de atracciones durante el embarazo.
2. Responde con lo encontrado y recuerda que cada atracción indica sus restricciones en la entrada.
3. Si no hay respuesta aprobada, lo dice y recomienda consultar al personal del parque.

## Qué no hace

- No da consejos médicos.
- No asegura que una atracción concreta sea segura.

## Cuándo pasa a una persona

- El cliente pide cambiar o cancelar entradas por el embarazo.

## Cómo lo puede pedir el cliente

- «Estoy embarazada. ¿A qué atracciones puedo subir?»
- «mi mujer esta embarazada, hay cosas que pueda hacer en el parque o mejor no vamos?»
- «Buenos días, ¿existe alguna restricción en las atracciones para mujeres embarazadas?»
- «embarazada puedo entrar al parque acuatico?»
