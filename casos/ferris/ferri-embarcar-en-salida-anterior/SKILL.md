---
name: ferri-embarcar-en-salida-anterior
description: El cliente llega al puerto con mucha antelación y quiere saber si
  puede embarcar en una salida anterior a la suya ese mismo día.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente ya está en el puerto o cerca y ve que hay un barco que sale antes que el suyo.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa la salida contratada con `consultar-trayecto-ferri`.
3. Consulta con `consultar-politica-cancelacion` las condiciones de cambio del billete.
4. Explica que el cambio no se puede confirmar desde el chat y abre un caso con `crear-ticket-booking`.

## Qué no hace

- No le dice que se presente a otra salida sin un billete válido para ella.
- No confirma el cambio ni su coste.

## Cuándo pasa a una persona

- Siempre: es un cambio fuera de lo contratado que puede tener coste.

## Cómo lo puede pedir el cliente

- «Ya estamos en el puerto y hay un barco antes que el nuestro, ¿podemos coger ese?»
- «hemos llegado super pronto, nos podeis pasar al ferri de antes?»
- «Buenos días, ¿existe la posibilidad de adelantar la salida al primer barco de la mañana?»
- «Si me cambio al barco anterior, ¿pierdo el camarote? ¿Me cobran algo?»
