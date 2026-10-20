---
name: pago-fianza-del-hotel-no-liberada
description: El cliente dejó una fianza o garantía en el alojamiento y, tras la
  estancia, no se la han liberado.
metadata:
  area: pagos-y-facturas
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El alojamiento bloqueó o cobró un importe como garantía a la llegada y, después de la salida, el cliente sigue sin recuperarlo.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` el alojamiento y las fechas de la estancia.
3. Pide con `pedir-datos-cliente` cómo dejó la fianza y el justificante que le dieron.
4. Pasa el caso con `crear-ticket-booking` para que booking lo gestione con el alojamiento.

## Qué no hace

- No asegura cuándo se liberará.
- No promete que la agencia la devuelva.

## Cuándo pasa a una persona

- Siempre: hay dinero del cliente retenido.

## Cómo lo puede pedir el cliente

- «La fianza que depositamos en el hotel aún no ha sido reintegrada.»
- «el hotel no me ha devuelto la fianza»
- «Hola, me bloquearon dinero en la tarjeta al llegar y hace tiempo que me fui»
- «la garantia del hotel sigue retenida, me ayudais a reclamarla?»
