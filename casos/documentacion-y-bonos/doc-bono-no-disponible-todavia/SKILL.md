---
name: doc-bono-no-disponible-todavia
description: El cliente ve que su bono aparece como no disponible y quiere saber
  por qué y cuándo lo tendrá.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

La reserva está hecha pero en la zona de cliente el bono figura como pendiente o no disponible, sin que haya pagos pendientes.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` el estado de la reserva y los servicios contratados.
3. Consulta con `consultar-bonos` el estado de cada bono y el motivo por el que no está disponible.
4. Busca con `buscar-informacion` cómo y cuándo se emiten los bonos según el tipo de servicio y se lo explica con esa información.

## Qué no hace

- No inventa fechas de emisión.
- No genera ni adelanta bonos por su cuenta.

## Cuándo pasa a una persona

- La reserva está confirmada, el viaje es inminente y el bono sigue sin estar disponible.
- Ni las acciones ni la información aprobada explican por qué no hay bono.

## Cómo lo puede pedir el cliente

- «En mi zona de cliente pone que el bono no está disponible, ¿es normal?»
- «por que no puedo ver el bono todavia?»
- «¿Cuándo estará disponible la documentación de mi viaje?»
- «El bono pone pendiente, ¿eso quiere decir que no tengo reserva?»
