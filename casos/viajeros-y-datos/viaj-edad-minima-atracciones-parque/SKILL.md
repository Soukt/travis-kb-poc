---
name: viaj-edad-minima-atracciones-parque
description: El cliente pregunta si los niños de la reserva podrán entrar o
  subir a las atracciones según su edad o su altura.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Cuando la reserva incluye entradas a un parque y viajan niños. El cliente quiere saber si tienen restricciones antes de ir.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` las edades de los viajeros.
3. Revisa con `consultar-condiciones-entrada` las condiciones de edad y acceso.
4. Explica al cliente lo que permiten las entradas y le indica que las restricciones de cada atracción las aplica el parque.

## Qué no hace

- No inventa alturas mínimas ni restricciones que no devuelva la acción.
- No asegura el acceso a una atracción concreta.

## Cuándo pasa a una persona

- El niño no puede usar la entrada contratada y el cliente pide un cambio o una devolución.

## Cómo lo puede pedir el cliente

- «Mi hija es pequeña, ¿podrá subir a las atracciones?»
- «los crios con la entrada pueden montar en todo o hay limite de altura?»
- «Buenas tardes, ¿existen restricciones de edad para los menores en el parque?»
- «¿El pequeño puede entrar al parque acuático? ¿Y hay que llevar flotador o lo dejan allí?»
