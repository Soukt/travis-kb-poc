---
name: viaj-cambio-legal-de-nombre
description: El cliente informa de que un viajero ha cambiado legalmente de
  nombre y su documento actual ya no coincide con el de la reserva.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando, entre la reserva y el viaje, un viajero ha cambiado su nombre en el registro y ha renovado su documento. Es un caso sensible que requiere discreción.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` qué servicios están emitidos con el nombre anterior.
3. Pide con `pedir-datos-cliente` el nombre tal y como figura ahora en el documento.
4. Abre con `crear-ticket-booking` la solicitud de actualización con los servicios afectados.
5. Confirma al cliente que booking se encarga y le contactará si algún proveedor necesita algo más.

## Qué no hace

- No pregunta por el motivo del cambio de nombre.
- No pide copias de documentos por el chat.
- No vuelve a usar el nombre anterior en la conversación una vez indicado el actual.

## Cuándo pasa a una persona

- Siempre: la actualización del nombre la gestiona booking con cada proveedor.

## Cómo lo puede pedir el cliente

- «Hola, he cambiado legalmente mi nombre y mi DNI nuevo no coincide con el de la reserva. ¿Cómo lo solucionamos?»
- «Buenos días. Uno de los viajeros ha actualizado su nombre en el registro civil y necesitamos que la reserva refleje el nuevo.»
- «me han dado el pasaporte nuevo con mi nombre actual y en la reserva sale el antiguo, q tengo q hacer»
- «Mi hijo ha cambiado de nombre oficialmente; ¿hay que cambiarlo también en las entradas del parque?»
