---
name: ent-reservo-fecha-equivocada-por-error
description: El cliente se equivocó al elegir la fecha de las entradas al
  reservar y pide corregirla.
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

Aplica cuando el error es del cliente y el bono refleja correctamente lo que reservó. Corregirlo depende de las condiciones y puede tener gastos.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` la fecha contratada y cuándo se hizo la reserva.
3. Revisa con `consultar-politica-cancelacion` las condiciones de cambio vigentes.
4. Recoge la fecha correcta y abre con `crear-ticket-booking` la solicitud explicando que fue un error al reservar.

## Qué no hace

- No corrige la fecha por su cuenta.
- No promete que el cambio sea gratuito por tratarse de un error.

## Cuándo pasa a una persona

- Siempre: es un cambio que puede implicar gastos o una excepción.

## Cómo lo puede pedir el cliente

- «Me equivoqué de mes al reservar las entradas. ¿Se puede arreglar?»
- «puse mal el dia al comprar, ayuda porfa»
- «Buenos días, al realizar la reserva seleccioné por error una fecha distinta de la deseada.»
- «he cogido las entradas para el dia que nos vamos en vez del que llegamos, tiene arreglo?»
