---
name: doc-poliza-seguro-no-recibida
description: El cliente contrató un seguro de viaje con la reserva y no ha
  recibido la póliza ni el certificado.
metadata:
  area: documentacion-y-bonos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando la reserva incluye un seguro y el cliente no encuentra la documentación de la cobertura.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` si el seguro figura entre los servicios contratados.
3. Busca con `buscar-informacion` cómo y cuándo se entrega la documentación del seguro.
4. Prepara la respuesta con esa información para que booking la revise antes de enviarla.

## Qué no hace

- No explica coberturas que no estén en la información aprobada.
- No tramita partes ni reclamaciones al seguro.

## Cuándo pasa a una persona

- El seguro no figura en la reserva aunque el cliente asegura haberlo pagado.
- El cliente necesita usar el seguro y no tiene la póliza.

## Cómo lo puede pedir el cliente

- «Contraté el seguro y no tengo la póliza»
- «donde esta el papel del seguro? no me ha llegado»
- «No he recibido el certificado del seguro de viaje contratado con la reserva.»
- «¿el seguro viene en el bono o va aparte? y ¿qué cubre?»
