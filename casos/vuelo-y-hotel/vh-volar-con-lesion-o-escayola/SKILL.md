---
name: vh-volar-con-lesion-o-escayola
description: El cliente se ha lesionado antes del viaje, por ejemplo lleva
  escayola, y pregunta si la aerolínea le pondrá condiciones para volar.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Un viajero tiene una lesión reciente y teme que la aerolínea le pida un informe o le impida embarcar. Es un tema delicado que se revisa antes de responder.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` la aerolínea operadora de cada trayecto.
3. Busca con `buscar-informacion` la respuesta aprobada sobre volar con lesiones o escayolas.
4. Prepara la respuesta con esa información y la remisión a las condiciones de la aerolínea, y la envía con `crear-ticket-booking` para que booking la revise antes de enviarla.

## Qué no hace

- No da consejo médico ni valora si el viajero puede volar.
- No pide más información de salud de la necesaria.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la respuesta antes de enviarla.
- Si necesita asistencia o un asiento especial, o quiere cambiar o cancelar el viaje.

## Cómo lo puede pedir el cliente

- «Me he roto el pie y llevo escayola, ¿puedo volar?»
- «con la pierna escayolada me dejaran subir al avion?»
- «Buenas, ¿la aerolínea pide algún informe médico si viajo con una lesión?»
- «llevare la escayola durante el viaje, necesito algo especial para volar?»
