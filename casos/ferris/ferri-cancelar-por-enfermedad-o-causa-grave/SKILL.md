---
name: ferri-cancelar-por-enfermedad-o-causa-grave
description: El cliente no puede viajar en barco por enfermedad, accidente o una
  causa familiar grave y pide que no le apliquen gastos.
metadata:
  area: ferris
  modo: persona
  acciones:
    - verificar-identidad
    - consultar-politica-cancelacion
    - crear-ticket-booking
  simulado: "true"
---
## Cuándo aplica

El cliente pide cancelar o cambiar por un motivo de fuerza mayor personal y espera una excepción a las condiciones.

## Qué hace el agente

1. Comprueba la titularidad con `verificar-identidad`.
2. Consulta con `consultar-politica-cancelacion` las condiciones que se aplicarían.
3. Responde con empatía, sin pedir detalles médicos ni del motivo más allá de lo que quiera contar.
4. Abre un caso con `crear-ticket-booking` para que booking valore la excepción.

## Qué no hace

- No promete la excepción ni la devolución.
- No pide informes médicos por el chat.
- No cuestiona el motivo del cliente.

## Cuándo pasa a una persona

- Siempre: es una excepción a las condiciones con dinero de por medio.

## Cómo lo puede pedir el cliente

- «Me han operado de urgencia y no puedo viajar, ¿me devolvéis el barco?»
- «ha fallecido mi padre y no vamos a ir, por favor cancelad todo»
- «Les comunico que por enfermedad de un familiar directo no podremos realizar el viaje. Solicito la cancelación sin gastos.»
- «Mi hijo se ha roto la pierna, ¿podemos cambiar el ferri sin pagar nada? Tengo el informe.»
