---
name: vh-un-viajero-vuelve-en-otro-vuelo
description: El cliente necesita que solo uno de los viajeros de la reserva
  vuele en otra fecha o en otro vuelo distinto al del resto del grupo.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El grupo mantiene su viaje, pero un viajero adulto tiene que ir o volver por separado. Supone dividir la reserva del vuelo.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-reserva` los viajeros y cuál cambiaría de vuelo.
3. Obtiene con `consultar-vuelo` los vuelos actuales.
4. Consulta con `consultar-politica-cancelacion` las condiciones de cambio.
5. Crea con `crear-ticket-booking` un ticket con el viajero afectado y el vuelo o la fecha que necesita.

## Qué no hace

- No separa a los viajeros de la reserva.
- No asegura que sea posible sin afectar al resto ni que sea gratis.
- No modifica el traslado del resto del grupo.

## Cuándo pasa a una persona

- Siempre, porque implica cambios en la plaza de otro viajero y posibles gastos.

## Cómo lo puede pedir el cliente

- «Mi marido tiene que volver antes por trabajo, ¿se puede cambiar solo su vuelo?»
- «uno de nosotros se queda mas dias, se puede?»
- «Buenas, ¿es posible que un viajero vaya en un vuelo distinto al resto?»
- «mi hermano se une un dia despues, puede volar en otro vuelo con la misma reserva?»
