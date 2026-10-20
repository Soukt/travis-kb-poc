---
name: viaj-reserva-no-aparece-zona-cliente
description: El cliente no ve su reserva en la zona de cliente, normalmente
  porque la hizo con otro email o sin iniciar sesión.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente entra en su zona de cliente y no encuentra una reserva que sí tiene. Suele ocurrir si reservó con un email distinto al de su cuenta.

## Qué hace el agente

1. Comprueba con `verificar-identidad` la reserva con su localizador y el email usado al reservar.
2. Confirma con `consultar-reserva` que la reserva existe y su estado.
3. Busca con `buscar-informacion` la respuesta aprobada sobre cómo se asocian las reservas a la zona de cliente.
4. Explica al cliente los pasos que indique esa respuesta.

## Qué no hace

- No asocia la reserva a otra cuenta por su cuenta.
- No muestra datos si la verificación falla.

## Cuándo pasa a una persona

- La información aprobada indica que la asociación la debe hacer booking.
- La verificación falla con todos los emails que recuerda el cliente.

## Cómo lo puede pedir el cliente

- «Entro en mi zona de cliente y no me sale la reserva que hice.»
- «Hola, tengo cuenta pero la reserva no aparece, ¿la hice mal?»
- «no veo mi reserva en mi perfil, creo q la hice con el correo de mi novia»
- «Buenas, no encuentro la reserva en mi cuenta y necesito ver el horario del vuelo.»
