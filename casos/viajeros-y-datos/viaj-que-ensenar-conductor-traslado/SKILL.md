---
name: viaj-que-ensenar-conductor-traslado
description: El cliente pregunta qué debe enseñar al conductor o en el mostrador
  para identificarse en el traslado.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-traslados
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente tiene un traslado contratado y quiere saber cómo le identificarán al llegar: con el bono, con el nombre del titular o de otra forma.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-traslados` el punto de encuentro y cómo se identifica al cliente.
3. Comprueba con `consultar-bonos` que el bono del traslado está disponible.
4. Explica al cliente qué llevar y a nombre de quién está el traslado.

## Qué no hace

- No da teléfonos del proveedor que no devuelvan las acciones.
- No cambia el nombre del titular del traslado.

## Cuándo pasa a una persona

- El titular del traslado no viaja y el conductor buscará su nombre.
- El bono del traslado no está disponible.

## Cómo lo puede pedir el cliente

- «Cuando llegue al aeropuerto, ¿cómo sabrá el conductor que soy yo?»
- «el del traslado me espera con un cartel o tengo q enseñar algo?»
- «Buenos días, ¿qué documentación debo presentar al proveedor del traslado?»
- «¿El traslado va a mi nombre o al de mi marido? Él llega en otro vuelo.»
