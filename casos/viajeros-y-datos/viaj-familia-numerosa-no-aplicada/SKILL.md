---
name: viaj-familia-numerosa-no-aplicada
description: El cliente tiene título de familia numerosa, no lo indicó al
  reservar y quiere saber si se le puede aplicar ahora.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente se da cuenta después de reservar de que podría haber tenido un descuento por familia numerosa en algún servicio. Implica un posible ajuste de precio.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` los servicios y viajeros, y con `consultar-pagos` lo pagado.
3. Pide con `pedir-datos-cliente` la categoría y la vigencia del título, sin copias del documento.
4. Abre con `crear-ticket-booking` la solicitud para que booking valore si se puede aplicar.
5. Explica al cliente que booking le responderá sobre si es posible y con qué importe.

## Qué no hace

- No promete el descuento ni una devolución.
- No calcula importes.

## Cuándo pasa a una persona

- Siempre: hay dinero de por medio.

## Cómo lo puede pedir el cliente

- «Somos familia numerosa y no lo puse al reservar, ¿me lo podéis aplicar?»
- «se me olvido marcar lo de familia numerosa, me devolveis la diferencia?»
- «Buenas tardes, disponemos de título de familia numerosa en vigor y quisiéramos acogernos a la bonificación.»
- «No puse lo de familia numerosa en el barco; ¿si lo enseño en el puerto me lo descuentan?»
