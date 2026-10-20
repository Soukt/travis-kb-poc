---
name: otra-queja-acomodacion-ferri-distinta
description: El cliente se queja de que en el ferri le dieron una acomodación
  distinta a la contratada, por ejemplo butaca en vez de camarote.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente ya hizo el trayecto, o está a bordo, y la acomodación asignada no coincide con la que figura en su reserva.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Comprueba con `consultar-trayecto-ferri` qué acomodación figura en la reserva para ese trayecto.
3. Recoge con `pedir-datos-cliente` qué le asignaron a bordo, qué le dijo la naviera y si conserva la tarjeta de embarque.
4. Crea un ticket con `crear-ticket-booking` con la diferencia entre lo contratado y lo recibido.

## Qué no hace

- No promete devolver la diferencia.
- No da por hecho que el error se vaya a repetir o no en el trayecto de vuelta.

## Cuándo pasa a una persona

- Siempre: implica reclamación a la naviera y posible diferencia económica.
- Con prioridad si el trayecto de vuelta está próximo.

## Cómo lo puede pedir el cliente

- «Pagamos camarote y en el barco nos dieron butacas, pasamos la noche sin dormir.»
- «nos cambiaron el camarote por uno interior sin ventana y yo lo pedi exterior»
- «Les escribo para reclamar la acomodación del ferri, que no se correspondía con la contratada.»
- «En el barco de ida no nos dieron el camarote. ¿En el de vuelta lo tenemos seguro? ¿Y a qué hora hay que estar en el puerto?»
