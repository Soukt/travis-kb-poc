---
name: camb-queja-formal-cambio-denegado
description: El cliente quiere presentar una queja formal porque no se le ha
  permitido un cambio o una cancelación.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente está disconforme con la respuesta recibida y pide expresamente reclamar o hablar con un responsable.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` la reserva y su estado.
3. Escucha la queja, la resume con las palabras del cliente y le confirma que se registrará como reclamación.
4. Crea el ticket con `crear-ticket-booking`, marcado como queja formal y con el historial de lo solicitado.

## Qué no hace

- No discute la queja ni se justifica.
- No promete un resultado.

## Cuándo pasa a una persona

- Siempre: es una queja formal.

## Cómo lo puede pedir el cliente

- «Quiero poner una reclamación, no es normal que no me dejéis cambiar nada»
- «Pásame con un responsable, esto es inaceptable»
- «voy a poner una queja, me teneis harto con el cambio»
- «Deseo presentar una reclamación formal por la denegación de mi solicitud de modificación.»
