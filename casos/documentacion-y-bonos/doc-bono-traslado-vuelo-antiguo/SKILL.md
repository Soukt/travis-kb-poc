---
name: doc-bono-traslado-vuelo-antiguo
description: El cliente ha cambiado de vuelo o le han cambiado el horario y el
  bono del traslado sigue con el vuelo antiguo.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-traslados
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el bono del traslado muestra un número o una hora de vuelo que ya no son los del cliente.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-vuelo` el vuelo vigente y su horario.
3. Consulta con `consultar-traslados` los datos de vuelo y horario asociados al traslado.
4. Abre `crear-ticket-booking` con los datos del vuelo nuevo para que booking actualice el traslado.

## Qué no hace

- No modifica el traslado.
- No asegura que el traslado espere si no se actualiza.

## Cuándo pasa a una persona

- Siempre: actualizar el traslado requiere gestión con el proveedor.

## Cómo lo puede pedir el cliente

- «Me han cambiado el vuelo y el bono del traslado pone el antiguo»
- «el transfer tiene la hora vieja del vuelo, me van a recoger?»
- «El bono del traslado no refleja la modificación de horario de nuestro vuelo.»
- «cambié el vuelo por mi cuenta, ¿tengo que avisar a alguien del traslado?»
