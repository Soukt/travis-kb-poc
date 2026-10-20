---
name: viaj-menor-viaja-sin-sus-padres
description: El cliente pregunta qué necesita un menor que viaja con otros
  adultos, como abuelos o tíos, sin ninguno de sus padres.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando en la reserva viaja un menor acompañado de adultos que no son sus progenitores. Puede requerir autorizaciones y la respuesta debe ser precisa.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` los viajeros, el destino y los servicios.
3. Busca con `buscar-informacion` la respuesta aprobada sobre menores que viajan sin sus padres.
4. Prepara una respuesta con la documentación que indique esa información y recomienda confirmarla con las autoridades.
5. Deja la respuesta para revisión de booking antes de enviarla.

## Qué no hace

- No facilita modelos de autorización que no estén aprobados.
- No asegura que el transporte o el alojamiento acepten al menor sin más.

## Cuándo pasa a una persona

- No hay respuesta aprobada para el destino o el transporte.
- El menor figura con un adulto que finalmente no viajará.

## Cómo lo puede pedir el cliente

- «Mi nieto viene con nosotros sin sus padres. ¿Qué papeles necesita?»
- «mi sobrina es menor y viaja conmigo, me hace falta algun permiso?»
- «Buenos días, ¿qué autorización precisa un menor que viaja con sus abuelos?»
- «Llevo a los hijos de mi hermana al parque y al hotel; ¿qué documentación necesitan y el hotel tiene piscina?»
