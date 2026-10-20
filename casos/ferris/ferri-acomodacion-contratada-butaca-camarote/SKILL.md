---
name: ferri-acomodacion-contratada-butaca-camarote
description: El cliente no recuerda o no tiene claro si en su trayecto en barco
  tiene butaca, camarote u otro tipo de acomodación.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-trayecto-ferri
  simulado: "true"
---
## Cuándo aplica

El cliente quiere saber qué acomodación tiene a bordo en la ida, en la vuelta o en ambas, y para cuántos viajeros.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` los viajeros de cada trayecto.
3. Obtiene con `consultar-trayecto-ferri` la acomodación contratada en cada trayecto.
4. Responde trayecto por trayecto con el tipo de acomodación y para quién es.

## Qué no hace

- No describe la acomodación con detalles que la acción no devuelva.
- No ofrece cambiarla por iniciativa propia.

## Cuándo pasa a una persona

- La acomodación que figura no es la que el cliente cree haber contratado.

## Cómo lo puede pedir el cliente

- «¿Tengo camarote o butaca en el barco de ida?»
- «q tenemos en el ferri, sitio pa dormir o solo asiento?»
- «Buenas tardes, quisiera conocer el tipo de acomodación contratada para el trayecto nocturno.»
- «¿El camarote es para todos o solo para dos? Y la vuelta, ¿también es igual?»
