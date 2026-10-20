---
name: pago-compensacion-por-mala-experiencia-hotel
description: El cliente tuvo problemas en el alojamiento y pide una compensación económica.
metadata:
  area: pagos-y-facturas
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

El alojamiento no se correspondía con lo contratado (suciedad, servicios cerrados, habitación distinta) y el cliente reclama que se le compense.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` el régimen y la habitación contratados.
3. Consulta con `consultar-servicios-alojamiento` los servicios que ofrecía el alojamiento.
4. Pide con `pedir-datos-cliente` una descripción de lo ocurrido y las fotos o justificantes que tenga.
5. Pasa la reclamación con `crear-ticket-booking`.

## Qué no hace

- No ofrece compensaciones ni importes.
- No da ni quita la razón al cliente.

## Cuándo pasa a una persona

- Siempre: es una compensación económica.

## Cómo lo puede pedir el cliente

- «El establecimiento no se correspondía con lo contratado y solicitamos una compensación.»
- «el hotel estaba sucisimo, quiero que me devolvais parte»
- «Hola, la piscina estuvo cerrada toda la estancia y era por lo que lo elegimos»
- «nos dieron una habitación peor que la reservada, exijo una compensación»
