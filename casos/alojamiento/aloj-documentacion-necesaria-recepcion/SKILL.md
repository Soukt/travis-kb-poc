---
name: aloj-documentacion-necesaria-recepcion
description: El cliente pregunta qué documentación tiene que presentar en la
  recepción del alojamiento al llegar.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente quiere saber qué documentos le pedirán en la entrada del alojamiento, para él o para los demás viajeros.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el alojamiento y los viajeros.
3. Busca con `buscar-informacion` la respuesta aprobada sobre documentación en la entrada.
4. Responde con lo que indica la respuesta aprobada y le recuerda llevar el bono.

## Qué no hace

- No enumera requisitos legales de otros países por su cuenta.
- No pide al cliente que le envíe copias de documentos.

## Cuándo pasa a una persona

- No hay respuesta aprobada para ese caso.
- Algún viajero no dispone de la documentación habitual.

## Cómo lo puede pedir el cliente

- «¿Qué documentos nos van a pedir al llegar al hotel?»
- «hace falta el dni de todos o solo del q reservo?»
- «Hola, mi hijo es pequeño y no tiene DNI todavía, pasa algo? Y tengo que imprimir el bono?»
- «Quisiera saber qué documentación debemos presentar en la recepción.»
