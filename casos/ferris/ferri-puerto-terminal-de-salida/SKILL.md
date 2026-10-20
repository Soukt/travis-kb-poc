---
name: ferri-puerto-terminal-de-salida
description: El cliente pregunta desde qué puerto y qué terminal sale su barco y
  por dónde se accede a la zona de embarque.
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

El cliente no tiene claro de qué puerto o terminal sale su trayecto, o duda si la ida y la vuelta salen del mismo sitio.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Obtiene el puerto y la terminal de cada trayecto con `consultar-trayecto-ferri`.
3. Busca con `buscar-informacion` las indicaciones aprobadas para acceder a la terminal, distinguiendo vehículos y pasajeros a pie.
4. Responde trayecto por trayecto e indica si la terminal de ida y la de vuelta son distintas.

## Qué no hace

- No inventa indicaciones para llegar ni recomienda rutas por carretera.
- No da por hecho que la terminal de vuelta es la misma que la de ida.

## Cuándo pasa a una persona

- El puerto que figura en el trayecto no coincide con el que aparece en el bono.

## Cómo lo puede pedir el cliente

- «¿Desde qué terminal sale el barco? En el puerto hay varias y no quiero equivocarme.»
- «ola de q puerto sale mi ferri»
- «Disculpe, ¿la vuelta sale del mismo sitio que la ida?»
- «Vamos en coche al puerto, ¿por dónde se entra para embarcar? ¿Hay que pasar antes por la taquilla?»
