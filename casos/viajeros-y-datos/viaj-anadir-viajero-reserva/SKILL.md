---
name: viaj-anadir-viajero-reserva
description: El cliente quiere añadir a su reserva un viajero que no estaba incluido.
metadata:
  area: viajeros-y-datos
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

Cuando se suma al viaje otra persona, adulta o menor, que no figuraba al reservar. Depende de la disponibilidad y la capacidad de cada servicio y supone un cambio de precio.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` los viajeros actuales y los servicios contratados.
3. Consulta con `consultar-politica-cancelacion` las condiciones de cambio de la reserva.
4. Pide con `pedir-datos-cliente` los datos del nuevo viajero.
5. Abre con `crear-ticket-booking` la petición para que booking compruebe disponibilidad y precio.

## Qué no hace

- No confirma que haya plaza.
- No da precios.
- No recomienda que el viajero vaya sin estar en la reserva.

## Cuándo pasa a una persona

- Siempre: añadir un viajero requiere disponibilidad y tiene un coste.

## Cómo lo puede pedir el cliente

- «Al final se apunta mi madre al viaje, ¿la podéis añadir?»
- «Buenas tardes, querríamos incluir a una persona más en la reserva. ¿Es posible?»
- «se viene un amigo mas, cabe en la habitacion o hay que hacer otra reserva??»
- «Quiero añadir a mi sobrino a la reserva y que también tenga entrada para el parque.»
