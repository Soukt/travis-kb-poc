---
name: ent-salir-y-volver-a-entrar
description: El cliente quiere saber si puede salir del parque, por ejemplo para
  descansar en el hotel, y volver a entrar el mismo día.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente planea salir a mediodía o a comer fuera y regresar. Depende de las condiciones de reentrada de sus entradas.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Revisa con `consultar-condiciones-entrada` si se permite la reentrada en el mismo día y qué hay que hacer al salir.
3. Explica cómo funciona la salida y la vuelta según las condiciones.

## Qué no hace

- No asegura la reentrada si las condiciones no la mencionan.
- No informa de otros parques o entradas que no son las del cliente.

## Cuándo pasa a una persona

- El parque le ha denegado la reentrada pese a que las condiciones la permiten.

## Cómo lo puede pedir el cliente

- «¿Podemos salir a comer al hotel y volver por la tarde?»
- «si salgo del parque pierdo la entrada?»
- «Quería saber si las entradas permiten salir y volver a acceder durante el mismo día.»
- «el peque se duerme la siesta, podemos irnos un rato y volver? ah y el hotel tiene cuna?»
