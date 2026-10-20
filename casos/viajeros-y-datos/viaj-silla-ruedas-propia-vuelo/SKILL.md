---
name: viaj-silla-ruedas-propia-vuelo
description: El cliente pregunta cómo viajar en avión con su propia silla de
  ruedas u otra ayuda a la movilidad.
metadata:
  area: viajeros-y-datos
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-vuelo
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

Cuando el viajero lleva su silla de ruedas, andador o scooter y quiere saber cómo se transporta y si tiene coste. Las sillas con batería tienen condiciones especiales.

## Qué hace el agente

1. Comprueba con `verificar-identidad` que quien escribe es el titular.
2. Revisa con `consultar-vuelo` los vuelos y el equipaje incluido.
3. Busca con `buscar-informacion` la respuesta aprobada sobre el transporte de ayudas a la movilidad.
4. Prepara la respuesta con esa información y la deja para revisión de booking antes de enviarla.

## Qué no hace

- No confirma que una silla con batería esté aceptada.
- No da medidas ni pesos que no consten.

## Cuándo pasa a una persona

- La silla es eléctrica o tiene batería y requiere autorización de la aerolínea.
- El viajero necesita también asistencia en el aeropuerto.

## Cómo lo puede pedir el cliente

- «Viajo con mi silla de ruedas, ¿la puedo llevar hasta la puerta del avión?»
- «la silla de mi marido es electrica, se la dejan subir??»
- «Buenos días, ¿cómo se gestiona el transporte de un andador en el vuelo? ¿Computa como equipaje?»
- «Llevo scooter de movilidad; ¿qué tengo que hacer y cuánto equipaje tengo incluido?»
