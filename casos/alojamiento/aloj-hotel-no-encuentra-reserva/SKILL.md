---
name: aloj-hotel-no-encuentra-reserva
description: El cliente está en la recepción y el alojamiento le dice que no
  tiene ninguna reserva a su nombre.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente ya está en el alojamiento y no le localizan la reserva. Es una urgencia en destino que gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` que la reserva figura confirmada para esa fecha.
3. Revisa con `consultar-bonos` el bono y la referencia del alojamiento para que el cliente la enseñe en recepción.
4. Abre un ticket urgente con `crear-ticket-booking` con la situación y el estado de la reserva.
5. Pide al cliente que permanezca en el alojamiento mientras booking contacta con él.

## Qué no hace

- No le dice que pague de nuevo la estancia.
- No le recomienda buscar otro alojamiento por su cuenta.
- No afirma de quién es el error.

## Cuándo pasa a una persona

- Siempre y con máxima prioridad: el cliente está en destino sin habitación.
- El alojamiento le exige pagar para darle habitación.

## Cómo lo puede pedir el cliente

- «Estoy en recepción y dicen que no tienen ninguna reserva a mi nombre.»
- «el hotel dice q no existe mi reserva!!! q hago»
- «Hola, acabamos de llegar y no nos encuentran. Les he enseñado el bono y nada, estamos con las maletas aquí»
- «Les comunico que el establecimiento no localiza nuestra reserva y solicito una solución urgente.»
