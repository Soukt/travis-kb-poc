---
name: vh-contratar-traslado-no-incluido
description: El cliente no tiene traslado en su paquete y quiere contratarlo, o
  quiere cambiar el compartido por uno privado.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-traslados
    - consultar-vuelo
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente quiere añadir un traslado entre el aeropuerto y el hotel o mejorar el que tiene. Supone un cargo adicional.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-traslados` lo que tiene contratado.
3. Obtiene con `consultar-vuelo` los horarios de llegada y salida.
4. Pide con `pedir-datos-cliente` qué trayectos quiere, el equipaje que lleva y si viajan niños.
5. Crea con `crear-ticket-booking` un ticket con la petición.

## Qué no hace

- No da precios.
- No confirma el servicio.

## Cuándo pasa a una persona

- Siempre, porque implica un cargo.

## Cómo lo puede pedir el cliente

- «¿Podemos añadir el traslado del aeropuerto al hotel?»
- «queremos traslado privado en vez del compartido»
- «Buenas, ¿cuánto costaría el traslado solo para la vuelta?»
- «no tenemos traslado y vamos con niños, nos lo poneis?»
