---
name: ferri-objeto-olvidado-a-bordo
description: El cliente se ha dejado algo en el barco o en la terminal tras
  desembarcar y quiere recuperarlo.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El trayecto ya se ha realizado y el cliente echa en falta un objeto que cree haber dejado a bordo o en el puerto.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Identifica con `consultar-trayecto-ferri` el trayecto, la fecha y la acomodación.
3. Pide con `pedir-datos-cliente` la descripción del objeto y dónde cree que lo dejó.
4. Abre un caso con `crear-ticket-booking` para que booking lo consulte con la naviera.

## Qué no hace

- No asegura que el objeto vaya a aparecer.
- No asume costes de envío del objeto.

## Cuándo pasa a una persona

- Siempre: la búsqueda la gestiona booking con la naviera.

## Cómo lo puede pedir el cliente

- «Me he dejado el cargador del portátil en el camarote, ¿cómo lo recupero?»
- «se me a olvidado la chaqueta del niño en las butacas!!»
- «Buenos días, extravié unas gafas graduadas durante la travesía de ayer. ¿Podrían ayudarme a localizarlas?»
- «creo q me deje el movil en la cafeteria del barco, a quien llamo?»
