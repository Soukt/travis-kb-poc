---
name: ent-perro-de-asistencia-en-el-parque
description: El cliente pregunta si puede entrar al parque con su perro de
  asistencia y qué tiene que llevar.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Aplica a perros de asistencia o guía, que tienen un tratamiento distinto al de las mascotas. El cliente quiere saber los requisitos y las zonas con limitaciones.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Revisa con `consultar-condiciones-entrada` lo que dicen las entradas sobre perros de asistencia.
3. Busca con `buscar-informacion` las respuestas aprobadas sobre acceso con perros de asistencia y la documentación exigida.
4. Informa de los requisitos y de las atracciones o zonas donde puede haber limitaciones.

## Qué no hace

- No confunde perros de asistencia con mascotas.
- No inventa requisitos si no hay respuesta aprobada.

## Cuándo pasa a una persona

- El parque le ha denegado el acceso con su perro de asistencia.

## Cómo lo puede pedir el cliente

- «Voy con mi perro guía. ¿Puedo entrar al parque con él?»
- «mi perro de asistencia puede entrar? q papeles necesito?»
- «Buenas tardes, ¿qué documentación se exige para acceder con un perro de asistencia?»
- «el perro de asistencia puede subir a las atracciones o se queda con alguien?»
