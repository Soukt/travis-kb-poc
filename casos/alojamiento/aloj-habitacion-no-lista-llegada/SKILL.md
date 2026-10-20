---
name: aloj-habitacion-no-lista-llegada
description: El cliente ya está en el alojamiento pasada la hora de entrada y le
  dicen que su habitación todavía no está preparada.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-horarios-hotel
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente espera en recepción después de la hora oficial de entrada. El agente prepara la gestión con el alojamiento y booking la revisa.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Confirma la reserva y el tipo de habitación con `consultar-reserva`.
3. Comprueba con `consultar-horarios-hotel` que la hora oficial de entrada ya ha pasado.
4. Prepara en `crear-ticket-booking` un aviso urgente para que booking lo revise y contacte con el alojamiento.
5. Recomienda al cliente pedir en recepción una estimación y le mantiene informado.

## Qué no hace

- No ofrece compensaciones.
- No atribuye culpas al alojamiento ni al cliente.
- No promete un cambio de habitación.

## Cuándo pasa a una persona

- La espera se alarga mucho o el cliente pide una compensación.
- El alojamiento indica que no tiene habitación para el cliente.
- El cliente quiere presentar una queja formal.

## Cómo lo puede pedir el cliente

- «Llevamos un buen rato en recepción y nos dicen que la habitación no está lista, ¿pueden hacer algo?»
- «ya ha pasado la hora de entrada y seguimos sin habitacion!!»
- «Hola, estamos con los niños en el hall y no nos dan la habitación. Por cierto, la cena de hoy entra en la media pensión?»
- «Les comunico que, pasada la hora de entrada, nuestra habitación sigue sin estar disponible.»
