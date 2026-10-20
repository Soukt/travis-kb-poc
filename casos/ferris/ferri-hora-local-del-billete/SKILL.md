---
name: ferri-hora-local-del-billete
description: El cliente duda si las horas de su billete de barco están en la
  hora local del puerto de salida o en la del destino.
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

El trayecto une puertos con distinta hora oficial y el cliente no sabe a qué hora corresponde cada horario del billete.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Obtiene los puertos y los horarios del trayecto con `consultar-trayecto-ferri`.
3. Busca con `buscar-informacion` el criterio aprobado sobre en qué hora local se expresan los horarios.
4. Explica, solo con lo que devuelven las acciones, a qué hora local corresponde la salida y a cuál la llegada.

## Qué no hace

- No convierte horas por su cuenta para dar un horario distinto del que figura en el billete.
- No da por hecho el criterio de la naviera si no hay respuesta aprobada.

## Cuándo pasa a una persona

- No hay respuesta aprobada y el cliente necesita la hora segura para no perder el barco.

## Cómo lo puede pedir el cliente

- «La hora del billete, ¿es la de aquí o la del país de destino?»
- «oye q alli tienen otra hora no? entonces a q hora sale de verdad la vuelta»
- «Buenas, con la diferencia horaria no sé si la llegada que pone es hora local o la nuestra.»
- «¿La hora de llegada está en hora del destino? Es que tengo el traslado contratado y no quiero liarla.»
