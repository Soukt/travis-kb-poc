---
name: aloj-reserva-cancelada-por-hotel
description: El cliente recibe un aviso de que el alojamiento ha anulado su
  reserva o no podrá alojarle en las fechas contratadas.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando la cancelación parte del alojamiento y no del cliente, antes del viaje. Hay dinero y alternativas de por medio, así que lo gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el estado actual de la reserva del alojamiento.
3. Revisa con `consultar-pagos` lo que el cliente tiene pagado.
4. Recoge cómo le llegó el aviso y abre un ticket con `crear-ticket-booking`.

## Qué no hace

- No confirma la cancelación si la reserva figura activa.
- No ofrece alternativas ni reembolsos por su cuenta.

## Cuándo pasa a una persona

- Siempre: hay que buscar alternativa o gestionar el reembolso.
- Con prioridad si el viaje es inminente.

## Cómo lo puede pedir el cliente

- «El hotel me ha escrito diciendo que cancela mi reserva, ¿qué pasa ahora?»
- «me han anulado el apartamento!!! y ahora donde dormimos»
- «Hola, me llega un correo del hotel de que cierra por temporada y no nos puede alojar. Me devolvéis el dinero o me buscáis otro?»
- «Les informo de que el establecimiento me ha notificado la cancelación de la reserva.»
