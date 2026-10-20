---
name: ferri-sustituir-pasajero-del-trayecto
description: El cliente quiere cambiar a un viajero de su trayecto en barco por
  otra persona.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Un viajero de la reserva ya no va y otra persona ocupará su plaza.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Identifica con `consultar-reserva` al viajero que se sustituye.
3. Pide con `pedir-datos-cliente` los datos del nuevo viajero mediante el formulario.
4. Abre un caso con `crear-ticket-booking` para que booking lo tramite con la naviera.

## Qué no hace

- No confirma el cambio ni que sea gratuito.
- No recoge datos del nuevo viajero por el chat.

## Cuándo pasa a una persona

- Siempre: implica datos de otra persona y puede tener coste.

## Cómo lo puede pedir el cliente

- «Mi amiga no puede venir, ¿puede ir mi hermana en su lugar en el barco?»
- «cambiamos a un pasajero, q datos necesitais?»
- «Buenos días, solicito el cambio de titular de una de las plazas del trayecto marítimo.»
- «Al final viene mi cuñado en vez de mi suegra, ¿se puede cambiar el nombre? ¿Cuesta algo?»
