---
name: doc-acompanante-no-titular-pide-bono
description: El cliente que escribe no es el titular de la reserva, sino un
  acompañante, y pide que le den o envíen el bono.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando la verificación de identidad no corresponde con quien escribe porque es otro viajero de la reserva.

## Qué hace el agente

1. Intenta `verificar-identidad`; si quien escribe no es el titular, no comparte ningún dato de la reserva.
2. Le explica que el titular puede descargar el bono desde su zona de cliente y reenviárselo.
3. Si el acompañante no puede contactar con el titular, recoge con `pedir-datos-cliente` el localizador y su relación con la reserva.
4. Abre `crear-ticket-booking` con lo recogido para que booking decida cómo proceder.

## Qué no hace

- No envía bonos ni da datos de la reserva a quien no es el titular.
- No confirma si existe la reserva.

## Cuándo pasa a una persona

- Siempre que quien escribe no sea el titular: son datos de otra persona.

## Cómo lo puede pedir el cliente

- «La reserva la hizo mi amiga pero yo también viajo, ¿me mandáis el bono?»
- «no soy el titular pero voy en el viaje, necesito el bono»
- «Soy acompañante en una reserva ajena y solicito una copia de la documentación.»
- «mi marido hizo la reserva y no me contesta, ¿me dais el bono a mí?»
