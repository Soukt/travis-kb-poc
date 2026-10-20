---
name: vh-medidas-equipaje-de-mano
description: El cliente pregunta qué equipaje de mano puede subir a cabina y con
  qué medidas y peso.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente quiere saber si su maleta pequeña, mochila o bolso entran en cabina con la tarifa que tiene. Es una consulta previa al viaje.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` el equipaje de mano incluido en cada trayecto.
3. Si los datos no detallan medidas o peso, busca con `buscar-informacion` la respuesta aprobada.
4. Le traslada lo que permite su billete y le recomienda revisar las condiciones de la aerolínea, que son las que se aplican en la puerta de embarque.

## Qué no hace

- No inventa medidas ni pesos.
- No asegura que la aerolínea no cobre en la puerta por un bulto que no cumpla.

## Cuándo pasa a una persona

- Si el cliente quiere añadir un equipaje de mano mayor o una pieza adicional.

## Cómo lo puede pedir el cliente

- «¿Qué medidas tiene que tener la maleta de cabina?»
- «puedo subir mochila y maleta pequeña o solo una cosa?»
- «Buenos días, ¿el bolso cuenta como equipaje de mano?»
- «la trolley q tengo entra en cabina??»
