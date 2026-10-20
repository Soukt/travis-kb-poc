---
name: aloj-media-pension-almuerzo-o-cena
description: El cliente tiene media pensión y pregunta si la comida incluida es
  el almuerzo o la cena y si puede elegir.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente con media pensión quiere saber qué comida, además del desayuno, tiene incluida.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Confirma con `consultar-reserva` que el régimen es media pensión.
3. Consulta con `consultar-servicios-alojamiento` cómo aplica el alojamiento la media pensión.
4. Responde si es almuerzo o cena y si el alojamiento permite cambiarla.

## Qué no hace

- No promete que se pueda cambiar la cena por el almuerzo.
- No aclara si las bebidas entran cuando el alojamiento no lo indica.

## Cuándo pasa a una persona

- El alojamiento aplica la media pensión de forma distinta a lo contratado.

## Cómo lo puede pedir el cliente

- «Con la media pensión, ¿qué comida tenemos incluida además del desayuno?»
- «media pension es comida o cena??»
- «Hola, como estaremos de excursión, podemos cambiar la cena por la comida algún día? el agua entra?»
- «Desearía saber en qué consiste la media pensión del establecimiento.»
