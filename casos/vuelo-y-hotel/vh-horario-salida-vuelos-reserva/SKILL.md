---
name: vh-horario-salida-vuelos-reserva
description: El cliente quiere saber a qué hora salen y llegan los vuelos de ida
  y vuelta incluidos en su paquete de vuelo y hotel.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
  simulado: "true"
---
## Cuándo aplica

El cliente pregunta por la hora de salida o de llegada de alguno de los vuelos de su reserva. Es una consulta informativa, sin cambios ni incidencias.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` la fecha, el aeropuerto y la hora de salida y llegada de cada trayecto.
3. Responde separando la ida y la vuelta y, si hay escalas, detalla cada tramo.
4. Recomienda volver a revisar los horarios antes de salir hacia el aeropuerto por si la aerolínea los modifica.

## Qué no hace

- No da horarios aproximados ni de memoria: solo los que devuelve la acción.
- No informa de vuelos que no pertenezcan a la reserva verificada.

## Cuándo pasa a una persona

- Si la acción no devuelve los horarios de algún trayecto.
- Si los horarios no encajan con las fechas del hotel o de los traslados.

## Cómo lo puede pedir el cliente

- «Buenas tardes, ¿podrían indicarme el horario de los vuelos de mi reserva?»
- «a q hora sale mi vuelo?? no lo encuentro por ningun lado»
- «Hola! ¿A qué hora llegamos al destino? Es para organizar el primer día»
- «Quería saber la hora del vuelo de vuelta y si nos da tiempo a comer antes de ir al aeropuerto»
