---
name: pago-cobro-entradas-en-taquilla-del-parque
description: El cliente tuvo que pagar en la taquilla del parque unas entradas
  que ya había pagado en su reserva.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - consultar-bonos
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

En el parque no aceptaron sus bonos o le dijeron que no constaban, y el cliente pagó de nuevo las entradas para poder entrar. Pide que se le devuelva ese pago.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-condiciones-entrada` las condiciones de acceso y canje de las entradas.
3. Comprueba con `consultar-bonos` el estado de los bonos de la reserva.
4. Pide con `pedir-datos-cliente` el justificante del pago en taquilla y lo que le dijeron en el parque.
5. Pasa la reclamación con `crear-ticket-booking`.

## Qué no hace

- No promete la devolución.
- No culpa al parque ni al cliente.

## Cuándo pasa a una persona

- Siempre: implica un reembolso.

## Cómo lo puede pedir el cliente

- «En el acceso al parque no aceptaron nuestros bonos y tuvimos que abonar las entradas de nuevo.»
- «pague las entradas dos veces, a vosotros y en la taquilla»
- «Hola, en el parque decían que el código no valía y pagamos allí, quiero mi dinero»
- «nos hicieron pagar en la puerta con los niños llorando, una vergüenza»
