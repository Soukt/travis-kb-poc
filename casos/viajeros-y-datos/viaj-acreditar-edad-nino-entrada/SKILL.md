---
name: viaj-acreditar-edad-nino-entrada
description: El cliente pregunta si tendrá que demostrar la edad de un niño con
  entrada infantil o gratuita al llegar al parque.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando la reserva tiene entradas con tarifa infantil o el niño entra gratis, y el cliente no sabe si le pedirán un documento en taquilla.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-condiciones-entrada` las condiciones de las entradas infantiles.
3. Busca con `buscar-informacion` la respuesta aprobada sobre cómo acreditar la edad.
4. Explica al cliente qué llevar según lo que devuelvan las acciones.

## Qué no hace

- No da por hecho que no le pedirán nada.
- No cambia el tipo de entrada.

## Cuándo pasa a una persona

- La edad real del niño no corresponde con la entrada comprada.

## Cómo lo puede pedir el cliente

- «El niño entra gratis, ¿tengo que llevar algo que lo demuestre?»
- «me pediran el dni del niño en la entrada del parque?»
- «Buenos días, ¿qué documentación se exige para acreditar la edad en las entradas infantiles?»
- «Para la entrada infantil, ¿vale una foto del libro de familia en el móvil? ¿Y a qué hora abren?»
