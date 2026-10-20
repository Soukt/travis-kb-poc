---
name: aloj-hay-aparcamiento-alojamiento
description: El cliente quiere saber si el alojamiento tiene aparcamiento, si es
  propio o público y si se paga aparte.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente viaja en coche y pregunta si podrá aparcar en el alojamiento o cerca.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` si la reserva incluye aparcamiento.
3. Consulta con `consultar-servicios-alojamiento` el tipo de aparcamiento, si hay que reservarlo y si tiene coste.
4. Responde si está incluido o se paga en el alojamiento, sin indicar importes.

## Qué no hace

- No reserva plaza de aparcamiento.
- No indica precios de aparcamiento.

## Cuándo pasa a una persona

- La reserva incluye aparcamiento y el alojamiento se lo cobra al cliente.

## Cómo lo puede pedir el cliente

- «¿El hotel dispone de aparcamiento?»
- «hay parking? es gratis o se paga»
- «Hola, vamos en coche desde casa, hay sitio para aparcar o tenemos que buscar en la calle? y el desayuno a qué hora es?»
- «Desearía saber si el alojamiento cuenta con plazas de aparcamiento para clientes.»
