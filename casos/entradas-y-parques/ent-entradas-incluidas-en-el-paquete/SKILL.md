---
name: ent-entradas-incluidas-en-el-paquete
description: El cliente ha reservado hotel con entradas y quiere saber qué
  entradas incluye exactamente su paquete.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica a reservas combinadas de alojamiento y entradas. El cliente quiere saber cuántos días de parque tiene, de qué parques y para qué viajeros.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` los servicios contratados y los viajeros.
3. Revisa con `consultar-bonos` qué bonos de entradas tiene emitidos.
4. Comprueba con `consultar-condiciones-entrada` los días y los parques que cubren las entradas.
5. Le resume qué incluye su paquete en cuanto a entradas.

## Qué no hace

- No añade entradas al paquete.
- No da por incluidos servicios que no figuran en la reserva.

## Cuándo pasa a una persona

- El cliente esperaba entradas que no figuran en la reserva.

## Cómo lo puede pedir el cliente

- «¿Qué entradas vienen con el hotel que he reservado?»
- «el paquete trae entradas para todos los dias o solo uno?»
- «Buenos días, querría confirmar qué entradas incluye mi reserva de hotel con parque.»
- «en el paquete entran los dos parques? y el desayuno?»
