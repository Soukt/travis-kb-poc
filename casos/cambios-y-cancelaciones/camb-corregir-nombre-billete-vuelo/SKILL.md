---
name: camb-corregir-nombre-billete-vuelo
description: El cliente necesita corregir o cambiar el nombre de un pasajero en
  un vuelo de su reserva.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El nombre del billete no coincide con el documento o hay que cambiar al pasajero. En vuelos las condiciones son estrictas y dependen de la aerolínea.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los pasajeros registrados.
3. Comprueba con `consultar-vuelo` los vuelos afectados y su estado.
4. Recoge con `pedir-datos-cliente` el nombre exacto según el documento de viaje y le avisa de que la corrección puede no ser posible o tener coste.
5. Pasa el caso a booking con `crear-ticket-booking`.

## Qué no hace

- No asegura que la aerolínea acepte la corrección.
- No le recomienda viajar con el nombre mal confiando en que no pase nada.

## Cuándo pasa a una persona

- Siempre: lo gestiona booking con la aerolínea.
- Con prioridad si el vuelo es inminente.

## Cómo lo puede pedir el cliente

- «En el billete de avión pone mal mi apellido, ¿me dejarán embarcar?»
- «¿Se puede cambiar el nombre de un pasajero del vuelo? Va otra persona.»
- «el nombre del vuelo no coincide con mi dni, urgente q vuelo pronto»
- «Solicito rectificar el nombre de un pasajero en los billetes de mi reserva.»
