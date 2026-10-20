---
name: pago-cobrado-mas-que-precio-reserva
description: El cliente considera que se le ha cobrado en total más de lo que
  costaba su reserva.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - consultar-factura
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La suma de los cobros que ve el cliente supera el precio que recuerda haber aceptado al reservar, sin que identifique cambios ni extras.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` los servicios contratados y los posibles cambios.
3. Consulta con `consultar-pagos` todos los cobros realizados.
4. Revisa con `consultar-factura` el importe facturado.
5. Pasa el caso con `crear-ticket-booking` con lo que consta en cada fuente.

## Qué no hace

- No reconoce un sobrecobro ni promete devolver la diferencia.
- No hace cálculos que no se apoyen en los datos de las acciones.

## Cuándo pasa a una persona

- Siempre: el cliente reclama dinero.

## Cómo lo puede pedir el cliente

- «El importe total cargado supera el precio que se me indicó al formalizar la reserva.»
- «me habeis cobrado mas de lo que valia el viaje»
- «Hola, he sumado los pagos y me sale más caro que lo que ponía al reservar»
- «esto no es lo que pague en la web, hay un sobrecoste que nadie me ha explicado»
