---
name: pago-devolucion-a-tarjeta-ya-cancelada
description: El cliente tiene una devolución pendiente en una tarjeta o cuenta
  que ya ha dado de baja.
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

La devolución se hará, o se hizo, al medio de pago original, pero el cliente ya no tiene esa tarjeta o esa cuenta.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Consulta con `consultar-pagos` la devolución y el medio de pago original.
3. Pide con `pedir-datos-cliente` si la tarjeta está cancelada o sustituida y con qué entidad, sin números completos.
4. Pasa el caso con `crear-ticket-booking`.

## Qué no hace

- No cambia el destino de la devolución.
- No pide números completos de cuenta ni de tarjeta por el chat.

## Cuándo pasa a una persona

- Siempre: afecta a una devolución de dinero.

## Cómo lo puede pedir el cliente

- «El reembolso se va a realizar en una tarjeta que ya no está operativa.»
- «la tarjeta con la que pague ya no existe, donde me devolveis?»
- «Hola, me robaron la tarjeta y la anulé, ¿a dónde va la devolución?»
- «cerre la cuenta del banco, que pasa con mi reembolso»
