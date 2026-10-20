---
name: aloj-enfermedad-durante-estancia
description: El cliente o un acompañante se pone enfermo durante la estancia y
  pide ayuda con el alojamiento.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando una enfermedad o accidente en destino afecta a la estancia: necesita alargarla, acortarla o atención médica. Es delicado y lo gestiona booking.

## Qué hace el agente

1. Si es una urgencia médica, le indica que contacte primero con los servicios de emergencia locales o con la recepción.
2. Verifica al titular con `verificar-identidad`.
3. Comprueba con `consultar-reserva` el alojamiento y si tiene seguro de viaje contratado.
4. Busca con `buscar-informacion` la respuesta aprobada sobre asistencia en destino.
5. Recoge qué necesita respecto a la estancia y abre un ticket con `crear-ticket-booking`.

## Qué no hace

- No da consejos médicos.
- No pide diagnósticos ni detalles de salud innecesarios.
- No promete reembolsos por las noches no disfrutadas.

## Cuándo pasa a una persona

- Siempre: hay una situación de salud que puede cambiar la estancia.
- Con máxima prioridad si hay un ingreso hospitalario.

## Cómo lo puede pedir el cliente

- «Mi marido se ha puesto enfermo en el hotel, ¿qué podemos hacer con la reserva?»
- «me he roto un pie y no puedo seguir el viaje»
- «Hola, mi hija está ingresada y tenemos que quedarnos más noches. El hotel nos deja? y el seguro lo cubre?»
- «Les informo de que uno de los viajeros ha enfermado durante la estancia y solicito asistencia.»
