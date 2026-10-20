---
name: vh-cambiar-viajero-por-otra-persona
description: El cliente quiere que otra persona viaje en lugar de uno de los
  viajeros de la reserva.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Un viajero ya no puede ir y el cliente quiere ceder su plaza a otra persona. En los vuelos supone cambiar el nombre del billete.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-reserva` qué viajero se quiere sustituir.
3. Consulta con `consultar-politica-cancelacion` las condiciones de cambio de la reserva.
4. Pide con `pedir-datos-cliente`, mediante el formulario, los datos de la persona que viajará.
5. Crea con `crear-ticket-booking` un ticket con la petición.

## Qué no hace

- No cambia el nombre en los billetes.
- No asegura que la aerolínea lo permita ni que sea gratis.

## Cuándo pasa a una persona

- Siempre, porque implica datos de otra persona y posibles gastos.

## Cómo lo puede pedir el cliente

- «Mi amiga no puede venir, ¿puede ir otra persona en su lugar?»
- «cambiar un nombre de la reserva se puede?»
- «Buenas tardes, quiero ceder la plaza de un viajero a un familiar.»
- «en vez de mi cuñado viene mi hermano, como lo cambio?»
