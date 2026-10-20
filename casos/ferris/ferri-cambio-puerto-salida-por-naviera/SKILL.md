---
name: ferri-cambio-puerto-salida-por-naviera
description: El cliente ha sido avisado de que su barco saldrá desde otro puerto
  o terminal y quiere confirmar los nuevos datos.
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

La naviera ha trasladado la salida a otro puerto o terminal y el cliente quiere saber adónde tiene que ir y si cambia la hora de presentación.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Obtiene con `consultar-trayecto-ferri` el puerto, la terminal y la hora de presentación vigentes.
3. Busca con `buscar-informacion` las indicaciones aprobadas para acceder a esa terminal.
4. Responde con los datos actualizados y destaca lo que ha cambiado.

## Qué no hace

- No da por bueno el puerto antiguo.
- No ofrece compensaciones por el cambio.

## Cuándo pasa a una persona

- El nuevo puerto no le viene bien al cliente o le genera gastos.
- El cambio afecta a un traslado contratado.

## Cómo lo puede pedir el cliente

- «Me dicen que el barco sale ahora de otro puerto, ¿es así?»
- «han cambiado la terminal del ferri? no me entero»
- «Disculpe, he recibido un aviso de cambio de puerto de embarque. ¿Me confirman la nueva ubicación?»
- «si sale de otro puerto tengo q conducir mas, me pagais la gasolina? y a q hora hay q estar?»
