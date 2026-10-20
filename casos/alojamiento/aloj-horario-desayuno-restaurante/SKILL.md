---
name: aloj-horario-desayuno-restaurante
description: El cliente pregunta a qué hora se sirve el desayuno o la cena en el
  restaurante de su alojamiento.
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

Cuando el cliente quiere organizar el día según los horarios de las comidas incluidas en su régimen.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba el alojamiento y el régimen con `consultar-reserva`.
3. Consulta con `consultar-servicios-alojamiento` los horarios del restaurante y del desayuno.
4. Responde con los horarios que figuren o indica que no constan.

## Qué no hace

- No supone horarios habituales si el alojamiento no los publica.
- No reserva mesa en el restaurante.

## Cuándo pasa a una persona

- El cliente necesita un horario especial por motivos de salud y no consta ninguna opción.

## Cómo lo puede pedir el cliente

- «¿A qué hora es el desayuno en el hotel?»
- «hasta q hora dan de cenar?»
- «Hola, salimos de excursión muy pronto, el desayuno abre a tiempo? Y la cena es buffet?»
- «Quisiera conocer los horarios de servicio del restaurante del alojamiento.»
