---
name: camb-anadir-pasajero-trayecto-ferri
description: El cliente quiere añadir un pasajero que no figura en su trayecto en ferri.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-trayecto-ferri
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Viajará una persona más en el barco y no está en la reserva. Depende de la disponibilidad de la naviera y de la acomodación contratada.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los pasajeros actuales.
3. Consulta con `consultar-trayecto-ferri` el trayecto y la acomodación contratados.
4. Pide con `pedir-datos-cliente` los datos del nuevo pasajero que exige la naviera.
5. Pasa el alta a booking con `crear-ticket-booking`.

## Qué no hace

- No confirma plaza para el nuevo pasajero.
- No asegura que pueda ir en la misma acomodación.

## Cuándo pasa a una persona

- Siempre: son datos de otra persona y tiene coste.

## Cómo lo puede pedir el cliente

- «Se apunta un amigo al viaje, ¿podéis añadirlo al ferri?»
- «Hay que añadir a una persona más en el barco, ¿cómo se hace?»
- «añadir pasajero al ferry porfa, es mi hermano»
- «Solicito incluir un pasajero adicional en el trayecto marítimo. ¿Hay camarote para todos?»
