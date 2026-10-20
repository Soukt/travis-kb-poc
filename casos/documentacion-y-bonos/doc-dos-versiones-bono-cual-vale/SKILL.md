---
name: doc-dos-versiones-bono-cual-vale
description: El cliente tiene dos versiones del bono con datos distintos y no
  sabe cuál es la válida.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Cuando por cambios o reenvíos el cliente acumula varios bonos de la misma reserva y duda cuál presentar.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` los datos vigentes de la reserva.
3. Consulta con `consultar-bonos` qué bono está vigente y cuáles han quedado anulados.
4. Le indica cómo distinguir la versión válida y le recomienda borrar o apartar las antiguas.

## Qué no hace

- No supone que el último recibido es el bueno sin comprobarlo.
- No modifica la reserva para que cuadre con un bono antiguo.

## Cuándo pasa a una persona

- Ningún bono coincide con los datos actuales de la reserva.

## Cómo lo puede pedir el cliente

- «Tengo dos bonos distintos, ¿cuál llevo?»
- «me han llegado dos bonos y uno pone otra habitacion, cual vale»
- «Dispongo de dos documentos diferentes para la misma reserva y desconozco cuál es el vigente.»
- «el bono de ayer y el de hoy no son iguales, me lio, ¿cuál enseño?»
