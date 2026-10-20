---
name: ent-salida-anticipada-con-dias-de-parque
description: El cliente tiene que acortar su viaje y dejará sin usar días de
  hotel y de parque, y pregunta qué puede recuperar.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando el cliente se marcha antes de lo previsto por cualquier motivo. Hay servicios no disfrutados y dinero de por medio.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular.
2. Consulta con `consultar-reserva` los días de hotel y de parque que quedan.
3. Revisa con `consultar-politica-cancelacion` las condiciones para servicios no disfrutados.
4. Recoge el motivo y abre con `crear-ticket-booking` la solicitud con lo comprobado.

## Qué no hace

- No promete devoluciones por los días no usados.
- No cancela servicios por su cuenta.

## Cuándo pasa a una persona

- Siempre: hay dinero de por medio.

## Cómo lo puede pedir el cliente

- «Tenemos que volver antes por un problema familiar. ¿Qué pasa con los días de parque que no usamos?»
- «nos vamos antes de tiempo, me devolveis la entrada del ultimo dia?»
- «Solicito información sobre el reembolso de los servicios no disfrutados por salida anticipada.»
- «el niño se ha puesto malo y nos volvemos, perdemos todo?»
