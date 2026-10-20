---
name: viaj-no-recibe-emails-reserva
description: El cliente dice que no le ha llegado ningún email de su reserva, ni
  la confirmación ni los bonos, y teme que su email esté mal.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente no encuentra los emails de la reserva y sospecha de sus datos de contacto. Puede deberse a la carpeta de correo no deseado, a que los bonos aún no estén listos o a un email mal escrito.

## Qué hace el agente

1. Intenta `verificar-identidad` con el localizador y el email que el cliente cree haber usado; si funciona, el email de la reserva es correcto.
2. Revisa con `consultar-reserva` el estado de la reserva.
3. Comprueba con `consultar-bonos` si los bonos ya están disponibles.
4. Si lo están, los reenvía con `reenviar-bono` y recomienda revisar la carpeta de correo no deseado.
5. Si aún no están disponibles, explica al cliente su estado tal y como lo devuelve la acción.

## Qué no hace

- No envía nada a un email distinto del de la reserva.
- No da datos de la reserva si la verificación falla.

## Cuándo pasa a una persona

- La verificación falla y el cliente sospecha que el email se escribió mal al reservar.
- Tras reenviar los bonos siguen sin llegar.

## Cómo lo puede pedir el cliente

- «Hice la reserva hace tiempo y no me ha llegado ningún correo. ¿Puede que pusiera mal mi email?»
- «no me llega nada al email, ni la confirmacion ni nada, esta bien hecha la reserva??»
- «Buenas tardes, no he recibido los bonos de mi viaje. ¿Pueden comprobar que mi dirección es correcta?»
- «No me llegan los emails y además quería saber cuándo me cobráis el resto.»
