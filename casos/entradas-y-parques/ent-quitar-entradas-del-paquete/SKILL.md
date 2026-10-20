---
name: ent-quitar-entradas-del-paquete
description: El cliente quiere eliminar las entradas de su paquete de hotel con
  parque y quedarse solo con el alojamiento.
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

Aplica cuando el cliente ya no quiere ir al parque o ha conseguido entradas por otra vía. Implica una cancelación parcial con dinero de por medio.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` cómo está compuesto el paquete.
3. Revisa con `consultar-politica-cancelacion` si se pueden cancelar solo las entradas y con qué gastos.
4. Abre con `crear-ticket-booking` la solicitud con lo comprobado y la preferencia del cliente.

## Qué no hace

- No cancela parte del paquete.
- No promete devolución por las entradas.

## Cuándo pasa a una persona

- Siempre: es una cancelación parcial con dinero de por medio.

## Cómo lo puede pedir el cliente

- «Al final no iremos al parque. ¿Podemos quitar las entradas y quedarnos con el hotel?»
- «ya tengo entradas por otro lado, me quitais las vuestras?»
- «Solicito anular las entradas del paquete manteniendo la reserva de alojamiento.»
- «si quito las entradas cuanto me devolveis?»
