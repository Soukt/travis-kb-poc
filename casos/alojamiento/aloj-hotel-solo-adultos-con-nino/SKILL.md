---
name: aloj-hotel-solo-adultos-con-nino
description: El cliente descubre que ha reservado un alojamiento solo para
  adultos y viaja con un niño.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando hay un menor en el viaje y el alojamiento no admite niños. Requiere cambio o excepción, por lo que lo gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los viajeros y el alojamiento.
3. Confirma con `consultar-servicios-alojamiento` si el alojamiento es solo para adultos.
4. Consulta con `consultar-politica-cancelacion` las condiciones de cambio de la reserva.
5. Abre un ticket con `crear-ticket-booking` para que booking busque una solución.

## Qué no hace

- No sugiere ocultar al menor ni declararlo como adulto.
- No cancela ni cambia la reserva por su cuenta.
- No promete un cambio sin gastos.

## Cuándo pasa a una persona

- Siempre: implica una excepción o un cambio de alojamiento con posibles gastos.

## Cómo lo puede pedir el cliente

- «Acabo de ver que el hotel es solo para adultos y viajamos con nuestro hijo.»
- «el hotel no admite niños?? y ahora q»
- «Hola, no me fijé al reservar y es para mayores de edad. Me lo cambiáis sin coste? vamos con la niña»
- «Solicito una solución ya que el establecimiento contratado no admite menores.»
