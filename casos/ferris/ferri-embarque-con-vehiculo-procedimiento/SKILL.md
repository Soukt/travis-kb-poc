---
name: ferri-embarque-con-vehiculo-procedimiento
description: "El cliente viaja con vehículo y pregunta cómo es el embarque: por
  dónde entrar, qué enseñar y si los acompañantes suben en el coche."
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

Es la primera vez que el cliente embarca con su vehículo o no sabe cómo se organiza el acceso de coches al barco.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Obtiene con `consultar-trayecto-ferri` el puerto y la hora de presentación para vehículos.
3. Busca con `buscar-informacion` el procedimiento aprobado de embarque de vehículos y si los acompañantes suben en el coche o a pie.
4. Explica los pasos en orden, desde la llegada al puerto hasta dejar el vehículo en el garaje.

## Qué no hace

- No inventa normas de embarque que no estén en la respuesta aprobada.
- No da indicaciones de tráfico ni de rutas.

## Cuándo pasa a una persona

- El cliente plantea una situación que la información aprobada no cubre, como un conductor que llega al puerto por separado.

## Cómo lo puede pedir el cliente

- «Es la primera vez que embarcamos con coche, ¿cómo funciona?»
- «los q no conducen tienen q subir andando o van en el coche?»
- «Disculpe, ¿el conductor embarca por un sitio y los pasajeros por otro?»
- «cuando lleguemos al puerto con el coche dnd nos ponemos? hay cola?»
