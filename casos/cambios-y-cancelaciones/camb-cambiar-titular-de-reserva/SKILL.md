---
name: camb-cambiar-titular-de-reserva
description: El cliente quiere que la reserva pase a estar a nombre de otra
  persona como titular.
metadata:
  area: cambios-y-cancelaciones
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El titular actual no va a viajar o quiere ceder la reserva y pide cambiar el titular. Implica datos de otra persona y puede tener condiciones o costes.

## Qué hace el agente

1. Confirma con `verificar-identidad` que quien lo pide es el titular actual.
2. Revisa con `consultar-reserva` los servicios y los viajeros.
3. Consulta con `consultar-politica-cancelacion` si las condiciones permiten la cesión o el cambio de nombre.
4. Pide con `pedir-datos-cliente` los datos del nuevo titular.
5. Traslada la solicitud a booking con `crear-ticket-booking`.

## Qué no hace

- No acepta el cambio si quien escribe no es el titular.
- No transfiere pagos, facturas ni acceso a la zona de cliente.

## Cuándo pasa a una persona

- Siempre: implica datos de otra persona y posibles costes.

## Cómo lo puede pedir el cliente

- «Ya no voy a viajar y quiero dejarle la reserva a mi hermano, ¿se puede poner a su nombre?»
- «¿Puedo cambiar el titular de la reserva?»
- «kiero pasar la reserva a nombre de mi madre q es la q va a ir»
- «Solicito el cambio de titularidad de la reserva a favor de otra persona. Indíquenme la documentación necesaria.»
