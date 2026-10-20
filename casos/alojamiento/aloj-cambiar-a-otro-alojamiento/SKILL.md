---
name: aloj-cambiar-a-otro-alojamiento
description: El cliente quiere cambiar el alojamiento reservado por otro
  distinto en el mismo destino y fechas.
metadata:
  area: alojamiento
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente, antes de viajar, prefiere otro hotel o apartamento. Implica gastos o diferencias de precio, así que lo decide booking.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Revisa el alojamiento, las fechas y los viajeros con `consultar-reserva`.
3. Consulta con `consultar-politica-cancelacion` los gastos de cambio que aplican, sin comprometer nada.
4. Recoge el motivo y el tipo de alojamiento que busca, y abre un ticket con `crear-ticket-booking`.
5. Explica al cliente que booking le propondrá opciones y le confirmará los costes.

## Qué no hace

- No cancela la reserva actual.
- No ofrece alojamientos alternativos ni precios.
- No asegura que el cambio sea gratuito.

## Cuándo pasa a una persona

- Siempre: el cambio de alojamiento puede suponer gastos y una nueva reserva.

## Cómo lo puede pedir el cliente

- «Querríamos cambiar de hotel manteniendo las mismas fechas, ¿es posible?»
- «me he arrepentido del hotel, me lo cambiais por otro?»
- «Hola, he leído opiniones malas del apartamento y quiero otro en la misma zona. Pierdo dinero?»
- «Solicito información para sustituir el alojamiento contratado por otro del mismo destino.»
