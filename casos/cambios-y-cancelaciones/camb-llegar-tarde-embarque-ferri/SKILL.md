---
name: camb-llegar-tarde-embarque-ferri
description: El cliente avisa de que no va a llegar a tiempo al embarque del
  ferri y pregunta qué puede hacer.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-trayecto-ferri
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El trayecto es inminente y el cliente va con retraso por tráfico, una avería u otro imprevisto. Hay que actuar rápido y la solución depende de la naviera.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Localiza con `consultar-reserva` el trayecto afectado.
3. Consulta con `consultar-trayecto-ferri` la hora de presentación y de embarque para confirmar el margen real.
4. Le recuerda la hora límite de presentación que devuelve la acción y le pide su hora estimada de llegada al puerto.
5. Crea un ticket urgente con `crear-ticket-booking` para que booking busque una solución con la naviera.

## Qué no hace

- No asegura que la naviera vaya a esperar o a reubicarle sin coste.
- No le anima a presentarse fuera de horario como si no pasara nada.

## Cuándo pasa a una persona

- Siempre y con prioridad: es una incidencia en tiempo real.

## Cómo lo puede pedir el cliente

- «Estamos en un atasco y no llegamos al barco, ¡ayuda!»
- «Hola, vamos con retraso al puerto, ¿nos esperan o qué hacemos?»
- «se me ha estropeado el coche de camino al puerto, perdemos el ferri, q hago??»
- «Buenas tardes, prevemos llegar tarde a la presentación del trayecto. ¿Es posible embarcar en una salida posterior?»
