---
name: viaj-bebe-olvidado-en-reserva
description: El cliente se ha dado cuenta de que no incluyó a un bebé en la
  reserva y quiere añadirlo.
metadata:
  area: viajeros-y-datos
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

Cuando un bebé viajará pero no figura en la reserva. En los vuelos suele ser obligatorio que conste y puede tener coste; en el alojamiento afecta a la ocupación.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` los viajeros y servicios, y con `consultar-vuelo` si hay vuelos implicados.
3. Pide con `pedir-datos-cliente` el nombre y la fecha de nacimiento del bebé.
4. Abre con `crear-ticket-booking` la petición para que booking lo añada en cada servicio y confirme si tiene coste.

## Qué no hace

- No dice que el bebé pueda viajar sin constar en la reserva.
- No da precios.

## Cuándo pasa a una persona

- Siempre: añadir al bebé requiere gestión con los proveedores y puede tener coste.

## Cómo lo puede pedir el cliente

- «Se me olvidó poner a mi bebé en la reserva, ¿lo podéis añadir?»
- «el bebe no sale en la reserva, hace falta si va en brazos?»
- «Buenas tardes, debo incluir a un lactante que no registré al reservar.»
- «No metí al bebé y necesito también una cuna en el hotel, ¿cómo lo hacemos?»
