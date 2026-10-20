---
name: vh-agencia-hace-facturacion-por-cliente
description: El cliente pide que la agencia le haga la facturación online o le
  envíe directamente las tarjetas de embarque.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - buscar-informacion
    - verificar-identidad
    - consultar-vuelo
  simulado: "true"
---
## Cuándo aplica

El cliente no sabe o no puede facturar por su cuenta y espera que lo haga la agencia. Hay que aclarar qué está previsto.

## Qué hace el agente

1. Busca con `buscar-informacion` la respuesta aprobada sobre si la agencia hace la facturación de sus clientes.
2. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
3. Obtiene con `consultar-vuelo` la aerolínea operadora, para indicarle dónde se factura.
4. Le responde según la respuesta aprobada y, si debe hacerlo él, le orienta sobre dónde y cómo.

## Qué no hace

- No hace la facturación si la respuesta aprobada no lo contempla.
- No pide contraseñas ni accesos del cliente a la web de la aerolínea.

## Cuándo pasa a una persona

- Si el cliente no puede facturar por sí mismo por un motivo justificado y no hay alternativa aprobada.

## Cómo lo puede pedir el cliente

- «¿Me podéis hacer vosotros el check-in?»
- «no se hacer lo de facturar, lo haceis vosotros y me mandais las tarjetas?»
- «Buenas, ¿la agencia envía las tarjetas de embarque o las saco yo?»
- «no tengo impresora ni nada, me lo podeis hacer?»
