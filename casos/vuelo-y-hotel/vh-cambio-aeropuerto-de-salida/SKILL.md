---
name: vh-cambio-aeropuerto-de-salida
description: El cliente ve que la aerolínea ha cambiado el aeropuerto de salida
  o de llegada de su vuelo por otro de la misma zona.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-traslados
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Por un cambio de la aerolínea, el vuelo opera desde o hacia un aeropuerto distinto al reservado. El traslado y la forma de llegar al aeropuerto pueden verse afectados.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Confirma con `consultar-vuelo` el aeropuerto actual de cada trayecto.
3. Revisa con `consultar-traslados` si el traslado incluido sigue apuntando al aeropuerto correcto.
4. Prepara la respuesta y los ajustes necesarios, y los envía con `crear-ticket-booking` para que booking los revise antes de enviarlos.

## Qué no hace

- No promete pagar desplazamientos adicionales.
- No cambia el traslado sin la revisión de booking.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la gestión antes de enviarla.
- Si el cliente reclama gastos por el cambio de aeropuerto.

## Cómo lo puede pedir el cliente

- «Ahora el vuelo sale de otro aeropuerto, ¿cómo puede ser?»
- «nos cambiaron el aeropuerto de llegada, el traslado nos recoge en el nuevo?»
- «Buenas, el aeropuerto nuevo me queda lejísimos, ¿qué opciones tengo?»
- «en la reserva pone un aeropuerto y en la tarjeta de embarque otro»
