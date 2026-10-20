---
name: doc-nombre-titular-mal-escrito-bono
description: El cliente ve que su nombre o apellido aparece mal escrito en el
  bono del alojamiento y quiere corregirlo.
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

Errores tipográficos en el nombre del titular o de un viajero en el bono de un alojamiento: una letra cambiada, un acento, nombre y apellido intercambiados.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` cómo figura el nombre en la reserva para ver si el error está en la reserva o solo en el bono.
3. Recoge con `pedir-datos-cliente` el nombre exacto tal como aparece en el documento de identidad.
4. Abre `crear-ticket-booking` con el dato erróneo, el correcto y el servicio afectado para que booking lo corrija con el proveedor.

## Qué no hace

- No corrige el nombre por su cuenta.
- No asegura que el proveedor acepte la corrección.
- No cambia un viajero por otro distinto.

## Cuándo pasa a una persona

- Siempre: la corrección de datos de viajeros la hace booking con el proveedor.

## Cómo lo puede pedir el cliente

- «Mi apellido está mal escrito en el bono»
- «han puesto mi nombre con una letra cambiada, pasa algo en el hotel?»
- «Les informo de que el nombre del titular figura de forma incorrecta en la documentación.»
- «me han puesto el nombre y el apellido al revés jaja, ¿hay que cambiarlo?»
