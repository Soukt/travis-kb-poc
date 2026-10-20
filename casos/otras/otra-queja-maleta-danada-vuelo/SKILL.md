---
name: otra-queja-maleta-danada-vuelo
description: El cliente se queja de que su equipaje llegó roto o dañado en un
  vuelo de su reserva y pregunta cómo reclamar.
metadata:
  area: otras
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente ha recogido su maleta dañada al llegar y quiere saber a quién y cómo reclamar.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-vuelo` el vuelo y el equipaje incluido en la reserva.
3. Busca con `buscar-informacion` el procedimiento aprobado para reclamar daños de equipaje.
4. Prepara una respuesta con los pasos y le recuerda conservar los justificantes, para que booking la revise.

## Qué no hace

- No asume que la agencia pague la reparación.
- No inventa plazos ni requisitos de reclamación.

## Cuándo pasa a una persona

- Si el cliente pide que la agencia le pague el daño.
- Si la aerolínea se niega a tramitar la reclamación y el cliente pide ayuda.

## Cómo lo puede pedir el cliente

- «La maleta ha llegado con una rueda rota y la cremallera reventada.»
- «me han destrozado la maleta en el vuelo, a quien reclamo?»
- «Quisiera saber cómo proceder ante los daños sufridos en mi equipaje durante el vuelo.»
- «La maleta llegó rota y además nos faltaba una bolsa, ¿qué hago con cada cosa?»
