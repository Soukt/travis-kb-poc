---
name: aloj-lanzadera-propia-hotel
description: El cliente pregunta si el alojamiento tiene un autobús lanzadera
  propio a la playa, al centro o al aeropuerto.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - consultar-traslados
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente quiere saber si el alojamiento ofrece un servicio propio de transporte, distinto de los traslados contratados.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Identifica el alojamiento con `consultar-reserva`.
3. Consulta con `consultar-servicios-alojamiento` si hay lanzadera y adónde va.
4. Comprueba con `consultar-traslados` si la reserva ya incluye algún traslado para no confundirlos.
5. Responde distinguiendo el servicio del alojamiento de los traslados contratados.

## Qué no hace

- No reserva plaza en la lanzadera.
- No inventa horarios ni paradas.

## Cuándo pasa a una persona

- El cliente contaba con la lanzadera como único medio para llegar y no existe.

## Cómo lo puede pedir el cliente

- «¿El hotel tiene autobús propio hasta la playa?»
- «hay shuttle al aeropuerto o hay q coger taxi?»
- «Hola, hay lanzadera al centro? Es que no llevamos coche. Y el traslado de llegada lo tenemos?»
- «Les ruego me informen sobre los servicios de transporte propios del alojamiento.»
