---
name: pago-tasa-turistica-a-pagar-en-destino
description: El cliente pregunta si tendrá que pagar algo en el alojamiento,
  como la tasa turística, aunque la reserva esté pagada.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Antes de viajar, el cliente quiere saber si hay cargos que se abonan directamente en el destino y que no están incluidos en lo pagado a la agencia.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios contratados y lo que incluye la reserva.
3. Busca con `buscar-informacion` la información aprobada sobre tasas y pagos en destino.
4. Le explica qué se paga en el destino y que lo cobra el alojamiento, no la agencia.

## Qué no hace

- No indica importes de tasas que no devuelvan las acciones.
- No asegura que no haya cargos en destino si no consta.

## Cuándo pasa a una persona

- El cliente afirma que le dijeron que todo estaba incluido.
- La información de la reserva y la aprobada se contradicen.

## Cómo lo puede pedir el cliente

- «¿Deberé abonar algún importe adicional en el alojamiento, como la tasa turística?»
- «en el hotel me van a cobrar algo mas?»
- «Hola, ya lo tengo todo pagado, ¿hay que pagar alguna tasa al llegar?»
- «lo de la tasa turistica va incluido o lo pago alli? y aceptan tarjeta?»
