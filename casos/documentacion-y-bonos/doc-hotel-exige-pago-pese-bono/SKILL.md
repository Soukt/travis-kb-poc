---
name: doc-hotel-exige-pago-pese-bono
description: El cliente presenta el bono pero el alojamiento no lo acepta como
  pago y le exige abonar la estancia.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando en destino el alojamiento reconoce la reserva pero dice que no le consta el pago o rechaza el bono.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-pagos` que la reserva está pagada con la agencia.
3. Confirma con `consultar-bonos` que el bono que presenta es el vigente.
4. Abre `crear-ticket-booking` con prioridad, con lo que le han dicho en recepción y si el cliente ha pagado algo allí.

## Qué no hace

- No le dice al cliente que pague ni que no pague.
- No promete devolución de lo que pague en destino.

## Cuándo pasa a una persona

- Siempre: hay dinero de por medio y booking tiene que hablar con el alojamiento.

## Cómo lo puede pedir el cliente

- «El hotel dice que no les consta el pago y me quieren cobrar»
- «no aceptan el bono y me piden pagar la habitacion otra vez!!»
- «El establecimiento rechaza el bono y me exige el abono íntegro de la estancia.»
- «me han hecho pagar en recepción aunque llevaba el bono, ¿me lo devolvéis?»
