---
name: ferri-check-in-online-naviera
description: El cliente pregunta si tiene que hacer algún registro o check-in
  previo con la naviera antes de presentarse en el puerto.
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

El cliente está acostumbrado a hacer check-in en los vuelos o ha recibido un aviso de la naviera y no sabe si es obligatorio.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Identifica la naviera y el trayecto con `consultar-trayecto-ferri`.
3. Busca con `buscar-informacion` si para ese trayecto hace falta algún trámite previo.
4. Responde con lo que diga la información aprobada y, si no hay respuesta, lo dice claramente.

## Qué no hace

- No inventa pasos de registro previo ni enlaces.
- No hace trámites ante la naviera en nombre del cliente.

## Cuándo pasa a una persona

- No hay respuesta aprobada y el cliente asegura que la naviera le exige un trámite previo.

## Cómo lo puede pedir el cliente

- «¿Hay que hacer check-in online para el barco como en los aviones?»
- «me a llegado un correo de la naviera pidiendo q rellene datos, es necesario?»
- «Buenos días, ¿debo registrar previamente a los pasajeros ante la compañía marítima?»
- «q hay q hacer antes de ir al puerto, algo online o vamos directamente?»
