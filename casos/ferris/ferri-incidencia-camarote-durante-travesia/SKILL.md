---
name: ferri-incidencia-camarote-durante-travesia
description: El cliente está a bordo y su camarote tiene un problema, como
  suciedad, una avería o un ruido que no le deja descansar.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La incidencia ocurre durante la travesía y el cliente escribe desde el barco o justo después de desembarcar.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Confirma con `consultar-trayecto-ferri` el trayecto y el camarote.
3. Si sigue a bordo, le recomienda comunicarlo a la recepción del barco para que lo solucionen en el momento.
4. Recoge lo ocurrido y si lo comunicó a la tripulación, y abre un caso con `crear-ticket-booking`.

## Qué no hace

- No promete un cambio de camarote ni una compensación.
- No contacta con la tripulación en nombre del cliente.

## Cuándo pasa a una persona

- Siempre: queda registrado para seguimiento y posible reclamación.

## Cómo lo puede pedir el cliente

- «El aire acondicionado del camarote no funciona y hace muchísimo calor.»
- «el camarote esta sucio, las sabanas tienen manchas, q asco»
- «Buenas noches, la puerta del camarote no cierra bien y no me siento seguro.»
- «No hemos pegado ojo por el ruido de los motores. ¿Esto se puede reclamar?»
