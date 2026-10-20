---
name: otra-opinion-merece-pena-mejorar-habitacion
description: El cliente pregunta si merece la pena mejorar su habitación o su
  régimen y quiere la opinión del agente.
metadata:
  area: otras
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

El cliente se plantea pagar una mejora en su reserva actual y pide consejo antes de decidir.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-reserva` la habitación y el régimen actuales.
3. Revisa con `consultar-servicios-alojamiento` qué ofrece el alojamiento.
4. Le da la información objetiva para que decida él, sin opinar.

## Qué no hace

- No recomienda gastar más ni menos.
- No da precios de la mejora.

## Cuándo pasa a una persona

- Si decide contratar la mejora y hay que pedir precio y modificar la reserva.

## Cómo lo puede pedir el cliente

- «¿Merece la pena pagar más por la habitación con vistas?»
- «tu cogerías la media pension o mejor comer fuera?»
- «Me gustaría su valoración sobre si conviene ampliar el régimen contratado.»
- «¿Vale la pena la suite? Es nuestro aniversario y no sé si el hotel tiene spa.»
