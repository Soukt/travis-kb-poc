---
name: ferri-mareo-durante-la-travesia
description: El cliente teme marearse en el barco y pregunta qué puede hacer o
  qué zona del barco le conviene.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente pregunta por el mareo de forma general antes del viaje, sin necesitar datos de su reserva.

## Qué hace el agente

1. Busca con `buscar-informacion` si la agencia tiene una respuesta aprobada sobre el mareo a bordo.
2. Comparte solo lo que recoja la información aprobada.
3. Recomienda consultar con un profesional sanitario o en la farmacia cualquier medicación.

## Qué no hace

- No recomienda medicamentos ni dosis.
- No da consejos médicos.

## Cuándo pasa a una persona

- El cliente quiere cambiar de acomodación o de trayecto por este motivo.

## Cómo lo puede pedir el cliente

- «Me mareo muchísimo, ¿qué me recomendáis para el barco?»
- «q parte del ferri se mueve menos? q yo me pongo fatal»
- «Buenas, ¿hay servicio médico a bordo por si alguien se marea?»
- «mi hija se marea en el coche, en el barco sera peor? cambiamos a camarote?»
