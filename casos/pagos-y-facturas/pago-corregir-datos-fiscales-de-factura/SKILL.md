---
name: pago-corregir-datos-fiscales-de-factura
description: El cliente detecta un error en sus propios datos fiscales de la
  factura y pide que se corrija.
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

La factura emitida tiene una errata en el nombre, el identificador fiscal o la dirección del propio cliente y necesita una factura corregida.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-factura` la factura y los datos que contiene.
3. Pide con `pedir-datos-cliente` solo los datos correctos que hay que cambiar.
4. Prepara la petición de corrección con `crear-ticket-booking` para que booking la revise.

## Qué no hace

- No corrige ni reemite la factura por su cuenta.
- No cambia el titular de la factura a otra persona.

## Cuándo pasa a una persona

- El cambio supone poner la factura a nombre de otra persona.
- El cliente necesita la corrección con urgencia para un trámite.

## Cómo lo puede pedir el cliente

- «He observado un error en mi NIF en la factura emitida.»
- «la factura tiene mal escrito mi apellido»
- «Hola, la dirección de la factura es la antigua, ¿me la podéis corregir?»
- «factura con datos mal, la necesito bien para declararla»
