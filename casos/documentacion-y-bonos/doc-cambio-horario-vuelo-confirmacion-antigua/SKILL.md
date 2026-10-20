---
name: doc-cambio-horario-vuelo-confirmacion-antigua
description: El cliente ha recibido un aviso de la aerolínea con un nuevo
  horario y su confirmación de la agencia sigue mostrando el antiguo.
metadata:
  area: documentacion-y-bonos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Cambios de horario comunicados por la aerolínea que el cliente no ve reflejados en la documentación de la reserva.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-vuelo` el horario y el estado actuales de los vuelos.
3. Consulta con `consultar-bonos` si la documentación se ha actualizado.
4. Prepara una respuesta que aclare qué horario es el vigente para que booking la revise antes de enviarla.

## Qué no hace

- No cambia vuelos ni acepta cambios en nombre del cliente.
- No da por bueno el horario del aviso si no coincide con el de la acción.

## Cuándo pasa a una persona

- El nuevo horario afecta a otros servicios de la reserva, como traslados o noches de alojamiento.
- El cliente no acepta el cambio de horario y quiere alternativas.

## Cómo lo puede pedir el cliente

- «La aerolínea me ha cambiado la hora del vuelo y vuestra confirmación pone la antigua»
- «me ha llegado un correo de q el vuelo sale antes, es verdad?»
- «He sido informado de una modificación horaria que no figura en mi documentación.»
- «el vuelo ahora llega más tarde, ¿me cambiáis el bono? ¿y el hotel me espera?»
