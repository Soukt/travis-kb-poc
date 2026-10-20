---
name: doc-reserva-no-aparece-zona-cliente
description: El cliente entra en su zona de cliente y no ve la reserva que ha
  hecho ni sus bonos.
metadata:
  area: documentacion-y-bonos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente tiene el localizador pero la reserva no aparece en su zona de cliente, por ejemplo porque reservó con otro email o sin iniciar sesión.

## Qué hace el agente

1. Comprueba con `verificar-identidad` la titularidad con el localizador y el email de la reserva.
2. Revisa con `consultar-reserva` que la reserva existe y su estado.
3. Busca con `buscar-informacion` cómo se vinculan las reservas a la zona de cliente y qué puede hacer el cliente para verla.
4. Prepara la respuesta con esa explicación para que booking la revise antes de enviarla.

## Qué no hace

- No une ni traspasa reservas entre cuentas.
- No revela con qué otra cuenta o email está vinculada la reserva si la identidad no está verificada.

## Cuándo pasa a una persona

- La reserva está vinculada a un email que el cliente no reconoce.
- El cliente pide unir reservas de varias cuentas.

## Cómo lo puede pedir el cliente

- «No me aparece la reserva en mi área de cliente»
- «tengo el localizador pero en mi cuenta no sale nada»
- «Al acceder a mi perfil no figura la reserva que efectué recientemente.»
- «¿Por qué no veo mi viaje en la web? Lo reservé desde el móvil sin entrar en la cuenta»
