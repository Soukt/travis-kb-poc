---
name: doc-pasajero-falta-bono-ferri
description: El cliente ve que en el bono del ferri falta uno de los pasajeros que viajan.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-trayecto-ferri
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el bono del trayecto incluye menos pasajeros de los que embarcan.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` los viajeros de la reserva.
3. Consulta con `consultar-trayecto-ferri` los pasajeros registrados en el trayecto.
4. Recoge con `pedir-datos-cliente` los datos del pasajero que falta mediante el formulario.
5. Abre `crear-ticket-booking` con todo lo recogido.

## Qué no hace

- No añade pasajeros por su cuenta.
- No asegura que el pasajero pueda embarcar sin figurar en el bono.

## Cuándo pasa a una persona

- Siempre: incluir un pasajero implica datos de otra persona y posible coste.

## Cómo lo puede pedir el cliente

- «En el bono del barco falta mi marido»
- «somos cuatro y en el ferry salen tres!!»
- «Uno de los pasajeros no figura en la documentación del trayecto marítimo.»
- «no sale mi hijo en el bono del ferry, ¿le dejarán subir?»
