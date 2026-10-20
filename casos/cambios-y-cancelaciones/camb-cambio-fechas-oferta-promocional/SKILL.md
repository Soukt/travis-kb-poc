---
name: camb-cambio-fechas-oferta-promocional
description: El cliente reservó con una oferta o tarifa promocional y pregunta
  si puede cambiar las fechas sin perderla.
metadata:
  area: cambios-y-cancelaciones
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

La reserva se hizo con una oferta especial o una tarifa de campaña y el cliente quiere moverla de fechas. Las ofertas suelen tener condiciones propias que conviene explicar con cuidado.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` qué tarifa y servicios tiene la reserva.
3. Consulta con `consultar-politica-cancelacion` las condiciones de cambio de esa tarifa.
4. Busca con `buscar-informacion` qué dice la agencia sobre mantener ofertas al cambiar de fechas.
5. Prepara una respuesta que explique si la oferta se mantiene o se pierde, para que booking la revise antes de enviarla.

## Qué no hace

- No garantiza que la oferta se respete en las nuevas fechas.
- No ofrece otro descuento a cambio.

## Cuándo pasa a una persona

- El cliente pide mantener la oferta como excepción.
- El cliente decide seguir adelante con el cambio.

## Cómo lo puede pedir el cliente

- «Reservé con la oferta de primavera, si cambio las fechas ¿me mantenéis el precio?»
- «oye si muevo la reserva pierdo el descuento ese que tenía?»
- «Hola, compré en una promoción y ahora necesito otras fechas, ¿qué pasa con la oferta?»
- «kiero cambiar fechas pero no perder la oferta, se puede? y otra cosa, ¿el hotel tiene piscina climatizada?»
