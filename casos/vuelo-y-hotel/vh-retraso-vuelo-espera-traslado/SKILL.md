---
name: vh-retraso-vuelo-espera-traslado
description: El cliente sabe que su vuelo de llegada va con retraso y quiere
  asegurarse de que el traslado le esperará.
metadata:
  area: vuelo-y-hotel
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-traslados
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El retraso se conoce antes de aterrizar. El cliente teme quedarse sin transporte al hotel.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-vuelo` el estado y la nueva hora estimada de llegada.
3. Revisa con `consultar-traslados` las condiciones del traslado ante retrasos, si la acción las indica.
4. Prepara el aviso al proveedor y la respuesta al cliente, y los envía con `crear-ticket-booking` para que booking los revise antes de enviarlos.

## Qué no hace

- No asegura que el conductor espere si la acción no lo indica.
- No contrata otro traslado.

## Cuándo pasa a una persona

- Siempre, porque booking revisa el aviso antes de enviarlo al proveedor.

## Cómo lo puede pedir el cliente

- «El vuelo va con retraso, ¿el traslado nos esperará?»
- «avisad al del traslado q llegamos tarde»
- «Buenas, ¿el traslado sigue el estado del vuelo o hay que avisar?»
- «retrasan el vuelo y me preocupa quedarme sin transporte al hotel»
