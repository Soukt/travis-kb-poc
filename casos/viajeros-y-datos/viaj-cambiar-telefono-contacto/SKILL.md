---
name: viaj-cambiar-telefono-contacto
description: El cliente quiere actualizar el teléfono de contacto que dio al
  hacer la reserva.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente ha cambiado de número o puso uno equivocado. El teléfono se usa para avisos de última hora sobre el viaje.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` los servicios contratados, para saber a qué proveedores puede afectar el cambio.
3. Pide con `pedir-datos-cliente` el teléfono nuevo con su prefijo.
4. Prepara la actualización y la confirmación para el cliente, y las deja para que booking las revise antes de aplicarlas y enviarlas.

## Qué no hace

- No repite el número completo en la conversación.
- No confirma el cambio antes de que booking lo revise.

## Cuándo pasa a una persona

- El viaje es inminente y el cambio debe llegar a un proveedor, como el de traslados.
- El cliente no consigue verificar su identidad.

## Cómo lo puede pedir el cliente

- «He cambiado de número de móvil y quiero que lo tengáis actualizado.»
- «puse mal el telefono, me falta un numero, lo cambiais?»
- «Les ruego actualicen el teléfono de contacto de la reserva, ya que el anterior está fuera de servicio.»
- «Quiero poner otro móvil de contacto porque en el viaje usaré otra tarjeta, y también saber si tengo traslado.»
