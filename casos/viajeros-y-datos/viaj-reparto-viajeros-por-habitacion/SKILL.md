---
name: viaj-reparto-viajeros-por-habitacion
description: El cliente tiene varias habitaciones en la reserva y quiere cambiar
  qué viajeros figuran en cada una.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
  simulado: "true"
---
## Cuándo aplica

Cuando la distribución de nombres por habitación no es la que el cliente quiere, sin cambiar el número total de viajeros. El alojamiento debe recibir la lista correcta.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` el reparto actual y la ocupación de cada habitación.
3. Pide con `pedir-datos-cliente` qué viajeros irán en cada habitación.
4. Prepara la petición de redistribución y la respuesta al cliente para que booking las revise antes de enviarlas.

## Qué no hace

- No cambia la ocupación contratada de ninguna habitación.
- No garantiza que el alojamiento acepte el cambio.

## Cuándo pasa a una persona

- El nuevo reparto cambia el número de adultos o niños de alguna habitación, lo que puede variar el precio.
- Alguna habitación quedaría por encima de su capacidad.

## Cómo lo puede pedir el cliente

- «Tenemos dos habitaciones y quiero cambiar quién duerme en cada una.»
- «en la reserva me han puesto a mi suegra conmigo y a mi pareja con los niños, hay q cambiarlo»
- «Buenos días, desearíamos modificar la asignación de huéspedes entre nuestras habitaciones.»
- «Quiero que mis padres vayan en la habitación doble y nosotros en la familiar; ¿cambia algo el precio?»
