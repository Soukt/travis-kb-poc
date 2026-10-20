---
name: ferri-naviera-no-encuentra-reserva-puerto
description: El cliente está en el puerto y la naviera le dice que no encuentra
  su reserva o no le deja embarcar con el bono.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - reenviar-bono
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente escribe desde la taquilla o el control de embarque porque la naviera no localiza su billete o lo rechaza.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` que el trayecto figura confirmado para ese día.
3. Comprueba el bono con `consultar-bonos` y lo reenvía con `reenviar-bono` para que lo tenga a mano.
4. Abre un caso urgente con `crear-ticket-booking` con todo lo que le ha dicho la naviera.
5. Pide al cliente que siga en la taquilla con el bono mientras booking lo gestiona.

## Qué no hace

- No le dice que compre otro billete por su cuenta.
- No contacta directamente con la naviera.

## Cuándo pasa a una persona

- Siempre y con prioridad: el cliente está en el puerto y puede perder el embarque.

## Cómo lo puede pedir el cliente

- «Estoy en la taquilla y dicen que no tengo reserva, ¡ayuda!»
- «no me dejan subir al barco dicen q el bono no vale, q hago»
- «Buenos días, en el puerto no localizan mi billete con el código del bono. Les ruego que lo revisen con urgencia.»
- «La naviera dice que mi reserva está cancelada pero yo lo tengo todo pagado, ¿qué está pasando?»
