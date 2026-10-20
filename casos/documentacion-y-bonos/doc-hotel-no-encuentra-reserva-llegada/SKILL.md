---
name: doc-hotel-no-encuentra-reserva-llegada
description: El cliente está en la recepción del alojamiento con su bono y allí
  no encuentran su reserva.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - reenviar-bono
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Situación urgente en destino: el cliente ya ha llegado y el alojamiento dice no tener ninguna reserva a su nombre.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Confirma con `consultar-reserva` que la reserva está confirmada para esas fechas y ese alojamiento.
3. Revisa con `consultar-bonos` el bono vigente y, si el cliente no lo tiene a mano, se lo envía con `reenviar-bono`.
4. Le sugiere enseñar en recepción los localizadores que figuren en el bono, incluido el del proveedor si aparece.
5. Abre `crear-ticket-booking` con prioridad, indicando que el cliente está en recepción, para que booking contacte con el alojamiento.

## Qué no hace

- No promete alojamiento alternativo ni compensaciones.
- No le dice al cliente que pague de nuevo la estancia.

## Cuándo pasa a una persona

- Siempre: es una incidencia en destino que tiene que resolver booking con el alojamiento.

## Cómo lo puede pedir el cliente

- «Estoy en el hotel y dicen que no tienen ninguna reserva a mi nombre»
- «AYUDA en recepcion no me encuentran!!! que hago»
- «Me encuentro en el establecimiento y no localizan mi reserva pese a presentar el bono.»
- «acabo de llegar con los niños y no aparece la reserva, ¿me quedo en la calle?»
