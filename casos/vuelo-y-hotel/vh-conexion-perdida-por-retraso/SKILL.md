---
name: vh-conexion-perdida-por-retraso
description: El cliente ha perdido su vuelo de conexión porque el primero llegó
  con retraso y está ahora en el aeropuerto de escala.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-traslados
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La incidencia ocurre durante el viaje: el primer tramo se retrasa y el cliente no llega al segundo. Hay riesgo de perder el traslado y la noche de hotel.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Confirma con `consultar-vuelo` los tramos afectados.
3. Revisa con `consultar-traslados` el traslado de llegada que depende de la conexión.
4. Crea con `crear-ticket-booking` un ticket urgente con todo lo recogido.
5. Le indica que acuda al mostrador de la aerolínea en el aeropuerto de escala para su reubicación y que guarde los justificantes.

## Qué no hace

- No le dice que compre otro vuelo por su cuenta.
- No promete compensaciones ni reembolso de gastos.
- No cancela el traslado ni la noche de hotel.

## Cuándo pasa a una persona

- Siempre y con prioridad urgente.

## Cómo lo puede pedir el cliente

- «Por el retraso hemos perdido el segundo vuelo, estamos en la escala»
- «perdimos la conexion!!! que hacemos»
- «Buenas noches, la aerolínea dice que el próximo vuelo es mañana, ¿quién paga el hotel de esta noche?»
- «No llegamos al enlace, ¿avisáis al del traslado de que llegaremos más tarde?»
