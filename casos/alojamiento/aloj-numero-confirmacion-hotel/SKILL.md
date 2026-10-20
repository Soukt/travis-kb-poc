---
name: aloj-numero-confirmacion-hotel
description: El cliente necesita la referencia de confirmación del propio
  alojamiento, distinta del localizador de la agencia.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Cuando el alojamiento o el propio cliente piden la referencia interna del hotel para localizar la reserva.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Confirma con `consultar-reserva` que el alojamiento está confirmado.
3. Busca la referencia del alojamiento en el bono con `consultar-bonos`.
4. Le indica dónde figura la referencia si consta y para qué sirve en recepción.

## Qué no hace

- No inventa una referencia ni presenta el localizador de la agencia como si fuera la del alojamiento.
- No contacta con el alojamiento para obtenerla.

## Cuándo pasa a una persona

- La referencia no figura en el bono y el alojamiento la exige.
- El alojamiento no reconoce la referencia que figura en el bono.

## Cómo lo puede pedir el cliente

- «El hotel me pide el número de confirmación, ¿dónde lo encuentro?»
- «cual es el codigo del hotel? el vuestro no les vale»
- «Hola, para pedir una cuna me piden la referencia de su reserva, me la dais?»
- «Necesitaría el número de confirmación emitido por el establecimiento.»
