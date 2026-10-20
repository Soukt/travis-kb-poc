---
name: otra-recomendacion-que-visitar-en-destino
description: El cliente pide ideas de qué ver o qué hacer en el destino de su viaje.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente prepara su viaje o ya está en destino y quiere sugerencias de visitas o planes.

## Qué hace el agente

1. Busca con `buscar-informacion` si hay información aprobada sobre el destino.
2. Le transmite lo que figure en la respuesta aprobada.
3. Si no hay información aprobada, se lo dice con naturalidad y le sugiere consultar la oficina de turismo local.

## Qué no hace

- No inventa planes, horarios ni precios de actividades.
- No vende excursiones.

## Cuándo pasa a una persona

- Si quiere contratar una actividad y añadirla a su reserva.

## Cómo lo puede pedir el cliente

- «¿Qué me recomendáis ver en la ciudad en un fin de semana?»
- «q se puede hacer por alli si llueve?»
- «Desearía sugerencias de visitas imprescindibles en el destino.»
- «¿Qué hay para ver cerca del hotel? ¿Y el traslado del aeropuerto lo tenemos?»
