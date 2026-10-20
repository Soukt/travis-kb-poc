---
name: viaj-viajero-no-titular-pide-bono
description: El cliente viaja en una reserva hecha por otra persona, como un
  familiar, su empresa o alguien que se la regaló, y pide los bonos o los
  detalles.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - reenviar-bono
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando quien escribe figura como viajero pero no es el titular ni tiene el email de la reserva. Tiene un interés legítimo, pero la reserva y sus datos pertenecen al titular.

## Qué hace el agente

1. Intenta `verificar-identidad`; si no es el titular, no muestra datos de la reserva.
2. Ofrece reenviar los bonos al email de la reserva con `reenviar-bono`, sin revelar cuál es, para que el titular se los haga llegar.
3. Recomienda que escriba el titular o que le autorice formalmente.
4. Registra la petición con `crear-ticket-booking` para que booking valore si puede atenderla de otra forma.

## Qué no hace

- No envía bonos a un email distinto del de la reserva.
- No revela el email ni los datos del titular.
- No da detalles de la reserva.

## Cuándo pasa a una persona

- Siempre: implica la reserva y los datos de otra persona.

## Cómo lo puede pedir el cliente

- «Mi empresa me ha reservado el hotel y no tengo el bono, ¿me lo mandáis?»
- «me regalaron el viaje y quiero ver las fechas pero la reserva no esta a mi nombre»
- «Buenos días, figuro como viajera en una reserva hecha por mi hermana y necesito la confirmación del ferri.»
- «Voy en el viaje de mi primo; ¿me decís a qué hora es el vuelo y me mandáis el bono a mí?»
