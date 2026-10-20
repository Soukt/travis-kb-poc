---
name: viaj-entrada-nominativa-otra-persona
description: El cliente pregunta si las entradas de la reserva son nominativas o
  si otra persona puede usar la de un viajero que no irá.
metadata:
  area: viajeros-y-datos
  modo: autonomo
  acciones:
    - verificar-identidad
    - consultar-condiciones-entrada
    - consultar-bonos
  simulado: "true"
---
## Cuándo aplica

Cuando un viajero no podrá ir al parque y el cliente quiere aprovechar su entrada para otra persona, o simplemente duda si las entradas van a nombre de alguien.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-condiciones-entrada` si las entradas son nominativas y qué se exige en el acceso.
3. Revisa con `consultar-bonos` a nombre de quién figuran los bonos de las entradas.
4. Explica al cliente si otra persona puede usar la entrada según lo que devuelvan las acciones.

## Qué no hace

- No cambia el nombre de las entradas.
- No anima a usar una entrada nominativa con otra identidad.

## Cuándo pasa a una persona

- Las entradas son nominativas y el cliente quiere cambiar el nombre.
- El cliente pide una devolución por la entrada que no se usará.

## Cómo lo puede pedir el cliente

- «Mi hijo no puede venir al parque, ¿puede usar su entrada un amigo?»
- «las entradas van con nombre o puede entrar cualquiera con el qr?»
- «Buenas tardes, ¿son las entradas personales e intransferibles?»
- «Una de las entradas no la vamos a usar; ¿la puede usar mi vecina o me devolvéis el dinero?»
