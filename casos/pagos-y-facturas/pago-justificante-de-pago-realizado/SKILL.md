---
name: pago-justificante-de-pago-realizado
description: El cliente necesita un justificante de los pagos que ha hecho,
  distinto de la factura.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
    - consultar-factura
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Para un trámite (una ayuda, el reembolso de su empresa, una reclamación) le piden un comprobante de pago y no sabe si sirve la factura ni cómo obtenerlo.

## Qué hace el agente

1. Verifica la identidad con `verificar-identidad`.
2. Consulta con `consultar-pagos` los pagos realizados.
3. Revisa con `consultar-factura` si existe factura emitida.
4. Busca con `buscar-informacion` qué justificantes ofrece la agencia y cómo obtenerlos, y se lo explica.

## Qué no hace

- No redacta certificados propios.
- No incluye datos que no consten en las acciones.

## Cuándo pasa a una persona

- El trámite exige un documento con un formato específico.
- No existe respuesta aprobada sobre justificantes de pago.

## Cómo lo puede pedir el cliente

- «Requiero un justificante de los pagos efectuados para presentarlo en mi empresa.»
- «necesito un recibo de lo q he pagado, no la factura»
- «Hola, me piden un comprobante de pago para una ayuda, ¿me lo dais?»
- «vale la factura como justificante de pago o hay otro papel?»
