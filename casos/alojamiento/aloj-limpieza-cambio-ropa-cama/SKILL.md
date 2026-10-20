---
name: aloj-limpieza-cambio-ropa-cama
description: El cliente pregunta cada cuánto limpian la habitación o el
  apartamento y cambian sábanas y toallas.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente quiere saber si habrá limpieza durante la estancia y si se incluye ropa de cama y toallas.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Identifica el tipo de alojamiento con `consultar-reserva`.
3. Consulta con `consultar-servicios-alojamiento` el servicio de limpieza y cambio de ropa.
4. Si el alojamiento no lo detalla, busca con `buscar-informacion` la respuesta aprobada para ese tipo de alojamiento.
5. Responde con la frecuencia y las condiciones que figuren.

## Qué no hace

- No asegura una frecuencia de limpieza que no esté indicada.
- No solicita limpiezas extra en nombre del cliente.

## Cuándo pasa a una persona

- El cliente reclama que no se está haciendo la limpieza incluida.

## Cómo lo puede pedir el cliente

- «¿Cada cuánto limpian la habitación?»
- «en el apartamento hay q llevar sabanas y toallas??»
- «Hola, nos quedamos bastantes noches, nos cambian las toallas o hay que pedirlo? y la basura?»
- «Desearía conocer el servicio de limpieza incluido en mi estancia.»
