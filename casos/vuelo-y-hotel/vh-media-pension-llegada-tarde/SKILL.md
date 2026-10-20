---
name: vh-media-pension-llegada-tarde
description: El cliente tiene la cena incluida en el hotel pero su vuelo llega
  tarde y teme perderla el primer día.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - consultar-servicios-alojamiento
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El régimen contratado incluye la cena y la hora de llegada del vuelo hace difícil llegar a tiempo al restaurante. El cliente pregunta si hay alguna alternativa.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Confirma con `consultar-reserva` el régimen de comidas contratado.
3. Obtiene con `consultar-vuelo` la hora prevista de llegada.
4. Revisa con `consultar-servicios-alojamiento` los servicios de restauración del hotel.
5. Prepara la respuesta y, si procede, la petición al hotel, y las envía con `crear-ticket-booking` para que booking las revise antes de enviarlas.

## Qué no hace

- No promete una cena alternativa.
- No ofrece descuentos por la comida perdida.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la respuesta antes de enviarla.
- Si el cliente pide una compensación por la comida perdida.

## Cómo lo puede pedir el cliente

- «Llegamos tarde el primer día, ¿perdemos la cena incluida?»
- «nos guardan algo de cenar si llegamos tarde?»
- «Buenas, ¿se puede cambiar la cena del primer día por otra cosa?»
- «con el horario del vuelo no llegamos a cenar y la tenemos pagada»
