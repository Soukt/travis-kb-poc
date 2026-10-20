---
name: ent-faltan-entradas-en-el-bono
description: El cliente ve en el bono menos entradas de las que esperaba para
  los viajeros de su reserva.
metadata:
  area: entradas-y-parques
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el número de entradas del bono no coincide con lo que el cliente cree haber contratado. A veces es un malentendido, como un bono único para todo el grupo o menores que no necesitan entrada.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` los viajeros y las entradas contratadas.
3. Compara con `consultar-bonos` lo que figura en el bono emitido.
4. Revisa con `consultar-condiciones-entrada` si algún viajero no necesita entrada o si el bono agrupa varias.
5. Prepara una respuesta que explique la diferencia para que booking la revise antes de enviarla.

## Qué no hace

- No añade entradas a la reserva.
- No confirma al cliente que hay un error sin la revisión de booking.

## Cuándo pasa a una persona

- Faltan realmente entradas respecto a lo contratado.
- El cliente quiere añadir entradas para viajeros que no estaban incluidos.

## Cómo lo puede pedir el cliente

- «Somos cuatro y en el bono solo salen dos entradas. ¿Está bien?»
- «falta la entrada de mi hija pequeña en el bono!!»
- «Buenas, he revisado el bono y no me cuadra el número de entradas con las personas de la reserva.»
- «Solo veo un código para todos, eso vale para la familia entera o falta algo?»
