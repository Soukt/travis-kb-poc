---
name: ent-horario-de-apertura-del-parque
description: El cliente quiere saber a qué hora abre y cierra el parque el día de su visita.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente organiza el día y necesita el horario del parque para la fecha de sus entradas. El horario puede variar según la temporada.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` la fecha de la visita.
3. Revisa con `consultar-condiciones-entrada` el horario del parque para esa fecha.
4. Responde con el horario y le avisa de que el parque puede ajustarlo, por lo que conviene revisarlo cerca de la visita.

## Qué no hace

- No da un horario genérico si no hay uno para la fecha de la visita.
- No confunde el horario del parque con el de espectáculos o atracciones concretas.

## Cuándo pasa a una persona

- Las condiciones no recogen el horario de esa fecha y el cliente necesita confirmación.

## Cómo lo puede pedir el cliente

- «¿A qué hora abre el parque el día que vamos?»
- «hasta q hora esta abierto? para saber si nos da tiempo a cenar dentro»
- «Buenos días, ¿me podría indicar el horario de apertura y cierre para la fecha de mis entradas?»
- «a que hora abren las puertas? queremos ser los primeros jaja»
