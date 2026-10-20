---
name: pago-devolucion-menor-de-lo-comunicado
description: El cliente ha recibido una devolución por un importe menor del que
  se le había comunicado.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-politica-cancelacion
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La devolución ha llegado, pero el importe no coincide con lo que se le dijo o con lo que el cliente calcula según las condiciones.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-politica-cancelacion` los gastos aplicados.
3. Consulta con `consultar-pagos` lo pagado y lo devuelto.
4. Pasa la reclamación con `crear-ticket-booking`, con los importes que constan.

## Qué no hace

- No reconoce errores ni promete la diferencia.
- No discute el cálculo con el cliente.

## Cuándo pasa a una persona

- Siempre: es una reclamación de dinero.

## Cómo lo puede pedir el cliente

- «El importe reembolsado es inferior al que se me indicó.»
- «me habeis devuelto menos de lo q me dijisteis»
- «Hola, me ha llegado la devolución pero falta dinero, ¿por qué?»
- «esto no es lo que me tocaba, revisad las cuentas»
