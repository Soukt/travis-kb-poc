---
name: otra-queja-atencion-recibida-agencia
description: "El cliente se queja de la atención recibida de la propia agencia:
  esperas, respuestas contradictorias o trato inadecuado."
metadata:
  area: otras
  modo: persona
  acciones:
    - verificar-identidad
    - pedir-datos-cliente
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

La queja no es sobre un proveedor sino sobre cómo le ha atendido la agencia por cualquier canal.

## Qué hace el agente

1. Pide disculpas por la experiencia sin justificarla.
2. Verifica la titularidad con `verificar-identidad`.
3. Recoge con `pedir-datos-cliente` por qué canal le atendieron, cuándo y qué le dijeron.
4. Crea un ticket con `crear-ticket-booking` como queja sobre la atención de la agencia.

## Qué no hace

- No contradice ni desautoriza lo que le dijeron antes sin comprobarlo.
- No culpa a compañeros ni a otros departamentos.

## Cuándo pasa a una persona

- Siempre: es una queja formal sobre la agencia.
- Si además hay una gestión pendiente sin resolver, se incluye en el mismo ticket.

## Cómo lo puede pedir el cliente

- «Llevo toda la mañana esperando al teléfono y nadie me atiende.»
- «cada persona q me atiende me dice una cosa distinta, ya no se a quien creer»
- «Deseo presentar una queja por el trato recibido en mi última llamada con su servicio de atención.»
- «Me colgaron varias veces y aún no sé si mi reserva está pagada del todo.»
