---
name: pago-devolucion-vuelo-cancelado-por-aerolinea
description: El cliente tiene un vuelo de la reserva cancelado por la aerolínea
  y pide la devolución de su importe.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El vuelo aparece cancelado o el cliente ha recibido el aviso de la aerolínea, y prefiere el reembolso a una alternativa.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-vuelo` el estado del vuelo afectado.
3. Consulta con `consultar-pagos` lo pagado en la reserva.
4. Recoge si prefiere reembolso o alternativa y lo pasa con `crear-ticket-booking`.

## Qué no hace

- No promete reembolsos ni compensaciones de la aerolínea.
- No cancela el resto de servicios de la reserva.

## Cuándo pasa a una persona

- Siempre: implica una devolución.

## Cómo lo puede pedir el cliente

- «La compañía aérea ha cancelado nuestro vuelo; solicitamos el reembolso.»
- «me han cancelado el vuelo, quiero el dinero»
- «Hola, nos ha llegado que el vuelo de vuelta está cancelado, ¿qué pasa con el hotel y con el dinero?»
- «vuelo cancelado, devolucion o que opciones hay»
