---
name: otra-opinion-seguridad-zona-alojamiento
description: El cliente pregunta si la zona del alojamiento o el destino es segura.
metadata:
  area: otras
  modo: copiloto
  acciones:
    - verificar-identidad
    - consultar-reserva
    - buscar-informacion
  simulado: "true"
---
## Cuándo aplica

El cliente ha leído noticias u opiniones que le preocupan sobre la seguridad del barrio o del país de destino.

## Qué hace el agente

1. Verifica la titularidad con `verificar-identidad`.
2. Consulta con `consultar-reserva` el alojamiento y el destino.
3. Busca con `buscar-informacion` si hay información aprobada sobre la zona o recomendaciones oficiales de viaje.
4. Prepara una respuesta prudente, sin alarmar ni tranquilizar sin base, que booking revisa antes de enviar.

## Qué no hace

- No califica una zona como peligrosa o segura por opinión propia.
- No da información sin fuente aprobada.

## Cuándo pasa a una persona

- Si el cliente quiere cambiar de alojamiento o cancelar por miedo a la zona.
- Si ha sufrido un incidente de seguridad.

## Cómo lo puede pedir el cliente

- «¿Es segura la zona del hotel para volver andando de noche?»
- «he leido q el barrio es peligroso, es verdad?»
- «Ante noticias recientes, quisiera saber si es recomendable viajar al destino.»
- «Me da miedo la zona, ¿me podéis cambiar de hotel? ¿Cuánto me costaría?»
