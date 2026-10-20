---
name: viaj-nombre-compuesto-cortado
description: El cliente ve que un nombre o apellido compuesto, o muy largo,
  aparece cortado o con las palabras pegadas en el billete o en el bono.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el nombre no cabe entero en los sistemas del proveedor y se ha truncado o unido. El cliente quiere saber si podrá viajar sin problemas.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` cómo está registrado el nombre completo.
3. Según los servicios, comprueba con `consultar-vuelo` o `consultar-trayecto-ferri` cómo figura en cada trayecto.
4. Busca con `buscar-informacion` la respuesta aprobada sobre nombres truncados.
5. Prepara la respuesta para el cliente y la deja para revisión de booking antes de enviarla.

## Qué no hace

- No solicita ningún cambio al proveedor.
- No asegura que el truncado se acepte si la información aprobada no lo indica.

## Cuándo pasa a una persona

- El nombre truncado no permite identificar al viajero o falta un apellido entero.
- El cliente quiere que se rehaga el billete o el bono.

## Cómo lo puede pedir el cliente

- «Tengo un nombre compuesto muy largo y en el billete sale cortado. ¿Puede darme problemas?»
- «en el billete del barco me han pegado los dos nombres, sin espacio, eso vale?»
- «Buenas tardes, el apellido de mi hijo aparece incompleto porque es muy largo. ¿Qué debo hacer?»
- «Me sale el nombre a medias en el bono y no sé tampoco a qué hora tengo que estar en el puerto.»
