---
name: viaj-viajero-duplicado-reserva
description: El cliente ve que un mismo viajero aparece dos veces en la reserva
  o que figuran más personas de las que reservó.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando la reserva muestra viajeros repetidos o de más, normalmente por un error al rellenar el formulario. Puede haber un cobro de más.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` los viajeros registrados y confirma la duplicidad.
3. Revisa con `consultar-pagos` lo pagado para que booking tenga el contexto.
4. Abre con `crear-ticket-booking` la incidencia con el viajero duplicado y los servicios afectados.

## Qué no hace

- No elimina viajeros.
- No promete devoluciones ni ajustes de precio.

## Cuándo pasa a una persona

- Siempre: corregir la duplicidad puede implicar cambios de precio o devoluciones.

## Cómo lo puede pedir el cliente

- «En la reserva salgo dos veces, ¿me habéis cobrado por dos?»
- «Hola, aparecen tres adultos y solo somos dos. ¿Qué ha pasado?»
- «Buenos días, detecto un viajero repetido en la confirmación. Ruego lo revisen.»
- «me sale mi mujer duplicada y encima el bono no me deja descargarlo»
