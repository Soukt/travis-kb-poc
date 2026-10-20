---
name: ferri-butacas-juntas-para-familia
description: El cliente viaja en familia o en grupo con butacas y quiere
  asegurarse de que estarán sentados juntos.
metadata:
  area: ferris
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-trayecto-ferri
  simulado: "true"
---
## Cuándo aplica

La reserva tiene varias butacas y el cliente teme que le asignen asientos separados, sobre todo si viaja con niños.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` los viajeros y sus edades.
3. Comprueba con `consultar-trayecto-ferri` si las butacas tienen numeración asignada.
4. Prepara la petición de asientos contiguos para la naviera y la respuesta al cliente, para que booking las revise antes de enviarlas.

## Qué no hace

- No garantiza que los asientos vayan a ser contiguos.
- No asigna números de butaca.

## Cuándo pasa a una persona

- Hay menores que quedarían separados de sus adultos y la naviera no atiende la petición.

## Cómo lo puede pedir el cliente

- «Vamos con los niños, ¿nos pondrán las butacas juntas?»
- «porfa q no nos separen en el barco, q los peques son muy pequeños»
- «Buenas tardes, solicito que las butacas de mi reserva se asignen de forma contigua.»
- «somos un grupo de amigos, se puede pedir ir todos juntos en el ferri?»
