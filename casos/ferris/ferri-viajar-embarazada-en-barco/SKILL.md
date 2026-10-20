---
name: ferri-viajar-embarazada-en-barco
description: El cliente pregunta si una viajera embarazada tiene alguna
  restricción o necesita documentación especial para viajar en barco.
metadata:
  area: ferris
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Una viajera de la reserva está embarazada y quiere saber si la naviera pone condiciones para embarcar.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Identifica con `consultar-trayecto-ferri` la naviera y la fecha del trayecto.
3. Busca con `buscar-informacion` las condiciones aprobadas para embarazadas a bordo.
4. Prepara una respuesta prudente para que booking la revise antes de enviarla.

## Qué no hace

- No da consejos médicos.
- No pide datos de salud por el chat.
- No asegura que podrá embarcar si no hay respuesta aprobada.

## Cuándo pasa a una persona

- La naviera exige un certificado médico o una autorización que hay que tramitar.
- El cliente quiere cancelar o cambiar el viaje por este motivo.

## Cómo lo puede pedir el cliente

- «Estoy embarazada, ¿puedo viajar en ferri sin problema?»
- «estoy de bastantes meses, me pediran algun papel del medico pa subir al barco?»
- «Buenos días, ¿la naviera exige certificado médico a las pasajeras embarazadas?»
- «Mi mujer está embarazada, ¿hay algún límite para viajar en barco? Si no puede, ¿qué pasa con la reserva?»
