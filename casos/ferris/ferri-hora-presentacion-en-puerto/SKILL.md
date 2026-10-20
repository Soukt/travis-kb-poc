---
name: ferri-hora-presentacion-en-puerto
description: El cliente quiere saber a qué hora tiene que estar en el puerto
  para no perder el embarque de su barco.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-trayecto-ferri
  simulado: "true"
---
## Cuándo aplica

El cliente tiene un trayecto en barco en su reserva y pregunta con cuánta antelación debe presentarse en el puerto. Vale tanto para la ida como para la vuelta.

## Qué hace el agente

1. Comprueba que quien escribe es el titular con `verificar-identidad`.
2. Localiza el trayecto en barco y su fecha con `consultar-reserva`.
3. Obtiene la hora de presentación y la de salida con `consultar-trayecto-ferri`, teniendo en cuenta si viaja con vehículo o a pie.
4. Responde con las dos horas y aclara que la de presentación es la que hay que respetar para poder embarcar.

## Qué no hace

- No calcula la hora de presentación por su cuenta si la acción no la devuelve.
- No da horas de memoria ni las copia de otros trayectos parecidos.

## Cuándo pasa a una persona

- La hora de presentación no aparece en el trayecto o no coincide con la que figura en el bono.

## Cómo lo puede pedir el cliente

- «Buenas tardes, ¿podrían indicarme con cuánta antelación debo presentarme en el puerto?»
- «a q hora tengo q estar en el puerto?? no quiero quedarme en tierra jaja»
- «Oye, la hora que pone en el billete, ¿es la de salida o la de estar allí?»
- «Vamos con el coche, ¿hay que llegar antes que si vas andando? Y otra cosa, ¿en el barco hay cafetería?»
