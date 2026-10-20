---
name: pago-gestoria-pide-factura-del-cliente
description: El cliente delega en un tercero, como su gestoría o un familiar,
  que escribe pidiendo la factura de su reserva.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Quien escribe no es el titular y no supera la verificación, pero dice actuar en su nombre. Implica datos de otra persona.

## Qué hace el agente

1. Intenta confirmar la titularidad con `verificar-identidad`.
2. Si no es el titular, no comparte ningún dato ni documento de la reserva.
3. Le explica que el titular puede descargar la factura desde su zona de cliente o autorizar la petición.
4. Deja constancia de la solicitud con `crear-ticket-booking` para que booking decida.

## Qué no hace

- No envía la factura a un tercero.
- No confirma si existe la reserva ni da ninguno de sus datos.

## Cuándo pasa a una persona

- Siempre: la petición la hace alguien distinto del titular.

## Cómo lo puede pedir el cliente

- «Les escribo desde la asesoría de nuestro cliente para solicitar su factura.»
- «soy su hija, me podeis mandar la factura de la reserva de mi madre?»
- «Hola, llevo la contabilidad de un cliente vuestro y necesito sus facturas»
- «mi marido hizo la reserva, mandadme a mi la factura que el no sabe»
