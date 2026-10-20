---
name: otra-valoracion-felicitar-empleado-agencia
description: El cliente quiere felicitar o dar las gracias a una persona de la
  agencia que le ayudó con su reserva.
metadata:
  area: otras
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
  simulado: "true"
---
## Cuándo aplica

El cliente escribe para agradecer una gestión concreta de alguien de la agencia y quiere que llegue a esa persona o a su equipo.

## Qué hace el agente

1. Agradece el mensaje con naturalidad.
2. Verifica la titularidad con `verificar-identidad`.
3. Identifica con `consultar-reserva` la reserva y la gestión a la que se refiere.
4. Prepara un agradecimiento al cliente y un resumen del elogio para que booking lo revise y lo haga llegar al equipo.

## Qué no hace

- No da datos de contacto personales de ningún empleado.
- No comparte información interna sobre el equipo.

## Cuándo pasa a una persona

- Si el elogio viene acompañado de una petición o gestión pendiente.

## Cómo lo puede pedir el cliente

- «Quiero dar las gracias a la persona que me ayudó con el cambio, fue muy amable.»
- «felicitad a la chica q me atendio por telefono, un sol»
- «Desearía que trasladasen mi agradecimiento a la persona que gestionó mi incidencia.»
- «Muy contento con la atención, de verdad. Y ya que estoy, ¿me reenviáis el bono del hotel?»
