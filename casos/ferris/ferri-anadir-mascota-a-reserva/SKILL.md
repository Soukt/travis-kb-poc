---
name: ferri-anadir-mascota-a-reserva
description: El cliente quiere añadir una mascota a su trayecto en barco porque
  no la incluyó al reservar.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La mascota no figura en el trayecto y el cliente quiere llevarla en la ida, en la vuelta o en ambas.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Confirma con `consultar-trayecto-ferri` que la mascota no está registrada.
3. Pide con `pedir-datos-cliente` la especie, el tamaño aproximado, los trayectos y la modalidad que prefiere.
4. Abre un caso con `crear-ticket-booking` y explica que depende de la disponibilidad y que puede tener coste.

## Qué no hace

- No confirma la plaza para la mascota.
- No da el precio del suplemento.

## Cuándo pasa a una persona

- Siempre: implica un cargo y depende de la disponibilidad de la naviera.

## Cómo lo puede pedir el cliente

- «Se me olvidó poner al perro en la reserva del barco, ¿se puede añadir?»
- «al final nos llevamos a la perrita, q hay q hacer?»
- «Buenos días, solicito incluir un gato en el trayecto de vuelta.»
- «quiero meter al perro, cuanto es? y puede ir en el camarote con nosotros?»
