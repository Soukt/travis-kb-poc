---
name: aloj-hotel-reclama-pago-estancia
description: El cliente está en recepción y el alojamiento le pide pagar la
  estancia que ya tiene pagada con la agencia.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el alojamiento no tiene constancia del pago y exige cobrar al cliente. Hay riesgo de cobro duplicado, así que lo gestiona booking con urgencia.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el estado de la reserva.
3. Revisa con `consultar-pagos` que la estancia figura pagada.
4. Comprueba con `consultar-bonos` que el bono indica que la estancia está pagada, para que lo muestre en recepción.
5. Abre un ticket urgente con `crear-ticket-booking` para que booking contacte con el alojamiento.

## Qué no hace

- No le dice que pague de nuevo.
- No promete el reembolso si ya ha pagado.

## Cuándo pasa a una persona

- Siempre y con prioridad: posible cobro duplicado con el cliente en destino.

## Cómo lo puede pedir el cliente

- «En el hotel me piden que pague la estancia y ya la pagué a ustedes.»
- «me quieren cobrar el hotel otra vez!!»
- «Hola, dicen en recepción que no les consta el pago y que si no pagamos no nos dan la llave. Y la tasa también?»
- «Les comunico que el establecimiento me exige el abono de una estancia ya satisfecha.»
