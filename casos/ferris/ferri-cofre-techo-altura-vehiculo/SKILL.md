---
name: ferri-cofre-techo-altura-vehiculo
description: El cliente lleva cofre, baca o portabicicletas en su vehículo y
  duda si sigue entrando en la categoría que reservó.
metadata:
  area: ferris
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El vehículo es el mismo que se reservó, pero con accesorios que pueden aumentar su altura o su longitud.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` la categoría de vehículo contratada.
3. Busca con `buscar-informacion` los límites aprobados de esa categoría y cómo cuentan los accesorios.
4. Prepara una respuesta con lo que dice la información aprobada para que booking la revise antes de enviarla.

## Qué no hace

- No da por buena una medida que la información aprobada no confirme.
- No da cifras de altura ni de longitud de memoria.

## Cuándo pasa a una persona

- El vehículo con los accesorios supera la categoría reservada y hay que cambiarla.
- No hay información aprobada sobre los límites de esa categoría.

## Cómo lo puede pedir el cliente

- «Llevamos un cofre en el techo, ¿cuenta para la altura del coche en el barco?»
- «con las bicis arriba del coche hay q pagar mas en el ferri?»
- «Buenas, ¿el portabicicletas trasero cambia la categoría del vehículo?»
- «Voy con la baca cargada hasta arriba, ¿algún problema para embarcar? Y otra cosa, ¿se puede bajar al coche durante el viaje?»
