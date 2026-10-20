---
name: ferri-documentacion-identidad-para-embarcar
description: El cliente pregunta qué documento de identidad necesita cada
  viajero, incluidos los niños, para embarcar en su trayecto.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente quiere saber qué documentación tienen que llevar los viajeros de la reserva para pasar el control de embarque.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa los viajeros y sus edades con `consultar-reserva`.
3. Comprueba con `consultar-trayecto-ferri` si la ruta es nacional o internacional.
4. Busca con `buscar-informacion` la documentación aprobada para ese tipo de ruta y responde viajero por viajero.

## Qué no hace

- No da por válida documentación que la respuesta aprobada no mencione.
- No interpreta por su cuenta normativa de fronteras.

## Cuándo pasa a una persona

- Algún viajero tiene una situación documental particular, como nacionalidad o permiso de residencia, que la información aprobada no cubre.

## Cómo lo puede pedir el cliente

- «¿Qué documentación necesitamos para subir al barco? Vamos con niños pequeños.»
- «los crios necesitan dni para el ferri??»
- «Buenos días, ¿es suficiente el carné de conducir para embarcar o hace falta pasaporte?»
- «Somos de fuera, ¿con el permiso de residencia vale para el barco?»
