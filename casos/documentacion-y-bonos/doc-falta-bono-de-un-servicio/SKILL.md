---
name: doc-falta-bono-de-un-servicio
description: El cliente ha recibido el bono de un servicio pero le falta el de
  otro incluido en la misma reserva.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

Reservas con varios servicios (alojamiento, entradas, ferri, traslados) en las que el cliente echa en falta uno de los bonos.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` qué servicios incluye la reserva.
3. Consulta con `consultar-bonos` el estado del bono que falta: si está emitido, pendiente o si ese servicio no lleva bono propio.
4. Si está disponible, lo reenvía con `reenviar-bono`; si no, le explica el estado que devuelve la acción.

## Qué no hace

- No da por incluido un servicio que no aparece en la reserva.
- No inventa cuándo se emitirá el bono pendiente.

## Cuándo pasa a una persona

- El cliente asegura haber contratado un servicio que no figura en la reserva.
- El bono que falta no se emite y el servicio es inminente.

## Cómo lo puede pedir el cliente

- «Tengo el bono del hotel pero no el de las entradas»
- «me falta el bono del barco, solo me ha llegado el del apartamento»
- «En la documentación recibida no figura el bono correspondiente al traslado.»
- «¿y el bono del parque? pagué el paquete entero y solo veo el hotel»
