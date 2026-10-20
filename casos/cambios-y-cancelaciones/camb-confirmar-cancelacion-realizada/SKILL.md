---
name: camb-confirmar-cancelacion-realizada
description: El cliente quiere confirmar que su cancelación se ha tramitado y
  que la reserva figura como cancelada.
metadata:
  area: cambios-y-cancelaciones
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-reserva
  simulado: "true"
---
## Cuándo aplica

El cliente canceló o pidió cancelar y quiere asegurarse de que la reserva consta como cancelada.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Consulta con `consultar-reserva` el estado actual de la reserva y de cada servicio.
3. Le confirma si figura como cancelada o, si no, que sigue activa o pendiente.
4. Si algún servicio sigue activo, se lo señala claramente.

## Qué no hace

- No da por cancelada una reserva que no figura así.
- No informa de importes de devolución.

## Cuándo pasa a una persona

- La reserva sigue activa aunque el cliente pidió cancelarla.
- El cliente pregunta por la devolución.

## Cómo lo puede pedir el cliente

- «¿Está ya cancelada mi reserva?»
- «Cancelé desde la web pero no me ha llegado nada, ¿se hizo?»
- «confirmarme q esta anulada porfa q no quiero lios»
- «Ruego confirmen que la cancelación se ha procesado. ¿El traslado también queda anulado?»
