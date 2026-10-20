---
name: pago-reclamacion-formal-por-devolucion
description: El cliente presenta una queja formal por cómo se ha gestionado su
  devolución y anuncia que reclamará.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-pagos
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente está muy molesto, pide una hoja de reclamaciones o anuncia que acudirá a consumo o a un abogado por una devolución. Es un caso delicado.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Consulta con `consultar-pagos` el estado de la devolución.
3. Pide con `pedir-datos-cliente` un resumen de la queja y lo que solicita.
4. Registra la queja con `crear-ticket-booking`, marcándola como reclamación formal.
5. Responde con calma y le confirma que su queja queda registrada.

## Qué no hace

- No discute ni minimiza la queja.
- No ofrece soluciones económicas para calmarle.

## Cuándo pasa a una persona

- Siempre: es una queja formal con dinero de por medio.

## Cómo lo puede pedir el cliente

- «Deseo presentar una reclamación formal por la gestión de mi reembolso.»
- «quiero una hoja de reclamaciones, ya me habeis tomado el pelo bastante»
- «Hola, si no me devolvéis el dinero lo llevo a consumo»
- «voy a poner una denuncia, nadie me contesta lo de la devolucion»
