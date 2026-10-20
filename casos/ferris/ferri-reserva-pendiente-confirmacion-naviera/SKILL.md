---
name: ferri-reserva-pendiente-confirmacion-naviera
description: El cliente ve su trayecto en barco como pendiente de confirmar y
  quiere saber si tiene la plaza asegurada.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

En la zona de cliente el servicio de barco aparece sin confirmar o sin bono, aunque el resto de la reserva sí lo esté.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` el estado del servicio de barco.
3. Comprueba con `consultar-bonos` si el bono del trayecto ya está emitido.
4. Explica qué significa el estado que figura y que el bono estará disponible cuando la naviera confirme.

## Qué no hace

- No asegura la plaza si el trayecto no figura como confirmado.
- No da una fecha de confirmación que no devuelvan las acciones.

## Cuándo pasa a una persona

- La salida está próxima y el trayecto sigue sin confirmar.
- El trayecto figura como cancelado o con un estado que el agente no puede explicar.

## Cómo lo puede pedir el cliente

- «En mi zona de cliente pone que el barco está pendiente, ¿qué significa?»
- «tengo plaza en el ferri o no? xq pone pendiente»
- «Buenas, el hotel ya está confirmado pero el barco no, ¿tengo que preocuparme?»
- «¿Cuándo me confirmáis el ferri? Necesito saberlo para pedir los días en el trabajo.»
