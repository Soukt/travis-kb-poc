---
name: aloj-edad-menor-mal-indicada
description: El cliente se da cuenta de que indicó mal la edad de un niño al
  reservar el alojamiento y quiere corregirla.
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

Cuando la edad de un menor en la reserva no es la que tendrá en la estancia. Afecta a datos de otra persona y puede cambiar el precio, así que lo gestiona booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` cómo figuran los viajeros y sus edades.
3. Pide con `pedir-datos-cliente` la edad correcta del menor en las fechas de la estancia.
4. Abre un ticket con `crear-ticket-booking` para que booking compruebe el impacto con el alojamiento.

## Qué no hace

- No corrige la edad en la reserva por su cuenta.
- No anticipa si habrá suplemento o devolución.
- No aconseja mantener la edad incorrecta.

## Cuándo pasa a una persona

- Siempre: son datos de otro viajero y pueden implicar un cambio de precio.

## Cómo lo puede pedir el cliente

- «Al reservar puse mal la edad de mi hija, ¿cómo lo corrijo?»
- «me equivoque con la edad del niño, pasa algo en el hotel?»
- «Hola, mi hijo cumple años antes del viaje y no sé si cuenta como adulto, lo puse como niño. Y la cuna sigue valiendo?»
- «Deseo rectificar la edad de uno de los menores incluidos en la reserva.»
