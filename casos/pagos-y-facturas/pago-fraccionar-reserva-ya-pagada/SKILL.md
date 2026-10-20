---
name: pago-fraccionar-reserva-ya-pagada
description: El cliente pagó la reserva entera y ahora quiere pasarla a pago a plazos.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente ya abonó el total y pide que se le devuelva una parte para pagarla a plazos. Implica devolver dinero y cambiar las condiciones contratadas.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Confirma con `consultar-pagos` que la reserva está pagada por completo.
3. Busca con `buscar-informacion` si existe alguna respuesta aprobada sobre este cambio.
4. Recoge la petición y la pasa con `crear-ticket-booking`.

## Qué no hace

- No promete devolver ninguna parte del pago.
- No crea un calendario de plazos.

## Cuándo pasa a una persona

- Siempre: implica devolver dinero y es una excepción a lo contratado.

## Cómo lo puede pedir el cliente

- «Abonamos la totalidad de la reserva, pero preferiríamos acogernos al pago fraccionado.»
- «lo pague todo y ahora me arrepiento, se puede pasar a plazos?»
- «Hola, no sabía que se podía pagar a plazos, ¿me devolvéis una parte y lo pago así?»
- «pague entero sin querer, queria fraccionarlo»
