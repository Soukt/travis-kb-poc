---
name: ferri-mejorar-a-camarote
description: El cliente tiene butaca en su trayecto y quiere cambiarla por un
  camarote u otra acomodación superior.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente ya ha decidido mejorar la acomodación en uno o en varios trayectos.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` la acomodación actual de cada trayecto.
3. Pide con `pedir-datos-cliente` los trayectos afectados y el tipo de acomodación que desea.
4. Abre un caso con `crear-ticket-booking` y explica que booking le confirmará disponibilidad y precio.

## Qué no hace

- No confirma la disponibilidad de camarotes.
- No da precios de la mejora.

## Cuándo pasa a una persona

- Siempre: la mejora implica un cargo.

## Cómo lo puede pedir el cliente

- «Quiero cambiar las butacas por un camarote en el viaje de ida.»
- «se puede pasar a camarote? q la butaca toda la noche no la aguanto»
- «Buenos días, solicito presupuesto para mejorar la acomodación a camarote exterior en ambos trayectos.»
- «¿Queda algún camarote libre? Pagaría la diferencia sin problema.»
