---
name: doc-bono-bloqueado-pago-pendiente
description: El cliente no puede obtener el bono porque la reserva tiene un pago
  pendiente y pregunta qué ocurre.
metadata:
  area: documentacion-y-bonos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-bonos
    - consultar-pagos
  simulado: "true"
---
## Cuándo aplica

Cuando el bono no se ha emitido porque la reserva se paga en varios plazos o tiene un cobro pendiente.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-bonos` que el motivo del bloqueo es el pago pendiente.
3. Consulta con `consultar-pagos` qué queda pendiente y la próxima fecha de cobro, y se lo comunica tal como lo devuelve la acción.
4. Le explica que el bono se emitirá cuando el pago quede completado.

## Qué no hace

- No cobra ni gestiona pagos.
- No libera el bono sin que el pago esté completado.
- No ofrece aplazamientos ni cambios en el calendario de cobros.

## Cuándo pasa a una persona

- El cliente asegura haber pagado y el sistema sigue mostrando el pago como pendiente.
- El cliente pide una excepción para recibir el bono antes de pagar.

## Cómo lo puede pedir el cliente

- «¿Por qué no tengo el bono si ya he pagado una parte?»
- «me dice q tengo un pago pendiente y no me da el bono»
- «Quisiera saber si debo abonar algo más para recibir la documentación.»
- «ya pague todo y sigue sin salir el bono, que pasa aqui»
