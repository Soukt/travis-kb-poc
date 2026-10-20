---
name: vh-escala-con-billetes-separados
description: El cliente ve que los tramos de su vuelo con escala parecen ir en
  billetes distintos y duda de qué pasa si pierde la conexión.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente encuentra dos códigos de reserva o dos aerolíneas distintas en su itinerario con escala. Quiere saber si la conexión está protegida y cómo facturar.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-reserva` y `consultar-vuelo` cómo están emitidos los tramos.
3. Busca con `buscar-informacion` la respuesta aprobada sobre conexiones en billetes separados.
4. Prepara la respuesta según lo que aplique y la envía con `crear-ticket-booking` para que booking la revise antes de enviarla.

## Qué no hace

- No afirma que la conexión esté protegida sin confirmación.
- No modifica los vuelos.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la respuesta antes de enviarla.
- Si el cliente pide pasar a un itinerario en un solo billete.

## Cómo lo puede pedir el cliente

- «Tengo dos códigos de vuelo distintos para la ida, ¿son billetes separados?»
- «si pierdo el segundo vuelo me lo cubre alguien o me quedo tirado»
- «Buenos días, ¿la escala está protegida si el primer vuelo se retrasa?»
- «Me salen dos aerolíneas y dos localizadores, ¿facturo dos veces? ¿y la maleta?»
