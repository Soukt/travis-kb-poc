---
name: aloj-cargo-hotel-tras-salida
description: El cliente ve en su tarjeta un cargo del alojamiento después de
  haberse ido y no sabe a qué corresponde.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando aparece un cargo posterior a la estancia, como extras, daños o penalizaciones que el cliente no reconoce. Hay dinero de por medio y lo gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el alojamiento y las fechas de la estancia.
3. Pide con `pedir-datos-cliente` la fecha del cargo y el concepto que figura, sin datos de la tarjeta.
4. Abre un ticket con `crear-ticket-booking` para que booking lo aclare con el alojamiento.

## Qué no hace

- No pide el número de tarjeta ni datos bancarios.
- No asegura que el cargo sea indebido ni que se vaya a devolver.

## Cuándo pasa a una persona

- Siempre: es un cargo que el cliente no reconoce.

## Cómo lo puede pedir el cliente

- «Me han hecho un cargo del hotel después de irnos y no sé de qué es.»
- «el hotel me ha cobrado algo dias despues de irnos, q es esto»
- «Hola, me cobran unos daños de la habitación que no hicimos. Cómo reclamo?»
- «Les comunico un cargo del establecimiento en mi tarjeta posterior a la estancia que no reconozco.»
