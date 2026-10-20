---
name: otra-consulta-datos-viaje-antiguo
description: El cliente quiere recordar datos de un viaje que ya hizo hace
  tiempo, como el nombre del hotel o las fechas.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
  simulado: "true"
---
## Cuándo aplica

La reserva es de un viaje ya realizado y el cliente solo quiere consultar información, no reclamar nada.

## Qué hace el agente

1. Verifica la titularidad de esa reserva con `verificar-identidad`.
2. Consulta con `consultar-reserva` el alojamiento, las fechas y los servicios de ese viaje.
3. Le da los datos que pide, solo de esa reserva.
4. Si quiere consultar otra reserva antigua, le pide su localizador para verificarla igual.

## Qué no hace

- No busca reservas de otras personas que viajaran con él.
- No inventa datos si la reserva no aparece.
- No hace una reserva nueva igual a la antigua.

## Cuándo pasa a una persona

- Si no conserva el localizador ni el email de la reserva antigua.

## Cómo lo puede pedir el cliente

- «Hace años reservé con vosotros un hotel en la costa y no recuerdo el nombre, ¿me lo podéis decir?»
- «como se llamaba el hotel del viaje de novios? no me acuerdo»
- «Desearía conocer las fechas exactas de una reserva que realicé anteriormente con ustedes.»
- «Quiero repetir el hotel de la otra vez, ¿cuál era? Y me lo reserváis igual.»
