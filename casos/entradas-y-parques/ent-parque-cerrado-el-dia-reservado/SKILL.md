---
name: ent-parque-cerrado-el-dia-reservado
description: El cliente descubre que el parque está cerrado o no abre en la
  fecha para la que tiene entradas.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el calendario del parque muestra cierre en la fecha de las entradas, por temporada, mantenimiento o un cambio del propio parque. Implica un cambio de fecha o una devolución.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` la fecha de las entradas.
3. Revisa con `consultar-condiciones-entrada` el horario y el calendario que constan para esa fecha.
4. Recoge qué prefiere el cliente, cambio de fecha o devolución, y abre con `crear-ticket-booking` la solicitud con todo lo comprobado.

## Qué no hace

- No promete una devolución ni un cambio de fecha.
- No confirma el cierre basándose solo en lo que dice el cliente.

## Cuándo pasa a una persona

- Siempre: hay dinero o un cambio de condiciones de por medio.

## Cómo lo puede pedir el cliente

- «He visto que el parque está cerrado el día de nuestras entradas. ¿Qué pasa ahora?»
- «el parque no abre ese dia!! me habeis vendido entradas para un dia cerrado?»
- «Buenas tardes, según el calendario del parque, en la fecha reservada no hay apertura. Solicito una solución.»
- «dicen q cierran por obras justo ese dia, me devolveis el dinero o lo cambiamos?»
