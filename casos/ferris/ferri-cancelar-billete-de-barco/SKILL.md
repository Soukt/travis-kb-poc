---
name: ferri-cancelar-billete-de-barco
description: El cliente quiere cancelar su trayecto en barco, ya sea un billete
  suelto o la parte marítima de un paquete.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente ha decidido no viajar en uno o en todos los trayectos en barco de su reserva.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` qué trayectos quiere cancelar y si forman parte de un paquete.
3. Consulta con `consultar-politica-cancelacion` los gastos que se aplicarían y se los explica.
4. Si confirma, abre un caso con `crear-ticket-booking` indicando qué cancela y qué mantiene.

## Qué no hace

- No ejecuta la cancelación.
- No promete devoluciones distintas de las condiciones.
- No da por hecho que cancelar el barco no afecte al resto del paquete.

## Cuándo pasa a una persona

- Siempre: hay gastos o devoluciones de por medio.

## Cómo lo puede pedir el cliente

- «Quiero cancelar el billete del barco.»
- «al final no vamos, cancelad el ferri porfa»
- «Buenas tardes, deseo anular el trayecto marítimo de mi paquete y mantener el hotel.»
- «Cancelo solo la vuelta en barco porque volveremos en coche por otro lado, ¿qué me devolvéis?»
