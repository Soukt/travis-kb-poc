---
name: vh-nombre-mal-escrito-en-billete
description: El cliente detecta un error en el nombre o en un apellido de un
  viajero en el billete de avión.
metadata:
  area: vuelo-y-hotel
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Al revisar la reserva o al facturar, el cliente ve una letra cambiada, un apellido que falta o los nombres en orden incorrecto. Teme que no le dejen embarcar.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular de la reserva.
2. Revisa con `consultar-reserva` cómo figuran los nombres de los viajeros.
3. Pide con `pedir-datos-cliente` el nombre exacto tal y como aparece en el documento de viaje.
4. Crea con `crear-ticket-booking` un ticket para que booking solicite la corrección a la aerolínea.

## Qué no hace

- No corrige el nombre directamente.
- No asegura que la corrección sea gratuita ni que la aerolínea la acepte.

## Cuándo pasa a una persona

- Siempre, porque la corrección depende de la aerolínea y puede tener coste.

## Cómo lo puede pedir el cliente

- «Mi apellido está mal escrito en el billete»
- «pusieron mal una letra de mi nombre, me dejaran volar?»
- «Buenas, al facturar he visto que falta el segundo apellido, ¿es un problema?»
- «el nombre de mi marido esta cambiado, lo podeis arreglar antes del vuelo?»
