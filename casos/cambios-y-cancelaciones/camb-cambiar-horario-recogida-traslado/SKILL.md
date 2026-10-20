---
name: camb-cambiar-horario-recogida-traslado
description: El cliente necesita cambiar la hora de recogida de su traslado
  porque su vuelo ha cambiado de horario.
metadata:
  area: cambios-y-cancelaciones
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-traslados
    - consultar-vuelo
  simulado: "true"
---
## Cuándo aplica

El traslado tiene una hora de recogida que ya no encaja con la llegada o la salida del cliente, por un cambio de vuelo propio o de la aerolínea.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` qué traslados y vuelos incluye la reserva.
3. Consulta con `consultar-traslados` la hora y el punto de encuentro actuales.
4. Si el vuelo está en la reserva, revisa con `consultar-vuelo` el nuevo horario; si no, pide al cliente los datos del vuelo nuevo.
5. Prepara la solicitud de cambio de horario del traslado para que booking la revise y la envíe al proveedor.

## Qué no hace

- No confirma la nueva hora de recogida hasta que booking la valide.
- No le dice que se busque otro transporte.

## Cuándo pasa a una persona

- El traslado es inminente.
- El cambio de horario implica un coste adicional.

## Cómo lo puede pedir el cliente

- «Me han cambiado la hora del vuelo, ¿podéis cambiar la recogida del traslado?»
- «el vuelo llega mas tarde ahora, el del transfer nos espera?»
- «Hola, ¿se puede retrasar la hora del traslado al aeropuerto? Salimos más tarde.»
- «Les comunico un cambio en el horario de mi vuelo de llegada para que actualicen el servicio de traslado.»
