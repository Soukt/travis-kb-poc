---
name: viaj-transliteracion-alfabeto-distinto
description: El cliente pregunta cómo debe figurar en la reserva el nombre de un
  viajero cuyo documento está escrito en otro alfabeto.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando un viajero tiene un documento en un alfabeto no latino y hay dudas sobre la transcripción usada al reservar. Un error puede impedir el embarque, por eso la respuesta se revisa.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` cómo se ha escrito el nombre del viajero.
3. Busca con `buscar-informacion` la respuesta aprobada sobre transcripción de nombres.
4. Prepara una respuesta que indique al cliente qué versión del nombre usar según esa información y la deja para revisión de booking.

## Qué no hace

- No transcribe el nombre por su cuenta ni propone una grafía.
- No modifica los datos de la reserva.

## Cuándo pasa a una persona

- La grafía de la reserva no coincide con la del documento y hay que corregirla.
- No hay respuesta aprobada sobre transcripción.

## Cómo lo puede pedir el cliente

- «Mi madre tiene el pasaporte en otro alfabeto. ¿Cómo debe aparecer su nombre en la reserva?»
- «hola, mi marido es extranjero y no se si escribí bien su nombre en letras normales, como lo compruebo»
- «Les consulto qué transcripción del nombre se debe usar: la que figura en la zona de lectura mecánica del pasaporte u otra.»
- «El nombre de mi suegro lo escribí como suena y no sé si coincide con su pasaporte; también quería saber si el traslado está incluido.»
