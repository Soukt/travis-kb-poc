---
name: vh-hora-local-del-vuelo
description: El cliente duda si los horarios de su vuelo están expresados en la
  hora local de cada aeropuerto o en la hora de su lugar de origen.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El destino tiene una zona horaria distinta a la de origen y al cliente no le cuadran los horarios o la duración del vuelo. Quiere entender cómo leer la reserva.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` los horarios de cada trayecto tal y como figuran en la reserva.
3. Busca con `buscar-informacion` la respuesta aprobada sobre cómo se expresan los horarios de vuelo en la documentación.
4. Explica el criterio solo si lo confirman la acción o la respuesta aprobada, y le sugiere tener en cuenta la diferencia horaria para el traslado y la entrada al hotel.

## Qué no hace

- No calcula diferencias horarias por su cuenta si la acción no las devuelve.
- No da por hecho el criterio horario sin confirmarlo con la respuesta aprobada.

## Cuándo pasa a una persona

- Si la confirmación del vuelo y el bono muestran horarios contradictorios.
- Si no hay respuesta aprobada y la duda afecta a traslados o a la entrada en el hotel.

## Cómo lo puede pedir el cliente

- «La hora de llegada que aparece, ¿es la de allí o la de aquí?»
- «No entiendo, segun la reserva el vuelo dura poquisimo, la hora esta en hora local??»
- «Disculpe, ¿los horarios del billete de vuelta están en la hora del destino?»
- «oye q lio con las horas, a que hora llego de verdad? es xq tengo q avisar al del traslado»
