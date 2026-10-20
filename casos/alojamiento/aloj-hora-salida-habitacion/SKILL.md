---
name: aloj-hora-salida-habitacion
description: El cliente pregunta hasta qué hora puede quedarse en la habitación
  el último día antes de dejar el alojamiento.
metadata:
  area: alojamiento
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-horarios-hotel
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente quiere saber la hora límite de salida. Si pide quedarse más tiempo, aplica la petición de salida tardía.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Confirma el alojamiento y la fecha de salida con `consultar-reserva`.
3. Obtiene la hora de salida con `consultar-horarios-hotel`.
4. Informa de la hora de salida y aclara que cualquier ampliación depende del propio alojamiento.

## Qué no hace

- No concede ni promete una salida más tarde.
- No informa de suplementos por salida tardía que no figuren en lo que devuelven las acciones.

## Cuándo pasa a una persona

- No hay hora de salida disponible para ese alojamiento.
- El cliente quiere quedarse más tiempo asumiendo un coste.

## Cómo lo puede pedir el cliente

- «¿A qué hora tenemos que dejar la habitación el último día?»
- «hola, hasta q hora es el check out»
- «Buenos días, desearía saber la hora de salida del apartamento.»
- «El día que nos vamos a qué hora hay que salir? Es que el vuelo es por la tarde y no sé si el traslado nos recoge en el hotel»
