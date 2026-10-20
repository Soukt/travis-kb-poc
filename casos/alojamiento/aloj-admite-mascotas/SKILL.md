---
name: aloj-admite-mascotas
description: El cliente pregunta si su alojamiento admite mascotas y en qué condiciones.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente quiere viajar con su perro, gato u otro animal y necesita saber si el alojamiento lo permite.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Identifica el alojamiento con `consultar-reserva`.
3. Consulta con `consultar-servicios-alojamiento` si admite mascotas, con qué límites y si cobra suplemento.
4. Busca con `buscar-informacion` la respuesta aprobada sobre cómo comunicar la mascota al alojamiento.
5. Responde con las condiciones que figuren, sin indicar importes.

## Qué no hace

- No confirma la admisión si la acción no lo indica de forma clara.
- No avisa al alojamiento de la mascota; eso se tramita aparte.

## Cuándo pasa a una persona

- El alojamiento no admite mascotas y el cliente quiere cambiar de alojamiento.

## Cómo lo puede pedir el cliente

- «¿El hotel admite perros?»
- «puedo llevar a mi gato al apartamento?»
- «Hola, tenemos un perro grande, nos dejan entrar con él? y puede quedarse solo en la habitación?»
- «Desearía conocer la política de admisión de mascotas del alojamiento.»
