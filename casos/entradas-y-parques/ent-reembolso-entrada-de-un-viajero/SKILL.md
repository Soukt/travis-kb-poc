---
name: ent-reembolso-entrada-de-un-viajero
description: El cliente pide la devolución de la entrada de un solo viajero que
  no podrá ir, manteniendo las demás.
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

Aplica cuando solo una parte del grupo cancela. Implica una cancelación parcial con dinero de por medio.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` las entradas y los viajeros.
3. Revisa con `consultar-politica-cancelacion` si se admite la cancelación parcial y con qué gastos.
4. Abre con `crear-ticket-booking` la solicitud indicando el viajero afectado.

## Qué no hace

- No cancela la entrada por su cuenta.
- No promete devolución.

## Cuándo pasa a una persona

- Siempre: hay dinero de por medio.

## Cómo lo puede pedir el cliente

- «Mi marido no podrá venir. ¿Me devolvéis su entrada?»
- «uno del grupo se ha roto la pierna, cancelamos solo la suya»
- «Solicito la cancelación de la entrada de uno de los viajeros, manteniendo el resto.»
- «se puede devolver una entrada sola o tienen q ser todas?»
