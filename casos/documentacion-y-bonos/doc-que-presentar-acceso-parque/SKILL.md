---
name: doc-que-presentar-acceso-parque
description: El cliente pregunta qué tiene que enseñar en la entrada del parque
  para acceder con las entradas compradas.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Reservas con entradas a un parque en las que el cliente quiere saber si accede directamente con el bono o tiene que canjearlo antes.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Confirma con `consultar-bonos` que las entradas están emitidas y disponibles.
3. Consulta con `consultar-condiciones-entrada` si el acceso es directo o requiere canje, el horario y si piden algún documento adicional.
4. Le explica paso a paso qué hacer al llegar a la entrada.

## Qué no hace

- No inventa colas, taquillas ni procedimientos que no figuren en las condiciones.
- No modifica las entradas.

## Cuándo pasa a una persona

- Las entradas no están emitidas y la visita es inminente.

## Cómo lo puede pedir el cliente

- «¿Con el bono entro directamente al parque o tengo que ir a taquilla?»
- «q enseño en la puerta del parque?»
- «Les agradecería que me indicaran el procedimiento de acceso con las entradas adquiridas.»
- «para entrar al parque llevo el bono y ya? los niños tambien necesitan algo?»
