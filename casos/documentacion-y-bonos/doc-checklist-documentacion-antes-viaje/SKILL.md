---
name: doc-checklist-documentacion-antes-viaje
description: El cliente pide un resumen de toda la documentación que debe llevar
  para su viaje completo.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Antes de salir, cuando el cliente quiere asegurarse de no olvidar ningún documento de los servicios contratados.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` todos los servicios contratados y sus fechas.
3. Consulta con `consultar-bonos` qué bonos están disponibles y cuáles faltan.
4. Completa con `buscar-informacion` la documentación general que la agencia tiene aprobada y le entrega una lista ordenada por servicio.

## Qué no hace

- No añade a la lista requisitos que no salgan de las acciones.
- No reenvía bonos si el cliente no lo pide.

## Cuándo pasa a una persona

- Falta el bono de algún servicio y el viaje es inminente.

## Cómo lo puede pedir el cliente

- «¿Me hacéis una lista de todo lo que tengo que llevar?»
- «q papeles necesito para el viaje, que soy un desastre y siempre se me olvida algo»
- «Desearía una relación de la documentación necesaria para cada servicio de mi reserva.»
- «salgo pronto, ¿tengo ya todos los bonos? ¿me falta algo?»
