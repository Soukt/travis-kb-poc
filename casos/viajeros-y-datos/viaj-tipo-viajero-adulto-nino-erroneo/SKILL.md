---
name: viaj-tipo-viajero-adulto-nino-erroneo
description: El cliente se da cuenta de que registró a un niño como adulto, o a
  un adulto como niño, al hacer la reserva.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el tipo de viajero elegido no corresponde con su edad real. Afecta al precio, a la ocupación de la habitación y a las condiciones de vuelos o entradas.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` cómo está registrado cada viajero.
3. Revisa con `consultar-pagos` lo pagado y lo pendiente.
4. Pide con `pedir-datos-cliente` la fecha de nacimiento real del viajero afectado.
5. Abre con `crear-ticket-booking` la corrección para que booking revise el impacto en precio y servicios.

## Qué no hace

- No calcula diferencias de precio.
- No aconseja dejarlo como está para ahorrar.

## Cuándo pasa a una persona

- Siempre: cambiar el tipo de viajero puede suponer un cargo o una devolución.

## Cómo lo puede pedir el cliente

- «Al reservar puse a mi hija como adulta y es menor. ¿Lo podéis corregir?»
- «me he dado cuenta de que puse al niño como adulto, me devolveis la diferencia?»
- «Creo que marqué a mi padre como niño por error al rellenar los viajeros.»
- «Les escribo porque uno de los menores figura como adulto y quiero saber si eso cambia las entradas del parque.»
