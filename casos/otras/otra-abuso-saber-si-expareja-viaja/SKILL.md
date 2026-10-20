---
name: otra-abuso-saber-si-expareja-viaja
description: El cliente quiere saber si su pareja o expareja tiene una reserva,
  con quién viaja o dónde se aloja.
metadata:
  area: otras
  modo: persona
  acciones:
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La petición busca información sobre los movimientos de otra persona en un contexto personal delicado.

## Qué hace el agente

1. Le explica con serenidad que no puede confirmar ni negar reservas de otras personas.
2. No entra a valorar los motivos personales.
3. Si el cliente alega que su seguridad o la de menores está en riesgo, le recomienda acudir a las autoridades.
4. Registra la petición con `crear-ticket-booking` para que booking la valore.

## Qué no hace

- No confirma la existencia de reservas.
- No da fechas, destinos ni acompañantes.
- No pide datos de la otra persona.

## Cuándo pasa a una persona

- Siempre: es una petición de datos de otra persona en un contexto delicado.

## Cómo lo puede pedir el cliente

- «Creo que mi pareja ha reservado un viaje con otra persona, ¿me lo podéis confirmar?»
- «mi ex se ha llevado a los niños de viaje, decidme a que hotel»
- «Solicito saber si existe una reserva a nombre de mi expareja para estas fechas.»
- «Pagamos el viaje entre los dos pero la reserva está a su nombre, ¿con quién va?»
