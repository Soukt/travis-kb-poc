---
name: doc-reenvio-bono-sigue-sin-llegar
description: El cliente ha pedido varias veces el reenvío del bono y sigue sin
  recibirlo en su correo.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando los reenvíos automáticos ya se han hecho y el bono no llega, aunque el cliente ha revisado todas sus carpetas de correo.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` que la reserva está activa.
3. Confirma con `consultar-bonos` que los bonos están disponibles para descarga y le ofrece esa vía mientras tanto.
4. Abre `crear-ticket-booking` con el historial de intentos, lo que ha revisado el cliente y la fecha del viaje para que booking investigue el envío.

## Qué no hace

- No sigue reenviando el bono indefinidamente.
- No lo envía a otra dirección distinta de la de la reserva.

## Cuándo pasa a una persona

- Siempre que los reenvíos no hayan funcionado: el problema de entrega lo revisa booking.

## Cómo lo puede pedir el cliente

- «Ya me lo habéis reenviado varias veces y no me llega nada»
- «sigo sin bono!! he mirado en spam y en todos lados»
- «Pese a haber solicitado el reenvío en varias ocasiones, la documentación no ha llegado a mi bandeja.»
- «no llega el correo, ¿no será que lo tenéis mal apuntado?»
