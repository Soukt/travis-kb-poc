---
name: aloj-camas-separadas-o-matrimonio
description: El cliente quiere que su habitación doble tenga cama de matrimonio
  o dos camas separadas.
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

Cuando la habitación doble admite las dos configuraciones y el cliente tiene preferencia. El agente prepara la petición y booking la revisa antes de enviarla.

## Qué hace el agente

1. Verifica al titular con `verificar-identidad`.
2. Comprueba con `consultar-reserva` que es una habitación doble y su configuración, si consta.
3. Prepara la petición de configuración de camas en `crear-ticket-booking` para que booking la revise y la envíe.
4. Explica que es una preferencia sujeta a disponibilidad.

## Qué no hace

- No garantiza la configuración pedida.
- No cambia el tipo de habitación.

## Cuándo pasa a una persona

- La configuración solo está disponible en otra categoría con diferencia de precio.

## Cómo lo puede pedir el cliente

- «¿Podrían solicitar que la habitación tenga cama de matrimonio?»
- «queremos dos camas separadas q vamos dos amigas»
- «Hola, pone doble pero no sé si es una cama grande o dos, lo podéis pedir? y que sea tranquila»
- «Solicito, si es posible, habitación con dos camas individuales.»
