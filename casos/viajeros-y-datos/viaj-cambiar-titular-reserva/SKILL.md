---
name: viaj-cambiar-titular-reserva
description: El cliente quiere que la titularidad de la reserva pase a otra persona.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el titular ya no quiere ser el responsable de la reserva, por ejemplo porque no viajará o porque otra persona se hará cargo de los pagos. Afecta a quién puede gestionar la reserva.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular actual.
2. Revisa con `consultar-reserva` los viajeros y el estado de la reserva.
3. Revisa con `consultar-pagos` si hay pagos pendientes, porque afectan al cambio de titular.
4. Pide con `pedir-datos-cliente` los datos del nuevo titular.
5. Abre con `crear-ticket-booking` la solicitud para que booking la valide.

## Qué no hace

- No cambia el titular ni el email de contacto.
- No acepta la petición si la hace alguien que no es el titular actual.
- No modifica el medio de pago de los cobros pendientes.

## Cuándo pasa a una persona

- Siempre: el cambio de titular lo valida booking.

## Cómo lo puede pedir el cliente

- «Quisiera que la reserva quedara a nombre de mi hermana, que es quien va a viajar.»
- «Hola, yo hice la reserva pero al final no voy, se puede poner a otra persona como titular?»
- «Solicito el cambio de titularidad de la reserva. ¿Qué datos de la nueva titular necesitan?»
- «Quiero pasar la reserva a nombre de mi pareja y que los próximos pagos se le cobren a ella.»
