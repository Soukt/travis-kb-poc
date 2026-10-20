---
name: camb-cancelar-entradas-del-parque
description: El cliente quiere cancelar las entradas del parque que tiene en su reserva.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente no irá al parque y quiere anular sus entradas. Las entradas suelen tener condiciones de cancelación más estrictas que otros servicios.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Localiza las entradas con `consultar-reserva`.
3. Revisa con `consultar-condiciones-entrada` el tipo de entradas y su validez.
4. Consulta con `consultar-politica-cancelacion` si las entradas son cancelables y con qué gastos.
5. Pasa la cancelación a booking con `crear-ticket-booking`.

## Qué no hace

- No asegura devolución.
- No le propone revender las entradas.

## Cuándo pasa a una persona

- Siempre: hay una posible devolución.

## Cómo lo puede pedir el cliente

- «Queremos cancelar las entradas del parque, ¿se puede?»
- «¿Me devolvéis el dinero de las entradas si no vamos?»
- «anular entradas parque, gracias»
- «Solicito la anulación de las entradas incluidas en mi reserva.»
