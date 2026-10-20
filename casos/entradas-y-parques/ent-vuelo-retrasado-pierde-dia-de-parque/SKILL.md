---
name: ent-vuelo-retrasado-pierde-dia-de-parque
description: El cliente avisa de que por un retraso o cambio de su vuelo perderá
  una jornada de parque incluida en su reserva.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-reserva
    - consultar-condiciones-entrada
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica a reservas con vuelo y entradas cuando la llegada se retrasa y afecta al día de parque. Implica cambios o reclamaciones con dinero de por medio.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-vuelo` el estado y el horario del vuelo.
3. Revisa con `consultar-reserva` y `consultar-condiciones-entrada` qué día de parque se ve afectado y si la entrada admite otro día.
4. Abre con `crear-ticket-booking` la solicitud con lo comprobado y lo que pide el cliente.

## Qué no hace

- No promete compensaciones por el retraso.
- No cambia la fecha de las entradas por su cuenta.

## Cuándo pasa a una persona

- Siempre: hay cambios de servicios o dinero de por medio.

## Cómo lo puede pedir el cliente

- «Han retrasado el vuelo y llegamos al día siguiente. Perdemos el día de parque.»
- «nos han cambiado el vuelo y no llegamos al parque, q hacemos con la entrada?»
- «Buenos días, debido a la cancelación de nuestro vuelo no podremos usar la entrada del primer día.»
- «el vuelo sale con mucho retraso, podemos mover la entrada a otro dia del viaje?»
