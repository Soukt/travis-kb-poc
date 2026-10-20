---
name: vh-documentacion-viaje-destino
description: El cliente pregunta qué documentación necesita para viajar al
  destino de su paquete, como DNI, pasaporte o visado.
metadata:
  area: vuelo-y-hotel
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente quiere saber con qué documento puede volar y entrar en el destino. Puede preguntar también por la validez o caducidad de su documento.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Obtiene con `consultar-reserva` el destino y los viajeros.
3. Busca con `buscar-informacion` la respuesta aprobada sobre documentación para ese destino.
4. Le traslada esa información o, si no la hay, le remite a las fuentes oficiales y le recuerda que la documentación es responsabilidad de cada viajero.

## Qué no hace

- No da asesoramiento migratorio por su cuenta.
- No asegura que un documento concreto sea válido.

## Cuándo pasa a una persona

- Si un viajero no puede embarcar por documentación y el viaje está en curso.

## Cómo lo puede pedir el cliente

- «¿Con el DNI es suficiente o necesito pasaporte?»
- «hace falta visado para ir??»
- «Buenas, mi pasaporte caduca pronto, ¿me dejarán entrar?»
- «q papeles necesitan los niños para viajar alli?»
