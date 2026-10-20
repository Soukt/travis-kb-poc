---
name: aloj-consigna-equipaje-antes-entrada
description: El cliente llegará antes de la hora de entrada y quiere saber si
  puede dejar el equipaje en el alojamiento mientras tanto.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-horarios-hotel
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente llega antes de poder ocupar la habitación y busca dónde dejar las maletas. No aplica si pide entrar antes en la habitación.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Identifica el alojamiento y el día de llegada con `consultar-reserva`.
3. Consulta la hora de entrada con `consultar-horarios-hotel`.
4. Comprueba con `consultar-servicios-alojamiento` si dispone de consigna o guarda de equipaje.
5. Responde si puede dejar las maletas y a partir de cuándo podrá ocupar la habitación.

## Qué no hace

- No asegura que la consigna sea gratuita si la acción no lo indica.
- No tramita una entrada anticipada; si la pide, se trata como petición aparte.

## Cuándo pasa a una persona

- El alojamiento no informa de consigna y el cliente necesita una solución antes de llegar.

## Cómo lo puede pedir el cliente

- «Si llegamos antes de la hora de entrada, ¿podemos dejar las maletas en el hotel?»
- «hay consigna? llegamos prontisimo»
- «Hola, el apartamento tiene sitio para dejar el equipaje hasta que nos den las llaves? Y wifi tiene?»
- «Quería saber si el establecimiento guarda el equipaje antes del check-in.»
