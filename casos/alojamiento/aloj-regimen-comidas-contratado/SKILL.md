---
name: aloj-regimen-comidas-contratado
description: El cliente no recuerda qué régimen de comidas contrató con su
  alojamiento y quiere confirmarlo.
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

Cuando el cliente duda de si tiene solo alojamiento, desayuno, media pensión, pensión completa o todo incluido.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Consulta el régimen contratado con `consultar-reserva`.
3. Comprueba con `consultar-bonos` que el bono refleja el mismo régimen.
4. Responde con el régimen contratado y le recuerda que es el que figura en el bono.

## Qué no hace

- No cambia el régimen de la reserva.
- No explica el detalle de lo que incluye cada régimen si el cliente no lo pregunta.

## Cuándo pasa a una persona

- El régimen de la reserva y el del bono no coinciden.

## Cómo lo puede pedir el cliente

- «¿Podrían confirmarme si mi reserva incluye desayuno?»
- «tenemos media pension o solo desayuno? no me acuerdo»
- «Hola, cogí pensión completa o fue todo incluido? Y las bebidas entran?»
- «Desearía conocer el régimen alimenticio contratado en mi estancia.»
