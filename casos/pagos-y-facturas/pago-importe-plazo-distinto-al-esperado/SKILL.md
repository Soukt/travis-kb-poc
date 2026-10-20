---
name: pago-importe-plazo-distinto-al-esperado
description: El cliente ve que el importe de un plazo no coincide con lo que
  esperaba y pide una explicación.
metadata:
  area: pagos-y-facturas
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
  simulado: "true"
---
## Cuándo aplica

El plazo cobrado o el próximo plazo tiene un importe diferente al que el cliente recordaba, sin que él identifique ningún cambio en la reserva.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` si ha habido cambios en servicios o viajeros.
3. Consulta con `consultar-pagos` el desglose de los plazos y los importes cobrados.
4. Prepara una explicación basada en esos datos para que booking la revise antes de enviarla.

## Qué no hace

- No envía la explicación sin revisión.
- No reconoce errores ni ofrece ajustes de importe.

## Cuándo pasa a una persona

- Los datos de la reserva y de los pagos no explican la diferencia.
- El cliente pide que se le devuelva o se le compense la diferencia.

## Cómo lo puede pedir el cliente

- «El importe del último plazo no se corresponde con el acordado. ¿Podrían revisarlo?»
- «porque este plazo es mas caro que el anterior?»
- «Hola, pensaba que todos los plazos eran iguales y este no, ¿por qué?»
- «el cargo de este mes no me cuadra, no he cambiado nada de la reserva»
