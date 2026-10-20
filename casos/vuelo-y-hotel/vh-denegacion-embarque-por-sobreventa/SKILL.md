---
name: vh-denegacion-embarque-por-sobreventa
description: El cliente no ha podido embarcar porque la aerolínea vendió más
  plazas de las que había en el avión.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La aerolínea ha denegado el embarque al cliente por exceso de reservas. Puede haberle ofrecido otro vuelo o algún documento.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Confirma con `consultar-vuelo` el vuelo afectado.
3. Pide con `pedir-datos-cliente` el vuelo alternativo que le ofrece la aerolínea, los documentos que le hayan entregado y los gastos que tenga.
4. Crea con `crear-ticket-booking` un ticket con todo para reorganizar el viaje y valorar la reclamación.
5. Le recomienda guardar cualquier documento o justificante que le dé la aerolínea.

## Qué no hace

- No fija compensaciones ni importes.
- No le aconseja aceptar o rechazar lo que le ofrezca la aerolínea.
- No modifica el hotel ni los traslados por su cuenta.

## Cuándo pasa a una persona

- Siempre, por la posible compensación y la reorganización del viaje.

## Cómo lo puede pedir el cliente

- «No nos han dejado embarcar porque el vuelo estaba lleno, ¿esto es legal?»
- «overbooking!! nos han dejado en tierra»
- «Buenas, la aerolínea nos ofrece volar mañana, ¿qué pasa con la noche de hotel que perdemos?»
- «nos han dicho q no hay sitio en el avion y nos dan un papel, q hago con el?»
