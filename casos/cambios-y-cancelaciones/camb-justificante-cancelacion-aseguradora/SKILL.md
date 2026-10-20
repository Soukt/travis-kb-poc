---
name: camb-justificante-cancelacion-aseguradora
description: El cliente necesita un justificante de la cancelación y de los
  gastos para reclamarlo a su seguro de viaje.
metadata:
  area: cambios-y-cancelaciones
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-factura
  simulado: "true"
---
## Cuándo aplica

El cliente ha cancelado con gastos y su aseguradora le pide documentación. Hay que preparar la información correcta de la reserva y de la factura.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` que la reserva figura como cancelada.
3. Revisa con `consultar-factura` las facturas emitidas, incluida la de gastos si existe.
4. Prepara la respuesta con la documentación disponible y lo que falte, para que booking la revise y la complete.

## Qué no hace

- No redacta certificados con datos que no salgan de las acciones.
- No asesora sobre la póliza del seguro.

## Cuándo pasa a una persona

- La aseguradora pide un documento específico que no existe.
- La reserva no figura como cancelada.

## Cómo lo puede pedir el cliente

- «El seguro me pide un justificante de la cancelación, ¿me lo podéis dar?»
- «necesito un papel de los gastos de cancelacion para el seguro»
- «¿Me mandáis la factura de lo que me habéis cobrado al cancelar? Es para la aseguradora»
- «Solicito un certificado de cancelación con el detalle de los gastos para presentarlo a mi compañía de seguros.»
