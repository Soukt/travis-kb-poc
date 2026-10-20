---
name: otra-objeto-perdido-dentro-parque
description: El cliente perdió un objeto durante su visita al parque y pregunta
  cómo recuperarlo.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente fue al parque con entradas de su reserva y echa en falta algo que perdió allí.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-reserva` qué parque y en qué fecha fue la visita.
3. Busca con `buscar-informacion` el procedimiento aprobado para objetos perdidos en parques.
4. Le explica los pasos que figuran en la respuesta aprobada.

## Qué no hace

- No inventa un servicio de objetos perdidos ni sus datos de contacto.
- No asegura que el objeto aparezca.

## Cuándo pasa a una persona

- Si no hay respuesta aprobada para ese parque.
- Si lo perdido es documentación o un objeto de mucho valor y el cliente necesita ayuda con la gestión.

## Cómo lo puede pedir el cliente

- «Perdí la cartera en una atracción del parque, ¿hay objetos perdidos?»
- «a mi hijo se le cayo el movil en la montaña rusa, como lo recupero»
- «Desearía saber cómo proceder para recuperar unas gafas extraviadas durante la visita al parque.»
- «Se nos perdió una mochila en el parque. ¿Si volvemos mañana nos dejan entrar con la misma entrada?»
