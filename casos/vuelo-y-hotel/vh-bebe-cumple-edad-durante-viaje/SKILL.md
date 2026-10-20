---
name: vh-bebe-cumple-edad-durante-viaje
description: El cliente avisa de que el bebé de la reserva cumple años durante
  el viaje y duda si en la vuelta necesitará asiento propio.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Entre la ida y la vuelta, un menor de la reserva cambia de tramo de edad para la aerolínea. Puede afectar a su tarifa, a su asiento o a su equipaje.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-reserva` cómo figura el menor en la reserva.
3. Obtiene con `consultar-vuelo` las fechas de ida y de vuelta.
4. Busca con `buscar-informacion` la respuesta aprobada sobre cambios de tramo de edad durante el viaje.
5. Crea con `crear-ticket-booking` un ticket para que booking lo compruebe con la aerolínea y lo regularice si hace falta.

## Qué no hace

- No calcula si cambia de tarifa sin la regla aprobada.
- No añade asientos ni da precios.

## Cuándo pasa a una persona

- Siempre, porque puede implicar un cargo y cambios en el billete.

## Cómo lo puede pedir el cliente

- «El bebé cumple años en mitad del viaje, ¿vuelve en brazos o necesita asiento?»
- «a la ida es bebe y a la vuelta ya no, pasa algo?»
- «Buenas, ¿qué edad cuenta para el billete del niño, la de la ida o la de la vuelta?»
- «mi peque cumple durante las vacaciones, me cobraran algo en el aeropuerto?»
