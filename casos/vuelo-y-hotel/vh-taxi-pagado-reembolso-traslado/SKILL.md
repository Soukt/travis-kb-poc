---
name: vh-taxi-pagado-reembolso-traslado
description: El cliente tuvo que pagar un taxi porque el traslado incluido no
  funcionó y pide que se lo devuelvan.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-traslados
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La incidencia con el traslado ya ha pasado y el cliente reclama el gasto que tuvo que asumir.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-traslados` el traslado contratado.
3. Pide con `pedir-datos-cliente` el justificante del gasto y cómo ocurrió la incidencia.
4. Crea con `crear-ticket-booking` un ticket con la reclamación.

## Qué no hace

- No confirma el reembolso ni su importe.
- No atribuye la culpa a nadie.

## Cuándo pasa a una persona

- Siempre, porque hay dinero de por medio.

## Cómo lo puede pedir el cliente

- «Tuvimos que coger un taxi porque el traslado no vino, quiero que me lo paguéis»
- «os mando el ticket del taxi?»
- «Buenos días, solicito el reembolso del transporte que pagamos por nuestra cuenta.»
- «el traslado nunca aparecio y encima pagamos nosotros, esto como se reclama»
