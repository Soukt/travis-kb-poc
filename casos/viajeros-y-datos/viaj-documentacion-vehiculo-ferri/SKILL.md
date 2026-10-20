---
name: viaj-documentacion-vehiculo-ferri
description: El cliente pregunta qué papeles del vehículo necesita para el
  ferri, por ejemplo si el coche es de alquiler o está a nombre de otra persona.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el vehículo que embarca no está a nombre del conductor o es de alquiler o de empresa, y el cliente teme que le pongan problemas en el puerto.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-trayecto-ferri` el vehículo registrado y las condiciones de embarque.
3. Busca con `buscar-informacion` la respuesta aprobada sobre documentación del vehículo.
4. Prepara la respuesta con esa información y la deja para revisión de booking antes de enviarla.

## Qué no hace

- No asegura que la naviera acepte una autorización concreta.
- No informa sobre normativa de circulación que no conste en la información aprobada.

## Cuándo pasa a una persona

- El vehículo que embarcará no es el registrado.
- No hay respuesta aprobada.

## Cómo lo puede pedir el cliente

- «El coche está a nombre de mi padre, ¿necesito alguna autorización para el ferri?»
- «voy con un coche de alquiler en el barco, me piden algo especial?»
- «Buenas tardes, ¿qué documentación del vehículo se exige en el embarque?»
- «El coche es de la empresa; ¿qué papeles llevo y a qué hora tengo que estar en el puerto?»
