---
name: doc-compensacion-gastos-bono-erroneo
description: El cliente pide que le compensen los gastos extra que tuvo por un
  error en el bono.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando por un dato erróneo del bono el cliente tuvo que pagar un taxi, una noche adicional, una entrada nueva u otro gasto y lo reclama.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` los servicios y fechas afectados.
3. Recoge con `pedir-datos-cliente` la descripción de los gastos y los justificantes disponibles.
4. Abre `crear-ticket-booking` con todo lo recogido para que booking valore la solicitud.

## Qué no hace

- No promete ni calcula ninguna compensación.
- No reconoce la culpa del error antes de que booking lo revise.

## Cuándo pasa a una persona

- Siempre: hay dinero de por medio.

## Cómo lo puede pedir el cliente

- «Tuve que pagar otra noche porque el bono tenía mal la fecha, quiero que me lo devolváis»
- «me toco coger un taxi pq el traslado no tenia bien el vuelo, me lo pagais?»
- «Solicito el reembolso de los gastos adicionales derivados del error en la documentación.»
- «compré entradas nuevas porque las vuestras no valían, ¿cómo recupero el dinero?»
