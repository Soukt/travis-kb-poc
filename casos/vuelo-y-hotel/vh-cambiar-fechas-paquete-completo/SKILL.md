---
name: vh-cambiar-fechas-paquete-completo
description: El cliente quiere mover todo el viaje, vuelos y hotel, a otras fechas.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente no puede viajar en las fechas reservadas y quiere aplazar o adelantar el paquete completo sin cancelarlo.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-reserva` las fechas y servicios actuales.
3. Consulta con `consultar-politica-cancelacion` las condiciones de cambio que aplican.
4. Pide con `pedir-datos-cliente` las nuevas fechas y si tiene flexibilidad.
5. Crea con `crear-ticket-booking` un ticket con la petición.

## Qué no hace

- No garantiza disponibilidad ni precio en las nuevas fechas.
- No cancela la reserva actual.

## Cuándo pasa a una persona

- Siempre, porque implica posibles gastos y diferencias de precio.

## Cómo lo puede pedir el cliente

- «¿Podemos pasar el viaje a otra semana?»
- «queremos cambiar las fechas de todo, vuelo y hotel»
- «Buenas tardes, me ha surgido un compromiso y necesito retrasar el viaje, ¿es posible?»
- «se puede aplazar el paquete sin perder lo pagado?»
