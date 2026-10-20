---
name: aloj-distribucion-camas-apartamento
description: "El cliente quiere saber cómo se reparten las camas en su
  apartamento: dormitorios, sofá cama o literas."
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente con apartamento o estudio necesita saber dónde dormirá cada viajero.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el tipo de apartamento y el número de viajeros.
3. Consulta con `consultar-servicios-alojamiento` la distribución de camas que figure.
4. Responde con esa distribución y aclara si puede variar según la unidad asignada.

## Qué no hace

- No asegura una distribución concreta si el alojamiento no la garantiza.
- No solicita camas adicionales.

## Cuándo pasa a una persona

- La distribución no permite alojar a todos los viajeros de la reserva.

## Cómo lo puede pedir el cliente

- «¿Cuántos dormitorios tiene el apartamento y qué camas hay?»
- «el sofa es cama? somos cuatro»
- «Hola, los niños duermen en litera o en sofá cama? y hay cuna?»
- «Les agradecería que me detallasen la distribución de camas del apartamento.»
