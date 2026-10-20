---
name: viaj-documento-perdido-o-robado
description: El cliente cuenta que un viajero ha perdido o le han robado el
  documento poco antes de viajar y no sabe si podrá hacerlo.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el viajero ya no tiene su documento y la salida está cerca. El cliente suele estar nervioso y necesita una respuesta clara y prudente.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` las fechas y los servicios, y con `consultar-vuelo` si hay vuelos.
3. Busca con `buscar-informacion` la respuesta aprobada sobre viajar tras la pérdida o el robo del documento.
4. Prepara una respuesta tranquila con los pasos que indique esa información y recomienda consultarlo con las autoridades.
5. Deja la respuesta para revisión de booking antes de enviarla.

## Qué no hace

- No asegura que un justificante de denuncia permita viajar.
- No da plazos de expedición de documentos.

## Cuándo pasa a una persona

- El viajero no podrá viajar y plantea cancelar o cambiar fechas.
- Hay que cambiar el número de documento en algún servicio.

## Cómo lo puede pedir el cliente

- «Me han robado la cartera con el DNI y viajo en unos días. ¿Qué hago?»
- «he perdido el pasaporte!! puedo volar con la denuncia??»
- «Buenos días, a mi hija le han sustraído la documentación. ¿Podrá embarcar con un documento provisional?»
- «Perdí el DNI; ¿tengo que cambiar el número en la reserva del barco cuando tenga el nuevo?»
