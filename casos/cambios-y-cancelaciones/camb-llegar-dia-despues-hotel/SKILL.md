---
name: camb-llegar-dia-despues-hotel
description: El cliente va a llegar al hotel un día más tarde de lo reservado y
  quiere conservar el resto de la estancia.
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

Por un imprevisto, el cliente no llegará el día de entrada. Si no se avisa, el hotel puede considerar que no se ha presentado y anular el resto de noches.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` la fecha de entrada y las noches reservadas.
3. Consulta con `consultar-horarios-hotel` los horarios de entrada para dejar claro cuándo llegará.
4. Revisa con `consultar-politica-cancelacion` qué condiciones aplican a la noche que no va a usar.
5. Crea un ticket con `crear-ticket-booking` para que booking avise al hotel y gestione la noche perdida.

## Qué no hace

- No asegura que se devuelva la primera noche.
- No da por avisado al hotel.

## Cuándo pasa a una persona

- Siempre: hay que avisar al hotel y valorar el coste de la noche no disfrutada.
- Con prioridad si la entrada era ese mismo día.

## Cómo lo puede pedir el cliente

- «Nos han cancelado el tren y llegaremos al hotel mañana, ¿nos guardan la habitación?»
- «Llego un día tarde, ¿se pierde toda la reserva?»
- «hola, no llegamos hoy al hotel, llegaremos mañana por la mañana, avisais vosotros?»
- «Les informo de que mi llegada se retrasará un día. Ruego que no anulen la reserva.»
