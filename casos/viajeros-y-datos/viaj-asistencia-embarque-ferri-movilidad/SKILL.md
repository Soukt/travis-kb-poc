---
name: viaj-asistencia-embarque-ferri-movilidad
description: El cliente pregunta qué ayuda hay en el puerto y en el embarque del
  ferri para un viajero con movilidad reducida.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando un viajero mayor o con movilidad reducida va a embarcar, a pie o en vehículo, y el cliente quiere saber cómo será el acceso y si debe avisar.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-trayecto-ferri` el puerto, la hora de presentación y la forma de embarque.
3. Busca con `buscar-informacion` la respuesta aprobada sobre asistencia en el embarque.
4. Explica al cliente lo que conste y si es necesario solicitar la asistencia con antelación.

## Qué no hace

- No solicita la asistencia a la naviera.
- No asegura servicios que no figuren.

## Cuándo pasa a una persona

- Hay que solicitar formalmente la asistencia a la naviera.
- El viajero necesita además una acomodación adaptada.

## Cómo lo puede pedir el cliente

- «Mi abuela va en silla de ruedas, ¿cómo sube al barco?»
- «hay ascensor o rampa pa subir al ferry? mi padre no puede con escaleras»
- «Buenos días, ¿ofrece la naviera asistencia en el embarque para pasajeros con movilidad reducida?»
- «¿Mi madre puede embarcar con nosotros en el coche y luego subir en ascensor? ¿A qué hora tenemos que estar?»
