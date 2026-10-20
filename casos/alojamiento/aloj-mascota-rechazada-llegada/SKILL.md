---
name: aloj-mascota-rechazada-llegada
description: El cliente llega al alojamiento con su mascota y no le dejan entrar
  con ella pese a que creía que estaba admitida.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el alojamiento rechaza a la mascota en la llegada. Es una incidencia en destino con posible reclamación y la gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` si la mascota consta en la reserva.
3. Comprueba con `consultar-servicios-alojamiento` qué indica el alojamiento sobre mascotas.
4. Recoge el motivo que le han dado y abre un ticket urgente con `crear-ticket-booking`.

## Qué no hace

- No promete alojamiento alternativo ni reembolso.
- No discute con el alojamiento en nombre del cliente.
- No da por válida ninguna versión antes de que booking lo revise.

## Cuándo pasa a una persona

- Siempre y con prioridad: el cliente está en destino con el animal y sin solución.
- Si se trata de un perro de asistencia, se indica expresamente en el ticket.

## Cómo lo puede pedir el cliente

- «El hotel no nos deja entrar con el perro y ponía que se admitían mascotas.»
- «no dejan pasar a mi perra!!! q hacemos ahora»
- «Hola, dicen que el perro es muy grande y que no puede quedarse. Estamos en recepción, me devolvéis el dinero si nos vamos?»
- «Les comunico que el establecimiento ha denegado la entrada a nuestra mascota y solicito su intervención.»
