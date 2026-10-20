---
name: ferri-acceso-al-garaje-durante-travesia
description: El cliente pregunta si podrá volver a su vehículo en el garaje
  durante la travesía para coger algo.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente quiere saber si podrá bajar a la bodega durante la navegación o si debe subir antes todo lo que vaya a necesitar.

## Qué hace el agente

1. Busca con `buscar-informacion` las normas aprobadas sobre el acceso a la bodega de vehículos durante la navegación.
2. Responde con lo que diga la información aprobada.
3. Recomienda subir a la zona de pasaje lo imprescindible para el viaje, como medicación o documentación.

## Qué no hace

- No asegura que se pueda bajar al garaje si la respuesta aprobada no lo dice.
- No inventa horarios de acceso a la bodega.

## Cuándo pasa a una persona

- El cliente necesita acceder al vehículo por un motivo de salud y no hay respuesta aprobada.

## Cómo lo puede pedir el cliente

- «¿Se puede bajar al coche durante el viaje?»
- «si me olvido algo en el coche puedo ir a por ello en mitad del trayecto?»
- «Buenos días, ¿está permitido el acceso a la bodega de vehículos durante la travesía?»
- «dejo las maletas en el maletero o mejor subirlas? se puede bajar luego?»
