---
name: aloj-peticion-habitacion-con-vistas
description: El cliente pide una habitación con vistas al mar, a la piscina o a
  la montaña sin haberla contratado como tal.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente quiere vistas como preferencia y su categoría no las garantiza. El agente prepara la petición y booking la revisa antes de enviarla.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` si la categoría ya incluye vistas.
3. Si no las incluye, prepara la petición como preferencia en `crear-ticket-booking` para que booking la revise y la envíe.
4. Explica al cliente que no está garantizada.

## Qué no hace

- No promete vistas que la categoría no incluye.
- No ofrece una mejora de pago.

## Cuándo pasa a una persona

- El cliente quiere pagar la diferencia por una habitación con vistas garantizadas.
- La categoría incluía vistas y el alojamiento no las respeta.

## Cómo lo puede pedir el cliente

- «¿Sería posible pedir una habitación con vistas al mar?»
- «q nos den vistas a la piscina porfa»
- «Hola, es nuestro viaje de novios y nos haría ilusión ver el mar desde la habitación. Y si cuesta más?»
- «Solicito, si la disponibilidad lo permite, una habitación con vistas.»
