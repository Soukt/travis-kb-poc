---
name: doc-hotel-distinto-en-bono
description: El cliente ve en el bono el nombre de un alojamiento distinto al que reservó.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el nombre del alojamiento en el bono no es el que el cliente eligió, ya sea por un cambio de nombre comercial, una reubicación o un error.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` qué alojamiento figura en la reserva.
3. Confirma con `consultar-bonos` que el bono es el vigente.
4. Busca con `buscar-informacion` si hay información aprobada sobre alojamientos que operan con otro nombre comercial.
5. Abre `crear-ticket-booking` con ambos nombres y la fecha de llegada para que booking lo confirme con el proveedor.

## Qué no hace

- No asegura que se trate del mismo alojamiento sin confirmación.
- No ofrece cambios ni compensaciones.

## Cuándo pasa a una persona

- Siempre: puede tratarse de una reubicación y lo tiene que confirmar booking.

## Cómo lo puede pedir el cliente

- «El hotel que pone en el bono no es el que reservé»
- «q hotel es este?? yo no elegi este»
- «El establecimiento que figura en la documentación es distinto del contratado.»
- «en el bono sale otro nombre de hotel, ¿me habéis cambiado de sitio sin avisar?»
