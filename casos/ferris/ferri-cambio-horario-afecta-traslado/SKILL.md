---
name: ferri-cambio-horario-afecta-traslado
description: El cliente tiene un traslado contratado que ya no encaja con el
  horario del barco tras un cambio de la naviera.
metadata:
  area: ferris
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - consultar-traslados
  simulado: "true"
---
## Cuándo aplica

La naviera ha cambiado la hora del trayecto y el traslado al puerto o desde el puerto sigue con el horario antiguo.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Obtiene con `consultar-trayecto-ferri` el horario vigente del barco.
3. Revisa con `consultar-traslados` el horario y el punto de encuentro del traslado.
4. Prepara la solicitud de ajuste del traslado y la respuesta al cliente para que booking las revise antes de enviarlas.

## Qué no hace

- No confirma un nuevo horario de traslado.
- No le recomienda otro transporte por su cuenta.

## Cuándo pasa a una persona

- El traslado no se puede ajustar y el cliente necesita una alternativa o una devolución.

## Cómo lo puede pedir el cliente

- «Han cambiado la hora del barco, ¿el traslado al puerto también se cambia?»
- «el bus al puerto me recoge a la hora de antes, q hago?»
- «Buenos días, tras el cambio de horario del ferri, solicito que se adapte la recogida del traslado.»
- «si el barco llega mas tarde, el del traslado se va a ir sin nosotros?»
