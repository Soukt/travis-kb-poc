---
name: camb-revisar-nombres-viajeros-registrados
description: El cliente quiere revisar cómo figuran los nombres de los viajeros
  para comprobar que no hay errores.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
  simulado: "true"
---
## Cuándo aplica

Antes del viaje, el cliente quiere asegurarse de que los viajeros están bien registrados. Solo pide consultar.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Consulta con `consultar-reserva` los viajeros registrados y en qué servicios figuran.
3. Le muestra la información y le pide que confirme que coincide con los documentos.
4. Si detecta un error, le explica que la corrección se tramita aparte.

## Qué no hace

- No corrige datos.
- No muestra datos de la reserva antes de verificar al titular.

## Cuándo pasa a una persona

- El cliente detecta un error y pide corregirlo.

## Cómo lo puede pedir el cliente

- «¿Me podéis decir cómo aparecen los nombres de todos en la reserva?»
- «kiero comprobar q los nombres estan bien antes de viajar»
- «Hola, ¿están bien puestos los viajeros? Es que reservé con prisa»
- «Agradecería que me confirmaran los datos de los pasajeros registrados. ¿Están incluidas las maletas?»
