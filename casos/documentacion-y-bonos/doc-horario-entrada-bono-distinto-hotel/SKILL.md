---
name: doc-horario-entrada-bono-distinto-hotel
description: El cliente ve que el horario de entrada que indica el bono no
  coincide con el que le ha dicho el alojamiento.
metadata:
  area: documentacion-y-bonos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-bonos
    - consultar-horarios-hotel
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente encuentra horarios distintos de entrada o salida entre el bono y lo que ha visto o le han dicho en el alojamiento.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Confirma con `consultar-bonos` que el bono es el vigente.
3. Consulta con `consultar-horarios-hotel` los horarios de entrada y salida y si admite llegada tarde.
4. Prepara una respuesta con los horarios que devuelve la acción, recomendando confirmarlos al llegar, para que booking la revise.

## Qué no hace

- No negocia entradas anticipadas ni salidas tardías.
- No da por bueno un horario que no devuelva la acción.

## Cuándo pasa a una persona

- El cliente necesita entrar antes o salir más tarde y quiere gestionarlo.

## Cómo lo puede pedir el cliente

- «El bono pone una hora de entrada y el hotel me dice otra»
- «a q hora es el check in? en el bono pone una cosa y en la web del hotel otra»
- «Observo una discrepancia entre el horario de entrada del bono y el del establecimiento.»
- «¿qué hora vale, la del bono o la del hotel? y si llego antes, ¿puedo dejar las maletas?»
