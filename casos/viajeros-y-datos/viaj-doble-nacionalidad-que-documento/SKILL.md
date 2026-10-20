---
name: viaj-doble-nacionalidad-que-documento
description: El cliente tiene doble nacionalidad y pregunta con qué pasaporte
  debe viajar y cuál debe constar en la reserva.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando un viajero tiene dos documentos válidos de distintos países y no sabe cuál usar. El que figure en el vuelo debe coincidir con el que presente.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` qué nacionalidad y documento constan para el viajero.
3. Si hay vuelos, comprueba con `consultar-vuelo` cómo figura el pasajero.
4. Busca con `buscar-informacion` la respuesta aprobada sobre viajeros con doble nacionalidad.
5. Prepara la respuesta y la deja para revisión de booking antes de enviarla.

## Qué no hace

- No recomienda un pasaporte concreto si la información aprobada no lo indica.
- No cambia el documento registrado.

## Cuándo pasa a una persona

- Hay que cambiar el documento registrado en algún servicio.
- No hay respuesta aprobada.

## Cómo lo puede pedir el cliente

- «Tengo dos nacionalidades; ¿con qué pasaporte viajo?»
- «puse el pasaporte de un pais y voy a llevar el otro, pasa algo?»
- «Buenos días, mi hijo tiene doble nacionalidad. ¿Qué documento debe figurar en la reserva?»
- «¿Con cuál de mis dos pasaportes hago la facturación online y tengo que cambiarlo en la reserva?»
