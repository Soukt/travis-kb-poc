---
name: ferri-coche-electrico-carga-a-bordo
description: El cliente viaja con un coche eléctrico o híbrido enchufable y
  pregunta si puede cargarlo a bordo o si hay alguna restricción.
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

El vehículo registrado en el trayecto es eléctrico o híbrido enchufable y el cliente quiere saber cómo afecta al embarque o a la travesía.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` el vehículo y la naviera del trayecto.
3. Busca con `buscar-informacion` las condiciones aprobadas para vehículos eléctricos: carga a bordo, avisos previos o restricciones.
4. Responde con lo que diga la información aprobada.

## Qué no hace

- No asegura que haya puntos de carga a bordo si la información aprobada no lo dice.
- No da recomendaciones técnicas sobre la batería.

## Cuándo pasa a una persona

- La información aprobada indica que hay que avisar a la naviera de que el vehículo es eléctrico y no consta en el trayecto.

## Cómo lo puede pedir el cliente

- «¿Puedo cargar el coche eléctrico durante la travesía?»
- «mi coche es electrico, hay enchufes en el garaje del barco?»
- «Buenas tardes, ¿hay alguna restricción para embarcar vehículos eléctricos?»
- «Llevo un híbrido enchufable, ¿tengo que avisar de algo? Y de paso, ¿el bono ya está disponible?»
