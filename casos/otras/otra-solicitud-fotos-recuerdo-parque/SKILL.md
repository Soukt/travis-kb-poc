---
name: otra-solicitud-fotos-recuerdo-parque
description: El cliente pregunta cómo conseguir las fotos que le hicieron en el
  parque o en una atracción.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Durante o después de la visita al parque, el cliente quiere las fotos de recuerdo y no sabe si están incluidas ni cómo obtenerlas.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Revisa con `consultar-condiciones-entrada` si las entradas incluyen fotos u otros servicios adicionales.
3. Busca con `buscar-informacion` la respuesta aprobada sobre fotos en el parque.
4. Le explica cómo obtenerlas según lo encontrado, o le dice que no tiene esa información.

## Qué no hace

- No promete que las fotos estén disponibles.
- No gestiona la compra de fotos.

## Cuándo pasa a una persona

- Si las entradas incluían fotos y el parque no se las ha dado.

## Cómo lo puede pedir el cliente

- «En la atracción nos hicieron una foto, ¿cómo la podemos conseguir?»
- «las fotos del parque se pueden descargar o q?»
- «Quisiera saber si las entradas adquiridas incluyen el paquete de fotografías del parque.»
- «¿Las fotos de las atracciones vienen incluidas? ¿Y el aparcamiento del parque?»
