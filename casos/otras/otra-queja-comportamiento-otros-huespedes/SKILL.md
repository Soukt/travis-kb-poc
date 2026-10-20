---
name: otra-queja-comportamiento-otros-huespedes
description: El cliente se queja de que otros huéspedes del alojamiento hacen
  ruido o tienen un comportamiento molesto durante su estancia.
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

El cliente está alojado y otros clientes del hotel le impiden descansar o disfrutar de las instalaciones.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-reserva` el alojamiento y las fechas de la estancia.
3. Busca con `buscar-informacion` la respuesta aprobada sobre incidencias de convivencia en el alojamiento.
4. Prepara una respuesta que le recomienda avisar en recepción en el momento, que es quien puede actuar, y la deja para revisión.

## Qué no hace

- No pide ni comenta datos de los otros huéspedes.
- No promete cambio de habitación.
- No sugiere que el cliente se enfrente a los otros huéspedes.

## Cuándo pasa a una persona

- Si el hotel no actúa y el cliente pide cambio de alojamiento o compensación.
- Si hay una situación de riesgo para la seguridad del cliente.

## Cómo lo puede pedir el cliente

- «Los de la habitación de al lado tienen fiesta cada noche y no hay quien duerma.»
- «un grupo en la piscina gritando y molestando todo el dia, y el hotel pasa»
- «Les escribo para informar de las molestias continuadas causadas por otros clientes del hotel.»
- «Hay unos vecinos de habitación muy ruidosos. ¿Puedo pedir otra? ¿Y la recepción está abierta toda la noche?»
