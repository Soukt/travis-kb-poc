---
name: otra-queja-amenaza-publicar-redes-sociales
description: El cliente amenaza con publicar opiniones negativas o difundir su
  experiencia en redes sociales si no se atiende su queja.
metadata:
  area: otras
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente usa la amenaza de publicar como presión para que se resuelva algo de su reserva.

## Qué hace el agente

1. Responde con calma, sin entrar en la amenaza y centrándose en el problema de fondo.
2. Verifica la titularidad con `verificar-identidad`.
3. Consulta con `consultar-reserva` la reserva afectada para entender el problema.
4. Busca con `buscar-informacion` la respuesta aprobada para ese tipo de problema.
5. Prepara la respuesta y la deja para revisión de booking.

## Qué no hace

- No pide al cliente que no publique ni le ofrece nada a cambio.
- No responde con tono defensivo.
- No promete compensaciones para evitar la publicación.

## Cuándo pasa a una persona

- Si el problema de fondo es una queja formal o implica dinero.
- Si el cliente ya ha publicado y pide una respuesta oficial de la agencia.

## Cómo lo puede pedir el cliente

- «Si no me solucionáis esto hoy lo cuento todo en redes.»
- «voy a poner una reseña malisima en todas partes como no me hagais caso»
- «Les informo de que, de no recibir respuesta, publicaré mi experiencia en los portales de opiniones.»
- «O me arregláis lo del hotel o lo subo a redes, y quiero saber también cuándo me cobráis lo que falta.»
