---
name: ferri-documentacion-sanitaria-mascota
description: El cliente pregunta qué documentación, vacunas o identificación
  necesita su mascota para viajar en el barco.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente viaja con una mascota y quiere saber qué le pedirán en el embarque o en el destino.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` la ruta y que la mascota figura en el trayecto.
3. Busca con `buscar-informacion` la documentación aprobada para animales en esa ruta.
4. Responde con lo que diga la información aprobada y, si no hay respuesta, lo dice sin suponer.

## Qué no hace

- No da consejos veterinarios.
- No inventa requisitos sanitarios del destino.

## Cuándo pasa a una persona

- No hay respuesta aprobada para la ruta y el cliente necesita la información para viajar.

## Cómo lo puede pedir el cliente

- «¿Qué papeles necesita el perro para subir al barco?»
- «el gato tiene q llevar pasaporte o con la cartilla vale?»
- «Buenos días, ¿exigen alguna vacuna concreta a las mascotas en el trayecto internacional?»
- «Mi perro tiene chip pero no sé si le falta algo, ¿qué piden en el puerto?»
