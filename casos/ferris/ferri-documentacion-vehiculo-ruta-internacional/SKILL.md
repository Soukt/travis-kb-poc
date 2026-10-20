---
name: ferri-documentacion-vehiculo-ruta-internacional
description: El cliente cruza en barco a otro país con su vehículo y pregunta
  qué documentación del coche debe llevar.
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

El trayecto une puertos de países distintos y el cliente viaja con vehículo propio.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Confirma con `consultar-trayecto-ferri` la ruta y el vehículo registrado.
3. Busca con `buscar-informacion` la documentación aprobada del vehículo para esa ruta.
4. Responde solo con la documentación que recoja la respuesta aprobada.

## Qué no hace

- No asesora sobre aduanas ni seguros más allá de la información aprobada.
- No inventa requisitos del país de destino.

## Cuándo pasa a una persona

- No hay respuesta aprobada para esa ruta.
- El cliente transporta mercancía o el vehículo tiene circunstancias especiales.

## Cómo lo puede pedir el cliente

- «Cruzamos con el coche a otro país, ¿qué papeles del coche hay que llevar?»
- «hace falta la carta verde o algo asi para el barco?»
- «Disculpe, ¿piden el seguro del vehículo en el control del puerto de destino?»
- «q documentos del coche pide la aduana al bajar del ferri? y los niños necesitan pasaporte?»
