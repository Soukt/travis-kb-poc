---
name: vh-salir-aeropuerto-escala-larga
description: El cliente tiene una escala larga y quiere saber si puede salir del
  aeropuerto mientras espera el siguiente vuelo.
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

El itinerario incluye una escala de muchas horas y el cliente se plantea salir a la ciudad. Le preocupan la documentación y el equipaje.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` la duración de la escala y el aeropuerto donde se hace.
3. Busca con `buscar-informacion` la respuesta aprobada sobre salir del aeropuerto durante una escala.
4. Le traslada esa información y le recuerda que es responsable de volver a pasar los controles con tiempo y de llevar la documentación que exija ese país.

## Qué no hace

- No asegura que pueda salir sin visado ni documentación adicional.
- No recomienda planes en la ciudad de escala.

## Cuándo pasa a una persona

- Si no hay respuesta aprobada y el cliente insiste en confirmar algo que afecta a su embarque.

## Cómo lo puede pedir el cliente

- «Tenemos muchas horas de escala, ¿podemos salir a dar una vuelta?»
- «en la escala larga puedo salir del aeropuerto o me quedo dentro?»
- «Hola, ¿necesito algún permiso para salir durante la escala?»
- «Escala eterna... ¿y si salimos y luego volvemos a pasar el control? ¿Las maletas qué?»
