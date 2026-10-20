---
name: aloj-peticion-especial-no-atendida
description: El cliente ya está en el alojamiento y no le han preparado una
  petición que estaba confirmada, como la cuna o la habitación adaptada.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando una petición confirmada no se ha cumplido a la llegada. Puede acabar en reclamación, así que lo gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` qué petición figuraba y si estaba confirmada.
3. Recoge qué falta, qué le han dicho en recepción y si afecta a la salud o la seguridad.
4. Abre un ticket con `crear-ticket-booking`, urgente si la petición es imprescindible.

## Qué no hace

- No ofrece compensaciones.
- No culpa al alojamiento antes de que booking lo revise.

## Cuándo pasa a una persona

- Siempre: la petición confirmada no se ha cumplido y puede haber reclamación.
- Con máxima prioridad si afecta a accesibilidad, salud o a un bebé.

## Cómo lo puede pedir el cliente

- «Pedimos una cuna y al llegar no hay ninguna en la habitación.»
- «nos confirmasteis la habitacion adaptada y nos han dado una normal!!»
- «Hola, teníamos pedidas camas separadas y es de matrimonio, el hotel dice que no hay otra. Qué hacemos?»
- «Les comunico que el establecimiento no ha atendido la petición especial confirmada en mi reserva.»
