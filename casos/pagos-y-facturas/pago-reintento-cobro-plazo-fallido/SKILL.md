---
name: pago-reintento-cobro-plazo-fallido
description: El cliente quiere saber si se volverá a intentar cobrar un plazo
  que falló o si debe pagarlo él.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente ya ha resuelto el problema de su medio de pago (saldo insuficiente o límite de la tarjeta) y quiere saber si el cobro se reintentará solo.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Consulta con `consultar-pagos` el estado del plazo fallido y si consta un nuevo intento.
3. Busca con `buscar-informacion` cómo funcionan los reintentos de cobro.
4. Le explica si debe esperar al reintento o pagarlo manualmente, y cómo.

## Qué no hace

- No lanza el cobro.
- No indica una fecha de reintento que no devuelva la acción.

## Cuándo pasa a una persona

- No consta ningún reintento y el cliente no puede pagar manualmente.
- El reintento vuelve a fallar sin causa aparente.

## Cómo lo puede pedir el cliente

- «¿Volverán a intentar el cargo del plazo que no se pudo cobrar?»
- «ya tengo saldo, me lo volveis a pasar o lo pago yo?»
- «Hola, el otro día no tenía dinero en la cuenta y falló el plazo, ¿se cobra solo otra vez?»
- «subí el límite de la tarjeta, ¿cuándo me lo volvéis a cobrar?»
