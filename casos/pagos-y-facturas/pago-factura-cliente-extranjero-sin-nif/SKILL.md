---
name: pago-factura-cliente-extranjero-sin-nif
description: El cliente reside fuera de España, no tiene identificador fiscal
  español y necesita una factura válida con sus datos.
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

La factura no incluye su identificador fiscal extranjero ni su dirección en otro país, y el cliente la necesita para su propio sistema fiscal.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Revisa con `consultar-factura` los datos fiscales que figuran.
3. Pide con `pedir-datos-cliente` el identificador fiscal de su país y su dirección fiscal.
4. Prepara la petición con `crear-ticket-booking` para que booking la revise.

## Qué no hace

- No valida identificadores fiscales extranjeros.
- No asesora sobre la fiscalidad de otro país.

## Cuándo pasa a una persona

- El formato del identificador no encaja con lo que admite la factura.

## Cómo lo puede pedir el cliente

- «Resido en el extranjero y necesito que la factura incluya el número fiscal de mi país.»
- «no tengo nif español, como me haceis la factura?»
- «Hola, vivo fuera y en la factura no sale mi dirección de aquí»
- «la factura no me sirve en mi pais, le falta mi numero de contribuyente»
