---
name: vh-cambio-horario-pierde-noche-hotel
description: El cliente ve que el nuevo horario de su vuelo le hace perder una
  noche de hotel o llegar un día más tarde de lo previsto.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-reserva
    - consultar-horarios-hotel
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cambio de horario de la aerolínea desplaza la llegada o la salida de forma que una noche contratada queda sin usar. El cliente pide una solución.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` el horario nuevo de cada trayecto.
3. Revisa con `consultar-reserva` las fechas y noches contratadas en el hotel.
4. Comprueba con `consultar-horarios-hotel` los horarios de entrada y salida del alojamiento.
5. Crea con `crear-ticket-booking` un ticket que explique el impacto del cambio en la estancia.

## Qué no hace

- No promete el reembolso de la noche perdida.
- No cambia las fechas del hotel.

## Cuándo pasa a una persona

- Siempre, porque puede haber dinero de por medio.

## Cómo lo puede pedir el cliente

- «Con el cambio de vuelo perdemos la primera noche del hotel»
- «el vuelo ahora llega un dia despues, y la noche q ya pague?»
- «Buenas, el nuevo horario de vuelta nos obliga a dejar el hotel una noche antes, ¿qué solución hay?»
- «nos han adelantado el vuelo y perdemos un dia de vacaciones, esto como va»
