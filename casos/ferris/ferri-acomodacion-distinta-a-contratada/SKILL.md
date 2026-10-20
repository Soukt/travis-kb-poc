---
name: ferri-acomodacion-distinta-a-contratada
description: El cliente ha viajado o está viajando con una acomodación peor o
  distinta de la que contrató y quiere reclamar.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

A bordo le han dado butaca en vez de camarote, un camarote interior en vez de exterior u otra acomodación inferior a la reservada.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` la acomodación contratada.
3. Recoge qué acomodación le dieron y si la tripulación le dio alguna explicación o justificante.
4. Abre un caso con `crear-ticket-booking` con la comparación entre lo contratado y lo recibido.

## Qué no hace

- No reconoce una compensación ni la cuantifica.
- No culpa a la naviera ni a nadie sin revisar el caso.

## Cuándo pasa a una persona

- Siempre: es una reclamación que puede implicar una devolución.

## Cómo lo puede pedir el cliente

- «Pagué un camarote exterior y me han dado uno sin ventana.»
- «nos han puesto en butacas y teniamos camarote!! esto es una vergüenza»
- «Les escribo para reclamar que la acomodación recibida no se corresponde con la contratada.»
- «Al embarcar nos dijeron que no había camarote para nosotros, ¿qué me vais a devolver?»
