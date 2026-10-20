---
name: aloj-menores-sin-adulto-acompanante
description: El cliente pregunta si unos menores pueden alojarse sin sus padres
  o con otro adulto que no es su tutor.
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

Cuando en la habitación habrá menores sin sus padres o tutores, por ejemplo con abuelos o en un viaje de estudios. Afecta a datos de terceros y a requisitos del alojamiento.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los viajeros y quién figura como adulto responsable.
3. Busca con `buscar-informacion` la respuesta aprobada sobre menores en alojamientos.
4. Abre un ticket con `crear-ticket-booking` para que booking confirme los requisitos con el alojamiento.

## Qué no hace

- No da asesoramiento legal sobre autorizaciones.
- No pide documentación de los menores por el chat.
- No confirma que el alojamiento lo acepte.

## Cuándo pasa a una persona

- Siempre: se trata de datos de menores y de requisitos que confirma el alojamiento.

## Cómo lo puede pedir el cliente

- «Mis hijos irán con sus abuelos, ¿necesitan alguna autorización en el hotel?»
- «somos un grupo de chavales menores, nos dejan hacer el check in?»
- «Hola, mi sobrino viene con nosotros sin sus padres, hay que llevar algún papel? y paga como niño?»
- «Quisiera conocer los requisitos para el alojamiento de menores no acompañados de sus progenitores.»
