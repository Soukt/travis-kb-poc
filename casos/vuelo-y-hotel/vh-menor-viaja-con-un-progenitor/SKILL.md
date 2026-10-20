---
name: vh-menor-viaja-con-un-progenitor
description: El cliente pregunta qué documentación o autorización necesita un
  menor que viaja solo con uno de sus padres o con otro familiar.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

En la reserva viaja un menor que no va con ambos progenitores. El cliente teme que le pidan algún permiso en el aeropuerto.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-reserva` los viajeros y el destino.
3. Busca con `buscar-informacion` la respuesta aprobada sobre menores que viajan sin uno de sus progenitores.
4. Prepara la respuesta y la envía con `crear-ticket-booking` para que booking la revise antes de enviarla.

## Qué no hace

- No da asesoramiento legal.
- No asegura si la autorización es obligatoria sin una respuesta aprobada.

## Cuándo pasa a una persona

- Siempre, porque booking revisa la respuesta antes de enviarla.

## Cómo lo puede pedir el cliente

- «Viajo solo con mi hijo, ¿necesito un permiso del otro progenitor?»
- «la niña va con sus abuelos, q autorizacion hace falta?»
- «Buenas, ¿qué documento debe llevar un menor que no viaja con sus padres?»
- «voy con mi sobrino, me pediran algo en el aeropuerto?»
