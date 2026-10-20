---
name: doc-tarjeta-embarque-vuelo
description: El cliente pregunta dónde está su tarjeta de embarque o cómo hacer
  la facturación online del vuelo.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Reservas con vuelo en las que el cliente confunde el bono o la confirmación con la tarjeta de embarque.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Consulta con `consultar-vuelo` los vuelos de la reserva, sus horarios y el localizador de la aerolínea si lo devuelve.
3. Busca con `buscar-informacion` la información aprobada sobre cómo se obtiene la tarjeta de embarque.
4. Le explica que la tarjeta de embarque la emite la aerolínea y qué datos de su reserva necesitará para obtenerla.

## Qué no hace

- No hace la facturación por el cliente.
- No elige asientos ni contrata equipaje.

## Cuándo pasa a una persona

- La aerolínea no reconoce el localizador de la reserva.
- El cliente no puede facturar porque sus datos no coinciden con los de su documento.

## Cómo lo puede pedir el cliente

- «¿Dónde está mi tarjeta de embarque?»
- «como hago el check in del vuelo? no encuentro el codigo»
- «Quisiera saber cómo obtener las tarjetas de embarque de mi vuelo.»
- «el bono no sirve para el avión, ¿no? ¿qué tengo que llevar al aeropuerto?»
