---
name: otra-incidente-lesion-dentro-parque
description: El cliente o un viajero se ha lesionado durante la visita al parque
  y quiere comunicarlo o reclamar.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Un viajero ha sufrido una caída, un golpe u otra lesión en una atracción o instalación del parque.

## Qué hace el agente

1. Se interesa por el estado del viajero y, si lo necesita, le indica que acuda a los servicios médicos.
2. Verifica la titularidad con `verificar-identidad`.
3. Confirma con `consultar-reserva` las entradas y la fecha de la visita.
4. Recoge qué pasó, dónde, si se dio parte en el parque y si hay informe médico, y crea un ticket con `crear-ticket-booking`.

## Qué no hace

- No da consejos médicos.
- No atribuye la culpa al parque ni al cliente.
- No promete indemnización.

## Cuándo pasa a una persona

- Siempre: puede derivar en una reclamación por daños.

## Cómo lo puede pedir el cliente

- «Mi hija se cayó en una atracción del parque y se ha hecho un esguince.»
- «me hice daño en el tobogan del parque acuatico y nadie me atendio»
- «Les informo de un accidente sufrido por uno de los viajeros durante la visita al parque.»
- «Mi marido se lesionó en el parque, ¿podemos usar las entradas que nos quedan otro día o cancelarlas?»
