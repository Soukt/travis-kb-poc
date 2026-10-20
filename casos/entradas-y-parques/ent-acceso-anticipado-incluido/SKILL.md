---
name: ent-acceso-anticipado-incluido
description: El cliente quiere saber si su reserva de hotel con entradas incluye
  acceso anticipado al parque antes de la apertura general.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

Aplica sobre todo a paquetes de hotel con entradas, donde algunos alojamientos ofrecen ventajas de acceso. El cliente quiere saber si tiene ese derecho y cómo usarlo.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` el alojamiento y las entradas contratadas.
3. Revisa con `consultar-condiciones-entrada` si las entradas incluyen acceso anticipado y en qué días.
4. Comprueba con `consultar-servicios-alojamiento` si el hotel ofrece esa ventaja a sus huéspedes y qué hay que presentar.
5. Explica al cliente si tiene acceso anticipado y cómo acreditarlo.

## Qué no hace

- No confirma ventajas que no figuren en las condiciones ni en los servicios del hotel.
- No añade el acceso anticipado a la reserva.

## Cuándo pasa a una persona

- El cliente afirma que se le ofreció el acceso anticipado al reservar y no aparece en su reserva.

## Cómo lo puede pedir el cliente

- «¿Con el hotel tenemos entrada antes de que abran al público?»
- «me dijeron q los del hotel entran antes al parque, es verdad?»
- «Buenos días, quisiera saber si nuestra reserva incluye el acceso anticipado y qué debemos mostrar.»
- «tenemos hora extra en el parque? y el desayuno del hotel a que hora empieza?»
