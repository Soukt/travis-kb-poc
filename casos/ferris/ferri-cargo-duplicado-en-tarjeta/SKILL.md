---
name: ferri-cargo-duplicado-en-tarjeta
description: El cliente ve en su tarjeta un cargo repetido o un importe que no
  reconoce relacionado con su billete de barco.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente cree que se le ha cobrado dos veces o más de lo acordado por la reserva con barco.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-pagos` los pagos registrados en la reserva.
3. Recoge qué cargo no reconoce y en qué fecha lo ha visto, sin pedir datos completos de la tarjeta.
4. Abre un caso con `crear-ticket-booking` para que booking lo revise.

## Qué no hace

- No pide el número de la tarjeta ni sus códigos.
- No confirma ni promete devoluciones.
- No atribuye el cargo a la naviera sin revisarlo.

## Cuándo pasa a una persona

- Siempre: hay dinero de por medio.

## Cómo lo puede pedir el cliente

- «Me habéis cobrado dos veces el barco.»
- «me sale un cargo raro en la tarjeta q no se q es, es vuestro?»
- «Buenos días, he observado un cargo duplicado en mi extracto correspondiente a la reserva del ferri.»
- «Me cobrasteis el viaje y ahora otro cargo más, ¿qué es? Quiero que me lo devolváis ya.»
