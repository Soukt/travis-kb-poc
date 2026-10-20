---
name: ferri-diferencia-entre-butaca-y-camarote
description: El cliente pregunta en general qué diferencia hay entre viajar en
  butaca y en camarote antes de decidir si le compensa cambiar.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente aún no ha decidido nada y solo quiere entender las opciones de acomodación a bordo.

## Qué hace el agente

1. Busca con `buscar-informacion` la descripción aprobada de cada tipo de acomodación.
2. Explica las diferencias que recoja la información aprobada.
3. Si el cliente quiere cambiar, le indica que la mejora se gestiona aparte con booking.

## Qué no hace

- No da precios ni diferencias de importe.
- No describe las instalaciones de un barco concreto sin respuesta aprobada.

## Cuándo pasa a una persona

- El cliente decide que quiere mejorar su acomodación.

## Cómo lo puede pedir el cliente

- «¿Qué diferencia hay entre ir en butaca y en camarote?»
- «merece la pena el camarote o con la butaca se duerme bien?»
- «Disculpe, ¿las butacas están en una sala común o en zona reservada?»
- «nunca e ido en barco de noche, q me recomendais butaca o camarote?»
