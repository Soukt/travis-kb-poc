---
name: ferri-menor-viaja-con-otros-adultos
description: El cliente viaja en barco con un menor que no es su hijo, como un
  nieto o un sobrino, y pregunta qué autorización necesita.
metadata:
  area: ferris
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

En la reserva hay un menor que embarcará sin sus padres o tutores, acompañado por otros adultos de la reserva.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` los viajeros y quién acompaña al menor.
3. Comprueba la ruta con `consultar-trayecto-ferri`.
4. Busca con `buscar-informacion` los requisitos aprobados para menores que viajan sin sus padres.
5. Prepara la respuesta para que booking la revise antes de enviarla.

## Qué no hace

- No da por suficiente una autorización que la respuesta aprobada no recoja.
- No pide datos de los padres ni del menor por el chat.
- No asegura que el menor podrá embarcar.

## Cuándo pasa a una persona

- No hay información aprobada para ese tipo de ruta.
- El cliente quiere añadir o cambiar datos de algún viajero.

## Cómo lo puede pedir el cliente

- «Me llevo a mi nieta de viaje, ¿necesito algún permiso de sus padres para el barco?»
- «viajo con mi sobrino q es menor, hace falta autorizacion?»
- «Buenas tardes, un amigo de mi hijo viene con nosotros. ¿Qué piden en el embarque para un menor que no es mío?»
- «Mi hija va con sus abuelos en el ferri y yo voy en avión, ¿qué tienen que llevar?»
