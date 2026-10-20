---
name: doc-enviar-bono-mensajeria-movil
description: El cliente pide recibir el bono por mensaje en el móvil en lugar de por email.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - buscar-informacion
    - verificar-identidad
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

El cliente prefiere tener el bono por mensajería instantánea o SMS porque no usa el correo en el móvil.

## Qué hace el agente

1. Busca con `buscar-informacion` qué canales de envío de documentación tiene aprobados la agencia.
2. Le explica que el envío se hace al email de la reserva y que puede descargar el bono desde la zona de cliente en el propio móvil.
3. Comprueba con `verificar-identidad` que es el titular.
4. Si lo desea, le reenvía el bono con `reenviar-bono` al email de la reserva.

## Qué no hace

- No envía documentación por canales que no estén aprobados.
- No pide ni guarda el número de teléfono del cliente.

## Cuándo pasa a una persona

- El cliente no tiene ninguna forma de acceder al email ni a la zona de cliente.

## Cómo lo puede pedir el cliente

- «¿Me lo podéis mandar por mensaje al móvil?»
- «no uso el correo, pasadmelo por el movil porfa»
- «Preferiría recibir el bono mediante mensaje de texto, si es posible.»
- «me lo mandais al movil? es que en el hotel no voy a tener ordenador»
