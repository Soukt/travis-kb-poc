---
name: vh-confirmar-nuevo-horario-aerolinea
description: El cliente ha recibido un aviso de cambio de horario de su vuelo y
  quiere confirmar el horario definitivo y si tiene que hacer algo.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-reserva
  simulado: "true"
---
## Cuándo aplica

La aerolínea ha modificado el horario y el cliente solo quiere saber cuál es el bueno. No plantea quejas ni pide cambios.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` el horario vigente de cada trayecto.
3. Revisa con `consultar-reserva` que las fechas del hotel y los traslados siguen encajando con el nuevo horario.
4. Le confirma el horario definitivo y, si no hay impacto en el resto del viaje, le indica que no necesita hacer nada más.

## Qué no hace

- No acepta ni rechaza el cambio en nombre del cliente.
- No ofrece compensaciones.

## Cuándo pasa a una persona

- Si el nuevo horario afecta a noches de hotel, traslados o conexiones.
- Si el cliente no acepta el cambio.

## Cómo lo puede pedir el cliente

- «Me ha llegado un aviso de cambio de horario, ¿cuál es el bueno?»
- «me han cambiado la hora del vuelo, tengo q hacer algo?»
- «Buenos días, ¿podéis confirmarme el nuevo horario del vuelo de vuelta?»
- «otra vez cambio de hora?? cual es la definitiva»
