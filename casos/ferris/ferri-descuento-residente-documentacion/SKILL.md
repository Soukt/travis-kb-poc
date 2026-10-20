---
name: ferri-descuento-residente-documentacion
description: El cliente tiene un descuento de residente o de familia numerosa en
  su billete de barco y pregunta qué tiene que acreditar al embarcar.
metadata:
  area: ferris
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

La reserva tiene aplicada una bonificación que exige justificarla en el puerto y el cliente no sabe qué documento le pedirán.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-reserva` qué viajeros tienen la bonificación aplicada.
3. Comprueba con `consultar-trayecto-ferri` la ruta y la naviera.
4. Busca con `buscar-informacion` la documentación aprobada para acreditar ese descuento.
5. Prepara la respuesta para que booking la revise antes de enviarla.

## Qué no hace

- No aplica ni quita descuentos.
- No asegura que un documento distinto del aprobado sirva.

## Cuándo pasa a una persona

- El cliente no tiene la documentación y podría tener que pagar la diferencia.
- El descuento no figura en la reserva y el cliente cree que le corresponde.

## Cómo lo puede pedir el cliente

- «Tengo el descuento de residente, ¿qué tengo que enseñar en el puerto?»
- «con el carnet de familia numerosa vale o piden algo mas?»
- «Buenas tardes, ¿el certificado de residencia debe estar vigente en la fecha del viaje?»
- «Se me ha caducado el título de familia numerosa, ¿me van a cobrar más al embarcar?»
