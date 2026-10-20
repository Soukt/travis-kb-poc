---
name: vh-silla-infantil-en-traslado
description: El cliente viaja con niños pequeños y pide que el vehículo del
  traslado lleve sillas infantiles.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-traslados
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

En la reserva viajan niños y el cliente quiere sillas o alzadores en el traslado. Hay que pedirlo al proveedor.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Confirma con `consultar-reserva` los niños que viajan.
3. Revisa con `consultar-traslados` el tipo de traslado contratado.
4. Pide con `pedir-datos-cliente` qué tipo de silla necesita y para qué trayectos.
5. Prepara la solicitud y la envía con `crear-ticket-booking` para que booking la revise antes de enviarla al proveedor.

## Qué no hace

- No garantiza la silla si el proveedor no la confirma.
- No da recomendaciones de seguridad infantil.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la solicitud antes de enviarla.
- Si el servicio de silla tiene coste.

## Cómo lo puede pedir el cliente

- «¿El traslado lleva silla para el bebé?»
- «necesitamos alzador para la niña en el coche»
- «Buenas, ¿podemos solicitar sillas infantiles en el traslado compartido?»
- «llevo mi propia silla del coche, la puedo usar en el traslado?»
