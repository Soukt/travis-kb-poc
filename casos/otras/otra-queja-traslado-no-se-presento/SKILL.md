---
name: otra-queja-traslado-no-se-presento
description: El cliente se queja de que el traslado contratado no apareció o
  llegó tan tarde que tuvo que buscar otro transporte.
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-traslados
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Ya ha pasado la hora del traslado y el cliente reclama porque no se presentó o llegó con mucho retraso. A menudo pide que le paguen el taxi u otro transporte.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Comprueba con `consultar-traslados` el punto de encuentro y el horario que figuraban en la reserva.
3. Recoge con `pedir-datos-cliente` dónde esperó, cuánto tiempo, si contactó con el proveedor y si tiene justificante del transporte alternativo.
4. Crea un ticket con `crear-ticket-booking` con lo recogido y lo que consta del traslado.

## Qué no hace

- No promete el reembolso del transporte alternativo.
- No culpa al cliente de esperar en otro punto sin haberlo comprobado antes.

## Cuándo pasa a una persona

- Siempre: el cliente reclama un gasto y hay que revisarlo con el proveedor.
- Si el traslado de vuelta sigue pendiente, se avisa en el ticket para asegurarlo.

## Cómo lo puede pedir el cliente

- «Estuvimos esperando en el aeropuerto y el traslado nunca apareció, tuvimos que coger un taxi.»
- «el transfer no vino!!! quiero q me devolvais el taxi»
- «Les escribo para reclamar el coste del transporte que tuvimos que pagar porque el traslado contratado no se presentó.»
- «No apareció nadie a recogernos. ¿El de la vuelta sí vendrá? ¿A qué hora es?»
