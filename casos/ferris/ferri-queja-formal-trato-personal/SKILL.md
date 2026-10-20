---
name: ferri-queja-formal-trato-personal
description: El cliente quiere presentar una queja formal por el trato recibido
  del personal de la naviera en el puerto o a bordo.
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

El cliente se ha sentido maltratado, discriminado o desatendido por el personal durante el embarque o la travesía.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Identifica con `consultar-trayecto-ferri` el trayecto en el que ocurrió.
3. Recoge con detalle lo sucedido, cuándo y dónde, sin juzgarlo.
4. Abre un caso con `crear-ticket-booking` con la queja tal y como la describe el cliente.

## Qué no hace

- No da la razón ni la quita a ninguna de las partes.
- No promete compensaciones.
- No pide datos personales del personal de la naviera.

## Cuándo pasa a una persona

- Siempre: es una queja formal.

## Cómo lo puede pedir el cliente

- «Quiero poner una queja por cómo nos trató el personal del barco.»
- «el de la taquilla nos hablo fatal delante de los niños, esto no puede quedar asi»
- «Deseo presentar una reclamación formal por el trato recibido durante el embarque.»
- «Nadie nos ayudó con la silla de ruedas y encima se rieron. Exijo una respuesta.»
