---
name: aloj-entradas-incluidas-con-hotel
description: El cliente tiene una estancia con entradas al parque incluidas y
  pregunta si las recoge en el hotel o cómo las usa.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Cuando la reserva combina alojamiento y entradas y el cliente no sabe si se las dan en recepción o van aparte.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` que las entradas forman parte de la reserva.
3. Revisa con `consultar-bonos` si hay bono de entradas y si está disponible.
4. Consulta con `consultar-condiciones-entrada` cómo se canjean y si se recogen en el alojamiento.
5. Responde con el procedimiento de canje que corresponda.

## Qué no hace

- No asegura que la recepción del hotel entregue las entradas si no consta.
- No modifica las fechas de las entradas.

## Cuándo pasa a una persona

- El alojamiento o el parque no reconocen las entradas incluidas.

## Cómo lo puede pedir el cliente

- «Las entradas del parque, ¿nos las dan en el hotel?»
- «tenemos hotel con entradas, donde las recogemos?»
- «Hola, en el bono del hotel no veo las entradas, van aparte? y valen para el día de llegada?»
- «Desearía saber cómo se hacen efectivas las entradas incluidas en mi estancia.»
