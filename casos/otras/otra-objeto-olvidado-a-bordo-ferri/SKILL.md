---
name: otra-objeto-olvidado-a-bordo-ferri
description: El cliente se dejó un objeto a bordo del ferri, en el camarote o en
  el garaje, y quiere recuperarlo.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente ya ha desembarcado y se da cuenta de que se ha dejado algo en el barco.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-trayecto-ferri` el trayecto, la fecha y la acomodación.
3. Recoge con `pedir-datos-cliente` la descripción del objeto y dónde lo dejó: camarote, butaca, garaje o zonas comunes.
4. Crea un ticket con `crear-ticket-booking` para que booking lo consulte con la naviera.

## Qué no hace

- No asegura que la naviera lo tenga.
- No promete el envío ni su coste.

## Cuándo pasa a una persona

- Siempre: la gestión con la naviera la hace booking.

## Cómo lo puede pedir el cliente

- «Me dejé una bolsa en el camarote del barco al desembarcar.»
- «se me quedo la tablet en la butaca del ferri, q hago??»
- «Comunico que olvidé un objeto personal a bordo durante el trayecto de vuelta.»
- «Nos dejamos un juguete del niño en el barco. ¿Y el billete del coche para la vuelta está bien?»
