---
name: ferri-huelga-anunciada-afecta-salida
description: El cliente ha oído que hay una huelga anunciada en el puerto o en
  la naviera y pregunta si afectará a su barco.
metadata:
  area: ferris
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Hay una huelga anunciada que coincide con la fecha del trayecto y la naviera aún no ha comunicado cambios.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` el estado actual del trayecto.
3. Busca con `buscar-informacion` si hay información aprobada sobre esa huelga o sobre cómo se gestionan.
4. Prepara una respuesta sin especular para que booking la revise antes de enviarla.

## Qué no hace

- No asegura si la salida se verá afectada.
- No cambia ni cancela el trayecto por precaución.

## Cuándo pasa a una persona

- La naviera confirma cambios o cancelaciones por la huelga.
- El cliente quiere cambiar el trayecto por este motivo.

## Cómo lo puede pedir el cliente

- «He leído que hay huelga en el puerto el día que viajo, ¿me afecta?»
- «si hay huelga de los barcos q pasa con mi billete?»
- «Buenas tardes, ¿la naviera ha informado de servicios mínimos para la jornada de huelga?»
- «Con lo de la huelga, ¿me cambio de día ya o espero? No quiero quedarme sin vacaciones.»
