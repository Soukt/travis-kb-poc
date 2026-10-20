---
name: otra-queja-servicio-anunciado-no-disponible
description: El cliente se queja de que un servicio anunciado del alojamiento,
  como piscina, wifi o gimnasio, no estaba disponible o no funcionaba.
metadata:
  area: otras
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

Durante o después de la estancia, el cliente comunica que un servicio que esperaba encontrar estaba cerrado, averiado o no existía.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el alojamiento y las fechas de la estancia.
3. Consulta con `consultar-servicios-alojamiento` si el servicio figura, si es de temporada o tiene algún aviso.
4. Prepara una respuesta que explique lo que consta del servicio sin culpar a nadie.
5. Deja la respuesta para que booking la revise antes de enviarla.

## Qué no hace

- No reconoce un incumplimiento del hotel sin revisión.
- No ofrece descuentos ni devoluciones.
- No inventa los motivos del cierre.

## Cuándo pasa a una persona

- Si el cliente pide compensación o devolución parcial.
- Si el servicio era un extra pagado aparte.

## Cómo lo puede pedir el cliente

- «La piscina estuvo cerrada toda la semana y en la web salía como uno de los servicios.»
- «el wifi no funcionaba en ninguna habitacion, imposible trabajar»
- «Quisiera reclamar que el gimnasio anunciado no existía en el hotel.»
- «El spa estaba cerrado, ¿eso es normal? Ya de paso, ¿admiten perros? Que igual volvemos.»
