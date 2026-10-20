---
name: doc-estado-reserva-confirmada
description: El cliente solo quiere asegurarse de que su reserva está confirmada
  y todo está en orden antes de viajar.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Pregunta de tranquilidad: el cliente no tiene ningún problema concreto, solo quiere confirmación de que todo está bien.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Le confirma con `consultar-reserva` el estado, las fechas, los viajeros y los servicios contratados.
3. Le indica con `consultar-bonos` si los bonos ya están disponibles.
4. Le recuerda dónde puede descargarlos.

## Qué no hace

- No adorna ni amplía la información con datos que no devuelvan las acciones.
- No hace cambios en la reserva.

## Cuándo pasa a una persona

- La reserva tiene un estado distinto de confirmada o algún servicio aparece cancelado.

## Cómo lo puede pedir el cliente

- «Solo quería confirmar que mi reserva está todo bien»
- «esta todo ok con mi viaje? no quiero sorpresas»
- «Les escribo para verificar que la reserva se encuentra confirmada.»
- «¿Está confirmado el hotel? ¿Y los bonos ya están?»
