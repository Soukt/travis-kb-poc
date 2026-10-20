---
name: doc-fecha-bono-formato-confuso
description: El cliente no entiende el formato de las fechas del bono y teme que
  estén mal porque parecen invertidas.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Bonos emitidos por proveedores extranjeros en los que el día y el mes aparecen en otro orden o con el mes abreviado en otro idioma.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Le confirma con `consultar-reserva` las fechas reales de la reserva escritas en formato claro.
3. Revisa con `consultar-bonos` que el bono que tiene es el vigente.
4. Le explica cómo leer las fechas del bono para que no tenga dudas en destino.

## Qué no hace

- No reemite el bono solo por el formato de fecha.
- No modifica la reserva.

## Cuándo pasa a una persona

- Las fechas del bono, leídas correctamente, siguen sin coincidir con la reserva.

## Cómo lo puede pedir el cliente

- «Las fechas del bono están al revés, ¿está bien?»
- «pone el mes primero y el dia despues, me he rayado»
- «El formato de fecha del documento me genera dudas sobre las noches reservadas.»
- «el bono está en otro idioma y no entiendo qué día entro, ¿me lo confirmáis?»
