---
name: ferri-camarote-adaptado-movilidad-reducida
description: El cliente o un acompañante tiene movilidad reducida y quiere saber
  si su camarote está adaptado o solicitar uno que lo esté.
metadata:
  area: ferris
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Un viajero usa silla de ruedas o tiene dificultades de movilidad y necesita una acomodación accesible a bordo.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` el camarote contratado y si consta como adaptado.
3. Busca con `buscar-informacion` qué acomodaciones accesibles hay según la información aprobada.
4. Prepara la respuesta o la petición de camarote adaptado para que booking la revise antes de enviarla.

## Qué no hace

- No pide detalles médicos por el chat.
- No asegura que el camarote sea accesible si no consta.

## Cuándo pasa a una persona

- El cambio a camarote adaptado implica coste o no hay disponibilidad.
- El viajero necesita además asistencia en el embarque.

## Cómo lo puede pedir el cliente

- «Mi madre va en silla de ruedas, ¿el camarote está adaptado?»
- «necesito camarote adaptado, el q tengo lo es?»
- «Buenas tardes, solicito información sobre camarotes accesibles para persona con movilidad reducida.»
- «mi marido tiene problemas para subir escaleras, el camarote esta cerca del ascensor?»
