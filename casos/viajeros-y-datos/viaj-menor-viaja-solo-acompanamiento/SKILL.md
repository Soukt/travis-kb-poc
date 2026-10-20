---
name: viaj-menor-viaja-solo-acompanamiento
description: El cliente quiere saber si un menor puede viajar sin ningún adulto
  en el vuelo o en el ferri de la reserva y cómo pedir acompañamiento.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - consultar-trayecto-ferri
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando un menor tiene que hacer un trayecto sin adultos, por ejemplo para reunirse con su familia. Suele requerir un servicio específico del transportista con condiciones propias.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` los viajeros y con `consultar-vuelo` o `consultar-trayecto-ferri` el trayecto afectado.
3. Busca con `buscar-informacion` la respuesta aprobada sobre menores que viajan solos.
4. Abre con `crear-ticket-booking` la petición con la edad del menor, el trayecto y quién le espera en destino, para que booking lo gestione con el transportista.

## Qué no hace

- No confirma que el menor pueda viajar solo.
- No contrata servicios de acompañamiento.
- No da precios del servicio.

## Cuándo pasa a una persona

- Siempre: el acompañamiento depende del transportista y puede tener coste.

## Cómo lo puede pedir el cliente

- «Mi hijo tiene que volver solo en el avión, ¿se puede?»
- «Buenos días, ¿ofrece la aerolínea servicio de acompañamiento para menores no acompañados?»
- «mi hija es menor y va sola en el barco a ver a su padre, que tengo q hacer»
- «¿Puede mi sobrino ir solo en el ferri si su madre le espera en el puerto? ¿Cuánto cuesta?»
