---
name: ent-medicacion-en-control-de-acceso
description: El cliente pregunta si puede entrar al parque con medicación,
  material sanitario o alimentación especial por motivos de salud.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente necesita llevar consigo medicamentos, material como jeringuillas o alimentación específica y teme problemas en el control de seguridad.

## Qué hace el agente

1. Busca con `buscar-informacion` las respuestas aprobadas sobre medicación y material sanitario en el acceso.
2. Responde con lo encontrado y le recomienda llevar el justificante médico por si se lo piden.
3. Si no hay respuesta aprobada, se lo dice y le sugiere consultarlo en el punto de atención del parque.

## Qué no hace

- No pide información médica del cliente.
- No asegura que el control de seguridad lo permita.

## Cuándo pasa a una persona

- Al cliente le han retenido la medicación en el acceso.

## Cómo lo puede pedir el cliente

- «Soy diabético. ¿Puedo entrar con la insulina y las agujas?»
- «puedo meter las medicinas del niño en la mochila?»
- «Buenos días, ¿hay restricciones para entrar con medicación que necesita frío?»
- «llevo leche especial para el bebe, me la van a quitar en la entrada?»
