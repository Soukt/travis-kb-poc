---
name: ent-bono-todavia-no-disponible
description: El cliente ve que el bono de sus entradas aún no está disponible en
  su zona de cliente y quiere saber por qué y cuándo lo tendrá.
metadata:
  area: entradas-y-parques
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Aplica cuando la reserva está confirmada pero el bono de las entradas aparece como pendiente de emisión. No hay pagos pendientes que lo bloqueen.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-reserva` el estado de la reserva y la fecha de la visita.
3. Revisa con `consultar-bonos` el estado del bono y si consta una fecha prevista de disponibilidad.
4. Explica que la reserva es válida y le informa de cuándo estará disponible el bono según lo que devuelve la acción.

## Qué no hace

- No inventa una fecha de emisión que no devuelvan las acciones.
- No da la reserva por cancelada ni por errónea por no tener aún el bono.

## Cuándo pasa a una persona

- La fecha de la visita está muy próxima y el bono sigue sin emitirse.
- El bono figura con un estado de error o anulado.

## Cómo lo puede pedir el cliente

- «En mi zona de cliente pone que el bono está pendiente. ¿Es normal?»
- «pague hace dias y sigo sin las entradas, cuando las teneis?»
- «Buenas, ¿por qué no puedo descargar todavía el bono del parque si la reserva está confirmada?»
- «Hola, la reserva sale confirmada pero el bono no aparece. ¿Me tengo que preocupar? Viajamos pronto.»
