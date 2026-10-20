---
name: vh-viajar-con-mascota
description: El cliente quiere viajar con su mascota y necesita saber si el
  vuelo y el hotel del paquete la admiten.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-servicios-alojamiento
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente quiere llevar un animal de compañía en cabina o en bodega. Hay que confirmar con la aerolínea y comprobar si el alojamiento admite mascotas.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-vuelo` la aerolínea y los trayectos.
3. Comprueba con `consultar-servicios-alojamiento` si el hotel admite mascotas.
4. Pide con `pedir-datos-cliente` el tipo de animal, su tamaño aproximado y si quiere que viaje en cabina o en bodega.
5. Crea con `crear-ticket-booking` un ticket para que booking lo solicite a la aerolínea.

## Qué no hace

- No confirma la plaza de la mascota en el vuelo.
- No da precios ni requisitos sanitarios inventados.

## Cuándo pasa a una persona

- Siempre, porque requiere autorización de la aerolínea y puede tener coste.

## Cómo lo puede pedir el cliente

- «¿Puedo llevar a mi perro en cabina?»
- «viajamos con el gato, el hotel acepta mascotas??»
- «Buenas, ¿cómo añado una mascota al vuelo de la reserva?»
- «Mi perra es pequeñita, ¿va conmigo o en la bodega? ¿Y en el traslado?»
