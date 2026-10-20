---
name: ferri-retraso-pone-en-riesgo-vuelo
description: El cliente teme perder un vuelo de su reserva porque el barco va
  con retraso el día del viaje.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - consultar-vuelo
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El barco y el vuelo forman parte de la misma reserva y el retraso del barco hace peligrar la conexión.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` el estado del trayecto y la llegada prevista.
3. Comprueba con `consultar-vuelo` el horario y el estado del vuelo.
4. Abre un caso urgente con `crear-ticket-booking` con ambos horarios.
5. Informa al cliente de que booking está al tanto y le contactará.

## Qué no hace

- No promete reubicarle en otro vuelo.
- No le dice que compre otro billete por su cuenta.
- No garantiza que el vuelo le espere.

## Cuándo pasa a una persona

- Siempre y con prioridad: puede perder un servicio y generar costes.

## Cómo lo puede pedir el cliente

- «El barco va con retraso y tengo el vuelo justo después, ¡no llego!»
- «vamos a perder el avion por el ferri, q hacemos???»
- «Buenas tardes, el retraso del barco compromete la conexión con el vuelo de mi reserva. Solicito ayuda urgente.»
- «Si pierdo el avión por culpa del barco, ¿me ponéis en otro vuelo sin pagar?»
