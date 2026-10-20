---
name: vh-maleta-danada-reclamacion
description: El cliente ha recibido su maleta rota, abierta o con daños tras el
  vuelo y quiere reclamar.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La maleta ha llegado, pero con desperfectos o con contenido que falta. El cliente quiere saber cómo reclamar.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Confirma con `consultar-vuelo` el vuelo en el que viajó la maleta.
3. Pide con `pedir-datos-cliente` si hizo parte en el aeropuerto, su referencia, una descripción del daño y fotos.
4. Crea con `crear-ticket-booking` un ticket con todo lo recogido.
5. Le informa de que booking le indicará los siguientes pasos.

## Qué no hace

- No valora el daño ni ofrece importes.
- No asegura que la reclamación prospere.

## Cuándo pasa a una persona

- Siempre, porque hay una posible indemnización.

## Cómo lo puede pedir el cliente

- «La maleta ha llegado con una rueda rota»
- «me han destrozado la maleta, quien me la paga»
- «Buenos días, salimos del aeropuerto sin hacer el parte de daños, ¿aún puedo reclamar?»
- «La maleta vino abierta y faltan cosas, ¿con quién hablo?»
