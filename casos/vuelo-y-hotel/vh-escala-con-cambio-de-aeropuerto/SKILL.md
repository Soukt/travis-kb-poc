---
name: vh-escala-con-cambio-de-aeropuerto
description: El cliente ve que en su escala llega a un aeropuerto y sale desde
  otro distinto de la misma ciudad y no sabe cómo hacer el cambio.
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

El itinerario con escala implica desplazarse entre dos aeropuertos. Al cliente le preocupan el equipaje, el transporte entre ambos y el tiempo disponible.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` los aeropuertos y horarios de cada tramo.
3. Busca con `buscar-informacion` la respuesta aprobada sobre escalas con cambio de aeropuerto.
4. Prepara la respuesta con lo que aplique y la envía con `crear-ticket-booking` para que booking la revise antes de enviarla.

## Qué no hace

- No asegura que haya tiempo suficiente para el cambio.
- No contrata transporte entre aeropuertos.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la respuesta antes de enviarla.
- Si el tiempo entre vuelos parece insuficiente para cambiar de aeropuerto.

## Cómo lo puede pedir el cliente

- «Llegamos a un aeropuerto y salimos de otro, ¿cómo vamos de uno a otro?»
- «en la escala cambiamos de aeropuerto?? nadie nos lo dijo»
- «Buenas, ¿el traslado entre aeropuertos de la escala está incluido?»
- «tenemos q recoger maletas y cruzar la ciudad en la escala, da tiempo?»
