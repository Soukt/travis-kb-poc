---
name: ferri-cambio-horario-por-naviera
description: El cliente ha recibido un aviso de cambio de horario de su barco y
  quiere confirmar cuál es el horario bueno.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - consultar-reserva
  simulado: "true"
---
## Cuándo aplica

La naviera ha modificado la hora de salida del trayecto y el cliente quiere saber qué horario vale y si cambia la hora de presentación.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Obtiene con `consultar-trayecto-ferri` el horario vigente y la nueva hora de presentación.
3. Revisa con `consultar-reserva` si hay otros servicios que puedan verse afectados, como el hotel o un traslado.
4. Responde con el horario actualizado y avisa si algún otro servicio podría verse afectado.

## Qué no hace

- No da por válido el horario antiguo.
- No ofrece alternativas ni compensaciones.

## Cuándo pasa a una persona

- El nuevo horario no le viene bien al cliente.
- El cambio afecta a otros servicios de la reserva.

## Cómo lo puede pedir el cliente

- «Me ha llegado un aviso de que han cambiado la hora del barco, ¿cuál es la buena?»
- «me dicen q el ferri sale antes, es verdad?»
- «Buenos días, he recibido una notificación de modificación de horario. ¿Podrían confirmarme la nueva hora de salida?»
- «¿Ahora a qué hora hay que estar en el puerto con el cambio? ¿Y llegamos a tiempo al hotel?»
