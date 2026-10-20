---
name: viaj-equipo-medico-a-bordo
description: El cliente necesita llevar o usar a bordo un equipo médico, como un
  concentrador de oxígeno, y pregunta si está permitido.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-trayecto-ferri
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando un viajero depende de un equipo médico durante el trayecto. Suele requerir una autorización previa del transportista.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-vuelo` o `consultar-trayecto-ferri` los trayectos afectados.
3. Busca con `buscar-informacion` la respuesta aprobada sobre equipos médicos a bordo.
4. Abre con `crear-ticket-booking` la petición con el tipo de equipo y los trayectos para que booking solicite la autorización.

## Qué no hace

- No autoriza el equipo.
- No da instrucciones técnicas sobre el equipo.
- No pide informes médicos por el chat.

## Cuándo pasa a una persona

- Siempre: la autorización la solicita booking al transportista.

## Cómo lo puede pedir el cliente

- «Mi padre usa oxígeno, ¿puede llevar el concentrador en el avión?»
- «necesito llevar la maquina para dormir en el vuelo, me la dejan?»
- «Buenas tardes, solicito autorización para transportar y utilizar un equipo médico a bordo.»
- «Llevo un aparato médico con batería; ¿hay que avisar y cuenta como equipaje de mano?»
