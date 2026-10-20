---
name: viaj-documento-propio-del-menor
description: El cliente pregunta si un niño de la reserva necesita su propio
  documento de identidad o si basta con el libro de familia.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando viajan niños pequeños o bebés y los padres no saben si tienen que sacarles DNI o pasaporte. Depende del destino y del tipo de transporte.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` las edades, el destino y los servicios.
3. Busca con `buscar-informacion` la respuesta aprobada sobre documentación de menores.
4. Prepara la respuesta indicando qué documento necesita cada menor según esa información y la deja para revisión de booking.

## Qué no hace

- No da por válido el libro de familia si la información aprobada no lo dice.
- No explica cómo tramitar documentos ante la administración.

## Cuándo pasa a una persona

- No hay respuesta aprobada para el destino o el transporte.
- El menor no tendrá documento a tiempo y el cliente plantea cambios en la reserva.

## Cómo lo puede pedir el cliente

- «¿Mi bebé necesita DNI para coger el avión?»
- «con el libro de familia vale para los crios o hay q sacarles el pasaporte?»
- «Buenas tardes, ¿qué documentación deben portar los menores que viajan con nosotros?»
- «El niño pequeño no tiene DNI; ¿pasa algo en el hotel y en el barco?»
