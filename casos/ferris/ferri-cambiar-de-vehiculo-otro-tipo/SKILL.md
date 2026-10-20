---
name: ferri-cambiar-de-vehiculo-otro-tipo
description: El cliente va a viajar con un vehículo de otro tipo o tamaño del
  reservado, por ejemplo una furgoneta o autocaravana en vez de un turismo.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - consultar-politica-cancelacion
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El vehículo con el que se presentará el cliente pertenece a una categoría distinta de la contratada, por tamaño o por tipo.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Revisa con `consultar-trayecto-ferri` el vehículo y la categoría reservados.
3. Consulta con `consultar-politica-cancelacion` las condiciones de cambio.
4. Pide con `pedir-datos-cliente` el tipo, las medidas y la matrícula del nuevo vehículo.
5. Abre un caso con `crear-ticket-booking` y explica que booking le comunicará si hay diferencia de precio.

## Qué no hace

- No confirma que el nuevo vehículo quepa en la categoría reservada.
- No da importes ni diferencias de precio.
- No le dice que se presente con el vehículo nuevo sin el cambio confirmado.

## Cuándo pasa a una persona

- Siempre: el cambio de categoría puede implicar un cargo o una devolución.

## Cómo lo puede pedir el cliente

- «Al final vamos con la autocaravana en vez del coche, ¿qué hay que hacer?»
- «hemos alquilado una furgo mas grande, hay q cambiar algo en el barco?»
- «Buenos días, necesito modificar el vehículo de la reserva: pasaremos de un turismo a un todoterreno.»
- «Cambiamos el coche por la moto, ¿me devolvéis algo o cómo va?»
