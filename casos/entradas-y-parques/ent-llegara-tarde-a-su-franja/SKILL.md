---
name: ent-llegara-tarde-a-su-franja
description: El cliente avisa de que llegará tarde a la franja horaria de su
  entrada por un retraso en el viaje u otro imprevisto.
metadata:
  area: entradas-y-parques
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - consultar-condiciones-entrada
  simulado: "true"
---
## Cuándo aplica

Aplica antes de la hora de acceso, cuando el cliente ya sabe que no llegará a tiempo. Puede afectar a entradas de parque o de espectáculo con sesión.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` la fecha y el tipo de entrada.
3. Revisa con `consultar-bonos` la franja asignada.
4. Comprueba con `consultar-condiciones-entrada` qué ocurre si se llega fuera de la franja.
5. Prepara una respuesta con las opciones que dan las condiciones para que booking la revise antes de enviarla.

## Qué no hace

- No cambia la franja ni la fecha por su cuenta.
- No asegura que el parque le deje entrar fuera de su horario.

## Cuándo pasa a una persona

- Las condiciones no permiten el acceso fuera de franja y el cliente pide un cambio o una devolución.

## Cómo lo puede pedir el cliente

- «Vamos con retraso por un atasco y no llegaremos a la hora de la entrada. ¿Qué hacemos?»
- «llegamos tarde a la franja, nos van a dejar entrar?»
- «Buenas, nuestro tren va con retraso. ¿Podremos acceder al parque más tarde de la hora indicada?»
- «no llego al espectaculo a la hora, se pierde la entrada o la puedo usar en la siguiente sesion?»
