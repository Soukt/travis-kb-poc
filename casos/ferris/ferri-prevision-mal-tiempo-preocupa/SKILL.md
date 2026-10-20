---
name: ferri-prevision-mal-tiempo-preocupa
description: El cliente ha visto una previsión de mal tiempo para el día de su
  viaje y pregunta si el barco saldrá.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Antes de la salida, el cliente está preocupado por el estado del mar, aunque la naviera no haya comunicado ningún cambio.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` el estado actual del trayecto.
3. Busca con `buscar-informacion` cómo se comunican las cancelaciones por meteorología según la información aprobada.
4. Responde con el estado actual y explica que, si la naviera cambia algo, se le comunicará.

## Qué no hace

- No hace previsiones meteorológicas ni especula sobre si saldrá.
- No cancela ni cambia el trayecto por precaución.

## Cuándo pasa a una persona

- El cliente quiere cambiar o cancelar el trayecto por miedo al temporal.

## Cómo lo puede pedir el cliente

- «Dan temporal para el día que viajamos, ¿saldrá el barco?»
- «va a hacer mucho viento, se cancela el ferri o no?»
- «Buenos días, ante la previsión de mala mar, ¿existe riesgo de cancelación de mi trayecto?»
- «me da miedo ir en barco con mal tiempo, si no sale me devolveis el dinero?»
