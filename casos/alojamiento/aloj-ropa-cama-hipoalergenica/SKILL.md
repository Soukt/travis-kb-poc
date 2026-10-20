---
name: aloj-ropa-cama-hipoalergenica
description: El cliente tiene alergia a ácaros o plumas y pide almohadas o ropa
  de cama hipoalergénica.
metadata:
  area: alojamiento
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

Cuando el cliente necesita ropa de cama especial por alergia. El agente prepara la petición y booking la revisa antes de enviarla.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` el alojamiento y la habitación.
3. Prepara la petición de ropa de cama hipoalergénica en `crear-ticket-booking` para que booking la revise y la envíe.
4. Recomienda recordarlo también en recepción al llegar.

## Qué no hace

- No garantiza una habitación libre de alérgenos.
- No pide información médica.

## Cuándo pasa a una persona

- El alojamiento no puede atender la petición y el cliente quiere cambiar de habitación o de alojamiento.

## Cómo lo puede pedir el cliente

- «Soy alérgico a las plumas, ¿pueden pedir almohadas sin plumas?»
- «tengo alergia a los acaros, q no haya moqueta porfa»
- «Hola, hay almohadas especiales? las normales me dan alergia. Y la habitación se puede ventilar?»
- «Solicito ropa de cama hipoalergénica para mi estancia.»
