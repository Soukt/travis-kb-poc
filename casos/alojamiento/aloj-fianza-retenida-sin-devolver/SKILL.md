---
name: aloj-fianza-retenida-sin-devolver
description: El cliente dejó una fianza o le retuvieron un importe en la tarjeta
  y, tras irse, no se lo han devuelto.
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

Cuando la fianza o la retención no se ha liberado después de la salida. Es una devolución de dinero y la gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el alojamiento y la fecha de salida.
3. Pide con `pedir-datos-cliente` cómo dejó la fianza y si le comunicaron algún motivo para retenerla.
4. Abre un ticket con `crear-ticket-booking` para que booking lo reclame al alojamiento.

## Qué no hace

- No indica plazos de devolución.
- No pide datos bancarios ni de la tarjeta.

## Cuándo pasa a una persona

- Siempre: es una devolución de dinero pendiente.

## Cómo lo puede pedir el cliente

- «Todavía no me han devuelto la fianza del apartamento.»
- «el hotel me sigue reteniendo dinero en la tarjeta y ya nos fuimos»
- «Hola, el propietario dice que no devuelve la fianza por una mancha en el sofá que ya estaba. Qué puedo hacer?»
- «Les comunico que el depósito entregado en el alojamiento no ha sido reintegrado.»
