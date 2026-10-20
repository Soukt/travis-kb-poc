---
name: otra-queja-formal-hoja-reclamaciones
description: El cliente quiere presentar una reclamación formal u hoja de
  reclamaciones contra la agencia o un proveedor de su reserva.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente pide expresamente reclamar de forma oficial, por escrito o mediante hoja de reclamaciones, sobre cualquier parte de su reserva.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Identifica con `consultar-reserva` la reserva y los servicios a los que se refiere la reclamación.
3. Busca con `buscar-informacion` el procedimiento aprobado para presentar reclamaciones formales y se lo explica.
4. Recoge con `pedir-datos-cliente` el motivo, lo que solicita y la documentación de apoyo.
5. Crea un ticket con `crear-ticket-booking` marcado como reclamación formal.

## Qué no hace

- No intenta disuadir al cliente de reclamar.
- No resuelve ni valora la reclamación.
- No inventa canales oficiales si no hay respuesta aprobada.

## Cuándo pasa a una persona

- Siempre: es una queja formal.

## Cómo lo puede pedir el cliente

- «Quiero poner una hoja de reclamaciones. ¿Cómo lo hago?»
- «Deseo presentar una reclamación formal por escrito contra la agencia.»
- «kiero reclamar oficialmente, ya estoy harto»
- «Voy a reclamar por lo del hotel y también por lo del traslado, ¿lo puedo meter todo en la misma?»
