---
name: doc-servicio-extra-no-figura-bono
description: El cliente pagó un servicio adicional y no aparece en el bono, por
  ejemplo aparcamiento o salida tardía.
metadata:
  area: documentacion-y-bonos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-pagos
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando un extra contratado y pagado no consta en el bono y el cliente teme que se lo vuelvan a cobrar en destino.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que es el titular de la reserva.
2. Revisa con `consultar-reserva` si el extra figura entre los servicios contratados.
3. Consulta con `consultar-pagos` si consta pagado.
4. Confirma con `consultar-bonos` que el bono es el vigente.
5. Abre `crear-ticket-booking` con el extra, lo que consta en reserva y pagos y lo que falta en el bono.

## Qué no hace

- No promete reembolso si se lo cobran en destino.
- No añade extras a la reserva.

## Cuándo pasa a una persona

- Siempre: hay un servicio pagado en juego y booking tiene que verificarlo con el proveedor.

## Cómo lo puede pedir el cliente

- «Pagué el parking y no sale en el bono»
- «contrate la salida tarde y no aparece por ningun lado»
- «Un servicio adicional abonado no figura en la documentación emitida.»
- «si no pone lo del aparcamiento, ¿me lo van a cobrar otra vez allí?»
