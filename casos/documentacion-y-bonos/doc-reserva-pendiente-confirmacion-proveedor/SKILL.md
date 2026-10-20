---
name: doc-reserva-pendiente-confirmacion-proveedor
description: El cliente no tiene bono porque su reserva sigue pendiente de
  confirmación por parte del proveedor.
metadata:
  area: documentacion-y-bonos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

La reserva figura como solicitada o bajo petición y el proveedor aún no la ha confirmado, por lo que no hay bono.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` el estado exacto de la reserva y qué servicio está pendiente.
3. Confirma con `consultar-bonos` que ese servicio aún no tiene bono.
4. Busca con `buscar-informacion` cómo funcionan las reservas pendientes de confirmación y prepara una respuesta clara para que booking la revise antes de enviarla.

## Qué no hace

- No da la reserva por confirmada.
- No promete un plazo de confirmación.
- No ofrece alternativas ni cancelaciones.

## Cuándo pasa a una persona

- La fecha del viaje está muy próxima y la reserva sigue pendiente.
- El cliente quiere cancelar o cambiar el servicio por la espera.

## Cómo lo puede pedir el cliente

- «Mi reserva pone pendiente de confirmar, ¿tengo hotel o no?»
- «Buenas, hice la reserva hace días y sigo sin bono, ¿está confirmada?»
- «Desearía conocer el estado de mi solicitud, ya que aún no dispongo de la documentación.»
- «esto cuando se confirma?? me voy pronto y no se si tengo alojamiento»
