---
name: pago-matricula-del-vehiculo-en-factura-ferri
description: El cliente necesita que la factura de su trayecto en ferri incluya
  los datos del vehículo para justificar el gasto.
metadata:
  area: pagos-y-facturas
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - consultar-factura
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Viajó con vehículo en ferri, por ejemplo uno de empresa, y la factura no recoge la matrícula o el tipo de vehículo que le piden para justificarlo.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` el vehículo que consta en la reserva.
3. Consulta con `consultar-factura` qué datos incluye la factura.
4. Pide con `pedir-datos-cliente` la matrícula y los datos del vehículo que deban figurar.
5. Prepara la petición con `crear-ticket-booking` para que booking la revise.

## Qué no hace

- No modifica la factura.
- No cambia el vehículo de la reserva.

## Cuándo pasa a una persona

- El vehículo de la reserva no coincide con el que indica el cliente.

## Cómo lo puede pedir el cliente

- «Precisamos que la factura del trayecto marítimo incluya la matrícula del vehículo.»
- «en la factura del barco tiene que salir la matricula del coche de empresa»
- «Hola, mi empresa no me acepta la factura del ferri sin los datos de la furgoneta»
- «podeis meter la matricula en la factura? y de paso decirme a que hora hay que estar en el puerto»
