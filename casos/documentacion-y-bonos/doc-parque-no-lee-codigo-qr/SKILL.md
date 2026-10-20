---
name: doc-parque-no-lee-codigo-qr
description: El cliente está en la entrada del parque y el código de sus
  entradas no se lee o da error.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-bonos
    - consultar-condiciones-entrada
    - reenviar-bono
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Incidencia en el acceso: el lector del parque no reconoce el código o lo da por no válido.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-bonos` que las entradas son las vigentes y no han sido anuladas.
3. Consulta con `consultar-condiciones-entrada` el procedimiento de canje por si hay que pasar por taquilla.
4. Le reenvía las entradas con `reenviar-bono` por si la copia que presenta está dañada.
5. Si sigue sin funcionar, abre `crear-ticket-booking` con prioridad indicando que el cliente está en la puerta.

## Qué no hace

- No le dice que compre entradas nuevas.
- No promete reembolsos.

## Cuándo pasa a una persona

- El código sigue sin leerse tras el reenvío o el parque dice que las entradas ya se usaron o no existen.

## Cómo lo puede pedir el cliente

- «Estoy en la puerta del parque y no me lee el código»
- «el QR da error!! estamos todos esperando en la entrada»
- «El sistema de acceso rechaza las entradas adquiridas a través de su agencia.»
- «me dicen que la entrada no es válida, ¿qué hago? ¿la compro otra vez?»
