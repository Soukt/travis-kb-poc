---
name: otra-objeto-envio-domicilio-objeto-recuperado
description: El cliente sabe que el alojamiento encontró su objeto olvidado y
  quiere que se lo envíen a casa.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El hotel ya ha confirmado que tiene el objeto y falta acordar cómo hacérselo llegar al cliente.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Confirma con `consultar-reserva` el alojamiento y las fechas de la estancia.
3. Recoge con `pedir-datos-cliente` la dirección de envío, la descripción del objeto y quién le confirmó que lo tienen.
4. Crea un ticket con `crear-ticket-booking` para que booking coordine el envío y su coste con el hotel.

## Qué no hace

- No promete que el envío sea gratuito ni da un precio.
- No pide pagos por el chat.

## Cuándo pasa a una persona

- Siempre: hay un coste de envío y coordinación con el hotel.

## Cómo lo puede pedir el cliente

- «El hotel me ha dicho que tienen mi neceser, ¿me lo podéis mandar a casa?»
- «ya encontraron mi reloj, como hago para q me lo envien»
- «Solicito que gestionen el envío a mi domicilio del objeto que el alojamiento ha localizado.»
- «Tienen mi chaqueta en recepción. ¿Quién paga el envío? ¿La puede recoger alguien de mi familia?»
