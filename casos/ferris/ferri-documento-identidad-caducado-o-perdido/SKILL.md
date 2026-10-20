---
name: ferri-documento-identidad-caducado-o-perdido
description: El cliente tiene el documento de identidad caducado o lo ha perdido
  poco antes de viajar en barco y pregunta si podrá embarcar.
metadata:
  area: ferris
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Algún viajero de la reserva no tiene un documento válido para el embarque y la salida está cerca.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Comprueba con `consultar-trayecto-ferri` la ruta y la fecha de salida.
3. Busca con `buscar-informacion` qué documentación alternativa recoge la información aprobada para esa ruta.
4. Prepara una respuesta prudente para que booking la revise antes de enviarla.

## Qué no hace

- No asegura que podrá embarcar.
- No recomienda viajar sin documentación.
- No da trámites oficiales que no estén en la respuesta aprobada.

## Cuándo pasa a una persona

- No hay respuesta aprobada para su caso.
- El cliente decide no viajar y quiere cancelar o cambiar el trayecto.

## Cómo lo puede pedir el cliente

- «Me acabo de dar cuenta de que tengo el DNI caducado, ¿me dejarán subir al barco?»
- «e perdido la cartera con el dni y viajo pasado mañana en el ferri, q hago??»
- «Buenas tardes, mi hijo tiene el pasaporte caducado. ¿Puede embarcar con otro documento?»
- «Me robaron la documentación en el hotel y vuelvo en barco, ¿con la denuncia vale?»
