---
name: ferri-cambiar-fecha-del-trayecto
description: El cliente quiere cambiar la fecha o la hora de su trayecto en
  barco a otra salida.
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

El cliente ya ha decidido viajar otro día o en otra salida, en la ida, en la vuelta o en ambas.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` el trayecto y los servicios que dependen de él.
3. Consulta con `consultar-politica-cancelacion` las condiciones de cambio.
4. Recoge la nueva fecha o salida que prefiere y abre un caso con `crear-ticket-booking`.

## Qué no hace

- No confirma disponibilidad en la nueva salida.
- No da importes del cambio.
- No modifica el resto de servicios sin que el cliente lo pida.

## Cuándo pasa a una persona

- Siempre: el cambio puede tener coste y depende de la disponibilidad.

## Cómo lo puede pedir el cliente

- «Necesito cambiar el barco de vuelta a otro día.»
- «se puede pasar el ferri al dia siguiente? q me ha surgido algo»
- «Buenos días, solicito modificar la fecha del trayecto de ida manteniendo el resto de la reserva.»
- «Quiero volver antes, ¿se puede adelantar el barco? ¿Y el hotel me lo devolvéis?»
