---
name: aloj-spa-gimnasio-acceso-incluido
description: El cliente pregunta si el spa o el gimnasio del alojamiento están
  incluidos en su reserva o se pagan aparte.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente quiere saber si podrá usar el spa, el gimnasio o el circuito de aguas y en qué condiciones.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` si la reserva incluye algún servicio de spa.
3. Consulta con `consultar-servicios-alojamiento` qué instalaciones hay, sus condiciones de acceso y si se pagan aparte.
4. Responde si el acceso está incluido o es un servicio que se contrata en el propio alojamiento.

## Qué no hace

- No da precios de circuitos ni de tratamientos.
- No reserva tratamientos en nombre del cliente.

## Cuándo pasa a una persona

- La reserva incluye spa y el alojamiento no lo reconoce.
- El cliente quiere contratar y pagar un servicio de spa a través de la agencia.

## Cómo lo puede pedir el cliente

- «¿El acceso al spa está incluido en la reserva?»
- «el gym es gratis o se paga?»
- «Hola, es nuestro aniversario y queríamos ir al spa, entra? hay que reservar hora?»
- «Les agradecería información sobre las condiciones de uso del spa y el gimnasio.»
