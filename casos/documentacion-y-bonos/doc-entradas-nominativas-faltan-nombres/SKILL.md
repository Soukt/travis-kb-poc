---
name: doc-entradas-nominativas-faltan-nombres
description: El cliente tiene entradas que deben ir a nombre de cada visitante y
  le faltan los nombres para poder emitirlas o usarlas.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Entradas nominativas en las que el parque exige el nombre de cada persona y la reserva no los tiene todos.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Consulta con `consultar-condiciones-entrada` si las entradas son nominativas y qué datos exigen.
3. Recoge con `pedir-datos-cliente` los datos requeridos de cada visitante mediante el formulario.
4. Abre `crear-ticket-booking` con los datos recogidos para que booking los traslade y se emitan las entradas.

## Qué no hace

- No emite las entradas.
- No pide más datos personales de los que exigen las condiciones.

## Cuándo pasa a una persona

- Siempre: son datos de otras personas y la emisión la gestiona booking.

## Cómo lo puede pedir el cliente

- «Me dicen que las entradas tienen que ir con el nombre de cada uno»
- «las entradas son nominales? no puse los nombres de los crios»
- «Les remito los nombres de los visitantes para la emisión de las entradas nominativas.»
- «¿qué datos de cada uno necesitáis para las entradas? somos un grupo grande»
