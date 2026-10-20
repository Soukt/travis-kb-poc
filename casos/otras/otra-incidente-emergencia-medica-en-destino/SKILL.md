---
name: otra-incidente-emergencia-medica-en-destino
description: El cliente está en destino con una emergencia médica y escribe
  pidiendo ayuda o avisando de que no podrá seguir el viaje.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Un viajero ha enfermado gravemente, ha tenido un accidente o está ingresado durante el viaje.

## Qué hace el agente

1. Lo primero, le indica que contacte con los servicios de emergencia locales si la situación es grave.
2. Cuando la urgencia está atendida, verifica la titularidad con `verificar-identidad`.
3. Consulta con `consultar-reserva` qué servicios del viaje quedan pendientes.
4. Crea un ticket urgente con `crear-ticket-booking` con lo ocurrido y los servicios afectados.

## Qué no hace

- No retrasa la indicación de emergencia por pedir datos.
- No da consejos médicos.
- No promete devoluciones de los servicios no disfrutados.

## Cuándo pasa a una persona

- Siempre: requiere atención humana urgente.

## Cómo lo puede pedir el cliente

- «Estoy en el hospital con mi padre, no sé si podremos coger el vuelo de vuelta.»
- «ayuda mi mujer se ha puesto muy mala en el hotel»
- «Les escribo desde urgencias: uno de los viajeros ha sido ingresado y no podremos continuar el viaje.»
- «Me han operado de urgencia aquí, ¿qué pasa con el hotel y con el barco?»
