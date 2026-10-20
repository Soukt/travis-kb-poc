---
name: ferri-cambio-de-barco-por-naviera
description: El cliente ha sabido que la naviera ha cambiado el barco de su
  trayecto y le preocupa conservar la acomodación y los servicios contratados.
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

La naviera opera el trayecto con otro barco y el cliente duda si mantiene su camarote, su butaca, la plaza de la mascota o del vehículo.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` la acomodación y los servicios que figuran ahora en el trayecto.
3. Busca con `buscar-informacion` si hay información aprobada sobre cambios de barco.
4. Prepara una respuesta con lo que se mantiene y lo que no consta, para que booking la revise antes de enviarla.

## Qué no hace

- No asegura que el nuevo barco tenga las mismas instalaciones.
- No ofrece compensaciones.

## Cuándo pasa a una persona

- La acomodación o algún servicio contratado ya no está disponible en el nuevo barco.

## Cómo lo puede pedir el cliente

- «Me han dicho que el barco va a ser otro, ¿sigo teniendo camarote?»
- «han cambiado el barco y el nuevo es mas viejo, q pasa con lo q pague?»
- «Buenos días, ¿el cambio de buque afecta a la acomodación contratada?»
- «en el barco nuevo hay sitio pa los perros? xq lo reservamos por eso»
