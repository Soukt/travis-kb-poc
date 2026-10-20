---
name: camb-salida-anticipada-estando-alojado
description: El cliente ya está alojado y quiere marcharse antes de lo previsto,
  preguntando si recupera las noches no disfrutadas.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-horarios-hotel
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La estancia ya ha empezado y el cliente necesita dejar el hotel antes de la fecha de salida. Las noches no disfrutadas suelen estar sujetas a las condiciones del hotel.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` la fecha de salida prevista y el estado de la reserva.
3. Consulta con `consultar-horarios-hotel` la hora de salida para que el cliente sepa cuándo debe dejar la habitación.
4. Revisa con `consultar-politica-cancelacion` qué dicen las condiciones sobre salidas anticipadas.
5. Recoge el motivo y la nueva fecha de salida y lo pasa a booking con `crear-ticket-booking`.

## Qué no hace

- No promete reembolso de las noches no disfrutadas.
- No habla con el hotel en nombre de la agencia ni le da instrucciones.

## Cuándo pasa a una persona

- Siempre: cualquier devolución por noches no disfrutadas la valora booking.
- Si el motivo es una emergencia o un problema con el alojamiento, lo marca como urgente.

## Cómo lo puede pedir el cliente

- «Estamos en el hotel y tenemos que volver antes por un tema familiar, ¿nos devolvéis las noches que quedan?»
- «hola, me voy mañana en vez del domingo, ¿a qué hora tengo que dejar la habitación?»
- «Buenas, ¿si dejo el hotel antes pierdo lo pagado? Es que no estamos a gusto»
- «Me ha surgido un imprevisto y debo abandonar el alojamiento anticipadamente. ¿Qué opciones tengo?»
