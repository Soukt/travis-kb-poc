---
name: ferri-vehiculo-a-nombre-de-otra-persona
description: El cliente embarcará con un vehículo que no está a su nombre, como
  uno de empresa o de un familiar, y pregunta qué documentación necesita.
metadata:
  area: ferris
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El conductor no es el propietario del vehículo registrado en el trayecto y el cliente duda si se lo pedirán en el puerto.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` el vehículo registrado y la ruta.
3. Busca con `buscar-informacion` la documentación aprobada para vehículos que no son del conductor.
4. Prepara la respuesta para que booking la revise antes de enviarla.

## Qué no hace

- No pide datos del propietario del vehículo.
- No redacta autorizaciones en nombre del propietario.
- No asegura que podrá embarcar sin la documentación indicada.

## Cuándo pasa a una persona

- La naviera exige datos del propietario que habría que añadir a la reserva.
- No hay información aprobada para esa ruta.

## Cómo lo puede pedir el cliente

- «El coche es de mi padre, ¿necesito algún papel suyo para embarcar?»
- «voy con el coche de la empresa, me pediran algo en el puerto?»
- «Buenos días, el vehículo es de renting y está a nombre de la sociedad. ¿Qué documentación debo presentar?»
- «si el coche no esta a mi nombre pasa algo para el barco?»
