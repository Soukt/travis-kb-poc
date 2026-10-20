---
name: ent-documento-identidad-en-el-acceso
description: El cliente quiere saber si en el acceso al parque le pedirán
  documento de identidad junto con la entrada, para él o para los menores.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente duda de qué documentación debe llevar el día de la visita además del bono. Puede afectar al titular, a los acompañantes o a los menores.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que el interlocutor es el titular de la reserva.
2. Revisa con `consultar-condiciones-entrada` si el acceso exige documento identificativo y a qué viajeros.
3. Indica qué documentación debe llevar cada viajero según las condiciones.
4. Le recuerda que la documentación debe coincidir con los datos de los viajeros de la reserva.

## Qué no hace

- No da por hecho que no se pide documentación si las condiciones no lo mencionan.
- No valida documentos ni recoge copias de ellos por el chat.

## Cuándo pasa a una persona

- Algún viajero no dispone del documento que exigen las condiciones y pide una alternativa.

## Cómo lo puede pedir el cliente

- «¿Hace falta llevar el DNI para entrar al parque o solo el bono?»
- «los niños no tienen dni todavia, pasa algo?»
- «Buenas, ¿en el acceso comprueban la identidad de cada persona? Lo pregunto porque mi pareja tiene el pasaporte caducado.»
- «Hola, queria saber q documentos nos van a pedir en la entrada del parque y si el libro de familia vale para los peques.»
