---
name: aloj-habitacion-adaptada-movilidad
description: El cliente o un viajero tiene movilidad reducida y necesita una
  habitación adaptada o un alojamiento accesible.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando hace falta una habitación adaptada, ducha accesible o acceso sin escalones. El agente prepara la petición y booking la revisa antes de enviarla.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el tipo de habitación contratada.
3. Consulta con `consultar-servicios-alojamiento` qué accesibilidad informa el alojamiento.
4. Prepara la petición de habitación adaptada en `crear-ticket-booking` para que booking la revise y la envíe.
5. Informa al cliente de que se le confirmará la respuesta del alojamiento.

## Qué no hace

- No asegura que el alojamiento sea accesible si no consta.
- No pide detalles de la discapacidad más allá de lo necesario para la habitación.

## Cuándo pasa a una persona

- El alojamiento no dispone de habitaciones adaptadas.
- Hace falta cambiar la reserva a otro tipo de habitación.

## Cómo lo puede pedir el cliente

- «Mi marido va en silla de ruedas, ¿tienen habitación adaptada?»
- «necesito ducha sin plato q no puedo levantar la pierna»
- «Hola, mi madre usa andador, hay escalones para entrar al hotel? y el traslado tiene rampa?»
- «Solicito una habitación adaptada para persona con movilidad reducida.»
