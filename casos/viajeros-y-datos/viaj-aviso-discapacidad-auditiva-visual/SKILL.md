---
name: viaj-aviso-discapacidad-auditiva-visual
description: El cliente quiere avisar de que un viajero tiene discapacidad
  auditiva o visual para que el alojamiento y los traslados lo tengan en cuenta.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-servicios-alojamiento
    - consultar-traslados
  simulado: "true"
---
## Cuándo aplica

Cuando un viajero necesita, por ejemplo, avisos por escrito, alarmas visuales o ayuda para orientarse. Se trata de informar a los proveedores, no de cambiar servicios.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-reserva` los servicios del viaje.
3. Revisa con `consultar-servicios-alojamiento` la información de accesibilidad del alojamiento.
4. Si hay traslados, revisa con `consultar-traslados` cómo es la recogida.
5. Prepara los avisos para los proveedores y la respuesta al cliente, para que booking los revise antes de enviarlos.

## Qué no hace

- No promete adaptaciones que no consten.
- No pide información médica.

## Cuándo pasa a una persona

- El viajero necesita una adaptación que implica cambiar de habitación o de servicio.

## Cómo lo puede pedir el cliente

- «Soy sordo, ¿podéis avisar al hotel para que me comuniquen las cosas por escrito?»
- «mi padre es ciego, en el traslado le ayudan a subir?»
- «Buenos días, deseo informar de que uno de los huéspedes tiene discapacidad auditiva, por si disponen de alarmas visuales.»
- «Mi hija no oye bien; ¿cómo la avisará el conductor del traslado al llegar?»
