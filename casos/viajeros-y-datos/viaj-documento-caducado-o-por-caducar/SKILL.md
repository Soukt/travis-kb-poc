---
name: viaj-documento-caducado-o-por-caducar
description: El cliente avisa de que el documento de un viajero está caducado o
  caducará cerca de las fechas del viaje.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente se da cuenta de la fecha de caducidad del DNI o del pasaporte y no sabe si podrá viajar. Algunos destinos o transportes exigen una vigencia mínima.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` las fechas y los servicios del viaje.
3. Busca con `buscar-informacion` la respuesta aprobada sobre documentos caducados o próximos a caducar.
4. Prepara una respuesta que recomiende renovar el documento según esa información y la deja para revisión de booking.

## Qué no hace

- No calcula vigencias mínimas que no consten en la información aprobada.
- No asegura que se pueda viajar con el documento caducado.

## Cuándo pasa a una persona

- El viajero no podrá renovarlo a tiempo y plantea cambiar o cancelar la reserva.
- No hay respuesta aprobada para el caso.

## Cómo lo puede pedir el cliente

- «Me acabo de dar cuenta de que mi pasaporte caduca justo durante el viaje.»
- «el dni de mi hijo esta caducado, puede viajar asi?»
- «Buenas tardes, la documentación de una viajera vence poco después de la vuelta. ¿Supone algún problema?»
- «Tengo el DNI caducado y no me da tiempo a renovarlo; si no puedo ir, ¿qué pasa con mi dinero?»
