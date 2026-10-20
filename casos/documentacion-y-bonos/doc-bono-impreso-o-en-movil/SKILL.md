---
name: doc-bono-impreso-o-en-movil
description: El cliente pregunta si tiene que llevar el bono impreso o le basta
  con enseñarlo en el móvil.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Duda habitual antes del viaje sobre el formato en que hay que presentar el bono, incluida la validez de una captura de pantalla.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` qué servicios tiene contratados.
3. Si hay entradas, consulta con `consultar-condiciones-entrada` si exigen formato impreso o admiten el móvil.
4. Busca con `buscar-informacion` la respuesta aprobada para el resto de servicios y le contesta servicio por servicio.

## Qué no hace

- No asegura que una captura de pantalla sirva si la información no lo dice.
- No generaliza la condición de un servicio a todos los demás.

## Cuándo pasa a una persona

- Las condiciones de un servicio no aclaran el formato admitido y el cliente necesita certeza.

## Cómo lo puede pedir el cliente

- «¿Hay que imprimir el bono o vale con el móvil?»
- «no tengo impresora, si lo enseño en el movil me dejan pasar?»
- «Les consulto si es imprescindible presentar la documentación en papel.»
- «¿Una captura del bono sirve? Para el hotel y para las entradas»
