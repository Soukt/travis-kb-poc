---
name: aloj-salida-madrugada-desayuno-llaves
description: El cliente se irá del alojamiento de madrugada, antes de que abra
  la recepción o el desayuno, y pregunta cómo hacerlo.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-horarios-hotel
    - consultar-servicios-alojamiento
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando la salida es antes del horario de recepción o del desayuno y el cliente quiere dejar las llaves, liquidar extras o llevarse algo para desayunar. El agente prepara la petición y booking la revisa.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Confirma fecha de salida y régimen con `consultar-reserva`.
3. Consulta con `consultar-horarios-hotel` el horario de recepción y de salida.
4. Revisa con `consultar-servicios-alojamiento` si existe desayuno para llevar o salida exprés.
5. Si hace falta, prepara la petición al alojamiento en `crear-ticket-booking` para que booking la revise y la envíe.

## Qué no hace

- No promete un desayuno para llevar que no figure.
- No gestiona el pago de los extras consumidos.

## Cuándo pasa a una persona

- El cliente reclama la devolución del desayuno que no podrá tomar.

## Cómo lo puede pedir el cliente

- «Saldremos del hotel de madrugada, ¿cómo entregamos las llaves?»
- «nos vamos antes del desayuno, nos dan algo para llevar?»
- «Hola, el traslado nos recoge muy temprano y la recepción no estará. Pagamos el minibar la noche antes?»
- «Les ruego que gestionen nuestra salida anticipada a primera hora y, si es posible, un desayuno para llevar.»
