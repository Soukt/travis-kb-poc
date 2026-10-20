---
name: aloj-normas-salida-apartamento
description: "El cliente pregunta qué tiene que hacer al dejar el apartamento el
  último día: llaves, basura, limpieza o revisión."
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-horarios-hotel
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente se aloja en un apartamento y quiere saber el procedimiento de salida. No aplica a incidencias con la fianza.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Confirma el apartamento y la fecha de salida con `consultar-reserva`.
3. Obtiene la hora de salida con `consultar-horarios-hotel`.
4. Busca con `buscar-informacion` la respuesta aprobada sobre el procedimiento de salida en apartamentos.
5. Responde con esas pautas y aclara que las instrucciones concretas del propietario prevalecen.

## Qué no hace

- No inventa normas de la casa que no figuren en la información disponible.
- No indica dónde dejar las llaves si no consta en las instrucciones.

## Cuándo pasa a una persona

- No hay instrucciones de entrega de llaves y la salida es inminente.
- El propietario reclama algo al cliente por la forma de dejar el apartamento.

## Cómo lo puede pedir el cliente

- «¿Qué hacemos con las llaves al dejar el apartamento?»
- «hay q dejarlo limpio o eso lo hacen ellos?»
- «Hola, mañana nos vamos muy pronto. Dónde dejamos la basura y las llaves? Y el traslado nos recoge en la puerta?»
- «Les agradecería que me indicasen el procedimiento de salida del apartamento.»
