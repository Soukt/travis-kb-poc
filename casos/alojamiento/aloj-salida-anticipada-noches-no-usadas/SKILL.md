---
name: aloj-salida-anticipada-noches-no-usadas
description: El cliente tiene que dejar el alojamiento antes de lo previsto y
  pregunta si le devolverán las noches que no use.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente acorta la estancia una vez empezada o a punto de empezar. Implica posibles devoluciones y lo gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` las noches contratadas y las ya disfrutadas.
3. Consulta con `consultar-politica-cancelacion` las condiciones que aplican, sin adelantar el resultado.
4. Recoge el día de salida previsto y el motivo, y abre un ticket con `crear-ticket-booking`.

## Qué no hace

- No promete la devolución de las noches.
- No comunica la salida al alojamiento por su cuenta.

## Cuándo pasa a una persona

- Siempre: hay una posible devolución y depende del alojamiento.

## Cómo lo puede pedir el cliente

- «Tenemos que volver antes por un tema de trabajo, ¿nos devuelven las noches que quedan?»
- «nos vamos antes del hotel, me devolveis algo?»
- «Hola, el hotel no nos gusta y queremos irnos mañana. Perdemos todo? y el vuelo de vuelta se puede adelantar?»
- «Les comunico nuestra intención de abandonar el alojamiento antes de la fecha prevista.»
