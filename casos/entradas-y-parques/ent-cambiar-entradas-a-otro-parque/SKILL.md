---
name: ent-cambiar-entradas-a-otro-parque
description: El cliente quiere cambiar sus entradas por las de otro parque o
  atracción distinta de la que reservó.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente prefiere visitar otro parque en lugar del contratado, manteniendo o no la fecha. Supone un cambio de producto que puede tener gastos o diferencia de precio.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` las entradas contratadas y su fecha.
3. Revisa con `consultar-politica-cancelacion` si las entradas admiten cambio y con qué gastos.
4. Recoge qué parque y qué fecha prefiere el cliente y abre con `crear-ticket-booking` la solicitud.

## Qué no hace

- No confirma disponibilidad en el otro parque.
- No informa de diferencias de precio.

## Cuándo pasa a una persona

- Siempre: es un cambio de producto con posible coste.

## Cómo lo puede pedir el cliente

- «¿Podemos cambiar las entradas del parque temático por las del parque acuático?»
- «al final preferimos el otro parque, se puede cambiar?»
- «Solicito sustituir las entradas reservadas por las de otro parque de la zona.»
- «los niños quieren ir al zoo en vez de al parque, cambiais las entradas?»
