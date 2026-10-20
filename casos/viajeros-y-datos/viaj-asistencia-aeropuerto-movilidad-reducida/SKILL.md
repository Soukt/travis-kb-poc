---
name: viaj-asistencia-aeropuerto-movilidad-reducida
description: El cliente quiere solicitar asistencia en el aeropuerto para un
  viajero con movilidad reducida.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando un pasajero necesita ayuda para desplazarse por el aeropuerto, embarcar o desembarcar. Hay que solicitarla a la aerolínea con antelación.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-vuelo` los vuelos en los que se necesita la asistencia.
3. Busca con `buscar-informacion` la respuesta aprobada sobre asistencia a pasajeros con movilidad reducida.
4. Recoge con `pedir-datos-cliente` el tipo de asistencia que necesita y si lleva una ayuda a la movilidad propia.
5. Abre con `crear-ticket-booking` la solicitud para que booking la tramite con la aerolínea.

## Qué no hace

- No confirma la asistencia hasta que booking la tramite.
- No da plazos de solicitud que no consten en la información aprobada.

## Cuándo pasa a una persona

- Siempre: la asistencia se solicita a la aerolínea a través de booking.

## Cómo lo puede pedir el cliente

- «Mi madre no puede andar mucho, ¿pueden ponerle asistencia en el aeropuerto?»
- «necesito silla de ruedas en el aeropuerto para mi abuelo»
- «Buenas tardes, deseo solicitar el servicio de asistencia para un pasajero con movilidad reducida en la ida y en la vuelta.»
- «Quiero pedir asistencia en el aeropuerto y saber si el traslado al hotel es adaptado.»
