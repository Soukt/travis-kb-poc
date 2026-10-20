---
name: ent-nombre-erroneo-en-el-bono
description: El cliente detecta que el nombre de un viajero aparece mal escrito
  o equivocado en el bono de las entradas.
metadata:
  area: entradas-y-parques
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-reserva
    - consultar-bonos
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Aplica cuando hay una errata o un nombre equivocado en las entradas y el cliente teme que no le dejen acceder. La corrección depende del proveedor de las entradas.

## Qué hace el agente

1. Verifica con `verificar-identidad` que es el titular de la reserva.
2. Consulta con `consultar-reserva` cómo figuran los viajeros en la reserva.
3. Revisa con `consultar-bonos` cómo aparece el nombre en el bono emitido.
4. Abre con `crear-ticket-booking` la solicitud de corrección con el nombre actual y el correcto que indica el cliente.

## Qué no hace

- No corrige el nombre por su cuenta ni reemite el bono.
- No asegura que la errata no tendrá consecuencias en el acceso.

## Cuándo pasa a una persona

- Siempre que haya que corregir datos de un viajero en las entradas.

## Cómo lo puede pedir el cliente

- «En el bono pone mal el apellido de mi hijo. ¿Se puede corregir?»
- «habeis puesto mi nombre mal escrito en las entradas, me dejaran entrar?»
- «Buenas tardes, he visto que uno de los nombres de las entradas no corresponde a ninguno de nosotros.»
- «Hola, hay una letra cambiada en mi nombre en el bono del parque. Lo cambiais vosotros o lo hablo en taquilla?»
