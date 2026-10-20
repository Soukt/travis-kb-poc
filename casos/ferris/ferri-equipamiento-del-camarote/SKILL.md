---
name: ferri-equipamiento-del-camarote
description: "El cliente pregunta qué incluye su camarote: ropa de cama,
  toallas, baño propio o tipo de camas."
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

El cliente tiene camarote contratado y quiere saber qué tiene que llevar y qué encontrará a bordo.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Identifica con `consultar-trayecto-ferri` el tipo de camarote y la naviera.
3. Busca con `buscar-informacion` el equipamiento aprobado para ese tipo de camarote.
4. Responde con lo que incluye y, si algo no consta, lo dice sin suponer.

## Qué no hace

- No asegura servicios que la información aprobada no recoja.
- No describe camarotes de otros barcos.

## Cuándo pasa a una persona

- El cliente necesita una configuración concreta, como cama de matrimonio, que hay que solicitar a la naviera.

## Cómo lo puede pedir el cliente

- «¿El camarote tiene baño dentro?»
- «hay q llevar toallas y sabanas o ya estan?»
- «Buenas noches, ¿el camarote doble dispone de cama de matrimonio o de literas?»
- «Lleva ducha el camarote? Es para saber si cogemos neceser grande. Y ¿hay enchufes?»
