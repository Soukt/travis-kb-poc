---
name: aloj-trona-biberones-bebe
description: El cliente viaja con un bebé y pregunta si el alojamiento tiene
  trona, calientabiberones o menú infantil.
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

Cuando una familia con bebé quiere saber qué facilidades ofrece el alojamiento en el restaurante o la habitación, sin incluir la cuna.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` que viaja un bebé y el tipo de alojamiento.
3. Consulta con `consultar-servicios-alojamiento` las facilidades para bebés que figuren.
4. Responde con lo que ofrece el alojamiento y lo que conviene llevar si no consta.

## Qué no hace

- No solicita la cuna; eso es una petición distinta.
- No garantiza disponibilidad de tronas o accesorios.

## Cuándo pasa a una persona

- El bebé necesita una alimentación especial y el alojamiento no informa de opciones.

## Cómo lo puede pedir el cliente

- «¿El hotel tiene tronas en el restaurante?»
- «hay donde calentar biberones?»
- «Hola, vamos con un bebé, hay menú infantil o potitos? y bañera de bebé?»
- «Quisiera saber qué servicios ofrece el alojamiento para familias con bebés.»
