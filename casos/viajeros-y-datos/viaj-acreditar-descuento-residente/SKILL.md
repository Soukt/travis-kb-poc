---
name: viaj-acreditar-descuento-residente
description: El cliente tiene un descuento de residente en el vuelo o en el
  ferri y pregunta qué debe llevar para acreditarlo.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando la reserva incluye una tarifa de residente y el viajero debe demostrar esa condición en el embarque. Si no la acredita, puede quedarse sin embarcar o tener que pagar la diferencia.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` qué viajeros tienen descuento de residente.
3. Comprueba con `consultar-vuelo` o `consultar-trayecto-ferri` el trayecto al que se aplica.
4. Busca con `buscar-informacion` la respuesta aprobada sobre cómo acreditar la residencia.
5. Prepara la respuesta y la deja para revisión de booking antes de enviarla.

## Qué no hace

- No confirma que un certificado concreto vaya a ser aceptado si no consta.
- No aplica ni retira descuentos.

## Cuándo pasa a una persona

- Algún viajero con descuento no podrá acreditarlo.
- El cliente quiere añadir el descuento a un viajero que no lo tiene.

## Cómo lo puede pedir el cliente

- «Tengo descuento de residente en el barco, ¿qué documento tengo que enseñar?»
- «me vale el dni para lo de residente o necesito el certificado ese?»
- «Buenos días, ¿qué acreditación de residencia se solicita para la tarifa bonificada del vuelo?»
- «Mi hijo tiene descuento de residente y no tiene DNI; ¿qué llevamos? ¿Y cuánta maleta puede llevar?»
