---
name: doc-hora-bono-ferri-salida-presentacion
description: El cliente no sabe si la hora que aparece en el bono del ferri es
  la de salida o la de presentación en el puerto.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
  simulado: "true"
---
## Cuándo aplica

Cuando el bono muestra una o varias horas y el cliente teme llegar tarde al embarque.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Consulta con `consultar-trayecto-ferri` la hora de salida y la hora de presentación del trayecto.
3. Le explica cuál es cada una y le recomienda guiarse por la de presentación.
4. Si viaja con vehículo, le indica lo que devuelva la acción sobre el embarque de vehículos.

## Qué no hace

- No calcula ni inventa márgenes de antelación que no devuelva la acción.
- No confirma cambios de horario que no figuren en el trayecto.

## Cuándo pasa a una persona

- La hora del bono no coincide con la que devuelve la acción.

## Cómo lo puede pedir el cliente

- «La hora del bono del barco, ¿es cuando sale o cuando tengo que estar?»
- «a q hora tengo q estar en el puerto? el bono no lo deja claro»
- «Les ruego me aclaren si la hora indicada corresponde a la salida o al embarque.»
- «en el bono pone dos horas distintas y no sé cuál es la buena, voy con caravana»
