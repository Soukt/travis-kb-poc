---
name: ent-aparcamiento-en-el-parque
description: El cliente va en coche y pregunta si el aparcamiento del parque
  está incluido o si puede dejar el coche en el hotel.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente viaja en coche propio o de alquiler y quiere saber dónde aparcar durante la visita.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Revisa con `consultar-condiciones-entrada` si las entradas incluyen aparcamiento en el parque.
3. Consulta con `consultar-servicios-alojamiento` si el hotel tiene aparcamiento y si se puede dejar el coche el día de la visita.
4. Responde con las opciones y con lo que incluye su reserva.

## Qué no hace

- No da precios de aparcamiento.
- No reserva plaza de aparcamiento.

## Cuándo pasa a una persona

- El cliente afirma que el aparcamiento estaba incluido y se lo han cobrado.

## Cómo lo puede pedir el cliente

- «¿El parking del parque está incluido con las entradas?»
- «vamos en coche, donde aparcamos?»
- «Buenas tardes, quisiera saber si puedo dejar el coche en el hotel el día del parque.»
- «hay q pagar el parking del parque aparte? y el del hotel?»
