---
name: doc-certificado-estancia-tras-viaje
description: El cliente ya ha vuelto del viaje y necesita un certificado que
  acredite que se alojó en el alojamiento.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Después de la estancia, cuando el cliente necesita acreditar que estuvo allí, por ejemplo para justificar una ausencia o un gasto.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` que la estancia figura como realizada y sus fechas.
3. Le pregunta para qué necesita el certificado y qué datos debe incluir.
4. Abre `crear-ticket-booking` con esa información para que booking valore si puede emitirlo o solicitarlo al alojamiento.

## Qué no hace

- No emite certificados de estancia.
- No asegura que el alojamiento lo vaya a facilitar.

## Cuándo pasa a una persona

- Siempre: el certificado lo gestiona booking, a menudo con el alojamiento.

## Cómo lo puede pedir el cliente

- «Necesito un certificado de que estuve en el hotel»
- «me piden en el trabajo q demuestre q estuve alojado alli»
- «Solicito un certificado de estancia correspondiente a mi reserva ya disfrutada.»
- «¿me podéis dar algo firmado del hotel diciendo las noches que estuve?»
