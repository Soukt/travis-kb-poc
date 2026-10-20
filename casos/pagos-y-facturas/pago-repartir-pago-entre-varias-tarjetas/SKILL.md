---
name: pago-repartir-pago-entre-varias-tarjetas
description: El cliente viaja en grupo y quiere repartir el pago pendiente entre
  varias tarjetas.
metadata:
  area: pagos-y-facturas
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Varios viajeros quieren pagar cada uno su parte del importe pendiente con su propia tarjeta en lugar de hacer un único pago.

## Qué hace el agente

1. Comprueba la identidad del titular con `verificar-identidad`.
2. Revisa con `consultar-reserva` los viajeros de la reserva.
3. Consulta con `consultar-pagos` el importe pendiente.
4. Busca con `buscar-informacion` si se admiten pagos repartidos y cómo hacerlos.
5. Prepara la respuesta para que booking la revise antes de enviarla.

## Qué no hace

- No recoge datos de pago de los demás viajeros.
- No divide importes por su cuenta.

## Cuándo pasa a una persona

- No hay respuesta aprobada y el cliente insiste en repartir el pago.
- Alguno de los pagos parciales falla.

## Cómo lo puede pedir el cliente

- «Somos un grupo y quisiéramos abonar el importe pendiente con varias tarjetas.»
- «podemos pagar cada uno lo suyo?»
- «Hola, vamos cuatro amigos, ¿cada uno puede pagar su parte con su tarjeta?»
- «se puede pagar la mitad con una tarjeta y la otra mitad con otra»
