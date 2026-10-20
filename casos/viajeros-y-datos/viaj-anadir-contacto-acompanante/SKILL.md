---
name: viaj-anadir-contacto-acompanante
description: El cliente quiere que otro viajero de la reserva también reciba los
  avisos y las comunicaciones del viaje.
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

Cuando un acompañante viaja por separado, llega antes o simplemente quiere estar informado. Implica registrar datos de contacto de otra persona.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Confirma con `consultar-reserva` que el acompañante figura como viajero.
3. Recoge con `pedir-datos-cliente` el contacto del acompañante y confirma que este está de acuerdo.
4. Abre con `crear-ticket-booking` la petición para que booking decida cómo registrarlo.

## Qué no hace

- No envía comunicaciones al acompañante.
- No sustituye el contacto del titular.

## Cuándo pasa a una persona

- Siempre: implica datos de otra persona.

## Cómo lo puede pedir el cliente

- «Mi marido viaja antes que yo; ¿puede recibir él también los emails de la reserva?»
- «Querría añadir un segundo contacto a la reserva, el de mi hija, que viaja conmigo.»
- «q le lleguen los avisos tb a mi pareja porfa»
- «¿Podéis poner el teléfono de mi amiga como contacto y mandarle también a ella el bono?»
