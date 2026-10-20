---
name: camb-saber-si-reserva-admite-cambios
description: El cliente pregunta si su reserva permite cambios y hasta cuándo
  podría hacerlos sin coste, sin pedir todavía ningún cambio.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
  simulado: "true"
---
## Cuándo aplica

El cliente solo quiere conocer la flexibilidad de su reserva antes de decidir nada. No pide ejecutar ninguna modificación.

## Qué hace el agente

1. Comprueba que quien escribe es el titular con `verificar-identidad`.
2. Identifica con `consultar-reserva` los servicios contratados.
3. Obtiene con `consultar-politica-cancelacion` el calendario de cambios de cada servicio.
4. Le explica si se puede cambiar, desde qué momento tendría coste y qué servicios tienen condiciones distintas.
5. Le indica que, si decide cambiar, puede pedirlo por esta misma vía.

## Qué no hace

- No inicia ningún cambio.
- No interpreta condiciones que la acción no devuelve; si falta información, lo dice.

## Cuándo pasa a una persona

- La política no aparece o es contradictoria entre servicios.
- El cliente, tras la información, pide hacer el cambio.

## Cómo lo puede pedir el cliente

- «¿Mi reserva se puede cambiar de fechas si lo necesito más adelante?»
- «hola, solo quería saber si lo que reservé es flexible o no»
- «Buenas, ¿hasta cuándo puedo hacer cambios sin que me cobren nada? Y de paso, ¿el traslado está incluido?»
- «se puede modificar la reserba o es de las que no?»
