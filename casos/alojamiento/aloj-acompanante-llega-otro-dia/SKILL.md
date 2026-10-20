---
name: aloj-acompanante-llega-otro-dia
description: El cliente avisa de que uno de los viajeros de la reserva llegará
  al alojamiento más tarde que el resto del grupo.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando parte de los viajeros llega en otro momento pero la reserva no cambia. El agente prepara la nota para el alojamiento y booking la revisa.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba los viajeros y las fechas con `consultar-reserva`.
3. Recoge qué viajero se retrasa y cuándo llegará, sin pedir más datos de los que ya figuran en la reserva.
4. Prepara la nota para el alojamiento en `crear-ticket-booking` para que booking la revise y la envíe.

## Qué no hace

- No cambia fechas ni viajeros de la reserva.
- No pide documentación del viajero que se retrasa.
- No asegura descuentos por las noches que ese viajero no ocupe.

## Cuándo pasa a una persona

- El viajero ya no va a viajar o se sustituye por otra persona.
- El cliente pide que se le descuente algo por las noches no ocupadas.

## Cómo lo puede pedir el cliente

- «Mi pareja llegará al hotel más tarde que nosotros, ¿hay que avisar?»
- «mi hermano viene despues, le dejaran entrar solo?»
- «Hola, una de las personas de la reserva se incorpora luego. Tiene que llevar el bono también?»
- «Quería informar de que uno de los viajeros llegará posteriormente al alojamiento.»
