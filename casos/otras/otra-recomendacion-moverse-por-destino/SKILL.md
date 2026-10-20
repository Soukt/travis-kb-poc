---
name: otra-recomendacion-moverse-por-destino
description: "El cliente pregunta cómo moverse por el destino o llegar a sitios
  desde el alojamiento: transporte público, taxi o a pie."
metadata:
  area: otras
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-traslados
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente quiere desplazarse durante el viaje y no sabe qué opciones tiene desde su alojamiento.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-reserva` el alojamiento de la reserva.
3. Revisa con `consultar-traslados` si tiene traslados incluidos que cubran parte de sus desplazamientos.
4. Busca con `buscar-informacion` si hay información aprobada sobre transporte en la zona.
5. Le informa de lo encontrado sin inventar líneas, horarios ni tarifas.

## Qué no hace

- No inventa rutas ni horarios de transporte.
- No contrata traslados nuevos.

## Cuándo pasa a una persona

- Si quiere añadir un traslado que no tiene contratado.

## Cómo lo puede pedir el cliente

- «¿Hay autobús desde el hotel hasta el centro?»
- «como vamos del hotel al parque sin coche?»
- «Quisiera conocer las opciones de transporte disponibles desde el alojamiento.»
- «¿Es fácil moverse andando? ¿Tenemos traslado del aeropuerto o hay que pedir taxi?»
