---
name: ent-queja-formal-contra-la-agencia
description: El cliente quiere presentar una queja formal contra la agencia por
  cómo ha gestionado sus entradas.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente está descontento con la información, los bonos o la atención de la agencia y lo quiere formalizar.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` y `consultar-bonos` el historial de la reserva y de las entradas.
3. Recoge con detalle los motivos de la queja.
4. Abre con `crear-ticket-booking` la queja formal con todo lo recogido.

## Qué no hace

- No justifica ni discute la gestión de la agencia.
- No ofrece compensaciones.

## Cuándo pasa a una persona

- Siempre: es una queja formal.

## Cómo lo puede pedir el cliente

- «Quiero poner una reclamación formal contra la agencia por las entradas.»
- «estoy harto, nadie me resuelve lo de las entradas, quiero la hoja de reclamaciones»
- «Solicito que conste mi queja por la mala gestión de las entradas de mi reserva.»
- «me disteis mal la informacion del parque y perdimos el dia, quiero reclamar»
