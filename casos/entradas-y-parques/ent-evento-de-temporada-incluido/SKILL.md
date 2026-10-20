---
name: ent-evento-de-temporada-incluido
description: El cliente pregunta si su entrada incluye el evento de temporada
  del parque, como las fiestas de otoño o de Navidad.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica cuando la visita coincide con un evento especial y el cliente quiere saber si accede a él o si necesita otra entrada.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` la fecha y el tipo de entrada.
3. Revisa con `consultar-condiciones-entrada` si incluye el evento y en qué horarios o zonas.
4. Responde con lo que consta y aclara lo que no.

## Qué no hace

- No asegura el acceso a zonas o pases nocturnos del evento si no constan.
- No cambia la entrada por una del evento.

## Cuándo pasa a una persona

- El cliente compró pensando en el evento y no está incluido.

## Cómo lo puede pedir el cliente

- «¿La entrada incluye lo de Halloween?»
- «el evento de navidad entra con la entrada normal?»
- «Buenos días, ¿nuestra visita coincide con el evento de temporada? ¿Está incluido?»
- «las actividades de la noche del evento se pagan aparte?»
