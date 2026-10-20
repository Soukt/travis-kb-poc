---
name: pago-factura-a-nombre-de-empresa
description: El cliente reservó a título personal y ahora necesita que la
  factura salga a nombre de su empresa.
metadata:
  area: pagos-y-facturas
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-factura
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La factura está emitida, o va a emitirse, a nombre de la persona y el cliente pide que figure su empresa con sus datos fiscales.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Consulta con `consultar-factura` si ya hay factura emitida y a nombre de quién.
3. Pide con `pedir-datos-cliente` la razón social, el identificador fiscal y la dirección fiscal de la empresa.
4. Prepara la solicitud con `crear-ticket-booking` para que booking la revise y emita la factura.

## Qué no hace

- No modifica ni emite la factura.
- No confirma cuándo estará lista.

## Cuándo pasa a una persona

- La factura ya emitida no puede cambiarse y hay que valorar una rectificativa.
- Los datos fiscales aportados están incompletos.

## Cómo lo puede pedir el cliente

- «Necesitaría que la factura se emitiera a nombre de la sociedad, con su CIF.»
- «me podeis hacer la factura a nombre de mi empresa?»
- «Hola, el viaje lo paga la empresa, ¿cambiáis la factura? Os paso los datos»
- «factura a nombre de empresa porfa, que es para gastos»
