---
name: vh-cambio-horario-rompe-conexion
description: El cliente ve que, tras un cambio de horario, ya no le da tiempo a
  coger el vuelo de conexión de su escala.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Antes del viaje, un cambio en uno de los tramos deja la escala sin margen o con el segundo vuelo saliendo antes de que llegue el primero.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` los horarios actualizados de ambos tramos.
3. Confirma si el tiempo de conexión resultante es incompatible y lo explica al cliente.
4. Crea con `crear-ticket-booking` un ticket para que booking gestione la reubicación con la aerolínea.

## Qué no hace

- No cambia vuelos.
- No asegura que haya alternativas sin coste.

## Cuándo pasa a una persona

- Siempre, porque la reubicación la gestiona booking con la aerolínea.

## Cómo lo puede pedir el cliente

- «Con el nuevo horario el primer vuelo llega después de que salga el segundo»
- «ya no da tiempo a la conexion con el cambio, me lo arreglais?»
- «Buenas, el cambio de la aerolínea deja la escala imposible, ¿qué hacemos?»
- «la escala se ha quedado en nada, asi no llegamos»
