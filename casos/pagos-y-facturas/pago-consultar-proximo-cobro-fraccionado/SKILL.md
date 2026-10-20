---
name: pago-consultar-proximo-cobro-fraccionado
description: El cliente pagó a plazos y quiere saber cuándo se le cobrará el
  siguiente plazo y por qué importe.
metadata:
  area: pagos-y-facturas
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-pagos
  simulado: "true"
---
## Cuándo aplica

La reserva tiene un pago fraccionado en curso y el cliente pregunta por la fecha o el importe del próximo cobro. No hay ninguna incidencia: solo quiere organizarse.

## Qué hace el agente

1. Comprueba que quien escribe es el titular de la reserva con `verificar-identidad`.
2. Consulta el calendario de cobros con `consultar-pagos` y localiza el siguiente plazo pendiente.
3. Comunica la fecha y el importe de ese plazo tal como los devuelve la acción.
4. Indica si quedan más plazos después y, si el cliente lo pide, cuáles.

## Qué no hace

- No calcula fechas ni importes por su cuenta si la acción no los devuelve.
- No cambia el calendario de cobros ni promete moverlo.

## Cuándo pasa a una persona

- El cliente pide mover la fecha o cambiar el importe de un plazo.
- Los datos de pagos aparecen incompletos o no cuadran con lo que el cliente dice haber contratado.

## Cómo lo puede pedir el cliente

- «Buenas tardes, ¿podrían indicarme en qué fecha se efectuará el próximo cargo de mi reserva?»
- «cuando me cobrais el siguiente plazo??»
- «Hola, quería saber qué día me pasáis el próximo pago, que tengo que dejar dinero en la cuenta»
- «¿El siguiente plazo me lo cobráis ya este mes? Y otra cosa, ¿la factura cuándo sale?»
