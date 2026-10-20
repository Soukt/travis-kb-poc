---
name: otra-fuera-alcance-menores-viajan-sin-padres
description: El cliente pregunta qué autorización necesita un menor que viaja
  sin sus padres o con solo uno de ellos.
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

En la reserva viaja un menor acompañado de abuelos, tíos, amigos o de un solo progenitor y el cliente duda de la documentación.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-reserva` los viajeros y los servicios que incluyen desplazamientos.
3. Busca con `buscar-informacion` la información aprobada sobre documentación de menores.
4. Prepara una respuesta prudente que remite a las autoridades oficiales para confirmar, y la deja para revisión de booking.

## Qué no hace

- No afirma qué documentos son suficientes.
- No redacta autorizaciones.

## Cuándo pasa a una persona

- Si hay que cambiar o añadir viajeros en la reserva.
- Si la naviera, la aerolínea o el alojamiento exigen un documento concreto para el menor.

## Cómo lo puede pedir el cliente

- «Mi hijo viaja con sus abuelos, ¿necesita alguna autorización?»
- «mi hija menor va sola con su padre, hace falta permiso mio?»
- «Desearía conocer los requisitos documentales para un menor que viaja sin sus progenitores.»
- «Viene mi sobrino con nosotros, ¿qué papel necesitamos? ¿Hay que añadirlo a la reserva?»
