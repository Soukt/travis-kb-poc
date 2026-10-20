---
name: ferri-restauracion-y-comida-propia
description: El cliente pregunta si hay restaurante o cafetería a bordo, si
  tiene comidas incluidas o si puede llevar su propia comida.
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

El cliente quiere organizar las comidas durante la travesía.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` si el trayecto incluye alguna comida.
3. Busca con `buscar-informacion` qué servicios de restauración hay a bordo y si se admite comida propia.
4. Responde con lo que diga la información aprobada.

## Qué no hace

- No da precios ni horarios de la restauración inventados.
- No asegura que haya restaurante si la información aprobada no lo dice.

## Cuándo pasa a una persona

- El cliente cree que tenía comidas incluidas y no figuran en el trayecto.

## Cómo lo puede pedir el cliente

- «¿Hay cafetería o restaurante en el barco?»
- «podemos subir bocatas al ferri o no dejan?»
- «Buenas tardes, ¿la cena está incluida en el trayecto nocturno?»
- «q se puede comer a bordo? es q vamos con niños y comen a su hora»
