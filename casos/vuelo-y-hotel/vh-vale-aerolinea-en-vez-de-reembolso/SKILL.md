---
name: vh-vale-aerolinea-en-vez-de-reembolso
description: El cliente ha recibido de la aerolínea un vale para otro vuelo en
  lugar del reembolso por una cancelación y no sabe si aceptarlo.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Tras una cancelación, la aerolínea ha contactado directamente con el cliente ofreciéndole un vale. El cliente prefiere el dinero o no sabe cómo encaja con su paquete.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Confirma con `consultar-vuelo` el vuelo cancelado.
3. Revisa con `consultar-pagos` lo pagado por la reserva.
4. Crea con `crear-ticket-booking` un ticket con lo que le ha ofrecido la aerolínea y lo que prefiere el cliente.
5. Le informa de que booking le orientará antes de que tome una decisión.

## Qué no hace

- No le aconseja aceptar ni rechazar el vale.
- No calcula importes.

## Cuándo pasa a una persona

- Siempre, porque hay dinero de por medio.

## Cómo lo puede pedir el cliente

- «La aerolínea me ofrece un vale, yo quiero el dinero»
- «me han dado un vale para otro vuelo, lo tengo q aceptar?»
- «Buenas tardes, ¿el vale de la aerolínea se puede usar con vosotros?»
- «no quiero vales, quiero el reembolso del vuelo y del hotel»
