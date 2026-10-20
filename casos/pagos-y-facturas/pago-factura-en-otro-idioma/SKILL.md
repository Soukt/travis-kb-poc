---
name: pago-factura-en-otro-idioma
description: El cliente necesita la factura de su reserva en otro idioma para
  presentarla fuera de España.
metadata:
  area: pagos-y-facturas
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-factura
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente, o su empresa en el extranjero, necesita la factura en un idioma distinto del español.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Consulta con `consultar-factura` la factura emitida.
3. Busca con `buscar-informacion` si se emiten facturas en otros idiomas.
4. Si no está contemplado, prepara la petición con `crear-ticket-booking` para que booking la revise.

## Qué no hace

- No traduce la factura por su cuenta.
- No promete un documento oficial traducido.

## Cuándo pasa a una persona

- No hay respuesta aprobada y el cliente lo necesita para un trámite oficial.

## Cómo lo puede pedir el cliente

- «¿Sería posible obtener la factura en inglés?»
- «la factura la necesito en frances para mi empresa»
- «Hola, trabajo en el extranjero y allí no entienden la factura en español»
- «factura en otro idioma se puede??»
