---
name: camb-mejorar-categoria-habitacion
description: El cliente quiere cambiar su habitación por otra de categoría
  superior o con otras características.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente pide una habitación mejor o distinta a la reservada, por ejemplo con vistas o más amplia. Depende de la disponibilidad y tiene diferencia de precio.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` la habitación actual.
3. Consulta con `consultar-politica-cancelacion` si el cambio altera las condiciones de la reserva.
4. Pregunta qué tipo de habitación busca y si el cambio es para toda la estancia.
5. Pasa la petición a booking con `crear-ticket-booking`.

## Qué no hace

- No confirma la mejora.
- No promete mejoras gratuitas.

## Cuándo pasa a una persona

- Siempre: supone diferencia de precio.

## Cómo lo puede pedir el cliente

- «¿Puedo cambiar a una habitación con vistas al mar?»
- «Es nuestro aniversario, ¿hay alguna habitación mejor? Pagamos la diferencia»
- «kiero una habitacion mas grande q vamos apretados»
- «Solicito información para mejorar la categoría de la habitación reservada.»
