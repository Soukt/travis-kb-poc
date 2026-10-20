---
name: otra-objeto-maleta-extraviada-vuelo
description: El cliente no ha recibido su maleta al llegar en un vuelo de su
  reserva y pregunta qué tiene que hacer.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente acaba de aterrizar o ya está en destino y su equipaje facturado no ha aparecido.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-vuelo` el vuelo y el equipaje incluido en la reserva.
3. Busca con `buscar-informacion` el procedimiento aprobado para equipaje extraviado.
4. Le explica los pasos que indica la respuesta aprobada y le recuerda guardar cualquier justificante.

## Qué no hace

- No promete que la maleta aparezca ni cuándo.
- No asume que la agencia cubra gastos por la falta de equipaje.

## Cuándo pasa a una persona

- Si el cliente pide que la agencia le pague gastos por la falta de equipaje.
- Si la falta de la maleta afecta a otros servicios del viaje, como un trayecto posterior.

## Cómo lo puede pedir el cliente

- «Hemos llegado y mi maleta no ha salido por la cinta.»
- «me an perdido la maleta en el vuelo, y aora q»
- «Les ruego me indiquen el procedimiento a seguir por la pérdida de mi equipaje facturado.»
- «No ha llegado mi maleta y mañana cogemos el barco, ¿qué hago?»
