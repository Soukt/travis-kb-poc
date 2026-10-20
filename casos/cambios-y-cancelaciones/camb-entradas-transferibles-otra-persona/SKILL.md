---
name: camb-entradas-transferibles-otra-persona
description: El cliente pregunta si sus entradas son nominativas o si puede
  usarlas otra persona en su lugar.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

El cliente o alguno de sus acompañantes no irá al parque y quiere saber si puede dar su entrada a otra persona.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Localiza las entradas con `consultar-reserva`.
3. Consulta con `consultar-condiciones-entrada` si las entradas son nominativas y qué se pide en el acceso.
4. Le explica si otra persona puede usarlas y en qué condiciones.

## Qué no hace

- No cambia los nombres de las entradas.
- No le anima a usar entradas nominativas con otra identidad.

## Cuándo pasa a una persona

- Las entradas son nominativas y el cliente quiere cambiar el nombre.
- Las condiciones no lo aclaran.

## Cómo lo puede pedir el cliente

- «¿Las entradas llevan nombre o puede ir cualquiera?»
- «No puedo ir al parque, ¿se las puedo dar a mi cuñada?»
- «si voy yo en vez de mi marido con su entrada pasa algo?»
- «¿Las entradas son personales e intransferibles? ¿Y a qué hora abre el parque?»
