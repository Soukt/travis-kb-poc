---
name: pago-nombre-del-cargo-en-extracto
description: El cliente pregunta con qué nombre o concepto aparecerán los cobros
  de la reserva en su banco.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Pregunta preventiva: quiere poder identificar los cobros en su extracto o avisar a su banco. No hay ningún cargo discutido.

## Qué hace el agente

1. Busca con `buscar-informacion` cómo aparecen los cobros de la agencia en los extractos.
2. Le explica el concepto o nombre comercial que figura en la respuesta aprobada.
3. Si ya tiene un cargo que no reconoce, le ofrece revisarlo tras comprobar su identidad.

## Qué no hace

- No inventa nombres comerciales ni conceptos.
- No revisa cargos sin comprobar antes la identidad.

## Cuándo pasa a una persona

- El cliente dice tener un cargo que no reconoce.
- No hay respuesta aprobada sobre el concepto de los cobros.

## Cómo lo puede pedir el cliente

- «¿Con qué denominación figurarán los cargos en mi extracto bancario?»
- «como sale el cobro en el banco? para saber cual es»
- «Hola, mi banco me bloquea pagos raros, ¿con qué nombre os voy a ver?»
- «en el extracto pondra el nombre de la agencia o el del hotel?»
