---
name: doc-entradas-recogida-en-hotel
description: El cliente tiene un paquete de alojamiento con entradas y pregunta
  si las entradas se recogen en el hotel.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Paquetes de alojamiento más entradas en los que el cliente no encuentra el bono de las entradas o cree que se las darán en recepción.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` que las entradas están incluidas en el paquete.
3. Consulta con `consultar-condiciones-entrada` cómo se entregan o canjean las entradas.
4. Confirma con `consultar-bonos` si existe un bono propio de las entradas y si está disponible.

## Qué no hace

- No supone que las entradas se recogen en el alojamiento si las condiciones no lo dicen.
- No añade entradas al paquete.

## Cuándo pasa a una persona

- Las entradas figuran en el paquete pero no hay bono ni forma de canje indicada.

## Cómo lo puede pedir el cliente

- «Las entradas del parque, ¿me las dan en el hotel?»
- «en el paquete venian entradas pero no las veo, se recogen alli?»
- «Desearía saber cómo se hacen efectivas las entradas incluidas en el paquete.»
- «¿tengo que ir a algún sitio a por las entradas o vienen con el bono del hotel?»
