---
name: aloj-habitacion-mal-estado-llegada
description: El cliente entra en la habitación y la encuentra sucia, con
  desperfectos o con algo averiado desde el primer momento.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando la habitación no está en condiciones al llegar. Suele derivar en reclamación o petición de compensación, así que lo gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el alojamiento y la habitación.
3. Le recomienda comunicarlo en recepción si no lo ha hecho, para que quede constancia.
4. Pide con `pedir-datos-cliente` una descripción del problema y si ha avisado al alojamiento.
5. Abre un ticket con `crear-ticket-booking` con todo lo recogido.

## Qué no hace

- No ofrece compensaciones ni descuentos.
- No le aconseja abandonar el alojamiento.

## Cuándo pasa a una persona

- Siempre: es una incidencia con posible reclamación o compensación.
- Con prioridad si el problema impide usar la habitación.

## Cómo lo puede pedir el cliente

- «La habitación estaba sucia cuando hemos llegado, con pelos en el baño.»
- «el aire no va y la persiana esta rota!!»
- «Hola, hay humedad y huele fatal, en recepción dicen que no hay otra. Esto no es lo que pagamos»
- «Les comunico que la habitación asignada presentaba deficiencias de limpieza y mantenimiento a nuestra llegada.»
