---
name: viaj-documentos-checkin-hotel
description: El cliente pregunta qué documentos le pedirán en el alojamiento al
  llegar y si los necesitan todos los viajeros, también los niños.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente quiere llegar preparado a la recepción. Los alojamientos suelen registrar a los huéspedes y pueden pedir documentación a cada uno.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` los viajeros y el alojamiento.
3. Comprueba con `consultar-bonos` que el bono del alojamiento está disponible para presentarlo.
4. Busca con `buscar-informacion` la respuesta aprobada sobre la documentación en la llegada al alojamiento y se la explica al cliente.

## Qué no hace

- No afirma a partir de qué edad se exige documento si no consta.
- No envía el bono a un email distinto del de la reserva.

## Cuándo pasa a una persona

- El bono del alojamiento no está disponible.
- Algún viajero no tiene documento de identidad.

## Cómo lo puede pedir el cliente

- «¿Qué nos van a pedir en la recepción del hotel?»
- «tienen q llevar dni los niños para el hotel??»
- «Buenos días, ¿es necesario presentar la documentación de todos los huéspedes a la llegada?»
- «¿Qué llevo al hotel, el bono impreso y los DNI? ¿Y a qué hora puedo entrar?»
