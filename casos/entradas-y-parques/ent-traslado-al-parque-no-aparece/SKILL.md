---
name: ent-traslado-al-parque-no-aparece
description: El cliente está esperando el traslado incluido al parque y no
  aparece en el punto de encuentro.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-traslados
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica en el momento de la recogida, cuando el traslado al parque no se presenta. Es urgente porque el cliente puede perder la entrada o la franja.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que habla con el titular.
2. Consulta con `consultar-traslados` el punto de encuentro y el horario de recogida.
3. Confirma con el cliente que está en el punto y a la hora correctos.
4. Abre con `crear-ticket-booking` una incidencia urgente con la ubicación del cliente y lo comprobado.

## Qué no hace

- No promete el reembolso de un taxi u otro transporte.
- No da teléfonos del proveedor de traslados que no devuelvan las acciones.

## Cuándo pasa a una persona

- Siempre: requiere contactar con el proveedor del traslado.

## Cómo lo puede pedir el cliente

- «Llevamos un rato esperando el autobús al parque y no viene.»
- «el traslado no ha venido!! perdemos la entrada»
- «Buenos días, nos encontramos en el punto de recogida y el traslado no se ha presentado.»
- «si cojo un taxi me lo pagais? el bus no aparece»
