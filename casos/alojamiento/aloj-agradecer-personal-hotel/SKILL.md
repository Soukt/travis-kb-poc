---
name: aloj-agradecer-personal-hotel
description: El cliente quiere felicitar o dar las gracias al personal del
  alojamiento por el trato recibido.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente comparte una experiencia positiva y quiere que llegue al alojamiento. El agente prepara el mensaje y booking lo revisa antes de enviarlo.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el alojamiento y las fechas de la estancia.
3. Agradece al cliente el comentario y recoge lo que quiere transmitir.
4. Prepara el mensaje de agradecimiento en `crear-ticket-booking` para que booking lo revise y lo traslade al alojamiento.

## Qué no hace

- No publica opiniones en nombre del cliente.
- No incluye en el mensaje datos personales del cliente que no sean necesarios.

## Cuándo pasa a una persona

- El agradecimiento viene acompañado de una queja sobre otro aspecto de la estancia.

## Cómo lo puede pedir el cliente

- «Queríamos dar las gracias al personal del hotel por lo bien que nos han tratado.»
- «el chico de recepcion fue un crack, decidselo!!»
- «Hola, todo genial en el apartamento, la dueña encantadora. Se lo podéis hacer llegar? Y por cierto, la factura?»
- «Desearía trasladar mi felicitación al equipo del establecimiento por la atención recibida.»
