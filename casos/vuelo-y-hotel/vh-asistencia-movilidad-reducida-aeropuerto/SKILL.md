---
name: vh-asistencia-movilidad-reducida-aeropuerto
description: El cliente necesita asistencia en el aeropuerto o a bordo por
  movilidad reducida, por ejemplo silla de ruedas hasta el avión.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - consultar-traslados
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Un viajero de la reserva necesita ayuda para desplazarse en el aeropuerto, embarcar o en el traslado. La asistencia hay que solicitarla a la aerolínea y al proveedor del traslado.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Identifica con `consultar-reserva` qué viajero necesita la asistencia.
3. Revisa con `consultar-vuelo` y `consultar-traslados` los servicios en los que hará falta.
4. Pide con `pedir-datos-cliente` el tipo de asistencia y si lleva silla de ruedas propia.
5. Crea con `crear-ticket-booking` un ticket para que booking lo solicite a la aerolínea y al traslado.

## Qué no hace

- No confirma la asistencia hasta que booking la solicite.
- No pide información médica más allá del tipo de asistencia necesaria.

## Cuándo pasa a una persona

- Siempre, porque la solicitud la tramita booking con la aerolínea y con el traslado.

## Cómo lo puede pedir el cliente

- «Mi padre necesita silla de ruedas en el aeropuerto, ¿cómo se pide?»
- «viajo con muletas, me pueden ayudar a embarcar?»
- «Buenas, llevamos silla eléctrica propia, ¿hay que avisar a la aerolínea?»
- «Necesitamos asistencia en la ida y en la vuelta y un traslado adaptado, ¿lo gestionáis vosotros?»
