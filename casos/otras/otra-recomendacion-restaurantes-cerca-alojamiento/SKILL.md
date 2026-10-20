---
name: otra-recomendacion-restaurantes-cerca-alojamiento
description: El cliente pide recomendaciones de restaurantes o sitios para comer
  cerca de su alojamiento.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente está o va a estar en el alojamiento y quiere saber dónde comer o cenar.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-reserva` el alojamiento de la reserva.
3. Revisa con `consultar-servicios-alojamiento` si el propio alojamiento tiene restaurante o servicio de comidas.
4. Busca con `buscar-informacion` si hay recomendaciones aprobadas de la zona.
5. Le informa de lo encontrado y, si no hay recomendaciones aprobadas, le sugiere preguntar en recepción.

## Qué no hace

- No inventa nombres de restaurantes.
- No hace valoraciones personales de locales.

## Cuándo pasa a una persona

- Si la pregunta esconde una queja sobre el régimen de comidas contratado.

## Cómo lo puede pedir el cliente

- «¿Hay algún sitio para cenar bien cerca del hotel?»
- «donde se come bien por la zona? algo baratito»
- «Les agradecería que me recomendasen restaurantes próximos al alojamiento.»
- «¿El hotel tiene restaurante o hay que salir fuera? ¿Hasta qué hora está abierta la recepción?»
