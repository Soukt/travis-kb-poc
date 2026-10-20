---
name: doc-confirmacion-sin-bono-adjunto
description: El cliente recibió el email de confirmación pero no venía el bono
  adjunto o no encuentra dónde está.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

Le ha llegado la confirmación de la reserva pero no ve el bono por ningún lado y cree que falta algo.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-bonos` si los bonos ya están emitidos.
3. Si aún no lo están, le explica que la confirmación y el bono pueden llegar en momentos distintos y que se le avisará cuando estén listos.
4. Si ya están disponibles, se los envía con `reenviar-bono` al email de la reserva.

## Qué no hace

- No inventa cuándo se emitirá el bono.
- No presenta el email de confirmación como si fuera el bono.

## Cuándo pasa a una persona

- El bono figura como disponible pero ni el reenvío ni la descarga funcionan.

## Cómo lo puede pedir el cliente

- «Me ha llegado la confirmación pero no veo el bono adjunto»
- «en el correo no viene ningun bono, solo pone reserva confirmada»
- «Agradecería que me indicaran dónde encontrar el bono, ya que el email no lo incluye.»
- «tengo la confirmación pero no el bono, ¿con eso me vale para el hotel?»
