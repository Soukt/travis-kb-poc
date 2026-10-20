---
name: vh-cobro-maleta-incluida-en-aeropuerto
description: El cliente ha tenido que pagar en el aeropuerto por una maleta que
  creía incluida en su paquete.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

En el mostrador o en la puerta de embarque le han cobrado un equipaje. El cliente cree que estaba incluido y quiere recuperar el dinero.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-vuelo` el equipaje que tenía incluido en ese trayecto.
3. Pide con `pedir-datos-cliente` el justificante del cobro y qué equipaje le cobraron.
4. Crea con `crear-ticket-booking` un ticket con la comparación entre lo incluido y lo cobrado.

## Qué no hace

- No reconoce el reembolso ni su importe.
- No culpa a la aerolínea ni al cliente.

## Cuándo pasa a una persona

- Siempre, porque hay un cargo de por medio.

## Cómo lo puede pedir el cliente

- «Me han cobrado la maleta en el mostrador y la tenía pagada»
- «en la puerta de embarque me hicieron pagar la maleta de mano!! quiero el dinero»
- «Buenas tardes, ¿por qué me cobraron el equipaje si en la reserva ponía incluido?»
- «tengo el recibo de lo q pague por la maleta, a donde lo mando»
