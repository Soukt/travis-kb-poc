---
name: aloj-reubicacion-otro-hotel
description: El cliente llega y el alojamiento le dice que no tiene habitación y
  que le envía a otro hotel.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el alojamiento reubica al cliente por sobreventa u otra causa. Puede haber diferencias de categoría y compensaciones, así que lo gestiona booking con urgencia.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el alojamiento y la categoría contratados.
3. Revisa con `consultar-bonos` los datos del bono por si el cliente necesita mostrarlos.
4. Recoge a qué alojamiento le envían, por cuántas noches y si le cubren el traslado, y abre un ticket urgente con `crear-ticket-booking`.

## Qué no hace

- No acepta ni rechaza la reubicación en nombre del cliente.
- No promete compensaciones.

## Cuándo pasa a una persona

- Siempre y con máxima prioridad: el cliente está en destino sin el alojamiento contratado.

## Cómo lo puede pedir el cliente

- «El hotel dice que está lleno y nos mandan a otro, ¿esto es normal?»
- «nos quieren llevar a otro hotel peor y lejos!!»
- «Hola, dicen que hay sobreventa y que vamos a otro la primera noche. Lo aceptamos? Nos van a compensar?»
- «Les comunico que el establecimiento nos ha reubicado en otro alojamiento sin aviso previo.»
