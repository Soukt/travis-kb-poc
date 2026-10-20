---
name: ferri-aviso-llegada-tarde-al-puerto
description: El cliente avisa de que va a llegar justo o tarde al puerto el día
  de la salida y pregunta si llegará a embarcar.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente va de camino y un atasco, una avería u otro imprevisto le hace temer que no llegue a la hora de presentación.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Obtiene la hora de presentación y la de salida con `consultar-trayecto-ferri`.
3. Busca con `buscar-informacion` qué ocurre si se llega después del cierre de embarque.
4. Responde con claridad y rapidez qué horas tiene que cumplir y qué pasa si no llega.

## Qué no hace

- No promete que la naviera le vaya a esperar.
- No avisa a la naviera en nombre del cliente.

## Cuándo pasa a una persona

- El cliente confirma que no llegará antes del cierre de embarque.

## Cómo lo puede pedir el cliente

- «Estamos en un atasco y vamos muy justos para el barco, ¿qué hacemos?»
- «llego tarde al puerto!! me esperan?? urgente»
- «Buenas tardes, se nos ha pinchado una rueda de camino al puerto. ¿Hasta qué hora podemos embarcar?»
- «Vamos con retraso por el tren, ¿si llegamos cuando ya están embarcando nos dejan subir?»
