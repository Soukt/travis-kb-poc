---
name: doc-que-presentar-llegada-hotel
description: El cliente pregunta qué tiene que presentar en la recepción del
  alojamiento cuando llegue.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - consultar-horarios-hotel
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Antes de la llegada, cuando el cliente quiere saber qué documentos le pedirán en el alojamiento para hacer la entrada.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` a nombre de quién está la reserva y qué viajeros figuran.
3. Confirma con `consultar-bonos` que el bono del alojamiento está disponible.
4. Le indica con `consultar-horarios-hotel` el horario de entrada y si se admite llegada tarde.
5. Completa con `buscar-informacion` lo que la agencia tiene aprobado sobre documentación habitual en la entrada (bono y documento de identidad de los viajeros).

## Qué no hace

- No inventa requisitos propios del alojamiento que no devuelvan las acciones.
- No garantiza que el alojamiento no pida nada más en recepción.

## Cuándo pasa a una persona

- El titular de la reserva no va a estar presente en la llegada.
- El bono del alojamiento no está disponible y la llegada es inminente.

## Cómo lo puede pedir el cliente

- «¿Qué tengo que enseñar en el hotel cuando llegue?»
- «en recepcion q me van a pedir, el bono y ya?»
- «Quisiera saber qué documentación debo presentar al hacer el registro de entrada.»
- «¿Con el DNI y el bono vale? ¿Y a qué hora puedo entrar?»
