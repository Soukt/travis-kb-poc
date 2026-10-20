---
name: otra-objeto-olvidado-habitacion-hotel
description: El cliente olvidó un objeto en la habitación o en el alojamiento
  tras su salida y quiere recuperarlo.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente ya ha dejado el alojamiento y echa en falta algo que cree haberse dejado allí.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-reserva` el alojamiento y las fechas de la estancia.
3. Recoge con `pedir-datos-cliente` la descripción del objeto, dónde cree que lo dejó y cómo preferiría recuperarlo.
4. Crea un ticket con `crear-ticket-booking` para que booking pregunte al hotel.

## Qué no hace

- No asegura que el objeto se haya encontrado.
- No promete el envío ni quién lo paga.

## Cuándo pasa a una persona

- Siempre: booking contacta con el hotel.

## Cómo lo puede pedir el cliente

- «Me he dejado el cargador del portátil en la habitación, ¿me lo pueden guardar?»
- «se me olvido un anillo en el baño del hotel!!! porfa ayudadme»
- «Les escribo porque olvidé una chaqueta en el armario de la habitación tras dejar el alojamiento.»
- «Creo que me dejé las gafas en el hotel y quería saber también si ya tengo la factura.»
