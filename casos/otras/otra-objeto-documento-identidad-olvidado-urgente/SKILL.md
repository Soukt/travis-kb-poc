---
name: otra-objeto-documento-identidad-olvidado-urgente
description: El cliente se dejó la documentación en un alojamiento y la necesita
  para continuar el viaje en breve.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente ha salido del alojamiento sin su pasaporte o documento de identidad y tiene pronto un vuelo, un ferri u otro alojamiento.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-reserva` dónde estaba alojado y qué servicios tiene a continuación.
3. Busca con `buscar-informacion` la respuesta aprobada sobre qué hacer si se viaja sin documentación.
4. Le anima a contactar también directamente con el alojamiento si puede y crea un ticket urgente con `crear-ticket-booking`.

## Qué no hace

- No asegura que pueda embarcar sin documentación.
- No inventa trámites oficiales.

## Cuándo pasa a una persona

- Siempre: requiere una gestión urgente con el alojamiento.

## Cómo lo puede pedir el cliente

- «Me he dejado el pasaporte en la caja fuerte del hotel y vuelo esta tarde.»
- «URGENTE el dni se me quedo en el apartamento y cogemos el barco ya»
- «Les escribo con urgencia: he olvidado mi documentación en el alojamiento anterior y tengo un traslado en breve.»
- «Me dejé el DNI del niño en el hotel. ¿Puede viajar sin él? ¿Me lo pueden mandar al siguiente hotel?»
