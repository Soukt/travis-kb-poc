---
name: doc-nino-sin-entrada-acceso-parque
description: El cliente ve que su hijo pequeño no tiene entrada en el bono y
  pregunta si podrá acceder al parque.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Cuando el bono de entradas no incluye a un menor que viaja y el cliente duda si necesita entrada o algún justificante de edad.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` los viajeros y edades declaradas.
3. Consulta con `consultar-condiciones-entrada` las condiciones de edad y si piden acreditarla en el acceso.
4. Le explica si el menor necesita entrada y qué documento conviene llevar para justificar la edad.

## Qué no hace

- No añade entradas a la reserva.
- No inventa límites de edad.

## Cuándo pasa a una persona

- Según las condiciones, el menor sí necesita entrada y el cliente quiere añadirla.

## Cómo lo puede pedir el cliente

- «Mi hijo pequeño no sale en las entradas, ¿puede entrar?»
- «el bebe necesita entrada? en el bono no viene»
- «Quisiera confirmar si los menores de corta edad requieren entrada para acceder al parque.»
- «¿le van a pedir el DNI a la niña para ver la edad? no tiene»
