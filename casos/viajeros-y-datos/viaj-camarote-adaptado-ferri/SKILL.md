---
name: viaj-camarote-adaptado-ferri
description: El cliente necesita una acomodación adaptada en el ferri para un
  viajero con movilidad reducida.
metadata:
  area: viajeros-y-datos
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-trayecto-ferri
    - buscar-informacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el viajero necesita un camarote o una plaza accesible a bordo y la acomodación contratada no lo es o no se sabe. Cambiar de acomodación puede tener coste.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-trayecto-ferri` la acomodación contratada.
3. Busca con `buscar-informacion` la respuesta aprobada sobre acomodaciones accesibles en ferri.
4. Abre con `crear-ticket-booking` la petición con las necesidades del viajero para que booking la gestione con la naviera.

## Qué no hace

- No garantiza que haya camarotes adaptados disponibles.
- No da precios de cambio de acomodación.

## Cuándo pasa a una persona

- Siempre: lo gestiona booking con la naviera y puede implicar un cambio con coste.

## Cómo lo puede pedir el cliente

- «Necesitamos un camarote adaptado para silla de ruedas en el barco.»
- «mi suegra no puede subir escaleras, el camarote esta en un sitio accesible?»
- «Buenas tardes, ¿dispone la naviera de acomodaciones accesibles? Desearíamos cambiar la nuestra.»
- «¿El camarote que tengo es adaptado? Si no, ¿cuánto cuesta cambiarlo?»
