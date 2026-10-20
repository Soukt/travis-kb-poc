---
name: vh-menor-sentado-lejos-de-padres
description: El cliente ha facturado y la aerolínea ha sentado a un niño de la
  reserva lejos de los adultos con los que viaja.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La asignación automática de asientos ha separado a un menor de sus acompañantes adultos. El cliente necesita una solución antes de volar.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Confirma con `consultar-reserva` que en la reserva viaja un menor.
3. Revisa con `consultar-vuelo` el trayecto afectado.
4. Crea con `crear-ticket-booking` un ticket prioritario para que booking lo gestione con la aerolínea.
5. Le recomienda comentarlo también en el mostrador o en la puerta de embarque.

## Qué no hace

- No cambia asientos.
- No asegura que el cambio sea sin coste.

## Cuándo pasa a una persona

- Siempre, con prioridad si el vuelo es inminente.

## Cómo lo puede pedir el cliente

- «Han puesto a mi hija pequeña sola en otra fila»
- «el niño va separado de nosotros en el avion, esto no puede ser»
- «Buenas, al facturar nos han separado y viajamos con un menor, ¿qué hacemos?»
- «nos han dado asientos lejos y el crio es muy pequeño, ayudaa»
