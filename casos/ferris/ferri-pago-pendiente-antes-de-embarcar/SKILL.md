---
name: ferri-pago-pendiente-antes-de-embarcar
description: El cliente pregunta si tiene algún pago pendiente de su reserva con
  barco y si eso le impedirá embarcar.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

El cliente pagó en varios plazos o no recuerda si completó el pago, y se acerca la fecha del trayecto.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-pagos` los pagos hechos, los pendientes y la próxima fecha de cobro.
3. Comprueba con `consultar-bonos` si el bono del barco está disponible.
4. Explica la situación tal y como la devuelven las acciones.

## Qué no hace

- No cobra, aplaza ni modifica pagos.
- No asegura que pueda embarcar con pagos pendientes si las acciones no lo confirman.

## Cuándo pasa a una persona

- El cliente no está de acuerdo con el importe pendiente o con la fecha de cobro.
- Hay un pago fallido o pendiente que bloquea el bono.

## Cómo lo puede pedir el cliente

- «¿Me queda algo por pagar del viaje en barco?»
- «cuando me cobrais lo q falta? xq el ferri es ya»
- «Buenas tardes, ¿el pago pendiente afecta a la emisión del billete marítimo?»
- «No sé si se cobró el segundo pago, ¿podré embarcar? ¿Y me mandáis la factura?»
