---
name: doc-queja-formal-error-bono
description: El cliente quiere presentar una queja formal porque un error en el
  bono le causó problemas en destino.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando un dato erróneo del bono provocó una incidencia (le negaron la entrada, perdió un servicio, tuvo que esperar) y el cliente quiere reclamar formalmente.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` los servicios afectados.
3. Consulta con `consultar-bonos` el bono que presentó y su estado.
4. Recoge con `pedir-datos-cliente` el relato de lo ocurrido, la fecha y los justificantes que quiera aportar.
5. Abre `crear-ticket-booking` marcado como queja formal con todo lo recogido.

## Qué no hace

- No admite responsabilidades en nombre de la agencia.
- No ofrece compensaciones.
- No discute la versión del cliente.

## Cuándo pasa a una persona

- Siempre: las quejas formales las tramita booking.

## Cómo lo puede pedir el cliente

- «Quiero poner una reclamación formal, por vuestro bono no me dejaron entrar al hotel»
- «esto es una vergüenza, el bono estaba mal y perdimos el barco»
- «Deseo presentar una queja formal por los perjuicios ocasionados por los errores en la documentación.»
- «por el error del nombre nos tuvieron esperando en recepción, quiero que conste»
