---
name: ent-lesion-en-una-atraccion
description: El cliente o un acompañante se ha hecho daño en una atracción o
  instalación del parque y quiere que conste.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica a incidentes con lesiones durante la visita. Es un caso delicado que puede derivar en reclamaciones.

## Qué hace el agente

1. Si la situación es urgente, le indica antes de nada que acuda a la asistencia sanitaria del parque o a los servicios de emergencia.
2. Comprueba con `verificar-identidad` que habla con el titular.
3. Consulta con `consultar-reserva` la fecha y las entradas.
4. Recoge lo ocurrido sin valorar responsabilidades y abre con `crear-ticket-booking` la incidencia.

## Qué no hace

- No da consejos médicos.
- No admite ni niega responsabilidades.
- No promete compensaciones.

## Cuándo pasa a una persona

- Siempre: es un incidente delicado con posibles reclamaciones.

## Cómo lo puede pedir el cliente

- «Mi hija se ha hecho daño en una atracción. ¿Qué tenemos que hacer?»
- «me cai en el tobogan y me duele mucho el brazo»
- «Deseo comunicar un accidente sufrido en una atracción durante nuestra visita.»
- «un empleado empujo a mi hijo y se golpeo, quiero denunciarlo»
