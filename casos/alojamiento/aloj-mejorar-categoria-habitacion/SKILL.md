---
name: aloj-mejorar-categoria-habitacion
description: El cliente quiere mejorar su habitación a una categoría superior o
  cambiar a otro tipo de habitación.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente pide una suite, una superior o se equivocó de tipo de habitación al reservar. Supone diferencia de precio y lo gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` la habitación y las fechas actuales.
3. Consulta con `consultar-politica-cancelacion` las condiciones de modificación.
4. Recoge el tipo de habitación deseado y abre un ticket con `crear-ticket-booking`.

## Qué no hace

- No cambia la habitación ni da precios.
- No promete disponibilidad de la categoría pedida.

## Cuándo pasa a una persona

- Siempre: el cambio de categoría implica una diferencia de precio.

## Cómo lo puede pedir el cliente

- «Nos gustaría cambiar a una habitación superior, ¿qué opciones hay?»
- «puedo pasar a suite? pago la diferencia»
- «Hola, reservé una individual por error y somos dos. Me la cambiáis a doble?»
- «Solicito la mejora de la categoría de habitación de mi reserva.»
