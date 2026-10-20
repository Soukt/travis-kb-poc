---
name: otra-queja-cobro-tasa-turistica-hotel
description: El cliente se queja de que el alojamiento le cobró a la salida una
  tasa turística o un cargo local que no esperaba.
metadata:
  area: otras
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Al hacer la salida le han cobrado en el hotel una tasa o un cargo que el cliente creía incluido en lo que pagó a la agencia.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` qué servicios incluye la reserva y si menciona pagos en destino.
3. Consulta con `consultar-pagos` lo que el cliente ya pagó a la agencia.
4. Busca con `buscar-informacion` la respuesta aprobada sobre tasas locales que se pagan en el alojamiento.
5. Prepara una explicación con lo encontrado y la deja para revisión de booking.

## Qué no hace

- No afirma que la tasa estuviera o no incluida sin evidencia en la reserva.
- No promete devolver el cargo.
- No calcula ni estima el importe de la tasa.

## Cuándo pasa a una persona

- Si la reserva indica que la tasa estaba incluida y aun así se la cobraron.
- Si el cliente pide la devolución del cargo.

## Cómo lo puede pedir el cliente

- «Al salir del hotel nos cobraron una tasa turística, ¿no estaba incluida en lo que pagué?»
- «me an cobrado un impuesto en el hotel q nadie me dijo»
- «Buenas tardes, quisiera una aclaración sobre un cargo por tasa municipal que me exigieron en el alojamiento.»
- «Nos cobraron una tasa en el hotel y otro cargo por la caja fuerte, ¿qué es cada cosa?»
