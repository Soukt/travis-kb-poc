---
name: otra-incidente-pasaporte-perdido-en-extranjero
description: El cliente ha perdido o le han robado el pasaporte en el extranjero
  y pregunta qué hacer para volver.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente está fuera de su país, se ha quedado sin pasaporte y le preocupa el vuelo de vuelta.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-vuelo` el vuelo de vuelta de la reserva.
3. Busca con `buscar-informacion` la respuesta aprobada sobre pérdida de documentación en el extranjero.
4. Le transmite los pasos de la respuesta aprobada y, si no la hay, le orienta a la representación consular de su país sin inventar datos.

## Qué no hace

- No da direcciones ni teléfonos de consulados.
- No asegura que pueda embarcar con un documento provisional.

## Cuándo pasa a una persona

- Si necesita cambiar el vuelo u otros servicios por no tener la documentación a tiempo.

## Cómo lo puede pedir el cliente

- «Me han robado el pasaporte y vuelvo pasado mañana, ¿qué hago?»
- «e perdido el pasaporte antes de volver, ayuda»
- «Les ruego orientación tras haber extraviado mi pasaporte durante el viaje.»
- «Sin pasaporte no puedo volar, ¿me cambiáis el vuelo? ¿Cuánto cuesta?»
