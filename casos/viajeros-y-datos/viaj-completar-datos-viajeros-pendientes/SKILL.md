---
name: viaj-completar-datos-viajeros-pendientes
description: El cliente ha recibido un aviso de que faltan datos de los viajeros
  en su reserva y quiere completarlos.
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

Cuando la agencia o un proveedor necesita datos que no se pidieron al reservar, como documentos o fechas de nacimiento de los acompañantes.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` qué viajeros y servicios tiene la reserva.
3. Recoge con `pedir-datos-cliente` los datos que faltan de cada viajero.
4. Abre con `crear-ticket-booking` la entrega de los datos para que booking los incorpore.
5. Confirma al cliente que los datos se han recibido y que booking le avisará si falta algo.

## Qué no hace

- No pide datos que no sean necesarios para el viaje.
- No solicita fotos ni copias de documentos por el chat.

## Cuándo pasa a una persona

- Siempre: los datos de los acompañantes los incorpora booking.

## Cómo lo puede pedir el cliente

- «Me ha llegado un email diciendo que faltan los datos de los pasajeros. ¿Dónde los pongo?»
- «hola me pedis los dni de todos los q vamos, os los paso por aqui?»
- «Buenos días, les facilito la información de los acompañantes que me solicitaron para completar la reserva.»
- «Tengo que mandar los datos de mis hijos para el barco y no sé si también los pide el hotel.»
