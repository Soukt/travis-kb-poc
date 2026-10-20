---
name: ferri-retraso-llegada-tarde-al-hotel
description: El cliente va a llegar al hotel más tarde de lo previsto porque su
  barco se ha retrasado y quiere que no pierda la habitación.
metadata:
  area: ferris
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - consultar-horarios-hotel
  simulado: "true"
---
## Cuándo aplica

Un retraso del barco en el trayecto de ida hace que el cliente llegue al alojamiento de la reserva después de lo previsto.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` el estado del trayecto y la llegada prevista.
3. Consulta con `consultar-horarios-hotel` el horario de entrada y si el alojamiento admite llegada tarde.
4. Prepara la respuesta al cliente y, si hace falta, el aviso al hotel, para que booking los revise antes de enviarlos.

## Qué no hace

- No garantiza que el hotel mantenga la habitación.
- No promete compensar la noche si no llega.

## Cuándo pasa a una persona

- El alojamiento no admite llegada tarde y el cliente puede perder la noche.
- El cliente pide que le compensen la noche.

## Cómo lo puede pedir el cliente

- «El barco va con retraso y llegaremos tarde al hotel, ¿podéis avisarles?»
- «vamos a llegar de madrugada al hotel por culpa del ferri, nos guardan la habitacion?»
- «Buenas noches, debido al retraso de la naviera llegaremos al alojamiento fuera del horario de recepción.»
- «si no llegamos al hotel esta noche, ¿la pagamos igual? ¿Y el traslado nos espera?»
