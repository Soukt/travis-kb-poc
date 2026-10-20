---
name: aloj-no-llegar-primera-noche
description: El cliente no podrá llegar la primera noche de su estancia y quiere
  conservar el resto sin que le anulen la reserva.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente avisa de que llegará con al menos una noche de retraso. Puede haber gastos o pérdida de la reserva, así que lo gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa fechas, noches y alojamiento con `consultar-reserva`.
3. Consulta con `consultar-politica-cancelacion` las condiciones de la reserva, sin adelantar decisiones.
4. Recoge el día previsto de llegada y el motivo, y abre un ticket urgente con `crear-ticket-booking`.
5. Explica al cliente que booking contactará con el alojamiento para intentar que no se anule la estancia.

## Qué no hace

- No garantiza que se mantengan las noches restantes.
- No promete el reembolso de la noche no utilizada.
- No modifica la reserva por su cuenta.

## Cuándo pasa a una persona

- Siempre: puede implicar gastos y depende de la respuesta del alojamiento.
- Con máxima prioridad si la llegada estaba prevista para esa misma noche.

## Cómo lo puede pedir el cliente

- «No podremos llegar la primera noche, ¿perderemos el resto de la reserva?»
- «nos han cambiado el vuelo y llegamos al dia siguiente, q pasa con el hotel»
- «Hola, por un problema familiar no llegamos el primer día. Me devolvéis esa noche?»
- «Les comunico que nos incorporaremos al alojamiento con una noche de retraso y les ruego que no anulen la reserva.»
