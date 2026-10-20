---
name: ent-tarifa-senior-en-el-acceso
description: El cliente pregunta si hay tarifa reducida para mayores y qué
  tendrá que acreditar en el acceso si la tiene contratada.
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

Aplica cuando en la reserva viajan personas mayores y el cliente quiere saber si su entrada es la adecuada o qué documento le pedirán.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` el tipo de entrada de cada viajero.
3. Revisa con `consultar-condiciones-entrada` si existe tarifa para mayores, desde qué edad y cómo se acredita.
4. Informa de lo que tiene contratado y de la documentación necesaria.

## Qué no hace

- No cambia entradas de adulto por entradas de mayor.
- No calcula ni promete devoluciones por la diferencia.

## Cuándo pasa a una persona

- El cliente pide cambiar la entrada a tarifa de mayor o reclamar la diferencia.

## Cómo lo puede pedir el cliente

- «¿Hay descuento para jubilados en el parque?»
- «mis padres son mayores, les vale la entrada normal o tenian q llevar otra?»
- «Quisiera saber qué documentación debe presentar mi madre para la entrada de tarifa sénior.»
- «la entrada de mayores la piden con el dni? mi abuelo no lo lleva nunca»
