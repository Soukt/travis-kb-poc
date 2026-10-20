---
name: pago-fallo-de-pago-al-reservar
description: El cliente tuvo un error de pago al hacer la reserva y no sabe si
  está confirmada ni si se le ha cobrado.
metadata:
  area: pagos-y-facturas
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Durante la compra el pago dio un error o la página se cerró, pero el cliente tiene un localizador o un email y no sabe si la reserva es válida.

## Qué hace el agente

1. Comprueba la identidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` el estado de la reserva.
3. Consulta con `consultar-pagos` si el pago consta como realizado.
4. Comprueba con `consultar-bonos` si se han emitido los bonos.
5. Prepara la respuesta con el estado real para que booking la revise antes de enviarla.

## Qué no hace

- No le pide que vuelva a reservar ni a pagar antes de aclarar el estado.
- No confirma la reserva si los datos no lo dicen.

## Cuándo pasa a una persona

- La reserva consta como pendiente de pago pero el cliente tiene un cargo en el banco.
- Hay más de una reserva creada en el mismo intento de compra.

## Cómo lo puede pedir el cliente

- «Durante el proceso de compra se produjo un error en el pago, pero he recibido un localizador. ¿Está confirmada?»
- «se me colgo la pagina al pagar, tengo reserva o no?»
- «Hola, me salió error al pagar pero me ha llegado un correo, ¿está bien hecha?»
- «no se si pague o no, el banco no dice nada y la web dio fallo»
