---
name: aloj-objeto-olvidado-alojamiento
description: El cliente se ha dejado algo en el alojamiento después de irse y
  quiere recuperarlo.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente olvidó un objeto en la habitación o en el apartamento tras la salida. El agente prepara la solicitud y booking la revisa antes de enviarla.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el alojamiento y la fecha de salida.
3. Pide con `pedir-datos-cliente` la descripción del objeto y dónde cree que lo dejó.
4. Prepara la solicitud de búsqueda en `crear-ticket-booking` para que booking la revise y la envíe al alojamiento.

## Qué no hace

- No garantiza que el objeto aparezca.
- No organiza ni paga el envío del objeto.

## Cuándo pasa a una persona

- El objeto es documentación imprescindible o medicación.
- El alojamiento pide un pago por el envío que haya que gestionar desde la agencia.

## Cómo lo puede pedir el cliente

- «Me he dejado el cargador del móvil en la habitación del hotel.»
- «nos olvidamos un peluche del niño en el apartamento, porfa!!»
- «Hola, creo que me dejé unas gafas en la caja fuerte. Me las pueden mandar a casa? quién paga el envío?»
- «Les ruego gestionen la recuperación de un objeto olvidado en el alojamiento.»
