---
name: ent-recoger-entradas-en-el-hotel
description: El cliente pregunta si las entradas de su paquete se recogen en la
  recepción del hotel y cuándo puede hacerlo.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - consultar-horarios-hotel
  simulado: "true"
---
## Cuándo aplica

Aplica a paquetes de hotel y entradas en los que el canje se hace en el alojamiento. El cliente quiere saber si podrá tenerlas antes de ir al parque.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Revisa con `consultar-condiciones-entrada` dónde y cómo se recogen las entradas.
3. Consulta con `consultar-horarios-hotel` el horario de entrada al alojamiento por si coincide con la recogida.
4. Explica cuándo y dónde tendrá las entradas y qué debe presentar.

## Qué no hace

- No asegura que la recepción entregue las entradas antes del horario de entrada si no consta.
- No da horarios de recepción que no devuelva la acción.

## Cuándo pasa a una persona

- El hotel no tiene las entradas del cliente cuando llega.

## Cómo lo puede pedir el cliente

- «¿Las entradas nos las dan en el hotel al llegar?»
- «llegamos pronto, podemos coger las entradas antes de q nos den la habitacion?»
- «Buenas tardes, ¿en qué momento se entregan las entradas incluidas en el paquete con hotel?»
- «no tengo bono de entradas, me dicen que las tiene el hotel, es asi?»
