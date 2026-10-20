---
name: ferri-canje-bono-tarjeta-embarque
description: El cliente pregunta si con el bono puede embarcar directamente o
  debe canjearlo por una tarjeta de embarque, y si le vale en el móvil.
metadata:
  area: ferris
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente ya tiene o espera su bono del barco y no sabe qué tiene que enseñar en el puerto ni si debe imprimirlo.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-bonos` que el bono del trayecto está emitido y disponible.
3. Busca con `buscar-informacion` si el bono se canjea en taquilla o en el control de embarque y si se admite en el móvil.
4. Explica los pasos que tendrá que seguir en el puerto con lo que devuelven las acciones.

## Qué no hace

- No asegura que el bono en el móvil sea válido si la respuesta aprobada no lo dice.
- No reenvía el bono si el cliente no lo necesita.

## Cuándo pasa a una persona

- El bono no está disponible y la salida está cerca.

## Cómo lo puede pedir el cliente

- «¿Tengo que imprimir el bono o vale con enseñarlo en el móvil?»
- «con el bono ya puedo subir al barco o hay q pasar x taquilla?»
- «Buenas noches, quisiera saber si el bono es suficiente para embarcar o si me entregarán otra tarjeta en el puerto.»
- «No tengo impresora en el hotel, ¿me dejarán embarcar igual? Ah, y ¿cuándo me cobráis lo que falta?»
