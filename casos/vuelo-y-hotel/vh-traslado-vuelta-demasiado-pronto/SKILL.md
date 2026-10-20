---
name: vh-traslado-vuelta-demasiado-pronto
description: El cliente cree que la recogida del traslado de vuelta es demasiado
  temprana para la hora de su vuelo y pide que le recojan más tarde.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-traslados
    - consultar-vuelo
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La hora de recogida le parece al cliente excesivamente anticipada respecto a la salida del vuelo. Quiere aprovechar más el último día.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-traslados` la hora de recogida y el tipo de traslado.
3. Consulta con `consultar-vuelo` la hora de salida del vuelo de vuelta.
4. Prepara la petición de cambio y la respuesta, y las envía con `crear-ticket-booking` para que booking las revise antes de enviarlas.

## Qué no hace

- No cambia la hora de recogida.
- No asegura que la nueva hora sea posible en un traslado compartido.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la petición antes de enviarla.
- Si el cambio supone pasar a un traslado privado con coste.

## Cómo lo puede pedir el cliente

- «Nos recogen muchísimo antes del vuelo, ¿pueden venir más tarde?»
- «q sentido tiene q nos recojan tan pronto?»
- «Buenas, ¿se puede retrasar la recogida del traslado de vuelta?»
- «preferimos q nos recojan mas tarde, asi aprovechamos la mañana en la piscina»
