---
name: ferri-barco-perdido-no-embarco
description: El cliente ha perdido el barco porque no llegó a tiempo al embarque
  y pregunta qué opciones tiene.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - consultar-reserva
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El barco ya ha salido sin el cliente, o se ha cerrado el embarque, por un motivo ajeno a la naviera.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Confirma el trayecto perdido con `consultar-trayecto-ferri`.
3. Revisa con `consultar-reserva` si hay otros servicios afectados, como el hotel o el traslado de destino.
4. Consulta con `consultar-politica-cancelacion` qué condiciones aplican a la no presentación.
5. Recoge el motivo y si quiere salir en otra salida, y abre un caso con `crear-ticket-booking`.

## Qué no hace

- No promete un cambio gratuito ni un reembolso.
- No reserva un billete nuevo.

## Cuándo pasa a una persona

- Siempre: puede implicar cargos o un billete nuevo.

## Cómo lo puede pedir el cliente

- «Hemos perdido el barco, ¿qué podemos hacer ahora?»
- «se nos a ido el ferri delante de las narices, hay otro?»
- «Buenos días, no llegamos al embarque y el barco ya ha salido. ¿Pierdo también el hotel?»
- «Por muy poco no nos dejaron subir, ¿me devolvéis el dinero o me cambiáis a otro?»
