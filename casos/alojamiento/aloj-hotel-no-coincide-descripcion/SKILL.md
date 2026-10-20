---
name: aloj-hotel-no-coincide-descripcion
description: El cliente está alojado y considera que el alojamiento no
  corresponde con lo que se describía al reservar.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando la categoría, la ubicación o los servicios no son los anunciados. Es una reclamación que gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` el alojamiento y lo contratado.
3. Consulta con `consultar-servicios-alojamiento` los servicios que se anunciaban.
4. Pide con `pedir-datos-cliente` qué aspectos no coinciden y si lo ha comunicado en recepción.
5. Abre un ticket con `crear-ticket-booking` con la comparación entre lo anunciado y lo encontrado.

## Qué no hace

- No da la razón ni la quita al cliente.
- No ofrece cambio de alojamiento ni compensación.

## Cuándo pasa a una persona

- Siempre: es una reclamación sobre lo contratado.

## Cómo lo puede pedir el cliente

- «El hotel no se parece en nada a las fotos que vimos al reservar.»
- «ponia cuatro estrellas y esto es un hostal»
- «Hola, decía primera línea de playa y estamos lejísimos. Queremos cambiarnos, quién lo paga?»
- «Deseo reclamar que el establecimiento no se corresponde con la descripción ofrecida.»
