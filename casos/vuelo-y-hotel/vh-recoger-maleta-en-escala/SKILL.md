---
name: vh-recoger-maleta-en-escala
description: El cliente tiene un vuelo con escala y pregunta si debe recoger y
  volver a facturar su maleta en el aeropuerto intermedio.
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

El itinerario tiene al menos una escala y el cliente no sabe si su equipaje facturado llega solo hasta el destino final.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` los tramos y si van en el mismo billete.
3. Busca con `buscar-informacion` la respuesta aprobada sobre el equipaje en vuelos con conexión.
4. Le responde según esos datos y le recomienda confirmar en el mostrador de facturación hasta dónde va etiquetada la maleta.

## Qué no hace

- No asegura que la maleta vaya facturada hasta el destino si la información no lo indica.
- No da instrucciones sobre los controles del aeropuerto de escala que no estén aprobadas.

## Cuándo pasa a una persona

- Si los tramos van en billetes distintos y no queda claro qué pasa con el equipaje.

## Cómo lo puede pedir el cliente

- «En la escala, ¿tengo que recoger la maleta?»
- «la maleta llega sola al destino o la tengo q coger yo en la escala»
- «Buenas, en el vuelo de vuelta hacemos escala; ¿hay que volver a facturar?»
- «Si cambiamos de avión, ¿las maletas cambian solas también?»
