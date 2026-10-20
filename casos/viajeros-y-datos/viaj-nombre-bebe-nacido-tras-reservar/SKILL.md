---
name: viaj-nombre-bebe-nacido-tras-reservar
description: El cliente reservó antes de que naciera su bebé y ahora quiere
  facilitar su nombre y su fecha de nacimiento.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando la reserva se hizo con el bebé indicado de forma provisional o sin datos y el nacimiento ya se ha producido. Los proveedores necesitan los datos reales.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` cómo figura el bebé en la reserva.
3. Pide con `pedir-datos-cliente` el nombre, los apellidos y la fecha de nacimiento del bebé.
4. Abre con `crear-ticket-booking` la actualización para que booking la traslade a los proveedores.
5. Felicita al cliente con naturalidad y le confirma que booking le avisará si falta algo.

## Qué no hace

- No da por hecho que el bebé ya figuraba en todos los servicios.
- No pide documentos del bebé por el chat.

## Cuándo pasa a una persona

- Siempre: los datos del bebé los incorpora booking.

## Cómo lo puede pedir el cliente

- «Cuando reservé aún no había nacido mi hija; ya os puedo dar sus datos.»
- «ya nacio el peque!! q datos os paso para el viaje?»
- «Buenos días, les facilito los datos del recién nacido que quedaron pendientes en la reserva.»
- «Ha nacido el bebé y quiero añadir sus datos; ¿necesita pasaporte para el vuelo?»
