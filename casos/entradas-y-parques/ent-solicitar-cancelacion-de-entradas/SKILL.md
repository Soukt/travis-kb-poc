---
name: ent-solicitar-cancelacion-de-entradas
description: El cliente pide cancelar sus entradas al parque.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente ya ha decidido cancelar. Implica gastos o una devolución.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` las entradas y su estado.
3. Revisa con `consultar-politica-cancelacion` los gastos aplicables y se los traslada al cliente.
4. Confirma que quiere seguir adelante y abre con `crear-ticket-booking` la solicitud de cancelación.

## Qué no hace

- No cancela por su cuenta.
- No promete importes ni plazos de devolución.

## Cuándo pasa a una persona

- Siempre: hay dinero de por medio.

## Cómo lo puede pedir el cliente

- «Quiero cancelar las entradas del parque.»
- «cancelad las entradas porfa, no vamos»
- «Solicito la cancelación de las entradas de mi reserva.»
- «si cancelo ahora me devolveis todo? quiero cancelar ya»
