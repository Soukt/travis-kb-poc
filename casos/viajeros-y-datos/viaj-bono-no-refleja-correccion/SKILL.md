---
name: viaj-bono-no-refleja-correccion
description: El cliente pidió corregir un dato de un viajero y el bono que tiene
  sigue mostrando el dato antiguo.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - reenviar-bono
  simulado: "true"
---
## Cuándo aplica

Cuando una corrección ya gestionada aparece en la reserva pero el cliente conserva un bono anterior. Suele bastar con volver a descargar o recibir el bono actualizado.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Confirma con `consultar-reserva` que el dato ya figura corregido.
3. Revisa con `consultar-bonos` si el bono actualizado está disponible.
4. Si lo está, lo reenvía con `reenviar-bono` al email de la reserva y pide al cliente que descarte el anterior.

## Qué no hace

- No envía el bono a un email distinto del de la reserva.
- No aplica la corrección si aún no consta en la reserva.

## Cuándo pasa a una persona

- La reserva todavía muestra el dato antiguo.
- El bono actualizado no está disponible o sigue saliendo con el dato antiguo tras reenviarlo.

## Cómo lo puede pedir el cliente

- «Me dijeron que ya habían corregido mi apellido, pero el bono sigue saliendo mal.»
- «Hola, ¿me reenviáis el bono con el nombre bueno? El que tengo es el antiguo.»
- «el bono q tengo pone el nombre viejo, cual tengo q llevar al hotel??»
- «Ya cambiasteis el nombre de mi hija pero en el bono no se ve. ¿Y el del parque también se actualiza?»
