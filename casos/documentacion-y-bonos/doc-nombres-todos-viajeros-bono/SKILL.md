---
name: doc-nombres-todos-viajeros-bono
description: El cliente ve que el bono solo muestra su nombre y quiere que
  aparezcan todos los viajeros.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el bono figura solo a nombre del titular y el cliente quiere incluir a los demás, por ejemplo porque llegarán en momentos distintos.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` qué viajeros constan con nombre.
3. Le explica que es habitual que el bono vaya a nombre del titular y, si aun así quiere incluir a todos, recoge sus nombres con `pedir-datos-cliente`.
4. Abre `crear-ticket-booking` con los nombres recogidos y el motivo.

## Qué no hace

- No añade nombres por su cuenta.
- No asegura que el proveedor permita incluirlos.

## Cuándo pasa a una persona

- Siempre que haya que añadir datos de otras personas a la reserva.

## Cómo lo puede pedir el cliente

- «En el bono solo salgo yo, ¿podéis poner a todos?»
- «mis amigos llegan antes q yo, el bono solo tiene mi nombre»
- «Solicito que se incluyan los nombres de todos los ocupantes en la documentación.»
- «¿hace falta que salgan los nombres de los niños en el bono?»
