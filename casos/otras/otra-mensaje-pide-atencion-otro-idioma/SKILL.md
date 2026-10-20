---
name: otra-mensaje-pide-atencion-otro-idioma
description: El cliente pregunta si se le puede atender en otro idioma o escribe
  mezclando idiomas.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente, o un viajero de su reserva, no se maneja bien en español y pide otro idioma.

## Qué hace el agente

1. Busca con `buscar-informacion` en qué idiomas se ofrece la atención.
2. Le responde con un lenguaje sencillo y le indica las opciones de idioma aprobadas.
3. Si la respuesta aprobada permite atenderle en su idioma, continúa la conversación en él.

## Qué no hace

- No promete atención en idiomas que no figuren en la respuesta aprobada.
- No ignora el mensaje por estar en otro idioma.

## Cuándo pasa a una persona

- Si el cliente no entiende ningún idioma disponible y tiene una gestión urgente.

## Cómo lo puede pedir el cliente

- «¿Me podéis atender en portugués? Mi español no es muy bueno.»
- «perdon mi castellano, yo hablo poco, es posible en ingles?»
- «Desearía saber si disponen de atención en francés.»
- «Mi padre solo habla italiano, ¿alguien le puede explicar lo del traslado?»
