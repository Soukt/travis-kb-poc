---
name: camb-cancelar-por-documentacion-invalida
description: El cliente no puede viajar porque su documentación no es válida
  para el destino o le han denegado un permiso de entrada.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Un viajero tiene el documento caducado o no tiene el permiso de entrada necesario, y el cliente quiere cancelar o cambiar. La documentación es responsabilidad del viajero, pero booking puede valorar el caso.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` el viajero afectado y los servicios.
3. Consulta con `consultar-politica-cancelacion` los gastos que aplicarían.
4. Pregunta si prefiere cancelar, cambiar las fechas o sustituir al viajero afectado.
5. Pasa el caso a booking con `crear-ticket-booking`.

## Qué no hace

- No asesora sobre requisitos de entrada del destino.
- No promete devolución.

## Cuándo pasa a una persona

- Siempre: implica cancelación o cambios con dinero de por medio.

## Cómo lo puede pedir el cliente

- «Me he dado cuenta de que tengo el pasaporte caducado y no llego a renovarlo, ¿qué hago con la reserva?»
- «Nos han denegado el visado, ¿podemos cancelar?»
- «mi hijo no tiene el pasaporte a tiempo, se puede cambiar o anular?»
- «Por un problema con la documentación de viaje, solicito la cancelación. ¿Tendría gastos?»
