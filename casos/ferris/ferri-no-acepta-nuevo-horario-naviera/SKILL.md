---
name: ferri-no-acepta-nuevo-horario-naviera
description: El cliente no puede o no quiere viajar con el nuevo horario que ha
  fijado la naviera y pide otra salida o la cancelación.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Tras un cambio de horario de la naviera, el nuevo horario no encaja con los planes del cliente.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Confirma con `consultar-trayecto-ferri` el horario original y el nuevo.
3. Revisa con `consultar-politica-cancelacion` las condiciones de la reserva.
4. Recoge qué prefiere el cliente, otra salida o cancelar, y abre un caso con `crear-ticket-booking`.

## Qué no hace

- No promete una salida alternativa concreta.
- No confirma reembolsos ni su importe.

## Cuándo pasa a una persona

- Siempre: hay que gestionar alternativas o devoluciones con la naviera.

## Cómo lo puede pedir el cliente

- «Con el nuevo horario no llego, ¿me podéis cambiar a otro barco?»
- «el cambio de hora me fastidia todo el viaje, quiero cancelar y q me devolvais el dinero»
- «Buenas tardes, el nuevo horario impuesto por la naviera no me resulta viable. Solicito alternativas.»
- «Ahora sale de madrugada y vamos con niños, así no podemos viajar. ¿Qué opciones hay?»
