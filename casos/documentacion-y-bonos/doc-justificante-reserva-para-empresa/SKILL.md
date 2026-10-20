---
name: doc-justificante-reserva-para-empresa
description: El cliente necesita un justificante de la reserva para presentarlo
  en su empresa o para un trámite administrativo.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-factura
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Viajes de trabajo o trámites en los que piden acreditar la reserva, sus fechas o su coste.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Busca con `buscar-informacion` qué tipo de justificantes ofrece la agencia y para qué sirve cada uno.
3. Revisa con `consultar-reserva` las fechas y servicios que tendría que acreditar.
4. Consulta con `consultar-factura` si hay facturas emitidas que sirvan como justificante y le indica dónde descargarlas.

## Qué no hace

- No redacta certificados ni cartas a medida.
- No cambia los datos fiscales de la factura.

## Cuándo pasa a una persona

- La empresa pide un documento con un formato o contenido que no ofrecen ni el bono ni la factura.
- Hace falta emitir la factura a nombre de una empresa.

## Cómo lo puede pedir el cliente

- «Necesito un justificante de la reserva para mi empresa»
- «en el curro me piden un papel que diga q estuve en ese hotel esas fechas»
- «Requiero un documento acreditativo de la reserva para presentarlo ante mi empleador.»
- «¿con el bono vale como justificante o necesito otra cosa para que me paguen las dietas?»
