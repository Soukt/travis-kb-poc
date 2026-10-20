---
name: camb-capacidad-habitacion-otra-persona
description: El cliente pregunta si en su habitación cabría una persona más
  antes de pedir que la añadan.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente está pensando en añadir a alguien y quiere saber si el tipo de habitación lo admite. Solo es una consulta.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Consulta con `consultar-reserva` el tipo de habitación y la ocupación actual.
3. Busca con `buscar-informacion` lo que la agencia tiene aprobado sobre capacidad y camas supletorias.
4. Le explica lo que se sabe y le indica que la confirmación final depende del alojamiento.

## Qué no hace

- No confirma la capacidad si la información no lo indica.
- No añade a nadie a la reserva.

## Cuándo pasa a una persona

- El cliente quiere añadir a la persona.
- No hay información sobre la capacidad de esa habitación.

## Cómo lo puede pedir el cliente

- «¿En la habitación que tenemos cabe una persona más?»
- «si viene mi suegra, ¿puede dormir en nuestra habitación o hay que coger otra?»
- «hay cama supletoria?? somos uno mas»
- «Querría saber la ocupación máxima de la habitación reservada.»
