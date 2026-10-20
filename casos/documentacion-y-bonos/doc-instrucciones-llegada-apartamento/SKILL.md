---
name: doc-instrucciones-llegada-apartamento
description: El cliente no entiende las instrucciones de llegada y recogida de
  llaves que aparecen en el bono del apartamento.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - consultar-horarios-hotel
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

Alojamientos sin recepción permanente en los que el bono indica que hay que avisar de la llegada o recoger las llaves en otro sitio.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Confirma con `consultar-bonos` que tiene el bono vigente del alojamiento.
3. Consulta con `consultar-horarios-hotel` el horario de entrada y si admite llegada tarde.
4. Revisa con `consultar-servicios-alojamiento` si el alojamiento tiene recepción o un sistema de entrega de llaves, y le explica los pasos con esa información.

## Qué no hace

- No inventa direcciones ni códigos de acceso.
- No contacta con el alojamiento en nombre del cliente.

## Cuándo pasa a una persona

- Las instrucciones dicen que hay que contactar con el alojamiento y el cliente no ha podido hacerlo.
- Las acciones no devuelven información sobre la recogida de llaves.

## Cómo lo puede pedir el cliente

- «En el bono pone que tengo que avisar de mi llegada, ¿a quién?»
- «no entiendo donde recojo las llaves del apartamento»
- «Les ruego me aclaren las instrucciones de acceso indicadas en el bono del apartamento.»
- «llego tarde al piso, ¿hay alguien para darme las llaves o cómo va?»
